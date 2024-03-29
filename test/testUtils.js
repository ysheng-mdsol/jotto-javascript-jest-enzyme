import checkPropTypes from 'check-prop-types';
import configureMockStore from 'redux-mock-store';
import { createStore, applyMiddleware } from 'redux';

import { middlewares } from '../src/configureStore';
import rootReducer from '../src/reducers';

export const mockStoreFactory = (initState) => {
  const mockStore = configureMockStore(middlewares);
  return mockStore(initState);
};

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};


export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBe(undefined);
};