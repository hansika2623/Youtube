import React from "react";
import "../index.css";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { GiFilmSpool, GiGameConsole } from "react-icons/gi";
import { MdLiveTv } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineFeedback } from "react-icons/md";
import { useUtils } from "../context/UtilsContext";

function Sidebar() {
  const { isSidebar, mobileShow, setMobileShow } = useUtils();
  const sidebarItems = [
    {
      groupName: "Home",
      groupItems: [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName: "You",
      groupItems: [
        {
          id: 1,
          name: "Your channel",
          icon: <IoPersonCircleOutline />,
        },
        {
          id: 2,
          name: "History",
          icon: <GoHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlinePlaylistPlay />,
        },
        {
          id: 4,
          name: "Your videos",
          icon: <MdOndemandVideo />,
        },
        {
          id: 5,
          name: "Watch Later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <BiLike />,
        },
      ],
    },
    {
      groupName: "Explore",
      groupItems: [
        {
          id: 1,
          name: "Trending",
          icon: <FaFire />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <MdOutlineShoppingCartCheckout />,
        },
        {
          id: 3,
          name: "Music",
          icon: <CiMusicNote1 />,
        },
        {
          id: 4,
          name: "Films",
          icon: <GiFilmSpool />,
        },
        {
          id: 5,
          name: "Live",
          icon: <MdLiveTv />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <SiYoutubegaming />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaNewspaper />,
        },
        {
          id: 8,
          name: "Sports",
          icon: <CiTrophy />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <FaRegLightbulb />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <GiHanger />,
        },
        {
          id: 11,
          name: "Podcasts",
          icon: <MdOutlinePodcasts />,
        },
      ],
    },
    {
      groupName: "More from Youtube",
      groupItems: [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <TbBrandYoutubeKids />,
        },
      ],
    },
    {
      groupName: "",
      groupItems: [
        {
          id: 1,
          name: "Settings",
          icon: <CiSettings />,
        },
        {
          id: 2,
          name: "Report History",
          icon: <CiFlag1 />,
        },
        {
          id: 3,
          name: "Help",
          icon: <HiOutlineQuestionMarkCircle />,
        },
        {
          id: 4,
          name: "Send Feedback",
          icon: <MdOutlineFeedback />,
        },
      ],
    },
  ];

  return (
    <>
      {mobileShow && (
        <div
          onClick={() => setMobileShow(false)}
          className="fixed inset-0 z-30 bg-black/50"
        />
      )}

      <div
        className={`${
          mobileShow
            ? "fixed top-0 left-0 z-40 h-full bg-white w-[75vw] max-w-[260px] transition-all duration-300"
            : "hidden xl:block xl:static xl:w-[20%] xl:h-[calc(100vh-64px)]"
        }xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden no-scrollbar`}
      >
        {/* Home */}
        <div className=" space-y-3 items-center">
          {sidebarItems.map((group) => {
            return (
              <div className="mb-5">
                <h1 className="font-bold">{group.groupName}</h1>
                {group.groupItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1 my-3"
                  >
                    <div className="text-sm cursor-pointer">{item.icon}</div>
                    <span className="text-sm cursor-pointer">{item.name}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <span className="text-xs font-semibold text-gray-500">
          About Press Copyright
          <br />
          Contact us Creators
          <br />
          Advertise Developers
          <br />
          <br />
          <p>
            Terms Privacy Policy & Safety
            <br /> How Youtube works <br /> Test new features
          </p>
        </span>
        <br />
        <p className="text-xs text-gray-800">&copy; 2025 Google LLC</p>
      </div>
    </>
  );
}

export default Sidebar;
