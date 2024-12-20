import {createContext, useContext, useEffect, useState} from "react";
import { fetchData } from "../utils/RapidApi";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AuthProvider({children}){
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([]);
    const [value, setValue] = useState("New");

    useEffect(() =>{
        fetchAllData(value)
    },[value])

        const fetchAllData=(query) =>{
            setLoading(true)
            fetchData(`search/?q=${query}`).then(({contents})=>{
                setData(contents)
                setLoading(false)
            }) 

        }
        return(
            <AuthContext.Provider value={{loading, data, value , setValue}}>
                {children}
            </AuthContext.Provider>
        )
 
}

export const useAuth = () => useContext(AuthContext);