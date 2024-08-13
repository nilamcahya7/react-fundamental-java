// import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const currentPath = window.location.pathname;

  return (
    <div>
      {currentPath === '/login' && <Login />}
      {currentPath === '/dashboard' && <Dashboard />}
    </div>
  );
};

export default App;
