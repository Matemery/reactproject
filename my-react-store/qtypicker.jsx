import "./qtypicker.css"
import { useState } from "react"


let value=0;
function QuantityPicker()
{
    return(
        <div>
            <button> - </button>
            <label>{value}</label>
            <button> + </button>
        {console.log("clicked")}
        </div>    
        )
}
export default QuantityPicker;