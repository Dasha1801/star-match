import "./playNumber.css";
import { colors } from "../shared/numberColors";
const PlayNumber = (props) => {
  return (
    <button
      key={props.number}
      className="number"
      onClick={() => props.onClick(props.number, props.status)}
      style={{ backgroundColor: colors[props.status] }}
    >
      {props.number}
    </button>
  );
};
export default PlayNumber;
