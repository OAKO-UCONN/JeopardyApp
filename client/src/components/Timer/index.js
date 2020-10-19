import React from "react";
export const Timer = () => {
  const time = 15;
  setInterval(function countdown() {
    time -= 1;
  }, 1000);
};
