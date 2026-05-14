export type Course = {
  id: number;
  title: string;
  level: "Beginner" | "Elementary" | "Pre-intermediate" | "Intermediate" | "Upper-intermediate" | "Advanced" | "Toefl";
  audience: "kids" | "teens" | "adults";
  schedule: "Понедельник-Среда-Пятница" | "Вторник-Четверг-Суббота";
  shift: "Утром" | "Днём" | "Вечером";
  price: number;
  startDate: string;
  description: string;
  teacher: string;
  image: string;
};

const COVERS = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1497486751825-1233686f5d54?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=70",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=70",
];

export const TEACHERS = [
  { name: "Patma Mammetgulieva", experience: "8 лет" },
  { name: "Aysenem Begmyradova", experience: "6 лет" },
  { name: "Abdyrahym Agajykov", experience: "10 лет" },
  { name: "Myrat Amangulyyev", experience: "7 лет" },
  { name: "Muhammet Ballyyev", experience: "9 лет" },
  { name: "Kemal Nuryagdyyev", experience: "12 лет" },
  { name: "Dushmuhammet Mammedov", experience: "5 лет" },
  { name: "Maysa Nazarova", experience: "6 лет" },
  { name: "Myahri Allaberdiyeva", experience: "4 года" },
  { name: "Merjen Akyyeva", experience: "7 лет" },
  { name: "Aylar Mehtiyeva", experience: "5 лет" },
  { name: "Shirin Basarova", experience: "6 лет" },
];

export const COURSES: Course[] = [
  ["Let's Go 2 for kids, Spring 26, Evening, MWF", "Beginner", "kids", "Понедельник-Среда-Пятница", "Вечером", "Patma Mammetgulieva"],
  ["Let's Go 2 for kids, Spring 26, Afternoon, TTS", "Beginner", "kids", "Вторник-Четверг-Суббота", "Днём", "Patma Mammetgulieva"],
  ["Oxford Phonics World 2 for kids, Spring 26, Evening, MWF", "Beginner", "kids", "Понедельник-Среда-Пятница", "Вечером", "Aysenem Begmyradova"],
  ["Family and Friends 1 for kids, Spring 26, Evening, TTS", "Beginner", "kids", "Вторник-Четверг-Суббота", "Вечером", "Aysenem Begmyradova"],
  ["Headway Intermediate for adults, Spring 26, Morning, MWF", "Intermediate", "adults", "Понедельник-Среда-Пятница", "Утром", "Abdyrahym Agajykov"],
  ["Headway Intermediate for adults, Spring 26, Afternoon, MWF", "Intermediate", "adults", "Понедельник-Среда-Пятница", "Днём", "Myrat Amangulyyev"],
  ["Oxford Discover 2 for teens, Spring 26, Evening, MWF", "Elementary", "teens", "Понедельник-Среда-Пятница", "Вечером", "Myrat Amangulyyev"],
  ["Headway Pre-Intermediate for adults, Spring 26, Evening, MWF", "Pre-intermediate", "adults", "Понедельник-Среда-Пятница", "Вечером", "Muhammet Ballyyev"],
  ["Headway Beginner for adults, Spring 26, Evening, TTS", "Beginner", "adults", "Вторник-Четверг-Суббота", "Вечером", "Muhammet Ballyyev"],
  ["Headway Intermediate for adults, Spring 26, Evening, MWF", "Intermediate", "adults", "Понедельник-Среда-Пятница", "Вечером", "Kemal Nuryagdyyev"],
  ["Headway Elementary for adults, Spring 26, Afternoon, MWF", "Elementary", "adults", "Понедельник-Среда-Пятница", "Днём", "Kemal Nuryagdyyev"],
  ["Headway Upper-Intermediate, Spring 26, Afternoon, TTS", "Upper-intermediate", "adults", "Вторник-Четверг-Суббота", "Днём", "Kemal Nuryagdyyev"],
  ["Oxford Discover 1 for teens, Spring 26, Afternoon, MWF", "Elementary", "teens", "Понедельник-Среда-Пятница", "Днём", "Dushmuhammet Mammedov"],
  ["Oxford Discover 3 for teens, Spring 26, Morning, TTS", "Pre-intermediate", "teens", "Вторник-Четверг-Суббота", "Утром", "Dushmuhammet Mammedov"],
  ["English File Intermediate plus, Spring 26, Evening, MWF", "Upper-intermediate", "adults", "Понедельник-Среда-Пятница", "Вечером", "Dushmuhammet Mammedov"],
  ["Oxford Phonics World 2 for kids, Spring 26, Evening, TTS", "Beginner", "kids", "Вторник-Четверг-Суббота", "Вечером", "Maysa Nazarova"],
  ["Oxford Discover 2 for teens, Spring 26, Morning, MWF", "Elementary", "teens", "Понедельник-Среда-Пятница", "Утром", "Maysa Nazarova"],
  ["Family and Friends 1 for kids, Spring 26, Afternoon, MWF", "Beginner", "kids", "Понедельник-Среда-Пятница", "Днём", "Maysa Nazarova"],
  ["Headway Pre-Intermediate, Spring 26, Morning, TTS", "Pre-intermediate", "adults", "Вторник-Четверг-Суббота", "Утром", "Myahri Allaberdiyeva"],
  ["Headway Elementary for adults, Spring 26, Evening, TTS", "Elementary", "adults", "Вторник-Четверг-Суббота", "Вечером", "Merjen Akyyeva"],
  ["TOEFL Preparation, Spring 26", "Toefl", "adults", "Понедельник-Среда-Пятница", "Вечером", "Aylar Mehtiyeva"],
  ["Headway Elementary, Spring 26, Morning, TTS", "Elementary", "adults", "Вторник-Четверг-Суббота", "Утром", "Shirin Basarova"],
].map(([title, level, audience, schedule, shift, teacher], i) => ({
  id: i + 1,
  title: title as string,
  level: level as Course["level"],
  audience: audience as Course["audience"],
  schedule: schedule as Course["schedule"],
  shift: shift as Course["shift"],
  teacher: teacher as string,
  price: title.includes("TOEFL") ? 4400 : 2200,
  startDate: "Начался 9-ое Марта",
  description:
    "Современный курс английского языка по международным стандартам CEFR. Программа сочетает грамматику, лексику и живые темы, развивая уверенные коммуникативные навыки.",
  image: COVERS[i % COVERS.length],
}));

export const NEWS = [
  { title: "День открытых дверей в Kitap", desc: "Центр открыл двери для всех, кто хочет улучшить свой английский.", date: "14 October, 2025" },
  { title: "День вручения сертификатов выпускникам", desc: "Студенты завершили курсы и получили сертификаты Kitap.", date: "14 October, 2025" },
  { title: "Запуск детских курсов английского языка", desc: "Программа разработана специально для детей от 7 до 12 лет.", date: "14 October, 2025" },
  { title: "Библиотека Kitap пополнилась новыми книгами", desc: "Теперь доступно более 200 учебных изданий на английском языке.", date: "14 October, 2025" },
  { title: "Grammar Workshop для среднего уровня", desc: "Практическое занятие по грамматике в игровой форме.", date: "14 October, 2025" },
  { title: "Преподаватели прошли повышение квалификации", desc: "Kitap инвестирует в развитие своей команды.", date: "14 October, 2025" },
  { title: "Студенты Kitap сдали IELTS на высокий балл", desc: "Наши выпускники успешно прошли международный экзамен.", date: "14 October, 2025" },
  { title: "В Kitap стартовал новый Speaking Club", desc: "Еженедельные встречи для практики разговорного английского.", date: "14 October, 2025" },
  { title: "Дебат-клуб Kitap провёл первое заседание", desc: "Студенты обсуждали тему «Education for the Future».", date: "14 October, 2025" },
  { title: "Kitap запустил онлайн-платформу для студентов", desc: "Теперь все материалы и задания доступны онлайн.", date: "14 October, 2025" },
];

export const FAQ = [
  { q: "Сколько студентов в группе?", a: "От 8 до 20 студентов." },
  { q: "Какая продолжительность курса?", a: "Курс длится 3 месяца, по 3 занятия в неделю." },
  { q: "Выдается ли сертификат после окончания курса?", a: "Да! Сертификат выдается, если средний балл выше 60." },
  { q: "Сколько стоит курс?", a: "Все курсы английского языка стоят 2200 манат. Курсы IELTS, TOEFL и Digital Marketing стоят 4400 манат." },
  { q: "Что делать, если у преподавателя группа уже заполнена?", a: "В этом случае нужно выбрать другого преподавателя, у кого есть свободные места." },
  { q: "Что делать, если все группы заполнены?", a: "Вы можете оставить заявку, и если освободится место, мы обязательно сообщим вам." },
  { q: "Что такое стандарт CEFR?", a: "CEFR — это международная система оценки владения иностранным языком, от A1 до C2. Все наши курсы соответствуют этим уровням." },
];
