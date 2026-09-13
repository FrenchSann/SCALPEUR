# FILIÈRE

Maquettes complètes d'une boutique en ligne de **packs de fournisseurs d'usines vérifiées**,
organisés par niche (maroquinerie, bagagerie, jouets, cosmétique & parfum, textile,
bijouterie, mobilier & déco, électronique).

Direction artistique **« Le Registre »** : base nuit, grotesque variable en capitales, accent
jaune signal unique, tout tabulé. Le site ne ressemble pas à une boutique, il ressemble à un
dossier d'enquête — parce que le produit est immatériel et que ce qu'on achète, c'est de la
confiance et du temps gagné.

📄 **[Direction artistique complète → DA.md](DA.md)**

---

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil en one page : hero, preuve sociale, protocole en 3 étapes, packs les plus vendus, comparatif avant/après, FAQ, réassurance, pied de page. |
| `catalogue.html` | Les 12 packs, filtrables par niche et par prix, triables, avec recherche et **vue détaillée en panneau latéral**. |
| `design-system.html` | Tous les jetons et tous les composants, avec leurs états. |

## Lancer

Aucun build, aucune dépendance. Un serveur statique suffit :

```bash
python -m http.server 4321
```

Puis `http://localhost:4321`.

## Raccourcis utiles

- `catalogue.html?niche=textile` — préfiltre le catalogue sur une niche.
- `catalogue.html#pack=cos-01` — ouvre directement la vue détaillée d'un pack.
- `Échap` ferme le panneau de détail.

## Structure

```
├── index.html
├── catalogue.html
├── design-system.html
├── DA.md
└── assets/
    ├── css/
    │   ├── tokens.css        tous les jetons — aucune valeur en dur ailleurs
    │   ├── base.css          reset, typographie, grille, grain, curseur, animations
    │   ├── composants.css    les 10 composants et leurs états
    │   └── pages.css         hero, index de niches, tête de catalogue
    └── js/
        ├── donnees.js        12 packs, 8 niches, extraits de tableaux
        ├── site.js           révélations, en-tête, curseur, accordéon, compteurs
        └── catalogue.js      filtres, recherche, tri, panneau de détail
```

## Polices

[Archivo](https://fonts.google.com/specimen/Archivo) (variable, axe de chasse 62–125),
[Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif),
[IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) —
toutes sous licence SIL Open Font.

## Accessibilité

Contrastes ≥ 4,5:1 partout (craie/nuit : 14,8:1), focus visible non supprimable,
`prefers-reduced-motion` respecté par remappage des jetons de durée, et la page reste
entièrement lisible **sans JavaScript**.

---

Les données de fabricants sont **fictives** : noms tronqués, contacts factices. Elles servent
uniquement à donner à la maquette sa densité réelle.
