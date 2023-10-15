import defaultPfp from "@/assets/images/defaultPfp.png";

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
  const editedDescription = ref("");
  const descriptionRef = ref("");

  async function editProfile() {
    editing.value = !editing.value;
  }

  async function saveProfile() {
    try {
      if (editedUsername.value.length > 0) {
        const { data, error } = await supabase
          .from("profile")
          .update({
            username: editedUsername.value,
            description: editedDescription.value,
          })
          .eq("id", user.value.id)
          .select();
        if (data && data.length > 0) {
          usernameRef.value = data[0].username;
          descriptionRef.value = data[0].description;
          await fetchUser();
          editing.value = !editing.value;
        }
      }
    } catch (error) {
      console.error("Error updating username or description: ", error);
    } finally {
      editedUsername.value = usernameRef.value;
      editedDescription.value = descriptionRef.value;
    }
  }

  const imageSrc = ref(
    "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/profile-pictures/defaultPfp.png?t=2023-10-15T20%3A03%3A14.545Z"
  );

  async function changeProfilePicture(e) {
    console.log("changeProfilePicture function called");
    // Get the selected file from the event
    const file = e.target.files[0];
    if (!file) return;

    // Upload the file to Supabase storage (or another backend solution)
    const { data, error } = await supabase.storage
      .from("profile-pictures")
      .upload(`${user.value.id}/${file.name}`, file);

    if (error) {
      console.error("Error uploading file:", error);
      return;
    }
    // Update the user's profile with the URL of the uploaded file
    const imageUrl = `https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/profile-pictures/${user.value.id}/${file.name}`;
    const { data: updateData, error: updateError } = await supabase
      .from("profile")
      .update({ image_url: imageUrl })
      .eq("id", user.value.id);
    if (updateError) {
      console.error("Error updating profile picture URL:", updateError);
      return;
    }

    // Update the local state
    imageSrc.value = imageUrl;
  }

  async function fetchUser() {
    try {
      const { data: profile } = await supabase.auth.getUser();
      user.value = profile.user;

      const { data, error } = await supabase
        .from("profile")
        .select("username, description")
        .eq("id", user.value.id)
        .limit(1);
      if (error) {
        console.error("Error fetching username and description:", error);
      }
      if (data && data.length > 0 && data[0].username) {
        usernameRef.value = data[0].username;
        descriptionRef.value = data[0].description;
      } else {
        usernameRef.value = "Mussol anònim";
        descriptionRef.value = "Canto i els mals espanto uuu-uuu";
      }
    } catch (error) {
      console.error("Error fetching user, username, and description:", error);
    }
  }

  return {
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    editProfile,
    saveProfile,
    changeProfilePicture,
    fetchUser,
    user,
    editing,
    editedUsername,
    usernameRef,
    editedDescription,
    descriptionRef,
    imageSrc,
  };
});
