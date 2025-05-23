import { Faculty } from '../types';

/**
 * Array of all faculties in Sri Lankan universities
 */

export const facultiesData: Faculty[] = [

  // University of Colombo
  { id: 'faculty-of-arts', universityId: 'university-of-colombo', name: 'Faculty of Arts' }, // Fixed from faculty-of-art
  { id: 'faculty-of-education', universityId: 'university-of-colombo', name: 'Faculty of Education' },
  { id: 'faculty-of-law', universityId: 'university-of-colombo', name: 'Faculty of Law' },
  { id: 'faculty-of-management-and-finance', universityId: 'university-of-colombo', name: 'Faculty of Management and Finance' },
  { id: 'faculty-of-medicine', universityId: 'university-of-colombo', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science', universityId: 'university-of-colombo', name: 'Faculty of Science' },

  // University of Peradeniya
  { id: 'faculty-of-agriculture', universityId: 'university-of-peradeniya', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-allied-health-sciences', universityId: 'university-of-peradeniya', name: 'Faculty of Allied Health Sciences' },
  { id: 'faculty-of-arts', universityId: 'university-of-peradeniya', name: 'Faculty of Arts' },
  { id: 'faculty-of-dental-sciences', universityId: 'university-of-peradeniya', name: 'Faculty of Dental Sciences' },
  { id: 'faculty-of-engineering', universityId: 'university-of-peradeniya', name: 'Faculty of Engineering' },
  { id: 'faculty-of-medicine', universityId: 'university-of-peradeniya', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science', universityId: 'university-of-peradeniya', name: 'Faculty of Science' },
  { id: 'faculty-of-veterinary-medicine-and-animal-science', universityId: 'university-of-peradeniya', name: 'Faculty of Veterinary Medicine & Animal Science' },

  // University of Sri Jayewardenepura
  { id: 'faculty-of-applied-sciences', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-humanities-and-social-sciences', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Humanities & Social Sciences' }, // Fixed from faculty-of-humanities-social-sciences
  { id: 'faculty-of-management-studies-and-commerce', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Management Studies and Commerce' },
  { id: 'faculty-of-medical-sciences', universityId: 'university-of-sri-jayewardenepura', name: 'Faculty of Medical Sciences' },

  // University of Kelaniya
  { id: 'faculty-of-commerce-and-management', universityId: 'university-of-kelaniya', name: 'Faculty of Commerce and Management Studies' },
  { id: 'faculty-of-humanities', universityId: 'university-of-kelaniya', name: 'Faculty of Humanities' },
  { id: 'faculty-of-medicine', universityId: 'university-of-kelaniya', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science', universityId: 'university-of-kelaniya', name: 'Faculty of Science' },
  { id: 'faculty-of-social-sciences', universityId: 'university-of-kelaniya', name: 'Faculty of Social Sciences' },

  // University of Moratuwa
  { id: 'faculty-of-engineering', universityId: 'university-of-moratuwa', name: 'Faculty of Engineering' },
  { id: 'faculty-of-architecture', universityId: 'university-of-moratuwa', name: 'Faculty of Architecture' },
  { id: 'faculty-of-information-technology', universityId: 'university-of-moratuwa', name: 'Faculty of Information Technology' },

  // University of Jaffna
  { id: 'faculty-of-agriculture', universityId: 'university-of-jaffna', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-arts', universityId: 'university-of-jaffna', name: 'Faculty of Arts' },
  { id: 'faculty-of-medicine', universityId: 'university-of-jaffna', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science', universityId: 'university-of-jaffna', name: 'Faculty of Science' },
  { id: 'faculty-of-management-studies-and-commerce', universityId: 'university-of-jaffna', name: 'Faculty of Management Studies and Commerce' },

  // University of Ruhuna
  { id: 'faculty-of-agriculture', universityId: 'university-of-ruhuna', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-engineering', universityId: 'university-of-ruhuna', name: 'Faculty of Engineering' },
  { id: 'faculty-of-fisheries-and-marine-sciences', universityId: 'university-of-ruhuna', name: 'Faculty of Fisheries and Marine Sciences & Technology' },
  { id: 'faculty-of-humanities-and-social-sciences', universityId: 'university-of-ruhuna', name: 'Faculty of Humanities and Social Sciences' },
  { id: 'faculty-of-management-and-finance', universityId: 'university-of-ruhuna', name: 'Faculty of Management & Finance' },
  { id: 'faculty-of-medicine', universityId: 'university-of-ruhuna', name: 'Faculty of Medicine' },
  { id: 'faculty-of-science', universityId: 'university-of-ruhuna', name: 'Faculty of Science' },

  // The Open University of Sri Lanka
  { id: 'faculty-of-education', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Education' },
  { id: 'faculty-of-engineering-technology', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Engineering Technology' },
  { id: 'faculty-of-humanities-and-social-sciences', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Humanities & Social Sciences' },
  { id: 'faculty-of-natural-sciences', universityId: 'open-university-of-sri-lanka', name: 'Faculty of Natural Sciences' },

  // Eastern University, Sri Lanka
  { id: 'faculty-of-arts-and-culture', universityId: 'eastern-university', name: 'Faculty of Arts and Culture' },
  { id: 'faculty-of-commerce-and-management', universityId: 'eastern-university', name: 'Faculty of Commerce and Management' },
  { id: 'faculty-of-science', universityId: 'eastern-university', name: 'Faculty of Science' },
  { id: 'faculty-of-health-care-sciences', universityId: 'eastern-university', name: 'Faculty of Health-Care Sciences' },

  // South Eastern University of Sri Lanka
  { id: 'faculty-of-applied-sciences', universityId: 'south-eastern-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-management-and-commerce', universityId: 'south-eastern-university', name: 'Faculty of Management & Commerce' },
  { id: 'faculty-of-arts-and-culture', universityId: 'south-eastern-university', name: 'Faculty of Arts and Culture' },
  { id: 'faculty-of-islamic-studies-and-arabic-language', universityId: 'south-eastern-university', name: 'Faculty of Islamic Studies & Arabic Language' },

  // Rajarata University of Sri Lanka
  { id: 'faculty-of-agriculture', universityId: 'rajarata-university', name: 'Faculty of Agriculture' },
  { id: 'faculty-of-applied-sciences', universityId: 'rajarata-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-management-studies', universityId: 'rajarata-university', name: 'Faculty of Management Studies' },
  { id: 'faculty-of-medicine-and-allied-sciences', universityId: 'rajarata-university', name: 'Faculty of Medicine and Allied Sciences' },
  { id: 'faculty-of-social-sciences-and-humanities', universityId: 'rajarata-university', name: 'Faculty of Social Sciences and Humanities' },

  // Wayamba University of Sri Lanka
  { id: 'faculty-of-agriculture-and-plantation-management', universityId: 'wayamba-university', name: 'Faculty of Agriculture & Plantation Management' },
  { id: 'faculty-of-applied-sciences', universityId: 'wayamba-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-business-studies-and-finance', universityId: 'wayamba-university', name: 'Faculty of Business Studies and Finance' },
  { id: 'faculty-of-livestock-fisheries-and-nutrition', universityId: 'wayamba-university', name: 'Faculty of Livestock, Fisheries & Nutrition' },

  // Sabaragamuwa University of Sri Lanka
  { id: 'faculty-of-agricultural-sciences', universityId: 'sabaragamuwa-university', name: 'Faculty of Agricultural Sciences' },
  { id: 'faculty-of-applied-sciences', universityId: 'sabaragamuwa-university', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-geomatics', universityId: 'sabaragamuwa-university', name: 'Faculty of Geomatics' },
  { id: 'faculty-of-management-studies', universityId: 'sabaragamuwa-university', name: 'Faculty of Management Studies' },
  { id: 'faculty-of-social-sciences-and-languages', universityId: 'sabaragamuwa-university', name: 'Faculty of Social Sciences & Languages' },

  // Uva Wellassa University of Sri Lanka
  { id: 'faculty-of-science-and-technology', universityId: 'uva-wellassa-university', name: 'Faculty of Science & Technology' },
  { id: 'faculty-of-management', universityId: 'uva-wellassa-university', name: 'Faculty of Management' },

  // University of the Visual and Performing Arts
  { id: 'faculty-of-dance-and-drama', universityId: 'visual-performing-arts-university', name: 'Faculty of Dance and Drama' },
  { id: 'faculty-of-music', universityId: 'visual-performing-arts-university', name: 'Faculty of Music' },
  { id: 'faculty-of-visual-arts', universityId: 'visual-performing-arts-university', name: 'Faculty of Visual Arts' },

  // Vavuniya Campus
  { id: 'faculty-of-applied-sciences', universityId: 'vavuniya-campus', name: 'Faculty of Applied Sciences' },
  { id: 'faculty-of-business-studies', universityId: 'vavuniya-campus', name: 'Faculty of Business Studies' },

  // Trincomalee Campus
  { id: 'faculty-of-communication-and-business-studies', universityId: 'trincomalee-campus', name: 'Faculty of Communication and Business Studies' },
  { id: 'faculty-of-applied-sciences', universityId: 'trincomalee-campus', name: 'Faculty of Applied Sciences' }
  
];

export default facultiesData;