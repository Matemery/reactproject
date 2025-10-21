import './product.css';
import QuantityPicker from './qtypicker';
import { useState } from 'react';

function Product(props) {

  const [qty, setQty] = useState(1);

  function handleQtyChange(qty) {
    console.log("New Qty: " + qty);
    setQty(qty);
  }
   function getTotal(){
    let total = props.data.price * qty;
    return total.toFixed(2);
   }

   
  return (
    <div className="product">
      
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>${props.data.price}</label>
        <label>${getTotal()}</label>
      </div>
      <QuantityPicker onChange={handleQtyChange} />
      <button className="btn btn-sm">Add</button>
    </div>
  );
} export default Product;