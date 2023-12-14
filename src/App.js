import React, {useContext} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Outlet, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home"
import Profile  from "./pages/profile/Profile";
import { DarkThemeContext } from './components/context/DarkThemeContext';
import "./style.scss"
import { AuthContext } from "./components/context/AuthContext";
import Movies from "./pages/movies/Movies"
import Gif from "./pages/gif/Gif"
import Logout from "@mui/icons-material/Logout";
import Friends from "./pages/friends/Friends";
import Saved from "./pages/saved/Saved";



function App() {

  const {theme} = useContext(DarkThemeContext )

  const {currentUser} = useContext(AuthContext)

  // const [savedPosts, setSavedPosts] = useState([]);

  // const addSavedPost = (post) => {
  //   setSavedPosts([...savedPosts, post]);
  // };

  // const removeSavedPost = (postId) => {
  //   setSavedPosts(savedPosts.filter((post) => post.id !== postId));
  // };

  const Layout = () => {

    return (
    //  {`theme-${theme? "dark" : "light"}`}
      <div className={`theme-${theme? "dark" : "light"}`}>
      <NavBar/>      
      <div style={{display: "flex"}}>
        <LeftBar />
        <div style={{flex: 8}}>
        <Outlet /> 
        </div>
        <RightBar />
      </div>
    </div>
   
    )
  }
// to not allowed to go to the main page or the profile page if there is no current user
  const ProtectedRoute = ({children}) => {
   if(!currentUser){
    return < Navigate to="/login/" />
   }
   return children
  }

// we wrapped the children(home, profile pages with protected route to make sure there is a current user)
  const router = createBrowserRouter([
    {
      path:"/", element: (<ProtectedRoute> <Layout/></ProtectedRoute>), 
      children:[
     {path: "/", element: <Home/>},
     {path: "/profile/:id", element: <Profile/>},
     {path: "/movies/", element: <Movies/>},
     {path: "/gif/", element: <Gif/>},
     {path: "/friends/", element:<Friends/>},
     {path: "/saved/", element:<Saved/>},
     
     

    ]},
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>},
    {path: "/logout/", element: <Logout/>},
   
  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
