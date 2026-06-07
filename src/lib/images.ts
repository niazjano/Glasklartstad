import { asset } from "./paths";

export { asset };

export const IMAGES = {
  hero: asset("/images/hero-fonsterputs.png"),
  hemstadning: asset("/images/hemstadning.png"),
  kontorsstadning: asset("/images/kontorsstadning.png"),
  flyttstadning: asset("/images/flyttstadning.png"),
  squeegee: asset("/images/fonsterputs-squeegee.png"),
} as const;

export type ServiceImageKey = keyof Pick<
  typeof IMAGES,
  "hero" | "hemstadning" | "kontorsstadning" | "flyttstadning"
>;
