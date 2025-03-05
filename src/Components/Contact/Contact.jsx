export default function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/** Contact Info Cards */}
        <ContactInfo
          icon="📞"
          title="Call us"
          details={["212-262-4220", "212-262-3200"]}
          bgColor="bg-purple-100"
        />
        <ContactInfo
          icon="✉️"
          title="Email us"
          details={["help.baza@gmail.com", "info.baza@gmail.com"]}
          bgColor="bg-blue-100"
        />
        <ContactInfo
          icon="📍"
          title="Find us"
          details={["25 W 51st St, New York, NY 10019"]}
          bgColor="bg-green-100"
        />

        {/** Contact Form */}
        <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Write us a message</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, details, bgColor }) {
  return (
    <div className={`p-6 rounded-2xl shadow-md ${bgColor}`}>
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

// Let me know if you want me to add anything else! 🚀
