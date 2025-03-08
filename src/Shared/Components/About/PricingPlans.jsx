export default function PricingPlans() {
    return (
      <div className="  min-h-auto flex items-center justify-center bg-white p-12">
        <div className="text-center my-6">
          <span className="text-blue-600 font-semibold uppercase text-lg">Pricing</span>
          <h2 className="text-5xl font-bold mt-4">Choose your plan</h2>
          <p className="text-gray-600 mt-4 text-xl">We have extremely experienced social media experts who can help you grow your audience in a short time.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
            {/** GOOD Plan */}
            <PlanCard 
              title="Good" 
              price="$110" 
              features={['Content creation for SMM', 'SMM calendar organization']} 
              missingFeatures={['Initial campaign strategy', 'Analyze Performance']} 
              buttonColor="bg-blue-500" 
            />
  
            {/** BETTER Plan */}
            <PlanCard 
              title="Better" 
              price="$230" 
              features={['Content creation for SMM', 'SMM calendar organization', 'Initial campaign strategy']} 
              missingFeatures={['Analyze Performance']} 
              buttonColor="bg-blue-500" 
            />
  
            {/** BEST Plan */}
            <PlanCard 
              title="The Best" 
              price="$480" 
              features={['Content creation for SMM', 'SMM calendar organization', 'Initial campaign strategy', 'Analyze Performance']} 
              buttonColor="bg-blue-500" 
            />
          </div>
        </div>
      </div>
    );
  }
  
  function PlanCard({ title, price, features, missingFeatures = [], buttonColor }) {
    return (
      <div className="bg-white p-10 rounded-2xl shadow-lg scale-105 space-x-15 mt-6">
        <span className={`px-4 py-2 text-lg font-semibold rounded-full ${buttonColor} text-white`}>{title}</span>
        <h3 className="text-5xl font-bold my-4">{price}</h3>
        <p className="text-gray-500 text-lg">monthly payment</p>
  
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-green-500 mr-3">✔</span> {feature}
            </li>
          ))}
          {missingFeatures.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 text-lg">
              <span className="mr-3">✖</span> {feature}
            </li>
          ))}
        </ul>
        
        <button className={`mt-8 w-full text-white py-3 text-lg rounded-full ${buttonColor} hover:opacity-90`}>Get started</button>
      </div>
    );
  }
