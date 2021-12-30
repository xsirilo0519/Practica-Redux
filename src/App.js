import { Provider, connect } from 'react-redux';
import {store} from './config/store';
import counterActions from './actions/counter';
import './App.css';

const CounterComponent = ({counter, incrementarContador, decrementarContador}) => (
  <header>
    <div>{counter.count}</div>
    <button onClick={incrementarContador}>Incrementar</button>
    <button onClick={decrementarContador}>Decrementar</button>
  </header>
)

const mapStateToProps = ({counter}) => ({
  counter, 
})

const mapDispatchToProps = () => ({
  ...counterActions
})

const ConnectedCounterComponent = connect(mapStateToProps, mapDispatchToProps())(CounterComponent);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedCounterComponent/>
      </div>
    </Provider>
  );
}

export default App;
