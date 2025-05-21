export const toIdentifier = (str: string) =>
  str.toLowerCase().trim().replace(/\s+/g, "-");
