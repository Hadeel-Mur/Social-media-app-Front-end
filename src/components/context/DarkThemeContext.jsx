import React, { createContext, useEffect, useState } from 'react';

export const DarkThemeContext = createContext( );

export const DarkThemeContextProvider = ({children}) => {
    // local storage to save the theme choice
    const [theme, setTheme ] = useState(
        JSON.parse(localStorage.getItem("theme")) || false
    )

    const toggle =() => {
        setTheme(!theme)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
    <DarkThemeContext.Provider value={{ theme, toggle}}>
       {children}
    </DarkThemeContext.Provider>
    )
}