
export type AppState = 'CHOICE' | 'QUIZ' | 'RESULT' | 'SITE';

export interface QuizAnswer {
  question: string;
  answer: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
}
