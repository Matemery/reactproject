import './catalog.css'
import Product from '../components/product'
import DataService from '../services/dataService'
import { useEffect, useState } from 'react'

function Catalog() {
  
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  
  useEffect(() => {
   
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    console.log(data);
    loadCategories();  
  },[]
) 

function loadCategories(){
  let service = new DataService();
  let data = service.getProducts();
  setProductsFiltered(data);
  let cats=["fruit","berrys"];
  setCategory(cats);
}

  function filter(filterCat){
    let list = [];
   
    for(let i=0; i<products.length; i++){
      let prod = products[i];
      if(prod.category === filterCat){
        list.push(prod);
      }
    }
    setProductsFiltered(list);
  }
  function clearFilter(){
    setProductsFiltered(products);
    
  }

  return (
    <div className="catalog">
      <h1>Check our {products.length} amazing products</h1>
     <br />
      <div className="categories">
         <button onClick={clearFilter} className="btn btn-primary">All</button>
      {category.map(cat => <button className='btn btn-dark' onClick={()=>filter(cat)} key={cat}>{cat}</button>)}
      </div>

      <div className="product-list">
        {productsFiltered.map(prod => <Product key={prod._id} data={prod}/>)}
      </div>
     
    </div>
  )
}

export default Catalog;