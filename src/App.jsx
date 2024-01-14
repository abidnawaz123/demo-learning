import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/pages/Router';
import { Image } from '@mui/icons-material';
function App() {
  return (
    <Provider store={store}>
      <div className='main'>
        <RouterProvider router={router}/>
      </div>
    </Provider>
  );
}

export default App;
