"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="">
      <p>TEST</p>
    </main>
  );
}
