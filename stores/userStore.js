export const useUserStore = defineStore("userStore", () => {
  const supabase = useSupabaseClient();
  const user = ref(undefined);

  async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      user.value = data;
      await fetchUser();
    }
  }

  async function signUp({ email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      user.value = data;
      await fetchUser();
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = undefined;
  }
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  /* Persist the user logged in for 7 days */
  const rememberDays = 7;
  const remember = ref(false);

  async function rememberMe() {
    if (user.value && remember.value) {
      const expires = new Date();
      expires.setDate(expires.getDate() + rememberDays);
      document.cookie = `userToken=${
        user.value.token
      }; expires=${expires.toUTCString()}`;
    }
  }

  const editing = ref(false);
  const editedUsername = ref("");
  const usernameRef = ref("");

  async function editProfile() {
    editing.value = !editing.value;
    try {
      if (editing.value) {
        if (editedUsername.value.length > 0) {
          const { data, error } = await supabase
            .from("profile")
            .update({ username: editedUsername.value })
            .eq("id", user.value.id)
            .select();
          if (data && data.length > 0) {
            usernameRef.value = data[0].username;
          }
          await fetchUser();
          editing.value = !editing.value;
        }
      }
    } catch (error) {
      console.error("Error updating username: ", error);
    } finally {
      editedUsername.value = usernameRef.value;
    }
  }

  async function fetchUser() {
    try {
      const { data: profile } = await supabase.auth.getUser();
      user.value = profile.user;

      const { data, error } = await supabase
        .from("profile")
        .select("username")
        .eq("id", user.value.id)
        .limit(1);
      if (error) {
        console.error("Error fetching username:", error);
      }
      if (data && data.length > 0 && data[0].username) {
        usernameRef.value = data[0].username;
      } else {
        usernameRef.value = "Username";
      }
    } catch (error) {
      console.error("Error fetching user and username:", error);
    }
  }

  return {
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    rememberMe,
    editProfile,
    fetchUser,
    user,
    remember,
    editing,
    editedUsername,
    usernameRef,
  };
});
