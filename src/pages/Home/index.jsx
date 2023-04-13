import 'bootstrap-icons/font/bootstrap-icons.css';
import { Funko } from './../../components/funko';
import React, { useState, useEffect } from 'react';
import { getSeries, getFunkos } from './../../data';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { Pagination } from './Pagination';
import { Search } from './Search';

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redefine classes here, if you want.
  activeClassName: 'active' // default to "selected"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const Home = ({ itemsPerPage }) => {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState('');
  const [funkoList, setFunkoList] = useState(getFunkos().map(item => <Funko key={item.handle} funko={item} />));
  const items = [];

  getSeries()
    .forEach(item => items.push(
      <label className='list-group-item border-0'>
        <input className='form-check-input me-1' type='checkbox' value={item} name='serie' />
        {item}
      </label>
    ));

  const updateSearch = (buscado) => {
    setSearch(buscado);
    setFunkoList(getFunkos().filter(item => item.title.toLowerCase().includes(buscado.toLowerCase())).map(element => <Funko key={element.handle} funko={element} />));
  };

  return (
    <>
      <Search updateSearch={updateSearch} />

      <div className='row align mx-auto'>
        {/* <-- Lado --> */}

        <aside className='col-2 m-4'>  {/* <-- Para el menú de selección de marca (a modo de filtro): Marvel, GoT, Harry Potter... --> */}

          <h2 className='text-center border-bottom border-top'>Filtros</h2>
          <div className='border rounded p-2'>
            <div className='list-group'>
              <h6 className='mx-2'>Marca:</h6>
              <div className='overflow-auto' style={{ maxHeight: '500px' }}>
                {items}
              </div>
            </div>

            <div className='list-group my-2'>
              <h6 className='mx-2'>Precio:</h6>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='menorVein' />
                Menor a 20€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='veinCincuen' />
                20€ - 50€
              </label>
              <label className='list-group-item border-0'>
                <input className='form-check-input me-1' type='checkbox' name='precio' value='mayorCincuen' />
                Mayor a 50
              </label>
            </div>

            <div className='list-group'>
              <input className='float-end btn btn-primary' type='submit' value='Aplicar Filtros' />
            </div>
          </div>

        </aside>

        {/* <-- Seccion --> */}
        <section className='col-9 m-4'>
          <h2 className='text-center border-bottom border-top'>Catálogo</h2>
          {search && <p className='fs-5 fw-bold text-left'>Resultados de '{search}'</p>}

          <Pagination itemsPerPage={itemsPerPage} items={funkoList} />

        </section>
      </div>
    </>
  );
};

export default Home;
