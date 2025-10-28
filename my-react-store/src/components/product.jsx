import './product.css';
import GlobalContext from "../state/globalContext";
import QuantityPicker from './qtypicker';
import { useState, useContext } from 'react';

function Product(props) {

  const [qty, setQty] = useState(1);
  const globalAdd = useContext(GlobalContext).addProductToCart

  function handleQtyChange(qty) {
    console.log("New Qty: " + qty);
    setQty(qty);
  }
  function getTotal() {
    let total = props.data.price * qty;
    return total.toFixed(2);
  }
  function onAdd() {
    let fixedProduct = {...props.data}
    fixedProduct.quantity = qty
    globalAdd(fixedProduct)
  }


  return (
    <div className="product card h-100">
      <img src={props.data.image} className="card-img-top" alt={props.data.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.data.title}</h5>
        <div className="prices mt-auto">
          <label>Price: ${props.data.price.toFixed(2)}</label>
          <label>Total: ${getTotal()}</label>
        </div>
        <div className="mt-2">
          <QuantityPicker onChange={handleQtyChange} />
        </div>
        <button className="btn btn-primary btn-sm mt-2">Add</button>
      </div>
    </div>
  );
} export default Product;