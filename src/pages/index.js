import Image from "next/image";
import Navbar from "@/components/Navbar";

import Header from "@/components/Header";
import CreatePost from "@/components/CreatePost";
import CreateUser from "@/components/CreateUser";
import AllPost from "@/components/AllPost";
import { redirect, useNavigate } from "react-router-dom";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <AllPost /> */}
      {/* <CreatePost /> */}
    </div>
  );
}
