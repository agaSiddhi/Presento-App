import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./assets/loading_animation.json";

const loadingAnimation = () => <Lottie animationData={groovyWalkAnimation} loop={true} />;

export default loadingAnimation;