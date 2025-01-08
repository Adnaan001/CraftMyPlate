import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/shared/SearchBar'
import menuData from '../data/menuData'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, setCategory } from '../redux/slices/cartSlice'
import PlatterItems from '../components/PlatterItems'
import { categoryData } from '../data/categoryData'

const Home = () => {
    const {category,cart}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    console.log("cart==>",cart)
  return (
    <div className='h-full'>
        <Navbar/>
        <div className="mt-[72px] flex">
            <Sidebar />
            {/* Main Content */}
            <div className="pt-12 p-4 max-w-fit max-md:max-w-full max-sm:w-full px-8">
                <SearchBar className={''}/>
                {/* Mobile Filter Section */}
                <div className="block md:hidden mt-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            {categoryData.map((data) => (
                                <div
                                    key={data.id}
                                    className={`cursor-pointer p-2 rounded-lg ${
                                        category === data.value ? 'bg-primary-100 text-primary-200' : 'bg-gray-50'
                                    }`}
                                    onClick={() => dispatch(setCategory(data.value))}
                                >
                                    {data.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className='grid grid-cols-2 gap-4 gap-y-6 w-full my-20'
                >
                {
                    menuData.map((data) => {
                        if (data.category === category) {
                            return (
                                <div
                                    key={data.id}
                                    className="flex flex-col lg:flex-row items-center gap-6 "
                                >
                                    {/* Image */}
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className="w-[120px] h-[120px] rounded-lg object-cover"
                                    />
                                    
                                    {/* Details */}
                                    <div className="flex flex-col gap-4 max-md:items-center max-sm:items-center">
                                        <p className="font-bold max-md:text-center max-sm:text-center">{data.name}</p>
                                        <p className="text-sm font-light max-md:text-center max-sm:text-center">{data.description}</p>
                                        <button 
                                            className={`w-fit border border-primary-200 rounded-xl px-6 text-primary-200
                                            ${
                                                cart.find((item)=> item.id === data.id)
                                                && 'text-white bg-primary-200'
                                            }`}
                                            onClick={()=>dispatch(addToCart(data))}
                                        >
                                                {
                                                    cart.find((item) => item.id === data.id) 
                                                    ? 'Added' 
                                                    : 'Add'    
                                                }
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                }
                </div>
            </div>
            <PlatterItems className={'hidden md:block h-full'}/>
        </div>
    </div>
  )
}

export default Home