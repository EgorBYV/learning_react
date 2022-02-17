import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Music from './components/Music/Music';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = (props) => {
  // Собирает все главные копоненты приложения.
  // Следит за их состоянием в Navbar и прорисовывает активные.
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Navbar />
        <div className="App-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}
              />} />
            <Route path="/dialogs" element={<Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
              />} />
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
