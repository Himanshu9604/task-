import "./App.css";
// import ManualKyc from "./components/ManualKyc";
import Form from './components/Form';
// import Mpin from './components/Mpin';
// import SignUpForm from './components/Signup';
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <div>
        <Form/>
        {/* <Mpin/> */}
        {/* <SignUpForm/> */}
        {/* <ManualKyc/> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
