export const dummyVariables = [
  // Environmental Impact Metrics
  {
    id: 'carbon-1',
    name: 'Carbon Emissions',
    category: 'Environmental Impact',
    selected: false,
    value: '2,450 kg',
    description: 'Total fleet carbon emissions this month',
    contextDescription:
      'Total carbon emissions from the fleet operations over the last month. This metric helps track our environmental impact and compliance with emission reduction targets. Lower values indicate more efficient and environmentally friendly operations.',
  },
  {
    id: 'co2-distribution',
    name: 'CO2 Distribution by Region',
    category: 'Environmental Impact',
    selected: true,
    value: '35%',
    description: 'CO2 emissions in northern region',
    contextDescription:
      'Percentage of CO2 emissions concentrated in the northern region. This distribution helps identify areas that need targeted emission reduction strategies. Higher percentages in specific regions may indicate the need for route optimization or fleet redistribution.',
  },
  {
    id: 'fleet-sizing',
    name: 'Fleet Size Optimization',
    category: 'Environmental Impact',
    selected: true,
    value: '85%',
    description: 'Current fleet utilization rate',
    contextDescription:
      'Current fleet utilization rate, indicating how effectively vehicles are being used. This metric helps balance operational needs with environmental impact. A higher percentage suggests efficient resource allocation while maintaining service levels.',
  },

  // Operational Metrics
  {
    id: 'parking-rate',
    name: 'Parking Utilization Rate',
    category: 'Operations',
    selected: false,
    value: '72%',
    description: 'Available parking spaces in use',
    contextDescription:
      'Percentage of available parking spaces currently in use across all facilities. This metric helps optimize parking space allocation and identify potential capacity issues. Lower rates may indicate inefficient space utilization or the need for facility consolidation.',
  },
  {
    id: 'border-rate',
    name: 'Cross-Border Traffic Rate',
    category: 'Operations',
    selected: true,
    value: '1,250',
    description: 'Daily cross-border vehicle count',
    contextDescription:
      'Daily average number of vehicles crossing regional borders. This metric helps monitor cross-border operations and identify potential bottlenecks. Higher numbers may require additional border crossing resources or route optimization.',
  },
  {
    id: 'request-rate',
    name: 'Service Request Rate',
    category: 'Operations',
    selected: true,
    value: '850',
    description: 'Service requests per hour',
    contextDescription:
      'Average number of service requests processed per hour. This metric helps gauge operational demand and service capacity. Sudden changes may indicate seasonal patterns or the need for resource adjustment.',
  },
  {
    id: 'var-2-1',
    name: 'Vehicle Utilization',
    category: 'Operations',
    selected: false,
    value: '92%',
    description: 'Time vehicles in active service',
    contextDescription:
      'Percentage of time vehicles are actively engaged in service operations. This metric helps optimize fleet deployment and identify underutilized resources. High utilization rates suggest efficient operations but may also indicate potential maintenance scheduling challenges.',
  },
  {
    id: 'var-2-2',
    name: 'Maintenance Frequency',
    category: 'Operations',
    selected: true,
    value: '5,000 km',
    description: 'Distance between maintenance checks',
    contextDescription:
      'Average distance between scheduled maintenance intervals. This metric helps balance vehicle reliability with operational efficiency. Regular maintenance at appropriate intervals is crucial for fleet longevity and safety.',
  },
  {
    id: 'var-2-3',
    name: 'Route Efficiency',
    category: 'Operations',
    selected: true,
    value: '15%',
    description: 'Route optimization improvement',
    contextDescription:
      'Percentage improvement in route optimization compared to baseline routes. This metric measures the effectiveness of our routing algorithms and traffic management strategies. Higher percentages indicate better resource utilization and reduced operational costs.',
  },

  // Performance Metrics
  {
    id: 'var-3-1',
    name: 'Service Response Time',
    category: 'Performance',
    selected: false,
    value: '4.2m',
    description: 'Average response time',
    contextDescription:
      'Average time taken to respond to service requests. This metric is crucial for customer satisfaction and operational efficiency. Response times below 5 minutes are considered optimal for our service level agreements.',
  },
  {
    id: 'var-3-2',
    name: 'Customer Satisfaction',
    category: 'Performance',
    selected: true,
    value: '4.8/5',
    description: 'Customer satisfaction rating',
    contextDescription:
      'Average customer satisfaction rating based on post-service surveys. This metric directly reflects service quality and customer experience. Maintaining high satisfaction scores is essential for business growth and customer retention.',
  },
  {
    id: 'var-3-3',
    name: 'System Reliability',
    category: 'Performance',
    selected: true,
    value: '99.9%',
    description: 'System uptime percentage',
    contextDescription:
      'Percentage of time the system operates without significant disruptions. This metric is critical for maintaining service continuity and operational stability. High reliability is essential for customer trust and business operations.',
  },
];
