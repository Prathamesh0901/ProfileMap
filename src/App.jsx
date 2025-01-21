import Navbar from './components/Navbar';
import ProfileList from './pages/ProfileList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <ProfileList />
    </div>
  )
}

export default App