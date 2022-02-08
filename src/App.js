// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Music from './components/Music/Music';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className="App-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
