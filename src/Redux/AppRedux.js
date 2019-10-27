import React, {Component} from 'react';
import allReducers from './reducers/index'; //penyimpanan data
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter'; 
import ReduxSavePlaces from './ReduxSavePlaces';

const store = createStore(allReducers);
export default class AppRedux extends Component {
  render() {
    return (
      <Provider store={store}>
         <ReduxSavePlaces />
      </Provider>
    )
  }
}
