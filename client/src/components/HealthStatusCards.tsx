import { Card, CardContent } from "@/components/ui/card";
import { healthData } from "@/data/healthData";
import { Heart, Droplets, Dumbbell } from "lucide-react";

const HealthStatusCards = () => {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-3 flex flex-col space-y-6">
      {healthData.bodyParts.map((part) => (
        <div key={part.id} className="bg-white rounded-2xl p-5 flex items-center">
          <div className="mr-4">
            {part.type === 'lungs' && (
              <Droplets 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                strokeWidth={2}
              />
            )}
            {part.type === 'teeth' && (
              <Heart 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                strokeWidth={2}
              />
            )}
            {part.type === 'bone' && (
              <Dumbbell 
                className={`h-8 w-8 ${part.healthStatus < 50 ? 'text-destructive' : 'text-primary'}`}
                strokeWidth={2}
              />
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
