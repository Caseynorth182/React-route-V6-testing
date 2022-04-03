import './App.css';
import Header from './Header';
import Users from './Users';
import About from './About';
import Main from './Main';
import Aboutpage from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Homepage from './pages/Homepage';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/Layout';
import { Routes, Route, Link } from "react-router-dom";


const homeData = {
  name: 'Homepageeee',
  text: 'Some text',
}

function App() {
  return (
    <>


      <main>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path="/" element={<Homepage homeData={homeData} />} />
            <Route path="Aboutpage" element={<Aboutpage />} />
            <Route path="Blogpage" element={<Blogpage />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </main>


    </>

  );
}

export default App;
