import logo from './logo.svg';
import './App.css';
import Card1 from './components/Card1'

function App() {
  return (
    <div className="App">
     <Card1 date="21/04/2022" method="Desktop-Mobile" head="Amazon" src="https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG-400x400.png" bgcolor="yellowcol" />
     <Card1 date="21/04/2022" method="Desktop-Mobile" head="Amazon"  src="https://merivis.org/wp-content/uploads/2018/02/Amazon-Logo-Transparent-PNG-400x400.png" bgcolor="yellowcol" />
     <Card1 date="21/04/2022" method="Desktop-Mobile" head="Apple" src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png" bgcolor="yellowcol" />
   
    </div>
  );
}

export default App;
