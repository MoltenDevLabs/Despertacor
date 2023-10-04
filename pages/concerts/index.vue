<template>
  <div class="grid grid-cols-1 gap-8 mx-2 my-4">
    <concertCard
      v-for="(concert, index) in concerts"
      :key="index"
      :concert="concert"
      :fotoConcert="fotoConcert[index]"
      :descripcioConcert="descripcioConcert[index]"
    />
  </div>
</template>

<script setup>
const concerts = [
  "Concert 1",
  "Concert 2",
  "Sopar 3",
  "Concert 4",
  "Sopar 5",
  "Concert 6",
];
const fotoConcert = [
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert1.jpg?t=2023-10-04T20%3A58%3A12.512Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert2.jpg?t=2023-10-04T20%3A58%3A38.743Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert3.jpg?t=2023-10-04T21%3A23%3A49.779Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert4.jpg?t=2023-10-04T20%3A58%3A56.350Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert5.jpg?t=2023-10-04T21%3A24%3A05.006Z",
  "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/concerts/concert6.jpg?t=2023-10-04T21%3A24%3A16.450Z",
];
const descripcioConcert = [
  "El primer concert que vam fer",
  "El segon concert que vam fer",
  "El tercer sopar que vam fer",
  "El quart concert que vam fer",
  "El cinquè sopar que vam fer",
  "El sisè concert que vam fer",
];
</script>

<style scoped></style>
