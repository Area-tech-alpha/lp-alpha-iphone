import type { Answers } from "./steps";

const DESQUALIFYING_VOLUMES = new Set([
  "De 0 a 20 iPhones por mês",
  "De 20 a 50 iPhones por mês",
]);

// Regra de qualificação: só qualifica lojas com 50+ iPhones vendidos por mês;
// as duas faixas mais baixas de volume desqualificam.
export function isQualified(answers: Answers): boolean {
  return !DESQUALIFYING_VOLUMES.has(answers.volumeIphones);
}
