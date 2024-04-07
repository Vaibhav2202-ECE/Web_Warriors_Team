import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import './index.css';
import './index1.css';
import './index2.css';
import './index3.css';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import App from './App.jsx';
import store from './Redux/store';
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <BrowserRouter>
      <App />
      <Toaster />
  </BrowserRouter>
</Provider>
);