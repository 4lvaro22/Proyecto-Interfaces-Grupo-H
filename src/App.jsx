import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { HashRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { SignUp } from './pages/SignUp';
import { FunkoInfo } from './pages/FunkoInfo';
import { Cart } from './pages/Cart';
import { Faq } from './pages/Faq';
import './assets/styles/App.css';
import { Profile } from './pages/Profile';
import { PaymentSection } from './pages/Profile/Payments';
import Contact from './pages/Contact';
import ScrollTop from './components/ScrollTop';

export const BASE_PATH = '/Proyecto-Interfaces-Grupo-H';

const testUser = {
  name: 'Test User',
  surname: 'apellido',
  img: 'https://cdn-icons-png.flaticon.com/512/17/17004.png',
  email: 'test@gmail.com',
  password: '1234',
  card: {
    number: '1234567890123456',
    exp: '12/24',
    cvv: '123'
  }
};

function App () {
  return (
    <Router>
      <ScrollTop />
      {/* <ScrollRestoration /> */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home itemsPerPage={16} />} />
          <Route path='Login' element={<Login />} />
          <Route path='Home' element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='Faq' element={<Faq />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Funko/:id' element={<FunkoInfo />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='Profile' element={<Profile user={testUser} />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
          {/* <Route path="*"> */}
          {/*    <Redirect to="/Proyecto-Interfaces-Grupo-H"/> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
