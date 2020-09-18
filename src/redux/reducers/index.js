
import { combineReducers } from 'redux'
import ordenes from './ordenes';
import usuarios from './usuarios';

const reducer = combineReducers({
    ordenes, usuarios
})

// function reducer (state = {}, action) {
//     return {
//         ordenes: ordenes(state.ordenes, action),
//         usuarios: usuarios(state.usuarios, action),
//     };
// }

export default reducer;