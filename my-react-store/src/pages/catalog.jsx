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
    setProductsFiltered(data);
    console.log(data);
    loadCategories();
  }, []
  )
  function loadCategories(){
  let service = new DataService();
  let data = service.getProducts();
  setProductsFiltered(data);
  let cats=["Hand Tools","Storage"];
  setCategory(cats);
}
  function filter(filterCat) {
    let list = [];

    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === filterCat) {
        list.push(prod);
      }
    }
    setProductsFiltered(list);
  }
  function clearFilter() {
    setProductsFiltered(products);

  }

  return (
    <div className="catalog container mt-4">
      <h1 className="text-center">Check our {products.length} amazing products</h1>
      <br />
      <div className="categories text-center mb-4">
        <button onClick={clearFilter} className="btn btn-primary mx-1">All</button>
        {category.map(cat => <button className='btn btn-dark mx-1' onClick={() => filter(cat)} key={cat}>{cat}</button>)}
      </div>

      <div className="product-list row">
        {productsFiltered.map(prod => <div className="col-md-4 mb-4" key={prod._id}><Product data={prod} /></div>)}
        <img
                        src={`/images/${Product.image}`} 
                        alt={Product.title}
                    />
      </div>

    </div>
  )
}

export default Catalog;