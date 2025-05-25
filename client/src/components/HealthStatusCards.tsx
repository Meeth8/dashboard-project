import { Card, CardContent } from "@/components/ui/card";
import { healthData } from "@/data/healthData";

import teeth from '../assets/teeth.svg';
import bone from '../assets/bone.svg';
import lungs from '../assets/lungs.svg';



const HealthStatusCards = () => {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-3 flex flex-col space-y-6">
      {healthData.bodyParts.map((part) => {
        const colorClass = part.healthStatus < 50 ? 'text-destructive' : 'text-primary';

        return (
          <div key={part.id} className="bg-white rounded-2xl p-5 flex items-center">
            <div className={`mr-4 ${colorClass}`}>
              {part.type === 'lungs' && <img src={lungs} alt="Lungs" className="h-8 w-8" />}
{part.type === 'teeth' && <img src={teeth} alt="Teeth" className="h-8 w-8" />}
{part.type === 'bone' && <img src={bone} alt="Bone" className="h-8 w-8" />}
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
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
