/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const UtilsContext = createContext(null);

export const UtilsContextProvider = ({children}) =>{
    const [isSidebar , setisSidebar] = useState(false);
    const [mobilShow,setmobilShow] = useState(false);

    return <UtilsContext.Provider value={{isSidebar, setisSidebar ,mobilShow ,setmobilShow}}>
        {children}
    </UtilsContext.Provider>

}

export const useUtils = () =>{
    const utilsContext = useContext(UtilsContext);
    if(!utilsContext) return null 
    return utilsContext;
}