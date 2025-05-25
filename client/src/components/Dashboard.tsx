import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AnatomySection from "@/components/AnatomySection";
import HealthStatusCards from "@/components/HealthStatusCards";
import CalendarView from "@/components/CalendarView";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import AppointmentCards from "@/components/AppointmentCards";
import ActivityFeed from "@/components/ActivityFeed";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center">
              <div className="mr-6">
                <div className="relative">
                  <select className="appearance-none bg-transparent text-sm text-gray-600 pr-8 pl-3 py-1 border border-gray-200 rounded-md focus:outline-none">
                    <option>This Week</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400 absolute right-3 top-2.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-800 font-medium">October 2021</span>
                <div className="flex">
                  <button className="h-8 w-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="h-8 w-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <AnatomySection />

            <HealthStatusCards />

            <CalendarView />

            <ActivityFeed />

            <AppointmentCards />

            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
