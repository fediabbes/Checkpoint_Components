import './App.css';
import './Component/Profile/style.css'
import Abb from './Component/Profile/ProfilePhoto.js'
import Abb2 from './Component/Profile/FullName.js'
import Abb3 from './Component/Profile/Address';


function App() {
  return (
    <div className="App">
      <Abb />
      <div className ='nameadd'>
      <Abb2 />
      <Abb3 />

      </div>
     

    </div>
  );
}

export default App;
