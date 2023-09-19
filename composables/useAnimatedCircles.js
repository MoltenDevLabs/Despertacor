export const useAnimatedCircles = () => {
  const circles = ref([]);

  const circleStyles = (circle) => ({
    width: `${circle.size}px`,
    height: `${circle.size}px`,
    animation: `move-frames-${circle.keyframesIndex} ${circle.moveDuration}ms infinite linear`,
    transform: `translateY(${circle.startY}vh)`,
  });

  const circleGradientStyles = (circle) => ({
    animationDelay: `${circle.circleAnimationDelay}ms`,
  });

  // Function to generate a random circle object
  const generateRandomCircle = () => {
    const animationSets = [
      {
        //middle
        startX: Math.random() * 50,
        endX: Math.random() * 50 + 60,
        startY: 100,
        endY: 0,
      },
      {
        //double chance for middle
        startX: Math.random() * 50,
        endX: Math.random() * 50 + 60,
        startY: 100,
        endY: 0,
      },
      {
        //bottom-right
        startX: Math.random() * 50 + 50,
        endX: 100,
        startY: 100,
        endY: Math.random() * 100 + 10,
      },
      {
        //top-left
        startX: 0,
        endX: Math.random() * 50 + 10,
        startY: Math.random() * 100,
        endY: 0,
      },
    ];

    const randomIndex = Math.floor(Math.random() * animationSets.length);
    const animationSet = animationSets[randomIndex];

    const size = Math.floor(Math.random() * 3 + 1); // Size of the circles
    const moveDuration = 20000 + Math.floor(Math.random() * 23000); // Speed of the circles
    const circleAnimationDelay = Math.random() * 1000; // Delay before each circle's animation starts
    const keyframesIndex = Date.now(); // Unique index for each circle keyframe

    const keyframes = `
    @keyframes move-frames-${keyframesIndex} {
      0% {
        transform: translate3d(${animationSet.startX}vw, ${animationSet.startY}vh, 0);
      }
      100% {
        transform: translate3d(${animationSet.endX}vw, ${animationSet.endY}vh, 0);
      }
    }
    `;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return {
      size,
      moveDuration,
      ...animationSet,
      circleAnimationDelay,
      keyframesIndex,
    };
  };

  const startGeneratingCircles = (maxCircles, interval) => {
    let i = 0;
    let intervalId = setInterval(() => {
      if (i >= maxCircles) {
        clearInterval(intervalId);
        return;
      }

      const circle = generateRandomCircle();
      circles.value.push(circle);

      i++;
    }, interval);
  };

  // Automatically start generating circles when this composable is mounted
  onMounted(() => {
    startGeneratingCircles(200, 500); // Total number of circles and Interval between generation
  });

  return {
    circles,
    circleStyles,
    circleGradientStyles,
    startGeneratingCircles,
  };
};
