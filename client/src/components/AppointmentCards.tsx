import { Card, CardContent } from "@/components/ui/card";
import { appointments } from "@/data/appointments";

const AppointmentCards = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-4">
      {appointments.featuredAppointments.map((appointment, index) => (
        <div 
          key={index} 
          className={`${appointment.type === 'primary' ? 'bg-secondary text-white' : 'bg-blue-50'} rounded-2xl p-5`}
        >
          <h3 className="font-medium mb-2">{appointment.title}</h3>
          <div className={`text-sm ${appointment.type === 'primary' ? 'text-white' : 'text-gray-600'}`}>
            {appointment.timeRange}
          </div>
          <div className={`text-sm ${appointment.type === 'primary' ? 'text-white' : 'text-gray-600'}`}>
            {appointment.doctor}
          </div>
          <div className="flex justify-end mt-4">
            {appointment.icon === 'tooth' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${appointment.type === 'primary' ? 'text-white' : 'text-primary'}`}
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
            {appointment.icon === 'walking' && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${appointment.type === 'primary' ? 'text-white' : 'text-primary'}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 4v16" />
                <path d="M17 4v16" />
                <path d="M21 4v16" />
                <path d="M8 4v16" />
                <path d="M4 4v8" />
                <path d="M4 16v4" />
                <path d="M4 10a2 2 0 0 0 2 2h12" />
              </svg>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCards;
