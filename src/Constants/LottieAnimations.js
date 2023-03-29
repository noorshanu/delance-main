import Lottie_girlAndBoy from "assets/girl-and-boy-surfing-internet.json";
import Lottie_femaleSoftwareAtWork from "assets/female-software-engineer-at-work.json";
import Lottie_businessStartup from "assets/business-startup.json";

const LottieOptions_AnimationOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export {
  Lottie_girlAndBoy,
  Lottie_femaleSoftwareAtWork,
  Lottie_businessStartup,
  LottieOptions_AnimationOptions,
};
