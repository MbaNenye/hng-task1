import Profile from './components/profile';
import './App.css';
import Twitter from './components/twitter.';
import ZuriBook from './components/zuriBook';
import ZuriTeam from './components/zuriTeam';
import PythonBook from './components/pythonBook';
import Background from './components/Bckg';
import DesignBooks from './components/designBook';
import Footer from './components/footer';
import Section from './components/section';

function App() {
  return (
    <div>
    <Profile/>
    <Twitter/>
    <ZuriTeam/>
    <ZuriBook/>
    <PythonBook/>
    <Background/>
    <DesignBooks/>
    <Section/>
    <Footer/>
    </div>
  );
}

export default App;
