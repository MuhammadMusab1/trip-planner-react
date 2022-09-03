import "./App.css";

import OriginInput from "./components/OriginInput";

function App() {
  return (
    <div className="grid-wrapper">
      <div className="origin-container">
        <OriginInput />

        <ul className="origins">
          <li data-long="-97.1500642" data-lat="49.7959303" className="">
            <div className="name">Allegheny Drive</div>
            <div>Winnipeg</div>
          </li>
        </ul>
      </div>
      <div className="destination-container">
        <form className="destination-form">
          <input placeholder="Choose your Destination" type="text" />
        </form>

        <ul className="destinations">
          <li
            data-long="-97.1500642"
            data-lat="49.7959303"
            className="selected"
          >
            <div className="name">Allegheny Drive</div>
            <div>Winnipeg</div>
          </li>
          <li data-long="-97.1500642" data-lat="49.7959303" className="">
            <div className="name">Allegheny Drive</div>
            <div>Winnipeg</div>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="plan-trip">Plan My Trip</button>
      </div>
      <div className="bus-container">
        <div className="recommended">
          <ul className="my-trip"></ul>
        </div>

        <div className="alternative">
          <ul className="alt-trip"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
