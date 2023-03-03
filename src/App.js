
import './App.css';
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"
import Form from "./Components/Form"

function App() {
  return (
    <div className="App">
      {/* header main and footer are components we are returning. The app component is called in the index.js and rendered*/}
      <Header />
      <Form />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

