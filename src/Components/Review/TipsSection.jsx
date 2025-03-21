import React, { useState } from "react";
import {
  Lightbulb,
  Clock,
  Calendar,
  FileCheck,
  ListTodo,
  FileEdit,
  PenTool,
  ThumbsUp,
} from "lucide-react";

const tips = [
  {
    title: "View comments as feedback",
    description:
      "View the comments and the work required as feedback, not criticism. The peer review process is very likely double anonymous, so you don't know who your reviewers are, and they don't know who you are.",
    icon: <Lightbulb />,
  },
  {
    title: "Take time to reflect",
    description:
      "Put the comments to one side for a few days, then come back to them. You will be in a better frame of mind to appreciate exactly what is being said.",
    icon: <Clock />,
  },
  {
    title: "Agree on a timescale",
    description:
      "Agree on a timescale with the editor to carry out the revisions, including gathering more data or reading new literature, if required.",
    icon: <Calendar />,
  },
  {
    title: "Get clarity on reviewer comments",
    description: "Clarify any ambiguity or contradiction in the reviewers' comments.",
    icon: <FileCheck />,
  },
  {
    title: "Plan your amendments",
    description:
      "Decide the order in which you tackle the amendments. You might want to work through your submission chronologically, by reviewer, or perhaps attempt the more minor revisions first.",
    icon: <ListTodo />,
  },
  {
    title: "Proofread your revised work",
    description:
      "Once you have revised your submission, proofread and spell check it again. Carefully!",
    icon: <FileEdit />,
  },
  {
    title: "Summarise your amendments",
    description:
      "Write a covering letter to the editor, stating what you have done for each reviewer, and if you haven't done what the reviewers requested, provide detailed reasons why not.",
    icon: <PenTool />,
  },
  {
    title: "Thank your reviewers",
    description:
      "Thank your reviewers for their positive comments and respond graciously to constructive feedback.",
    icon: <ThumbsUp />,
  },
];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Mastering the Art of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}Manuscript Revision
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your academic journey with our comprehensive guide to handling manuscript revisions effectively and professionally.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out transform
                ${selectedIndex === index ? 'ring-2 ring-blue-500 scale-105' : 'ring-1 ring-gray-200'}
                ${hoveredIndex === index ? 'shadow-xl scale-105' : 'shadow-md'}
                bg-white backdrop-blur-sm
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}
            >
              <div className="p-6 transition-all duration-500">
                {/* Icon Container */}
                <div className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  transition-all duration-300 transform
                  ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                  ${selectedIndex === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
                `}>
                  {React.cloneElement(tip.icon, { className: 'w-6 h-6' })}
                </div>

                {/* Content */}
                <h3 className={`
                  text-lg font-semibold mb-3 transition-colors duration-300
                  ${selectedIndex === index ? 'text-blue-600' : 'text-gray-900'}
                `}>
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed transition-opacity duration-500">
                  {tip.description}
                </p>

                {/* Background Animation Effect */}
                <div className={`
                  absolute -right-10 -bottom-10 w-32 h-32 rounded-full
                  transition-all duration-500 opacity-10
                  ${selectedIndex === index ? 'bg-blue-500' : 'bg-gray-500'}
                  ${hoveredIndex === index ? 'scale-100' : 'scale-0'}
                `} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
