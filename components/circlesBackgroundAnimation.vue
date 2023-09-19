<template>
  <div class="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
    <div
      v-for="(circle, index) in circles"
      :key="index"
      class="absolute animate-pulse"
      :style="circleStyles(circle)"
    >
      <div
        class="circle-gradient absolute w-full h-full rounded-full mix-blend-screen filter brightness-125"
        :style="circleGradientStyles(circle)"
      ></div>
    </div>
  </div>
</template>

<script setup>
const { circles, circleStyles, circleGradientStyles } = useAnimatedCircles();
</script>

<style>
.circle-gradient {
  background: radial-gradient(
    circle,
    hsl(358, 59%, 61%),
    hsl(358, 59%, 41%) 30%,
    hsla(358, 59%, 41%, 0) 80%
  );
  animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
}

@keyframes fadein-frames {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@keyframes scale-frames {
  0% {
    transform: scale3d(0.4, 0.4, 1);
  }
  50% {
    transform: scale3d(1.8, 1.8, 1);
  }
  100% {
    transform: scale3d(0.4, 0.4, 1);
  }
}
</style>
