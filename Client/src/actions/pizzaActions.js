import axios from 'axios'

export const getAllPizzas =()=>async dispatch=>{
 dispatch({type:'GET_PIZZAS_REQUEST'})
  try {
   const {data} = await axios.get('/api/pizzas/getallpizzas')
   dispatch({ type: 'GET_PIZZAS_SUCCESS' ,payload: data })
  } catch (error) {
   dispatch({ type: 'GET_PIZZAS_FAILED',payload:error })
   
  }
}