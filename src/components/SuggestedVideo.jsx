/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";


function SuggestedVideo({ video }) {
  console.log(video);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>

        <div className="flex mb-3 ">
          <div className="relative h-24 md:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img src={video?.thumbnails[0]?.url} alt="" className="h-full w-full rounded-lg" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              {/* <div className="flex h-9 w-9 rounded-full  overflow-hidden border">
                <img src={video?.author?.avatar[0].url} alt="" className="h-full w-full rounded-full overflow-hidden" />
              </div> */}
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}{video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>

              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SuggestedVideo