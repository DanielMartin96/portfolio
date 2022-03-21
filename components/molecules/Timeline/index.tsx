import React from "react";
import { EXPERIENCE } from "../../../utils/constants";
import TimelineItem from "../../atoms/TimelineItem";

const Timeline = () => {
  return (
    <ol className="items-center sm:flex">
      {EXPERIENCE.map((item) => (
        <TimelineItem
          key={item.title}
          title={item.title}
          date={item.date}
          role={item.role}
          description={item.description}
        />
      ))}
    </ol>
  );
};

export default Timeline;
