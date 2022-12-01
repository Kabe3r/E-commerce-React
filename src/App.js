import './scss/styles.scss';
import {Header, Navbar, Sidebar, Footer} from './components';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Home, Single, Error, Products, Cart, AuthWrapper, ProtectedRoute, Checkout } from './pages';

function App() {
  return (
    <AuthWrapper>
    <Router>
    <Header />
    <Navbar />
    <Sidebar />
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='products' element={<Products />} />
    <Route path='products/:id' element={<Single />} />
    <Route path='cart' element={<Cart />} />
    <Route path='/' element={<ProtectedRoute />}>
      <Route path='checkout' element={<Checkout />} />
    </Route>
    <Route path='error' element={<Error />} />
    </Routes>
    <Footer />
    </Router>
    </AuthWrapper>
  
  );
}

export default App;
