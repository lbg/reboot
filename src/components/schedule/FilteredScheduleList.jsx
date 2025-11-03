import ScheduleV1Data from "../../jsonData/schedule/ScheduleV1Data.json";
import ScheduleListV1Data from "../../jsonData/schedule/ScheduleListV1Data.json";
import { useEffect, useState } from "react";
import StarIcon from "../starIcon/starIcon";
import { useFavourites } from "../../context/FavouritesContext";
import ReactMarkdown from "react-markdown";


const FilterScheduleList = ({ searchText }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const { favourites, appendFavourite, removeFavourite } = useFavourites();

  const containsStr = (str) => {
    return str.toLowerCase().includes(searchText.toLowerCase());
  };

  const mapTabId = (tabId) => {
    const room = ScheduleListV1Data.filter(
      (value) => value.dataTarget.replace("#", "") === tabId
    )[0];
    return `${room.month} ${room.year}`;
  };

  const addEventRoom = (event, schedule) => {
    const room = mapTabId(schedule.tabId);
    event.tabId = schedule.tabId;
    event.room = room;
    return event;
  };

  const getMatches = () => {
    let matches = ScheduleV1Data.flatMap((schedule) => {
      return (
        schedule.tabData?.map((item) => {
          if (
            containsStr(item.title) ||
            containsStr(item.text) ||
            containsStr(item.name)
          ) {
            return addEventRoom(item, schedule);
          }
        }) || []
      );
    });
    return matches.filter((item) => item);
  };

  const isActive = (roomId, sessionId) => {
    return favourites?.some(
      (element) => element.roomId === roomId && element.sessionId === sessionId
    );
  };

  useEffect(() => {
    searchText.length >= 2 && setFilteredEvents(getMatches());
  }, [searchText]);

  return searchText.length <= 1 ? (
    <div className="start-searching-text-container">
      <h5>Start Searching...</h5>
    </div>
  ) : (
    <div className="filtered-events-container">
      {filteredEvents?.map((value, index) => (
        <div key={index} className="filtered-event-container">
          <div className="filtered-event-header-container">
            <div className="filtered-event-header-time">
              {`⏰ ${value.sessionStart} - ${value.sessionEnd}`}
            </div>
            <div className="filtered-event-header-room">
              {`📍 ${value.room}`}
            </div>
          </div>
          <div className="filtered-event-details-container">
            <div className="filtered-event-details-header">
              <div className="filtered-event-star-container">
                <StarIcon
                  color={"#ECA832"}
                  roomId={value.tabId}
                  sessionId={value.id}
                  appendFavourite={appendFavourite}
                  removeFavourite={removeFavourite}
                  active={isActive(value.tabId, value.id)}
                  favourites={favourites}
                  width={"35"}
                  height={"35"}
                />
              </div>
              <div className="filtered-event-speaker-container">
                {value.name}
              </div>
            </div>
            <div className="filtered-event-title-container" key={index}><h3>{value.title}</h3></div>
            <div className="filtered-event-text-container"><ReactMarkdown>{value.text}</ReactMarkdown></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterScheduleList;
