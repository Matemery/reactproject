import './catalog.css'
import Product from '..components/product'
import dataService from ''



function Catalog(){
    const[products, setProducts] = useState([]) 

    useEffect(()=> {
let service = new DataService()
let data = service.getProducts()
setProducts(data)
console.log(products)
},[]
)
    return(
        <div className="catalog">
            <h1>Check out our amazing products</h1>
           <div className="product-list">
            {products.map(item => <Product key={item.prod_id} data={prod}/>)}
           </div>
        </div>
    )
}