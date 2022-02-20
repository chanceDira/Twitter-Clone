import React from 'react';
import '../../App.css';
import {AiOutlineAlignLeft, AiOutlineDown, AiOutlineFileGif, AiOutlinePicture, AiOutlineSearch, AiOutlineSmile, AiOutlineTwitter, AiTwotoneStar} from 'react-icons/ai';
import {BiBell, BiHash, BiHomeCircle} from 'react-icons/bi';
import {MdBookmarkBorder, MdMailOutline} from 'react-icons/md'
import {FaUserCircle, FaEllipsisH, FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa'
import {BsCardText, BsGear, BsUpload} from 'react-icons/bs';

function Navbar() {
  return (
    <div className='Sidebar_Area'>
    <div className='Twitter'>
      <AiOutlineTwitter color='#1DA1F2' fontSize='2.3rem' />
    </div>
    <div className='Icons'>
      <BiHomeCircle color='#1DA1F2' fontSize='2rem' />
      <div>Home</div>
    </div>
    <div className='Icons'>
      <BiHash color='#1DA1F2' fontSize='2rem' />
      <div>Explore</div>
    </div>
    <div className='Icons'>
      <BiBell color='#1DA1F2' fontSize='2rem' />
      <div>Notification</div>
    </div>
    <div className='Icons'>
      <MdMailOutline color='#1DA1F2' fontSize='2rem' />
      <div>Messages</div>
    </div>
    <div className='Icons'>
      <MdBookmarkBorder color='#1DA1F2' fontSize='2rem' />
      <div>Bookmarks</div>
    </div>
    <div className='Icons'>
      <BsCardText color='#1DA1F2' fontSize='2rem' />
      <div>Lists</div>
    </div>
    <div className='Icons'>
      <FaUserCircle color='#1DA1F2' fontSize='2rem' />
      <div>Profiles</div>
    </div>
    <div className='Icons'>
      <FaEllipsisH color='#1DA1F2' fontSize='2rem' />
      <div>More</div>
    </div>
    <div className='Icons'>
      <button className='btn'>
        Tweet
      </button>
    </div>
  </div>
  )
}

export default Navbar