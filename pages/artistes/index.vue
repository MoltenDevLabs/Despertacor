<template>
  <div>
    <div class="grid grid-cols-2 gap-4 pt-4">
      <userCard
        v-for="(nom, index) in noms"
        :key="index"
        :nom="nom"
        :imageSrc="imageSrc[index]"
      />
    </div>
  </div>
</template>

<script setup>
const noms = [
  "Noe",
  "Cantant 1",
  "Cantant 2",
  "Cantant 3",
  "Cantant 4",
  "Cantant 5",
];
const imageSrc = [
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2wxLnBuZyIsImlhdCI6MTY5NTMxMDA2NiwiZXhwIjoxNzI2ODQ2MDY2fQ.UPJSr62F62Ivcm2jLf-wXKRcmNFWE9dlLeT6eDj6rCg&t=2023-09-21T15%3A27%3A46.549Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2wyLnBuZyIsImlhdCI6MTY5NTMxMDA5OSwiZXhwIjoxNzI2ODQ2MDk5fQ.Wvirg8anQKHjcMdcIiPwbyS4wEcOMIr9xuWP4OLNPGQ&t=2023-09-21T15%3A28%3A19.158Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2wzLnBuZyIsImlhdCI6MTY5NTMxMDExMywiZXhwIjoxNzI2ODQ2MTEzfQ.vM9W2fLW49vzdPhpUi_az2vv6ZyOpskbwgzdpKKN4Iw&t=2023-09-21T15%3A28%3A33.962Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2w0LnBuZyIsImlhdCI6MTY5NTMxMDEzNSwiZXhwIjoxNzI2ODQ2MTM1fQ.jZbb4_XT5YDafomWU5mjcO0sS5jOXVGxnlo0iohv24c&t=2023-09-21T15%3A28%3A55.604Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2w1LnBuZyIsImlhdCI6MTY5NTMxMDE1MSwiZXhwIjoxNzI2ODQ2MTUxfQ.ByjGUzBGHA6V-W3mz4IM1puVXWGW-zv5_kaqBYFc0q0&t=2023-09-21T15%3A29%3A11.873Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/sign/cantants-coral/mussol6.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYW50YW50cy1jb3JhbC9tdXNzb2w2LnBuZyIsImlhdCI6MTY5NTMxMDE2NiwiZXhwIjoxNzI2ODQ2MTY2fQ.dqAOl535qpraBvQNmS_OELXsAx8KU57VE86n1usXp9g&t=2023-09-21T15%3A29%3A26.755Z",
];
</script>

<style></style>
