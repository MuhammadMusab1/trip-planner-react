import * as BiIcons from "react-icons/bi";
const Error = ({ message }) => {
  return (
    <div className="error-div">
      <div>
        <BiIcons.BiErrorAlt />
      </div>
      {message}
    </div>
  );
};
export default Error;
