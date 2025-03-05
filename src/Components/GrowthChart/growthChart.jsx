import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: 2007, value: 10 },
  { year: 2008, value: 20 },
  { year: 2009, value: 15 },
  { year: 2010, value: 18 },
  { year: 2011, value: 25 },
  { year: 2013, value: 30 },
  { year: 2015, value: 40 },
  { year: 2016, value: 45 },
  { year: 2017, value: 50 },
];

export default function GrowthChart() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        {/* Chart Section (Increased Size) */}
        {/* <div className="w-full max-w-[600px] mx-auto">
          <h2 className="text-lg font-semibold text-gray-700 ml-16">Quantitative growth of writers</h2>
          <p className="text-sm text-gray-500 ml-16 mb-6">March 2007 – November 2017</p>
          
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />   
              <Line type="monotone" dataKey="value" stroke="#818CF8" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>

          <p className="text-sm text-indigo-400 font-bold mt-2 ml-16">
            327 writers are working with us for <span className="text-indigo-400">more than 3 years</span>
          </p>
        </div> */}

        {/* Text Section */}
        <div className="text-left w-full max-w-[500px] mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">Who we are</h2>
          <p className="text-gray-600 mt-2">
            <span className="text-indigo-400 font-semibold uppercase">articlespublication</span> is a reliable partner for professional freelance writers
            looking for a trustworthy <span className="text-indigo-400 font-semibold">long-term cooperation</span>. 
          </p>
          <p className="text-gray-600 mt-2">
            Our company offers many exciting projects and opportunities for self-improvement. 
            Plus, our support team is available 24/7.
          </p>
          <p className="font-medium text-gray-800 mt-4">
            If writing is what you like, you are welcome to give it a try with us!
          </p>
        </div>
      </div>
    </div>
  );
}
