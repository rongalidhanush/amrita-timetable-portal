"use client";
import { useState } from "react";

const sections = ["Section D", "Section E", "Section F"];

const subjectData: Record<string, { name: string; faculty: string; contact: string; drive: string }[]> = {
  "Section F": [
    { name: "Data Structures & Algorithms 1", faculty: "Anjali Patel", contact: "9461422750", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FDataStructures%20and%20Algorithms%2D1&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "User Interface Design", faculty: "Manju Khanna", contact: "9845176532", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FUser%20Interface%20Design&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Glimpses of Glorious India", faculty: "Bhavya Suresh", contact: "8884235483", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FGlimpses%20of%20Glorious%20India&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Mathematics for Computing 2", faculty: "Murali K", contact: "9845056124", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FMaths%20for%20Computing%2D2&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Intro to Electrical & Electronics Engg", faculty: "Sailaja V", contact: "9008183849", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FIEEE&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Object Oriented Programming in Java", faculty: "Dr. Reena Panwar", contact: "9650687776", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FObjected%20Oriented%20Programming%20in%20JAVA&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
    { name: "Elements of Computing Systems 2", faculty: "Ritesh Raj", contact: "7903631620", drive: "https://aseblr-my.sharepoint.com/my?id=%2Fpersonal%2Fbl%5Fsc%5Fu4aie25241%5Fbl%5Fstudents%5Famrita%5Fedu%2FDocuments%2FStudy%20Materials%28AIE%2DF%29%2FSEMESTER%2D2%2FElements%20of%20Computing%2D2&viewid=612165d7%2Dece6%2D40c0%2Dab0d%2D58fe433266f7" },
  ],
  "Section E": [
    { name: "Data Structures & Algorithms 1", faculty: "Thushara G A", contact: "9497691384", drive: "https://drive.google.com/drive/folders/18mUmnsZ8qIiJ1CgVZhfAh-neh5maXJxR" },
    { name: "User Interface Design", faculty: "Manju Khanna", contact: "9845176532", drive: "https://drive.google.com/drive/folders/1lSIXw-vG1T5PMzJJJgvBU00kDEF7MTT7" },
    { name: "Glimpses of Glorious India", faculty: "TBA", contact: "TBA", drive: "https://drive.google.com/drive/folders/1WxrzTNPSb1J07hou6idozuBUXPchcl13" },
    { name: "Mathematics for Computing 2", faculty: "Mamatha T M", contact: "9902931759", drive: "https://drive.google.com/drive/folders/1VLDe9muR7__pcnAboVTMD1XpFx5Uu7V8" },
    { name: "Intro to Electrical & Electronics Engg", faculty: "Sujit Kumar", contact: "9660048172", drive: "https://drive.google.com/drive/folders/1Ejk2kMDqSL3-GuIsfLongH1zVBbwh14z" },
    { name: "Object Oriented Programming in Java", faculty: "Dr. Reena Panwar", contact: "9650687776", drive: "https://drive.google.com/drive/folders/1WEytljATmq18SAFB1CMBiTQTRxU8rmAH" },
    { name: "Elements of Computing Systems 2", faculty: "Lijin P", contact: "7558037631", drive: "https://drive.google.com/drive/folders/120a5zfX_r1hyR6tL3qsIICeioEYzIP57" },
  ],
  "Section D": [
    { name: "Data Structures & Algorithms 1", faculty: "Thushara G A", contact: "9497691384", drive: "https://drive.google.com/drive/u/1/folders/17L9DMGR_4Ez9xaPszLONBw3hdKbUh7wu" },
    { name: "User Interface Design", faculty: "Arya R", contact: "8301863980", drive: "https://drive.google.com/drive/u/1/folders/1LjSJ9vwwzdY5eeXSm8kkvWVwXZMXXpfj" },
    { name: "Glimpses of Glorious India", faculty: "Tanashree Redij", contact: "9545955182", drive: "https://drive.google.com/drive/u/1/folders/14zQ4Qq4-w0e0GWSYks2MkfLQjWndKKzU" },
    { name: "Mathematics for Computing 2", faculty: "Neetu S", contact: "9845769155", drive: "https://drive.google.com/drive/u/1/folders/1T1pddVckImzYxGGc4IVsts4mHAA9C6I9" },
    { name: "Intro to Electrical & Electronics Engg", faculty: "Sujit Kumar", contact: "9660048172", drive: "https://drive.google.com/drive/u/1/folders/1-GasUzIkfJW_Eswl6Nj9rdtwDhGn31RG" },
    { name: "Object Oriented Programming in Java", faculty: "Sajitha Krishnan", contact: "8281293207", drive: "https://drive.google.com/drive/u/1/folders/1nfVj2JgMhBBMvembFicqMyz_VQ1OwvRi" },
    { name: "Elements of Computing Systems 2", faculty: "Lijin P", contact: "7558037631", drive: "https://drive.google.com/drive/u/1/folders/1U40vEhWugx_5AL_wIbC0VS2YImFmyJCG" },
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