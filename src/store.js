/**
 * Created by superman on 17/3/6.
 */
import {creteStore} from 'redux'
import toApp from './reducers'

let store = creteStore(toApp);