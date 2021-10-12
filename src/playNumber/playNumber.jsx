import "./playNumber.css";
import { colors } from "../utils";
const PlayNumber = (props) => {
  return (
    <button
      key={props.number}
      className="number"
      onClick={() => console.log(props.number)}
      style={{ backgroundColor: colors[props.status] }}
    >
      {props.number}
    </button>
  );
};
export default PlayNumber;
