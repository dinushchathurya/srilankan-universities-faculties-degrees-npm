import { Faculty } from '../types';

/**
 * Array of all faculties in Sri Lankan universities
 */

export const facultiesData: Faculty[] = [

  // University of Colombo
  { id: 'faculty-of-arts-colombo', universityId: 'university-of-colombo', name: 'Faculty of Arts' }, // Fixed from faculty-of-art
  { id: 'faculty-of-education-colombo', universityId: 'university-of-colombo', name: 'Faculty of Education' },
  { id: 'faculty-of-law-colombo', universityId: 'university-of-colombo', name: 'Faculty of Law' },
  { id: 'faculty-of-management-and-finance-colombo', universityId: 'university-of-colombo', name: 'Faculty of Management and Finance' },
  { id: 'faculty-of-medicine-colombo', universityId: 'university-of-colombo', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science-colombo', universityId: 'university-of-colombo', name: 'Faculty of Science' },

  // University of Peradeniya
  { id: 'faculty-of-agriculture-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-allied-health-sciences-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Allied Health Sciences' },
  { id: 'faculty-of-arts-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Arts' },
  { id: 'faculty-of-dental-sciences-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Dental Sciences' },
  { id: 'faculty-of-engineering-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Engineering' },
  { id: 'faculty-of-medicine-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Science' },
  { id: 'faculty-of-veterinary-medicine-and-animal-science-peradeniya', universityId: 'university-of-peradeniya', name: 'Faculty of Veterinary Medicine & Animal Science' },

  // University of Sri Jayewardenepura
  { id: 'faculty-of-applied-sciences-sjp', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-humanities-and-social-sciences-sjp', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Humanities & Social Sciences' }, // Fixed from faculty-of-humanities-social-sciences
  { id: 'faculty-of-management-studies-and-commerce-sjp', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Management Studies and Commerce' },
  { id: 'faculty-of-medical-sciences-sjp', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Medical Sciences' },

  // University of Kelaniya
  { id: 'faculty-of-commerce-and-management-kelaniya', universityId: 'university-of-kelaniya', name: 'Faculty of Commerce and Management Studies' },
  { id: 'faculty-of-humanities-kelaniya', universityId: 'university-of-kelaniya', name: 'Faculty of Humanities' },
  { id: 'faculty-of-medicine-kelaniya', universityId: 'university-of-kelaniya', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science-kelaniya', universityId: 'university-of-kelaniya', name: 'Faculty of Science' },
  { id: 'faculty-of-social-sciences-kelaniya', universityId: 'university-of-kelaniya', name: 'Faculty of Social Sciences' },

  // University of Moratuwa
  { id: 'faculty-of-engineering-moratuwa', universityId: 'university-of-moratuwa', name: 'Faculty of Engineering' },
  { id: 'faculty-of-architecture-moratuwa', universityId: 'university-of-moratuwa', name: 'Faculty of Architecture' },
  { id: 'faculty-of-information-technology-moratuwa', universityId: 'university-of-moratuwa', name: 'Faculty of Information Technology' },

  // University of Jaffna
  { id: 'faculty-of-agriculture-jaffna', universityId: 'university-of-jaffna', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-arts-jaffna', universityId: 'university-of-jaffna', name: 'Faculty of Arts' },
  { id: 'faculty-of-medicine-jaffna', universityId: 'university-of-jaffna', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science-jaffna', universityId: 'university-of-jaffna', name: 'Faculty of Science' },
  { id: 'faculty-of-management-studies-and-commerce-jaffna', universityId: 'university-of-jaffna', name: 'Faculty of Management Studies and Commerce' },

  // University of Ruhuna
  { id: 'faculty-of-agriculture-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-engineering-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Engineering' },
  { id: 'faculty-of-fisheries-and-marine-sciences-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Fisheries and Marine Sciences & Technology' },
  { id: 'faculty-of-humanities-and-social-sciences-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Humanities and Social Sciences' },
  { id: 'faculty-of-management-and-finance-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Management & Finance' },
  { id: 'faculty-of-medicine-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science-ruhuna', universityId: 'university-of-ruhuna', name: 'Faculty of Science' },

  // The Open University of Sri Lanka
  { id: 'faculty-of-education-ousl', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Education' },
  { id: 'faculty-of-engineering-technology-ousl', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Engineering Technology' },
  { id: 'faculty-of-humanities-and-social-sciences-ousl', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Humanities & Social Sciences' },
  { id: 'faculty-of-natural-sciences-ousl', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Natural Sciences' },

  // Eastern University, Sri Lanka
  { id: 'faculty-of-arts-and-culture-eastern', universityId: 'eastern-university', name: 'Faculty of Arts and Culture' },
  { id: 'faculty-of-commerce-and-management-eastern', universityId: 'eastern-university', name: 'Faculty of Commerce and Management' },
  { id: 'faculty-of-science-eastern', universityId: 'eastern-university', name: 'Faculty of Science' },
  { id: 'faculty-of-health-care-sciences-eastern', universityId: 'eastern-university', name: 'Faculty of Health-Care Sciences' },

  // South Eastern University of Sri Lanka
  { id: 'faculty-of-applied-sciences-south-eastern', universityId: 'south-eastern-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-management-and-commerce-south-eastern', universityId: 'south-eastern-university', name: 'Faculty of Management & Commerce' },
  { id: 'faculty-of-arts-and-culture-south-eastern', universityId: 'south-eastern-university', name: 'Faculty of Arts and Culture' },
  { id: 'faculty-of-islamic-studies-and-arabic-language-south-eastern', universityId: 'south-eastern-university', name: 'Faculty of Islamic Studies & Arabic Language' },

  // Rajarata University of Sri Lanka
  { id: 'faculty-of-agriculture-rajarata', universityId: 'rajarata-university', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-applied-sciences-rajarata', universityId: 'rajarata-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-management-studies-rajarata', universityId: 'rajarata-university', name: 'Faculty of Management Studies' },
  { id: 'faculty-of-medicine-and-allied-sciences-rajarata', universityId: 'rajarata-university', name: 'Faculty of Medicine and Allied Sciences' },
  { id: 'faculty-of-social-sciences-and-humanities-rajarata', universityId: 'rajarata-university', name: 'Faculty of Social Sciences and Humanities' },

  // Wayamba University of Sri Lanka
  { id: 'faculty-of-agriculture-and-plantation-management-wayamba', universityId: 'wayamba-university', name: 'Faculty of Agriculture & Plantation Management' },
  { id: 'faculty-of-applied-sciences-wayamba', universityId: 'wayamba-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-business-studies-and-finance-wayamba', universityId: 'wayamba-university', name: 'Faculty of Business Studies and Finance' },
  { id: 'faculty-of-livestock-fisheries-and-nutrition-wayamba', universityId: 'wayamba-university', name: 'Faculty of Livestock, Fisheries & Nutrition' },

  // Sabaragamuwa University of Sri Lanka
  { id: 'faculty-of-agricultural-sciences-sabaragamuwa', universityId: 'sabaragamuwa-university', name: 'Faculty of Agricultural Sciences' },
  { id: 'faculty-of-applied-sciences-sabaragamuwa', universityId: 'sabaragamuwa-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-geomatics-sabaragamuwa', universityId: 'sabaragamuwa-university', name: 'Faculty of Geomatics' },
  { id: 'faculty-of-management-studies-sabaragamuwa', universityId: 'sabaragamuwa-university', name: 'Faculty of Management Studies' },
  { id: 'faculty-of-social-sciences-and-languages-sabaragamuwa', universityId: 'sabaragamuwa-university', name: 'Faculty of Social Sciences & Languages' },

  // Uva Wellassa University of Sri Lanka
  { id: 'faculty-of-science-and-technology-uva', universityId: 'uva-wellassa-university', name: 'Faculty of Science & Technology' },
  { id: 'faculty-of-management-uva', universityId: 'uva-wellassa-university', name: 'Faculty of Management' },

  // University of the Visual and Performing Arts
  { id: 'faculty-of-dance-and-drama-vpau', universityId: 'visual-performing-arts-university', name: 'Faculty of Dance and Drama' },
  { id: 'faculty-of-music-vpau', universityId: 'visual-performing-arts-university', name: 'Faculty of Music' },
  { id: 'faculty-of-visual-arts-vpau', universityId: 'visual-performing-arts-university', name: 'Faculty of Visual Arts' },

  // Vavuniya Campus
  { id: 'faculty-of-applied-sciences-vavuniya', universityId: 'vavuniya-campus', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-business-studies-vavuniya', universityId: 'vavuniya-campus', name: 'Faculty of Business Studies' },

  // Trincomalee Campus
  { id: 'faculty-of-communication-and-business-studies-trincomalee', universityId: 'trincomalee-campus', name: 'Faculty of Communication and Business Studies' },
  { id: 'faculty-of-applied-sciences-trincomalee', universityId: 'trincomalee-campus', name: 'Faculty of Applied Sciences' }
  
];

export default facultiesData;