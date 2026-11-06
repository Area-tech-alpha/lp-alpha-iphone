export type StepId = "nome" | "whatsapp" | "volumeIphones";

export type Answers = Record<StepId, string>;

export const EMPTY_ANSWERS: Answers = {
  nome: "",
  whatsapp: "",
  volumeIphones: "",
};

// Tipos de campo — iguais nas 3 LPs (o components/LeadForm.tsx é o mesmo).
interface BaseStep {
  id: StepId;
  question: string;
  placeholder: string;
  eyebrow?: string;
}

export interface TextStep extends BaseStep {
  type: "text" | "email" | "tel";
  helperText?: string;
  autoComplete?: string;
}

export interface SelectStep extends BaseStep {
  type: "select";
  options: string[];
}

export type Step = TextStep | SelectStep;

export const STEPS: Step[] = [
  {
    id: "nome",
    type: "text",
    eyebrow: "Bom ter você aqui!",
    question: "Qual seu nome?",
    placeholder: "Digite sua resposta...",
    autoComplete: "name",
  },
  {
    id: "whatsapp",
    type: "tel",
    eyebrow: "Perfeito!",
    question: "Qual seu WhatsApp?",
    placeholder: "(11) 99123-4567",
    helperText: "Vamos usar esse número só para falar sobre o seu diagnóstico.",
    autoComplete: "tel-national",
  },
  {
    id: "volumeIphones",
    type: "select",
    eyebrow: "Última pergunta!",
    question: "Quantos iPhones sua loja vende, em média, por mês?",
    placeholder: "Selecione uma faixa de volume mensal",
    options: [
      "150 iPhones ou mais por mês",
      "De 50 a 150 iPhones por mês",
      "De 20 a 50 iPhones por mês",
      "De 0 a 20 iPhones por mês",
    ],
  },
];
