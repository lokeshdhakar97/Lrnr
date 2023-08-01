import { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
