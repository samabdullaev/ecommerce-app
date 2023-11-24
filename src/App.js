import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import FilterPage from './pages/FilterPage';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/user/AccountPage';
import WishlistPage from './pages/user/WishlistPage';
import SigninPage from './pages/auth/SigninPage';
import SignupPage from './pages/auth/SignupPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import PrivacyPage from './pages/info/PrivacyPage';
import GuidesPage from './pages/info/GuidesPage';
import ComparePage from './pages/ComparePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import TermsPage from './pages/info/TermsPage';
import Loader from './components/Loader';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <Navbar />
    <main className="main">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/compare' element={<ComparePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/filter/:category_id?' element={<FilterPage />} />

        <Route path='/auth'>
          <Route path='signin' element={<SigninPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='password-reset' element={<ResetPasswordPage />} />
          <Route path='password-forgot' element={<ForgotPasswordPage />} />
        </Route>
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/guides' element={<GuidesPage />} />
        <Route path='/terms' element={<TermsPage />} />
        
        {/* <Route path='/filter'> */}
            {/* <Route index element={<FilterPage />}  /> */}
            {/* <Route path=':id' element={<ProductDetailsPage />} /> */}
        {/* </Route> */}

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer />
      <Loader />
    </Provider>
  );
}

export default App;
