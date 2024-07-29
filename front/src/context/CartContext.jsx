import { createContext, useContext, useState, useEffect } from 'react';
import CartList from '../components/CartList';

export const CartContext = createContext({ selectedServices: [] });

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error('error en el contexto');
  return context;
};

export const CartProvider = ({ children }) => {

  const [selectedServices, setSelectedServices] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [aditionalCost, setAditionalCost] = useState (0);
  const [renderAditionalCost, setRenderAditionalCost] = useState (false);

  function calculateAditional (results){    
    const aditionalResult = results.find(each=> each.aditional)
    setAditionalCost(parseInt(aditionalResult.aditional.price))
  }
 
  function checkAditionalCost(){        
    const checking = selectedServices.find(each=> each.aditional)
    
    if (checking){
      setRenderAditionalCost(true)
      return true
    } 
    else{
      setRenderAditionalCost(false)
      return false
      } 
    }   
  

  const handleSelectedServices = (target, services) => { 
    
    if (target.checked) {
      const serviceFound = services.find((each) => each.idServicio === target.id);
      setSelectedServices([...selectedServices, serviceFound]);      
    } else {     
      setSelectedServices(
        selectedServices.filter((each) => each.idServicio !== target.id));       
    }
  };

  function renderSelectedServices() {   
    if (selectedServices.length > 0) {
      return <CartList />;
    }
    else return <p>No hay nada seleccionado aún</p>
  }

  function calculateCost(condition){
    return selectedServices.reduce((acc, current) => acc + parseInt(current.valor), condition); 
  }

  const addTotalCost = () => {
    if (selectedServices.length > 0) { 
      const addAditional = checkAditionalCost();
      if (addAditional){
        const total =  calculateCost(aditionalCost)
        setTotalCost(total);        
      }
      else {
        const total = calculateCost(0)
        setTotalCost(total);
      }
    }
    else setTotalCost(0)
  };

  useEffect(() => {   
    addTotalCost();         
  }, [selectedServices]);

  return (
    <CartContext.Provider
      value={{
        handleSelectedServices,
        selectedServices,
        totalCost,
        renderSelectedServices,
        aditionalCost, calculateAditional,
        renderAditionalCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
