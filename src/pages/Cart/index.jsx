import { FunkoEnCarrito } from './FunkoItemCarrito';
import { React, useEffect, useState } from 'react';
import data from '../../data';
import { useModal } from '../../components/Modal';
import { useCart } from '../../hooks/useCart';

export const Cart = (props) => {
  const { clearCart, cart } = useCart();
  const [total, setTotal] = useState(0);
  const [modal, showModal] = useModal({ type: 'completado' });
  const buttonColor = (cart.length === 0) ? '#000000' : '#FFFFFF';

  const deleteShoppingCart = () => {
    clearCart();
  };

  useEffect(() => {
    let newTotal = 0;

    cart.forEach(element => {
      const funkoId = element.id;
      const quantity = element.quantity;

      console.log(funkoId, quantity);

      const itemFunko = data.getFunkoById(funkoId);
      console.log(itemFunko);
      if (!itemFunko) { return; }

      newTotal += itemFunko.price * quantity;
    });

    setTotal(newTotal);
    return () => {
      setTotal(0);
    };
  }, [cart]);

  useEffect(() => {
    document.title = 'Cesta | FunkoShop';
  }, []);

  return (

    <div className='container'>

      <div className='row'>
        <div className='col-12'>
          <p className='mt-2 fs-1 fw-bold'>Carrito</p>
        </div>
      </div>

      <div className='container'>
        {cart.length === 0 && <div className='mt-3 border border-2 row'> <p className='m-2 fs-4 fw-bold fst-italic'>No hay artículos en el carrito</p> </div>}
        {cart.map(element => {
          const itemFunko = data.getFunkoById(element.id);

          if (!itemFunko) return null;

          return <FunkoEnCarrito key={itemFunko.handle} funko={itemFunko} fixQuantity={element.quantity} />;
        })}
      </div>

      <div className='d-flex justify-content-center'>
        <div className='mt-4 border border-2 w-50'>

          <div className='mx-2'>
            <p className='mt-3 fs-3 text-center'>Total artículos: {total}€</p>
            <p className='fs-3 text-center'>Envío: 2.00€ <button type='button' className='bi bi-info-circle' data-bs-toggle='modal' data-bs-target='#exampleModal' aria-label='Boton informacion sobre precio envío' /></p>

            <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <p className='modal-title fs-5 fw-bold' id='exampleModalLabel'>Precio envios</p>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
                  </div>
                  <div className='modal-body'>
                    En cualquier pedido, independientemente del coste total de los artículos, se le aplicara un coste de envió total de 2€.
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Cerrar</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='mb-3 mx-2 me-3'>
            <p className='text-center fs-2 fw-bold'> Total a pagar: {total + 2}€</p>
          </div>

        </div>
      </div>

      <div className='row'>
        <div className='col-2 offset-md-5' aria-label='Boton completar compra '>

          {modal}
          <button
            style={{ buttonColor }}
            disabled={cart.length === 0}
            onClick={() => {
              deleteShoppingCart();
              showModal();
            }} className='btn btn-success my-4'
          >Completar compra
          </button>
        </div>
      </div>

    </div>
  );
};
