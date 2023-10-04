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

  const editing = ref(false);
  const editedUsername = ref("");
  const usernameRef = ref("");

  async function editProfile() {
    editing.value = !editing.value;
  }

  async function saveProfile() {
    try {
      if (editedUsername.value.length > 0) {
        const { data, error } = await supabase
          .from("profile")
          .update({ username: editedUsername.value })
          .eq("id", user.value.id)
          .select();
        console.log("Update data: ", data);
        console.log("Update error: ", error);
        if (data && data.length > 0) {
          usernameRef.value = data[0].username;
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
    editProfile,
    saveProfile,
    fetchUser,
    user,
    editing,
    editedUsername,
    usernameRef,
  };
});
