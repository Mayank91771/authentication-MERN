import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoals } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString("en-US")}
        <h2>{goal.text}</h2>
        <button
          onClick={() => {
            console.log("Goal id for delete: " + goal._id);
            dispatch(deleteGoals(goal._id));
          }}
          className="close"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default GoalItem;
