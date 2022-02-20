import React from 'react';
import '../../App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSearch, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiBell, BiHash, BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md'
import {FaUserCircle, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {BsCardText, BsGear, BsUpload} from 'react-icons/bs';

function Sidebar() {
  return (
    <div className="Left_Sidebar_Area">
    <div className="Search">
      <AiOutlineSearch
        fontSize="1.5rem"
        style={{ borderRadius: "50%" }}
      />
      <div className="Search_input">
        <input type="Search" placeholder="Search Twitter" />
      </div>
    </div>
    <br></br>
    <div className="Container">
      <div className="Trends">
        <div className="Trends_4u">Trends for you</div>
        <div className="Setting_icon">
          <BsGear fontSize="1.5rem" color="#1DA1F2" />
        </div>
      </div>
      <div className="Trending_worldwide">
        <div className="Trending_show">Trending worldwide</div>
        <div className="tag">#WorldNews</div>
        <div className="tweet_people">415k</div>
        <div className="Tweets">7,004 people are tweeting this</div>
      </div>
      <div className="Trending_worldwide">
        <div className="Trending_show">Trending worldwide</div>
        <div className="tag">#Rwot</div>
        <div className="tweet_people">315k</div>
        <div className="Tweets">4,047 people are tweeting this</div>
      </div>
      <div className="Trending_worldwide">
        <div className="Trending_show">Breaking News</div>
        <div className="tag">#Ntab'arinjye_COVID-19</div>
        <div className="tweet_people">415k</div>
        <div className="Tweets">9,004 people are tweeting this</div>
      </div>
      <div className="Trending_worldwide">
        <div className="Trending_show">Software Dvelopment</div>
        <div className="tag">#100DaysOfCoding</div>
        <div className="tweet_people">(Unlimited)k</div>
        <div className="Tweets">Uncountable people are tweeting this</div>
      </div>
      <br></br>
      <div className="See_more">See more</div>
    </div>
  </div>
  )
}

export default Sidebar