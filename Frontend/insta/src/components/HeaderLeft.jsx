import React, { useEffect, useState } from 'react'
import images from './Images'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';



function HeaderLeft() {
    const [More,setMore] = useState(false)
    const [showSearch,setShowSearch] = useState(false)

    const handleShowMore = () =>{
        setMore(true)
        console.log('Displaye Viwed',More)
    }


    const handleShowLess = () =>{
        setMore(false)
        console.log('Display cannot view',More)
    }

    const handleOpenSearchBar = () => {
      setShowSearch(true)
      console.log('Search Bar Opened',showSearch)
    }

    const handleCloseSearchBar = () =>{
      setShowSearch(false)
      console.log('Search Bar Opened',showSearch)
    }

  return (
    <>  
      {More &&
      <div className="fixed z-50  h-[429px] w-[250px] justify-center items-center border-l-2 border-r-2 border-b-2 border-opacity-5 mt-48 border-black px-8  ml-4 bg-white bg-opacity-95 shadow-xl rounded-r-md rounded-b-2xl  rounded-t-2xl py-3">
        <div className='flex flex-col justify-center items-center gap-[14px]'>
          <div className='flex flex-col gap-7 px-7 py-6 w-[249px] justify-start items-start bg-white -mt-3 rounded-t-2xl shadow-xl'>
            <div className='flex gap-3'>
              <button> <img className='w-5 h-5'  src={images.Settings} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Settings</span></button>
            </div>
            <div className='flex gap-3'>
              <button> <img className='w-5 h-5' src={images.Activity} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Your Activity</span></button>
            </div>
            <div className='flex gap-3'>
              <button> <img className='w-5 h-5' src={images.Save} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Saved</span></button>
            </div>
            <div className='flex gap-3'>
              <button> <img className='w-5 h-5' src={images.Apperance} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Switch Apperance</span></button>
            </div>
            <div className='flex gap-3'>
              <button> <img className='w-5 h-5' src={images.Report} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Report a problem</span></button>
            </div>
          </div>

          <div className='flex flex-col gap-7 px-7 py-5 w-[249px] justify-start items-start bg-white -mt-3'>
            <div className='flex'>
              <button> <img className='w-5 h-5'  src={images.Threads} alt="" /> </button> <button className='text-left text-sm'><span className='font-montseerat'>Threads</span></button>
            </div>
          </div>
          
          <div className='flex flex-col gap-7 px-7 py-1 w-[249px] justify-start items-start bg-white rounded-b-2xl -mt-3'>
            <div className='flex flex-col gap-[45px]'>
              <button className='text-left text-sm'><span className='font-montseerat'>Switch accounts</span></button>
              <button className='text-left text-sm'><span className='font-montseerat'>Log Out</span></button>
            </div>
          </div>

        </div>
      </div>
      } 

      {showSearch && 
      <>
          <SearchBar />
      </>
      }

        <div className='fixed flex flex-col justify-center items-start w-[245px] border-e-2 px-9 ps-5'>
            <div className='flex flex-col mt-8 gap-14'>
              {showSearch ? (
                <>
                  <button ><Link to="/app/home"><img className='h-[28px] w-[28px]' src={images.instaIcon} alt="" /></Link></button>
                </>
              ):(
                <>
                  <button><Link to="/app/home"><img className='h-[28px] w-[103px] ml-1' src={images.instaText} alt="" /></Link></button>
                </>
              )}
  
                <div className='flex flex-col gap-7' style={{textDecoration:false}}>
                    <div className='flex gap-3'>
                       <button> <Link to="/app/home"><img className='h-7 w-7' src={images.Home} alt="" /></Link></button>  
                       {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>Home</span></button>
                       }
                       
                    </div>
                    <div className='flex gap-3'>
                      <button onClick={showSearch ?  handleCloseSearchBar : handleOpenSearchBar}>  <img className='h-7 w-7' src={images.Search} alt="" /></button> 
                      {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>{showSearch ? 'Search' : 'Search'}</span></button>
                      } 

                    </div>
                    <div className='flex gap-3'>
                       <button> <img className='h-7 w-7' src={images.Explorer} alt="" /></button>  
                       {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>Explorer</span></button>
                       } 
                    </div>
                    <div className='flex gap-3'>
                      <button> <img className='h-7 w-7' src={images.Reels} alt="" /> </button>
                      {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>Reels</span></button>
                      }                        
                      
                    </div>
                    <div className='flex gap-3'>
                      <button> <img className='h-7 w-7' src={images.Messages} alt="" /> </button>   
                      {!showSearch && 
                          <button className='text-left'><span className='font-montseerat hover:font-bold'>Messages</span></button>
                      }
                    </div>
                    <div className='flex gap-3'>
                      <button> <img className='h-7 w-7' src={images.Like} alt="" /></button>   
                      {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>Notifications</span></button>
                      }
                    </div>
                    <div className='flex gap-3'>
                      <button>  <img className='w-7 h-7' src={images.Create} alt="" /></button>  
                      {!showSearch && 
                          <button className='text-left'><span className='font-montseerat hover:font-bold'>Create</span></button>
                      }
                    </div>
                    <div className='flex gap-3'>
                      <button>  <img className='w-7 h-7' src={images.useImage} alt="" /></button>  
                      {!showSearch && 
                        <button className='text-left'><span className='font-montseerat hover:font-bold'>Profile</span></button>
                      }
                    </div>
                </div>
            </div>
            <div className='flex py-28 gap-3'>
                <button onClick={More?handleShowLess:handleShowMore}>  <img className='w-7 h-8 opacity-85 hover:w-[29px] hover:h-[33px]' src={images.Menu} alt="" /></button>  
                {!showSearch && 
                      <button onClick={More?handleShowLess:handleShowMore}><span className={`font-montseerat hover:font-bold ${More ?  'font-montseerat font-bold' : ''}`}>More</span></button>
                }
                
            </div>

        </div>
    </>
  )
}

export default HeaderLeft