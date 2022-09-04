const Place = ({ lat, long, name, locality, type }) => {
  const removeSelectedClass = () => {
    if (type === "origin-place") {
      //remove selected place from origin list
      const originList = document.querySelector(".origin-list");
      originList.querySelectorAll("LI").forEach((place) => {
        place.classList.remove("selected");
      });
    } else {
      //remove selected place from destination list
      const destinationList = document.querySelector(".destination-list");
      destinationList.querySelectorAll("LI").forEach((place) => {
        place.classList.remove("selected");
      });
    }
  };
  const handleClickOnPlace = (e) => {
    removeSelectedClass();
    e.target.closest("LI").classList.add("selected");
    console.log(e.target.closest("LI"));
  };
  return (
    <li
      data-long={long}
      data-lat={lat}
      className=""
      onClick={handleClickOnPlace}
    >
      <div className="name">{name}</div>
      <div>{locality}</div>
    </li>
  );
};

export default Place;
