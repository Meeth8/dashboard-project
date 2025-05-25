import { Card, CardContent } from "@/components/ui/card";
import { healthData } from "@/data/healthData";

const AnatomySection = () => {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-white rounded-2xl p-6 relative">
      <div className="flex justify-end mb-2">
        <button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </button>
      </div>
      
      <div className="relative flex justify-center">
        <svg 
          width="252" 
          height="288" 
          viewBox="0 0 252 288" 
          className="h-72 mx-auto"
        >
          <image 
            href="https://images.vexels.com/content/141930/preview/muscular-system-anatomy-human-body-71cfc9.png" 
            width="270" 
            height="280"
            alt="Human anatomy illustration"
          />
        </svg>
        
        
        {healthData.indicators.map((indicator) => (
          <div 
            key={indicator.id}
            className="health-indicator"
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
              transform: indicator.position.transform,
              backgroundColor: indicator.label === 'Healthy Heart' ? '#38b249' : indicator.label === 'Healthy Leg' ? '#00c9c8' : '#ff3e3e'
            }}
          >
            {indicator.icon === '' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
            {indicator.icon === '' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"
                />
              </svg>
            )}
            {indicator.label}
          </div>
        ))}
      </div>
      
      {/* Slider at bottom */}
      <div className="w-full mt-4 px-4">
        <div className="h-1 bg-gray-200 rounded-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white rounded-full border-2 border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
