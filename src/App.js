import logo from './logo.svg';
import Layout from './components/layout';
import Profile from './components/profile';
import PropertyCardList from './components/propertyCard';
import {Card} from './components/ui/card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className='grid grid-rows-x grid-cols-8 gap-6'>
          <Profile className=''/>
          <Card className=' col-span-2'></Card>
          <Card className='col-span-2 bg-sky-200'></Card>
          <Card className='row-span-1 col-span-6  bg-red-100'></Card>
        </div>
        <PropertyCardList/>
      </Layout>
    </div>
  );
}

export default App;
