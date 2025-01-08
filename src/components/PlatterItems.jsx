import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryData } from '../data/categoryData';
import { RxCross2 } from "react-icons/rx";
import { removeFromCart } from '../redux/slices/cartSlice';

const PlatterItems = ({className}) => {
    const {category, cart} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className={`${className} flex flex-col gap-6 pt-12 pl-12 w-[20rem] `}>
            <h2 className='text-2xl font-bold text-primary-200 mb-4'>
                Platter Items
            </h2>

            <div className='flex flex-col gap-6 flex-grow overflow-y-auto min-h-[30rem] max-md:min-h-[20rem] max-sm:min-h-[20rem]'>
                {
                    categoryData.map((data) => (
                        <div key={data.id}>
                            <h3 className='font-bold text-lg'>{data.name}</h3>
                            <div className='mt-2 flex flex-col gap-4'>
                                {
                                    cart.map((items) => {
                                        if (items.category === data.value) {
                                            return (
                                                <div key={items.id} className='flex justify-between items-center'>
                                                    <div className='flex items-center gap-2'>
                                                        <img src={items.image} alt="" className='w-[40px] h-[40px] rounded-lg'/>
                                                        <p>{items.name}</p>
                                                    </div>
                                                    <RxCross2 
                                                        size={20} 
                                                        color='#5000a2'
                                                        onClick={() => dispatch(removeFromCart(items.id))}
                                                        className='cursor-pointer '
                                                    />
                                                </div>
                                            );
                                        }
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mx-auto mb-6'>
                    <button className='bg-primary-200 text-white rounded-full px-12 py-1'>
                        Confirm Platter
                    </button>
                </div>

        </div>
    );
}

export default PlatterItems;
