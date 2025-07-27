import './App.scss';
import { Header, Footer, Outlet } from './components';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
