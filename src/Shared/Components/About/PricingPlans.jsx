import { useNavigate } from "react-router-dom";

export default function PricingPlans() {
  return (
    <div className="min-h-auto flex items-center justify-center bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="text-center w-full max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-2">
          Choose your plan
        </h2>
        <p className="text-gray-600 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          We have extremely experienced social media experts who can help you grow your audience in a short time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-10">
          {/* Silver Plan */}
          <PlanCard
            title="Silver"
            price="$110"
            features={['Content creation for SMM', 'SMM calendar organization']}
            missingFeatures={['Initial campaign strategy', 'Analyze Performance']}
            buttonColor="bg-blue-500"
          />

          {/* Gold Plan */}
          <PlanCard
            title="Gold"
            price="$230"
            features={['Content creation for SMM', 'SMM calendar organization', 'Initial campaign strategy']}
            missingFeatures={['Analyze Performance']}
            buttonColor="bg-blue-500"
          />

          {/* Platinum Plan */}
          <PlanCard
            title="Platinum"
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
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-300 w-full max-w-sm mx-auto">
      <span className={`inline-block px-4 py-2 text-sm sm:text-base md:text-lg font-semibold rounded-full ${buttonColor} text-white`}>
        {title}
      </span>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold my-3 sm:my-4">{price}</h3>
      <p className="text-gray-500 text-xs sm:text-sm md:text-base">monthly payment</p>

      <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm sm:text-base md:text-lg">
            <span className="text-green-500 mr-2 sm:mr-3">✔</span> {feature}
          </li>
        ))}
        {missingFeatures.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-400 text-sm sm:text-base md:text-lg">
            <span className="mr-2 sm:mr-3">✖</span> {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/register")}
        className={`mt-6 w-full text-white py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-full ${buttonColor} hover:opacity-90 transition cursor-pointer`}
      >
        Get started
      </button>
    </div>
  );
}
