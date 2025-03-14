export default function   PublishSection() {
    const cards = [
      {
        title: "Get ready to publish",
        description:
          "Choose which journal to publish in or search our active calls for papers. When you're ready, find out how to submit your paper.",
        icon: "📄",
      },
      {
        title: "Find a journal",
        description:
          "Use our search to find your chosen journal and find out what is required to submit your paper in the author guidelines.",
        icon: "📝",
      },
      {
        title: "Peer review process",
        description:
          "Understand the journal and case study peer review process and read our tips for revising your submission.",
        icon: "🔄",
      },
      {
        title: "Find calls for papers",
        description:
          "Search all our active calls for papers. Filter by type of call, subject area and SDGs, then visit the journal page and find out how to submit.",
        icon: "📢",
      },
    ];
  
    return (
      <section className="py-16 px-6 lg:px-24 bg-gray-50 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Prepare & Submit Your Paper
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto my-6"></div>
        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-x-22 gap-y-22 max-w-6xl mx-auto mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white p-8 shadow-lg rounded-xl text-left border-l-4 border-blue-500 transition-transform duration-300 "
            >
              {/* Background fill effect */}
              <div className="absolute inset-0 bg-blue-100 scale-x-0 origin-left transition-transform duration-800 group-hover:scale-x-100"></div>
  
              {/* Content */}
              <div className="relative flex items-start gap-4">
                <span className="text-4xl">{card.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  