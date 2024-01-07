import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import AllTheBook from "./components/AllTheBook";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav link1="Home" link2="About" link3="Browse" />
      </header>
      <main>
        <AllTheBook />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
