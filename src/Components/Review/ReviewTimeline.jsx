import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Submission",
    description:
      "The editor rejects the submission if it doesn't meet the journal's editorial objectives",
    status: "active",
  },
  {
    title: "Review Process",
    description:
      "The editor selects up to three reviewers and asks them to evaluate the manuscript against a set of criteria",
    status: "active",
  },
  {
    title: "Recommen dations",
    description: "The editor receives the reviewers' recommendations",
    status: "pending",
  },
  {
    title: "Final Decision",
    description:
      "The editor makes the final decision, taking into account the reviewers' recommendations",
    status: "pending",
  },
  {
    title: "Accept",
    description:
      "The editor notifies the author that their paper has been accepted",
    status: "success",
  },
  {
    title: "Reject",
    description:
      "The editor notifies the author that their paper has been rejected and shares a copy of the reviewers' comments",
    status: "danger",
  },
  {
    title: "Revise",
    description:
      "The editor notifies the author that their paper requires revisions and shares a copy of the reviewers' comments",
    status: "warning",
  },
];

const statusColors = {
  active: "bg-blue-500 border-blue-600",
  pending: "bg-gray-300 border-gray-400",
  success: "bg-green-500 border-green-600",
  danger: "bg-red-500 border-red-600",
  warning: "bg-yellow-500 border-yellow-600",
};

const statusBackground = {
  active: "bg-blue-50 border-blue-200",
  pending: "bg-gray-50 border-gray-200",
  success: "bg-green-50 border-green-200",
  danger: "bg-red-50 border-red-200",
  warning: "bg-yellow-50 border-yellow-200",
};

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Publication Review Process
        </h1>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {index % 2 === 0 && index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 h-12 w-8 -translate-x-1/2">
                    <ArrowRight
                      className="absolute top-2 left-1/2 -translate-x-1/2 rotate-90 text-gray-400"
                      size={24}
                    />
                  </div>
                )}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-2 ${
                      statusColors[step.status]
                    } z-10`}
                  ></div>
                </div>
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "sm:pr-8 pr-0" : "sm:pl-8 pl-0"
                  }`}
                >
                  <div
                    className={`p-4 rounded-lg shadow-sm border ${
                      statusBackground[step.status]
                    } transition-all duration-300 hover:shadow-md`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          {Object.entries(statusColors).map(([status, color]) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color}`}></div>
              <span className="text-sm text-gray-600 capitalize">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
