import {useState} from "react"
import GlobalContext from "./globalContext"


// global provider provides state and logic
function GlobalProvider(props){
    const[cart, setcart] = useState([])
    const [user] = useState({id: 25, name: "Mat", cohort:61})

    function addProductToCart(prod){
        console.log("Global Add", prod);

        let copy = [...cart] // crates a copy of current cart
        copy.push(prod) // add the new product to the copy
        setcart(copy) // update the cart state with the new copy 
        }
        function clearCart(){
            setcart([])
        }
        function removeProductFromCart(productId){ //remove item from cart by id
            const updatedCart = cart.filter(item => item.id != productId) // filter out the product with matching id

            setcart(updatedCart) // update the cart state with the filtered list
        }
   
    return(
        <GlobalContext.Provider value={{
            cart: cart, // current cart state
            user: user, // current user state 
            addProducttoCart: addProductToCart, // function to add a product
            clearCart : clearCart, // function to clear cart
            removeProductFromCart: removeProductFromCart  // function to remove a product

        }}>
            {props.children} {/* render any child component inside the provider */}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider