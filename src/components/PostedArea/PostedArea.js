import React from 'react';
import '../../App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSearch, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiBell, BiHash, BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md'
import {FaUserCircle, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {BsCardText, BsGear, BsUpload} from 'react-icons/bs';

function PostedArea() {
  return (
    <div className="posted_Area">
      <div className="Profile">
        <div className="User_Detail">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083__340.jpg"
            alt="logo"
            style={{ height: "30px", width: "30px", borderRadius: "50%" }}
          />
          <div className="User_Name">Alex Nsabimana</div>
          <div className="User_id">@Alex_NS</div>
        </div>
        <div className="Drop_down">
          <AiOutlineDown fontSize="1rem" />
        </div>
      </div>
      <div className="Quotes">
        The test of the machine is the satisfaction it gives you. There
        isn't any other test. If the machine produces tranquility it's
        right. If it disturbs you it's wrong until either the machine or
        your mind is changed.
      </div>
      <br></br>
      <div className="Profile_images">
        <img
          src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__480.jpg"
          alt="profile"
          style={{ width: "100%", height: "23rem", objectFit: "fill" }}
        />
      </div>
      <div className="Comment_Section">
        <div className="Comment">
          <FaRegComment fontSize="1.4rem" />
        </div>
        <div className="Comment">
          <FaRetweet fontSize="1.4rem" />
        </div>
        <div className="Comment">
          <FaRegHeart fontSize="1.4rem" />
        </div>
        <div className="Comment">
          <BsUpload fontSize="1.4rem" />
        </div>
      </div>
    </div>
   
  )
}

export default PostedArea