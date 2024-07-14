import { useCartContext } from "../context/CartContext"
import alertIconSmall from '../assets/icons/small_alert.svg';
import { useState } from "react";

const Service =({array})=>{

    const { handleSelectedServices } = useCartContext(); 
    const [active, setActive] = useState([]);

    const handleChange=(ev)=>{        
        handleSelectedServices(ev.target, array)        
    }
    const handleClick=(ev)=>{       
        const id = `div${ev.target.id}`
        if(ev.target.type==='checkbox'&& ev.target.checked===true){                    
            setActive([...active, id])
        }else if(ev.target.type==='checkbox'&& ev.target.checked===false){            
            setActive(active.filter(each => each !== id))
        }    
    }
     
    return array.map(each=>{        
        return (
           <div className={"serviceComponent " +(active.includes('div' + each.idServicio)? 'selected':'')} key={each.idServicio} onClick={handleClick} id={'div' + each.idServicio} >
                <div className="serviceComponent__subContainer nameSubcontainer">
                    <input type="checkbox" name={each.nombre} id={each.idServicio} onChange={handleChange} className="serviceComponent__checkbox"/>
                    <p>{each.nombre}</p>
                </div>
                <div className="serviceComponent__subContainer priceSubcontainer">
                    <p>{each.valor} €</p>
                    {each.aditional && <img src={alertIconSmall} alt='alerta' className='serviceComponent__subContainer--icon'/>}
                    <button className={(active.includes('div' + each.idServicio)? 'selected':'')}>Ver detalle +</button>
                </div>
           </div> 
        )
    })
    
}
export default Service


