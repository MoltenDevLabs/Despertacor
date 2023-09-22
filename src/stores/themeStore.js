export const useThemeStore = defineStore("themeStore", () => {
  const isDarkTheme = ref(true); // Set light theme by default
  const previousTheme = ref(false);

  // Toggles the theme between 'light' and 'dark'
  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkTheme.value);
    rootElement.classList.toggle("light", !isDarkTheme.value);
  }

  function setPreviousTheme() {
    previousTheme.value = isDarkTheme.value;
  }

  function toggleAndSetPreviousTheme() {
    setPreviousTheme(isDarkTheme.value);
    if (!isDarkTheme.value) {
      toggleTheme();
    }
  }

  return {
    isDarkTheme,
    previousTheme,
    toggleTheme,
    setPreviousTheme,
    toggleAndSetPreviousTheme,
  };
});
