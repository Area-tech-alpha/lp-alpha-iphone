export type StepId = "nome" | "whatsapp" | "email" | "volumeIphones";

export type Answers = Record<StepId, string>;

export const EMPTY_ANSWERS: Answers = {
  nome: "",
  whatsapp: "",
  email: "",
  volumeIphones: "",
};

interface BaseStep {
  id: StepId;
  eyebrow: string;
  question: string;
}

export interface TextStep extends BaseStep {
  type: "text" | "email" | "tel";
  placeholder: string;
  helperText?: string;
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
  },
  {
    id: "whatsapp",
    type: "tel",
    eyebrow: "Perfeito!",
    question: "Qual seu WhatsApp?",
    placeholder: "99999-9999",
    helperText: "Vamos usar esse número só para falar sobre o seu diagnóstico.",
  },
  {
    id: "email",
    type: "email",
    eyebrow: "Ótimo!",
    question: "Digite seu melhor e-mail:",
    placeholder: "voce@loja.com.br",
  },
  {
    id: "volumeIphones",
    type: "select",
    eyebrow: "Última pergunta!",
    question: "Quantos iPhones sua loja vende, em média, por mês?",
    options: [
      "150 iPhones ou mais por mês",
      "De 50 a 150 iPhones por mês",
      "De 20 a 50 iPhones por mês",
      "De 0 a 20 iPhones por mês",
    ],
  },
];
