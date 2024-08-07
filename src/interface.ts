export interface WordleSolution {
  solution: string;
  days_since_launch: number;
}

interface Definition {
  definition: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface Phonetic {
  text?: string;
}

export interface DictionaryAPIResponse {
  phonetics: Phonetic[];
  meanings: Meaning[];
}
