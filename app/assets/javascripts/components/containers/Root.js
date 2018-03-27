import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import MyApp from './MyApp';
import configureStore from '../store/configureStore';
import {setRecipes} from '../actions/my_actions'


const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setRecipes(this.props.list_recipes));
  }
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>

    );
  }
}
