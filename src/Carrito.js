import React, { useState } from 'react';
import './style.css';

const initialList = [{}];

const sumarArray = (previousValue, currentValue) =>
  previousValue + currentValue;

export default function Carrito({ listaCarrito, setListaCarrito }) {
  const [listaProductos, setListaProductos] = useState(listaCarrito);

  let total = 0;

  if (listaProductos.length > 0) {
    total = listaProductos.map((producto) => producto.price).reduce(sumarArray);
  }

  console.log(listaProductos, 'from carrito');

  const vaciarCarrito = () => {
    console.log('vaciando carrito');
    setListaProductos([]);
    setListaCarrito([]);
  };
  return (
    <div className="fondototal2">
      <h2>CARRITO</h2>
      <div className="container pt-5">
        <div className="row mt-4">
          <div className="col-8">
            <div className="card p-3">
              <h3 className="pb-3 ">
                {listaProductos.length > 0
                  ? 'Detalle de la compra'
                  : 'Añade productos a tu carrito'}
              </h3>
              {listaProductos.map((producto) => (
                <div className="cartProduct row pt-3 pb-3">
                  <div className="col-4">
                    <img className="imagenes" src={producto.img} />
                  </div>
                  <div className="col-8">
                    <h3 className="text-info">{producto.title}</h3>
                    <h5>{producto.price}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-4">
            <div className="card p-3">
              <h4 className="text-info">TOTAL A PAGAR:</h4>
              <h5>{total}</h5>
              <a className="btn btn-info text-white">pagar</a>
              <a
                className="btn btn-danger text-white mt-2"
                onClick={vaciarCarrito}
              >
                vaciar carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
