# FILIÈRE — Direction artistique « Le Registre »

> Boutique en ligne de packs de fournisseurs d'usines vérifiées, par niche.
> Produit immatériel, panier 95–790 €, cible créateurs de marque / e-commerçants / DNVB.

---

## 1. Le parti pris

Le produit n'a pas d'image. On ne peut ni le photographier, ni le mettre en scène.
Ce que le client achète, ce sont **deux choses** : de la **confiance** et du **temps gagné**.

Toute la direction découle de là : le site ne ressemble pas à une boutique, il ressemble à
un **registre d'enquête** — un dossier tenu à la main, daté, numéroté, tabulé. Le design ne
décore pas la donnée : il la met en scène comme preuve. Le prix se justifie par la densité
d'information visible avant l'achat, pas par une promesse.

Trois décisions structurantes :

1. **La donnée est le visuel.** Un extrait réel de tableau, avec ses colonnes et ses lignes
   partiellement masquées, vaut n'importe quelle illustration. On montre le fichier.
2. **Le filet remplace la carte.** Rien ne flotte, rien n'a d'ombre. Les blocs sont
   délimités par un filet de 1 px partagé, comme les cellules d'un tableau — c'est ce qui
   produit l'effet « archive » plutôt que l'effet « landing page ».
3. **Un seul accent, jamais décoratif.** Le jaune signal `#D8F24B` est emprunté au gilet
   d'atelier. Il ne sert qu'à trois choses : l'action principale, l'état actif, le mot mis
   en valeur. Dès qu'il décore, il perd sa fonction.

### Ce qui est banni, et pourquoi

| Banni | Raison |
|---|---|
| Glassmorphism, flou de fond | Contredit la lisibilité tabulaire ; c'est un effet de mode daté 2021. |
| Dégradés violet/bleu | Le code couleur « SaaS générique » — l'inverse exact de la promesse artisanale. |
| Illustrations 3D | Rien à illustrer : le produit est une liste. Une 3D décorative dirait « on cache qu'il n'y a rien ». |
| Icônes arrondies partout | Le rayon 0 est la signature. Une seule forme ronde subsiste : la pastille de niche. |
| Cartes toutes identiques | Chaque carte porte un filet de couleur, un numéro de dossier et un jeu de specs différent. |
| Gros boutons colorés | Le bouton primaire est un rectangle compact ; c'est la typographie qui porte la hiérarchie. |

---

## 2. Palette

### Base — trois valeurs portent 95 % de l'interface

| Jeton | Hex | Rôle |
|---|---|---|
| `--nuit` | `#0C0D0B` | Fond de page. Neutre très légèrement verdi, jamais un noir pur. |
| `--nuit-sur` | `#131510` | Surface surélevée : bandeau défilant, colonne « après », modale. |
| `--nuit-sur-2` | `#1B1E17` | Surface pressée, champ actif. |
| `--craie` | `#E9E6DD` | Texte principal, et fond des blocs inversés. |
| `--craie-vif` | `#F5F3EC` | Titres display uniquement, pour gagner un cran de contraste. |
| `--signal` | `#D8F24B` | **L'accent unique.** Action, état actif, mot accentué. |
| `--signal-sombre` | `#B4CC2F` | Survol d'un bouton déjà signal. |

Opacités de craie normalisées : `70 %` (texte secondaire), `55 %` (tertiaire), `35 %`
(métadonnée), `20 %`, et **le filet à 15,5 %** — la valeur la plus utilisée du système.

### Accents secondaires de niche

Huit teintes **désaturées** (S ≤ 55 %) pour que le catalogue respire la variété sans
concurrencer le signal. Elles n'apparaissent **jamais en aplat ni en texte** : uniquement en
pastille de 7 px et en filet de 2 px en tête de carte.

| N° | Niche | Hex | Intention |
|---|---|---|---|
| 01 | Maroquinerie | `#B4763C` | Tan, cuir tanné végétal |
| 02 | Sacs & bagagerie | `#C2542F` | Rouille, toile technique |
| 03 | Jouets | `#6FA8C7` | Bleu papier, gouache |
| 04 | Cosmétique & parfum | `#D97BA0` | Rose poudre |
| 05 | Textile & PAP | `#79B58C` | Vert lin |
| 06 | Bijouterie | `#E0C060` | Or pâle |
| 07 | Mobilier & déco | `#C08A6A` | Terracotta |
| 08 | Électronique | `#9B8FD1` | Lavande froide |

Sémantique : aucune couleur nouvelle. Succès = vert lin, attention = or pâle, erreur = rouille.

**Contrastes** — craie/nuit : 14,8:1 · signal/nuit : 13,9:1 · nuit/signal : 13,9:1.
Aucun texte sous 4,5:1.

---

## 3. Typographie

Trois familles, trois rôles stricts. Toutes sous licence SIL Open Font, toutes sur Google Fonts.

| Famille | Rôle | Règle d'usage |
|---|---|---|
| **Archivo** (variable, `wdth` 62–125, `wght` 300–900) | Structure et voix | L'axe de chasse est un **outil graphique**, pas un réglage de confort. |
| **Instrument Serif** (italique) | L'accent | **Un mot par titre, jamais plus.** Jamais en corps de texte. |
| **IBM Plex Mono** | La donnée | MOQ, délais, prix, références, labels, boutons. C'est elle qui rend le produit crédible. |

```
https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap
```

### Échelle display — fluide, non linéaire, 1440 → 390

| Jeton | Valeur | Interligne | Approche | Réglage |
|---|---|---|---|---|
| `--t-d1` | `clamp(3.05rem, 9vw, 8.25rem)` — 48,8 → 132 px | 0,86 | −0,035em | wdth 112 / wght 800 |
| `--t-d2` | `clamp(2.4rem, 5.6vw, 5rem)` — 38,4 → 80 px | 0,86 | −0,035em | wdth 105 / wght 800 |
| `--t-d3` | `clamp(1.85rem, 3.4vw, 3rem)` — 29,6 → 48 px | 0,86 | −0,025em | wdth 100 / wght 700 |

### Échelle texte — base 16, ratio 1,25 (tierce majeure)

| Jeton | px | Interligne | Usage |
|---|---|---|---|
| `--t-t1` | 32 | 1,04 | Titre de vue détaillée |
| `--t-t2` | 24 | 1,04 | Titre de carte de pack |
| `--t-t3` | 19 | 1,32 | Sous-titre, question de FAQ |
| `--t-l` | 18 | 1,55 | Chapô |
| `--t-m` | 16 | 1,62 | Corps |
| `--t-s` | 14 | 1,6 | Corps secondaire |

### Échelle mono — toujours capitales, sauf `mono-l`

| Jeton | px | Interlettrage | Usage |
|---|---|---|---|
| `--t-mono-l` | 13 | 0,02em | Données de tableau, bas de casse |
| `--t-mono-m` | 11,5 | 0,14em | Labels, boutons, navigation |
| `--t-mono-s` | 10,5 | 0,18em | Métadonnées, numéros de dossier |

### La chasse comme signature

Le contraste principal du site ne vient ni de la couleur ni de la taille, mais de la
**chasse** : `TROUVEZ L'USINE. ` en wdth 112 face à `PAS` en wdth 62, dans le même mot-titre.
C'est reproductible, gratuit, et personne d'autre ne le fait dans cette catégorie.

---

## 4. Espacement, grille, rayons, relief

**Espacement** — base 4 px : `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 160`.
Règle de saut : intérieur de composant ≤ 24, entre composants 32–64, entre sections 96–160.

**Grille** — desktop : 12 colonnes, gouttière 24, marge 48, conteneur 1440.
Mobile : 4 colonnes, gouttière 16, marge 20. **Les filets verticaux sont visibles** à 5,5 %
d'opacité : la grille se montre, discrètement.

**Rayons** — `0` partout. Deux exceptions, et deux seulement : `2px` sur les champs de saisie
(affordance de frappe), `999px` sur les pastilles de niche et le curseur.

**Relief** — **aucune ombre portée.** Le relief vient du filet de 1 px et de l'inversion de
fond. Une seule ombre existe dans le système, réservée à la modale et au tiroir mobile :
`0 24px 48px -32px rgba(0,0,0,.9)`.

**Texture** — grain SVG `feTurbulence` (baseFrequency .9, 3 octaves), 28 % d'opacité, en
`overlay`, fixé au viewport. Jamais de dégradé coloré ; le seul dégradé du site est le voile
noir qui estompe le bas de l'extrait de tableau.

---

## 5. Principes d'animation

**Cinq durées, trois courbes, trois décalages. Rien d'autre.**

| Jeton | Durée | Usage |
|---|---|---|
| `--d-micro` | 160 ms | Focus, pression, bascule de filtre |
| `--d-etat` | 260 ms | Survol, inversion de carte, balayage de bouton |
| `--d-composant` | 420 ms | Accordéon, tiroir, panneau de détail |
| `--d-reveal` | 720 ms | Révélation d'un titre |
| `--d-sequence` | 900 ms | Ouverture du hero |
| `--d-marquee` | 34 s | Un tour de bandeau défilant |

| Courbe | Valeur | Usage |
|---|---|---|
| `--c-entree` | `cubic-bezier(.16,1,.3,1)` | Tout ce qui arrive (expo out) |
| `--c-sortie` | `cubic-bezier(.55,0,1,.45)` | Tout ce qui part |
| `--c-doux` | `cubic-bezier(.65,0,.35,1)` | Aller-retour de survol |

Décalages : **60 ms** entre blocs · **90 ms** entre lignes de titre · **35 ms** entre lettres.

### Les règles qui rendent ça élégant plutôt que bruyant

- **Amplitude plafonnée** : 24 px de translation maximum, 1,03 d'échelle maximum.
- **Le texte est lisible dès la première frame** : on anime le masque, la chasse et la
  position — jamais la couleur ni le flou du texte.
- **Une seule fois** : chaque révélation se joue une fois, `unobserve` immédiat. Rien ne
  rejoue au scroll inverse.
- **Déclenchement franc** : `IntersectionObserver` à `threshold: 0` avec `rootMargin`
  `0 0 -12% 0`. C'est la marge qui décide, pas la proportion visible — sinon un bloc plus
  haut que le viewport ne se révèle jamais.
- **Rien ne clignote, rien ne retarde la lecture.**

### Les huit animations du système

1. **Révélation par masque** (`.rev-masque`) — le titre monte de 118 % derrière un
   `overflow:hidden`, 720 ms, 90 ms de décalage par ligne. Aucune opacité : le trait est net
   dès le départ. *Utilisée sur : H1 accueil, H1 catalogue.*
2. **Révélation par la chasse** (`.rev-chasse`) — les mots s'ouvrent de `wdth 62` à
   `wdth 112` en 800 ms. **Signature de la marque**, réservée au hero.
3. **Lettre par lettre** (`.rev-lettres`) — opacité + 14 px de montée, 35 ms de décalage.
   Réservée aux titres courts ; découpe faite en JS avec `aria-label` préservé.
4. **Apparition de bloc** (`.rev`) — 24 px de montée + opacité, 520 ms, 60 ms de décalage.
   Le cheval de bataille : cartes, témoignages, étapes, blocs de réassurance.
5. **Rideau** (`.rev-rideau`) — `clip-path: inset(0 0 100% 0) → 0`, 680 ms.
6. **Bandeau défilant** — `translateX(-50%)` en 34 s linéaire, groupe dupliqué en JS pour
   une boucle sans coupure, **pause au survol**. Le second bandeau (pied de page) est
   inversé : fond craie, sens inverse.
7. **Inversion de carte au survol** — un volet craie balaye la carte **du bas vers le haut**
   en 260 ms, le filet de niche se dessine en tête de gauche à droite, le CTA prend un fond
   signal, la flèche avance de 4 px en diagonale. **Le contenu ne bouge pas d'un pixel** :
   c'est ce qui distingue un effet marqué d'un effet agité.
8. **Curseur personnalisé** (desktop, pointeur fin) — un point de 6 px qui suit à 1:1 (aucune
   latence de pointage) et un anneau de 38 px qui suit en interpolation linéaire à 0,14.
   Au survol d'une carte, l'anneau devient un disque signal de 88 px portant le mot
   « OUVRIR » et le point disparaît. Au survol d'un lien, l'anneau passe à 54 px et se
   colore. Il ne remplace jamais un état visible.

Plus : compteurs de 0 → valeur en 1 200 ms (quartic out, chiffres tabulaires), en-tête qui se
compacte de 76 à 56 px, accordéon en `grid-template-rows: 0fr → 1fr` (aucune hauteur calculée
en JS, donc aucun saut), et la transition de section — le filet séparateur se dessine de
gauche à droite en 600 ms.

### Mouvement réduit

`prefers-reduced-motion` remappe les jetons eux-mêmes : toutes les durées tombent à 1 ms, les
révélations à 200 ms d'opacité seule, le bandeau se fige, le curseur personnalisé disparaît.
**Une seule règle, appliquée partout** — aucune animation n'est oubliée.

---

## 6. Structure

### Page 1 — Accueil (one page longue)

| # | Bloc | Intention |
|---|---|---|
| — | En-tête collant + bandeau d'annonce | Le compteur d'usines vérifiées dès la première ligne. |
| — | Hero scindé : voix à gauche, **index des 8 niches à droite** | Le déséquilibre `1fr / 372px` est volontaire : la donnée occupe une colonne fixe, comme dans un tableau. |
| — | Bande de 4 chiffres | Compteurs animés. |
| — | Bandeau défilant | Les 6 promesses, en boucle. |
| 001 | Preuve sociale : 8 marques + 3 témoignages | Les témoignages citent des chiffres, pas des adjectifs. |
| 002 | Protocole en 3 étapes | Numéros en filaire qui se remplissent de signal au survol. |
| 003 | Aperçu des packs les plus vendus | 3 cartes, une seule porte le ruban. |
| 004 | Comparatif avant / après | Deux colonnes chiffrées en heures : ~2 400 € de temps contre 150 € de pack. |
| 005 | FAQ, 6 questions | Dont deux inconfortables (exclusivité, garantie des prix) : c'est ce qui crée la confiance. |
| 006 | Réassurance, 4 blocs | Vérifié/daté · 14 jours · 12 mois · une vraie personne. |
| — | Appel final + bandeau inversé + pied de page | Logotype géant coupé par le bord bas. |

### Page 2 — Catalogue

- Tête : titre + champ de recherche (nom, description, pays, niche).
- Barre de filtres **collante** sous l'en-tête : 8 puces de niche (multi-sélection),
  segment de prix (4 tranches), segment de tri (4 critères), compteur de résultats.
- Grille de 12 packs en 4 colonnes (2 en tablette, 1 en mobile).
- Bloc « L'intégrale » à 790 €.
- **Vue détaillée en panneau latéral** (56 rem à droite, plein écran en mobile) :
  métadonnées du dossier, 4 chiffres clés, liste exhaustive de ce que contient le pack,
  **extrait réel du fichier** (4 lignes, 7 colonnes, les 2 dernières floutées), format et
  garanties, barre d'achat collante en bas.
  Ouvrable par clic, par ancre `catalogue.html#pack=cos-01`, fermable par Échap, par le
  voile ou par le bouton. Préfiltrage par `?niche=textile`.

### Mobile (390 px)

Marge 20, gouttière 16, 4 colonnes. Le hero passe en pile — l'index des niches sous la voix,
toujours tabulé. Les cartes passent en pleine largeur avec le filet bas conservé. Les filtres
se replient dans un tiroir « Filtrer & trier ». Le menu devient plein écran, révélé par un
`clip-path` avec les liens en décalage de 60 ms. Le curseur personnalisé est désactivé.

---

## 7. Fichiers

```
filiere/
├── index.html              Accueil, one page
├── catalogue.html          Catalogue + vue détaillée
├── design-system.html      Jetons, échelles, composants, tous les états
├── DA.md                   Ce document
└── assets/
    ├── css/
    │   ├── tokens.css      TOUS les jetons. Aucune valeur en dur ailleurs.
    │   ├── base.css        Reset, typo, grille, grain, curseur, animations
    │   ├── composants.css  Les 10 composants, états documentés
    │   └── pages.css       Hero, index de niches, tête de catalogue
    └── js/
        ├── donnees.js      12 packs, 8 niches, extraits de tableaux
        ├── site.js         10 comportements communs
        └── catalogue.js    Filtres, recherche, tri, panneau de détail
```

Aucune dépendance, aucun build. Trois polices Google Fonts, rien d'autre.
