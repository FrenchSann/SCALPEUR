/* ═══════════════════════════════════════════════════════════════════
   FILIÈRE — COMPORTEMENTS COMMUNS
   Une fonction = une animation documentée dans la DA.
   Tout respecte prefers-reduced-motion : on ne coupe pas le contenu,
   on coupe le déplacement.
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ─── 1. Révélation au scroll ───────────────────────────────────
     Un seul IntersectionObserver pour toute la page. Seuil 15 %,
     marge basse de -10 % : l'élément se révèle quand il est
     franchement entré, jamais au ras du pli. Une seule fois.     */
  function observerRevelations() {
    var cibles = document.querySelectorAll('[data-rev]');
    if (!cibles.length) return;

    if (!('IntersectionObserver' in window)) {
      cibles.forEach(function (el) { el.classList.add('vu'); });
      return;
    }

    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('vu');
        obs.unobserve(e.target);
      });
    /* threshold 0 + marge basse : un bloc plus haut que le viewport
       n'atteindrait jamais un ratio de 15 %. C'est la marge qui
       décide du déclenchement, pas la proportion visible.        */
    }, { threshold: 0, rootMargin: '0px 0px -12% 0px' });

    cibles.forEach(function (el) { obs.observe(el); });
  }

  /* ─── 2. Indexation des décalages ───────────────────────────────
     Chaque enfant d'un bloc reçoit --i : le CSS en déduit son délai.
     60 ms entre blocs, 90 ms entre lignes, 35 ms entre lettres.  */
  function indexerDecalages() {
    document.querySelectorAll('[data-decale]').forEach(function (parent) {
      var sel = parent.getAttribute('data-decale') || ':scope > *';
      var enfants;
      try { enfants = parent.querySelectorAll(sel); }
      catch (err) { enfants = parent.children; }
      Array.prototype.forEach.call(enfants, function (el, i) {
        el.style.setProperty('--i', i);
      });
    });
  }

  /* ─── 3. Découpe en lettres ─────────────────────────────────────
     Pour .rev-lettres. On préserve les espaces insécables et on
     masque le découpage aux lecteurs d'écran (aria-label).       */
  function decouperLettres() {
    document.querySelectorAll('.rev-lettres').forEach(function (el) {
      if (el.dataset.decoupe) return;
      var texte = el.textContent;
      el.setAttribute('aria-label', texte);
      el.textContent = '';
      var frag = document.createDocumentFragment();
      texte.split('').forEach(function (c, i) {
        var s = document.createElement('span');
        s.setAttribute('aria-hidden', 'true');
        s.textContent = c === ' ' ? ' ' : c;
        s.style.setProperty('--i', i);
        frag.appendChild(s);
      });
      el.appendChild(frag);
      el.dataset.decoupe = '1';
    });
  }

  /* ─── 4. En-tête collant ────────────────────────────────────────
     Au-delà de 24 px : la barre d'annonce se replie (hauteur → 0),
     le logotype passe de 23 à 20 px, un filet apparaît.
     rAF pour ne pas lire le scroll à chaque événement.           */
  function enteteCollante() {
    var entete = document.querySelector('.entete');
    if (!entete) return;
    var annonce = entete.querySelector('.entete__annonce');
    if (annonce) annonce.style.height = annonce.offsetHeight + 'px';
    var tick = false;
    function maj() {
      if (window.scrollY > 24) entete.setAttribute('data-colle', '');
      else entete.removeAttribute('data-colle');
      tick = false;
    }
    window.addEventListener('scroll', function () {
      if (tick) return;
      tick = true;
      window.requestAnimationFrame(maj);
    }, { passive: true });
    maj();
  }

  /* ─── 5. Bandeau défilant ───────────────────────────────────────
     On duplique le groupe pour que le translateX(-50%) boucle sans
     coupure. Pause au survol (géré en CSS).                      */
  function preparerMarquees() {
    document.querySelectorAll('.marquee__piste').forEach(function (piste) {
      var groupe = piste.querySelector('.marquee__groupe');
      if (!groupe || piste.children.length > 1) return;
      var copie = groupe.cloneNode(true);
      copie.setAttribute('aria-hidden', 'true');
      piste.appendChild(copie);
    });
  }

  /* ─── 6. Curseur personnalisé ───────────────────────────────────
     Un point qui suit à 1:1 (aucune latence pour le pointage) et un
     anneau qui suit en interpolation 0,14 (inertie douce).
     Au survol d'une carte, l'anneau devient un disque signal de
     88 px portant le mot « OUVRIR » et le point disparaît.
     Désactivé sur pointeur grossier et en mouvement réduit.      */
  function curseurPersonnalise() {
    if (reduit) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var point = document.createElement('div');
    point.className = 'curseur';
    var anneau = document.createElement('div');
    anneau.className = 'curseur-anneau';
    anneau.innerHTML = '<span>Ouvrir</span>';
    document.body.appendChild(point);
    document.body.appendChild(anneau);

    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var ax = cx, ay = cy;

    document.addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      point.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0) translate(-50%,-50%)';
    }, { passive: true });

    (function boucle() {
      ax += (cx - ax) * 0.14;
      ay += (cy - ay) * 0.14;
      anneau.style.transform = 'translate3d(' + ax + 'px,' + ay + 'px,0) translate(-50%,-50%)';
      window.requestAnimationFrame(boucle);
    })();

    document.addEventListener('mouseover', function (e) {
      var cible = e.target.closest('[data-curseur]');
      if (cible) document.body.setAttribute('data-curseur', cible.getAttribute('data-curseur'));
      else if (e.target.closest('a, button')) document.body.setAttribute('data-curseur', 'lien');
      else document.body.removeAttribute('data-curseur');
    });
    document.addEventListener('mouseleave', function () {
      document.body.setAttribute('data-curseur', 'masque');
    });
    document.addEventListener('mouseenter', function () {
      document.body.removeAttribute('data-curseur');
    });
  }

  /* ─── 7. Accordéon FAQ ──────────────────────────────────────────
     Un seul panneau ouvert à la fois. Le dépli passe par
     grid-template-rows 0fr → 1fr : aucune hauteur calculée en JS,
     donc aucun saut quand le contenu change.                     */
  function accordeon() {
    var items = document.querySelectorAll('.faq__item');
    if (!items.length) return;
    items.forEach(function (item) {
      var tete = item.querySelector('.faq__tete');
      var corps = item.querySelector('.faq__corps');
      if (!tete || !corps) return;
      tete.addEventListener('click', function () {
        var ouvert = item.hasAttribute('data-ouvert');
        items.forEach(function (autre) {
          autre.removeAttribute('data-ouvert');
          var t = autre.querySelector('.faq__tete');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        if (!ouvert) {
          item.setAttribute('data-ouvert', '');
          tete.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ─── 8. Compteurs ──────────────────────────────────────────────
     0 → valeur en 1 200 ms, courbe expo out, à l'entrée dans le
     viewport. Chiffres tabulaires : la largeur ne bouge pas.     */
  function compteurs() {
    var cibles = document.querySelectorAll('[data-compteur]');
    if (!cibles.length) return;
    if (reduit || !('IntersectionObserver' in window)) {
      cibles.forEach(function (el) { el.textContent = formater(+el.dataset.compteur); });
      return;
    }
    var obs = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (e) {
        if (!e.isIntersecting) return;
        animer(e.target);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    cibles.forEach(function (el) { el.textContent = '0'; obs.observe(el); });

    function formater(n) { return n.toLocaleString('fr-FR').replace(/ | /g, ' '); }
    function animer(el) {
      var fin = +el.dataset.compteur, debut = performance.now(), duree = 1200;
      (function pas(t) {
        var p = Math.min((t - debut) / duree, 1);
        var e = 1 - Math.pow(1 - p, 4);
        el.textContent = formater(Math.round(fin * e));
        if (p < 1) window.requestAnimationFrame(pas);
      })(debut);
    }
  }

  /* ─── 9. Menu mobile plein écran ────────────────────────────── */
  function menuMobile() {
    var burger = document.querySelector('.entete__burger');
    var menu = document.querySelector('.menu-mobile');
    if (!burger || !menu) return;
    burger.addEventListener('click', function () {
      var ouvert = document.body.hasAttribute('data-menu');
      if (ouvert) {
        document.body.removeAttribute('data-menu');
        document.body.style.overflow = '';
      } else {
        document.body.setAttribute('data-menu', '');
        document.body.style.overflow = 'hidden';
      }
      burger.setAttribute('aria-expanded', String(!ouvert));
    });
    menu.querySelectorAll('a').forEach(function (a, i) {
      a.style.setProperty('--i', i);
      a.addEventListener('click', function () {
        document.body.removeAttribute('data-menu');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── 10. Année du pied de page ─────────────────────────────── */
  function annee() {
    document.querySelectorAll('[data-annee]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function init() {
    indexerDecalages();
    decouperLettres();
    preparerMarquees();
    observerRevelations();
    enteteCollante();
    curseurPersonnalise();
    accordeon();
    compteurs();
    menuMobile();
    annee();
    /* Le hero se révèle sans attendre le scroll. */
    document.querySelectorAll('[data-rev-immediat]').forEach(function (el) {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () { el.classList.add('vu'); });
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.FILIERE_SITE = { observerRevelations: observerRevelations, indexerDecalages: indexerDecalages };
})();
