const supported = ["en", "pt"];

/**
 * Receives a list of language codes and returns the one which is supported.
 */
export const userLanguage = (languages: string[]): string => {
  if (!languages) {
    return "en";
  }

  // Remove country locale (E.g. en-US becomes en).
  const mapped = languages.map((language) => language.split("-")[0]);
  const lang = mapped.find((item) => supported.includes(item));

  return lang || "en";
};
