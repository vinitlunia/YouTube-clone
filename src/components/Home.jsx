import { useAuth } from "../context/AuthProvider"
import ListItem from "./ListItem"
import Sidebar from "./Sidebar"
import Video from "./Video"

function Home() {
    const {data,loading} = useAuth()
  return (
    <div className="flex mt-20">
        <Sidebar/>
        <div className="h-[calc(100vh-6.625rem)]  overflow-y-scroll overflow-x-hidden">
            <ListItem/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-5 ">
            {
               !loading && data.map((item)=>{
                    if (item.type !=="video") return false;
                    return <Video key={item.id} video={item?.video}/>
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Home