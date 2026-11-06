export interface VideoTestimonial {
  // Nome de quem fala no vídeo. Se vazio, o card mostra só a company.
  name: string;
  company?: string;
  // Frase de resultado exibida no card, acima do nome. Opcional.
  highlight?: string;
  // Fonte principal do vídeo (Vercel Blob ou /videos/... em public/).
  videoSrc: string;
  // Cópia local em public/videos/. Usada automaticamente se o videoSrc der erro.
  videoFallback?: string;
  // Capa do card, exibida antes do play (Blob ou local). Opcional.
  poster?: string;
  // Cópia local da capa, usada se o poster não carregar.
  posterFallback?: string;
}

// Depoimentos em vídeo (formato vertical 9:16) da seção #depoimentos.
// Com a lista vazia, a seção some e o hero/footer deixam de apontar para #depoimentos.
// Os arquivos em public/videos/ são o fallback do Blob: não apague.
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: "",
    company: "Revenda Phone",
    highlight: "De 200 para +350 vendas em menos de 1 mês",
    videoSrc: "https://z969a7ltqhigqpzp.public.blob.vercel-storage.com/Videos/depoimento-iphone-1117.mp4",
    videoFallback: "/videos/depoimento-iphone-1117.mp4",
    poster: "https://z969a7ltqhigqpzp.public.blob.vercel-storage.com/Videos/depoimento-iphone-1117-poster.jpg",
    posterFallback: "/videos/depoimento-iphone-1117-poster.jpg",
  },
  {
    name: "",
    company: "Revenda Phone",
    videoSrc: "https://z969a7ltqhigqpzp.public.blob.vercel-storage.com/Videos/depoimento-iphone-1114.mp4",
    videoFallback: "/videos/depoimento-iphone-1114.mp4",
    poster: "https://z969a7ltqhigqpzp.public.blob.vercel-storage.com/Videos/depoimento-iphone-1114-poster.jpg",
    posterFallback: "/videos/depoimento-iphone-1114-poster.jpg",
  },
];
