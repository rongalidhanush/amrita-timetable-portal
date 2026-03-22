"use client";
import { useState } from "react";

const sections = ["Section D", "Section E", "Section F"];

const timetableData: Record<string, Record<string, { subject: string; time: string; isLab?: boolean }[]>> = {
  "Section F": {
    Monday: [
      { subject: "OOP in Java", time: "8:10-9:00" },
      { subject: "Maths for Computing 2", time: "9:00-9:50" },
      { subject: "Glimpses of Glorious India", time: "9:50-10:40" },
      { subject: "User Interface Design (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Free", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
    Tuesday: [
      { subject: "Elements of Computing Systems 2", time: "8:10-9:00" },
      { subject: "Data Structures & Algorithms 1", time: "9:00-9:50" },
      { subject: "User Interface Design", time: "9:50-10:40" },
      { subject: "Free", time: "11:00-11:50" },
      { subject: "Intro to EEE", time: "11:50-12:40" },
      { subject: "Maths for Computing 2 (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Wednesday: [
      { subject: "Glimpses of Glorious India", time: "8:10-9:00" },
      { subject: "Data Structures & Algorithms 1", time: "9:00-9:50" },
      { subject: "Free", time: "9:50-10:40" },
      { subject: "OOP in Java (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Elements of Computing Systems 2 (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Thursday: [
      { subject: "Maths for Computing 2", time: "8:10-9:00" },
      { subject: "Free", time: "9:00-9:50" },
      { subject: "OOP in Java", time: "9:50-10:40" },
      { subject: "Elements of Computing Systems 2", time: "11:00-11:50" },
      { subject: "Intro to EEE", time: "11:50-12:40" },
      { subject: "Data Structures & Algorithms 1 (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Friday: [
      { subject: "Data Structures & Algorithms 1", time: "8:10-9:00" },
      { subject: "User Interface Design", time: "9:00-9:50" },
      { subject: "OOP in Java", time: "9:50-10:40" },
      { subject: "Intro to EEE (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Maths for Computing 2", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
  },
  "Section D": {
    Monday: [
      { subject: "OOP in Java", time: "8:10-9:00" },
      { subject: "Data Structures & Algorithms 1", time: "9:00-9:50" },
      { subject: "User Interface Design", time: "9:50-10:40" },
      { subject: "Maths for Computing 2 (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Glimpses of Glorious India", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
    Tuesday: [
      { subject: "Maths for Computing 2", time: "8:10-9:00" },
      { subject: "Data Structures & Algorithms 1", time: "9:00-9:50" },
      { subject: "Intro to EEE", time: "9:50-10:40" },
      { subject: "OOP in Java (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Elements of Computing Systems 2", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
    Wednesday: [
      { subject: "Elements of Computing Systems 2 (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Maths for Computing 2", time: "11:00-11:50" },
      { subject: "Glimpses of Glorious India", time: "11:50-12:40" },
      { subject: "Data Structures & Algorithms 1", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
    Thursday: [
      { subject: "User Interface Design (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Maths for Computing 2", time: "11:00-11:50" },
      { subject: "OOP in Java", time: "11:50-12:40" },
      { subject: "Intro to EEE (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Friday: [
      { subject: "User Interface Design", time: "8:10-9:00" },
      { subject: "Elements of Computing Systems 2", time: "9:00-9:50" },
      { subject: "Intro to EEE", time: "9:50-10:40" },
      { subject: "Data Structures & Algorithms 1 (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "OOP in Java", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
  },
  "Section E": {
    Monday: [
      { subject: "Elements of Computing Systems 2 (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Data Structures & Algorithms 1", time: "11:00-11:50" },
      { subject: "OOP in Java", time: "11:50-12:40" },
      { subject: "Intro to EEE (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Tuesday: [
      { subject: "OOP in Java (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Maths for Computing 2", time: "11:00-11:50" },
      { subject: "Data Structures & Algorithms 1", time: "11:50-12:40" },
      { subject: "Free", time: "2:00-2:50" },
      { subject: "Free", time: "2:50-3:40" },
    ],
    Wednesday: [
      { subject: "User Interface Design", time: "8:10-9:00" },
      { subject: "Intro to EEE", time: "9:00-9:50" },
      { subject: "Glimpses of Glorious India", time: "9:50-10:40" },
      { subject: "Elements of Computing Systems 2", time: "11:00-11:50" },
      { subject: "Data Structures & Algorithms 1", time: "11:50-12:40" },
      { subject: "Maths for Computing 2", time: "2:00-2:50" },
      { subject: "OOP in Java", time: "2:50-3:40" },
    ],
    Thursday: [
      { subject: "OOP in Java", time: "8:10-9:00" },
      { subject: "Glimpses of Glorious India", time: "9:00-9:50" },
      { subject: "Elements of Computing Systems 2", time: "9:50-10:40" },
      { subject: "Data Structures & Algorithms 1 (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Maths for Computing 2", time: "2:00-2:50" },
      { subject: "User Interface Design", time: "2:50-3:40" },
    ],
    Friday: [
      { subject: "Maths for Computing 2 (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Intro to EEE", time: "11:00-11:50" },
      { subject: "Free", time: "11:50-12:40" },
      { subject: "User Interface Design (Lab)", time: "1:25-3:40", isLab: true },
    ],
  },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function TimetableGrid() {
  const [selectedSection, setSelectedSection] = useState("Section F");

  const timetable = timetableData[selectedSection];

  return (
    <div className="mt-4">
      {/* Section Selector */}
      <div className="flex gap-2 mb-5">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSection(sec)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
              selectedSection === sec
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {sec}
          </button>
        ))}
      </div>

      {/* Timetable */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {days.map((day) => (
          <div key={day} className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-blue-900/50 border-b border-gray-700 p-3 text-center font-bold text-white text-sm">{day}</div>
            <div className="divide-y divide-gray-800">
              {timetable[day].map((period, i) => (
                <div key={i} className={`p-3 ${period.subject === "Free" ? "opacity-30" : ""}`}>
                  <p className={`font-semibold text-xs ${period.isLab ? "text-yellow-400" : "text-white"}`}>
                    {period.subject}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{period.time}</p>
                  {period.isLab && <span className="text-xs text-yellow-600">🧪 Lab</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-600 mt-3 text-center">Saturday: No classes 🎉</p>
    </div>
  );
}