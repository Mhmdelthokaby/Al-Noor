export const siteConfig = {
  name: "Al-Noor Academy",
  tagline: "Learn Quran & Arabic from Certified Teachers Anywhere in the World",
  description: "Premium online Quran and Arabic academy with certified teachers, flexible scheduling, and personalized learning paths.",
};

export const stats = [
  { label: "Students", value: "500+" },
  { label: "Teachers", value: "30+" },
  { label: "Countries", value: "20+" },
  { label: "Satisfaction", value: "95%" },
];

export const whyChooseUs = [
  {
    title: "Live Classes",
    description: "Real-time one-on-one and group classes with certified teachers.",
    icon: "Video",
  },
  {
    title: "Certified Teachers",
    description: "All teachers are certified with Ijazah and years of experience.",
    icon: "GraduationCap",
  },
  {
    title: "Flexible Schedule",
    description: "Book classes at your convenience, 24/7 availability.",
    icon: "CalendarClock",
  },
  {
    title: "Progress Tracking",
    description: "Detailed progress reports and achievement tracking.",
    icon: "TrendingUp",
  },
  {
    title: "One-to-One Sessions",
    description: "Personalized attention with dedicated teachers.",
    icon: "UserCheck",
  },
  {
    title: "Interactive Learning",
    description: "Engaging materials, quizzes, and interactive exercises.",
    icon: "BookOpen",
  },
];

export const courses = [
  {
    id: 1,
    title: "Quran Reading & Tajweed",
    level: "All Levels",
    duration: "3 Months",
    price: "$99/month",
    instructor: "Sheikh Ahmed Ali",
    students: 128,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1609599002809-1e8899d78628?w=400&h=300&fit=crop",
    description: "Master Quran reading with proper Tajweed rules from certified Quran teachers.",
  },
  {
    id: 2,
    title: "Quran Memorization (Hifz)",
    level: "Intermediate",
    duration: "6 Months",
    price: "$149/month",
    instructor: "Sheikh Mohammed Al-Farsi",
    students: 89,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585737949910-7c9dbd6d0d3c?w=400&h=300&fit=crop",
    description: "Structured Hifz program with daily memorization targets and revision.",
  },
  {
    id: 3,
    title: "Arabic Language",
    level: "Beginner to Advanced",
    duration: "4 Months",
    price: "$89/month",
    instructor: "Ustadha Fatima Zahra",
    students: 156,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop",
    description: "Learn Modern Standard Arabic and Quranic Arabic from scratch.",
  },
  {
    id: 4,
    title: "Islamic Studies",
    level: "All Levels",
    duration: "3 Months",
    price: "$79/month",
    instructor: "Dr. Hassan Raza",
    students: 94,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=300&fit=crop",
    description: "Comprehensive Islamic studies covering Fiqh, Aqeedah, Seerah, and more.",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Sheikh Ahmed Ali",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    country: "Egypt",
    flag: "🇪🇬",
    languages: ["Arabic", "English"],
    experience: "12 years",
    certificates: "Ijazah in Hafs, PhD in Islamic Studies",
    rating: 4.9,
    students: 128,
    lessons: 3200,
    bio: "Certified Quran teacher with Ijazah in Hafs an Asim. Over 12 years of experience teaching Quran and Tajweed.",
    specialties: ["Quran", "Tajweed", "Tafseer"],
    availability: "Mon-Sat, 8AM-8PM GMT",
  },
  {
    id: 2,
    name: "Sheikh Mohammed Al-Farsi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    languages: ["Arabic", "English", "Urdu"],
    experience: "15 years",
    certificates: "Ijazah in Hafs & Shubah, MA in Quranic Studies",
    rating: 4.8,
    students: 89,
    lessons: 4100,
    bio: "Senior Quran teacher with multiple Ijazah. Specialized in Hifz and Quranic sciences.",
    specialties: ["Hifz", "Tajweed", "Quranic Sciences"],
    availability: "Sun-Thu, 6AM-2PM GMT",
  },
  {
    id: 3,
    name: "Ustadha Fatima Zahra",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    country: "Morocco",
    flag: "🇲🇦",
    languages: ["Arabic", "French", "English"],
    experience: "8 years",
    certificates: "BA in Arabic Literature, Teaching Certification",
    rating: 4.7,
    students: 156,
    lessons: 2800,
    bio: "Passionate Arabic language teacher with modern teaching methodologies.",
    specialties: ["Arabic", "Grammar", "Conversation"],
    availability: "Mon-Fri, 9AM-6PM GMT",
  },
  {
    id: 4,
    name: "Dr. Hassan Raza",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    country: "Pakistan",
    flag: "🇵🇰",
    languages: ["Urdu", "English", "Arabic"],
    experience: "10 years",
    certificates: "PhD in Islamic Studies, MA in Fiqh",
    rating: 4.8,
    students: 94,
    lessons: 1900,
    bio: "Scholar in Islamic jurisprudence with extensive experience in teaching Islamic studies.",
    specialties: ["Islamic Studies", "Fiqh", "Seerah"],
    availability: "Tue-Sun, 10AM-8PM GMT",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: 79,
    description: "Perfect for beginners starting their Quran journey",
    features: [
      "2 classes per week",
      "30 minutes per class",
      "Basic Tajweed",
      "Access to materials",
      "Email support",
      "Progress reports",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: 129,
    description: "Most popular for serious learners",
    features: [
      "3 classes per week",
      "45 minutes per class",
      "Advanced Tajweed",
      "Access to materials",
      "Priority support",
      "Progress reports",
      "Monthly assessment",
      "Certificate upon completion",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: 199,
    description: "For dedicated students seeking excellence",
    features: [
      "5 classes per week",
      "60 minutes per class",
      "Full Tajweed mastery",
      "All materials included",
      "24/7 priority support",
      "Detailed progress tracking",
      "Weekly assessments",
      "Ijazah certification",
      "One-on-one sessions",
      "Family discount available",
    ],
    highlighted: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    country: "United States",
    rating: 5,
    text: "Al-Noor Academy has transformed my Quran reading. The teachers are incredibly patient and knowledgeable. I've improved my Tajweed significantly in just 3 months.",
    course: "Quran Reading & Tajweed",
  },
  {
    id: 2,
    name: "Omar Khalid",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    country: "United Kingdom",
    rating: 5,
    text: "My son has been memorizing Quran with Sheikh Mohammed for 6 months now. The progress is amazing. The structured approach and daily follow-up make all the difference.",
    course: "Quran Memorization (Hifz)",
  },
  {
    id: 3,
    name: "Layla Hassan",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    country: "Malaysia",
    rating: 5,
    text: "The Arabic course is excellent! Ustadha Fatima makes learning fun and engaging. I can now hold conversations in Arabic after just 4 months.",
    course: "Arabic Language",
  },
  {
    id: 4,
    name: "Yusuf Ibrahim",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    country: "Canada",
    rating: 4,
    text: "Dr. Hassan's Islamic Studies course is comprehensive and eye-opening. The flexibility of scheduling classes around my work is invaluable.",
    course: "Islamic Studies",
  },
];

export const faqs = [
  {
    question: "How do I get started?",
    answer: "Simply create an account, choose your course, and book a free trial class with one of our certified teachers. We'll help you find the perfect match.",
  },
  {
    question: "Are the teachers certified?",
    answer: "Yes, all our teachers are certified with Ijazah in Quran recitation and hold degrees in Islamic studies or Arabic language. They undergo rigorous screening.",
  },
  {
    question: "Can I schedule classes around my timetable?",
    answer: "Absolutely! Our platform allows you to book classes 24/7 based on teacher availability. You can reschedule or cancel up to 24 hours in advance.",
  },
  {
    question: "What equipment do I need?",
    answer: "A stable internet connection, a device with a camera and microphone (computer, tablet, or phone), and a quiet space for learning.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a free 30-minute trial class with any of our teachers so you can experience our teaching methodology before committing.",
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are conducted live via our integrated video platform. You'll have access to interactive whiteboards, screen sharing, and digital learning materials.",
  },
  {
    question: "Can I change my teacher?",
    answer: "Yes, you can request a change of teacher at any time. We want to ensure you have the best learning experience possible.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency. All payments are processed securely.",
  },
];

export const adminStats = {
  totalStudents: 528,
  totalTeachers: 32,
  todaysClasses: 47,
  revenue: 84750,
  activeSubscriptions: 412,
  pendingPayments: 18,
  revenueGrowth: 12.5,
  studentGrowth: 8.3,
  teacherGrowth: 5.1,
  classGrowth: 3.8,
};

export const revenueData = [
  { month: "Jan", revenue: 45000, target: 50000 },
  { month: "Feb", revenue: 52000, target: 50000 },
  { month: "Mar", revenue: 48000, target: 55000 },
  { month: "Apr", revenue: 58000, target: 55000 },
  { month: "May", revenue: 63000, target: 60000 },
  { month: "Jun", revenue: 72000, target: 60000 },
  { month: "Jul", revenue: 78000, target: 65000 },
  { month: "Aug", revenue: 84750, target: 70000 },
];

export const studentGrowthData = [
  { month: "Jan", students: 320 },
  { month: "Feb", students: 340 },
  { month: "Mar", students: 365 },
  { month: "Apr", students: 390 },
  { month: "May", students: 410 },
  { month: "Jun", students: 445 },
  { month: "Jul", students: 480 },
  { month: "Aug", students: 528 },
];

export const todaySchedule = [
  { time: "8:00 AM", student: "Aisha R.", teacher: "Sheikh Ahmed", course: "Tajweed", status: "completed" },
  { time: "9:00 AM", student: "Omar K.", teacher: "Sheikh Mohammed", course: "Hifz", status: "completed" },
  { time: "10:00 AM", student: "Layla H.", teacher: "Ustadha Fatima", course: "Arabic", status: "completed" },
  { time: "11:00 AM", student: "Yusuf I.", teacher: "Dr. Hassan", course: "Islamic Studies", status: "in-progress" },
  { time: "12:00 PM", student: "Mariam S.", teacher: "Sheikh Ahmed", course: "Quran Reading", status: "scheduled" },
  { time: "1:00 PM", student: "Zayd A.", teacher: "Ustadha Fatima", course: "Arabic", status: "scheduled" },
  { time: "2:00 PM", student: "Noor F.", teacher: "Sheikh Mohammed", course: "Hifz", status: "scheduled" },
  { time: "3:00 PM", student: "Ali M.", teacher: "Dr. Hassan", course: "Islamic Studies", status: "scheduled" },
];

export const adminTeachers = [
  { id: 1, name: "Sheikh Ahmed Ali", email: "ahmed@alnoor.com", students: 28, rating: 4.9, status: "active", country: "Egypt", experience: "12 years", specialization: "Quran & Tajweed" },
  { id: 2, name: "Sheikh Mohammed Al-Farsi", email: "mohammed@alnoor.com", students: 22, rating: 4.8, status: "active", country: "Saudi Arabia", experience: "15 years", specialization: "Hifz" },
  { id: 3, name: "Ustadha Fatima Zahra", email: "fatima@alnoor.com", students: 35, rating: 4.7, status: "active", country: "Morocco", experience: "8 years", specialization: "Arabic Language" },
  { id: 4, name: "Dr. Hassan Raza", email: "hassan@alnoor.com", students: 20, rating: 4.8, status: "active", country: "Pakistan", experience: "10 years", specialization: "Islamic Studies" },
  { id: 5, name: "Sheikh Abdullah Noor", email: "abdullah@alnoor.com", students: 15, rating: 4.6, status: "pending", country: "Jordan", experience: "7 years", specialization: "Tajweed" },
  { id: 6, name: "Ustadha Khadija Omar", email: "khadija@alnoor.com", students: 18, rating: 4.9, status: "active", country: "Somalia", experience: "9 years", specialization: "Arabic" },
  { id: 7, name: "Sheikh Ibrahim Khalil", email: "ibrahim@alnoor.com", students: 12, rating: 4.5, status: "pending", country: "Sudan", experience: "6 years", specialization: "Quran" },
  { id: 8, name: "Dr. Amina Hassan", email: "amina@alnoor.com", students: 25, rating: 4.8, status: "active", country: "Egypt", experience: "11 years", specialization: "Islamic Studies" },
];

export const adminStudents = [
  { id: 1, name: "Aisha Rahman", email: "aisha@email.com", plan: "Premium", teacher: "Sheikh Ahmed", country: "USA", classes: 42, attendance: 95, status: "active" },
  { id: 2, name: "Omar Khalid", email: "omar@email.com", plan: "Standard", teacher: "Sheikh Mohammed", country: "UK", classes: 28, attendance: 88, status: "active" },
  { id: 3, name: "Layla Hassan", email: "layla@email.com", plan: "Starter", teacher: "Ustadha Fatima", country: "Malaysia", classes: 18, attendance: 92, status: "active" },
  { id: 4, name: "Yusuf Ibrahim", email: "yusuf@email.com", plan: "Standard", teacher: "Dr. Hassan", country: "Canada", classes: 35, attendance: 85, status: "active" },
  { id: 5, name: "Mariam Saleh", email: "mariam@email.com", plan: "Premium", teacher: "Sheikh Ahmed", country: "Australia", classes: 50, attendance: 98, status: "active" },
  { id: 6, name: "Zayd Ahmed", email: "zayd@email.com", plan: "Starter", teacher: "Ustadha Fatima", country: "UAE", classes: 8, attendance: 75, status: "active" },
  { id: 7, name: "Noor Fatima", email: "noor@email.com", plan: "Premium", teacher: "Sheikh Mohammed", country: "Pakistan", classes: 36, attendance: 90, status: "active" },
  { id: 8, name: "Ali Mohammed", email: "ali@email.com", plan: "Standard", teacher: "Dr. Hassan", country: "Egypt", classes: 22, attendance: 82, status: "paused" },
];

export const subscriptions = [
  { id: 1, student: "Aisha Rahman", plan: "Premium", amount: 199, status: "active", startDate: "2024-01-15", nextBilling: "2024-09-15", renewal: "auto" },
  { id: 2, student: "Omar Khalid", plan: "Standard", amount: 129, status: "active", startDate: "2024-03-01", nextBilling: "2024-09-01", renewal: "auto" },
  { id: 3, student: "Layla Hassan", plan: "Starter", amount: 79, status: "active", startDate: "2024-05-10", nextBilling: "2024-09-10", renewal: "manual" },
  { id: 4, student: "Yusuf Ibrahim", plan: "Standard", amount: 129, status: "active", startDate: "2024-02-20", nextBilling: "2024-08-20", renewal: "auto" },
  { id: 5, student: "Mariam Saleh", plan: "Premium", amount: 199, status: "active", startDate: "2024-01-01", nextBilling: "2024-09-01", renewal: "auto" },
  { id: 6, student: "Zayd Ahmed", plan: "Starter", amount: 79, status: "expired", startDate: "2024-04-01", nextBilling: "2024-07-01", renewal: "manual" },
  { id: 7, student: "Noor Fatima", plan: "Premium", amount: 199, status: "active", startDate: "2024-02-01", nextBilling: "2024-08-01", renewal: "auto" },
  { id: 8, student: "Ali Mohammed", plan: "Standard", amount: 129, status: "paused", startDate: "2024-03-15", nextBilling: "2024-08-15", renewal: "auto" },
];

export const payments = [
  { id: "INV-001", student: "Aisha Rahman", amount: 199, method: "Visa", date: "2024-08-15", status: "paid" },
  { id: "INV-002", student: "Omar Khalid", amount: 129, method: "PayPal", date: "2024-08-01", status: "paid" },
  { id: "INV-003", student: "Layla Hassan", amount: 79, method: "Mastercard", date: "2024-08-10", status: "paid" },
  { id: "INV-004", student: "Yusuf Ibrahim", amount: 129, method: "Visa", date: "2024-08-20", status: "pending" },
  { id: "INV-005", student: "Mariam Saleh", amount: 199, method: "PayPal", date: "2024-08-01", status: "paid" },
  { id: "INV-006", student: "Zayd Ahmed", amount: 79, method: "Bank Transfer", date: "2024-07-01", status: "failed" },
  { id: "INV-007", student: "Noor Fatima", amount: 199, method: "Visa", date: "2024-08-01", status: "paid" },
  { id: "INV-008", student: "Ali Mohammed", amount: 129, method: "Mastercard", date: "2024-08-15", status: "pending" },
  { id: "INV-009", student: "Aisha Rahman", amount: 199, method: "PayPal", date: "2024-09-15", status: "pending" },
  { id: "INV-010", student: "Omar Khalid", amount: 129, method: "Visa", date: "2024-09-01", status: "paid" },
];

export const teacherStats = {
  totalHours: 124,
  thisMonth: 42,
  students: 18,
  rating: 4.8,
  completedClasses: 380,
  attendance: 97,
  reviews: 45,
  achievements: 8,
};

export const teacherMonthlyHours = [
  { month: "Mar", hours: 32 },
  { month: "Apr", hours: 38 },
  { month: "May", hours: 35 },
  { month: "Jun", hours: 40 },
  { month: "Jul", hours: 42 },
  { month: "Aug", hours: 42 },
];

export const teacherUpcomingClasses = [
  { date: "Today, 11:00 AM", student: "Yusuf Ibrahim", course: "Islamic Studies", duration: "45 min" },
  { date: "Today, 2:00 PM", student: "Ali Mohammed", course: "Fiqh", duration: "30 min" },
  { date: "Tomorrow, 8:00 AM", student: "Aisha Rahman", course: "Tajweed", duration: "45 min" },
  { date: "Tomorrow, 10:00 AM", student: "Mariam Saleh", course: "Quran Reading", duration: "60 min" },
  { date: "Wed, 9:00 AM", student: "Noor Fatima", course: "Hifz", duration: "45 min" },
  { date: "Wed, 1:00 PM", student: "Zayd Ahmed", course: "Arabic", duration: "30 min" },
];

export const teacherStudents = [
  { id: 1, name: "Aisha Rahman", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", level: "Advanced", progress: 85, lessons: 42, attendance: 95 },
  { id: 2, name: "Mariam Saleh", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", level: "Intermediate", progress: 62, lessons: 50, attendance: 98 },
  { id: 3, name: "Yusuf Ibrahim", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", level: "Beginner", progress: 35, lessons: 35, attendance: 85 },
  { id: 4, name: "Noor Fatima", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", level: "Advanced", progress: 78, lessons: 36, attendance: 90 },
  { id: 5, name: "Ali Mohammed", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", level: "Beginner", progress: 22, lessons: 22, attendance: 82 },
];

export const studentDashboardData = {
  name: "Aisha Rahman",
  plan: "Premium",
  planPrice: 199,
  remainingClasses: 8,
  totalClasses: 12,
  attendance: 95,
  progress: 72,
  teacher: {
    name: "Sheikh Ahmed Ali",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    rating: 4.9,
    specialization: "Quran & Tajweed",
    nextClass: "Tomorrow, 8:00 AM",
  },
  upcomingLessons: [
    { date: "Tomorrow, 8:00 AM", course: "Tajweed - Surah Al-Fatihah", duration: "45 min" },
    { date: "Wed, 8:00 AM", course: "Quran Reading - Surah Al-Baqarah v1-10", duration: "45 min" },
    { date: "Fri, 8:00 AM", course: "Tajweed - Noon Sakinah Rules", duration: "45 min" },
    { date: "Sat, 10:00 AM", course: "Revision - Surah Al-Fatihah to Al-Ikhlas", duration: "60 min" },
  ],
  payments: [
    { id: "INV-009", amount: 199, date: "Sep 15, 2024", status: "pending" },
    { id: "INV-001", amount: 199, date: "Aug 15, 2024", status: "paid" },
    { id: "INV-000", amount: 199, date: "Jul 15, 2024", status: "paid" },
  ],
  reviews: [
    { teacher: "Sheikh Ahmed Ali", rating: 5, comment: "Excellent teacher, very patient and knowledgeable.", date: "Aug 10, 2024" },
    { teacher: "Sheikh Ahmed Ali", rating: 5, comment: "Great session on Tajweed rules.", date: "Jul 28, 2024" },
  ],
};

export const notifications = [
  { id: 1, title: "New student enrolled", description: "Aisha Rahman has enrolled in Premium plan", time: "5 min ago", type: "info" },
  { id: 2, title: "Payment received", description: "$199 from Aisha Rahman", time: "1 hour ago", type: "success" },
  { id: 3, title: "Teacher pending approval", description: "Sheikh Abdullah Noor needs verification", time: "3 hours ago", type: "warning" },
  { id: 4, title: "Class cancelled", description: "Zayd Ahmed cancelled 2:00 PM class", time: "5 hours ago", type: "danger" },
  { id: 5, title: "Subscription expiring", description: "Layla Hassan's Starter plan expires in 3 days", time: "1 day ago", type: "warning" },
];
