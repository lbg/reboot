import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ScheduleListV1Data from "../../jsonData/schedule/ScheduleListV1Data.json"; //Room Data
import ScheduleV1Data from "../../jsonData/schedule/ScheduleV1Data.json"; //Event Data
import Accordion from "../accordian/accordian";
import SaveIcon from "../share/saveIcon";
import { ToastContainer, toast } from "react-toastify";

import { useFavourites } from "../../context/FavouritesContext";

const SideBar = ({ toggleSideBar, handleToggleSideBar }) => {
  const { favourites, appendFavourite, removeFavourite } = useFavourites();
  const [processedFavourites, setProcessedFavourites] = useState([]);
  const [clashes, setClashes] = useState([]);

  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const parseText = (textStr) => {
    let parseText = textStr.replace(/\n/g, " "); 
    parseText = parseText.replace(/\*/g, "");
    return parseText
  }

  const formatTime = (timeStr) => {
    const formattedTime = timeStr.split(":").join("");
    return `20260317T${formattedTime}00`;
  };

  const handleShare = () => {
    if (clashes.length > 0) {
      toast.error("You have clashes in your day. Please fix and try again!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      let icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//PlanMyDay//EN\n`;
      if (processedFavourites && processedFavourites.length > 0) {
        processedFavourites.forEach((item, index) => {
          icsContent += `BEGIN:VEVENT\n`;
          icsContent += `DTSTAMP:20260317T000000\n`;
          icsContent += `UID:${item.sessionId + "" + item.roomId}\n`;
          icsContent += `SUMMARY:${item.eventData.title}\n`;
          icsContent += `LOCATION:${item.eventData.designation}\n`;
          icsContent += `DESCRIPTION:${parseText(item.eventData.text)}\n`;
          icsContent += `DTSTART:${formatTime(item.eventData.sessionStart)}\n`;
          icsContent += `DTEND:${formatTime(item.eventData.sessionEnd)}\n`;
          icsContent += `END:VEVENT\n`;
        });

        icsContent += `END:VCALENDAR`;
        const blob = new Blob([icsContent], {
          type: "text/calendar;charset=utf-8",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "events.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        toast.error("There has been an error. Please try again!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  const sortData = (data) => {
    const sortedData = data.sort((a, b) => {
      const timeA = new Date(`2025-01-01 ${a.eventData.sessionStart}:00`);
      const timeB = new Date(`2025-01-01 ${b.eventData.sessionStart}:00`);
      return timeA - timeB;
    });
    return sortedData;
  };

  const updateClashes = (data) => {
    if (data && data.length > 0) {
      const clashes = [];
      for (let i = 0; i < data.length; i++) {
        const startA = parseTime(data[i].eventData.sessionStart);
        const endA = parseTime(data[i].eventData.sessionEnd);

        for (let j = i + 1; j < data.length; j++) {
          const startB = parseTime(data[j].eventData.sessionStart);
          const endB = parseTime(data[j].eventData.sessionEnd);

          if (startA < endB && startB < endA) {
            clashes.push(
              { sessionId: data[i].sessionId, roomId: data[i].roomId },
              { sessionId: data[j].sessionId, roomId: data[j].roomId }
            );
          }
        }
      }
      setClashes(clashes);
    }
  };

  useEffect(() => {
    if (favourites && favourites.length > 0) {
      const processed = favourites.map((fav) => {
        const roomData = ScheduleListV1Data.filter(
          (item) => item.dataTarget.slice(1) === fav.roomId
        );
        const roomSchedule = ScheduleV1Data.filter(
          (item) => item.tabId == fav.roomId
        );
        const eventData = roomSchedule[0].tabData.filter(
          (item) => fav.sessionId == item.id
        );
        return {
          ...fav,
          roomData: roomData[0],
          eventData: eventData[0],
        };
      });

      const sortedData = sortData(processed);
      updateClashes(sortedData);

      setProcessedFavourites(sortedData);
    } else {
      setProcessedFavourites([]);
    }
  }, [favourites]);

  useEffect(() => {
    if (toggleSideBar) {
      trigger();
      handleToggleSideBar(false);
    }
  }, [toggleSideBar]);

  const buttonRef = useRef(null);

  const trigger = () => {
    buttonRef.current.click();
  };

  return (
    <div>
      <button
        className="btn btn-secondary m-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
        aria-controls="sidebarOffcanvas"
        style={{ display: "none" }}
        ref={buttonRef}
      >
        Plan My day
      </button>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarLabel"
      >
        <div className="offcanvas-header pmd-sidebar-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ padding: "10px" }}
          ></button>
        </div>
        {favourites && favourites.length > 0 ? (
          <div className="sidebar-share-container">
            <div className="sidebar-share-button-container">
              <div
                className="sidebar-share-button-items"
                onClick={() => handleShare()}
              >
                <div className="side-share-button-title">
                  <h5>Save to Calendar</h5>
                </div>
                <button className="sidebar-share-button">
                  <SaveIcon color={"#ffffff"} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
        <div className="offcanvas-body pmd-sidebar-container">
          <div className="pmd-sidebar-title">
            <h2>Plan My Day</h2>
          </div>
          <div className="pmd-events-container">
            {favourites && favourites.length > 0 ? (
              <Accordion
                data={processedFavourites}
                appendFavourite={appendFavourite}
                removeFavourite={removeFavourite}
                favourites={favourites}
                clashes={clashes}
              />
            ) : (
              <div className="no-events-container">
                <p>
                  You need to go to the schedule and favourite events for them
                  to appear in Plan My Day.
                </p>
                <p>
                  You can then add these events to
                  your personal phone calendar
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
