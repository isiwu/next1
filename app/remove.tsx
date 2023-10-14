"use client";

import { useEffect } from "react";

const Remove = () => {
  useEffect(() => {
    const loader = document.getElementById("loader") as HTMLElement;
    loader.style.display = "none"
  }, [])

  return null;
};

export default Remove;