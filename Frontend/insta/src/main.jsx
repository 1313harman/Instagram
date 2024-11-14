import { StrictMode, Suspense,useState,useEffect   } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import './index.css';
import Wellcome from './components/Wellcome';
import Login from './components/Login';
import Signin from './components/Signin';
import HomePage from './components/HomePage.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Layout2 from './Layout/Layout2.jsx';
import Layout3 from './Layout/Layout3.jsx';
import People from './components/People.jsx';
import {ClipLoader} from 'react-spinners'
import OpenStory from './components/OpenStory.jsx';
import Layout4 from './Layout/Layout4.jsx';

// const override = {
//   display: "block",
//   margin: "top-65 auto",
//   borderColor: "black",
//   inset: "0",
// };
//loader for LandingPage
function MockLoadingComponent (){
  const [isloading,setIsLoading] = useState(true)
  let [color, setColor] = useState("#808080");
  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },250)
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return isloading ? 
  <div className='flex justify-center items-center mt-64 mb-64 ml-64 mr-64'>
    <div className='flex justify-between items-center'>
      <ClipLoader size={90} loading={true}  color={color}/> 
    </div>
  </div>
  : <Wellcome />
}

//loader for HomePage
function MockLoadingComponent2 (){
  const [isloading,setIsLoading] = useState(true)
  let [color, setColor] = useState("#808080");
  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsLoading(false)
    },1000)
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return isloading ? 
  <div className='flex justify-center items-center -mt-52 mb-[400px] ml-16 mr-44'>
    <div className='fixed flex justify-between items-center overflow-y-hidden overflow-x-hidden'>
      <ClipLoader size={90} loading={true}  color={color}/> 
    </div>
  </div>
  : <HomePage />
}
const App = () =>
{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        {/* Layout 1 */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MockLoadingComponent />} /> {/* Wellcome page will load first on "/" */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
        </Route>
  
        {/* Layout 2 */}
        <Route path="/app" element={<Layout2 />}>
          <Route
            path='home'
            element={
              <HomePage />
            }
          />
        </Route>
  
        {/* Layout 3 */}
        <Route path='/explore' element={<Layout3 />}>
            <Route path='people' element={<People/>}/>
        </Route>

        <Route path='/stories' element={<Layout4 />}>
            <Route path='story' element={<OpenStory/>}/>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);
