import axios from "axios"
import { useEffect, useState } from 'react'
import Service from '../components/Service'


const Fetch =()=>{
    
    const [services, setServices] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:52000/products')
        .then((res)=>{
            setServices(res.data.Records)
        })    
    },[])   

    return(
        <form className="formServices">            
            <Service array={services}></Service>
        </form>
    )
}

export default Fetch


