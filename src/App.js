import logo from './logo.svg';
import Layout from './components/layout';
import Profile from './components/profile';
import PropertyCardList from './components/propertyCard';
import { Services, ServicesSidebar } from './components/services';
import { Card } from './components/ui/card';
import Team from './components/team';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className='flex'>
          <div className='flex flex-col gap-y-6'>
            <Profile />
            <Services />
          </div>
          <div className='flex flex-col ml-6 gap-y-6'>
          <Team />
          <ServicesSidebar />
          </div>
        </div>
        <PropertyCardList />
      </Layout>
    </div>
  );
}

export default App;
