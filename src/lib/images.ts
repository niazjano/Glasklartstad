/** Absolute path for static assets (works with static export + custom domain). */
export function asset(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export const IMAGES = {
  hero: asset("/images/hero-fonsterputs.png"),
  hemstadning: asset("/images/hemstadning.png"),
  squeegee: asset("/images/fonsterputs-squeegee.png"),
} as const;
