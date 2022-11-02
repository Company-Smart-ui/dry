import './App.css';
import {RenderProps} from "./pages/renderProps/renderProps";

import {
    Route,
    Routes,
    Link,
} from "react-router-dom";
import {Home} from "./pages/home/home";
import {Css} from "./pages/css/css";
import {Composes} from "./pages/composes/composes";
import {ExportDefault} from "./pages/exportDefault/exportDefault";
import {Dry} from "./pages/children/dry";
import {Undefined} from "./pages/undefined/undefined";
const router =  [
    {
        path: "/",
        element: <Home/>,
    },

    {
        path: "/Css",
        element: <Css/>,
    }  ,
    {
        path: "/composes",
        element: <Composes/>,
    },
    {
        path: "/ExportDefault",
        element: <ExportDefault/>,
    },
    {
        path: "/DRY",
        element: <Dry/>,
    },
    {
        path: "/renderProps",
        element: <RenderProps/>,
    },
    {
        path: "/Undefined",
        element: <Undefined/>,
    },
];

const Nav = ()=>{
  return  <nav>
      <ol>    {router.map((item)=>{
          const p =item.path.replace(/\//g , " ").trim();

          return   <li  key={p}><Link  to={"/"+p} >  {p===""?"home":p}</Link> </li>
      })}</ol>

    </nav>
}

function App() {
    return <>
        <Nav/>
         <Routes>
             {router.map((item , i )=>{

                 return  <Route key ={i} path={item.path} element={item.element} />

             })}
         </Routes>
    </>


}

export default App;

