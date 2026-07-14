"use client";
import { useState } from "react";

const sections = ["Section D", "Section E", "Section F"];

type Subject = {
  name: string;
  faculty: string | string[];
  contact: string | string[];
  drive: string;
};

const subjectData: Record<string, Subject[]> = {
  "Section F": [
    { name: "Strategic Lessons from Mahabharata", faculty: "Saurabh Sharma", contact: "9453701900", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FStrategic%20Lessons%20from%20Mahabharata&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Operating Systems", faculty: "Sanghamitra Mishra", contact: "7899975137", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FOperating%20Systems&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Life Skills for Engineers 1", faculty: "Sujatha V | Karishma Nair N | Nilakshee Kalita", contact: "Sujatha V: TBD | Karishma Nair N: 8594013481 | Nilakshee Kalita: TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FLife%20Skills%20for%20Engineers%20%2D%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Python", faculty: "Aiswariya Milan K", contact: "8095741342", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Python&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Fundamentals of AI", faculty: "Manju Khanna", contact: "9845176532", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFundamentals%20of%20AI&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Mathematics for Computing 3", faculty: "Mamatha T M", contact: "9902931759", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FMathematics%20for%20Computing%203&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Intelligence of Biological Systems 1", faculty: "Vasavi CS", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntelligence%20of%20Biological%20Systems%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Computer Networks", faculty: "Shinu M R", contact: "9916648919", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Computer%20Networks&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Data Structures & Algorithms 2", faculty: "Yaso Omkari D", contact: "8374877978", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FData%20Structures%20%26%20Algorithms%202&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Free Elective 1", faculty: "TBD", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFree%20Elective%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
  ],
  "Section E": [
    { name: "Strategic Lessons from Mahabharata", faculty: "Bhavya Suresh", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FStrategic%20Lessons%20from%20Mahabharata&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Operating Systems", faculty: "Vishwas H N", contact: "8105079105", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FOperating%20Systems&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Life Skills for Engineers 1", faculty: "K M Sivakumar | Karishma Nair N | Nilakshee Kalita", contact: "K M Sivakumar: TBD | Karishma Nair N: 8594013481 | Nilakshee Kalita: TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FLife%20Skills%20for%20Engineers%20%2D%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Python", faculty: "Aiswariya Milan K", contact: "8095741342", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Python&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Fundamentals of AI", faculty: "Manju Khanna", contact: "9845176532", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFundamentals%20of%20AI&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Mathematics for Computing 3", faculty: "Mamatha T M", contact: "9902931759", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FMathematics%20for%20Computing%203&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Intelligence of Biological Systems 1", faculty: "Arya Suresh", contact: "8197307889", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntelligence%20of%20Biological%20Systems%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Computer Networks", faculty: "Thangam S", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Computer%20Networks&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Data Structures & Algorithms 2", faculty: "Nalini Sampath", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FData%20Structures%20%26%20Algorithms%202&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Free Elective 1", faculty: "TBD", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFree%20Elective%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
  ],
  "Section D": [
    { name: "Strategic Lessons from Mahabharata", faculty: "Bhavya Suresh", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FStrategic%20Lessons%20from%20Mahabharata&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Operating Systems", faculty: "Sanghamitra Mishra", contact: "7899975137", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FOperating%20Systems&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Life Skills for Engineers 1", faculty: "Sujatha V | Karishma Nair N | Nilakshee Kalita", contact: "Sujatha V: TBD | Karishma Nair N: 8594013481 | Nilakshee Kalita: TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FLife%20Skills%20for%20Engineers%20%2D%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Python", faculty: "Debanjali Bhattacharya", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Python&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Fundamentals of AI", faculty: "Sajitha Krishnan", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFundamentals%20of%20AI&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Mathematics for Computing 3", faculty: "Neetu S", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FMathematics%20for%20Computing%203&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Intelligence of Biological Systems 1", faculty: "Siva Kumar S", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntelligence%20of%20Biological%20Systems%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Introduction to Computer Networks", faculty: "Yaso Omkari D", contact: "8374877978", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FIntroduction%20to%20Computer%20Networks&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Data Structures & Algorithms 2", faculty: "Radha D", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FData%20Structures%20%26%20Algorithms%202&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Free Elective 1", faculty: "TBD", contact: "TBD", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D3%2FFree%20Elective%201&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
  ],
};

export default function SubjectDetails() {
  const [selectedSection, setSelectedSection] = useState("Section F");
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="mt-6 mb-10">
      <h2 className="text-xl font-bold text-white mb-4">Subject & Faculty Details</h2>

      {/* Section Selector */}
      <div className="flex gap-2 mb-5">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => { setSelectedSection(sec); setSelected(null); }}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjectData[selectedSection].map((sub) => (
          <div
            key={sub.name}
            onClick={() => setSelected(selected === sub.name ? null : sub.name)}
            className="bg-[#161b22] border border-gray-700 hover:border-gray-500 p-4 rounded-xl cursor-pointer transition"
          >
            <h3 className="font-semibold text-white text-sm">{sub.name}</h3>
            <p className="text-gray-400 text-xs mt-1">👨‍🏫 {sub.faculty}</p>
            {selected === sub.name && (
              <div className="mt-3 border-t border-gray-700 pt-3 space-y-2">
                <p className="text-xs text-gray-300">📞 <span className="text-white">{sub.contact}</span></p>
                <button
                  onClick={(e) => { e.stopPropagation(); window.open(sub.drive, "_blank"); }}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 rounded-lg mt-1"
                >
                  📂 Open Study Materials
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
