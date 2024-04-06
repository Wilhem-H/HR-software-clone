import tree from "/tree.jpg";
import woman from "/woman.jpg";

export type adsItem = {
  id: number;
  title: string;
  text: string;
  img?: string;
};

export const advertisements: adsItem[] = [
  {
    id: 1,
    title: "Label vert pour ,notre organisation",
    text: `J'ai le plaisir de vous annoncer que, pour la deuxième année consécutive, notre entreprise a reçu la certification Label Vert
        Ce label est l'aboutissement de nombreuses actions de développement durable qui ont été entreprises: économie
        d'énergie, utilisation de produits respectueux de
        environnement, meilleur traitement de nos déchets, plan de mobilité douce à l'attention des collaborateurs.
        Je tiens à vous remercier pour votre implication dans ce projet qui nous tient à cœu
        La Direction Générale`,
    img: tree,
  },
  {
    id: 2,
    title: "Nouvelle collaboratrice",
    text: `
  Nathalie Mallet
  Nathalie rejoint le département vent
  prendra en charge la commercialisation
  auprès des grands comptes. Elle travailler
  dans l'équipe de Marc DGGLER. Nathalie a une solide formation de marketing avec un MBA aux USA, puis elle a travaillé chez Procter pendant ans`,
    img: woman,
  },
  {
    id: 3,
    title: "Maintenance Portail SIRH",
    text: `
  L'accès aux services au portail SRH sera momentanément
  interrompu ce jour, de 12h30 à 13h00 pour raison de maintenance.
  Nous vous remercions de votre compréhension.`,
    img: "",
  },
];
