import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext( );

export const AuthContextProvider = ({children}) => {
    // local storage to save the theme choice
    const [currentUser, setCurrentUser ] = useState(
        // check if there is a user inside the local storage if not is gonna be null
        JSON.parse(localStorage.getItem("user")) || null
    )

    const login =() => {
        // To Do
        setCurrentUser({
        id:1, 
        name:"Yara", 
        profilePic: "https://wallpapers.com/images/featured-small/cute-black-girl-pictures-ityjf6m8v4kiyk9y.webp"})
    }
// whenever we change our user we are gonna write it in the local storage
// in the DarkThemeContext was true or fals but here the current user is gonna be an object with id, pic, email ..etc so we can't drag that in the local storgae that's why we have to transform this to string
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
    <AuthContext.Provider value={{ currentUser, login}}>
       {children}
    </AuthContext.Provider>
    )
}