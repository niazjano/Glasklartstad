/** Normalize public asset paths for static export (root-relative, no basePath). */
export function asset(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}
