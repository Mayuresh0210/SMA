import { useEffect, useState, createContext } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

        const[currentUser, setCurrentUser] = useState(
         JSON.parse(localStorage.getItem("user")) || null
         );
   
const login = () => {
   //to do
   setCurrentUser({
    id:1,
    name: "honey singh",
    profilepic:
    "https://images.news18.com/ibnlive/uploads/2019/08/Honey-Singh.jpg",
   });
};

    useEffect(() =>{
    localStorage.setItem("user", JSON.stringify(currentUser));
      },[currentUser] );


      return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
      );

};