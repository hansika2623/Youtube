import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import SuggestedVideo from "./SuggestedVideo";
import { useAuth } from "../context/AuthProvider";
import '../index.css'

function PlayingVideo() {
  const location = useLocation();
  const [video, setVideo] = useState(location.state?.video);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();
  const { data } = useAuth();

  useEffect(() => {
    if(!location.state?.video){
      fetchVideoDetails();
    }else{
      setVideo(location.state.video);
    }
    fetchRelatedVideo();
  }, [id, location.state]);

  const fetchVideoDetails = () => {
    if (!location.state?.video) {
      fetchData(`video/details/?id=${id}`)
        .then((res) => {
          //This endpoint details of the video is taken from the rapidapi -> youtube -> sidebar -> video details -> path
          console.log(res);
          setVideo(res);
        })
        .catch((err) => {
          console.error("Error fetching video data:", err);
        });
    }
  };

  const fetchRelatedVideo = async () => {
    try {
      const res = await fetchData(`video/related-contents/?id=${id}`);
      if (res?.contents?.length > 0) {
        setRelatedVideo(res.contents.filter((item) => item.type === "video"));
      } else {
        const fallback = shuffleArray(
          Array.isArray(data)?data.filter((item) => item.type === "video"):[]
        )
          .slice(0, 10)
          .map((item) => ({
            type: "video",
            video: item.video,
          }));
        setRelatedVideo(fallback);
      }
    } catch (error) {
      console.error("Error in fetching related videos:", error);
    }
  };

  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="flex mt-16 h-[calc(100vh-64px)] overflow-hidden">
      <div className="flex-1 overflow-y-scroll px-4 pb-10 custom-scroll no-scrollbar">
        <div className="max-w-[900px] mx-auto">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="100%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          <div className="font-bold text-xl mt-4">{video?.title}</div>
          <div className="flex justify-between items-start mt-4 flex-col md:flex-row">
            <div className="flex items-start">
              <img
                className="w-11 h-11 rounded-full object-cover"
                src={video?.author?.avatar[0]?.url ||"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
              
              />
              <div className="ml-3">
                <div className="text-md font-semibold flex items-center">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-gray-500 text-sm ml-1" />
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <span className="mt-4 md:mt-0 text-center bg-red-500 px-4 py-2 rounded-full text-white cursor-pointer hover:bg-red-700 duration-200">
              Subscribe
            </span>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-3xl text-sm">
              <FaHeart className="text-red-600 mr-2" />
              {`${abbreviateNumber(video?.stats?.likes || 0, 2)} Likes`}
            </div>
            <div className="flex items-center bg-white/20 px-4 py-2 rounded-3xl text-sm">
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-4 mt-4 text-sm text-gray-700">
            {video?.description || video?.descriptionSnippet || "No description for this video"}
          </div>
          <div className="mt-4 text-sm text-gray-500 font-semibold">
            {video?.stats?.comments !== undefined
              ? `${abbreviateNumber(video?.stats?.comments, 2)} Comments`
              : "Comments Disabled"}
          </div>
        </div>
      </div>
      <div className="w-[350px] xl:w-[400px] overflow-y-scroll px-4 py-6 custom-scroll no-scrollbar"><h1 className="text-xl mb-3 font-bold">More like this</h1>
        {relatedVideo.map((item, index) => {
          if (item?.type !== "video") return null;
          return <SuggestedVideo key={index} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default PlayingVideo;
