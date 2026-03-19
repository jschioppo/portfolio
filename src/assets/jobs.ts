export interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Red 6",
    dates: "April 2025 - March 2026",
    bullets: [
      "Developed a real-time tactical aviation (TAC) display using React and MapLibre to visualize live aircraft telemetry and positioning data streaming while maintaining smooth, responsive UI performance",
      "Architected a Node.js API layer bridging a C++ backend via a custom TCP socket–based real-time subscription protocol and the web client via an Express REST API and Socket.IO",
      "Operated in a fast-paced, startup-style environment, delivering frequent demo builds and rapidly iterating on features while collaborating with stakeholders to meet aggressive development timelines",
      "Collaborated with C++ engineers to ensure alignment between frontend visualization and backend data and system behavior, including features such as entity physics, user settings, and display configuration",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Planet Technologies",
    dates: "September 2021 - March 2025",
    bullets: [
      "Built major features for a new, nationally distributed 508 compliant web application using React, TypeScript, Redux/RTK Kendo UI and a C# micro-service architecture API running natively on Azure",
      "Lead a team of developers to build the front-end for a new application complementing the pre-existing project, coordinating with project managers for requirements and delivery timelines",
      "Participated in rapid release SCRUM sprints to meet product launch deadlines, regularly meeting with client team and team leaders for tech demos and user story planning",
    ],
  },
  {
    role: "Software Engineer Consultant",
    company: "Deloitte",
    dates: "October 2020 - August 2021",
    bullets: [
      "Developed updates and bug fixes using C# and JavaScript for Illinois’ Pandemic Unemployment Assistance web platform which serves over a million users and issues billions in unemployment benefits",
      "Overhauled process for federal reports provided to clients on a monthly and quarterly basis with customized Oracle SQL queries that filter millions of records and created full documentation",
    ],
  },
  {
    role: "Software Developer",
    company: "Edge 360",
    dates: "November 2019 - May 2020",
    bullets: [
      "Designed a C# interface that standardized a set of commands across a range of supported camera brands, allowing users to easily mix cameras without any custom configuration or input",
      "Prototyped a desktop WPF application for manually controlling multiple live PTZ cameras on closed, sensitive networks with less than a few milliseconds delay",
    ],
  },
  {
    role: "Associate Software Consultant",
    company: "Tallan",
    dates: "January 2019 - October 2019",
    bullets: [
      "Participated in development of a comprehensive cloud-based EDI management platform using Angular 7 from product planning to full public launch, with rapid adjustments based on beta user feedback",
      "Created an automated, front-end unit test project, reducing test times from half a day to a few minutes",
    ],
  },
];
