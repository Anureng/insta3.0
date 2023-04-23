import Image from "next/image";
import Navbar from "@/components/Navbar";

import Header from "@/components/Header";
import CreatePost from "@/components/CreatePost";
import CreateUser from "@/components/CreateUser";
import AllPost from "@/components/AllPost";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />

      <AllPost />
      {/* <CreatePost /> */}
    </div>
  );
}
