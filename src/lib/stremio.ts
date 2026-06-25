const STREMIO_WEB_SHELL = "https://www.stremio.com/shell-v4.4/#?addon=";

/** Build the public manifest URL for a hosted addon. */
export function manifestUrl(host: string, manifestPath = "/manifest.json"): string {
  const base = host.replace(/\/$/, "");
  const path = manifestPath.startsWith("/") ? manifestPath : `/${manifestPath}`;
  return `${base}${path}`;
}

/** Deep link that opens Stremio Web with the addon pre-filled. */
export function stremioInstallUrl(host: string, manifestPath = "/manifest.json"): string {
  return `${STREMIO_WEB_SHELL}${encodeURIComponent(manifestUrl(host, manifestPath))}`;
}

/** Desktop Stremio protocol handler. */
export function stremioProtocolUrl(host: string, manifestPath = "/manifest.json"): string {
  return `stremio://${manifestUrl(host, manifestPath)}`;
}
