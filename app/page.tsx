"use client";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/website/de/");
  }, []);

  return null;
}
