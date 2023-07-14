
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='inline text-center border border-danger'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
};

export default App;