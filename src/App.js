import './App.css';
import {Provider} from 'react-redux'
import Store from './store';
import Navbar from './components/Navbar';
import InfoPanel from './components/InfoPanel';

function App() {
  return (
    <div >
      <Provider store={Store}>
        <Navbar />
        <InfoPanel />
      </Provider>
    </div>
  );
}

export default App;
