// import logo from "./logo.svg";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

function Items() {
  return (
    <>
      <div className="Items">
        <div className="Item">
          <img className="Wide" src={require("./img/ear-bud.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/speaker.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/tv.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
      </div>
      <div className="Items">
        <div className="Item">
          <img
            className="Wide"
            src={require("./img/camera-head.png")}
            alt={""}
          />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/mp3.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/iphone.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
      </div>
      <div className="Items">
        <div className="Item">
          <img className="Wide" src={require("./img/lighting.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/tecno.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/watch.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
      </div>
      <div className="Items">
        <div className="Item">
          <img
            className="Wide"
            src={require("./img/power-bank.png")}
            alt={""}
          />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/game.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
        <div className="Item">
          <img className="Wide" src={require("./img/scooter.png")} alt={""} />
          <div className="NameAndPrice">
            <p>Original ear buds </p>
            <span className="Price">N 25,000</span>
          </div>
          <div className="Stats">
            <span>500 + Sold ⭐ 4.5</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
