export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortIntro: string;
  overview: string;
  level: 'Elementary' | 'Middle School' | 'High School';
  subject: 'STEAM' | 'Design' | 'Engineering' | 'Art' | 'Interdisciplinary';
  theme: 'engineering' | 'environmental' | 'community' | 'digital-media';
  themeLabel: string;
  images: string[];
  videoUrl?: string;
  teacherNote?: string;
  year?: string;
  duration?: string;
  teamSize?: string;
}

export const projects: Project[] = [
  {
    id: "bridge-challenge",
    title: "Tensile Bridge Challenge",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    shortIntro: "Students designed and tested load-bearing bridges using principles of tensile and compressive forces.",
    overview: "A 6-week engineering challenge where middle school students iterated through multiple prototypes of load-bearing bridges. Students applied mathematical modeling, material science principles, and collaborative design reviews to optimize their structures for maximum load capacity while minimizing material usage.",
    level: "Middle School",
    subject: "Engineering",
    theme: "engineering",
    themeLabel: "Engineering & Structural",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    ],
    year: "2024",
    duration: "6 Weeks",
    teamSize: "Teams of 4",
    teacherNote: "This project was designed to make abstract physics concepts tangible. By the third iteration, students were naturally using engineering vocabulary — tensile strength, compression, load distribution — in their peer critiques."
  },
  {
    id: "solar-greenhouse",
    title: "Solar-Powered Micro Greenhouse",
    thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    shortIntro: "High school students engineered functional micro greenhouses powered by solar energy systems.",
    overview: "An interdisciplinary project combining environmental science, electrical engineering, and sustainable design. Students designed, built, and monitored solar-powered micro greenhouses equipped with automated watering systems and temperature sensors. The project culminated in a community presentation on food sustainability.",
    level: "High School",
    subject: "STEAM",
    theme: "environmental",
    themeLabel: "Environmental & Science",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    year: "2024",
    duration: "8 Weeks",
    teamSize: "Teams of 3",
    teacherNote: "The intersection of environmental urgency and hands-on engineering created genuine student investment. Several students continued maintaining their greenhouses months after the project ended."
  },
  {
    id: "neighborhood-redesign",
    title: "Our Neighborhood, Reimagined",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    shortIntro: "Elementary students redesigned their school neighborhood using empathy mapping and model building.",
    overview: "Students conducted community interviews, created empathy maps, and identified design opportunities in their school neighborhood. They built scale models of redesigned spaces — including accessible playgrounds, community gardens, and safe walking paths — presenting their proposals to local community members.",
    level: "Elementary",
    subject: "Design",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    ],
    year: "2023",
    duration: "5 Weeks",
    teamSize: "Teams of 5",
    teacherNote: "Watching 8-year-olds interview community elders about accessibility needs was a powerful reminder that design thinking isn't age-dependent — it's empathy-dependent."
  },
  {
    id: "generative-art",
    title: "Algorithmic Pattern Design",
    thumbnail: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=800&h=600&fit=crop",
    shortIntro: "Students created digital art using algorithmic thinking and generative design tools.",
    overview: "Middle school students explored the intersection of mathematics and visual art by creating algorithmic patterns. Using block-based coding and vector design tools, they generated complex geometric compositions inspired by Islamic geometric art and contemporary generative design. Final works were printed as large-format posters for a school-wide exhibition.",
    level: "Middle School",
    subject: "Art",
    theme: "digital-media",
    themeLabel: "Art & Digital Media",
    images: [
      "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    ],
    year: "2024",
    duration: "4 Weeks",
    teamSize: "Individual",
    teacherNote: "This project dismantled the false binary between 'math kids' and 'art kids.' Students who struggled with abstract equations thrived when they could see mathematics become beautiful."
  },
  {
    id: "earthquake-structures",
    title: "Earthquake-Resistant Structures",
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    shortIntro: "Teams engineered structures designed to withstand simulated seismic activity.",
    overview: "A rigorous engineering design challenge where high school students researched, prototyped, and tested earthquake-resistant building designs. Using a classroom shake table, teams tested their structures against increasing magnitudes. The project integrated physics, materials science, and iterative design methodology.",
    level: "High School",
    subject: "Engineering",
    theme: "engineering",
    themeLabel: "Engineering & Structural",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    ],
    year: "2023",
    duration: "7 Weeks",
    teamSize: "Teams of 4",
    teacherNote: "The shake table transformed failure from something students feared into something they analyzed. 'It collapsed at 6.2' became a data point, not a defeat."
  },
  {
    id: "water-filtration",
    title: "Clean Water, By Design",
    thumbnail: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=600&fit=crop",
    shortIntro: "Students designed and tested water filtration systems for real-world water quality challenges.",
    overview: "An environmental engineering project where students investigated local water quality data, designed multi-stage filtration systems, and tested their effectiveness using classroom water testing kits. The project connected environmental science to social justice, as students researched communities worldwide without clean water access.",
    level: "Middle School",
    subject: "STEAM",
    theme: "environmental",
    themeLabel: "Environmental & Science",
    images: [
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501004318855-cd2940a40cdc?w=600&h=400&fit=crop",
    ],
    year: "2024",
    duration: "5 Weeks",
    teamSize: "Pairs",
    teacherNote: "When students tested their first filter and saw murky water become clear, the room went silent. That moment — when science stops being abstract — is why I teach."
  },
  {
    id: "public-art-installation",
    title: "Voices of Our School",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop",
    shortIntro: "A collaborative public art installation celebrating the diverse voices within the school community.",
    overview: "Students designed and fabricated a large-scale public art installation for the school entrance. The project involved community surveys, collaborative design sessions, material experimentation, and project management. The final piece incorporated individual ceramic tiles, each designed by a student, assembled into a cohesive mosaic representing unity in diversity.",
    level: "Elementary",
    subject: "Art",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=400&fit=crop",
    ],
    year: "2023",
    duration: "6 Weeks",
    teamSize: "Whole Class",
    teacherNote: "Public art teaches something no worksheet can: your creative voice matters enough to be permanent, visible, and shared."
  },
  {
    id: "stop-motion-stories",
    title: "Stories in Motion",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
    shortIntro: "Students produced stop-motion animations exploring environmental themes.",
    overview: "An interdisciplinary digital media project where students researched environmental issues, wrote narrative scripts, designed characters and sets from recycled materials, and produced stop-motion animations. The project integrated storytelling, environmental science, art direction, and digital production skills.",
    level: "Elementary",
    subject: "Interdisciplinary",
    theme: "digital-media",
    themeLabel: "Art & Digital Media",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    year: "2024",
    duration: "4 Weeks",
    teamSize: "Teams of 3",
    teacherNote: "Stop-motion taught patience in a way no lecture could. Students learned that quality requires hundreds of small, intentional decisions."
  },
  {
    id: "smart-city-prototype",
    title: "Smart City 2045",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    shortIntro: "High school teams prototyped smart city solutions using sensors, data, and urban design principles.",
    overview: "A capstone interdisciplinary project where student teams envisioned and prototyped smart city infrastructure for 2045. Teams integrated Arduino sensors, 3D-printed architectural models, data visualization dashboards, and urban planning research. Projects addressed transportation, energy, public health, and community engagement.",
    level: "High School",
    subject: "Interdisciplinary",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    ],
    year: "2024",
    duration: "10 Weeks",
    teamSize: "Teams of 5",
    teacherNote: "This project was the most complex I've facilitated — and the most rewarding. Students operated as real design teams, navigating disagreements, deadlines, and ambiguity just like professionals."
  },
];

export const themes = [
  { id: 'engineering' as const, label: 'Engineering & Structural' },
  { id: 'environmental' as const, label: 'Environmental & Science' },
  { id: 'community' as const, label: 'Community & Urban Design' },
  { id: 'digital-media' as const, label: 'Art & Digital Media' },
] as const;

export const levels = ['Elementary', 'Middle School', 'High School'] as const;
export const subjects = ['STEAM', 'Design', 'Engineering', 'Art', 'Interdisciplinary'] as const;
