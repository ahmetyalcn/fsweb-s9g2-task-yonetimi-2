import React from "react";
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';
const Task = ({ taskObj, onComplete }) => {


  const daysRemaining = formatDistanceToNow(
    new Date(taskObj.deadline),
    {
      addSuffix: true,
      locale: tr
    }

  );
  const isDeadlineClose = differenceInDays(
    new Date(taskObj.deadline),
    new Date()

  )<=3;
 const isDeadlineCloseClass = isDeadlineClose ? "bg-[#ffd9d4]": "bg-[#2cc521]"

  return (
    <div className="shadow-md bg-[#fff] mt-4 p-6 rounded leading-normal">
      <h3 className="text-lg text-[#db874b]">{taskObj.title}</h3>
      <div className="text-xs pt-1">son teslim: <span className={`p-1 rounded-sm ${isDeadlineCloseClass}`}>{daysRemaining}</span></div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
