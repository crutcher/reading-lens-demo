export interface TranslatedTerm {
  phrase: string;
  translation: string;
}

export type Content = string | TranslatedTerm;

export function termKey(term: TranslatedTerm) {
  return `${term.phrase}:${term.translation}`;
}

export function buildTerm(phrase: string, translation: string): TranslatedTerm {
  return { phrase, translation };
}

export function buildContent(phrase: (string | [string, string])[]): Content[] {
  return phrase.map((data) => {
    if (typeof data === "string") {
      return data;
    } else {
      return buildTerm(data[0], data[1]);
    }
  });
}
