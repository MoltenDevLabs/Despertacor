export const useFadeInEffect = () => {
  const fadeSections = ref([]);

  const handleScroll = () => {
    fadeSections.value = Array.from(
      document.querySelectorAll(".fade-in-effect")
    );
    for (const section of fadeSections.value) {
      if (isElementInViewport(section)) {
        section.style.opacity = "1";
        section.style.transform = "scale(1)";
        fadeSections.value = fadeSections.value.filter((el) => el !== section);
      }
    }
  };

  onMounted(() => {
    document.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  onBeforeUnmount(() => {
    document.removeEventListener("scroll", handleScroll);
  });

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
  };
};
