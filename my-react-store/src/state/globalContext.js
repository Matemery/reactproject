
import {createContext} from "react"

// global context defines the context structure.
const GlobalContext = createContext({
    cart: [],  // Default cart is an empty array, will hold porduct objects later.
    user: {},  // Default user is an empty object and can store user info like name email ect.

    addProducttoCart : () => {}, //function to add to cart
    clearCart : () => {},  // function to remove everyting from cart.
    removeProductFromCart : () => {}  // to remove specific item from cart
})
// export the context so it can be used in toher components
export default GlobalContext 