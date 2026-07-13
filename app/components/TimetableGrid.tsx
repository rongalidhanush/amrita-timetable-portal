"use client";
import { useState } from "react";

const sections = ["Section D", "Section E", "Section F"];

const timetableData: Record<string, Record<string, { subject: string; time: string; isLab?: boolean }[]>> = {
  "Section F": {
    Monday: [
      { subject: "Fundamentals of AI", time: "8:10-9:00" },
      { subject: "Operating Systems", time: "9:00-9:50" },
      { subject: "Strategic Lessons from Mahabharata", time: "9:50-10:40" },
      { subject: "Introduction to Computer Networks (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Mathematics for Computing 3", time: "2:00-2:50" },
      { subject: "Introduction to Python", time: "2:50-3:40" },
    ],
    Tuesday: [
      { subject: "Operating Systems (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Fundamentals of AI (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Introduction to Computer Networks", time: "2:00-2:50" },
      { subject: "Intelligence of Biological Systems 1", time: "2:50-3:40" },
    ],
    Wednesday: [
      { subject: "Intelligence of Biological Systems 1", time: "8:10-9:00" },
      { subject: "Mathematics for Computing 3", time: "9:00-9:50" },
      { subject: "Operating Systems", time: "9:50-10:40" },
      { subject: "Data Structures & Algorithms 2 (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "FE I", time: "2:00-2:50" },
      { subject: "Counselling", time: "2:50-3:40" },
    ],
    Thursday: [
      { subject: "Data Structures & Algorithms 2", time: "8:10-9:00" },
      { subject: "Evaluation", time: "9:00-9:50" },
      { subject: "FE I", time: "9:50-10:40" },
      { subject: "Fundamentals of AI", time: "11:00-11:50" },
      { subject: "Mathematics for Computing 3", time: "11:50-12:40" },
      { subject: "Introduction to Python (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Friday: [
      { subject: "Introduction to Computer Networks", time: "8:10-9:00" },
      { subject: "Life Skills for Engineers 1", time: "9:00-9:50" },
      { subject: "Life Skills for Engineers 1", time: "9:50-10:40" },
      { subject: "Life Skills for Engineers 1", time: "11:00-11:50" },
      { subject: "Data Structures & Algorithms 2", time: "11:50-12:40" },
      { subject: "Mathematics for Computing 3 (Lab)", time: "1:25-3:40", isLab: true },
      { subject: "Counselling", time: "3:40-4:20" },
    ],
  },
  "Section E": {
    Monday: [
      { subject: "Mathematics for Computing 3 (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Fundamentals of AI (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "Operating Systems", time: "2:00-2:50" },
      { subject: "Introduction to Computer Networks", time: "2:50-3:40" },
    ],
    Tuesday: [
      { subject: "Introduction to Python", time: "8:10-9:00" },
      { subject: "Life Skills for Engineers 1", time: "9:00-9:50" },
      { subject: "Life Skills for Engineers 1", time: "9:50-10:40" },
      { subject: "Life Skills for Engineers 1", time: "11:00-11:50" },
      { subject: "Mathematics for Computing 3", time: "11:50-12:40" },
      { subject: "Data Structures & Algorithms 2 (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Wednesday: [
      { subject: "Introduction to Python (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Strategic Lessons from Mahabharata", time: "11:00-11:50" },
      { subject: "Intelligence of Biological Systems 1", time: "11:50-12:40" },
      { subject: "FE I", time: "2:00-2:50" },
      { subject: "Mathematics for Computing 3", time: "2:50-3:40" },
    ],
    Thursday: [
      { subject: "Fundamentals of AI", time: "8:10-9:00" },
      { subject: "Introduction to Computer Networks", time: "9:00-9:50" },
      { subject: "FE I", time: "9:50-10:40" },
      { subject: "Data Structures & Algorithms 2", time: "11:00-11:50" },
      { subject: "Intelligence of Biological Systems 1", time: "11:50-12:40" },
      { subject: "Operating Systems (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Friday: [
      { subject: "Operating Systems", time: "8:10-9:00" },
      { subject: "Mathematics for Computing 3", time: "9:00-9:50" },
      { subject: "Data Structures & Algorithms 2", time: "9:50-10:40" },
      { subject: "Counselling", time: "11:00-11:50" },
      { subject: "Fundamentals of AI", time: "11:50-12:40" },
      { subject: "Introduction to Computer Networks (Lab)", time: "1:25-3:40", isLab: true },
    ],
  },
  "Section D": {
    Monday: [
      { subject: "Intelligence of Biological Systems 1", time: "8:10-9:00" },
      { subject: "Life Skills for Engineers 1", time: "9:00-9:50" },
      { subject: "Life Skills for Engineers 1", time: "9:50-10:40" },
      { subject: "Life Skills for Engineers 1", time: "11:00-11:50" },
      { subject: "Mathematics for Computing 3", time: "11:50-12:40" },
      { subject: "Fundamentals of AI (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Tuesday: [
      { subject: "Fundamentals of AI", time: "8:10-9:00" },
      { subject: "Intelligence of Biological Systems 1", time: "9:00-9:50" },
      { subject: "Strategic Lessons from Mahabharata", time: "9:50-10:40" },
      { subject: "Mathematics for Computing 3", time: "11:00-11:50" },
      { subject: "Introduction to Computer Networks", time: "11:50-12:40" },
      { subject: "Operating Systems (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Wednesday: [
      { subject: "Mathematics for Computing 3 (Lab)", time: "8:10-10:25", isLab: true },
      { subject: "Data Structures & Algorithms 2 (Lab)", time: "10:50-1:05", isLab: true },
      { subject: "FE I", time: "2:00-2:50" },
      { subject: "Counselling", time: "2:50-3:40" },
    ],
    Thursday: [
      { subject: "Operating Systems", time: "8:10-9:00" },
      { subject: "Data Structures & Algorithms 2", time: "9:00-9:50" },
      { subject: "FE I", time: "9:50-10:40" },
      { subject: "Introduction to Python", time: "11:00-11:50" },
      { subject: "Mathematics for Computing 3", time: "11:50-12:40" },
      { subject: "Introduction to Computer Networks (Lab)", time: "1:25-3:40", isLab: true },
    ],
    Friday: [
      { subject: "Data Structures & Algorithms 2", time: "8:10-9:00" },
      { subject: "Introduction to Computer Networks", time: "9:00-9:50" },
      { subject: "Fundamentals of AI", time: "9:50-10:40" },
      { subject: "Operating Systems", time: "11:00-11:50" },
      { subject: "Evaluation", time: "11:50-12:40" },
      { subject: "Introduction to Python (Lab)", time: "1:25-3:40", isLab: true },
    ],
  },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function TimetableGrid() {
  const [selectedSection, setSelectedSection] = useState("Section F");
  const timetable = timetableData[selectedSection];

  return (
    <div className="mt-4">
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

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {days.map((day) => (
          <div key={day} className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden">
            <div className="bg-blue-900/50 border-b border-gray-700 p-3 text-center font-bold text-white text-sm">{day}</div>
            <div className="divide-y divide-gray-800">
              {timetable[day].map((period, i) => (
                <div key={i} className={`p-3 ${period.subject === "Free" || period.subject === "Counselling" || period.subject === "Evaluation" ? "opacity-40" : ""}`}>
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
      
    </div>
  );
}
