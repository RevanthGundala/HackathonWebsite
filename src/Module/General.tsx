import hackathonLogo from "./Assets/hackathonLogo.png";

// Importing all sponsors logos from Assets
/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */
//
// TODO: After meeting
// finish awards/bounties
// finish judges
// add link to hacker form
// add link to devfolio

import boy from "./Assets/boy.png";
import foundation from "./Assets/sponsorsLogos/Sui-Foundation.png";
import sui from "./Assets/sponsorsLogos/sui-logo.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import ACF from "./Assets/sponsorsLogos/ACF.png";
import cfc from "./Assets/sponsorsLogos/cfc.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import egg from "./Assets/sponsorsLogos/egg.png";
import glimpse from "./Assets/sponsorsLogos/glimpse.png";
import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
import ll from "./Assets/sponsorsLogos/ll.png";
import qoom from "./Assets/sponsorsLogos/qoom.svg";
import Replit from "./Assets/sponsorsLogos/replit.png";
import sublime from "./Assets/sponsorsLogos/sublime.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import lyin from "./Assets/teami/lyin.jpg";

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import zoha from "./Assets/teami/zoha.png";
const name = "ASU x SUI Hackathon";

const TOP_SECTION = {
  TITLE: name,
  Typed_effect: ["3 days", "$5000+ in prizes"],
  SHORT_DESCRIPTION:
    "Join us on March 29th for 3 days of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.gg/7RqH3kKF",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u",
};

const SOCIALS = {
  instagram: "https://www.instagram.com/blockchain.at.asu/",
  discord: "https://discord.gg/7RqH3kKF",
  linkedin: "https://www.linkedin.com/company/blockchain-at-asu/",
  twitter: "https://twitter.com/blockchainASU",
  devpost: "",
  email: "blockchainatasu@gmail.com",
};

const MIDDLE_SECTION = {
  TITLE: `What is the ${name}?`,
  LONG_DESCRIPTION: `The ${name} is a weekend long blockchain hackathon which will be held on March 29-31. We call for hackers, artists, coders, and designers to take a part to win awesome prizes. Throughout the weekend, hackers at the ${name} will have unique opportunities to learn from each other trying hands in new technologies. This hackathon is an initiative a part of the SUI global hackathon. More information can be found at https://sui.io/overflow`,
  LOGO: sui,
};

const FOOTER = {
  /*VOLUNTEERING_FORM: {
    required: true,
    src: 'https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u'
  },*/
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u",
  },
  Privacy_policy: {
    required: true,
    src: "",
  },
  Terms_of_use: {
    required: true,
    src: "",
  },
};

/** SCHEDULE
 *
 * INSTRUCTIONS
 *
 * Date format : 8-11-2021, 18-11-2021 (without trailing zeros)
 */

const calenderStartingDate = {
  month: 3,
  year: 2024,
};

const schedule = [
  {
    day: "29-3-2024",
    events: [
      {
        title: "Intro to Hackathon",
        timings: "3 Pm",
        link: "https://google.com",
      },
      {
        title: "Hacking Begins",
        timings: "4 Pm",
        link: "https://google.com",
      },
      {
        title: "Dinner",
        timings: "7 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "30-3-2024",
    events: [
      {
        title: "Lunch",
        timings: "12 Pm",
        link: "https://google.com",
      },
      {
        title: "Dinner",
        timings: "7 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "31-3-2024",
    events: [
      {
        title: "Projects Due",
        timings: "11 Am",
        link: "https://google.com",
      },
      {
        title: "Closing Ceremony",
        timings: "12 Pm",
        link: "https://google.com",
      },
    ],
  },
  {
    day: "5-4-2024",
    events: [
      {
        title: "Bounties due",
        timings: "6 Pm",
        link: "https://google.com",
      },
    ],
  },
];

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Awardinfo = [
  [
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Gold",
      content: "The best project of the hackathon",
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Silver",
      content: "The second best project of the hackathon",
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Bronze",
      content: "The third best project of the hackathon",
    },
  ],
];

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Build best defi protocol",
      content:
        "First Overall prize will be given to a project that outstands all other submissions",
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Build best nft project",
      content:
        "Second Overall prize will be given to the second best project of the hackathon",
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Build best blockchain game",
      content:
        "Best third overall project of the hackathon will win some awesome prizes",
    },
  ],
  [
    //Array 2
    {
      icon: <i className="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team",
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% ",
    },
    {
      icon: <i className=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track",
    },
  ],
  [
    //Array 3
    {
      icon: <i className="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category",
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later",
    },
  ],
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

/*
const TeamInfo = [
  [
    //Array 1
    {
      Name: 'Rehan',
      role: 'Organizer',
      github: 'https://github.com/Limbo-Hacks/Hackathon-website-template',
      linkedin: '',
      img: me
    },
    {
      Name: 'Moon',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: moon
    },
    {
      Name: 'Erika',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: 'Lyanola',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: lyin
    },
    {
      Name: 'Zoheb',
      role: 'Organizer',
      github: '',
      linkedin: '',
      img: zoha
    }
  ]
];
*/
const JudgesInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me,
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: moon,
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah,
    },
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: lyin,
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: zoha,
    },
  ],
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [foundation];

// const sponsorLogos = [
//   [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
//   [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
//   [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
//   [{ src: egg }, { src: ll }, { src: ACF }], //Array 4
// ];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
          'A hackathon is an event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.',
      },
      {
        label: "Who can attend?",
        content: `${name} is free and open to everyone!`,
      },
      {
        label: "I am a first time hacker, what should I do?",
        content:
          "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general.",
      },
      {
        label: "How team formation works?",
        content:
          "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!",
      },
      {
        label: "What is Sui?",
        content:
          "Sui is a Layer 1 blockchain that aims to be fast, secure, and decentralized. The Sui blockchain initially was developed by the team at Meta (Facebook), before they left to create their own company - Mysten Labs. You can find more about Mysten and Sui here: https://mystenlabs.com/ and https://sui.io/",
      },
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content:
          "All you need is to fill our form above and join Discord, we will guide you through everything there",
      },
      {
        label: "Where is the hackathon taking place?",
        content: "The Memorial Union at the ASU Tempe Campus",
      },
      {
        label: "Will there be food?",
        content: "Yes! Meals, snacks, and drinks will be provided.",
      },
      {
        label: "What is a blockchain?",
        content:
          "A blockchain is a digitally distributed, decentralized, public ledger that exists across a network.",
      },
      {
        label: "I have more questions?",
        content: "Make sure to join our Discord if you have more questions!",
      },
    ],
  ],
];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  Awardinfo,
  sponsorLogos,
  /*TeamInfo*/
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
};
