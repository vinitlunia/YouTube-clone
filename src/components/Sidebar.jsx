import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { useUtils } from "../context/utilsConstext";



function Sidebar() {

    const {mobilShow,setmobilShow} = useUtils()



    const sidebarItems = [
        {
            groupName: "Home",
            groupItems: [
                {
                    icon: <MdHomeFilled className="text-xl" />,
                    name: "Home",
                },
                {
                    icon: <FaRegCompass className="text-xl" />,
                    name: "Explore",
                },
                {
                    icon: <MdOutlineSlowMotionVideo className="text-xl" />,
                    name: "Shorts",
                },
                {
                    icon: <MdSubscriptions className="text-xl" />,
                    name: "Subscriptions",
                },
            ]

        },
        {
            groupName: "You",
            groupItems: [
                {
                    icon: <MdOutlineVideoLibrary className="text-xl" />,
                    name: "Library",
                },
                {
                    icon: <MdHistory className="text-xl" />,
                    name: "History",
                },
                {
                    icon: <MdOutlineSmartDisplay className="text-xl" />,
                    name: "Your Videos",
                },
                {
                    icon: <MdOutlineWatchLater className="text-xl" />,
                    name: "Watch Later",
                },
                {
                    icon: <MdThumbUpOffAlt className="text-xl" />,
                    name: "Liked Videos",
                },
            ]

        },
        {
            groupName: "Explore",
            groupItems: [
                {
                    icon: <TbMusic className="text-xl" />,
                    name: "Music",
                },
                {
                    icon: <MdOutlineSportsVolleyball className="text-xl" />,
                    name: "Sport",
                },
                {
                    icon: <TbDeviceGamepad2 className="text-xl" />,
                    name: "Gaming",
                },
                {
                    icon: <GiFilmStrip className="text-xl" />,
                    name: "Films",
                },
            ]

        },
        {
            groupName: "Settings",
            groupItems: [
                {
                    icon: <MdSettings className="text-xl" />,
                    name: "Settings",
                },
                {
                    icon: <MdOutlinedFlag className="text-xl" />,
                    name: "Report history",
                },
                {
                    icon: <MdOutlineHelpOutline className="text-xl" />,
                    name: "Help",
                },
                {
                    icon: <MdOutlineFeedback className="text-xl" />,
                    name: "Send feedback",
                },
            ]

        },
        {
            groupName: "Links",
            groupItems: [
                [
                    "About",
                    "Press",
                    "Copyright",
                    "Contact us",
                    "Creator",
                    "Advertise",
                    "Developers",
                ],
                [
                    "Terms",
                    "Privacy",
                    "Policy & Safety",
                    "How YouTube works",
                    "Test new features",
                ],
            ]

        },
    ]

    const ModelOverlay = () =>{
        return (
            <div className="flex fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" onClick={()=>setmobilShow(!mobilShow)}>

            </div>
        )
    }
    return (
        <>
        <div className={`${mobilShow ? "fixed top-0  bottom-0 left-0  transition-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%] ":" hidden h-[calc(100vh-6.625rem)] w-[25%]"} xl:static xl:block px-2  overflow-y-scroll overflow-x-hidden scrollbar-thin `}>
            <ul className="flex flex-col border-b-2 border-gray-200">
                {sidebarItems.map((group, groupIndex) => (
                    <li key={groupIndex}>
                        <h1 className="font-bold p-6">{group.groupName}</h1>
                        <ul>
                            {group.groupItems.map((item, itemIndex) => {
                                if (Array.isArray(item)) {
                                    // Handle arrays as items
                                    return (
                                        <li key={itemIndex}>
                                            <ul className="flex flex-wrap  gap-2 p-2 text-sm text-gray-600">
                                                {item.map((link, linkIndex) => (
                                                    <li key={linkIndex} className="px-2">
                                                        {link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                }

                                // Handle standard object items
                                return (
                                    <li key={itemIndex} className={`pl-6 py-3 hover:bg-gray-300  ${item === "Home" ? "bg-gray-200" : ""}`}>
                                        <a href="#" className="flex items-center gap-5">
                                            {item.icon}
                                            <span className="text-sm tracking-wider">{item.name}</span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </ul>
            <span className='px-4 text-sm text-zinc-400'>&copy;2022 Google</span>
            <br />
            <p className='px-4 pt-3 text-sm text-zinc-400'>
                This clone is for educational purpose only.
            </p>
        </div>
        {mobilShow ? <ModelOverlay/>:null}
        </>
    )
}

export default Sidebar