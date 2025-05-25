import { Card, CardContent } from "@/components/ui/card";
import { appointments } from "@/data/appointments";

const CalendarView = () => {
  const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const calendarDays = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl p-5">
      <div className="grid grid-cols-7 border-b border-gray-100">
        {weekdays.map((day, index) => (
          <div key={index} className="calendar-cell font-medium text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 calendar-row">
        {calendarDays.map((day, dayIndex) => {
          const dayAppointments = appointments.calendarSlots.filter(
            (slot) => slot.day === day
          );
          
          return (
            <div key={dayIndex} className="calendar-cell">
              <div className="font-medium mb-1">{day}</div>
              {dayAppointments.map((slot, slotIndex) => (
                <div 
                  key={slotIndex} 
                  className={slot.isAppointment 
                    ? `appointment-block ${slot.isHighlighted ? 'bg-blue-200' : 'bg-blue-100'} text-blue-800` 
                    : "text-xs text-gray-500"}
                >
                  {slot.time}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
