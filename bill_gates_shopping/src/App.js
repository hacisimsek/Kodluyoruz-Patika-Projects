import "./App.css";

import Container from "./components/Container/Container";
import Nav from "./components/Nav";

import CashRegister from "./components/Container/CashRegister";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CashRegister />
      <Container />
    </div>
  );
}

export default App;
