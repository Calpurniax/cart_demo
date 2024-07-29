import { useState } from 'react';
import {useCartContext } from './context/CartContext';

import Fetch from './callApi/Fetch';

import carPicture from './assets/img/F34.png';
import alertIcon from './assets/icons/alert.svg';
import cartIcon from './assets/icons/cart.svg';


import './App.scss';

function App() {
  const [cartClose, setCartClose] = useState(true);

  const { totalCost, renderSelectedServices, aditionalCost, renderAditionalCost} =
    useCartContext();

  const handleCartClose = () => {
    setCartClose(!cartClose);
  };

  return (
    <>
      <main className='main'>
        <section className='carInfo'>
          <img
            src={carPicture}
            alt='vehiculo del usuario'
            className='carInfo__img'
          />
          <div>
            <h1 className='carInfo__h1'>BMW X1 S18D</h1>
            <div className='carInfo__textContainer'>
              <p className='carInfo__textContainer--plate'>Matrícula</p>
              <p className='carInfo__textContainer--model'>Modelo</p>
              <p className='carInfo__textContainer--plateNum'>5555GGGG</p>
              <button className='carInfo__textContainer--button'>
                Cambiar
              </button>
              <p className='carInfo__textContainer--modelNum'>E84</p>
            </div>
          </div>
        </section>
        <section className='program'>
          <h2 className='program__h2'>Selecciona el programa:</h2>
          <div className='program__selectorContainer'>
            <div className='program__selectorContainer--selector'>
              <p className='program__selectorContainer--title'>
                BMW service inclusive
              </p>
              <p>Paquetes de mantenimiento</p>
            </div>
            <div className='program__selectorContainer--selector selectorActive'>
              <p className='program__selectorContainer--title'>
                BMW precios cerrados
              </p>
              <p>operaciones puntuales</p>
            </div>
          </div>
        </section>

        <section className='services'>
          <div className='services__notice'>
            <img
              src={alertIcon}
              alt='alerta'
              className='services__notice--icon'
            />
            <p className='services__notice--text'>
              Los servicios identificados con esta leyenda incluyen un coste
              adicional que se facturará una sola vez, independientemente del
              número de operaciones a realizar
            </p>
          </div>
          <Fetch />
        </section>
        <section className='cartContainer'>
          <h2 className='cartContainer__h2'>Servicios seleccionados: </h2>
          {renderSelectedServices()}
          <p className='cartContainer__totalPrice'>Total: {totalCost} €</p> 
          {renderAditionalCost ? <p className='cartContainer__aditionalCost'>Gastos adicionales: {aditionalCost} €</p>: null}         
        </section>
        <div className='continue'>
          <button className='continue__button'>Continuar</button>
          <button onClick={handleCartClose} className='continue__btnCart'>
            <img
              src={cartIcon}
              alt='consulta el carrito de la compra'
              className='continue__btnCart--cartIcon'
            />           
          </button>
        </div>
      </main>
      <aside className={'sideCart ' + (cartClose ? 'closedCart' : 'openCart')}>
        <p onClick={handleCartClose} className="sideCart__closeBtn">X</p>
        <h2 className='cartContainer__h2'>Servicios seleccionados:</h2>    
        {renderSelectedServices()}
        <p className='cartContainer__totalPrice'>Total: {totalCost} €</p>
        {renderAditionalCost ? <p className='cartContainer__aditionalCost'>Gastos adicionales: {aditionalCost} €</p>:null}
      </aside>
    </>
  );
  }

export default App;
