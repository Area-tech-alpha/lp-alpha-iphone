export interface Testimonial {
  quote: string;
  author: string;
}

// Depoimentos ILUSTRATIVOS (texto e nomes fictícios) para preencher o layout
// durante o desenvolvimento — trocar por depoimentos reais e verificáveis dos
// seus clientes antes de publicar. Um por etapa, cíclico caso haja mais
// etapas que depoimentos.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Antes eu dependia só de indicação e grupo de WhatsApp. Hoje tenho um fluxo constante de fornecedores e clientes interessados na loja.",
    author: "Rafael Nogueira",
  },
  {
    quote:
      "O que mais me chamou atenção foi a organização: cada oportunidade chega com contexto, e eu já sei se vale a pena ligar antes mesmo de atender.",
    author: "Camila Duarte",
  },
  {
    quote:
      "Levei um tempo pra confiar em marketing pro meu segmento, mas o retorno em vendas fechadas me convenceu rápido.",
    author: "Marcos Tavares",
  },
  {
    quote:
      "A equipe entende a dinâmica de uma loja pequena. Não fiquei preso a um contrato genérico feito pra empresa grande.",
    author: "Juliana Prado",
  },
  {
    quote:
      "Consegui parar de gastar tempo respondendo curioso no WhatsApp. Os contatos que chegam já sabem o que procuram.",
    author: "Eduardo Lins",
  },
  {
    quote:
      "Em poucos meses a loja cresceu o suficiente pra eu pensar em abrir uma segunda unidade.",
    author: "Patrícia Alencar",
  },
];
