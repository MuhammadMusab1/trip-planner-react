const TripList = ({ type, children }) => {
  return (
    <div className={`${type.toLowerCase()}`}>
      <ul className="my-trip">
        <h2>{type}</h2>
        {children}
      </ul>
    </div>
  );
};
export default TripList;
