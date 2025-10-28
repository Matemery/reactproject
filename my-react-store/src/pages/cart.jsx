import { useContext } from 'react'
import GlobalContext from '../state/globalContext'
import { IconTrash } from '@tabler/icons-react';


function Cart() {
  const cart = useContext(GlobalContext).cart
  const removeProduct = useContext(GlobalContext).removeProductFromCart

  return (
    <div className='container'>
      <h1 className='text-center my-4'>Ready to complete the purchase?</h1>

      <ul>
        {cart.map(product => 
          <li key={product._id} className='d-flex align-items-center justify-content-between gap-4 mb-2 border rounded'>
            <img width={150} src={'/images/' + product.image} alt="" />
            <div>{product.title}</div>
            <div className='badge text-bg-dark'>{product.category}</div>
            <div>Quantity: {product.quantity}</div>
            <div>Price: <span className='text-secondary'> ${product.price}</span></div>
            <div>Total: <span className='text-secondary'> ${product.price * product.quantity}</span></div>
            <button onClick={() => removeProduct(product._id)} className='btn btn-danger me-4'> 
              <IconTrash/> 
              Remove
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Cart