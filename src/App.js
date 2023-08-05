import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import WishListCart from './pages/WishListCart';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/wishlist' element={<WishListCart />}/>
            </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
