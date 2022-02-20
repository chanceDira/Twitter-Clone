import React from "react";
import "../../App.css";
import {
  AiOutlineAlignLeft,
  AiOutlineDown,
  AiOutlineFileGif,
  AiOutlinePicture,
  AiOutlineSearch,
  AiOutlineSmile,
  AiOutlineTwitter,
  AiTwotoneStar,
} from "react-icons/ai";
import { BiBell, BiHash, BiHomeCircle } from "react-icons/bi";
import { MdBookmarkBorder, MdMailOutline } from "react-icons/md";
import {
  FaUserCircle,
  FaEllipsisH,
  FaRegComment,
  FaRetweet,
  FaRegHeart,
} from "react-icons/fa";
import { BsCardText, BsGear, BsUpload } from "react-icons/bs";
import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="App">
      <div className="Main">
        <Navbar />

        <Main />

        <Sidebar />
      
      </div>
    </div>
  );
}

export default Home;
