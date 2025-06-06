
export interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  details: string;
  imageAlt: string;
  category: string;
}

export const projectIdeasData: Record<string, ProjectIdea[]> = {
  'Laboratory Diagnostics Technician': [
    {
      id: 'lab-pcb-1',
      title: 'Custom PCB interfaces for integrating novel sensors into diagnostic instruments',
      description: 'Design specialized printed circuit boards that seamlessly integrate cutting-edge sensors into existing diagnostic equipment, enhancing accuracy and expanding testing capabilities.',
      details: 'This project involves creating custom PCB solutions that can interface with various biosensors, chemical sensors, and optical sensors. The PCBs would include signal conditioning circuits, analog-to-digital converters, and communication interfaces to integrate with laboratory information systems.',
      imageAlt: 'Custom PCB for diagnostic sensors',
      category: 'Healthcare & Medical Devices'
    },
    {
      id: 'lab-automation-1',
      title: 'Automated sample handling systems with embedded controls',
      description: 'Develop robotic systems for automated sample preparation, handling, and analysis in clinical laboratories.',
      details: 'Create embedded control systems that can manage sample pipetting, mixing, incubation, and analysis workflows. Include barcode scanning, temperature control, and integration with laboratory databases.',
      imageAlt: 'Automated laboratory sample handling system',
      category: 'Healthcare & Medical Devices'
    }
  ],
  'Toy & Game Designer': [
    {
      id: 'toy-mech-1',
      title: 'Prototyping toy mechanisms with 3D printing and embedded electronics',
      description: 'Create interactive toys that combine traditional play patterns with modern technology, including sensors, lights, and sound systems.',
      details: 'Design and prototype toys that incorporate motion sensors, LED arrays, sound synthesis, and wireless connectivity. Use 3D printing for rapid prototyping of mechanical components and custom enclosures.',
      imageAlt: 'Interactive toy prototype with embedded electronics',
      category: 'Creative Arts & Design'
    },
    {
      id: 'toy-iot-1',
      title: 'IoT-enabled educational toys for STEM learning',
      description: 'Develop connected toys that teach programming, electronics, and engineering concepts through hands-on play.',
      details: 'Create modular toy systems that can be programmed and controlled via mobile apps, teaching children about robotics, programming, and electronic circuits through gamified experiences.',
      imageAlt: 'IoT educational toy for STEM learning',
      category: 'Creative Arts & Design'
    }
  ],
  'Art Installation Artist': [
    {
      id: 'art-pcb-1',
      title: 'Custom PCBs for interactive art installations with sensor integration',
      description: 'Design artistic PCBs that serve as both functional electronics and visual art elements, integrating sensors for audience interaction.',
      details: 'Create aesthetically pleasing circuit boards that can detect motion, sound, light, and touch. Include LED arrays, wireless communication, and power management for large-scale installations.',
      imageAlt: 'Artistic PCB with integrated sensors for interactive installations',
      category: 'Creative Arts & Design'
    },
    {
      id: 'art-responsive-1',
      title: 'Responsive environmental art systems',
      description: 'Develop art installations that respond to environmental conditions like weather, air quality, and human presence.',
      details: 'Build systems that can monitor environmental parameters and translate them into visual, auditory, or kinetic art experiences. Include weatherproof enclosures and low-power wireless communication.',
      imageAlt: 'Environmental responsive art installation',
      category: 'Creative Arts & Design'
    }
  ],
  'Prop Maker': [
    {
      id: 'prop-3d-1',
      title: '3D-printed props with embedded lighting and effects systems',
      description: 'Create movie and theater props that incorporate sophisticated lighting, sound, and special effects through embedded electronics.',
      details: 'Design custom enclosures and mechanical systems for props that include programmable LED effects, sound synthesis, servo-controlled movements, and wireless remote control capabilities.',
      imageAlt: '3D-printed prop with embedded lighting effects',
      category: 'Creative Arts & Design'
    },
    {
      id: 'prop-wireless-1',
      title: 'Wireless-controlled prop effects systems',
      description: 'Develop wireless control systems for coordinating multiple props in live performances.',
      details: 'Create mesh networks of prop controllers that can synchronize lighting, sound, and mechanical effects across multiple props, with real-time control interfaces for operators.',
      imageAlt: 'Wireless prop control system',
      category: 'Creative Arts & Design'
    }
  ],
  'Educational Robotics Trainer': [
    {
      id: 'edu-kit-1',
      title: 'Custom PCB development for educational robotics kits',
      description: 'Design educational PCBs that teach electronics and programming concepts while building functional robots.',
      details: 'Create modular robotics platforms with clearly labeled components, breadboard areas for experimentation, and progressive difficulty levels. Include sensors, motors, and wireless communication.',
      imageAlt: 'Educational robotics PCB development kit',
      category: 'Education & Research'
    },
    {
      id: 'edu-curriculum-1',
      title: 'Programmable robotics curriculum platforms',
      description: 'Develop comprehensive robotics platforms that support structured learning from basic concepts to advanced programming.',
      details: 'Build scalable robotics systems that can grow with students from simple sensor reading to complex autonomous behaviors, including simulation software and progress tracking.',
      imageAlt: 'Programmable robotics learning platform',
      category: 'Education & Research'
    }
  ],
  'Student Engineering Project Advisor': [
    {
      id: 'student-pcb-1',
      title: 'PCB manufacturing and prototyping services for student projects',
      description: 'Provide accessible PCB design and manufacturing services specifically tailored for student engineering projects and budgets.',
      details: 'Offer design review, prototyping, and small-batch manufacturing services with educational pricing. Include design tutorials, component selection guidance, and troubleshooting support.',
      imageAlt: 'Student PCB prototyping service',
      category: 'Education & Research'
    },
    {
      id: 'student-platform-1',
      title: 'Project development platforms for engineering students',
      description: 'Create standardized development platforms that simplify the hardware aspects of student projects.',
      details: 'Design modular platforms with common interfaces for sensors, actuators, and communication modules, allowing students to focus on software and system design rather than hardware debugging.',
      imageAlt: 'Engineering student project platform',
      category: 'Education & Research'
    }
  ],
  'Correctional Facility Security Manager': [
    {
      id: 'security-cctv-1',
      title: 'Custom CCTV systems with machine learning integration',
      description: 'Develop intelligent surveillance systems that can detect unusual behavior patterns and security threats in real-time.',
      details: 'Implement computer vision algorithms for behavior analysis, weapon detection, and crowd monitoring. Include edge computing capabilities for real-time processing and privacy protection.',
      imageAlt: 'AI-powered CCTV security system',
      category: 'Public Safety & Security'
    },
    {
      id: 'security-monitoring-1',
      title: 'Perimeter monitoring and intrusion detection systems',
      description: 'Create comprehensive perimeter security systems using distributed sensors and wireless communication.',
      details: 'Deploy networks of motion sensors, vibration detectors, and thermal cameras with mesh networking for reliable communication and redundant coverage.',
      imageAlt: 'Perimeter security monitoring system',
      category: 'Public Safety & Security'
    }
  ],
  'Gym Equipment Designer': [
    {
      id: 'gym-sensor-1',
      title: 'PCBs for fitness equipment sensors and data collection',
      description: 'Design smart fitness equipment that tracks user performance, form, and progress through integrated sensors.',
      details: 'Create sensor arrays for measuring force, motion, heart rate, and form analysis. Include wireless data transmission and integration with fitness apps and health monitoring systems.',
      imageAlt: 'Smart gym equipment sensor PCB',
      category: 'Sports & Recreation'
    },
    {
      id: 'gym-iot-1',
      title: 'IoT-enabled equipment monitoring and maintenance',
      description: 'Develop systems for monitoring equipment usage, maintenance needs, and user safety in real-time.',
      details: 'Implement predictive maintenance algorithms, usage analytics, and safety monitoring with automatic alerts for equipment issues or user emergencies.',
      imageAlt: 'IoT gym equipment monitoring system',
      category: 'Sports & Recreation'
    }
  ],
  'Outdoor Adventure Gear Innovator': [
    {
      id: 'outdoor-nav-1',
      title: 'Compact navigation and emergency signaling devices',
      description: 'Create lightweight, durable devices for outdoor navigation, communication, and emergency situations.',
      details: 'Design devices with GPS tracking, satellite communication, weather monitoring, and emergency beacon capabilities. Include solar charging and extreme weather resistance.',
      imageAlt: 'Compact outdoor navigation and emergency device',
      category: 'Sports & Recreation'
    },
    {
      id: 'outdoor-monitor-1',
      title: 'Environmental monitoring gear for outdoor activities',
      description: 'Develop portable systems for monitoring environmental conditions during outdoor adventures.',
      details: 'Create multi-sensor platforms for altitude, weather, air quality, and UV exposure monitoring with data logging and smartphone integration for trip planning and safety.',
      imageAlt: 'Portable environmental monitoring device',
      category: 'Sports & Recreation'
    }
  ],
  'Biomedical Robotics Engineer': [
    {
      id: 'biomed-robot-1',
      title: 'Control systems for surgical and rehabilitation robots',
      description: 'Develop precise control systems for medical robots used in surgery, therapy, and patient rehabilitation.',
      details: 'Design control algorithms for haptic feedback, precise positioning, force control, and safety systems. Include real-time processing and integration with medical imaging systems.',
      imageAlt: 'Biomedical robot control system',
      category: 'Healthcare & Medical Devices'
    },
    {
      id: 'biomed-prosthetics-1',
      title: 'Smart prosthetics and assistive device controls',
      description: 'Create intelligent control systems for prosthetic limbs and assistive devices that learn from user behavior.',
      details: 'Implement machine learning algorithms for gesture recognition, adaptive control, and user intent prediction. Include sensor fusion and wireless connectivity for data analysis.',
      imageAlt: 'Smart prosthetic control system',
      category: 'Healthcare & Medical Devices'
    }
  ],
  'Urban Air Quality Monitoring Specialist': [
    {
      id: 'air-sensor-1',
      title: 'PCB-based sensor nodes for comprehensive air quality monitoring',
      description: 'Design distributed sensor networks for real-time monitoring of urban air quality parameters.',
      details: 'Create sensor nodes that measure PM2.5, PM10, NO2, CO, O3, and other pollutants. Include wireless communication, solar power, and weather resistance for long-term deployment.',
      imageAlt: 'Urban air quality sensor node',
      category: 'Utilities & Smart Infrastructure'
    },
    {
      id: 'air-network-1',
      title: 'IoT air quality monitoring networks',
      description: 'Develop city-wide air quality monitoring networks with real-time data analysis and public access.',
      details: 'Build scalable IoT networks with edge computing for data processing, public dashboards, and integration with urban planning systems. Include predictive analytics for pollution trends.',
      imageAlt: 'IoT air quality monitoring network',
      category: 'Utilities & Smart Infrastructure'
    }
  ],
  'Security Companies': [
    {
      id: 'sec-ai-1',
      title: 'AI-powered surveillance and threat detection systems',
      description: 'Develop intelligent security systems that can identify and respond to various types of security threats.',
      details: 'Implement computer vision for facial recognition, behavior analysis, and threat detection. Include integration with access control systems and automated response protocols.',
      imageAlt: 'AI security surveillance system',
      category: 'Public Safety & Security'
    },
    {
      id: 'sec-access-1',
      title: 'Smart access control and monitoring systems',
      description: 'Create comprehensive access control systems with biometric authentication and real-time monitoring.',
      details: 'Design systems with multiple authentication methods, visitor management, and integration with building management systems. Include mobile access and audit trail capabilities.',
      imageAlt: 'Smart access control system',
      category: 'Public Safety & Security'
    }
  ],
  'Event Managers': [
    {
      id: 'event-crowd-1',
      title: 'Smart crowd monitoring and management systems',
      description: 'Develop systems for monitoring crowd density, flow, and safety at large events.',
      details: 'Create sensor networks for people counting, crowd flow analysis, and emergency evacuation management. Include real-time dashboards and automated alert systems.',
      imageAlt: 'Event crowd monitoring system',
      category: 'Public Safety & Security'
    },
    {
      id: 'event-iot-1',
      title: 'IoT-enabled event infrastructure management',
      description: 'Build comprehensive event management systems that monitor and control various event infrastructure elements.',
      details: 'Integrate lighting, sound, climate control, and security systems with centralized management and automated responses to changing conditions.',
      imageAlt: 'IoT event management system',
      category: 'Public Safety & Security'
    }
  ],
  'Smart City Planners': [
    {
      id: 'city-monitor-1',
      title: 'AI CCTV systems for public space monitoring',
      description: 'Deploy intelligent surveillance systems for monitoring public spaces and urban infrastructure.',
      details: 'Implement city-wide surveillance networks with AI analytics for traffic monitoring, public safety, and urban planning insights. Include privacy protection and data governance frameworks.',
      imageAlt: 'Smart city CCTV monitoring system',
      category: 'Public Safety & Security'
    },
    {
      id: 'city-infrastructure-1',
      title: 'Smart infrastructure monitoring and control',
      description: 'Develop comprehensive systems for monitoring and controlling urban infrastructure.',
      details: 'Create IoT networks for monitoring traffic, utilities, environmental conditions, and public services with predictive maintenance and optimization algorithms.',
      imageAlt: 'Smart city infrastructure system',
      category: 'Public Safety & Security'
    }
  ],
  'School Administrators': [
    {
      id: 'school-attendance-1',
      title: 'Face-recognition attendance and security systems',
      description: 'Implement automated attendance tracking and campus security systems using facial recognition technology.',
      details: 'Design systems for student and staff identification, attendance tracking, and campus access control with privacy protection and parent notification capabilities.',
      imageAlt: 'School face-recognition attendance system',
      category: 'Public Safety & Security'
    },
    {
      id: 'school-safety-1',
      title: 'Campus safety and emergency response systems',
      description: 'Create comprehensive safety systems for emergency detection, communication, and response in educational environments.',
      details: 'Develop integrated systems for lockdown procedures, emergency communication, visitor management, and coordination with law enforcement.',
      imageAlt: 'School safety management system',
      category: 'Public Safety & Security'
    }
  ],
  'Teachers/Professors': [
    {
      id: 'teach-kit-1',
      title: 'Custom educational kits for hands-on STEM learning',
      description: 'Design educational electronics kits that support curriculum-based learning objectives.',
      details: 'Create modular kits for teaching concepts in physics, chemistry, biology, and engineering with progressive complexity and clear learning outcomes.',
      imageAlt: 'Educational STEM learning kit',
      category: 'Education & Research'
    },
    {
      id: 'teach-interactive-1',
      title: 'Interactive classroom technology systems',
      description: 'Develop technology solutions that enhance classroom engagement and learning outcomes.',
      details: 'Build systems for interactive demonstrations, student response collection, and real-time assessment with integration into existing classroom management systems.',
      imageAlt: 'Interactive classroom technology',
      category: 'Education & Research'
    }
  ],
  'Research Labs': [
    {
      id: 'research-sensor-1',
      title: 'Custom sensor systems with machine learning inference',
      description: 'Develop specialized sensor systems for research applications with built-in data analysis capabilities.',
      details: 'Create sensor platforms with edge computing for real-time data processing, machine learning inference, and integration with research data management systems.',
      imageAlt: 'Research sensor system with ML inference',
      category: 'Education & Research'
    },
    {
      id: 'research-automation-1',
      title: 'Laboratory automation and data collection systems',
      description: 'Build automated systems for research data collection, experiment control, and analysis.',
      details: 'Develop platforms for automated experimentation, data logging, environmental control, and integration with research databases and analysis software.',
      imageAlt: 'Laboratory automation system',
      category: 'Education & Research'
    }
  ],
  'Farmers': [
    {
      id: 'farm-monitor-1',
      title: 'Soil moisture monitors with GSM alerts',
      description: 'Create wireless soil monitoring systems that provide real-time data and automated alerts to farmers.',
      details: 'Design solar-powered sensor nodes that monitor soil moisture, temperature, and nutrient levels with GSM connectivity for remote monitoring and irrigation control.',
      imageAlt: 'Wireless soil moisture monitoring system',
      category: 'Agriculture'
    },
    {
      id: 'farm-iot-1',
      title: 'IoT crop monitoring and irrigation systems',
      description: 'Develop comprehensive farm management systems for monitoring crops and automating irrigation.',
      details: 'Create sensor networks for monitoring plant health, weather conditions, and soil parameters with automated irrigation control and crop analytics.',
      imageAlt: 'IoT crop monitoring and irrigation system',
      category: 'Agriculture'
    }
  ],
  'Agritech Startups': [
    {
      id: 'agri-ml-1',
      title: 'Field sensors with machine learning inference for crop optimization',
      description: 'Develop intelligent agricultural sensors that use AI to optimize crop yields and resource usage.',
      details: 'Build sensor platforms with computer vision for plant disease detection, growth monitoring, and yield prediction with automated recommendations for farmers.',
      imageAlt: 'AI-powered agricultural sensor system',
      category: 'Agriculture'
    },
    {
      id: 'agri-precision-1',
      title: 'Precision agriculture monitoring platforms',
      description: 'Create comprehensive platforms for precision agriculture with drone integration and data analytics.',
      details: 'Develop systems that integrate ground sensors, drone imagery, and satellite data for comprehensive farm monitoring and decision support.',
      imageAlt: 'Precision agriculture monitoring platform',
      category: 'Agriculture'
    }
  ],
  'Product Designers': [
    {
      id: 'product-casing-1',
      title: 'Custom casing design and 3D printing services',
      description: 'Provide specialized enclosure design and manufacturing services for electronic products.',
      details: 'Offer design services for custom enclosures with considerations for electromagnetic interference, thermal management, user interaction, and manufacturing constraints.',
      imageAlt: 'Custom 3D printed product casing',
      category: 'Product Design & Manufacturing'
    },
    {
      id: 'product-prototype-1',
      title: 'Rapid prototyping and design validation systems',
      description: 'Develop platforms for rapid prototyping and testing of product designs.',
      details: 'Create systems for quick iteration of product designs with integrated testing capabilities for mechanical, electrical, and user experience validation.',
      imageAlt: 'Product design prototyping system',
      category: 'Product Design & Manufacturing'
    }
  ],
  'Manufacturing Units': [
    {
      id: 'mfg-redesign-1',
      title: 'Machine part redesign and rapid prototyping',
      description: 'Provide engineering services for optimizing machine components and rapid prototyping.',
      details: 'Offer reverse engineering, design optimization, and additive manufacturing services for custom machine parts and tooling.',
      imageAlt: 'Manufacturing part redesign and prototyping',
      category: 'Product Design & Manufacturing'
    },
    {
      id: 'mfg-automation-1',
      title: 'Industrial automation and monitoring systems',
      description: 'Develop automation solutions for manufacturing processes with real-time monitoring.',
      details: 'Create systems for process automation, quality control, predictive maintenance, and production optimization with integration to enterprise systems.',
      imageAlt: 'Industrial automation monitoring system',
      category: 'Product Design & Manufacturing'
    }
  ],
  'Medical Device Makers': [
    {
      id: 'medical-pcb-1',
      title: 'Custom PCBs and enclosures for medical devices',
      description: 'Design specialized electronics and enclosures for medical device applications.',
      details: 'Create medical-grade PCBs and enclosures that meet regulatory requirements for biocompatibility, electromagnetic compatibility, and safety standards.',
      imageAlt: 'Medical device PCB and enclosure',
      category: 'Healthcare & Medical Devices'
    },
    {
      id: 'medical-monitor-1',
      title: 'Patient monitoring and diagnostic systems',
      description: 'Develop advanced patient monitoring systems with wireless connectivity and data analytics.',
      details: 'Build systems for continuous patient monitoring with real-time data analysis, alert systems, and integration with hospital information systems.',
      imageAlt: 'Patient monitoring diagnostic system',
      category: 'Healthcare & Medical Devices'
    }
  ]
};

export const getProjectIdeasForProfessions = (professions: string[]): ProjectIdea[] => {
  const allProjects: ProjectIdea[] = [];
  
  professions.forEach(profession => {
    if (projectIdeasData[profession]) {
      allProjects.push(...projectIdeasData[profession]);
    }
  });
  
  return allProjects;
};
