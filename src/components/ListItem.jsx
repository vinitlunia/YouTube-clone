
function ListItem() {
    const categories = [
        "All","Music","React routers","Computer programing","Reverberation","Movie musicals","Indian national cricket team","News","Mixes","1990s","Telugu cinema","Live","Dramedy","Dubbing","Indian soup opera","Cricket","Football","Learn condding"
    ]
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar scrollbar-none px-4">
        <div className="flex space-x-4 flex-nowrap">
        {categories.map((category)=>{
            return(
                <div key={category} className="mb-4 flex-none border-b-2 bg-gray-200 duration-300 rounded-xl py-2 px-4 hover:bg-gray-200 font-medium cursor-pointer">
                    {category}
                    </div>
            )
        })}
    </div>
    </div>
  )
}

export default ListItem