/* ═══════════════════════════════════════════════════════════════════
   FILIÈRE — DONNÉES DE MAQUETTE
   Contenu fictif mais réaliste : c'est la densité de la donnée qui
   fait la crédibilité du produit. À brancher sur l'API plus tard.
   ═══════════════════════════════════════════════════════════════════ */

const NICHES = [
  { id:'maroquinerie', nom:'Maroquinerie',        court:'Maroquinerie', classe:'n-maroquinerie', hex:'#B4763C' },
  { id:'bagagerie',    nom:'Sacs & bagagerie',    court:'Bagagerie',    classe:'n-bagagerie',    hex:'#C2542F' },
  { id:'jouets',       nom:'Jouets',              court:'Jouets',       classe:'n-jouets',       hex:'#6FA8C7' },
  { id:'cosmetique',   nom:'Cosmétique & parfum', court:'Cosmétique',   classe:'n-cosmetique',   hex:'#D97BA0' },
  { id:'textile',      nom:'Textile & PAP',       court:'Textile',      classe:'n-textile',      hex:'#79B58C' },
  { id:'bijouterie',   nom:'Bijouterie',          court:'Bijouterie',   classe:'n-bijouterie',   hex:'#E0C060' },
  { id:'mobilier',     nom:'Mobilier & déco',     court:'Mobilier',     classe:'n-mobilier',     hex:'#C08A6A' },
  { id:'electronique', nom:'Électronique',        court:'Électronique', classe:'n-electronique', hex:'#9B8FD1' }
];

const COLONNES_STD = ['Usine','Pays / Ville','Spécialité','MOQ','Délai','Prix indicatif','Contact direct'];

const PACKS = [
  {
    id:'mar-01', niche:'maroquinerie', num:'01', prix:180, prixBarre:240, usines:42,
    titre:'Cuir pleine fleur <em class="serif">Italie</em>',
    nomSimple:'Cuir pleine fleur Italie',
    desc:'Tanneries et ateliers acceptant les petites séries. Toscane, Vénétie, Ubrique.',
    pays:'IT · ES · PT', moq:'50 pcs', delai:'35–60 j', maj:'09.2026', ventes:312,
    contenu:[
      ['Fiches usines complètes','42'],
      ['Contacts nominatifs (nom + e-mail direct)','42'],
      ['Grilles de MOQ et de prix indicatifs','42'],
      ['Délais de production constatés','42'],
      ['Retours d\'expérience de marques clientes','17'],
      ['Modèles d\'e-mail de premier contact (FR/EN/IT)','3'],
      ['Fichier Google Sheets + export CSV','oui'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Conceria M—','Santa Croce sull\'Arno, IT','Veau pleine fleur végétal','50 peaux','40 j','8,20 €/dm²','a.b@—.it'],
      ['Atelier P—','Ubrique, ES','Petite maroquinerie, luxe','80 pcs','45 j','24–38 €/pc','—@—.es'],
      ['Manifattura G—','Scandicci, IT','Sacs structurés, façon','60 pcs','55 j','62–110 €/pc','—@—.it'],
      ['Curtidos L—','Igualada, ES','Tannage minéral, coloris','100 peaux','35 j','6,40 €/dm²','—@—.es']
    ]
  },
  {
    id:'mar-02', niche:'maroquinerie', num:'02', prix:120, usines:26,
    titre:'Ceintures & <em class="serif">petite pièce</em>',
    nomSimple:'Ceintures et petite maroquinerie',
    desc:'Boucleries, coupe et refente. MOQ bas, idéal pour un premier lancement.',
    pays:'ES · PT · TR', moq:'30 pcs', delai:'25–40 j', maj:'08.2026', ventes:148,
    contenu:[
      ['Fiches usines complètes','26'],
      ['Contacts nominatifs','26'],
      ['Fournisseurs de boucles et accessoires','11'],
      ['Grilles de prix par largeur et finition','26'],
      ['Retours d\'expérience','9'],
      ['Fichier Google Sheets + export CSV','oui']
    ],
    lignes:[
      ['Cinturones R—','Ubrique, ES','Ceintures cuir, gravure','30 pcs','28 j','9–17 €/pc','—@—.es'],
      ['Metal B—','Arezzo, IT','Boucleries laiton, placage','200 pcs','35 j','1,80 €/pc','—@—.it'],
      ['Deri Y—','Izmir, TR','Coupe, refente, teinture','50 pcs','25 j','6–12 €/pc','—@—.tr']
    ]
  },
  {
    id:'bag-01', niche:'bagagerie', num:'03', prix:165, usines:51,
    titre:'Sacs techniques &<br><em class="serif">bagages cabine</em>',
    nomSimple:'Sacs techniques et bagages cabine',
    desc:'Nylon recyclé, polycarbonate, roulettes. Vietnam, Chine, Portugal.',
    pays:'VN · CN · PT', moq:'200 pcs', delai:'50–80 j', maj:'09.2026', ventes:204,
    contenu:[
      ['Fiches usines complètes','51'],
      ['Contacts nominatifs + interlocuteur export','51'],
      ['Fournisseurs de tissus techniques','14'],
      ['Quincaillerie : zips YKK, clips, roulettes','9'],
      ['Grilles de MOQ par famille de produit','51'],
      ['Retours d\'expérience de marques DNVB','22'],
      ['Modèles de cahier des charges','2'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Bag Works —','Ho Chi Minh, VN','Sacs souples, nylon recyclé','300 pcs','60 j','11–26 $/pc','—@—.vn'],
      ['Luggage T—','Dongguan, CN','Valises polycarbonate','500 pcs','75 j','19–34 $/pc','—@—.cn'],
      ['Confecções A—','Barcelos, PT','Sacs toile, petite série','150 pcs','45 j','14–22 €/pc','—@—.pt']
    ]
  },
  {
    id:'jou-01', niche:'jouets', num:'04', prix:140, usines:36,
    titre:'Jouets bois &<br><em class="serif">peluche</em>',
    nomSimple:'Jouets bois et peluche',
    desc:'Usines certifiées EN71 et CE. Bois FSC, peluche OEKO-TEX.',
    pays:'CN · PL · PT', moq:'300 pcs', delai:'45–75 j', maj:'07.2026', ventes:96,
    contenu:[
      ['Fiches usines complètes','36'],
      ['Certificats EN71-1/2/3 et CE vérifiés','36'],
      ['Contacts nominatifs','36'],
      ['Laboratoires de test partenaires','6'],
      ['Grilles de prix par volume','36'],
      ['Retours d\'expérience','12'],
      ['Fichier Google Sheets + export CSV','oui']
    ],
    lignes:[
      ['Wood Toys —','Yunhe, CN','Jouets bois FSC, peinture eau','500 pcs','55 j','2,10–6,80 $/pc','—@—.cn'],
      ['Plusz K—','Łódź, PL','Peluche, broderie','300 pcs','48 j','4,50–9 €/pc','—@—.pl'],
      ['Brinquedos S—','Aveiro, PT','Jeux d\'éveil, plastique','1 000 pcs','60 j','1,90–4,20 €/pc','—@—.pt']
    ]
  },
  {
    id:'cos-01', niche:'cosmetique', num:'05', prix:240, prixBarre:300, usines:67,
    titre:'Formulation &amp; <em class="serif">remplissage</em>',
    nomSimple:'Formulation et remplissage cosmétique',
    desc:'Façonniers européens et coréens, ISO 22716, bio COSMOS inclus.',
    pays:'FR · IT · KR · PL', moq:'500 pcs', delai:'60–110 j', maj:'09.2026', ventes:418,
    contenu:[
      ['Fiches façonniers complètes','67'],
      ['Certifications ISO 22716 / COSMOS vérifiées','67'],
      ['Contacts nominatifs (R&D + commercial)','67'],
      ['Fournisseurs de packaging primaire','19'],
      ['Coût de formule indicatif par famille','67'],
      ['Évaluateurs sécurité (DIP) et labos','8'],
      ['Retours d\'expérience de marques','31'],
      ['Rétroplanning type d\'un lancement','oui'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Laboratoire C—','Chartres, FR','Soin visage, sérum, bio','1 000 pcs','90 j','1,40–3,90 €/u','—@—.fr'],
      ['Cosmax —','Séoul, KR','Masques, essences, K-beauty','3 000 pcs','75 j','0,60–2,10 $/u','—@—.kr'],
      ['Lab F—','Milan, IT','Maquillage, poudres pressées','500 pcs','110 j','1,10–4,50 €/u','—@—.it'],
      ['Zakład P—','Poznań, PL','Gels douche, shampoings','2 000 pcs','60 j','0,70–1,60 €/u','—@—.pl']
    ]
  },
  {
    id:'cos-02', niche:'cosmetique', num:'06', prix:190, usines:23,
    titre:'Parfum &<br><em class="serif">flaconnage</em>',
    nomSimple:'Parfum et flaconnage',
    desc:'Maisons de composition à Grasse, verriers, capots et pompes.',
    pays:'FR · IT · ES', moq:'1 000 pcs', delai:'90–150 j', maj:'08.2026', ventes:87,
    contenu:[
      ['Maisons de composition','9'],
      ['Verriers et flaconniers','8'],
      ['Fabricants de pompes et capots','6'],
      ['Contacts nominatifs','23'],
      ['Coût de jus indicatif au kilo','9'],
      ['Retours d\'expérience','7'],
      ['Fichier Google Sheets + export CSV','oui']
    ],
    lignes:[
      ['Maison R—','Grasse, FR','Composition, sourcing naturels','1 kg','120 j','180–950 €/kg','—@—.fr'],
      ['Verrerie S—','Saint-Just, FR','Flacons verre, sérigraphie','3 000 pcs','100 j','1,20–4,80 €/pc','—@—.fr'],
      ['Pompas V—','Barcelone, ES','Pompes, capots ABS','5 000 pcs','75 j','0,38–1,10 €/pc','—@—.es']
    ]
  },
  {
    id:'tex-01', niche:'textile', num:'07', prix:150, usines:88,
    titre:'Prêt-à-porter <em class="serif">petite série</em>',
    nomSimple:'Prêt-à-porter petite série',
    desc:'Portugal, Tunisie, Turquie. Jersey, maille, denim. Du prototype à la série.',
    pays:'PT · TN · TR', moq:'30 pcs', delai:'30–60 j', maj:'09.2026', ventes:521, populaire:true,
    contenu:[
      ['Fiches ateliers complètes','88'],
      ['Contacts nominatifs','88'],
      ['Filatures et tricoteurs partenaires','24'],
      ['MOQ réels par pièce et par coloris','88'],
      ['Coût façon indicatif par type de pièce','88'],
      ['Ateliers acceptant le prototypage seul','31'],
      ['Retours d\'expérience de marques','44'],
      ['Trame de tech pack prête à remplir','oui'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Confecções M—','Guimarães, PT','Jersey, sweat, tee','50 pcs/col.','35 j','4,80–11 €/pc','—@—.pt'],
      ['Atelier T—','Monastir, TN','Chemise, tailoring léger','100 pcs','40 j','6–14 €/pc','—@—.tn'],
      ['Tekstil B—','Istanbul, TR','Denim, délavage','200 pcs','50 j','9–19 €/pc','—@—.tr'],
      ['Malhas F—','Barcelos, PT','Maille fine, jacquard','30 pcs','45 j','16–34 €/pc','—@—.pt']
    ]
  },
  {
    id:'tex-02', niche:'textile', num:'08', prix:95, usines:29,
    titre:'Broderie, sérigraphie &<br><em class="serif">finitions</em>',
    nomSimple:'Broderie, sérigraphie et finitions',
    desc:'Le carnet des sous-traitants qui manquent toujours : étiquettes, marquage, emballage.',
    pays:'PT · FR · TR', moq:'50 pcs', delai:'10–25 j', maj:'08.2026', ventes:173,
    contenu:[
      ['Brodeurs et sérigraphes','17'],
      ['Fabricants d\'étiquettes tissées','7'],
      ['Emballage et cartonnage textile','5'],
      ['Contacts nominatifs','29'],
      ['Prix indicatifs au point / à la couleur','29'],
      ['Fichier Google Sheets + export CSV','oui']
    ],
    lignes:[
      ['Bordados A—','Porto, PT','Broderie, 12 têtes','50 pcs','12 j','0,45–1,90 €/pc','—@—.pt'],
      ['Sérigraphie N—','Roubaix, FR','Impression eau, DTG','30 pcs','10 j','1,20–3,40 €/pc','—@—.fr'],
      ['Etiket M—','Bursa, TR','Étiquettes tissées, jacquard','500 pcs','18 j','0,07–0,22 €/pc','—@—.tr']
    ]
  },
  {
    id:'bij-01', niche:'bijouterie', num:'09', prix:210, usines:44,
    titre:'Argent 925 &<br><em class="serif">plaqué or</em>',
    nomSimple:'Argent 925 et plaqué or',
    desc:'Fonderies et ateliers avec poinçon. Thaïlande, Italie, Turquie.',
    pays:'TH · IT · TR', moq:'50 pcs', delai:'35–70 j', maj:'09.2026', ventes:236,
    contenu:[
      ['Fiches ateliers complètes','44'],
      ['Vérification du poinçon et du titrage','44'],
      ['Contacts nominatifs','44'],
      ['Ateliers de sertissage','11'],
      ['Grilles de prix au gramme + façon','44'],
      ['Fournisseurs de pierres (synthèse & naturel)','8'],
      ['Retours d\'expérience','19'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Silver Co —','Bangkok, TH','Argent 925, plaqué 3 µ','50 pcs','45 j','+ 2,10 $/g façon','—@—.th'],
      ['Oreficeria V—','Vicence, IT','Chaînes, maille italienne','100 pcs','40 j','+ 1,60 €/g','—@—.it'],
      ['Kuyumcu A—','Istanbul, TR','Bagues, sertissage','80 pcs','55 j','+ 1,90 €/g','—@—.tr']
    ]
  },
  {
    id:'mob-01', niche:'mobilier', num:'10', prix:260, usines:59,
    titre:'Mobilier bois &<br><em class="serif">métal</em>',
    nomSimple:'Mobilier bois et métal',
    desc:'Menuiseries industrielles et ferronneries. Pologne, Portugal, Italie.',
    pays:'PL · PT · IT', moq:'20 pcs', delai:'60–100 j', maj:'08.2026', ventes:112,
    contenu:[
      ['Fiches usines complètes','59'],
      ['Contacts nominatifs','59'],
      ['Capacités machines (CN, placage, laque)','59'],
      ['Tests de résistance et normes EN','23'],
      ['Grilles de prix par typologie','59'],
      ['Transitaires spécialisés volume','5'],
      ['Retours d\'expérience','16'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Meble W—','Poznań, PL','Chêne massif, placage','30 pcs','75 j','48–210 €/pc','—@—.pl'],
      ['Metalúrgica J—','Porto, PT','Piètements acier, thermolaquage','50 pcs','60 j','18–64 €/pc','—@—.pt'],
      ['Arredo C—','Brianza, IT','Assises, tapisserie','20 pcs','95 j','95–380 €/pc','—@—.it']
    ]
  },
  {
    id:'mob-02', niche:'mobilier', num:'11', prix:135, usines:31,
    titre:'Céramique &<br><em class="serif">art de la table</em>',
    nomSimple:'Céramique et art de la table',
    desc:'Faïenceries et porcelainiers acceptant les séries courtes.',
    pays:'PT · ES · CN', moq:'100 pcs', delai:'45–80 j', maj:'07.2026', ventes:78,
    contenu:[
      ['Fiches usines complètes','31'],
      ['Contacts nominatifs','31'],
      ['Contact alimentaire : certificats','31'],
      ['Grilles de prix par pièce et décor','31'],
      ['Retours d\'expérience','10'],
      ['Fichier Google Sheets + export CSV','oui']
    ],
    lignes:[
      ['Cerâmica V—','Caldas da Rainha, PT','Grès émaillé, décor main','100 pcs','55 j','3,20–12 €/pc','—@—.pt'],
      ['Porcelana L—','Valence, ES','Porcelaine, sérigraphie','300 pcs','60 j','2,40–8,50 €/pc','—@—.es'],
      ['Ceramics H—','Chaozhou, CN','Grès, volumes','1 000 pcs','70 j','0,90–3,40 $/pc','—@—.cn']
    ]
  },
  {
    id:'ele-01', niche:'electronique', num:'12', prix:300, usines:33,
    titre:'Accessoires &<br><em class="serif">petite électronique</em>',
    nomSimple:'Accessoires et petite électronique',
    desc:'ODM et EMS pour audio, charge et objets connectés. CE/FCC, MOQ réalistes.',
    pays:'CN · TW · PL', moq:'500 pcs', delai:'70–120 j', maj:'09.2026', ventes:145,
    contenu:[
      ['Fiches usines complètes (ODM & EMS)','33'],
      ['Contacts nominatifs (ingénierie + sales)','33'],
      ['Coût de certification CE / FCC / RoHS','33'],
      ['Catalogues ODM existants à marque blanche','21'],
      ['Grilles de prix par volume (500 / 2k / 10k)','33'],
      ['Laboratoires de certification partenaires','6'],
      ['Retours d\'expérience de marques','13'],
      ['Trame de NDA et de contrat d\'outillage','2'],
      ['Mises à jour gratuites pendant 12 mois','oui']
    ],
    lignes:[
      ['Audio Tech —','Shenzhen, CN','TWS, casques, ODM','500 pcs','85 j','6,40–19 $/pc','—@—.cn'],
      ['Power H—','Dongguan, CN','Batteries, charge, MFi','1 000 pcs','70 j','3,10–11 $/pc','—@—.cn'],
      ['EMS Q—','Taipei, TW','Cartes, assemblage sur plan','300 pcs','110 j','sur devis','—@—.tw']
    ]
  }
];

/* Pack « intégrale » — l'offre haute qui justifie le haut du panier. */
const PACK_INTEGRALE = {
  id:'int-00', niche:'toutes', num:'00', prix:790, prixBarre:1985, usines:1240,
  titre:'L\'intégrale, <em class="serif">huit niches</em>',
  nomSimple:'L\'intégrale — huit niches',
  desc:'Les douze packs, mis à jour en continu pendant 24 mois.',
  pays:'22 pays', moq:'—', delai:'—', maj:'09.2026', ventes:64
};

if (typeof window !== 'undefined') {
  window.FILIERE = { NICHES, PACKS, COLONNES_STD, PACK_INTEGRALE };
}
