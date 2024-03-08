export const useThemeStore = defineStore("themeStore", () => {
  const isDarkTheme = ref(true); // Set light theme by default

  // Toggles the theme between 'light' and 'dark'
  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkTheme.value);
    rootElement.classList.toggle("light", !isDarkTheme.value);
  }

  return {
    isDarkTheme,
    toggleTheme,
  };
});
