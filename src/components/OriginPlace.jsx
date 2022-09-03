const OriginPlace = ({ lat, long, name }) => {
  return (
    <li data-long={long} data-lat={lat} className="">
      <div className="name">{name}</div>
      <div>Winnipeg</div>
    </li>
  );
};

export default OriginPlace;
