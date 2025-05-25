export const appointments = {
  calendarSlots: [
    { day: 25, time: "10:00", isAppointment: false },
    { day: 25, time: "11:00", isAppointment: false },
    { day: 25, time: "12:00", isAppointment: false },
    
    { day: 26, time: "08:00", isAppointment: false },
    { day: 26, time: "09:00", isAppointment: true, isHighlighted: false },
    { day: 26, time: "10:00", isAppointment: false },
    
    { day: 27, time: "12:00", isAppointment: false },
    { day: 27, time: "—", isAppointment: false },
    { day: 27, time: "13:00", isAppointment: false },
    
    { day: 28, time: "10:00", isAppointment: false },
    { day: 28, time: "11:00", isAppointment: true, isHighlighted: true },
    { day: 28, time: "—", isAppointment: false },
    
    { day: 29, time: "—", isAppointment: false },
    { day: 29, time: "14:00", isAppointment: false },
    { day: 29, time: "16:00", isAppointment: false },
    
    { day: 30, time: "12:00", isAppointment: true, isHighlighted: true },
    { day: 30, time: "14:00", isAppointment: false },
    { day: 30, time: "15:00", isAppointment: false },
    
    { day: 31, time: "09:00", isAppointment: true, isHighlighted: false },
    { day: 31, time: "10:00", isAppointment: false },
    { day: 31, time: "11:00", isAppointment: false }
  ],
  upcoming: [
    {
      day: "Thursday",
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "syringe"
    },
    {
      day: "Thursday",
      title: "Ophthalmologist",
      time: "14:00 PM",
      icon: "eye"
    },
    {
      day: "Saturday",
      title: "Cardiologist",
      time: "12:00 AM",
      icon: "heart"
    },
    {
      day: "Saturday",
      title: "Neurologist",
      time: "16:00 PM",
      icon: "brain"
    }
  ],
  featuredAppointments: [
    {
      type: "primary",
      title: "Dentist",
      timeRange: "09:00-11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "tooth"
    },
    {
      type: "secondary",
      title: "Physiotherapy Appointment",
      timeRange: "11:00-12:00",
      doctor: "Dr. Kevin Jones",
      icon: "walking"
    }
  ]
};
