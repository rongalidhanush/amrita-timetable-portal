"use client";
import { useState, useEffect } from "react";

const sections = ["Section D", "Section E", "Section F"];

const timetableData: Record<string, Record<string, { time: string; subject: string }[]>> = {
  "Section F": {
    Monday: [
      { time: "08:10", subject: "Fundamentals of AI" },
      { time: "09:00", subject: "Operating Systems" },
      { time: "09:50", subject: "Strategic Lessons from Mahabharata" },
      { time: "10:50", subject: "Introduction to Computer Networks (Lab)" },
      { time: "14:00", subject: "Mathematics for Computing 3" },
      { time: "14:50", subject: "Introduction to Python" },
    ],
    Tuesday: [
      { time: "08:10", subject: "Mathematics for Computing 3 (Lab)" },
      { time: "10:50", subject: "Fundamentals of AI (Lab)" },
      { time: "14:00", subject: "Introduction to Computer Networks" },
      { time: "14:50", subject: "Intelligence of Biological Systems 1" },
    ],
    Wednesday: [
      { time: "08:10", subject: "Intelligence of Biological Systems 1" },
      { time: "09:00", subject: "Operating Systems" },
      { time: "09:50", subject: "Mathematics for Computing 3" },
      { time: "10:50", subject: "Data Structures & Algorithms 2 (Lab)" },
      { time: "14:00", subject: "FE I" },
      { time: "14:50", subject: "Counselling" },
    ],
    Thursday: [
      { time: "08:10", subject: "Data Structures & Algorithms 2" },
      { time: "09:00", subject: "Evaluation" },
      { time: "09:50", subject: "FE I" },
      { time: "11:00", subject: "Fundamentals of AI" },
      { time: "11:50", subject: "Mathematics for Computing 3" },
      { time: "13:25", subject: "Introduction to Python (Lab)" },
    ],
    Friday: [
      { time: "08:10", subject: "Introduction to Computer Networks" },
      { time: "09:00", subject: "Life Skills for Engineers 1" },
      { time: "13:25", subject: "Operating Systems (Lab)" },
      { time: "14:00", subject: "Data Structures & Algorithms 2" },
    ],
  },
  "Section E": {
    Monday: [
      { time: "08:10", subject: "Mathematics for Computing 3 (Lab)" },
      { time: "10:50", subject: "Fundamentals of AI (Lab)" },
      { time: "14:00", subject: "Operating Systems" },
      { time: "14:50", subject: "Introduction to Computer Networks" },
    ],
    Tuesday: [
      { time: "08:10", subject: "Intelligence of Biological Systems 1" },
      { time: "09:00", subject: "Life Skills for Engineers 1" },
      { time: "11:50", subject: "Mathematics for Computing 3" },
      { time: "13:25", subject: "Data Structures & Algorithms 2 (Lab)" },
    ],
    Wednesday: [
      { time: "08:10", subject: "Introduction to Python (Lab)" },
      { time: "11:00", subject: "Strategic Lessons from Mahabharata" },
      { time: "11:50", subject: "Intelligence of Biological Systems 1" },
      { time: "14:00", subject: "FE I" },
      { time: "14:50", subject: "Mathematics for Computing 3" },
    ],
    Thursday: [
      { time: "08:10", subject: "Fundamentals of AI" },
      { time: "09:00", subject: "Counselling" },
      { time: "09:50", subject: "FE I" },
      { time: "11:00", subject: "Data Structures & Algorithms 2" },
      { time: "11:50", subject: "Introduction to Computer Networks" },
      { time: "13:25", subject: "Operating Systems (Lab)" },
    ],
    Friday: [
      { time: "08:10", subject: "Operating Systems" },
      { time: "09:00", subject: "Data Structures & Algorithms 2" },
      { time: "09:50", subject: "Mathematics for Computing 3" },
      { time: "11:00", subject: "Introduction to Python" },
      { time: "11:50", subject: "Fundamentals of AI" },
      { time: "13:25", subject: "Introduction to Computer Networks (Lab)" },
    ],
  },
  "Section D": {
    Monday: [
      { time: "08:10", subject: "Intelligence of Biological Systems 1" },
      { time: "09:00", subject: "Life Skills for Engineers 1" },
      { time: "11:50", subject: "Mathematics for Computing 3" },
      { time: "13:25", subject: "Fundamentals of AI (Lab)" },
    ],
    Tuesday: [
      { time: "08:10", subject: "Fundamentals of AI" },
      { time: "09:00", subject: "Intelligence of Biological Systems 1" },
      { time: "09:50", subject: "Strategic Lessons from Mahabharata" },
      { time: "11:00", subject: "Mathematics for Computing 3" },
      { time: "11:50", subject: "Introduction to Computer Networks" },
      { time: "13:25", subject: "Operating Systems (Lab)" },
    ],
    Wednesday: [
      { time: "08:10", subject: "Mathematics for Computing 3 (Lab)" },
      { time: "10:50", subject: "Data Structures & Algorithms 2 (Lab)" },
      { time: "14:00", subject: "FE I" },
      { time: "14:50", subject: "Counselling" },
    ],
    Thursday: [
      { time: "08:10", subject: "Operating Systems" },
      { time: "09:00", subject: "Data Structures & Algorithms 2" },
      { time: "09:50", subject: "FE I" },
      { time: "11:00", subject: "Introduction to Python" },
      { time: "11:50", subject: "Mathematics for Computing 3" },
      { time: "13:25", subject: "Introduction to Computer Networks (Lab)" },
    ],
    Friday: [
      { time: "08:10", subject: "Data Structures & Algorithms 2" },
      { time: "09:00", subject: "Introduction to Computer Networks" },
      { time: "09:50", subject: "Fundamentals of AI" },
      { time: "11:00", subject: "Operating Systems" },
      { time: "11:50", subject: "Evaluation" },
      { time: "13:25", subject: "Introduction to Python (Lab)" },
    ],
  },
};

export default function Reminders() {
  const [selectedSection, setSelectedSection] = useState("Section F");
  const [enabled, setEnabled] = useState(false);
  const [status, setStatus] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];
  const todaySchedule = timetableData[selectedSection][today] || [];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getStatus = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    const classStart = new Date();
    classStart.setHours(h, m, 0, 0);
    const classEnd = new Date();
    classEnd.setHours(h, m + 50, 0, 0);
    const now = currentTime;
    if (now >= classStart && now <= classEnd) return "ongoing";
    if (now < classStart) return "upcoming";
    return "done";
  };

  const getTimeLeft = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    const classStart = new Date();
    classStart.setHours(h, m, 0, 0);
    const diff = classStart.getTime() - currentTime.getTime();
    if (diff <= 0) return null;
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    if (hrs > 0) return `${hrs}h ${mins % 60}m away`;
    return `${mins}m away`;
  };

  const enableReminders = async () => {
    if (!("Notification" in window)) {
      setStatus("❌ Browser does not support notifications.");
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      setEnabled(true);
      setStatus("✅ Reminders enabled for today's classes!");
      todaySchedule.forEach(({ time, subject }) => {
        const [h, m] = time.split(":").map(Number);
        const classTime = new Date();
        classTime.setHours(h, m - 5, 0, 0);
        const delay = classTime.getTime() - new Date().getTime();
        if (delay > 0) {
          setTimeout(() => {
            new Notification("📚 Class Reminder", {
              body: `${subject} starts in 5 minutes! (${time})`,
            });
          }, delay);
        }
      });
    } else {
      setStatus("❌ Permission denied.");
    }
  };

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-bold text-white mb-1">Class Reminders</h2>
      <p className="text-gray-400 text-sm mb-4">
        Today is <span className="text-white font-semibold">{today}</span> •{" "}
        {currentTime.toLocaleTimeString("en-IN")}
      </p>

      {/* Section Selector */}
      <div className="flex gap-2 mb-5">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => { setSelectedSection(sec); setEnabled(false); setStatus(""); }}
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

      {todaySchedule.length === 0 ? (
        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-8 text-center">
          <p className="text-4xl mb-3">🎉</p>
          <p className="text-white font-bold text-lg">No classes today!</p>
          <p className="text-gray-400 text-sm mt-1">Enjoy your {today}!</p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {todaySchedule.map(({ time, subject }) => {
            const status = getStatus(time);
            const timeLeft = getTimeLeft(time);
            return (
              <div
                key={time}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  status === "ongoing"
                    ? "bg-green-900/30 border-green-500"
                    : status === "upcoming"
                    ? "bg-[#161b22] border-gray-700"
                    : "bg-gray-900/30 border-gray-800 opacity-50"
                }`}
              >
                <div>
                  <p className="font-semibold text-sm text-white">{subject}</p>
                  <p className="text-gray-400 text-xs mt-1">{time}</p>
                </div>
                <div className="text-right">
                  {status === "ongoing" && (
                    <span className="text-green-400 text-xs font-bold animate-pulse">🟢 Ongoing</span>
                  )}
                  {status === "upcoming" && timeLeft && (
                    <span className="text-blue-400 text-xs">{timeLeft}</span>
                  )}
                  {status === "done" && (
                    <span className="text-gray-500 text-xs">✓ Done</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {todaySchedule.length > 0 && (
        <>
          {!enabled ? (
            <button
              onClick={enableReminders}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold"
            >
              🔔 Enable 5-min Reminders for Today
            </button>
          ) : (
            <button className="w-full bg-gray-700 text-white py-3 rounded-xl font-semibold cursor-not-allowed">
              🔔 Reminders Active
            </button>
          )}
          {status && <p className="mt-3 text-sm text-center text-gray-300">{status}</p>}
        </>
      )}
    </div>
  );
}