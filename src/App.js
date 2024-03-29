import logo from './logo.svg';
import './App.css';
import HelloApp from './HelloApp'
import Send from './Component/Send'

// class App extends React.Component{
//   render(){
//     return (
//       <div className='App'>
//         <HelloApp />
//         <header className='App-header'>
//           <img src={logo} className='App-logo' alt='logo' />
//           <h1 className='App-title'>Welcome to React</h1>
//         </header>
//         <p className='App-intro'>
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     )
//   }
// }

function App() {
  
    return (
      <div className='App'>
        <HelloApp  message="this is message"/>
        <Send />
        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header> */}
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )

}

export default App;
