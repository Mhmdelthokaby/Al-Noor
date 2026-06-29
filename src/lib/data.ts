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

// ============ LMS - Programs / Levels / Lessons ============

export const programs = [
  {
    id: 1,
    title: "Quran Reading & Tajweed",
    description: "Master Quran reading with proper Tajweed rules from scratch to advanced level.",
    image: "https://images.unsplash.com/photo-1609599002809-1e8899d78628?w=400&h=250&fit=crop",
    instructor: "Sheikh Ahmed Ali",
    totalLessons: 36,
    completedLessons: 14,
    progress: 39,
    levels: [
      {
        id: 101,
        title: "Foundation Level",
        description: "Arabic alphabet, basic pronunciation, and introductory Tajweed rules.",
        lessons: [
          { id: 1001, title: "Introduction to Arabic Alphabet", duration: "25 min", type: "video", completed: true, locked: false },
          { id: 1002, title: "Letters Alif to Kha", duration: "30 min", type: "video", completed: true, locked: false },
          { id: 1003, title: "Letters Dal to Sad", duration: "28 min", type: "video", completed: true, locked: false },
          { id: 1004, title: "Letters Dad to Ya", duration: "32 min", type: "video", completed: true, locked: false },
          { id: 1005, title: "Basic Vowels (Fatha, Kasra, Damma)", duration: "35 min", type: "video", completed: true, locked: false },
          { id: 1006, title: "Sukun & Shaddah", duration: "30 min", type: "video", completed: true, locked: false },
          { id: 1007, title: "Madd (Prolongation) Basics", duration: "28 min", type: "video", completed: true, locked: false },
          { id: 1008, title: "Foundation Quiz", duration: "15 min", type: "quiz", completed: false, locked: false },
          { id: 1009, title: "Practice: Surah Al-Fatihah", duration: "40 min", type: "video", completed: true, locked: false },
          { id: 1010, title: "Homework: Recite Al-Fatihah", duration: "20 min", type: "homework", completed: false, locked: false },
          { id: 1011, title: "Tajweed Rule: Noon Sakinah & Tanween", duration: "35 min", type: "video", completed: false, locked: false },
          { id: 1012, title: "Level Assessment", duration: "20 min", type: "quiz", completed: false, locked: true },
        ],
        progress: 67,
      },
      {
        id: 102,
        title: "Intermediate Tajweed",
        description: "Advanced Tajweed rules including Ghunnah, Qalqalah, and Waqf.",
        lessons: [
          { id: 2001, title: "Ghunnah Rules", duration: "30 min", type: "video", completed: false, locked: false },
          { id: 2002, title: "Qalqalah Rules", duration: "25 min", type: "video", completed: false, locked: false },
          { id: 2003, title: "Rules of Raa", duration: "28 min", type: "video", completed: false, locked: false },
          { id: 2004, title: "Rules of Laam in Allah's Name", duration: "22 min", type: "video", completed: false, locked: false },
          { id: 2005, title: "Waqf (Stopping) Rules", duration: "35 min", type: "video", completed: false, locked: true },
          { id: 2006, title: "Madd Rules (Detailed)", duration: "40 min", type: "video", completed: false, locked: true },
          { id: 2007, title: "Intermediate Quiz", duration: "15 min", type: "quiz", completed: false, locked: true },
        ],
        progress: 28,
      },
      {
        id: 103,
        title: "Advanced Recitation",
        description: "Master the different styles of Quranic recitation and full Surah practice.",
        lessons: [
          { id: 3001, title: "Surah Al-Baqarah v1-50", duration: "45 min", type: "video", completed: false, locked: true },
          { id: 3002, title: "Surah Al-Baqarah v51-100", duration: "45 min", type: "video", completed: false, locked: true },
          { id: 3003, title: "Surah Al-Baqarah v101-150", duration: "45 min", type: "video", completed: false, locked: true },
          { id: 3004, title: "Homework: Surah Al-Baqarah Recitation", duration: "30 min", type: "homework", completed: false, locked: true },
          { id: 3005, title: "Tajweed Review & Ijazah Preparation", duration: "50 min", type: "video", completed: false, locked: true },
          { id: 3006, title: "Final Assessment", duration: "30 min", type: "quiz", completed: false, locked: true },
        ],
        progress: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Quran Memorization (Hifz)",
    description: "Structured Hifz program with daily memorization targets, revision, and Ijazah track.",
    image: "https://images.unsplash.com/photo-1585737949910-7c9dbd6d0d3c?w=400&h=250&fit=crop",
    instructor: "Sheikh Mohammed Al-Farsi",
    totalLessons: 48,
    completedLessons: 8,
    progress: 17,
    levels: [
      {
        id: 201,
        title: "Juz 1-3 Foundation",
        description: "Memorization of the first 3 Juz with proper Tajweed.",
        lessons: [
          { id: 4001, title: "Juz 1: Al-Fatihah to Al-Baqarah v141", duration: "60 min", type: "video", completed: true, locked: false },
          { id: 4002, title: "Revision & Practice: Juz 1", duration: "45 min", type: "video", completed: true, locked: false },
          { id: 4003, title: "Juz 2: Al-Baqarah v142-252", duration: "60 min", type: "video", completed: true, locked: false },
          { id: 4004, title: "Homework: Recite Juz 1-2", duration: "30 min", type: "homework", completed: false, locked: false },
          { id: 4005, title: "Juz 3: Al-Baqarah v253 to Al-Imran v92", duration: "60 min", type: "video", completed: false, locked: false },
          { id: 4006, title: "Memorization Quiz: Juz 1-3", duration: "20 min", type: "quiz", completed: false, locked: true },
        ],
        progress: 50,
      },
    ],
  },
  {
    id: 3,
    title: "Arabic Language",
    description: "Learn Modern Standard Arabic and Quranic Arabic from beginner to advanced.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=250&fit=crop",
    instructor: "Ustadha Fatima Zahra",
    totalLessons: 42,
    completedLessons: 6,
    progress: 14,
    levels: [
      {
        id: 301,
        title: "Arabic Basics",
        description: "Alphabet, basic vocabulary, and simple sentence structure.",
        lessons: [
          { id: 5001, title: "Arabic Alphabet & Pronunciation", duration: "30 min", type: "video", completed: true, locked: false },
          { id: 5002, title: "Basic Greetings & Introductions", duration: "25 min", type: "video", completed: true, locked: false },
          { id: 5003, title: "Numbers & Colors", duration: "20 min", type: "video", completed: true, locked: false },
          { id: 5004, title: "Family Members & Daily Life Vocab", duration: "25 min", type: "video", completed: true, locked: false },
          { id: 5005, title: "Homework: Introduce Yourself in Arabic", duration: "15 min", type: "homework", completed: false, locked: false },
          { id: 5006, title: "Basics Quiz", duration: "15 min", type: "quiz", completed: false, locked: false },
        ],
        progress: 33,
      },
    ],
  },
  {
    id: 4,
    title: "Islamic Studies",
    description: "Comprehensive Islamic studies covering Fiqh, Aqeedah, Seerah, and Hadith.",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=250&fit=crop",
    instructor: "Dr. Hassan Raza",
    totalLessons: 24,
    completedLessons: 3,
    progress: 12,
    levels: [
      {
        id: 401,
        title: "Aqeedah (Faith)",
        description: "Core beliefs of a Muslim based on Quran and Sunnah.",
        lessons: [
          { id: 6001, title: "The Six Pillars of Faith", duration: "35 min", type: "video", completed: true, locked: false },
          { id: 6002, title: "Tawheed (Oneness of Allah)", duration: "40 min", type: "video", completed: true, locked: false },
          { id: 6003, title: "Homework: Write About Tawheed", duration: "20 min", type: "homework", completed: false, locked: false },
          { id: 6004, title: "Aqeedah Quiz", duration: "15 min", type: "quiz", completed: false, locked: true },
        ],
        progress: 50,
      },
    ],
  },
];

// ============ LMS - Quizzes ============

export const quizQuestions: Record<number, { question: string; options: string[]; correct: number }[]> = {
  1008: [
    { question: "How many letters are in the Arabic alphabet?", options: ["26", "28", "30", "32"], correct: 1 },
    { question: "What is the first vowel in Arabic called?", options: ["Kasra", "Damma", "Fatha", "Sukun"], correct: 2 },
    { question: "What does Shaddah indicate?", options: ["A long vowel", "A doubled letter", "A stop", "A nasal sound"], correct: 1 },
    { question: "Which surah is known as 'The Opening'?", options: ["Al-Ikhlas", "Al-Fatihah", "An-Nas", "Al-Falaq"], correct: 1 },
    { question: "How many verses (ayah) are in Surah Al-Fatihah?", options: ["5", "6", "7", "8"], correct: 2 },
  ],
  2007: [
    { question: "What is Qalqalah?", options: ["A nasal sound", "An echoing sound", "A prolonged sound", "A whispered sound"], correct: 1 },
    { question: "How many letters of Qalqalah are there?", options: ["3", "5", "7", "10"], correct: 1 },
    { question: "What does Ghunnah mean?", options: ["Echoing", "Nasalization", "Prolongation", "Whispering"], correct: 1 },
    { question: "Waqf means:", options: ["Starting", "Stopping", "Prolonging", "Repeating"], correct: 1 },
  ],
  4006: [
    { question: "How many verses does Surah Al-Baqarah have?", options: ["256", "276", "286", "296"], correct: 2 },
    { question: "What is the first verse of Surah Al-Fatihah?", options: ["Alhamdu lillahi", "Bismillah", "Iyyaka na'budu", "Maliki yawm"], correct: 1 },
    { question: "Juz 1 starts with which surah?", options: ["Al-Baqarah", "Al-Fatihah", "Al-Imran", "An-Nisa"], correct: 1 },
    { question: "How many surahs are in Juz 1-3 approximately?", options: ["1", "3", "5", "7"], correct: 1 },
  ],
};

// ============ LMS - Homework Submissions ============

export const homeworkSubmissions = [
  {
    id: 1,
    student: "Aisha Rahman",
    studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    lessonId: 1010,
    lessonTitle: "Homework: Recite Al-Fatihah",
    program: "Quran Reading & Tajweed",
    submittedAt: "2024-08-27T14:30:00Z",
    type: "audio",
    duration: "3:24",
    status: "pending",
    grade: null,
    feedback: null,
  },
  {
    id: 2,
    student: "Mariam Saleh",
    studentAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    lessonId: 1010,
    lessonTitle: "Homework: Recite Al-Fatihah",
    program: "Quran Reading & Tajweed",
    submittedAt: "2024-08-26T10:15:00Z",
    type: "audio",
    duration: "2:58",
    status: "graded",
    grade: 92,
    feedback: "Excellent recitation! Your Makharij are very clear. Focus a bit more on the Ghunnah in 'an'amta'.",
  },
  {
    id: 3,
    student: "Yusuf Ibrahim",
    studentAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    lessonId: 5005,
    lessonTitle: "Homework: Introduce Yourself in Arabic",
    program: "Arabic Language",
    submittedAt: "2024-08-25T16:45:00Z",
    type: "video",
    duration: "1:45",
    status: "graded",
    grade: 88,
    feedback: "Great effort! Your pronunciation is good. Try to use more complete sentences next time.",
  },
  {
    id: 4,
    student: "Zayd Ahmed",
    studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lessonId: 6003,
    lessonTitle: "Homework: Write About Tawheed",
    program: "Islamic Studies",
    submittedAt: "2024-08-24T09:00:00Z",
    type: "pdf",
    duration: null,
    status: "pending",
    grade: null,
    feedback: null,
  },
  {
    id: 5,
    student: "Noor Fatima",
    studentAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    lessonId: 4004,
    lessonTitle: "Homework: Recite Juz 1-2",
    program: "Quran Memorization (Hifz)",
    submittedAt: "2024-08-23T20:30:00Z",
    type: "audio",
    duration: "12:10",
    status: "graded",
    grade: 95,
    feedback: "Beautiful recitation! Your memorization is solid. Pay attention to the Madd in 'sa'ala' (ayah 177).",
  },
];

// ============ LMS - Certificates ============

export const certificates = [
  {
    id: 1,
    title: "Foundation Level - Quran Reading",
    program: "Quran Reading & Tajweed",
    issuedAt: "2024-06-15",
    grade: "A",
    status: "earned",
    pdfUrl: "#",
  },
  {
    id: 2,
    title: "Arabic Basics Level",
    program: "Arabic Language",
    issuedAt: "2024-07-20",
    grade: "A-",
    status: "earned",
    pdfUrl: "#",
  },
  {
    id: 3,
    title: "Aqeedah Module",
    program: "Islamic Studies",
    issuedAt: "2024-08-10",
    grade: "A",
    status: "earned",
    pdfUrl: "#",
  },
];
