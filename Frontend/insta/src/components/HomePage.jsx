import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import images from './Images'
import OpenMenu from './OpenMenu'
import {ShimmerPostItem,ShimmerCircularImage} from 'react-shimmer-effects'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OpenStory from './OpenStory'


function HomePage() {
  const [showMore,setShowMore] = useState({})
  const [openMenu,setOpenMenu] = useState(false)
  const [posts,setPosts] = useState([])
  const [likesBody,setLikesBody] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0);


  const handleShowMore = (index) =>{
        setShowMore((prev)=>{
          if(prev[index]){
            return {...prev,[index]:false}
          }
          else{
            return {...prev,[index]:true}
          }
        })
}

  const api = {
    key:'1dcdcacb5e3d46b4bacf42a039454fc9',
    base:'https://newsapi.org/v2/',
  }

  const handleOpenMenu = () =>{
    setOpenMenu(true)
    document.body.style.overflowY = 'hidden'
  }

  const fetchData = () =>{
    fetch(`${api.base}everything?q=tesla&from=2024-10-10&sortBy=publishedAt&apiKey=${api.key}`)
    .then((res)=>res.json(),setIsLoading(false))
    .then((result)=>
      setPosts(result.articles))
  }

  const fetchLikesAndHeading = () =>{
    fetch('https://dummyjson.com/posts')
    .then((res)=>res.json())
    .then((result)=>
      setLikesBody(result.posts))
  }
  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 599);
    fetchLikesAndHeading()
  }, [])
  
  console.log(posts)
  console.log(likesBody)
  
  const handlePrevImg = () =>{
    setCurrentSlide((prev)=>(prev-4+posts.length)%posts.length)
  }

  const handleNextImg = () =>{
    setCurrentSlide((prev)=>(prev+4)%posts.length)
  }
  
  // const imgURL = imgpost.map((im)=>im.url)
  
  

  return (
    <>
    <div className={`mr-24 -mt-[390px] ${openMenu ? '' : ''}`}> 
      <div className='flex flex-col justify-center items-center gap-7'>
        {/* 1st */}
        <div className=' flex flex-row z-50 justify-center items-center '>
            <div className='absolute z-10 flex gap-[500px] justify-center items-center -mt-12'>
              <button onClick={handlePrevImg}>
                <img className='h-6 w-6 border-4 rounded-full bg-white border-white' src={images.LeftArrow} alt="" />
              </button>
              <button onClick={handleNextImg}>
                <img className='h-6 w-6 border-4 rounded-full bg-white border-white' src={images.RightArrow} alt="" />
              </button>
            </div>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className='flex flex-col justify-between items-center'>
                  <ShimmerCircularImage size={50} />
                </div>
              ))
            ) : (
                <Carousel
                axis="horizontal"
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                transitionTime={450}
                centerMode
                centerSlidePercentage={14.1}
                selectedItem={currentSlide}
                onChange={setCurrentSlide}
                className="max-w-[650px] px-5"
              >
              
                {posts?.slice(0,100).map((post, index) => (
                  <div className=" -z-20 flex gap-1 flex-col justify-between items-center mt-2" key={index}>
                    <div className='rounded-full bg-gradient-to-tr from-yellow-300 via-pink-500 to-purple-600 h-[75px] w-[75px] py-1 px-1'>
                      <div className='rounded-full bg-white h-full w-full flex items-center justify-center'>
                        <button>
                          <Link to="/stories/story"><img className="h-[60px] max-w-[60px] rounded-full" src={post?.urlToImage || images.P2} alt="" /></Link>
                        </button>
                      </div>
                    </div>
                    <button>
                      <h1 className="text-xs">{post?.author?.slice(0, 7) || 'User_in'}</h1>
                    </button>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        {/* 2nd */}
      <div className='flex flex-col justify-center items-center gap-10'>
        
        {isLoading? <>
          {Array.from({length:150}).map(()=>(
            <ShimmerPostItem
              card
              title
              cta
              imageType="thumbnail"
              imageWidth={500}
              imageHeight={450}
              contentCenter
            />
          ))}
        </> :
        posts?.map((post,index)=>(
            <div className='flex flex-col gap-1' key={index}>
                <div className='flex flex-row justify-between items-center gap-[379px]'>
                  <div className='flex flex-row items-center gap-2 flex-1'>
                    <button><img className='h-8 w-8 rounded-full ml-1' src={post.urlToImage || images.P2} alt="" /></button>
                    <button><p className='text-xs text-ellipsis overflow-hidden whitespace-nowrap'>{post?.author ? post?.author.slice(0,5) : 'Unknown'}<span className='text-xs text-gray-500'>.{index}d</span></p></button>
                  </div>
                  <div>
                    {/* DO HERE */}
                    <button onClick={handleOpenMenu}><img className='h-8 w-8' src={images.MenuDots} alt="" /></button>  
                  </div>
                </div>
                <div className='flex justify-center items-center '>
                  <button><img className={`w-[510px] h-[550px] rounded-md`} src={post.urlToImage||images.post1} alt="" /></button>
                </div>
              <div className=''>
                <div className='flex flex-row justify-between items-center gap-4'>
                    <div className='flex flex-row gap-2'>
                      <button><img className='w-7 h-[27px] opacity-80' src={images.Like} alt="" /></button>
                      <button><img className='w-7 h-[27px] opacity-80' src={images.comment} alt="" /></button>
                      <button><img className='w-7 h-[27px] opacity-80'  src={images.share} alt="" /></button>
                    </div>
                    <div>
                      <button><img className='w-6 h-[24px] opacity-80 mt-1' src={images.Save} alt="" /></button>
                    </div>
                </div>
                <div className='flex flex-col gap-1 mt-1'>
                  <p>{likesBody[index % likesBody.length]?.reactions?.likes  || '0'} Likes</p>
                  <div className='flex items-baseline gap-1'>
                    <p className='font-semibold text-xs flex-shrink-0'>user_ID</p>
                    <p className='text-sm max-w-96 overflow-hidden text-ellipsis whitespace-nowrap'>
                      {
                        likesBody[index % likesBody.length]?.body.slice(0,50)
                      }
                      <button onClick={()=>handleShowMore(index)}><span className='text-gray-500'> {showMore[index] ? '' : '...more '}</span></button> </p>
                    <button></button>
                  </div>
                  {showMore[index] && 
                    <>
                      <p className='text-sm max-w-96 -mt-2'>
                          {    
                            likesBody[index % likesBody.length]?.body.slice(50)
                          }
                          <span className='text-blue-500'>
                            #{likesBody[index % likesBody.length]?.tags[0]} 
                            #{likesBody[index % likesBody.length]?.tags[1]}
                            #{likesBody[index % likesBody.length]?.tags[2]}
                            </span>
                      </p>
                    </>
                  }
                  <span className='text-sm text-gray-500'>View All 0 Comments</span>
                  <span className='text-sm text-gray-500'>Add Comments.....</span>
                  <hr className='w-[505px] h-[2px] bg-gray-300 mt-2' />
                </div>
              </div>
          </div>          
        ))}
      </div>
    </div>
  </div>
    {openMenu && 
      <>
      <div>
        <OpenMenu setOpenMenu = {setOpenMenu}/>
      </div>
      </>
    }
    </>
  )
}

export default HomePage
