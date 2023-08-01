"use client";
import { Metadata } from "next";
import EditorPage from "./EditorPage";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/editor");
  }, []);

  return <div>Lrnr Assignment</div>;
};

export default Home;
