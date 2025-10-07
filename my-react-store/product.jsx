function product(props){
    return(
        <div className="product">
            <img src={'#' + props.img.data} alt="product"/>
            <h5>Product Title Goes Here</h5>
            <div className="prices">
                <label>{props.data.price.toFixed(2)}</label>
                <label>Total</label>
            </div>
            
        </div>
    )
}