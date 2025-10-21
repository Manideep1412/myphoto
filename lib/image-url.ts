const DEFAULT_PARAMS = "auto=format&fit=crop&w=1200&q=80";

export function withImageParams(src: string, params: string = DEFAULT_PARAMS): string {
  const joiner = src.includes("?") ? "&" : "?";
  return `${src}${joiner}${params}`;
}

export { DEFAULT_PARAMS as DEFAULT_IMAGE_PARAMS };
