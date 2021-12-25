/* eslint-disable no-useless-concat */
import moment from "moment";
import React from "react";

function CreateCSV({ csvData }) {
  const createCSV = () => {
    let data = prompt("Enter Your Password:")
    if(data!=="Admin"){
      alert("Wrong Input Entered")
      return
    }
    let csv = "";
    for (let date in csvData) {
      csv += `Attendence For: , ${moment(date).format("MMMM Do YYYY")}` + "\r\n";
      for (let firstAttendenceOftheDate in csvData[date][0]) {
        csv += firstAttendenceOftheDate.toUpperCase() + ",";
      }
      csv += "\r\n";
      for (let attendence of csvData[date]) {
        for (let key in attendence) {
          csv += `${attendence[key]}` + ",";
        }
        csv += "\r\n";
      }
    }
    let link = document.createElement("a");
    link.id = "download-csv";
    link.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
    );
    link.setAttribute("download", "attendence.csv");
    document.body.appendChild(link);
    document.querySelector("#download-csv").click();
  };
  return (
    <div>
      <button onClick={createCSV} className="csv_button btn btn-outline-dark">
        Download CSV
      </button>
    </div>
  );
}

export default CreateCSV;
