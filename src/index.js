import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Contact from './routes/Contact';
import Home from './routes/Home';
import About from './routes/About';
import Projects from './routes/Projects.js';
import Navbar from './components/Navbar.js';
import HeroImg from './components/HeroImg.js';
import Footer from './components/Footer.js';

const AppLayout=()=> {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </div>
  );
}

const AppRoute = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/projects",
      element:<Projects/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]
},
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRoute}/>)
  
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
