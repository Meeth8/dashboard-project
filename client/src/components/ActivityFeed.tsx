import { Card, CardContent } from "@/components/ui/card";
import { activityData } from "@/data/activityData";

const ActivityFeed = () => {
  return (
    <div className="col-span-12 lg:col-span-4 bg-white rounded-2xl p-5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
        <div className="flex items-center text-xs text-gray-500">
          <span>3 appointment on this week</span>
          <button className="ml-2 text-blue-500 flex items-center">
            <span>Details</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Activity chart */}
      <div className="h-40 flex items-end justify-between space-x-6">
        {activityData.days.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex space-x-1">
              {day.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`activity-bar ${
                    bar.type === 'primary'
                      ? 'bg-primary'
                      : bar.type === 'secondary'
                      ? 'bg-secondary'
                      : 'bg-gray-200'
                  }`}
                  style={{ height: `${bar.height}px` }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500 mt-2">{day.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
