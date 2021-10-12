import { useState } from "react";
import PlayNumber from "../playNumber/playNumber";
import "./starMatch.css";
import { utils } from "../utils";
import StarsDisplay from "../starsDisplay/starsDisplay";

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };
  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used") {
      return;
    }
    const newCandidatesNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);
    if (utils.sum(newCandidatesNums) !== stars) {
      setCandidateNums(newCandidatesNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (num) => !newCandidatesNums.includes(num)
      );
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => {
            return (
              <PlayNumber
                key={number}
                number={number}
                status={numberStatus(number)}
                onClick={onNumberClick}
              />
            );
          })}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
