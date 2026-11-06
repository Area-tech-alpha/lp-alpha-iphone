export interface VideoTestimonial {
  // Nome de quem fala no vídeo. Se vazio, o card mostra só a company.
  name: string;
  company?: string;
  // Frase de resultado exibida no card, acima do nome. Opcional.
  highlight?: string;
  // Arquivo em public/videos/ (ex.: "/videos/cliente.mp4") ou URL externa de um .mp4.
  videoSrc: string;
  // Capa do card (ex.: "/videos/cliente-poster.jpg"), exibida antes do play. Opcional.
  poster?: string;
}

// Depoimentos em vídeo (formato vertical 9:16) da seção #depoimentos.
// Com a lista vazia, a seção some e o hero/footer deixam de apontar para #depoimentos.
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: "",
    company: "Revenda Phone",
    highlight: "De 200 para +350 vendas em menos de 1 mês",
    videoSrc: "/videos/depoimento-iphone-1117.mp4",
    poster: "/videos/depoimento-iphone-1117-poster.jpg",
  },
  {
    name: "",
    company: "Revenda Phone",
    videoSrc: "/videos/depoimento-iphone-1114.mp4",
    poster: "/videos/depoimento-iphone-1114-poster.jpg",
  },
];
