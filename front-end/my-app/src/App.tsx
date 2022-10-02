import "./App.css";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./source/hr/sagas";
import reducers from "./source/reducers/index";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import Root from './root/index';

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [sagaMiddleware];

  const store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
