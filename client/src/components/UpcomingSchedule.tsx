import { Card, CardContent } from "@/components/ui/card";
import { appointments } from "@/data/appointments";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-blue-50 rounded-xl p-4">
      <div className="flex justify-between">
        <h5 className="font-medium">{appointment.title}</h5>
        {appointment.icon === 'syringe' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9h11v2H6z" />
            <path d="M20 6 L9 17 l-5-5" />
            <path d="M18 14h2v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3v2" />
          </svg>
        )}
        {appointment.icon === 'eye' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
        {appointment.icon === 'heart' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        )}
        {appointment.icon === 'brain' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
          </svg>
        )}
      </div>
      <p className="text-sm text-gray-600 mt-1">{appointment.time}</p>
    </div>
  );
};

const UpcomingSchedule = () => {
  const thursdayAppointments = appointments.upcoming.filter(
    (appointment) => appointment.day === "Thursday"
  );
  
  const saturdayAppointments = appointments.upcoming.filter(
    (appointment) => appointment.day === "Saturday"
  );

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-white rounded-2xl p-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">The Upcoming Schedule</h3>
      
      {/* Thursday appointments */}
      <div className="mb-4">
        <h4 className="text-sm text-gray-500 mb-2">On Thursday</h4>
        <div className="grid grid-cols-2 gap-4">
          {thursdayAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      </div>
      
      {/* Saturday appointments */}
      <div>
        <h4 className="text-sm text-gray-500 mb-2">On Saturday</h4>
        <div className="grid grid-cols-2 gap-4">
          {saturdayAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
