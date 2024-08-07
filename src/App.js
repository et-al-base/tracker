import './App.css';
import Sources from './components/sources';
import Fields from './components/fields';


function App() {

  return (
    <div className='flex-1 flex flex-col space-y-10 bg-nude px-20 lg:px-40 py-20'>
      <h1 className='font-lora text-4xl text-dark font-semibold text-center'>
        et al. tracker
      </h1>

      <div className='pb-10'>
        <Sources/>
      </div>
      <div>
        <Fields/>
      </div>
    </div>
  );
}

export default App;
