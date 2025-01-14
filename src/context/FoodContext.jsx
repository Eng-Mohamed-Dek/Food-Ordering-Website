import { createContext, useState } from "react";
import { food_list, menu_list } from "../assets/assets";


export const FoodContext = createContext(null)


const getCartDefault = () => {
    let cart = {};

    for (let index = 0; index < food_list?.length + 1; index++) {
        cart[index] = 0;
    }

    return cart;
}


const FoodContextProvider = ({ children }) => {
    const [cartitem, setCartItem] = useState(getCartDefault())

    console.log(cartitem)

    // add to cart 
    const AddtoCart = (id) => {
        if (!cartitem[id]) {
            setCartItem((prevFood) => ({ ...prevFood, [id]: 1 }))
        } else {
            setCartItem((prevFood) => ({ ...prevFood, [id]: prevFood[id] + 1 }))
        }
    }


    // remove 
    const removeCart = (id) => {
        setCartItem((prevFood) => ({ ...prevFood, [id]: prevFood[id] - 1 }))
    }

    // get total money
    const getAmount = () => {
        let money = 0;

        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                const product = food_list.find(food => food._id === item)
                money += product?.price * cartitem[item]
            }
        }

        return money;
    }



    return (
        <FoodContext.Provider value={{ food_list, menu_list, cartitem, AddtoCart, removeCart, getAmount }}>
            {/* all the components  */}
            {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider;