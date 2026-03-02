import React, { useEffect, useState, useRef } from "react";
import ScheduleListV1Data from "../../jsonData/schedule/ScheduleListV1Data.json";
import ScheduleV1Data from "../../jsonData/schedule/ScheduleV1Data.json";
import ScheduleList from "./ScheduleList";
import ReactWOW from "react-wow";
import { HashLink as Link } from "react-router-hash-link";
import ReactMarkdown from "react-markdown";
import StarIcon from "../starIcon/starIcon";
import { useFavourites } from "../../context/FavouritesContext";
import FilterScheduleList from "./FilteredScheduleList";
import ClearIcon from "./ClearIcon";

const ScheduleV1 = () => {
  const { favourites, appendFavourite, removeFavourite } = useFavourites();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showFilteredSuggestions, setShowFilteredSuggestions] = useState(false);

  const getCriticalSkill = () => {
    const criticalSkills = ScheduleV1Data.flatMap((schedule) =>
      schedule.tabData.map((block) => {
        const splitChar = "**";
        const index = block.text.indexOf(splitChar);
        const text = block.text.slice(index);
        const array = text.split(splitChar);
        const criticalSkill = array[1];
        return criticalSkill;
      })
    );

    const additionalPhrases = [
      "Google",
      "Git",
      "Data",
      "Cloud",
      "Tech",
      "IDP",
      "GitHub",
      "Copilot",
      "Engineering",
      "Career",
    ];

    return [...new Set([ ...additionalPhrases, ...criticalSkills])];
  };

  const isActive = (roomId, sessionId) => {
    return favourites?.some(
      (element) => element.roomId === roomId && element.sessionId === sessionId
    );
  };

  const handleBlur = () => {
    setIsFocused(searchText.length > 0);
  };

  const handleTextChange = (e) => {
    const currentText = e.target.value;
    setSearchText(currentText);
    if (currentText.length > 0) {
      const filtered = getCriticalSkill().filter((suggestion) =>
        suggestion.toLowerCase().includes(currentText.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowFilteredSuggestions(true);
    } else {
      setShowFilteredSuggestions(false);
    }
  };

  const handleClickList = (e) => {
    setSearchText(e.target.textContent);
    setShowFilteredSuggestions(false);
  };

  const handleClear = () =>  {
    setSearchText("")
    setIsFocused(false)
  }

  return (
    <>
      <section className="schedule-section">
        <div className="auto-container">
          <div className="text">
            <h5 style={{ paddingBottom: "3rem", textAlign: "center" }}>
              We are committed to developing a skills-based organisation. Each
              talk or workshop is designed to focus on a critical skill, which
              is highlighted in the description in bold.
            </h5>
          </div>

          <div className="schedule-search-center">
            <div
              className={`schedule-search-container ${isFocused && "active"}`}
            >
              <div className="schedule-search-row">
                <input
                  className={`schedule-search-input`}
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search..."
                  value={searchText}
                  onFocus={() => setIsFocused(true)}
                  onBlur={handleBlur}
                  onChange={handleTextChange}
                />
                {searchText.length > 1 && (
                  <div className="schedule-search-clear-button">
                    <button onClick={handleClear}>
                      <ClearIcon />
                    </button>
                  </div>
                )}
              </div>
              {showFilteredSuggestions && searchText.length > 1 && (
                <ul className="filter-suggestions-list">
                  {filteredSuggestions.map((suggestion, index) => (
                    <li
                      className={"filter-suggestions-list-item"}
                      key={index}
                      onClick={(e) => handleClickList(e)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {isFocused ? (
            <FilterScheduleList searchText={searchText} />
          ) : (
            <div className="schedule-tabs tabs-box">
              <div className="btns-box">
                <ul className="tab-buttons clearfix nav nav-tabs">
                  {ScheduleListV1Data.map((list) => (
                    <ScheduleList list={list} key={list.id} />
                  ))}
                </ul>
              </div>
              <div className="tabs-content">
                {ScheduleV1Data.map((schedule) => (
                  <div
                    className={`tab fade ${schedule.tabClass}`}
                    id={schedule.tabId}
                    key={schedule.id}
                  >
                    <div className="schedule-timeline">
                      {schedule.tabData.map((block, index) => (
                        <div
                          className={`schedule-block ${index % 2 == 0 ? "even" : ""}`}
                          key={block.id}
                        >
                          <div className="inner-box">
                            <div className="inner">
                              <div className="date">
                                {block.sessionStart} <br /> {block.sessionEnd}
                              </div>
                              <div className="speaker-info">
                                <div className="speaker-container">
                                  <div>
                                    <StarIcon
                                      color={"#ECA832"}
                                      roomId={schedule.tabId}
                                      sessionId={block.id}
                                      appendFavourite={appendFavourite}
                                      removeFavourite={removeFavourite}
                                      active={isActive(
                                        schedule.tabId,
                                        block.id
                                      )}
                                      favourites={favourites}
                                      width={"35"}
                                      height={"35"}
                                    />
                                  </div>
                                  <div className="speaker-col">
                                    <div className="designation">
                                    {block.designation}
                                    </div>
                                    <h5 className="name">{block.name}</h5>                               
                                  </div>
                                </div>
                              </div>
                              <h4>{block.title}</h4>
                              <div className="text">
                                <ReactMarkdown>{block.text}</ReactMarkdown>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ScheduleV1;
