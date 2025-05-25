import { Card, CardContent } from "@/components/ui/card";
import { healthData } from "@/data/healthData";

const HealthStatusCards = () => {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-3 flex flex-col space-y-6">
      {healthData.bodyParts.map((part) => (
        <div key={part.id} className="bg-white rounded-2xl p-5 flex items-center">
          <div className="mr-4">
            {part.type === 'lungs' && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M6 3v12c0 2.5 2.5 4 5 4s5-1.5 5-4V3" />
                <path d="M6 3c0-1 .5-2 2-2h8c1.5 0 2 1 2 2" />
                <path d="M7 15h0" />
                <path d="M17 15h0" />
              </svg>
            )}
            {part.type === 'teeth' && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5.5c-1.5-1-4-1.5-6 0-2.3 1.5-3 4.5-3 7 0 4.5 3 7.5 7 10.5.7.5 1.3.5 2 0 4-3 7-6 7-10.5 0-2.5-.7-5.5-3-7-2-1.5-4.5-1-4-0z" />
              </svg>
            )}
            {part.type === 'bone' && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 4.5l4 2.5v4l-4 2.5M18 4.5l-4 2.5M18 13.5l-4-2.5M10 4.5l-4 2.5v4l4 2.5M10 4.5l4 2.5M10 13.5l4-2.5M2 9.5h20" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-gray-800 font-medium">{part.name}</h3>
            <p className="text-xs text-gray-500">Born: {part.date}</p>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${part.healthStatus < 50 ? 'bg-destructive' : 'bg-primary'} rounded-full`} 
                style={{ width: `${part.healthStatus}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
