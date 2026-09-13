/* ═══════════════════════════════════════════════════════════════════
   FILIÈRE — CATALOGUE
   Rendu des cartes, filtres niche + prix, recherche, tri, et
   ouverture de la vue détaillée en panneau latéral.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var D = window.FILIERE;
  if (!D) return;

  var grille    = document.getElementById('grille-packs');
  var compteur  = document.getElementById('compteur-resultats');
  var champ     = document.getElementById('champ-recherche');
  var effacer   = document.getElementById('effacer-recherche');
  var zoneVide  = document.getElementById('cat-vide');
  var modale    = document.getElementById('modale-pack');

  if (!grille) return;

  var etat = { niches: [], prix: 'tous', q: '', tri: 'populaire' };

  var TRANCHES = {
    tous:  function () { return true; },
    p1:    function (p) { return p.prix < 150; },
    p2:    function (p) { return p.prix >= 150 && p.prix < 250; },
    p3:    function (p) { return p.prix >= 250; }
  };

  function niche(id) {
    for (var i = 0; i < D.NICHES.length; i++) if (D.NICHES[i].id === id) return D.NICHES[i];
    return { nom: '—', classe: '', hex: 'var(--signal)' };
  }

  /* ── Carte ─────────────────────────────────────────────────── */
  function gabaritCarte(p, i) {
    var n = niche(p.niche);
    return '' +
      '<button class="carte ' + n.classe + ' rev" data-pack="' + p.id + '" data-curseur="ouvrir" style="--i:' + (i % 3) + '" aria-haspopup="dialog">' +
        '<span class="carte__tete">' +
          '<span class="badge ' + n.classe + '">' + p.num + ' / ' + n.nom + '</span>' +
          (p.populaire ? '<span class="ruban">Le plus vendu</span>' : '') +
          '<span>' + p.usines + ' usines</span>' +
        '</span>' +
        '<span class="carte__titre">' + p.titre + '</span>' +
        '<span class="carte__desc">' + p.desc + '</span>' +
        '<span class="carte__specs">' +
          '<span class="carte__spec">MOQ <b>' + p.moq + '</b></span>' +
          '<span class="carte__spec">Délai <b>' + p.delai + '</b></span>' +
          '<span class="carte__spec">' + p.pays + '</span>' +
        '</span>' +
        '<span class="carte__pied">' +
          '<span class="carte__prix">' + p.prix + ' €' + (p.prixBarre ? '<s>' + p.prixBarre + ' €</s>' : '') + '</span>' +
          '<span class="carte__cta">Ouvrir le pack <i class="carte__fleche">↗</i></span>' +
        '</span>' +
      '</button>';
  }

  /* ── Filtrage ──────────────────────────────────────────────── */
  function filtrer() {
    var q = etat.q.trim().toLowerCase();
    var liste = D.PACKS.filter(function (p) {
      if (etat.niches.length && etat.niches.indexOf(p.niche) === -1) return false;
      if (!TRANCHES[etat.prix](p)) return false;
      if (q) {
        var foin = (p.nomSimple + ' ' + p.desc + ' ' + p.pays + ' ' + niche(p.niche).nom).toLowerCase();
        if (foin.indexOf(q) === -1) return false;
      }
      return true;
    });

    liste.sort(function (a, b) {
      if (etat.tri === 'prix-asc')  return a.prix - b.prix;
      if (etat.tri === 'prix-desc') return b.prix - a.prix;
      if (etat.tri === 'usines')    return b.usines - a.usines;
      return b.ventes - a.ventes;
    });

    return liste;
  }

  function rendre() {
    var liste = filtrer();
    grille.innerHTML = liste.map(gabaritCarte).join('');
    if (compteur) compteur.innerHTML = '<b>' + liste.length + '</b> pack' + (liste.length > 1 ? 's' : '') + ' sur ' + D.PACKS.length;
    if (zoneVide) zoneVide.hidden = liste.length !== 0;
    grille.hidden = liste.length === 0;

    /* Les cartes entrent en décalage, puis on relance l'observateur. */
    window.requestAnimationFrame(function () {
      grille.classList.add('vu');
    });
  }

  /* ── Contrôles ─────────────────────────────────────────────── */
  document.querySelectorAll('[data-filtre-niche]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-filtre-niche');
      if (id === 'toutes') {
        etat.niches = [];
        document.querySelectorAll('[data-filtre-niche]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b.getAttribute('data-filtre-niche') === 'toutes'));
        });
      } else {
        var k = etat.niches.indexOf(id);
        if (k === -1) etat.niches.push(id); else etat.niches.splice(k, 1);
        btn.setAttribute('aria-pressed', String(k === -1));
        var tout = document.querySelector('[data-filtre-niche="toutes"]');
        if (tout) tout.setAttribute('aria-pressed', String(etat.niches.length === 0));
      }
      rendre();
    });
  });

  document.querySelectorAll('[data-filtre-prix]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      etat.prix = btn.getAttribute('data-filtre-prix');
      document.querySelectorAll('[data-filtre-prix]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      rendre();
    });
  });

  document.querySelectorAll('[data-tri]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      etat.tri = btn.getAttribute('data-tri');
      document.querySelectorAll('[data-tri]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      rendre();
    });
  });

  if (champ) {
    champ.addEventListener('input', function () {
      etat.q = champ.value;
      if (effacer) {
        if (champ.value) effacer.setAttribute('data-actif', '');
        else effacer.removeAttribute('data-actif');
      }
      rendre();
    });
  }
  if (effacer) {
    effacer.addEventListener('click', function () {
      champ.value = ''; etat.q = '';
      effacer.removeAttribute('data-actif');
      champ.focus(); rendre();
    });
  }

  var tiroir = document.querySelector('.filtres');
  var boutonTiroir = document.querySelector('.filtres__bouton-mobile');
  if (tiroir && boutonTiroir) {
    boutonTiroir.addEventListener('click', function () {
      var ouvert = tiroir.hasAttribute('data-ouvert');
      if (ouvert) tiroir.removeAttribute('data-ouvert'); else tiroir.setAttribute('data-ouvert', '');
      boutonTiroir.setAttribute('aria-expanded', String(!ouvert));
    });
  }

  /* ── Vue détaillée ─────────────────────────────────────────── */
  var dernierDeclencheur = null;

  function gabaritDetail(p) {
    var n = niche(p.niche);
    var cols = D.COLONNES_STD;

    var contenu = (p.contenu || []).map(function (c) {
      return '<li><span class="coche">✓</span><span>' + c[0] + '</span><span class="val">' + c[1] + '</span></li>';
    }).join('');

    var entetes = cols.map(function (c) { return '<th scope="col">' + c + '</th>'; }).join('');
    var lignes = (p.lignes || []).map(function (l, i) {
      return '<tr' + (i >= 2 ? ' class="masque"' : '') + '>' + l.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    }).join('');

    return '' +
    '<div class="modale__tete">' +
      '<span class="badge badge--cadre ' + n.classe + '">' + p.num + ' / ' + n.nom + '</span>' +
      '<button class="modale__fermer" data-fermer>Fermer <span aria-hidden="true">✕</span></button>' +
    '</div>' +

    '<div class="modale__corps" data-rev data-decale=".rev">' +

      '<p class="mono-s rev" style="margin-bottom:var(--e-4)">Dossier n°' + p.num + ' — mis à jour ' + p.maj + '</p>' +
      '<h2 class="d3 rev" id="titre-modale" style="margin-bottom:var(--e-4)">' + p.titre + '</h2>' +
      '<p class="chapo rev" style="margin-bottom:var(--e-6)">' + p.desc + '</p>' +

      '<dl class="chiffres rev" style="margin-bottom:var(--e-7)">' +
        '<div><dt>Usines</dt><dd>' + p.usines + '</dd></div>' +
        '<div><dt>MOQ le plus bas</dt><dd style="font-size:1.75rem">' + p.moq + '</dd></div>' +
        '<div><dt>Délai constaté</dt><dd style="font-size:1.75rem">' + p.delai + '</dd></div>' +
        '<div><dt>Pays</dt><dd style="font-size:1.75rem">' + p.pays + '</dd></div>' +
      '</dl>' +

      '<div class="titre-section rev" style="border-bottom:1px solid var(--filet);margin-bottom:var(--e-5)">' +
        '<h3 class="t3">Ce que contient exactement ce pack</h3>' +
        '<span class="mono-s">' + (p.contenu || []).length + ' éléments</span>' +
      '</div>' +
      '<ul class="contenu-liste rev" style="margin-bottom:var(--e-7)">' + contenu + '</ul>' +

      '<div class="titre-section rev" style="border-bottom:1px solid var(--filet);margin-bottom:var(--e-5)">' +
        '<h3 class="t3">Extrait réel du fichier</h3>' +
        '<span class="mono-s">4 lignes sur ' + p.usines + '</span>' +
      '</div>' +
      '<div class="extrait rev" style="margin-bottom:var(--e-4)">' +
        '<div class="extrait__defilant"><table>' +
          '<thead><tr>' + entetes + '</tr></thead>' +
          '<tbody>' + lignes + '</tbody>' +
        '</table></div>' +
        '<div class="extrait__voile">Les ' + p.usines + ' lignes complètes sont dans le pack</div>' +
      '</div>' +
      '<p class="mono-s rev">Noms et adresses partiellement masqués sur cet aperçu.</p>' +

      '<div class="saut"></div>' +
      '<div class="comparatif rev">' +
        '<div class="comparatif__col">' +
          '<div class="comparatif__tete"><span class="comparatif__titre">Format</span></div>' +
          '<ul>' +
            '<li><span class="marque">01</span><span>Google Sheets en lecture + copie</span><span class="duree">immédiat</span></li>' +
            '<li><span class="marque">02</span><span>Export CSV et XLSX</span><span class="duree">immédiat</span></li>' +
            '<li><span class="marque">03</span><span>Notice PDF de prise en main</span><span class="duree">12 p.</span></li>' +
          '</ul>' +
        '</div>' +
        '<div class="comparatif__col comparatif__col--apres">' +
          '<div class="comparatif__tete"><span class="comparatif__titre">Garanties</span></div>' +
          '<ul>' +
            '<li><span class="marque">01</span><span>Contacts testés dans les 90 derniers jours</span><span class="duree">vérifié</span></li>' +
            '<li><span class="marque">02</span><span>Remboursement sous 14 jours</span><span class="duree">sans motif</span></li>' +
            '<li><span class="marque">03</span><span>Mises à jour incluses</span><span class="duree">12 mois</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +

    '</div>' +

    '<div class="barre-achat">' +
      '<div>' +
        '<p class="mono-s" style="margin-bottom:4px">Accès immédiat · paiement unique</p>' +
        '<p class="carte__prix" style="font-size:1.75rem">' + p.prix + ' €' + (p.prixBarre ? '<s>' + p.prixBarre + ' €</s>' : '') + '</p>' +
      '</div>' +
      '<a class="btn btn--large" href="#" data-curseur="lien"><span>Obtenir ce pack</span><span class="fleche" aria-hidden="true">↗</span></a>' +
    '</div>';
  }

  function ouvrir(id) {
    var p = null;
    for (var i = 0; i < D.PACKS.length; i++) if (D.PACKS[i].id === id) p = D.PACKS[i];
    if (!p || !modale) return;

    var panneau = modale.querySelector('.modale__panneau');
    panneau.innerHTML = gabaritDetail(p);
    panneau.scrollTop = 0;
    modale.setAttribute('data-ouvert', '');
    modale.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.body.removeAttribute('data-curseur');

    if (window.FILIERE_SITE) window.FILIERE_SITE.indexerDecalages();
    window.requestAnimationFrame(function () {
      panneau.querySelectorAll('[data-rev]').forEach(function (el) { el.classList.add('vu'); });
    });

    var fermer = panneau.querySelector('[data-fermer]');
    if (fermer) { fermer.addEventListener('click', fermerModale); fermer.focus(); }
  }

  function fermerModale() {
    if (!modale) return;
    modale.removeAttribute('data-ouvert');
    modale.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (dernierDeclencheur) dernierDeclencheur.focus();
  }

  document.addEventListener('click', function (e) {
    var carte = e.target.closest('[data-pack]');
    if (carte) { dernierDeclencheur = carte; ouvrir(carte.getAttribute('data-pack')); return; }
    if (e.target.closest('.modale__voile')) fermerModale();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modale && modale.hasAttribute('data-ouvert')) fermerModale();
  });

  /* Ouverture directe par ancre : catalogue.html#pack=cos-01 */
  function depuisAncre() {
    var m = /#pack=([\w-]+)/.exec(window.location.hash);
    if (m) window.setTimeout(function () { ouvrir(m[1]); }, 360);
  }

  /* Préfiltrage par niche : catalogue.html?niche=textile */
  function depuisUrl() {
    var m = /[?&]niche=([\w-]+)/.exec(window.location.search);
    if (!m) return;
    var btn = document.querySelector('[data-filtre-niche="' + m[1] + '"]');
    if (btn) { etat.niches = [m[1]]; btn.setAttribute('aria-pressed', 'true');
      var tout = document.querySelector('[data-filtre-niche="toutes"]');
      if (tout) tout.setAttribute('aria-pressed', 'false'); }
  }

  depuisUrl();
  rendre();
  depuisAncre();
})();
