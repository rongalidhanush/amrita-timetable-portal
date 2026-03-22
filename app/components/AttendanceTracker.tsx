"use client";
import { useState } from "react";

const subjects = [
  { name: "Maths for Computing 2", total: 72 },
  { name: "User Interface Design", total: 60 },
  { name: "Intro to EEE", total: 66 },
  { name: "Elements of Computing Systems 2", total: 65 },
  { name: "Data Structures & Algorithms 1", total: 75 },
  { name: "OOP in Java", total: 77 },
  { name: "Glimpses of Glorious India", total: 31 },
];

export default function AttendanceTracker() {
  const [data, setData] = useState(
    subjects.reduce((acc, sub) => ({
      ...acc,
      [sub.name]: { conducted: "", attended: "" }
    }), {} as Record<string, { conducted: string; attended: string }>)
  );

  const update = (subject: string, field: string, value: string) => {
    if (value !== "" && (isNaN(Number(value)) || Number(value) < 0)) return;
    setData((prev) => ({
      ...prev,
      [subject]: { ...prev[subject], [field]: value }
    }));
  };

  const calculate = (subject: string, total: number) => {
    const { conducted, attended } = data[subject];
    const c = Number(conducted);
    const a = Number(attended);
    if (!c || c <= 0) return null;
    if (a > c) return null;
    const percent = Math.round((a / c) * 100);
    const remaining = total - c;
    const alreadyAbsent = c - a;
    const maxAbsent = Math.floor(total * 0.25);
    const bunkLeft = Math.max(0, maxAbsent - alreadyAbsent);
    const minRequired = Math.ceil(total * 0.75);
    const needToAttend = Math.max(0, minRequired - a);
    return { percent, bunkLeft, needToAttend, remaining };
  };

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-bold text-white mb-1">Attendance Calculator</h2>
      <p className="text-gray-400 text-sm mb-6">
        Minimum required: <span className="text-yellow-400 font-semibold">75%</span> • Semester ends: May 8, 2026
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((sub) => {
          const result = calculate(sub.name, sub.total);
          const percent = result?.percent ?? 0;
          const border = !result
            ? "border-gray-800"
            : percent >= 75
            ? "border-green-600"
            : percent >= 60
            ? "border-yellow-600"
            : "border-red-600";
          const color = !result
            ? "text-gray-500"
            : percent >= 75
            ? "text-green-400"
            : percent >= 60
            ? "text-yellow-400"
            : "text-red-400";
          const barColor = !result
            ? "bg-gray-600"
            : percent >= 75
            ? "bg-green-500"
            : percent >= 60
            ? "bg-yellow-500"
            : "bg-red-500";

          return (
            <div key={sub.name} className={`bg-[#161b22] border ${border} rounded-2xl p-5 transition-all`}>

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-white text-sm">{sub.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">Total semester classes: {sub.total}</p>
                </div>
                <span className={`font-bold text-2xl ${color}`}>
                  {result ? `${percent}%` : "--"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${barColor}`}
                  style={{ width: `${result ? Math.min(percent, 100) : 0}%` }}
                />
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <p className="text-gray-500 text-xs mb-1.5">Classes Conducted</p>
                  <input
                    type="number"
                    min="0"
                    max={sub.total}
                    value={data[sub.name].conducted}
                    onChange={(e) => update(sub.name, "conducted", e.target.value)}
                    placeholder="e.g. 40"
                    className="w-full bg-gray-900 border border-gray-700 hover:border-gray-500 focus:border-blue-500 text-white text-sm rounded-xl px-3 py-2 focus:outline-none transition"
                  />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1.5">Classes Attended</p>
                  <input
                    type="number"
                    min="0"
                    max={data[sub.name].conducted || sub.total}
                    value={data[sub.name].attended}
                    onChange={(e) => update(sub.name, "attended", e.target.value)}
                    placeholder="e.g. 35"
                    className="w-full bg-gray-900 border border-gray-700 hover:border-gray-500 focus:border-blue-500 text-white text-sm rounded-xl px-3 py-2 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Results */}
              {result ? (
                <>
                  <div className="grid grid-cols-3 gap-2 text-center mb-3">
                    <div className="bg-gray-900 rounded-xl p-2.5">
                      <p className="text-green-400 font-bold text-lg">{result.bunkLeft}</p>
                      <p className="text-gray-500 text-xs">Can Bunk</p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-2.5">
                      <p className="text-blue-400 font-bold text-lg">{result.needToAttend}</p>
                      <p className="text-gray-500 text-xs">Must Attend</p>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-2.5">
                      <p className="text-purple-400 font-bold text-lg">{result.remaining}</p>
                      <p className="text-gray-500 text-xs">Remaining</p>
                    </div>
                  </div>

                  {percent < 75 && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2 text-center">
                      <p className="text-red-400 text-xs">⚠️ Below 75% — attend {result.needToAttend} more to recover</p>
                    </div>
                  )}
                  {result.bunkLeft === 0 && percent >= 75 && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-3 py-2 text-center">
                      <p className="text-yellow-400 text-xs">⚠️ No bunk margin left — attend all remaining classes</p>
                    </div>
                  )}
                  {result.bunkLeft > 0 && percent >= 75 && (
                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-3 py-2 text-center">
                      <p className="text-green-400 text-xs">✅ You can safely bunk {result.bunkLeft} more classes</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-600 text-xs text-center">📊 Know your bunk margin,buddy!</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}