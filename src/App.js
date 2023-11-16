import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ComparePage from './pages/ComparePage';
import ContactPage from './pages/ContactPage';
import FilterPage from './pages/FilterPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import SigninPage from './pages/auth/SigninPage';
import SignupPage from './pages/auth/SignupPage';
import GuidesPage from './pages/info/GuidesPage';
import PrivacyPolicyPage from './pages/info/PrivacyPolicyPage';
import TermsPage from './pages/info/TermsPage';
import AccountPage from './pages/user/AccountPage';
import WishlistPage from './pages/user/WishlistPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <>
    <Navbar />
    <main className="main">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/compare' element={<ComparePage />} />
                
        {/* <Route path='/filter'> */}
            {/* <Route index element={<FilterPage />}  /> */}
            {/* <Route path=':id' element={<ProductDetailsPage />} /> */}
        {/* </Route> */}
        
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/filter/:category_id?' element={<FilterPage />} />
        
        <Route path='/account' element={<AccountPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/guides' element={<GuidesPage />} />
        <Route path='/privacy' element={<PrivacyPolicyPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/forgot' element={<ForgotPasswordPage />} />
        <Route path='/reset' element={<ResetPasswordPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer />
      <Loader />
    </>
  );
}

export default App;
