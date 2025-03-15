import { useNavigate } from "react-router-dom";

export default function PricingPlans() {
  return (
    <div className="min-h-auto flex items-center justify-center bg-white py-16 px-4 md:px-8 lg:px-24">
      <div className="text-center w-full lg:w-[70%]">
        <h2 className="text-4xl sm:text-5xl font-bold mx-4">Choose your plan</h2>
        <p className="text-gray-600 mt-4 sm:mt-6 text-lg sm:text-xl">
          We have extremely experienced social media experts who can help you grow your audience in a short time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 mt-10 mb-6 ">
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
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg transition-all duration-300 
                    sm:scale-100 scale-90 sm:w-auto w-[85%] mx-auto">
      <span className={`px-3 sm:px-4 py-1 sm:py-2 text-base sm:text-lg font-semibold rounded-full ${buttonColor} text-white`}>
        {title}
      </span>
      <h3 className="text-3xl sm:text-5xl font-bold my-3 sm:my-4">{price}</h3>
      <p className="text-gray-500 text-sm sm:text-lg">monthly payment</p>

      <ul className="mt-3 sm:mt-6 space-y-2 sm:space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm sm:text-lg">
            <span className="text-green-500 mr-2 sm:mr-3">✔</span> {feature}
          </li>
        ))}
        {missingFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400 text-sm sm:text-lg">
            <span className="mr-2 sm:mr-3">✖</span> {feature}
          </li>
        ))}
      </ul>

      <button 
        onClick={() => navigate("/register")} 
        className={`mt-5 sm:mt-8 w-full text-white py-2 sm:py-3 text-sm sm:text-lg rounded-full ${buttonColor} hover:opacity-90 transition`}
      >
        Get started
      </button>
    </div>
  );
}
