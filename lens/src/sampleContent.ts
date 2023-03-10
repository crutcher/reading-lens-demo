import { buildContent, TranslatedTerm } from "./term";

export const LE_CHAT_CONTENT: (TranslatedTerm | string)[] = [
  { phrase: "le", translation: "the" },
  { phrase: "chat", translation: "cat" },
  ",",
  { phrase: "avec", translation: "with" },
  { phrase: "le", translation: "the" },
  { phrase: "Google", translation: "Google" },
  ".",
];

export const FRENCH_FRANKENSTEIN_SOURCE: string = `
»Je suis déjà loin au nord de Londres; et, quand je me promène dans
les rues de Saint-Pétersbourg, je sens se jouer sur mes joues la brise
froide du nord qui me resserre les nerfs et me remplit de volupté.
Comprenez-vous cette sensation? Cette brise, qui est venue des régions
à travers lesquelles je m'avance, me donne un avant-goût de ces
climats glacés. Inspiré par ce vent précurseur, je sens que mes
idées deviennent plus ardentes et plus vives. Je m'efforce en vain de
me persuader que le pôle est le siège de la glace et de la
désolation, il se présente toujours à mon imagination comme le pays
de la beauté et du plaisir. Là, Marguerite, le soleil est toujours
visible; son large disque borde presque l'horizon, et répand un éclat
perpétuel. De là (car, avec votre permission, ma sœur, j'aurai
quelque confiance dans les navigateurs qui m'ont précédé), de là,
dis-je, la neige et la glace sont bannies; et, naviguant sur une mer
calme, on peut être transporté dans une terre qui surpasse en prodiges
et en beauté tous les pays jusqu'ici découverts sur le monde
habitable. Ses productions et ses traits peuvent être sans exemple,
comme les phénomènes des corps célestes le sont, sans doute, dans ces
solitudes inconnues. Que ne peut-on pas espérer dans un pays où brille
une lumière éternelle? J'y découvre la puissance étonnante qui
attire l'aiguille; et je puis fixer une foule d'observations célestes
qui n'ont besoin que de ce voyage pour rendre invariables leurs
excentricités apparentes. Je rassasierai mon ardente curiosité, en
voyant une partie du monde qui n'a jamais été visitée avant moi, et
je puis fouler une terre qui n'a jamais été pressée par les pieds
d'un mortel. Voilà ce qui m'attire, et cela me suffit pour bannir toute
crainte du danger ou de la mort, et m'encourager à commencer ce
pénible voyage avec la joie qu'éprouve un enfant lorsqu'il s'embarque
sur un petit bateau un jour de fête, avec ses camarades, pour
l'expédition d'une découverte sur la rivière qui baigne son pays
natal. Mais, en supposant que toutes ces conjectures soient fausses,
vous ne pouvez contester le service inappréciable que je rendrai à
toute l'espèce humaine, jusqu'à la dernière génération, en
découvrant, près du pôle, un passage à ces contrées, où, pour
arriver, il faut maintenant plusieurs mois; ou bien en constatant le
secret du magnétisme, ce qui, à moins que ce ne soit impossible, ne
peut avoir lieu que par une entreprise comme la mienne.
`;

export const FRENCH_FRANKENSTEIN_CONTENT: (string | TranslatedTerm)[] =
  buildContent([
    ["»", "»"],
    ["Je", "I"],
    ["suis", "am"],
    ["déjà", "already"],
    ["loin", "far"],
    ["au", "of the"],
    ["nord", "north"],
    ["de", "of"],
    ["Londres", "London"],
    [";", ";"],
    ["et", "and"],
    [",", ","],
    ["quand", "when"],
    ["je", "I"],
    ["me", "am"],
    ["promène", "walking"],
    ["dans", "in"],
    ["les", "the"],
    ["rues", "streets"],
    ["de", "of"],
    ["Saint-Pétersbourg", "St. Petersburg"],
    [",", ","],
    ["je", "I"],
    ["sens", "feel"],
    ["se", "the"],
    ["jouer", "play"],
    ["sur", "on"],
    ["mes", "my"],
    ["joues", "cheeks"],
    ["la", "the"],
    ["brise", "breeze"],
    ["froide", "cold"],
    ["du", "of"],
    ["nord", "the north"],
    ["qui", "that"],
    ["me", "me"],
    ["resserre", "fills with"],
    ["les", "the"],
    ["nerfs", "nerves"],
    ["et", "and"],
    ["me", "me"],
    ["remplit", "fills"],
    ["de", "with"],
    ["volupté", "pleasure"],
    [".", "."],
    ["Comprenez-vous", "Do you understand"],
    ["cette", "this"],
    ["sensation", "sensation"],
    ["?", "?"],
    ["Cette", "This"],
    ["brise", "breeze"],
    [",", ","],
    ["qui", "which"],
    ["est", "has"],
    ["venue", "come"],
    ["des", "from the"],
    ["régions", "regions"],
    ["à", "through"],
    ["travers", "which"],
    ["lesquelles", "I am moving"],
    ["je", "I"],
    ["m'avance", "advance"],
    [",", ","],
    ["me", "gives"],
    ["donne", "a"],
    ["un", "foretaste"],
    ["avant-goût", "of these"],
    ["de", "cold"],
    ["ces", "climates"],
    ["glacés", "glacier-like"],
    [".", "."],
    ["Inspiré", "Inspired"],
    ["par", "by"],
    ["ce", "this"],
    ["vent", "wind"],
    ["précurseur", "forerunner"],
    [",", ","],
    ["je", "I"],
    ["sens", "feel"],
    ["que", "that"],
    ["mes", "my"],
    ["idées", "ideas"],
    ["deviennent", "become"],
    ["plus", "more"],
    ["ardentes", "ardent"],
    ["et", "and"],
    ["plus", "more"],
    ["vives", "lively"],
    [".", "."],
    ["Je", "I"],
    ["m'efforce", "try in vain"],
    ["en", "to"],
    ["vain", "persuade"],
    ["de", "of"],
    ["me", "myself"],
    ["le", "the"],
    ["pôle", "pole"],
    ["est", "is"],
    ["le", "the"],
    ["siège", "seat"],
    ["de", "of"],
    ["la", "the"],
    ["glace", "ice"],
    ["et", "and"],
    ["de", "of"],
    ["la", "the"],
    ["désolation", "desolation"],
    [",", ","],
    ["il", "it"],
    ["se", "up"],
    ["présente", "show"],
    ["toujours", "always"],
    ["à", "to"],
    ["mon", "my"],
    ["imagination", "imagination"],
    ["comme", "as"],
    ["le", "the"],
    ["pays", "land"],
    ["de", "of"],
    ["la", "the"],
    ["beauté", "beauty"],
    ["et", "and"],
    ["du", "of"],
    ["plaisir", "pleasure"],
    [".", "."],
    ["Là", "There"],
    [",", ","],
    ["Marguerite", "Marguerite"],
    [",", ","],
    ["le", "the"],
    ["soleil", "sun"],
    ["est", "is"],
    ["toujours", "always"],
    ["visible", "visible"],
    [";", ";"],
    ["son", "its"],
    ["large", "broad"],
    ["disque", "disk"],
    ["borde", "borders"],
    ["presque", "almost"],
    ["l'horizon", "the horizon"],
    [",", ","],
    ["et", "and"],
    ["répand", "spreads"],
    ["un", "a"],
    ["éclat", "shine"],
    ["perpétuel", "perpetual"],
    [".", "."],
    ["De", "From"],
    ["là", "there"],
    ["(", "("],
    ["car", "because"],
    [",", ","],
    ["avec", "with"],
    ["votre", "your"],
    ["permission", "permission"],
    [",", ","],
    ["ma", "my"],
    ["sœur", "sister"],
    [",", ","],
    ["j'aurai", "I will have"],
    ["quelque", "some"],
    ["confiance", "confidence"],
    ["dans", "in"],
    ["les", "the"],
    ["navigateurs", "browsers"],
    ["qui", "who"],
    ["m'ont", "have"],
    ["précédé", "preceded me"],
    [")", ")"],
    [",", ","],
    ["de", "from"],
    ["là", "there"],
    [",", ","],
    ["dis-je", "I say"],
    [",", ","],
    ["la", "the"],
    ["neige", "snow"],
    ["et", "and"],
    ["la", "the"],
    ["glace", "ice"],
    ["sont", "are"],
    ["bannies", "banned"],
    [";", ";"],
    ["et", "and"],
    [",", ","],
    ["naviguant", "navigating"],
    ["sur", "on"],
    ["une", "a"],
    ["mer", "sea"],
    ["calme", "calm"],
    [",", ","],
    ["on", "one"],
    ["peut", "can"],
    ["être", "be"],
    ["transporté", "transported"],
    ["dans", "to"],
    ["une", "a"],
    ["terre", "land"],
    ["qui", "which"],
    ["surpasse", "surpasses"],
    ["en", "in"],
    ["prodiges", "wonders"],
    ["et", "and"],
    ["en", "in"],
    ["beauté", "beauty"],
    ["tous", "all"],
    ["les", "the"],
    ["pays", "countries"],
    ["jusqu'ici", "so far"],
    ["découverts", "discovered"],
    ["sur", "on"],
    ["le", "the"],
    ["monde", "world"],
    ["habitable", "inhabited"],
    [".", "."],
    ["Ses", "Its"],
    ["productions", "productions"],
    ["et", "and"],
    ["ses", "its"],
    ["traits", "features"],
    ["peuvent", "can"],
    ["être", "be"],
    ["sans", "without"],
    ["exemple", "president"],
    [",", ","],
    ["comme", "like"],
    ["les", "the"],
    ["phénomènes", "phenomena"],
    ["des", "of"],
    ["corps", "bodies"],
    ["célestes", "celestial"],
    ["le", "are"],
    ["sont", "no doubt"],
    [",", ","],
    ["sans", "without"],
    ["doute", "doubt"],
    [",", ","],
    ["dans", "In"],
    ["ces", "this"],
    ["solitudes", "solitude"],
    ["inconnues", "unknown"],
    [".", "."],
    ["Que", "What"],
    ["ne", "can't"],
    ["peut-on", "one"],
    ["pas", "not"],
    ["espérer", "hope for"],
    ["dans", "in"],
    ["un", "a"],
    ["pays", "country"],
    ["où", "where"],
    ["brille", "shines"],
    ["une", "an"],
    ["lumière", "light"],
    ["éternelle", "eternal"],
    ["?", "?"],
    ["J'y", "There,"],
    ["découvre", "I discover"],
    ["la", "the"],
    ["puissance", "power"],
    ["étonnante", "astonishing"],
    ["qui", "that"],
    ["attire", "attracts"],
    ["l'aiguille", "the needle"],
    [";", ";"],
    ["et", "and"],
    ["je", "I"],
    ["puis", "can"],
    ["fixer", "make"],
    ["une", "a"],
    ["foule", "multitude"],
    ["d'observations", "of observations"],
    ["célestes", "celestial"],
    ["qui", "which"],
    ["n'ont", "not only"],
    ["besoin", "need"],
    ["que", "of"],
    ["ce", "this"],
    ["voyage", "voyage"],
    ["pour", "to"],
    ["rendre", "make"],
    ["invariables", "invariable"],
    ["leurs", "their"],
    ["excentricités", "eccentricities"],
    ["apparentes", "apparent"],
    [".", "."],
    ["Je", "I"],
    ["rassasierai", "will satiate"],
    ["mon", "my"],
    ["ardente", "burning"],
    ["curiosité", "curiosity"],
    [",", ","],
    ["en", "by"],
    ["voyant", "seeing"],
    ["une", "a"],
    ["partie", "part"],
    ["du", "of the"],
    ["monde", "world"],
    ["qui", "which"],
    ["n'a", "has never"],
    ["jamais", "been"],
    ["été", "visited"],
    ["avant", "before"],
    ["moi", "me"],
    [",", ","],
    ["et", "and"],
    ["je", "I"],
    ["puis", "can"],
    ["fouler", "tread on"],
    ["une", "a"],
    ["terre", "land"],
    ["qui", "which"],
    ["n'a", "has never"],
    ["jamais", "been"],
    ["pressée", "trod on"],
    ["par", "by"],
    ["les", "the"],
    ["pieds", "feet"],
    ["d'un", "of a"],
    ["mortel", "mortal"],
    [".", "."],
    ["Voilà ce qui", "That's what"],
    [",", ","],
    ["et cela me suffit", "and that's enough for me"],
    ["pour", "in order to"],
    ["bannir", "banish"],
    ["toute", "all"],
    ["crainte", "fear"],
    ["du", "of"],
    ["danger", "danger"],
    ["ou", "and"],
    ["de la mort", "of death"],
    [",", ","],
    ["et", "with"],
    ["m'encourager", "the joy"],
    ["à", "of"],
    ["commencer", "begin"],
    ["ce", "this"],
    ["pénible", "arduous"],
    ["voyage", "voyage"],
    ["avec", "with"],
    ["la", "the"],
    ["joie", "joy"],
    ["qu'éprouve", "that a child feels"],
    ["un", "when"],
    ["enfant", "embarks"],
    ["lorsqu'il", "on"],
    ["s'embarque", "a small boat"],
    ["sur", "on"],
    ["un", "a"],
    ["petit", "little"],
    ["bateau", "boat"],
    ["un", ""],
    ["jour", "day"],
    ["de", "of"],
    ["fête", "festivity"],
    [",", ","],
    ["avec", "with"],
    ["ses", "his"],
    ["camarades", "friends"],
    [",", ","],
    ["pour", "on"],
    ["l'expédition", "an expedition"],
    ["d'une", "of a"],
    ["découverte", "discovery"],
    ["sur", "on"],
    ["la", "the"],
    ["rivière", "river"],
    ["qui", "that"],
    ["baigne", "borders"],
    ["son", "his"],
    ["pays", "land"],
    ["natal", "native"],
    [".", "."],
    ["Mais", "But"],
    [",", ","],
    ["en", "assuming"],
    ["supposant", "that"],
    ["que", "that"],
    ["toutes", "all"],
    ["ces", "these"],
    ["conjectures", "conjectures"],
    ["soient", "are"],
    ["fausses", "false"],
    [",", ","],
    ["vous", "you"],
    ["ne", "cannot"],
    ["pouvez", "contest"],
    ["contester", "contest"],
    ["le", "the"],
    ["service", "service"],
    ["inappréciable", "invaluable"],
    ["que", "that"],
    ["je", "I"],
    ["rendrai", "will provide"],
    ["à", "to"],
    ["toute", "all"],
    ["l'espèce", "species"],
    ["humaine", "human"],
    [",", ","],
    ["jusqu'à", "up to"],
    ["la", "the"],
    ["dernière", "last"],
    ["génération", "generation"],
    [",", ","],
    ["en", "by"],
    ["découvrant", "discovering"],
    [",", ","],
    ["près", "near"],
    ["du", "the"],
    ["pôle", "pole"],
    [",", ","],
    ["un", "a"],
    ["passage", "passage"],
    ["à", "to"],
    ["ces", "these"],
    ["contrées", "lands"],
    [",", ","],
    ["où", "where"],
    [",", ","],
    ["pour", "to"],
    ["arriver", "get there"],
    [",", ","],
    ["il", "it"],
    ["faut", "takes"],
    ["maintenant", "now"],
    ["plusieurs", "several"],
    ["mois", "months"],
    [";", ";"],
    ["ou", "or"],
    ["bien", "alternatively"],
    ["en", "by"],
    ["constatant", "establishing"],
    ["le", "the"],
    ["secret", "secret"],
    ["du", "of the"],
    ["magnétisme", "magnetism"],
    [",", ","],
    ["ce", "which"],
    ["qui", "that"],
    [",", ","],
    ["à", "unless"],
    ["moins", "it is not"],
    ["que", "impossible"],
    ["ce", "this"],
    ["ne", "cannot"],
    ["soit", "be"],
    ["impossible", "impossible"],
    [",", ","],
    ["ne", "can"],
    ["peut", "not"],
    ["avoir", "take place"],
    ["lieu", "except"],
    ["que par", "through"],
    ["une", "an."],
    ["entreprise", "entreprise"],
    ["la", "like"],
    ["mienne", "mine"],
    [".", "."],
  ]);
