"use-client";

import React from "react";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return <div className="w-full">${amount}</div>;
};

export default AnimatedCounter;
