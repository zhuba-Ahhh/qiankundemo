export function getQueryParam(
  key?: string
): string | { [key: string]: string } | null {
  const urlParams = new URLSearchParams(window.location.search);

  if (key) {
    return urlParams.get(key);
  } else {
    const params: { [key: string]: string } = {};

    urlParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  }
}
