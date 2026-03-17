import studentWorkSample4 from "@/assets/student-work-sample-4.jpg";
import studentWorkSample2 from "@/assets/student-work-sample-2.jpg";

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortIntro: string;
  overview: string;
  level: 'Elementary' | 'Middle School' | 'High School';
  subject: 'STEAM' | 'Design' | 'Engineering' | 'Art' | 'Interdisciplinary' | 'Community & Urban Design' | 'Environmental & Science' | 'Environmental & Science ';
  theme: 'engineering' | 'environmental' | 'community' | 'digital-media';
  themeLabel: string;
  images: string[];
  videoUrl?: string;
  teacherNote?: string;
}

export const projects: Project[] = [
  {
    id: "bridge-challenge",
    title: "Tensile Bridge Challenge",
    thumbnail: "",
    shortIntro: "Students designed and tested load-bearing bridges using principles of tensile and compressive forces.",
    overview: "A 6-week engineering challenge where middle school students iterated through multiple prototypes of load-bearing bridges. Students applied mathematical modeling, material science principles, and collaborative design reviews to optimize their structures for maximum load capacity while minimizing material usage.",
    level: "Middle School",
    subject: "Engineering",
    theme: "engineering",
    themeLabel: "Engineering & Structural",
    images: [],
    teacherNote: "This project was designed to make abstract physics concepts tangible. By the third iteration, students were naturally using engineering vocabulary — tensile strength, compression, load distribution — in their peer critiques."
  },
  {
    id: "solar-greenhouse",
    title: "Biodegradable Packaging as an Alternative to Plastic",
    thumbnail: studentWorkSample4,
    shortIntro: "Students collaborated with Kitava restaurant and created biodegradable mycelium packaging as alternatives to plastic. ",
    overview: "An interdisciplinary project combining environmental science, electrical engineering, and sustainable design. Students designed, built, and monitored solar-powered micro greenhouses equipped with automated watering systems and temperature sensors. The project culminated in a community presentation on food sustainability.",
    level: "Middle School",
    subject: "Environmental & Science",
    theme: "environmental",
    themeLabel: "Environmental & Science",
    images: [],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    teacherNote: "The intersection of environmental urgency and hands-on engineering created genuine student investment. Several students continued maintaining their greenhouses months after the project ended."
  },
  {
    id: "neighborhood-redesign",
    title: "Our Neighborhood, Reimagined",
    thumbnail: "",
    shortIntro: "Elementary students redesigned their school neighborhood using empathy mapping and model building.",
    overview: "Students conducted community interviews, created empathy maps, and identified design opportunities in their school neighborhood. They built scale models of redesigned spaces — including accessible playgrounds, community gardens, and safe walking paths — presenting their proposals to local community members.",
    level: "Elementary",
    subject: "Design",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [],
    teacherNote: "Watching 8-year-olds interview community elders about accessibility needs was a powerful reminder that design thinking isn't age-dependent — it's empathy-dependent."
  },
  {
    id: "generative-art",
    title: "Algorithmic Pattern Design",
    thumbnail: "",
    shortIntro: "Students created digital art using algorithmic thinking and generative design tools.",
    overview: "Middle school students explored the intersection of mathematics and visual art by creating algorithmic patterns. Using block-based coding and vector design tools, they generated complex geometric compositions inspired by Islamic geometric art and contemporary generative design. Final works were printed as large-format posters for a school-wide exhibition.",
    level: "Middle School",
    subject: "Art",
    theme: "digital-media",
    themeLabel: "Art & Digital Media",
    images: [],
    teacherNote: "This project dismantled the false binary between 'math kids' and 'art kids.' Students who struggled with abstract equations thrived when they could see mathematics become beautiful."
  },
  {
    id: "earthquake-structures",
    title: "Earthquake-Resistant Structures",
    thumbnail: "",
    shortIntro: "Teams engineered structures designed to withstand simulated seismic activity.",
    overview: "A rigorous engineering design challenge where high school students researched, prototyped, and tested earthquake-resistant building designs. Using a classroom shake table, teams tested their structures against increasing magnitudes. The project integrated physics, materials science, and iterative design methodology.",
    level: "High School",
    subject: "Engineering",
    theme: "engineering",
    themeLabel: "Engineering & Structural",
    images: [],
    teacherNote: "The shake table transformed failure from something students feared into something they analyzed. 'It collapsed at 6.2' became a data point, not a defeat."
  },
  {
    id: "water-filtration",
    title: "Upcycling Coffee Grounds into Functional Design",
    thumbnail: studentWorkSample2,
    shortIntro: "Students collected coffee grounds from the teachers’ lounge and turned them into an aesthetic and functional product.",
    overview: "An environmental engineering project where students investigated local water quality data, designed multi-stage filtration systems, and tested their effectiveness using classroom water testing kits. The project connected environmental science to social justice, as students researched communities worldwide without clean water access.",
    level: "Middle School",
    subject: "Environmental & Science ",
    theme: "environmental",
    themeLabel: "Environmental & Science",
    images: ["/Student_Work_Sample_3.JPG", "/Student_Work_Sample_4-2.JPG", "/Student_Work_Sample_5.JPG"],
    teacherNote: "When students tested their first filter and saw murky water become clear, the room went silent. That moment — when science stops being abstract — is why I teach."
  },
  {
    id: "public-art-installation",
    title: "Voices of Our School",
    thumbnail: "",
    shortIntro: "A collaborative public art installation celebrating the diverse voices within the school community.",
    overview: "Students designed and fabricated a large-scale public art installation for the school entrance. The project involved community surveys, collaborative design sessions, material experimentation, and project management. The final piece incorporated individual ceramic tiles, each designed by a student, assembled into a cohesive mosaic representing unity in diversity.",
    level: "Elementary",
    subject: "Art",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [],
    teacherNote: "Public art teaches something no worksheet can: your creative voice matters enough to be permanent, visible, and shared."
  },
  {
    id: "stop-motion-stories",
    title: "Stories in Motion",
    thumbnail: "",
    shortIntro: "Students produced stop-motion animations exploring environmental themes.",
    overview: "An interdisciplinary digital media project where students researched environmental issues, wrote narrative scripts, designed characters and sets from recycled materials, and produced stop-motion animations. The project integrated storytelling, environmental science, art direction, and digital production skills.",
    level: "Elementary",
    subject: "Interdisciplinary",
    theme: "digital-media",
    themeLabel: "Art & Digital Media",
    images: [],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    teacherNote: "Stop-motion taught patience in a way no lecture could. Students learned that quality requires hundreds of small, intentional decisions."
  },
  {
    id: "smart-city-prototype",
    title: "Smart City 2045",
    thumbnail: "",
    shortIntro: "High school teams prototyped smart city solutions using sensors, data, and urban design principles.",
    overview: "A capstone interdisciplinary project where student teams envisioned and prototyped smart city infrastructure for 2045. Teams integrated Arduino sensors, 3D-printed architectural models, data visualization dashboards, and urban planning research. Projects addressed transportation, energy, public health, and community engagement.",
    level: "High School",
    subject: "Interdisciplinary",
    theme: "community",
    themeLabel: "Community & Urban Design",
    images: [],
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
export const subjects = ['STEAM', 'Design', 'Engineering', 'Art', 'Interdisciplinary', 'Community & Urban Design', 'Environmental & Science', 'Environmental & Science '] as const;
