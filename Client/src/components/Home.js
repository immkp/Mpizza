import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pizza from './Pizza'
import { getAllPizzas } from '../actions/pizzaActions'

function Home() {
  const dispatch = useDispatch()
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])
  return (
    <div>
      <div className='row justify-content-center'>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <div key={pizza._id} className='col-md-3 p-3 m-3'>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Home
