export interface VideoTestimonial {
  name: string;
  company?: string;
  // URL do .mp4 (Vercel Blob: https://<id>.public.blob.vercel-storage.com/...) ou arquivo em /public/videos/.
  videoSrc: string;
  // Capa do card (frame exibido antes do play). Opcional.
  poster?: string;
}

// Depoimentos em vídeo (formato vertical 9:16) da seção #depoimentos.
// Com a lista vazia, a seção some e o hero/footer deixam de apontar para #depoimentos.
// TODO: trocar NOME DO DONO e as URL_BLOB_* pelas URLs reais do Vercel Blob.
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: "NOME DO DONO",
    company: "Revenda Phone",
    videoSrc: "URL_BLOB_depoimento-iphone-1117.mp4",
    poster: "URL_BLOB_depoimento-iphone-1117-poster.jpg",
  },
  {
    name: "NOME DO DONO",
    company: "Revenda Phone",
    videoSrc: "URL_BLOB_depoimento-iphone-1114.mp4",
    poster: "URL_BLOB_depoimento-iphone-1114-poster.jpg",
  },
];
