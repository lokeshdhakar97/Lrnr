import EditorPage from "@/app/EditorPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Editor",
  description: "Editor Page for Lrnr Assignment",
};

const Page = () => {
  return <EditorPage />;
};

export default Page;
