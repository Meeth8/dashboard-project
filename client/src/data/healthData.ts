export const healthData = {
  indicators: [
    {
      id: 1,
      label: "Healthy Leg",
      healthStatus: "healthy",
      icon: "bone",
      position: {
        top: "180px",
        left: "52%",
        transform: "translateX(-115%)"
      }
    },
    {
      id: 2,
      label: "Healthy Heart",
      healthStatus: "good",
      icon: "heart",
      position: {
        top: "60px",
        left: "33%",
        transform: "translateX(-75%)"
      }
    }
  ],
  bodyParts: [
    {
      id: 1,
      name: "Lungs",
      type: "lungs",
      healthStatus: 65,
      date: "22.05.2021"
    },
    {
      id: 2,
      name: "Teeth",
      type: "teeth",
      healthStatus: 85,
      date: "26.04.2021"
    },
    {
      id: 3,
      name: "Bone",
      type: "bone",
      healthStatus: 45,
      date: "26.04.2021"
    }
  ]
};
