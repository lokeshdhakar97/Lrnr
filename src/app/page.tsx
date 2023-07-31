import { Metadata } from "next";
import EditorPage from "./EditorPage";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const Home = () => {
  return (
      <EditorPage />
  );
};

export default Home;
