import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import { clearCart } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {

    const cartItem = useSelector(store => store.cart.items)

    const dispatch = useDispatch();

    const handleRemovefriend = ()=>{
        dispatch(clearCart())
    }
    return (
        <div>
            <button
            className='bg-green-100 rounded-md'
            onClick={handleRemovefriend}
            >Remove Friends</button>
            <div className="flex flex-wrap">
            {cartItem.map((item) => {return <CartCard key={item.pid} carddata={item}/>})}
            </div>
        </div>
    )
}

export default Cart;