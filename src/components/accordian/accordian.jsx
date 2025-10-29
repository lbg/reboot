import React, { useEffect, useState } from "react";
import StarIcon from "../starIcon/starIcon";
import ReactMarkdown from "react-markdown";

const Accordion = ({
  data,
  appendFavourite,
  removeFavourite,
  favourites,
  clashes,
}) => {
  const isClash = (roomId, sessionId) => {
    return clashes.some(
      (value) => value.sessionId == sessionId && value.roomId == roomId
    );
  };

  return (
    <div
      class="accordion accordion-flush accordion-container"
      id="accordionFlushFavourite"
    >
      {data.map((value, index) => (
        <div class="accordion-item" key={index}>
          <div className="accordion-details-container">
            <div>
              {`⏰ ${value.eventData.sessionStart} - ${value.eventData.sessionEnd}`}
            </div>
            <div>{`📍 ${value.roomData.month} ${value.roomData.year}`}</div>
          </div>
          <div
            class={`accordion-header ${
              isClash(value.roomId, value.sessionId) ? "accordion-clash" : ""
            }`}
          >
            <div style={{ margin: "15px" }}>
              <StarIcon
                color={"#ECA832"}
                active={true}
                roomId={value.roomId}
                sessionId={value.sessionId}
                appendFavourite={appendFavourite}
                removeFavourite={removeFavourite}
                favourites={favourites}
                width={"25"}
                height={"25"}
              />
            </div>
            <div className="accordion-title">{value.eventData.title}</div>
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {" "}
            </button>
          </div>
          <div
            id={`flush-collapse${index}`}
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushFavourite"
          >
            <div class="accordion-body">
              <div>
                <h5 className="accordion-speaker-title">
                  {value.eventData.name}
                </h5>
                <div className="designation">{value.eventData.designation}</div>
                <br/>
                <div className="text">
                  <ReactMarkdown>{value.eventData.text}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
