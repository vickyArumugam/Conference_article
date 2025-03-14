import { Monitor, Search, CheckCircle2, FileEdit, Type, FileCheck, Rocket, BookOpen } from "lucide-react";

export default function PublishingTimeline() {
  const timelineSteps = [
    // First row
    [
      {
        icon: <Monitor className="w-8 h-8" />,
        title: "1. Submit",
        description:
          "Submit your research through our online platform. You will need to register for an account if you don't already have one.",
        time: "2-8 months",
        color: "blue",
      },
      {
        icon: <Search className="w-8 h-8" />,
        title: "2. Editor Check",
        description:
          "Our expert editors review the style and scope of the paper. If suitable, they will select expert reviewers.",
        color: "purple",
      },
      {
        icon: <CheckCircle2 className="w-8 h-8" />,
        title: "3. Decision",
        description:
          "Once the reviews are in, the editor will make one of the following decisions: Accept, Minor revisions, Major revisions, or Reject.",
        color: "pink",
      },
      {
        icon: <FileEdit className="w-8 h-8" />,
        title: "4. Revisions",
        description:
          "If revisions are needed, you'll receive detailed feedback. Address all comments and resubmit your revised paper.",
        color: "rose",
      },
    ],
    // Second row
    [
      {
        icon: <Type className="w-8 h-8" />,
        title: "5. Typesetting",
        description:
          "Your accepted paper goes through professional typesetting to ensure consistent formatting and style.",
        time: "32 Days",
        color: "blue",
      },
      {
        icon: <FileCheck className="w-8 h-8" />,
        title: "6. Author Proofs",
        description: "Review the typeset version and mark any final corrections needed before publication.",
        color: "purple",
      },
      {
        icon: <Rocket className="w-8 h-8" />,
        title: "7. EarlyCite",
        description:
          "Your paper will be published online first through EarlyCite while awaiting final volume assignment.",
        color: "pink",
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "8. Publication",
        description: "Your journal issue is published and your article is available in its final form.",
        color: "rose",
      },
    ],
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1e1b4b] leading-tight pt-5 pb-2">
          The Journal Publishing Process
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 mb-10"></div>
        <p className="text-[#1e1b4b] text-base sm:text-lg font-sans p-3 sm:leading-8 w-[80%] mx-auto">
          From submission to publication, track your research journey through our comprehensive process. Each step is carefully designed to ensure the highest quality of academic publishing.
        </p>
      </div>

      <div className="space-y-16 mt-12">
        {timelineSteps.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">

       

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {row.map((step, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-b from-[#f0f4ff] to-[#ffffff] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connector dots for mobile */}
                  {index < row.length - 1 && (
                    <div className="md:hidden absolute left-1/2 bottom-0 w-px h-8 bg-[#f0f4ff] transform translate-y-full" />
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-${step.color}-500/10 rounded-full flex items-center justify-center mb-6`}>
                      <div className={`text-${step.color}-500`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#1e1b4b] mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}