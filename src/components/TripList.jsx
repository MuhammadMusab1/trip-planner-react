const TripList = ({ type }) => {
  return (
    <div className={`${type.toLowerCase()}`}>
      <ul className="my-trip">
        <h1>{type}</h1>
        <li>
          <i className="fas fa-walking" aria-hidden="true"></i>Walk for 3
          minutes to stop #60073-Eastbound Dalhousie at Allegheny
        </li>
      </ul>
    </div>
  );
};
export default TripList;
