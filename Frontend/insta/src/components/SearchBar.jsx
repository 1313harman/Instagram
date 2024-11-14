import React, { useState,useEffect } from 'react'
import images from './Images'

function SearchBar() {
    const [showSearchIcon,setShowSearchIcon] = useState(true)
    const [searchResult,setSearchResult] = useState('')
    const [data,setData] = useState([])
    const [filteData,setFilterData] = useState([])
    const handleHideSearchIcon = () =>{
        setShowSearchIcon(false)
    }

    const api = {
        key:'1dcdcacb5e3d46b4bacf42a039454fc9',
        base:'https://newsapi.org/v2/',
      }
    const fetchData = () =>{
        fetch(`${api.base}everything?q=tesla&from=2024-10-10&sortBy=publishedAt&apiKey=${api.key}`)
        .then((res)=>res.json())
        .then((result)=>setData(result.articles))
      }
      const authorArray = data.map((d)=>d.author)

    const handleText = (value) =>{
        const filterData = data.filter((item) => item.author && item.author.toLowerCase().includes(value.toLowerCase()));
        setFilterData(filterData);
        
    }
    const handleSearchInput = (e) =>{
        setSearchResult(e.target.value)
        handleText(e.target.value)
    }

    const DeleteAllSearchResult = () =>{
        setFilterData([])
    }
    
    const DeleteSearchResult = (index) =>{
        setFilterData((prevData)=>prevData.filter((_,i)=>i!=index))
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])
    
    

  return (
<>
    <div className="fixed z-50  h-[696px] w-[415px]  border-r-2  border-opacity-5 border-black px-8 ml-16 bg-white   rounded-e-3xl">
        <div className='flex flex-col gap-5 justify-center items-center'>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-12'>
                    <div className='mt-6'>
                        <h1 className='text-2xl font-semibold'>Search</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        {showSearchIcon && <img src={images.searchIcon} className='absolute h-[18px] w-[18px] -ml-80 mt-[2px]' alt="" />}
                        <input type="search" value={searchResult} className=' w-[360px] bg-zinc-200 py-[5px] rounded-md bg-opacity-75 px-2' placeholder={`${showSearchIcon ? '        Search' : 'Search'}`} onClick={handleHideSearchIcon} onChange={handleSearchInput}/>
                    </div>      
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <hr className='w-[415px] h-[2px] bg-black opacity-15' />     
                </div>        
            </div>
            <div className='flex flex-row gap-[242px]'>
                <h1 className='font-semibold'>Recents</h1>
                <button><span className='text-sm text-sky-500 font-semibold' onClick={DeleteAllSearchResult}>Clear all</span></button> 
            </div>
            <div className='flex flex-col gap-4'>
                {searchResult && filteData.slice(0, 5)?.map((data,index)=>
                    <div key={index} className="flex flex-row justify-between items-center overflow-hidden gap-52">
                        <div className="flex flex-row items-center gap-3 flex-1">
                            <button><img className="w-12 h-12" src={ data.urlToImage || images.useImage} alt="" /></button>
                            <div className="flex flex-col flex-1 min-w-0">
                                <h1 className="text-xs flex-1 font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{data.author.slice(0,10) || 'Unknown'}</h1>
                                <p className="text-sm text-gray-500">Followed</p>
                            </div>
                        </div>
                        <div>
                            <button className="text-xs text-sky-400 font-bold ml-3" onClick={()=>DeleteSearchResult(index)}>
                                <img className="h-[22px] w-[22px]" src={images.InstaClose} alt="" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
</>
  )
}

export default SearchBar