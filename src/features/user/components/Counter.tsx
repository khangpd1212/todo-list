import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../state/userSlice";
import { RootState } from "../../../store";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  const increase = () => dispatch(counterSlice.actions.increase());
  const decrease = () => dispatch(counterSlice.actions.decrease());

  return (
    <div className="counter">
      <div className="counter__icon counter__icon--upvote" onClick={increase}>
        s
      </div>
      {count}
      <div className="counter__icon counter__icon--downvote" onClick={decrease}>
        s{" "}
      </div>
    </div>
  );
};
