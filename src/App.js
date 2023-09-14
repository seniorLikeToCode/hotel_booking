import logo from './logo.svg';
import Layout from './components/layout';
import Profile from './components/profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Profile/>
      </Layout>
    </div>
  );
}

export default App;
