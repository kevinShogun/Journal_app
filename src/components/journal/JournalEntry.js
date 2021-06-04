import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url(../assets/guitar.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un Nuevo dia</p>

        <p className="journal__entry-content">
          lorem ipmsun in di duis xiniox context by universal
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
          
    </div>
  );
};
