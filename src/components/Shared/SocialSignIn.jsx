"use client";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialSignIn = () => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <button
        // onClick={() => handleSocialLogin("google")}
        className="btn  flex items-center justify-center text-green-500"
      >
        <FaGoogle />
      </button>

      <button
        // onClick={() => handleSocialLogin("github")}
        className="btn  flex items-center justify-center text-primary"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialSignIn;
