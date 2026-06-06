/** GitHub Pages project-site base path (must match next.config.ts). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/Glasklartstad";

/** Prefix public asset paths for static export on GitHub Pages. */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (BASE_PATH && !normalized.startsWith(BASE_PATH)) {
    return `${BASE_PATH}${normalized}`;
  }
  return normalized;
}
