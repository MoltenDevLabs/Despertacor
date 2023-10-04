// If the user is not logged navigate to Log in page
export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/auth");
  }
});
