export function getDynamicStyle(
  styleModules: Record<string, () => Promise<unknown>>,
  rawModules: Record<string, () => Promise<string>>
) {
//   const allStyles: { styles: CSSModuleClasses; raw: string }[] = [];

  const loadStyleFiles = async () => {
    const entries = Object.keys(styleModules)
      .sort()
      .map(async (path) => {
        const [stylesMod, rawMod] = await Promise.all([
          styleModules[path](),
          rawModules[path](),
        ]);

        return {
          styles: (stylesMod as { default: CSSModuleClasses }).default,
          raw: rawMod,
        };
      });

    const results = await Promise.all(entries);
    return results;
  };

  return async function loadDynamicStyles() {
      const allStyles: { styles: CSSModuleClasses; raw: string }[] = [];

    if (allStyles.length === 0) {
      const loaded = await loadStyleFiles();
      allStyles.push(...loaded);
      console.log('Circle styles loaded:', allStyles);
    }
    return allStyles;
  };
}
