import { createBrowserRouter, RouterProvider } from "react-router";
import First from "./Class 1/First";
import Second from "./Class 1/Second";
import Card from "./Class 2/Card";
import New from "./Class 2/New";
import SecondC, { Hello, NewComponent } from "./Class 2/SecondC";
import ThemeUpdate from "./Class 2/ThemeUpdate";
import InputChange from "./Class 3/InputChange";
import ThemeChanger from "./Class 3/ThemeChanger";
import Home from "./Class 3/router/Home";
import About from "./Class 3/router/About";
import Course from "./Class 3/router/Course";
import Contact from "./Class 3/router/Contact";
import PageNotFound from "./Class 3/router/PageNotFound";
import Mern from "./Class 3/router/child/Mern";
import JavaFS from "./Class 3/router/child/JavaFS";
import PythonFS from "./Class 3/router/child/PythonFS";
// import Navbar from "./Class 3/router/Navbar";
import Student from "./Class 3/router/Student";
import Form from "./Class 4/Form/Form";
import Date from "./Class 3/Calender";
import Calender from "./Class 3/Calender";
import UseEffect from "./Class 4/UseEffectHook/UseEffect";
import FetchAxios from "./Class 5/FetchAxios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import UseReducer1 from "./Class 5/UseReducer1";
import Todo from "./Class 6/Todo";
import './App.css'
import Tracker from "./Class 7/Tracker";
import AboutPagination from "./Class 8/AboutPagination";
import Weather from "./Class 9/Weather";
import ProductDetails from "./Class 8/ProductDetails";
import Redux from "./Class 10/Redux";
import Navbar from "./Class 10/AddTocart/Navbar";
import Cart from "./Class 10/AddTocart/Cart";

function App() {
  // let router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<> 
  //     <Navbar/>
  //     <Home />
  //     </>
  //   }, // home
  //   {
  //     path: "/about",
  //     element: <>
  //     <Navbar/>
  //     <About />
  //     </>
  //   }, // about
  //   {
  //     path: "/courses",
  //     element: <>
  //     <Navbar/>
  //     <Course />
  //     </>,
  //     children:[
  //       {
  //         path:"mern",
  //         element:<Mern/>
  //       },
  //       {
  //         path:"javafs",
  //         element:<JavaFS/>
  //       },
  //       {
  //         path:"pythonfs",
  //         element:<PythonFS/>
  //       }
  //     ]
  //   }, // course
  //   {
  //     path: "/contact",
  //     element: <>
  //     <Navbar/>
  //     <Contact />
  //     </>
  //   }, // contact
  //   {
  //     path: "/student/:id",
  //     element: <>
  //     <Navbar/>
  //     <Student />
  //     </>
  //   },
  //   {
  //     path: "*",
  //     element:<PageNotFound/>
  //   }
  // ])

  let router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><AboutPagination/></>
    },
    {
      path:"/products/:id",
      element:<ProductDetails/>
    },
    {
      path:"/products/:id/cart",
      element:<Cart/>
    }
  ])
  return (
    <>
      {/* First Class */}
      {/* <First/>
    <Second/> */}

      {/* Second Class */}
      {/* <SecondC/>
    <NewComponent/>
    <Hello/> */}

      {/* <Card id="1" name="Gulshan" course="Mern" city="Gurgaon"/>
    <Card id="2" name="Heena" course="Python FS" city="Gurgaon"/>
    <Card id="3" name="Rakes" course="MERN" city="Gurgaon"/>
    <Card id="4" name="Pradeep" course="MERN" city="Gurgaon"/> */}

      {/* <New/> */}

      {/* <ThemeUpdate/> */}


      {/* Class 3 */}

      {/* <ThemeChanger/> */}
      {/* <InputChange/> */}

      {/* <RouterProvider router={router} /> */}
      {/* <Calender/> */}

      {/* Class 4 */}
      {/* <Form/> */}
      {/* <UseEffect/> */}

      {/* Class 5 */}
      {/* <FetchAxios/> */}
      {/* <UseReducer1/> */}

      {/* Class 6 */}
      {/* <Todo/> */}

      {/* Class 7 */}
      {/* <Tracker/> */}

      {/* Class 8 */}
      {/* <AboutPagination/> */}



      {/* Class 9 */}
      {/* <Weather/> */}

      {/* class 10 */}
      <RouterProvider router={router}/>
      {/* <Redux/> */}

    </>
  ) 
}

export default App;