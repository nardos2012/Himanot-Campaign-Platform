// import i18n from "i18next";

// import {
//   initReactI18next,
// } from "react-i18next";

// const resources = {

//   en: {

//     translation: {

//       home: "Home",
//       about: "About",
//       news: "News",
//       events: "Events",
//       donate: "Donate",
//       join: "Join",
//       login: "Login",
//       logout: "Logout",
//       supporters: "Supporters",
//       donations: "Donations",
//       posts: "Posts",
//       adminEvents: "AdminEvents",

//       heroTitle:
//         "GOGOT PARTY",

//       heroSubtitle:
//         "Building a united, democratic, prosperous, and inclusive Ethiopia for all citizens.",

//       joinMovement:
//         "Join Movement",

//       supportCampaign:
//         "Support Campaign",

//       latestNews:
//         "Latest News",

//       upcomingEvents:
//         "Upcoming Events",

//       becomeVolunteer:
//         "Become Volunteer",

//       donateNow:
//         "Donate Now",

//     },

//   },

//   am: {

//     translation: {

//       home: "መነሻ",
//       about: "ስለ እኛ",
//       news: "ዜና",
//       events: "ዝግጅቶች",
//       donate: "ልገሳ",
//       join: "ይቀላቀሉ",
//       login: "ግባ",
//       logout: "ውጣ",
//       supporters: "ደጋፊዎች",
//       donations: "ልገሳዎች",
//       posts: "ልጥፎች",
//       adminEvents: "የተቆጣጣሪ ዝግጅቶች", 

//       heroTitle:
//         "ጎጎት ፓርቲ",

//       heroSubtitle:
//         "ለሁሉም ዜጎች የተባበረ፣ ዴሞክራሲያዊ፣ በልጽግና የተሞላ ኢትዮጵያ እንገንባ።",

//       joinMovement:
//         "ንቅናቄውን ይቀላቀሉ",

//       supportCampaign:
//         "ዘመቻውን ይደግፉ",

//       latestNews:
//         "የቅርብ ዜናዎች",

//       upcomingEvents:
//         "ቀጣይ ዝግጅቶች",

//       becomeVolunteer:
//         "በጎ ፈቃደኛ ይሁኑ",

//       donateNow:
//         "አሁን ይለግሱ",

//     },

//   },

// };

// i18n
//   .use(initReactI18next)
//   .init({

//     resources,

//     lng: "en",

//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false,
//     },

//   });

// export default i18n;

import i18n from "i18next";

import {
  initReactI18next,
} from "react-i18next";

import en from "./locales/en.json";
import am from "./locales/am.json";

i18n
  .use(initReactI18next)
  .init({

    resources: {

      en: {
        translation: en,
      },

      am: {
        translation: am,
      },

    },

    lng: "en",

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

  });

export default i18n;