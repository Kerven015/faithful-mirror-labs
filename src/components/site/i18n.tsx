import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "ru" | "en" | "tm";

type Dict = {
  nav: { about: string; courses: string; teachers: string; contact: string; mainMenu: string };
  langName: string;
  login: string;
  hero: { title: string; sound: string };
  courses: {
    title: string;
    subtitle: string;
    audAll: string;
    audKids: string;
    audTeens: string;
    audAdults: string;
    levelAll: string;
    teacherAll: string;
    daysAll: string;
    shiftsAll: string;
    days: { mwf: string; tts: string };
    shifts: { morning: string; afternoon: string; evening: string };
    levels: Record<string, string>;
    started: string;
    notFound: string;
    currency: string;
    cefrDesc: string;
  };
  teachers: { title: string; experience: string; experienceTag: string; load: string; years: (n: number) => string };
  about: {
    eyebrow: string;
    title: string;
    intro1: string;
    intro2: string;
    tabs: { title: string; body: string; bullets: string[] }[];
  };
  news: { title: string };
  faq: { eyebrow: string; title: string; subtitle: string; items: { q: string; a: string }[] };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    name: string;
    surname: string;
    message: string;
    send: string;
    sentTitle: string;
    sentSub: string;
    privacy1: string;
    privacy2: string;
  };
  footer: {
    tagline: string;
    nav: string;
    contacts: string;
    rights: string;
    privacy: string;
  };
  newsItems: { title: string; desc: string; date: string }[];
  downloadGuide: {
    title: string;
    subtitle: string;
    backHome: string;
    detected: string;
    desktopLabel: string;
    mobileLabel: string;
    desktopTitle: string;
    mobileTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    mobileNote: string;
    mobileOption1Title: string;
    mobileOption1Desc: string;
    mobileOption2Title: string;
    mobileOption2Desc: string;
    publishedTitle: string;
    publishedDesc: string;
  };
};

const ru: Dict = {
  nav: { about: "О нас", courses: "Курсы", teachers: "Преподаватели", contact: "Связаться с нами", mainMenu: "Главное меню" },
  langName: "Русский",
  login: "Войти",
  hero: { title: "Эффект начинается здесь — будь его частью с Kitap", sound: "Звук" },
  courses: {
    title: "Наши курсы предназначены для детей, подростков и взрослых",
    subtitle: "Мы обучаем английскому языку по международным стандартам CEFR, помогая вам пройти путь от новичка до свободного владения.",
    audAll: "Все",
    audKids: "Дети",
    audTeens: "Подростки",
    audAdults: "Взрослые",
    levelAll: "Все уровни",
    teacherAll: "Все преподаватели",
    daysAll: "Все дни",
    shiftsAll: "Все смены",
    days: { mwf: "Понедельник-Среда-Пятница", tts: "Вторник-Четверг-Суббота" },
    shifts: { morning: "Утром", afternoon: "Днём", evening: "Вечером" },
    levels: { Beginner: "Начальный", Elementary: "Элементарный", "Pre-intermediate": "Ниже среднего", Intermediate: "Средний", "Upper-intermediate": "Выше среднего", Advanced: "Продвинутый", Toefl: "TOEFL" },
    started: "Начался 9-ое Марта",
    notFound: "Курсы не найдены.",
    currency: "тмт",
    cefrDesc: "Современный курс английского языка по международным стандартам CEFR. Программа сочетает грамматику, лексику и живые темы, развивая уверенные коммуникативные навыки.",
  },
  teachers: {
    title: "Наши профессионалы помогут вам овладеть английским языком уверенно и с удовольствием",
    experience: "Опыт",
    experienceTag: "Весь опыт",
    load: "Нагрузка курса",
    years: (n) => `${n} ${n === 1 ? "год" : n < 5 ? "года" : "лет"}`,
  },
  about: {
    eyebrow: "Преимущества образовательного центра",
    title: "О центре Kitap",
    intro1: "Kitap Bilim Merkezi",
    intro2: " — это современный образовательный центр в Ашхабаде, где английский язык становится ключом к цифровому будущему. Наша цель — стать центром №1 в Туркменистане и установить новый стандарт качества образования.",
    tabs: [
      {
        title: "Учебный центр Kitap",
        body: "Учебный центр Kitap — это современная образовательная площадка, где каждый студент получает возможность раскрыть свой потенциал.",
        bullets: ["Индивидуальный подход к каждому студенту.", "Современные методы преподавания.", "Программы по мировым стандартам.", "Опытные преподаватели.", "Дружеская атмосфера."],
      },
      {
        title: "Наши курсы",
        body: "В Kitap мы предлагаем широкий выбор курсов, соответствующих современным образовательным требованиям.",
        bullets: ["Курсы английского для всех уровней.", "Подготовка к IELTS и TOEFL.", "Интенсивные курсы.", "Развитие коммуникативных навыков.", "Программы для всех возрастов."],
      },
      {
        title: "Почему выбирают нас",
        body: "Kitap стал выбором сотен студентов благодаря качеству образования и индивидуальному подходу.",
        bullets: ["Высокий уровень доверия.", "Современные материалы.", "Реальные результаты.", "Доступные цены.", "Положительные отзывы."],
      },
    ],
  },
  news: { title: "Последние новости и события" },
  faq: {
    eyebrow: "Часто задаваемые вопросы",
    title: "Вопрос-ответ",
    subtitle: "Есть вопросы? Ознакомьтесь с нашим списком часто задаваемых вопросов ниже.",
    items: [
      { q: "Сколько студентов в группе?", a: "От 8 до 20 студентов." },
      { q: "Какая продолжительность курса?", a: "Курс длится 3 месяца, по 3 занятия в неделю." },
      { q: "Выдается ли сертификат?", a: "Да, если средний балл выше 60." },
      { q: "Сколько стоит курс?", a: "Курсы английского — 2200 манат. IELTS/TOEFL — 4400 манат." },
      { q: "Если группа заполнена?", a: "Выберите другого преподавателя со свободными местами." },
      { q: "Если все группы заполнены?", a: "Оставьте заявку, мы сообщим о свободном месте." },
      { q: "Что такое CEFR?", a: "Международная система оценки от A1 до C2." },
    ],
  },
  contact: {
    title: "Связаться с нами",
    subtitle: "Мы всегда на связи и готовы ответить на любые вопросы — заполните форму ниже:",
    address: "Ашхабад, Туркменистан",
    phone: "+993 12 345 678",
    email: "info@kitap.tm",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    name: "Имя",
    surname: "Фамилия",
    message: "Сообщение",
    send: "Отправить сообщение",
    sentTitle: "Заявка успешно отправлена!",
    sentSub: "Мы свяжемся с вами в ближайшее время.",
    privacy1: "Отправляя сообщение, вы принимаете нашу ",
    privacy2: "Политику конфиденциальности",
  },
  footer: {
    tagline: "Современный образовательный центр в Ашхабаде. Английский язык по стандартам CEFR.",
    nav: "Навигация",
    contacts: "Контакты",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
  },
  newsItems: [
    { title: "День открытых дверей в Kitap", desc: "Центр открыл двери для всех желающих.", date: "14 октября 2025" },
    { title: "Вручение сертификатов выпускникам", desc: "Студенты завершили курсы Kitap.", date: "14 октября 2025" },
    { title: "Запуск детских курсов", desc: "Программа для детей 7–12 лет.", date: "14 октября 2025" },
    { title: "Библиотека пополнилась", desc: "Более 200 учебных изданий.", date: "14 октября 2025" },
    { title: "Grammar Workshop", desc: "Практическое занятие по грамматике.", date: "14 октября 2025" },
    { title: "Повышение квалификации преподавателей", desc: "Kitap инвестирует в команду.", date: "14 октября 2025" },
    { title: "Студенты сдали IELTS", desc: "Высокие баллы выпускников.", date: "14 октября 2025" },
    { title: "Speaking Club", desc: "Еженедельная практика разговорного английского.", date: "14 октября 2025" },
    { title: "Дебат-клуб", desc: "Тема: Education for the Future.", date: "14 октября 2025" },
    { title: "Онлайн-платформа Kitap", desc: "Все материалы доступны онлайн.", date: "14 октября 2025" },
  ],
  downloadGuide: {
    title: "Как скачать этот проект",
    subtitle: "Следуйте шагам ниже, чтобы сохранить весь исходный код в виде ZIP-архива.",
    backHome: "На главную",
    detected: "Обнаружено устройство:",
    desktopLabel: "Компьютер",
    mobileLabel: "Телефон",
    desktopTitle: "Инструкция для компьютера",
    mobileTitle: "Инструкция для телефона",
    step1Title: "Откройте редактор кода",
    step1Desc: "Нажмите на иконку редактора кода ( </> ) вверху окна предпросмотра.",
    step2Title: "Найдите кнопку загрузки",
    step2Desc: "В боковой панели слева прокрутите в самый низ списка файлов.",
    step3Title: "Скачайте ZIP-архив",
    step3Desc: 'Нажмите кнопку "Download codebase". Браузер сохранит весь проект в виде ZIP-файла.',
    mobileNote: "Прямая загрузка ZIP недоступна в мобильном редакторе.",
    mobileOption1Title: "Используйте компьютер",
    mobileOption1Desc: "Откройте этот проект в браузере на компьютере и выполните шаги для компьютера выше.",
    mobileOption2Title: "Подключите GitHub",
    mobileOption2Desc: "Нажмите кнопку Plus (+) в чате → GitHub → Connect project. После подключения вы сможете клонировать или скачать репозиторий с GitHub в любое время.",
    publishedTitle: "Уже опубликовано?",
    publishedDesc: "Если приложение уже опубликовано, вы также можете поделиться прямой ссылкой через меню Publish.",
  },
};

const en: Dict = {
  nav: { about: "About", courses: "Courses", teachers: "Teachers", contact: "Contact", mainMenu: "Main menu" },
  langName: "English",
  login: "Sign in",
  hero: { title: "The effect starts here — be a part of it with Kitap", sound: "Sound" },
  courses: {
    title: "Our courses are designed for children, teens and adults",
    subtitle: "We teach English following the CEFR international standards, taking you from beginner to fluent.",
    audAll: "All",
    audKids: "Kids",
    audTeens: "Teens",
    audAdults: "Adults",
    levelAll: "All levels",
    teacherAll: "All teachers",
    daysAll: "All days",
    shiftsAll: "All shifts",
    days: { mwf: "Mon-Wed-Fri", tts: "Tue-Thu-Sat" },
    shifts: { morning: "Morning", afternoon: "Afternoon", evening: "Evening" },
    levels: { Beginner: "Beginner", Elementary: "Elementary", "Pre-intermediate": "Pre-intermediate", Intermediate: "Intermediate", "Upper-intermediate": "Upper-intermediate", Advanced: "Advanced", Toefl: "TOEFL" },
    started: "Started March 9",
    notFound: "No courses found.",
    currency: "TMT",
    cefrDesc: "A modern English course based on CEFR standards. The programme combines grammar, vocabulary and real-life topics to build confident communication skills.",
  },
  teachers: {
    title: "Our professionals will help you master English with confidence and joy",
    experience: "Experience",
    experienceTag: "All experience",
    load: "Course load",
    years: (n) => `${n} ${n === 1 ? "year" : "years"}`,
  },
  about: {
    eyebrow: "Why choose our centre",
    title: "About Kitap",
    intro1: "Kitap Bilim Merkezi",
    intro2: " is a modern educational centre in Ashgabat where English becomes the key to a digital future. Our goal is to be the #1 centre in Turkmenistan and to set a new standard for quality education.",
    tabs: [
      {
        title: "Kitap Learning Centre",
        body: "Kitap is a modern educational space where every student can unlock their potential.",
        bullets: ["Personal approach for every student.", "Modern teaching methods.", "Programmes built on global standards.", "Experienced teachers.", "Friendly motivating atmosphere."],
      },
      {
        title: "Our courses",
        body: "Kitap offers a wide range of courses that meet today's educational demands.",
        bullets: ["English courses for all levels.", "IELTS and TOEFL preparation.", "Intensive Russian courses.", "Communication skills programmes.", "Programmes for kids, teens and adults."],
      },
      {
        title: "Why choose us",
        body: "Kitap is the choice of hundreds of students thanks to quality education and a personal approach.",
        bullets: ["High level of trust.", "Modern materials and tech.", "Real results within months.", "Affordable, flexible plans.", "Positive student reviews."],
      },
    ],
  },
  news: { title: "Latest news and events" },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Q & A",
    subtitle: "Have questions? Browse our list below — your answer might already be there!",
    items: [
      { q: "How many students per group?", a: "Between 8 and 20 students." },
      { q: "How long is a course?", a: "3 months, 3 lessons per week." },
      { q: "Do you give a certificate?", a: "Yes, if your average score is above 60." },
      { q: "How much does a course cost?", a: "English courses cost 2200 manat. IELTS, TOEFL and Digital Marketing cost 4400 manat." },
      { q: "What if a teacher's group is full?", a: "Pick another teacher with available seats." },
      { q: "What if all groups are full?", a: "Leave a request and we'll notify you when a seat opens." },
      { q: "What is CEFR?", a: "An international language proficiency scale from A1 to C2. All our courses follow it." },
    ],
  },
  contact: {
    title: "Get in touch",
    subtitle: "We're always available and happy to answer any questions about courses or studying — fill in the form below:",
    address: "Ashgabat, Turkmenistan",
    phone: "+993 12 345 678",
    email: "info@kitap.tm",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    name: "First name",
    surname: "Last name",
    message: "Message",
    send: "Send message",
    sentTitle: "Your request has been sent!",
    sentSub: "We'll get back to you shortly.",
    privacy1: "By sending you agree to our ",
    privacy2: "Privacy Policy",
  },
  footer: {
    tagline: "A modern educational centre in Ashgabat. English following CEFR international standards.",
    nav: "Navigation",
    contacts: "Contacts",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
  },
  newsItems: [
    { title: "Open day at Kitap", desc: "The centre opened its doors to everyone keen to improve their English.", date: "October 14, 2025" },
    { title: "Graduation certificates ceremony", desc: "Students completed their courses and received Kitap certificates.", date: "October 14, 2025" },
    { title: "New kids' English courses launched", desc: "A programme designed for children aged 7 to 12.", date: "October 14, 2025" },
    { title: "Library expanded with new books", desc: "Over 200 English-language editions are now available.", date: "October 14, 2025" },
    { title: "Grammar Workshop for intermediates", desc: "A practical, game-based grammar session.", date: "October 14, 2025" },
    { title: "Teachers completed training", desc: "Kitap invests in the growth of its team.", date: "October 14, 2025" },
    { title: "Kitap students scored high on IELTS", desc: "Our graduates passed the international exam with strong scores.", date: "October 14, 2025" },
    { title: "New Speaking Club at Kitap", desc: "Weekly meetups to practise spoken English.", date: "October 14, 2025" },
    { title: "First Debate Club session", desc: "Students discussed Education for the Future.", date: "October 14, 2025" },
    { title: "Kitap launched an online platform", desc: "All materials and assignments are now online.", date: "October 14, 2025" },
  ],
  downloadGuide: {
    title: "How to download this project",
    subtitle: "Follow the steps below to save the full source code as a ZIP file.",
    backHome: "Back to home",
    detected: "Detected device:",
    desktopLabel: "Desktop",
    mobileLabel: "Mobile",
    desktopTitle: "Desktop instructions",
    mobileTitle: "Mobile instructions",
    step1Title: "Open the Code Editor",
    step1Desc: "Click the Code Editor icon ( </> ) at the top of the preview window.",
    step2Title: "Find the download button",
    step2Desc: "In the file tree sidebar on the left, scroll all the way to the bottom.",
    step3Title: "Download the ZIP",
    step3Desc: "Click the \"Download codebase\" button. Your browser will save the entire project as a ZIP file.",
    mobileNote: "ZIP download is not available directly from the mobile editor.",
    mobileOption1Title: "Use a desktop browser",
    mobileOption1Desc: "Open this project on a computer and follow the desktop steps above.",
    mobileOption2Title: "Connect to GitHub",
    mobileOption2Desc: "Tap the Plus (+) button in chat → GitHub → Connect project. Once linked, you can clone or download the repository from GitHub at any time.",
    publishedTitle: "Already published?",
    publishedDesc: "If your app is already published, you can also share the live link with others from the Publish menu.",
  },
};

const tm: Dict = {
  nav: { about: "Biz hakda", courses: "Kurslar", teachers: "Mugallymlar", contact: "Habarlaşmak", mainMenu: "Baş menýu" },
  langName: "Türkmen",
  login: "Girmek",
  hero: { title: "Täsir şu ýerden başlanýar — Kitap bilen bile boluň", sound: "Ses" },
  courses: {
    title: "Kurslarymyz çagalar, ýetginjekler we ulular üçin",
    subtitle: "Iňlis dilini halkara CEFR ülňülerine görä öwredýäris — başlangyçdan erkin derejä çenli.",
    audAll: "Hemmesi",
    audKids: "Çagalar",
    audTeens: "Ýetginjekler",
    audAdults: "Ulular",
    levelAll: "Ähli derejeler",
    teacherAll: "Ähli mugallymlar",
    daysAll: "Ähli günler",
    shiftsAll: "Ähli wagtlar",
    days: { mwf: "Duş-Çar-Anna", tts: "Siş-Penş-Şenbe" },
    shifts: { morning: "Ertir", afternoon: "Gündiz", evening: "Agşam" },
    levels: { Beginner: "Başlangyç", Elementary: "Ilkinji", "Pre-intermediate": "Orta öň", Intermediate: "Orta", "Upper-intermediate": "Orta üst", Advanced: "Ýokary", Toefl: "TOEFL" },
    started: "9-njy mart başlandy",
    notFound: "Kurs tapylmady.",
    currency: "TMT",
    cefrDesc: "CEFR halkara ülňülerine esaslanýan döwrebap iňlis dili kursy. Maksatnama grammatikany, sözlügi we durmuşy temalary birleşdirýär.",
  },
  teachers: {
    title: "Hünärmenlerimiz iňlis dilini ynam bilen we lezzet bilen öwrenmäge kömek eder",
    experience: "Tejribe",
    experienceTag: "Ähli tejribe",
    load: "Kurs ýüki",
    years: (n) => `${n} ýyl`,
  },
  about: {
    eyebrow: "Bilim merkeziniň artykmaçlyklary",
    title: "Kitap hakda",
    intro1: "Kitap Bilim Merkezi",
    intro2: " — bu Aşgabatdaky döwrebap bilim merkezi bolup, iňlis dili sanly geljegiň açary bolýar. Maksadymyz — Türkmenistanda 1-nji belgili merkez bolmak.",
    tabs: [
      {
        title: "Kitap Okuw Merkezi",
        body: "Kitap her bir talybyň mümkinçiligini açyp biljek döwrebap bilim meýdançasydyr.",
        bullets: ["Her talyba aýratyn çemeleşme.", "Döwrebap okuw usullary.", "Halkara ülňülerine laýyk maksatnamalar.", "Tejribeli mugallymlar.", "Dostlukly atmosfera."],
      },
      {
        title: "Kurslarymyz",
        body: "Kitap döwrebap talaplara laýyk gelýän giň kurslar hödürleýär.",
        bullets: ["Ähli derejeler üçin iňlis dili.", "IELTS we TOEFL taýýarlygy.", "Çalt netijeli intensiw kurslar.", "Aragatnaşyk başarnyklary.", "Çagalar, ýetginjekler we ulular üçin."],
      },
      {
        title: "Näme üçin bizi saýlaýarlar",
        body: "Kitap ýüzlerçe talybyň saýlawy boldy — hil we şahsy çemeleşme sebäpli.",
        bullets: ["Ýokary ynam derejesi.", "Döwrebap materiallar.", "Hakyky netijeler.", "Elýeterli bahalar.", "Oňyn synlar."],
      },
    ],
  },
  news: { title: "Soňky habarlar we wakalar" },
  faq: {
    eyebrow: "Köp berilýän soraglar",
    title: "Sorag-jogap",
    subtitle: "Soraglaryňyz barmy? Aşakdaky sanawda jogap tapyp bilersiňiz.",
    items: [
      { q: "Toparda näçe talyp bar?", a: "8-den 20-ä çenli talyp." },
      { q: "Kurs näçe wagt dowam edýär?", a: "3 aý, hepdede 3 sapak." },
      { q: "Şahadatnama berilýärmi?", a: "Hawa, ortaça baha 60-dan ýokary bolsa." },
      { q: "Kursuň bahasy näçe?", a: "Iňlis dili kurslary 2200 manat. IELTS/TOEFL 4400 manat." },
      { q: "Mugallymyň topary doly bolsa?", a: "Boş ýeri bolan başga mugallymy saýlaň." },
      { q: "Ähli toparlar doly bolsa?", a: "Arza goýuň, boş ýer çykanda habar bereris." },
      { q: "CEFR näme?", a: "Daşary ýurt dili derejesini A1-den C2-ä çenli ölçeýän halkara ulgamy." },
    ],
  },
  contact: {
    title: "Biz bilen habarlaşyň",
    subtitle: "Biz hemişe siziň bilen — okuw barada ähli soraglara jogap berýäris. Aşakdaky formany dolduryň:",
    address: "Aşgabat, Türkmenistan",
    phone: "+993 12 345 678",
    email: "info@kitap.tm",
    addressLabel: "Salgy",
    phoneLabel: "Telefon",
    emailLabel: "E-poçta",
    name: "At",
    surname: "Familiýa",
    message: "Habar",
    send: "Habar ibermek",
    sentTitle: "Arza üstünlikli iberildi!",
    sentSub: "Tiz wagtda siziň bilen habarlaşarys.",
    privacy1: "Iberip, ",
    privacy2: "Gizlinlik syýasatymyzy",
  },
  footer: {
    tagline: "Aşgabatdaky döwrebap bilim merkezi. CEFR halkara ülňülerinde iňlis dili.",
    nav: "Nawigasiýa",
    contacts: "Habarlaşmak",
    rights: "Ähli hukuklar goralan.",
    privacy: "Gizlinlik syýasaty",
  },
  newsItems: [
    { title: "Kitapda açyk gapylar güni", desc: "Merkez iňlis dilini gowulandyrmak isleýänlere açyk.", date: "14 oktýabr 2025" },
    { title: "Şahadatnama gowşuryş dabarasy", desc: "Talyplar Kitap şahadatnamalaryny aldylar.", date: "14 oktýabr 2025" },
    { title: "Çagalar üçin täze kurslar", desc: "7-12 ýaş çagalar üçin maksatnama.", date: "14 oktýabr 2025" },
    { title: "Kitaphana täze kitaplar bilen", desc: "200-den gowrak iňlis dilindäki neşir.", date: "14 oktýabr 2025" },
    { title: "Grammatika seminary", desc: "Oýun görnüşinde amaly sapak.", date: "14 oktýabr 2025" },
    { title: "Mugallymlar hünär ýokarlandyryş", desc: "Kitap toparyna goşant goşýar.", date: "14 oktýabr 2025" },
    { title: "Talyplar IELTS-de ýokary baha aldy", desc: "Uçurymlarymyz halkara synagdan üstünlikli geçdi.", date: "14 oktýabr 2025" },
    { title: "Speaking Club başlandy", desc: "Hepdelik gepleşik tejribesi.", date: "14 oktýabr 2025" },
    { title: "Debate Club ilkinji ýygnak", desc: "Tema: Education for the Future.", date: "14 oktýabr 2025" },
    { title: "Onlaýn platforma açyldy", desc: "Ähli materiallar onlaýn elýeterli.", date: "14 oktýabr 2025" },
  ],
  downloadGuide: {
    title: "Bu taslamany näme ýüklemeli",
    subtitle: "Doly çeşme koduny ZIP faýl hökmünde ýatda saklamak üçin aşakdaky ädimleri ýerine ýetiriň.",
    backHome: "Baş sahypa",
    detected: "Anykulan enjamyňyz:",
    desktopLabel: "Kompyuter",
    mobileLabel: "Telefon",
    desktopTitle: "Kompyuter üçin görkezme",
    mobileTitle: "Telefon üçin görkezme",
    step1Title: "Kod redaktoruny açyň",
    step1Desc: "Öňünden görmek penjiresiniň ýokarsyndaky kod redaktorunyň nyşanyna ( </> ) basyň.",
    step2Title: "Ýükleme düwmesini tapyň",
    step2Desc: "Çepdäki faýl agajy panelinde aşak tarapa çemenligi ýokarylyk bilen aşak sürüň.",
    step3Title: "ZIP faýlyny ýükleň",
    step3Desc: '"Download codebase" düwmesine basyň. Brauzeriňiz taslamanyň tutdygyny ZIP faýl hökmünde ýatda saklar.',
    mobileNote: "ZIP faýlyny göni telefon redaktorundan ýüklemek mümkin däl.",
    mobileOption1Title: "Kompyuter brauzerini ulaný",
    mobileOption1Desc: "Bu taslamany kompyuterdeki brauzerde açyň we ýokardaky kompyuter ädimlerini ýerine ýetiriň.",
    mobileOption2Title: "GitHub baglaň",
    mobileOption2Desc: "Çatdaky Plus (+) düwmesine basyň → GitHub → Connect project. Baglanyşykdan soň, GitHub-dan repozitoriýany islän wagtyňyz klonlap ýa-da ýükläp bilersiňiz.",
    publishedTitle: "Eýýäm çap edildimi?",
    publishedDesc: "Programma eýýäm çap edilse, Publish menýusy arkaly beýlekiler bilen göni çeligi paýlaşyp bilersiňiz.",
  },
};

const DICTS: Record<Lang, Dict> = { ru, en, tm };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");
  return <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "tm", label: "Türkmen" },
];
