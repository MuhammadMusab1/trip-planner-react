const PlacesList = ({ children, type }) => {
  return <ul className={`places-list ${type}`}>{children}</ul>;
};
export default PlacesList;
