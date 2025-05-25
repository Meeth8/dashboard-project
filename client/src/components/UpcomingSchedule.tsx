import { Card, CardContent } from "@/components/ui/card";
import { appointments } from "@/data/appointments";
import { Eye, Heart, Brain, Syringe } from "lucide-react";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-blue-50 rounded-xl p-4">
      <div className="flex justify-between">
        <h5 className="font-medium">{appointment.title}</h5>
        {appointment.icon === 'syringe' && (
          <Syringe className="h-5 w-5 text-blue-500" />
        )}
        {appointment.icon === 'eye' && (
          <Eye className="h-5 w-5 text-blue-500" />
        )}
        {appointment.icon === 'heart' && (
          <Heart className="h-5 w-5 text-red-500" />
        )}
        {appointment.icon === 'brain' && (
          <Brain className="h-5 w-5 text-gray-500" />
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
