import { createStore, combineReducers } from 'redux'
import * as snake from 'store/ducks/snake'

const reducer = combineReducers({
    snake: snake.default
})

const store = createStore(
    reducer,
)

export default store
