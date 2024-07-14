import { useCartContext } from "../context/CartContext"

const CartList =()=>{
    const { selectedServices } = useCartContext(); 
    return selectedServices.map(each=>{
        return (
            <div className='cartList' key={each.idServicio}>
                <p>{each.nombre}</p>
                <p className='cartList__price'>{each.valor} €</p>               
            </div>
        )
    })
}
export default CartList