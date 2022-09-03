const OriginPlace = ({ lat, long, name, locality }) => {
  return (
    <li data-long={long} data-lat={lat} className="">
      <div className="name">{name}</div>
      <div>{locality}</div>
    </li>
  );
};

export default OriginPlace;
