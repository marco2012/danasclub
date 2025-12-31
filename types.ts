export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ScheduleItem {
  day: string;
  courses: {
    time: string;
    courseName: string;
    level: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}