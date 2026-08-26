const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(pathname = "/") {
  const absolutePath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `${basePath}${absolutePath}`;
}
