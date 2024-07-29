import axios from "axios"
import { useEffect, useState } from 'react'
import Service from '../components/Service'
import { useCartContext } from "../context/CartContext"


const Fetch =()=>{
    
    const [services, setServices] = useState([])
    const { calculateAditional } = useCartContext(); 

    useEffect(()=>{        
        axios.get('http://localhost:52000/products')
        .then((res)=>{
            setServices(res.data.Records)
            calculateAditional(res.data.Records)
        })    
        
    },[])   

    return(
        <form className="formServices">            
            <Service array={services}></Service>
        </form>
    )
}

export default Fetch


