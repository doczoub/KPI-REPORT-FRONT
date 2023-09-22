import React from 'react'
import PropTypes from 'prop-types'

const LesServices = (
    statTitle,
  statArrow,
  statPercent,
  statPercentColor
) => {
  return (
    <div>
        <div className=" flex flex-wrap">
              <p className="text-sm text-gray-400 ">
            <span className={statPercentColor + " mr-2"}>
              <i
                className={
                  statArrow === "up"
                    ? "fas fa-arrow-up"
                    : statArrow === "down"
                    ? "fas fa-arrow-down"
                    : ""
                }
              ></i>{" "}
              {statPercent}%
            </span>
          </p>
              <span className="font-semibold text-xs text-gray-700 mr-2">
                {statTitle}
              </span>
        

              </div>
    </div>
  )
}
LesServices.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
  };
  
  
  LesServices.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: PropTypes.string,
  };

export default LesServices
