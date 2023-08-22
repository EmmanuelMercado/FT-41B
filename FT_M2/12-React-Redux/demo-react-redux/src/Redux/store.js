import {createStore,applyMiddleware,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Esta línea sirve para conectar a nuestra App con la extensión


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    )//Esta linea sirva para que podamos hacer peticiones a una Api /servidor



export default store;