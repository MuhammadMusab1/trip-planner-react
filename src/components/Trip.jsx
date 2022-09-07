import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
//IoBus
//FaWalking
//FaTicketAlt
const Trip = ({ instruction, type }) => {
  const chooseIconAccordingToType = () => {
    switch (type) {
      case "walk":
        return <FaIcons.FaWalking />;
        break;
      case "transfer":
        return <FaIcons.FaTicketAlt />;
        break;
      case "ride":
        return <IoIcons.IoBus />;
        break;
      default:
        return;
    }
  };
  return (
    <li>
      <div> {chooseIconAccordingToType()}</div>
      {instruction}
    </li>
  );
};

export default Trip;
