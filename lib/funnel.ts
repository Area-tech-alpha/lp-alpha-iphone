// Lógica do funil desta LP: validação dos campos, eventos (dataLayer / Meta
// Pixel), envio do lead ao CRM e destino após o envio. É o mesmo
// comportamento que antes ficava dentro de components/LeadForm.tsx — foi só
// extraído para cá para que o componente do formulário seja idêntico nas 3
// LPs. Cada LP tem o seu lib/funnel.ts.
import {
  FORM_NAME,
  LEAD_ORIGIN,
  LEAD_SOURCE,
  META_PIXEL_ID,
} from "./config";
import { getAttribution, type Attribution, readMetaIds } from "./attribution";
import { isQualified } from "./qualification";
import type { Answers, StepId } from "./steps";
import { pushDataLayerEvent, trackMetaLead } from "./tracking";
import { formatPhone, isValidPhone } from "./validation";

export type FieldErrors = Partial<Record<StepId, string>>;
export type ResultRoute = "/obrigado" | "/agradecimento";

// Estado por montagem do formulário (equivalente aos refs do componente).
export interface LeadSession {
  attribution: Attribution | null;
  leadFired: boolean;
}

export function createLeadSession(): LeadSession {
  return { attribution: null, leadFired: false };
}

// Chamado uma vez quando o formulário monta.
export function startLeadSession(session: LeadSession): void {
  session.attribution = getAttribution();
  pushDataLayerEvent({ event: "form_view", form_name: FORM_NAME, source: LEAD_SOURCE });
}

export function validateStep(id: StepId, answers: Answers): string | null {
  const value = answers[id];
  switch (id) {
    case "nome":
      return value.trim().length > 0 ? null : "Digite seu nome para continuar.";
    case "whatsapp":
      return isValidPhone(value) ? null : "Digite um WhatsApp válido.";
    default:
      return value ? null : "Selecione uma opção para continuar.";
  }
}

// Valor guardado no estado a partir do que foi digitado / valor exibido no input.
export function toPhoneValue(input: string): string {
  return formatPhone(input);
}
export function toPhoneDisplay(value: string): string {
  return value;
}

// Verificação assíncrona antes do envio (ex.: Twilio no med). Esta LP não tem.
export type VerifyBeforeSubmit = (answers: Answers) => Promise<FieldErrors | null>;
export const verifyBeforeSubmit: VerifyBeforeSubmit | null = null;

// Dispara eventos, envia o lead e devolve a rota de destino.
export function submitLead(finalAnswers: Answers, session: LeadSession): ResultRoute {
  const qualificado = isQualified(finalAnswers);

  pushDataLayerEvent({ event: "form_submit", form_name: FORM_NAME, source: LEAD_SOURCE, qualificado });

  if (!session.leadFired) {
    trackMetaLead(META_PIXEL_ID, { qualificado });
    session.leadFired = true;
  }

  const payload = { ...finalAnswers, qualificado, attribution: session.attribution };

  // O lead vai só para a rota do próprio site, que repassa à entrada de leads do CRM
  // (food/lp) com a chave (app/api/lead). Nada vai mais ao n8n.
  fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, ...readMetaIds(), origem: LEAD_ORIGIN }),
    keepalive: true,
  }).catch(() => {});

  return qualificado ? "/obrigado" : "/agradecimento";
}
