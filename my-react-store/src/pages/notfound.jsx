import {Link} from "react-router-dom"
import { IconMoodPuzzled } from '@tabler/icons-react';




function Notfound(){
    return(
        <div>

            <IconMoodPuzzled stroke={2} size={70} color={"grey"}/>
            <h1>404 not found</h1>
            <p className="text-secondary"> Oops! the page you are looking for does not exsist</p>

            <Link to="/" className="btn btn-dark">Go home</Link>
        </div>
    )
}

export default Notfound