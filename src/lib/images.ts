import { asset } from "./paths";

export { asset };

export const IMAGES = {
  hero: asset("/images/hero-fonsterputs.png"),
  hemstadning: asset("/images/hemstadning.png"),
  squeegee: asset("/images/fonsterputs-squeegee.png"),
} as const;
