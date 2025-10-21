const DEFAULT_PARAMS = "auto=format&fit=crop&w=1200&q=80";

const REMOTE_PROTOCOL = /^https?:\/\//i;

export function withImageParams(src: string, params: string = DEFAULT_PARAMS): string {
  if (!REMOTE_PROTOCOL.test(src)) {
    return src;
  }

  try {
    const url = new URL(src);
    const paramEntries = new URLSearchParams(params);

    paramEntries.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return src;
  }
}

export { DEFAULT_PARAMS as DEFAULT_IMAGE_PARAMS };
