type DoctorModel = { id: string, name: string, specialty: string, img: any, email: string }
const doctorsData: DoctorModel[] = [
    { id: '001', name: 'Rawan Selima', specialty: 'Ophthalmology', img: require('../assets/images/doctors/doctor-5.jpg'), email: 'rawan@gmail.com' },
    { id: '002', name: 'Eslam Fayez', specialty: 'Orthopedic', img: require('../assets/images/doctors/doctor-1.jpg'), email: 'eslam@gmail.com' },
    { id: '003', name: 'Fatma Waleed', specialty: 'Dental Care', img: require('../assets/images/doctors/doctor-6.jpg'), email: 'fatma@gmail.com' },
    { id: '004', name: 'Muhammed Gamal', specialty: 'Plastic Surgery', img: require('../assets/images/doctors/doctor-3.jpg'), email: 'muhammed@gmail.com' },
    { id: '005', name: 'David Anderson', specialty: 'Neurology', img: require('../assets/images/doctors/doctor-4.jpg'), email: 'david@gmail.com' },
    { id: '006', name: 'Christopher Lee', specialty: 'Pharmacology', img: require('../assets/images/doctors/doctor-0.jpg'), email: 'christopher@gmail.com' },
    { id: '007', name: 'James Wilson', specialty: 'Hematology', img: require('../assets/images/doctors/doctor-2.jpg'), email: 'james@gmail.com' },
    { id: '008', name: 'Daniel Miller', specialty: 'Cardiology', img: require('../assets/images/doctors/doctor-7.jpg'), email: 'daniel@gmail.com' },
];


export type { DoctorModel }
export default doctorsData;