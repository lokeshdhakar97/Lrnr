"use client";
import { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/editor/wysiwyg-editor?data=WYSIWYG%20Editor");
  }, []);

  return <div>Lrnr Assignment</div>;
};

export default Home;
