const TripList = ({ type, children }) => {
  return (
    <div className={`${type.toLowerCase()}`}>
      <ul className="my-trip">
        <h1>{type}</h1>
        {children}
      </ul>
    </div>
  );
};
export default TripList;
