import React from 'react'
import SearchBar from './shared/SearchBar'
import { categoryData } from '../data/categoryData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/cartSlice'

const Sidebar = () => {
    const {category}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  return (
    <div className='w-fit min-h-screen border-r-2 border-[#E3E9F1] pt-12 px-4 block max-md:hidden'>
        <SearchBar/>
        <div className='my-12 flex flex-col gap-8'>
            {categoryData.map((data)=>(
                <div
                    key={data.id} 
                    className={`flex items-center gap-4 p-1 font-normal cursor-pointer ${
                        data.value===category
                        && "bg-primary-100 rounded-lg text-primary-200 font-semibold"
                    }`}
                    onClick={()=>dispatch(setCategory(data.value))}
                >
                    <img src={data.image} alt="" className='w-[40px] h-[40px] rounded-xl'/>
                    <p>{data.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sidebar