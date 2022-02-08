// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className="App-wrapper-content">
        {/* <Profile /> */}
        <Dialogs />
      </div>

    </div>);
};

// const App = () => {
//   return (
//     <div>
//       {/* <div className="App-link"><Header /></div> */}
//       <div><Navigation /></div>
//       <div className="App-header">
//         Egor, you're cool!!
//       </div>

//       <div className="App">
//         Simple HTML
//       </div>

//       <div className="My-App-header">
//         Liza: "Egor, you're my God"!
//       </div>

//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Egor <code> is a prorammer</code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
