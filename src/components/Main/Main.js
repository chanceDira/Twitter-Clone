import React from 'react';
import '../../App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSearch, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiBell, BiHash, BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md'
import {FaUserCircle, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {BsCardText, BsGear, BsUpload} from 'react-icons/bs';
import PostedArea from '../PostedArea/PostedArea';

function Main () {
  return (
    <div className="Main_Area">
    <div className="Home">
      <div className="home">Home</div>
      <div className="Star_icon">
        <AiTwotoneStar color="#1DA1F2" fontSize="2rem" />
      </div>
    </div>
    <br></br>
    <div className="Create_post">
      <div className="Add_text">
        <div className="Profile">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_960_720.jpg"
            alt="dp"
            style={{ height: "35px", width: "35px", borderRadius: "50%" }}
          />
        </div>
        <input type="Post" placeholder="What's Happening" />
      </div>
      <div className="Btns">
        <div className="Icon">
          <div className="Btns_icon">
            <AiOutlinePicture fontSize="1.5rem" color="#1DA1F2" />
          </div>
          <div className="Btns_icon">
            <AiOutlineFileGif fontSize="1.5rem" color="#1DA1F2" />
          </div>
          <div className="Btns_icon">
            <AiOutlineAlignLeft fontSize="1.5rem" color="#1DA1F2" />
          </div>
          <div className="Btns_icon">
            <AiOutlineSmile fontSize="1.5rem" color="#1DA1F2" />
          </div>
        </div>
        <div className="Tweets">
          <button className="btns-tweet">Tweet</button>
        </div>
      </div>
    </div>
    <PostedArea />
    <br></br>
    <PostedArea />  
    <br></br>
    <PostedArea />  
  </div>
  )
}

export default Main 