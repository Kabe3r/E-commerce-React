import './scss/styles.scss';
import {Header, Navbar, Sidebar, Footer} from './components';
import { BrowserRouter as Router , Routes, Route, Navigate } from 'react-router-dom';
import { Home, Single, Products, Cart, AuthWrapper, ProtectedRoute, Checkout } from './pages';

function App() {
  return (
    <AuthWrapper>
    <Router>
    <Header />
    <Navbar />
    <Sidebar />
    <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<Single />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/' element={<ProtectedRoute />}>
      <Route path='checkout' element={<Checkout />} />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    <Footer />
    </Router>
    </AuthWrapper>
  
  );
}

export default App;
