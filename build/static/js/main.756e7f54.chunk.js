(this["webpackJsonphackathon-website-template"]=this["webpackJsonphackathon-website-template"]||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(15),i=n.n(s),r=n.p+"static/media/loader.ed450620.gif",o=(n(34),n(0));function l(e){return Object(o.jsx)("div",{class:"load",children:Object(o.jsx)("img",{src:r,alt:"loader"})})}var d=n(10),j=n(29),h=n(3),b=n(11);var m=n(9),x=n(20),f=n(8);n(36);function p(e){return Object(o.jsxs)("div",{className:"container ".concat(e.type),style:{top:e.top,left:e.left},children:[Object(o.jsx)("div",{className:"bird-container bird-container--one",children:Object(o.jsx)("div",{className:"bird bird--one"})}),Object(o.jsx)("div",{className:"bird-container bird-container--two",children:Object(o.jsx)("div",{className:"bird bird--two"})}),Object(o.jsx)("div",{className:"bird-container bird-container--three",children:Object(o.jsx)("div",{className:"bird bird--three"})}),Object(o.jsx)("div",{className:"bird-container bird-container--four",children:Object(o.jsx)("div",{className:"bird bird--four"})})]})}n(37);class u extends c.a.Component{constructor(e){super(e),this.state={height:0}}componentDidMount(){window.setTimeout((()=>{const e=i.a.findDOMNode(this).querySelector(".panel__inner").scrollHeight;this.setState({height:e})}),333)}render(){const{label:e,content:t,activeTab:n,index:a,activateTab:c}=this.props,{height:s}=this.state,i=n===a,r={height:"".concat(i?s:0,"px")};return Object(o.jsxs)("div",{className:"panel",role:"tabpanel","aria-expanded":i,children:[Object(o.jsx)("button",{className:"panel__label",role:"tab",onClick:c,children:e}),Object(o.jsx)("div",{className:"panel__inner",style:r,"aria-hidden":!i,children:Object(o.jsx)("p",{className:"panel__content",children:t})})]})}}class g extends c.a.Component{constructor(e){super(e),this.state={activeTab:1},this.activateTab=this.activateTab.bind(this)}activateTab(e){this.setState((t=>({activeTab:t.activeTab===e?-1:e})))}render(){const{panels:e}=this.props,{activeTab:t}=this.state;return Object(o.jsx)("div",{className:"accordion",role:"tablist",children:e.map(((e,n)=>Object(o.jsx)(u,{activeTab:t,index:n,...e,activateTab:this.activateTab.bind(null,n)},n)))})}}n(38);var O=n.p+"static/media/icons8-instagram.89b88306.svg",y=n.p+"static/media/icons8-discord.4ccbeee9.svg",v=n.p+"static/media/icons8-linkedin-2.524f8b6e.svg",w=n.p+"static/media/icons8-mail.650ff70b.svg",N=n.p+"static/media/icons8-dev-post.15a5555a.svg",k=n.p+"static/media/Privacy policy.9854a808.pdf",_=n.p+"static/media/Terms of use.c2255556.pdf",A=n.p+"static/media/icons8-twitter.0521e950.svg",T=n.p+"static/media/boy.9e16116b.png",E=n.p+"static/media/Sui-Foundation.6b42f8cf.png",S=n.p+"static/media/sui-logo.1f61384e.png",D=n.p+"static/media/boscovic.1b3229a1.jpeg",R=n.p+"static/media/moon.73697ab9.png",C=n.p+"static/media/Ryah.6f561055.jpg";const I="ASU x SUI Hackathon",L={TITLE:I,Typed_effect:["3 days","$5000+ in prizes"],SHORT_DESCRIPTION:"Join us on March 29th for 3 days of creation, innovation, & fun.",IMG_SRC:T,DISCORD_LINK:"https://discord.gg/7RqH3kKF",JUDGES_FORM_LINK:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",HACKERS_REGISTRATION_FORM_LINK:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"},M={instagram:"https://www.instagram.com/blockchain.at.asu/",discord:"https://discord.gg/7RqH3kKF",linkedin:"https://www.linkedin.com/company/blockchain-at-asu/",twitter:"https://twitter.com/blockchainASU",devpost:"https://devpost.com/blockchainatasu?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",email:"blockchainatasu@gmail.com"},F={TITLE:"What is the ".concat(I,"?"),LONG_DESCRIPTION:"The ".concat(I," is a weekend long blockchain hackathon which will be held on March 29-31. We call for hackers, artists, coders, and designers to take a part to win awesome prizes. Throughout the weekend, hackers at the ").concat(I," will have unique opportunities to learn from each other trying hands in new technologies. This hackathon is an initiative a part of the SUI global hackathon. More information can be found at https://sui.io/overflow"),LOGO:S},P={JOIN_TEAM:{required:!0,src:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"},Privacy_policy:{required:!0,src:""},Terms_of_use:{required:!0,src:""}},U=[{day:"29-3-2024",events:[{title:"Intro to Hackathon",timings:"3 Pm",link:"https://google.com"},{title:"Hacking Begins",timings:"4 Pm",link:"https://google.com"},{title:"Dinner",timings:"7 Pm",link:"https://google.com"}]},{day:"30-3-2024",events:[{title:"Lunch",timings:"12 Pm",link:"https://google.com"},{title:"Dinner",timings:"7 Pm",link:"https://google.com"}]},{day:"31-3-2024",events:[{title:"Lunch",timings:"12 Pm",link:"https://google.com"},{title:"Hacking Ends",timings:"2 Pm",link:"https://google.com"},{title:"Winners Announced",timings:"3 Pm",link:"https://google.com"}]}],W=[[{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-medal",style:{color:"#FFD43B"}}),type:"Gold ($1500)",content:"The best project of the hackathon"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-medal",style:{color:"#b9b4a7"}}),type:"Silver ($1250)",content:"The second best project of the hackathon"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-medal",style:{color:"#bb922a"}}),type:"Bronze ($1000)",content:"The third best project of the hackathon"}]],B=[[{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-chart-line",style:{color:"#63E6BE"}}),type:"Best DeFi protocol ($150)",content:"The best DeFi protocol will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-network-wired"}),type:"Best Infra project ($150)",content:"The best infrastructure project will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-gamepad",style:{color:"#74C0FC"}}),type:"Best Gaming project ($150)",content:"The best gaming project will win this category"}],[{icon:Object(o.jsx)("i",{className:"fas fa-4x eighth fa-robot",style:{color:"#ba380d"}}),type:"Best use of AI ($150)",content:"The best use of AI will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-mobile",style:{color:"#000000"}}),type:"Best Mobile App ($150)",content:"The best mobile app will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-book-open",style:{color:"#d4d72d"}}),type:"Best UI/UX ($150)",content:"The best UI/UX will win this category"}],[{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-star",style:{color:"#273959"}}),type:"Judges Favorite ($100)",content:"Favorite project of one judge will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-star",style:{color:"#273959"}}),type:"Judges Favorite ($100)",content:"Favorite project of one judge will win this category"},{icon:Object(o.jsx)("i",{className:"first fas fa-4x fa-star",style:{color:"#273959"}}),type:"Judges Favorite ($100)",content:"Favorite project of one judge will win this category"}]],H=[[{Name:"hey",role:"Dragan Boscovic",github:"",linkedin:"https://www.linkedin.com/in/draganboscovic/",img:D},{Name:"Moon",role:"Organizer",github:"",linkedin:"",img:R},{Name:"Ryah Garcia",role:"Organizer",github:"",linkedin:"",img:C}]],z=[E],q=[[[{label:"What is a hackathon?",content:'A hackathon is an event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'},{label:"Who can attend?",content:"".concat(I," is free and open to everyone!")},{label:"I am a first time hacker, what should I do?",content:"No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."},{label:"How team formation works?",content:"You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"},{label:"What is Sui?",content:"Sui is a Layer 1 blockchain that aims to be fast, secure, and decentralized. The Sui blockchain initially was developed by the team at Meta (Facebook), before they left to create their own company - Mysten Labs. You can find more about Mysten and Sui here: https://mystenlabs.com/ and https://sui.io/"}],[{label:"How to register myself in the hackathon?",content:"All you need is to fill our form above and join Discord, we will guide you through everything there"},{label:"Where is the hackathon taking place?",content:"The Memorial Union at the ASU Tempe Campus"},{label:"Will there be food?",content:"Yes! Meals, snacks, and drinks will be provided."},{label:"What is a blockchain?",content:"A blockchain is a digitally distributed, decentralized, public ledger that exists across a network."},{label:"I have more questions?",content:"Make sure to join our Discord if you have more questions!"}]]];var J=n(25),$=n.n(J);n(39);function G(){return Object(o.jsx)("div",{className:"typing-div",children:Object(o.jsx)("h1",{children:Object(o.jsx)($.a,{strings:L.Typed_effect,typeSpeed:80,loop:!0})})})}n(40);function K(e){return Object(o.jsxs)("button",{className:e.class,children:[Object(o.jsx)("i",{className:e.ico}),e.type,Object(o.jsx)("div",{className:"overlay",children:Object(o.jsx)("div",{className:"overlay-text",children:e.overlay})})]})}function V(){return Object(o.jsxs)("div",{className:"AboutMe",children:[Object(o.jsx)("h2",{children:L.TITLE}),Object(o.jsx)(G,{})]})}function Q(){return Object(o.jsxs)("div",{className:"Myinfo",children:[Object(o.jsx)(V,{}),Object(o.jsxs)("p",{children:[" ",L.SHORT_DESCRIPTION]}),Object(o.jsx)("div",{className:"join_dis",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.discord,children:Object(o.jsx)(K,{ico:"fab fa-2x fa-discord",class:"join_disco",type:"Join our discord",overlay:"Click the link"})})}),Object(o.jsx)("div",{className:"buttom-group",children:Object(o.jsxs)("a",{href:L.HACKERS_REGISTRATION_FORM_LINK,children:[" ",Object(o.jsx)(K,{class:"sponsor_btn",type:"Register ",overlay:"Hackers registration"})]})})]})}n.p;function Y(){const[e,t]=Object(a.useState)(!1),[n,c]=Object(a.useState)(!0);Object(a.useEffect)((()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)})),[]);const s=e=>{window.scrollY>2800?t(!0):window.scrollY<2800&&t(!1)};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"social-icons-container",children:[Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.instagram,children:Object(o.jsx)("img",{src:O,alt:""})})}),Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.discord,children:Object(o.jsx)("img",{src:y,alt:""})})}),Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.linkedin,children:Object(o.jsx)("img",{src:v,alt:""})})}),Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.email,children:Object(o.jsx)("img",{src:w,alt:""})})}),Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.twitter,children:Object(o.jsx)("img",{src:A,alt:""})})}),Object(o.jsx)("div",{className:"social-icon",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.devpost,children:Object(o.jsx)("img",{src:N,alt:""})})})]}),Object(o.jsx)("div",{className:"Register_a",children:Object(o.jsx)("a",{href:L.HACKERS_REGISTRATION_FORM_LINK,children:Object(o.jsx)(K,{type:"Register",overlay:"Fill the form"})})}),Object(o.jsxs)("div",{className:"footer_info",children:[Object(o.jsxs)("p",{children:["Contact us"," ",Object(o.jsx)("a",{href:M.email,children:Object(o.jsx)("em",{children:M.email})})," "]}),P.Privacy_policy.required&&Object(o.jsx)("a",{href:k,download:!0,target:"blank",className:"privacy-policy",children:Object(o.jsx)("p",{children:"Privacy Policy"})}),P.Terms_of_use.required&&Object(o.jsx)("a",{href:_,download:!0,target:"blank",className:"privacy-policy",children:Object(o.jsx)("p",{children:"Terms of Use"})}),Object(o.jsx)("p",{children:"Made with \u2764\ufe0f"})]})]})})}n(41);function Z(){return Object(o.jsxs)("div",{className:"LogoSectionAbout",children:[Object(o.jsx)("h1",{children:F.TITLE}),Object(o.jsxs)("p",{children:[F.LONG_DESCRIPTION," "]})]})}function X(){return Object(o.jsx)("div",{className:"logoS",children:Object(o.jsx)("img",{className:"Logo",src:F.LOGO,alt:"Limbohacks"})})}n(42);function ee(){return Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("p",{children:"Follow us on social media for updates"}),Object(o.jsx)("div",{className:"single",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.instagram,children:Object(o.jsx)("i",{class:"fab fa-3x fa-instagram"})})}),Object(o.jsx)("div",{className:"single",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.discord,children:Object(o.jsx)("i",{class:"fab fa-3x fa-discord"})})}),Object(o.jsx)("div",{className:"single",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.linkedin,children:Object(o.jsx)("i",{class:"fab fa-3x fa-linkedin-in"})})}),Object(o.jsx)("div",{className:"single",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.twitter,children:Object(o.jsx)("i",{class:"fab fa-3x fa-twitter"})})}),Object(o.jsx)("div",{className:"single",children:Object(o.jsx)("a",{rel:"noreferrer",target:"_blank",href:M.devpost,children:Object(o.jsx)("i",{class:"fab fa-3x fa-dev"})})})]})}n(43);function te(e){return Object(o.jsx)("div",{className:"Heading",children:Object(o.jsx)("h1",{children:e.type})})}function ne(e){return Object(o.jsxs)("div",{className:"Prizes",children:[e.icon,Object(o.jsx)("h2",{children:e.type}),Object(o.jsx)("p",{children:e.content})]})}n(44);function ae(){return Object(o.jsx)("h1",{className:"shead",children:"Sponsors & Partners"})}n(45);function ce(e){let{info:t}=e;const{github:n,role:a,name:c,img:s,linkedin:i}=t;return Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:s,alt:"Limbo hack"}),Object(o.jsxs)("div",{className:"members-link",children:[Object(o.jsx)("h3",{children:c}),Object(o.jsx)("p",{children:a}),Object(o.jsx)("a",{href:i,children:Object(o.jsx)("i",{className:"fab fa-2x fa-linkedin"})})]})]})}const se=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ie=["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"],re={index:1,selectedData:[],selectedEvent:{},dates:[],month:3,year:2024},oe=(e,t)=>{switch(t.type){case"UPDATE_CALENDER_VIEW":return{...e,index:t.data};case"SHOW_EVENTS_FOR_SELECTED_DATE":return{...e,selectedData:t.data};case"UPDATE_DATES":return{...e,dates:t.data};case"MONTH_FORWARD":return 12===e.month?{...e,month:1,year:e.year+1}:{...e,month:e.month+1};case"MONTH_BACKWARD":return 1===e.month?{...e,month:12,year:e.year-1}:{...e,month:e.month-1};default:return e}},le=Object(a.createContext)(re),de=e=>{let{children:t}=e;const[n,c]=Object(a.useReducer)(oe,re),s=Object(a.useMemo)((()=>[n,c]),[n]);return Object(o.jsx)(le.Provider,{value:s,children:t})};var je;const he=b.a.div(je||(je=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-direction: ",";\n  flex-direction: ",";\n  justify-content: space-between;\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  justify-content: ",";\n  align-items: center;\n  align-items: ",";\n  align-items: ",";\n  align-items: ",";\n  "," {fatal: unable to access 'https://github.com/Abusayid693/Type-writer.git/': The requested URL returned error: 403\n    flex-direction: ",";\n    flex-direction: ",";\n  }\n"])),(e=>{let{flexRow:t}=e;return t&&"row"}),(e=>{let{flexCol:t}=e;return t&&"column"}),(e=>{let{justifyBtw:t}=e;return t&&"space-between"}),(e=>{let{justifyAround:t}=e;return t&&"space-around"}),(e=>{let{justifyFlexStart:t}=e;return t&&"flex-start"}),(e=>{let{justifyFlexEnd:t}=e;return t&&"flex-end"}),(e=>{let{justifyStart:t}=e;return t&&"start"}),(e=>{let{justifyEnd:t}=e;return t&&"end"}),(e=>{let{justifyAround:t}=e;return t&&"space-around"}),(e=>{let{justifyCenter:t}=e;return t&&"center"}),(e=>{let{alignStart:t}=e;return t&&"flex-start"}),(e=>{let{alignCenter:t}=e;return t&&"center"}),(e=>{let{alignEnd:t}=e;return t&&"flex-end"}),"@media only screen and (min-width: 992px)",(e=>{let{flexRowLg:t}=e;return t&&"row"}),(e=>{let{flexColLg:t}=e;return t&&"column"})),be=(e,t,n)=>{let a=[];const[c,s,i]=(e=>{const[t,n,a]=[new Date(e.year,e.month-1,1),new Date(e.year,e.month,0),new Date(e.year,e.month-1,0)],[c,s,i,r]=[t.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n.getDate(),a.getDate()],o=se.indexOf(c.split(",")[0]);return console.log(c+" - "+s+"- "+i),console.log("Padding days :",o),[i,o,r]})(e);for(let r=1;r<=c+s;r++)if(r>s){const t=r-s,c=e.month,i=e.year,o="".concat(t,"-").concat(c,"-").concat(i);let l=n.find((e=>e.day===o));l?(console.log("Find date in :",l),a.push({day:r-s,event:!0,dumpDay:!1,events:l.events})):a.push({day:r-s,event:!1,dumpDay:!1,events:[]})}else a.push({day:i-s+r,event:!1,dumpDay:!0,events:[]});t({type:"UPDATE_DATES",data:a})};var me,xe,fe,pe,ue;const ge=b.a.div(me||(me=Object(d.a)(['\n  width: 100%;\n  min-height: 450px;\n  max-height: 520px;\n\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0px 1px 7px #ffd3cc;\n\n  margin: 20px 0;\n\n  .card-top {\n    background-color: #b2b2b2;\n    height: 80px;\n    border-radius: 8px 8px 0 0;\n    padding: 0 5%;\n    overflow: auto;\n\n    &-inner {\n      width: 20%;\n\n      &-item {\n        background: #bbbbbb;\n        width: 35px;\n        height: 35px;\n        border-radius: 50%;\n        cursor: pointer;\n        & img {\n          width: 95%;\n        }\n      }\n\n      @media only screen and (max-width: 450px) {\n        width: 30%;\n      }\n    }\n  }\n  .card-body {\n    display: grid;\n    grid-template-columns: auto auto auto auto auto auto auto;\n\n    overflow: scroll;\n\n    &-header {\n      width: 45px;\n      height: 45px;\n      border-radius: 8px;\n    }\n    &-inner {\n      width: 45px;\n      height: 45px;\n      border-radius: 8px;\n      margin: 10px 4px;\n      background: #fff;\n      color: #e0e0e0;\n      &__active {\n        transition: 0.2s;\n        color: #241b5b;\n        cursor: pointer;\n        p {\n          font-weight: 600;\n          position: relative;\n        }\n        &:hover {\n          background: #ff4a6f;\n          box-shadow: 0px 1px 5px #ff4a6f;\n          color: white;\n        }\n        &__event {\n          &:after {\n            position: absolute;\n            content: "";\n            width: 6px;\n            height: 6px;\n            background-color: #ff4a6f;\n            bottom: -5px;\n            left: 0;\n            right: 0;\n            margin-left: auto;\n            margin-right: auto;\n            border-radius: 50%;\n          }\n        }\n      }\n    }\n  }\n']))),Oe=b.a.div(xe||(xe=Object(d.a)(["\n  box-shadow: 0px 1px 5px rgba(167, 167, 167, 0.15);\n\n  margin: 10px 0px;\n  padding: 0 10px;\n  border: none;\n\n  background: #fff;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  color: black;\n\n  .event-subcard {\n    padding: 0;\n    text-align: left;\n\n    & h3 {\n      font-size: 20px;\n      background-image: linear-gradient(\n        83.2deg,\n        rgba(150, 93, 233, 1) 10.8%,\n        rgba(99, 88, 238, 1) 94.3%\n      );\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n    }\n    & p {\n      font-size: 17px;\n      font-weight: 500;\n    }\n  }\n\n  & button {\n    font-size: 15px;\n    width: unset;\n    height: fit-content;\n    padding: 5px;\n    border-radius: 4px;\n  }\n"]))),ye=b.a.div(fe||(fe=Object(d.a)(["\n  background: transparent;\n  overflow: scroll;\n  height: 400px;\n"])));b.a.div(pe||(pe=Object(d.a)(["\n  background: #fff;\n  overflow: scroll;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 5%;\n\n  color: black;\n\n  & button {\n    display: block;\n    background-color: #ff4a6f;\n    margin: 15px auto;\n    border: none;\n    padding: 12px 30px;\n    border-radius: 8px;\n    color: #fff;\n    font-size: 18px;\n  }\n  & p {\n    font-weight: 300;\n  }\n  .image-layout {\n    text-align: center;\n    width: 150px;\n  }\n  & img {\n    height: 120px;\n    width: 120px;\n    border-radius: 5px;\n    border: 2px solid #ff69ac;\n    box-shadow: 0px 2px 7px #ffd3cc;\n  }\n"]))),b.a.div(ue||(ue=Object(d.a)(["\n  background: linear-gradient(to right, red, purple);\n  padding: 5px;\n"])));var ve=e=>{let{children:t,handleActionProcced:n,handleActionBack:c}=e;const s=Object(a.useContext)(le),[i,r]=s;return Object(o.jsxs)(ge,{children:[Object(o.jsxs)(he,{className:"card-top",flexRow:!0,children:[Object(o.jsxs)("h3",{style:{fontSize:20},color:"white",children:["Events schedule ",ie[i.month-1]," ",i.year]}),Object(o.jsxs)(he,{flexRow:!0,className:"card-top-inner",children:[Object(o.jsx)(he,{justifyCenter:!0,alignCenter:!0,className:"card-top-inner-item",onClick:()=>r(c),children:"P"}),Object(o.jsx)(he,{justifyCenter:!0,alignCenter:!0,className:"card-top-inner-item",onClick:()=>r(n),children:"N"})]})]}),t]})},we=n(19);const Ne=()=>{const e=Object(a.useContext)(le),[t,n]=e;return Object(o.jsxs)("div",{className:"card-body",children:[["S","M","T","W","T","F","S"].map(((e,t)=>Object(o.jsx)(he,{alignCenter:!0,justifyCenter:!0,className:"card-body-header",children:Object(o.jsx)("p",{color:"#9E9E9E",children:e})}))),t.dates.map(((e,a)=>Object(o.jsx)(he,{alignCenter:!0,justifyCenter:!0,className:e.dumpDay?"card-body-inner":"card-body-inner card-body-inner__active",onClick:()=>{e.event?(n({type:"UPDATE_CALENDER_VIEW",data:2}),n({type:"SHOW_EVENTS_FOR_SELECTED_DATE",data:t.dates[a].events})):alert("No events")},children:e.event?Object(o.jsx)("p",{className:"card-body-inner__active__event",children:e.day}):Object(o.jsx)("p",{children:e.day})})))]})},ke=()=>{const e=Object(a.useContext)(le),[t,n]=e;return Object(o.jsx)(ye,{children:t.selectedData.map(((e,t)=>Object(o.jsx)(Oe,{onClick:()=>{window.open(e.link,"_blank")},children:Object(o.jsxs)("div",{className:"event-subcard",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsx)("p",{children:e.timings})]})},t)))})},_e=e=>{var t;let{data:n}=e;const c=Object(a.useContext)(le),[s,i]=c;return Object(a.useEffect)((()=>{be(s,i,n)}),[s.month]),Object(o.jsx)(ve,{handleActionProcced:1===s.index?{type:"MONTH_FORWARD"}:{type:"DISABLED"},handleActionBack:1===s.index?{type:"MONTH_BACKWARD"}:{type:"UPDATE_CALENDER_VIEW",data:1},children:Object(o.jsx)(we.AnimatePresence,{exitBeforeEnter:!0,children:Object(o.jsx)(we.motion.div,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-1,opacity:0},transition:{duration:.2},children:1===s.index?Object(o.jsx)(Ne,{}):Object(o.jsx)(ke,{})},null!==(t=s.index)&&void 0!==t?t:"empty")})})};function Ae(e){return Object(o.jsx)(_e,{data:U,...e})}n(47);var Te=n.p+"static/media/pattern4.d7089884.png";function Ee(e){return Object(o.jsx)(f.a,{children:e.map((e=>Object(o.jsx)(m.a,{className:"",sm:12,lg:4,md:6,children:Object(o.jsx)(ne,{icon:e.icon,type:e.type,content:e.content})})))})}function Se(e){return Object(o.jsx)(f.a,{children:e.map((e=>Object(o.jsx)(m.a,{className:"",sm:12,lg:4,md:6,children:Object(o.jsx)(ne,{icon:e.icon,type:e.type,content:e.content})})))})}function De(e){return Object(o.jsx)(f.a,{className:"members",children:e.map((e=>Object(o.jsx)(m.a,{className:"",sm:12,lg:4,md:4,children:Object(o.jsx)(ce,{info:e})})))})}function Re(e){return Object(o.jsx)(f.a,{className:"sf",children:e.map((e=>Object(o.jsx)(m.a,{className:"",sm:12,lg:6,md:6,children:Object(o.jsx)(g,{panels:e})})))})}function Ce(e){e.preventDefault(),window.location.href="https://sui.io/"}function Ie(){const[e,t]=Object(a.useState)();return((e,t,n)=>{const c="(".concat(e,": ").concat(t,"px)");Object(a.useEffect)((()=>{const e=window.matchMedia(c);function t(e){e.matches?n(!0):n(!1)}return e.matches?n(!0):n(!1),e.addEventListener("change",t),function(){e.removeEventListener("change",t)}}))})("min-width",1e3,t),Object(o.jsxs)("div",{className:"Whole_div",style:{backgroundImage:"url(".concat(Te,")")},children:[Object(o.jsx)("div",{className:"color_sectiom",id:"home",children:Object(o.jsxs)(x.a,{fluid:!0,children:[Object(o.jsxs)(f.a,{className:"Row info",children:[Object(o.jsx)(m.a,{className:"info-div",sm:12,lg:7,md:7,children:Object(o.jsx)(Q,{})}),Object(o.jsx)(m.a,{className:"d-image",sm:12,lg:5,md:5,children:Object(o.jsx)(Ae,{})})]}),Object(o.jsx)(f.a,{className:"mediaInfo",children:Object(o.jsx)(m.a,{className:"",sm:12,lg:12,md:12,children:Object(o.jsx)(ee,{})})})]})}),Object(o.jsxs)(x.a,{fluid:!0,children:[Object(o.jsxs)(f.a,{className:" logoSection",children:[Object(o.jsx)(m.a,{className:"info-div",sm:12,lg:8,md:8,children:Object(o.jsx)(Z,{})}),Object(o.jsx)(m.a,{className:"info-div",sm:12,lg:4,md:4,children:Object(o.jsx)(X,{})})]}),Object(o.jsx)("div",{className:"Myfaqs",id:"faq",children:q.map(Re)}),Object(o.jsx)("div",{children:Object(o.jsxs)(f.a,{className:"prizesection",id:"prizes",children:[Object(o.jsx)(te,{type:"Awards"}),W.map(Ee)]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(f.a,{className:"prizesection",id:"prizes",children:[Object(o.jsx)(te,{type:"Bounties"}),B.map(Se)]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(f.a,{className:"sponsorSection",id:"sponsors",children:[Object(o.jsx)(ae,{}),Object(o.jsx)("div",{className:"Sponsor ",onClick:Ce,children:Object(o.jsx)("img",{src:z[0],alt:"Sui Foundation"})})]})}),e&&Object(o.jsx)(p,{top:"120vh",left:"0vh",type:""}),Object(o.jsx)("h1",{id:"team",children:"Judges"}),H.map(De)]}),Object(o.jsx)(Y,{})]})}var Le,Me=n.p+"static/media/ham-c.8ab7632d.svg",Fe=n.p+"static/media/ham.a63ab4de.svg";n(48);const Pe=b.a.div(Le||(Le=Object(d.a)(["\n  display: block;\n  width: 40%;\n\n  @media (max-width: 1000px) {\n    margin: 0;\n    display: ",";\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: ",";\n    transition: top 1s;\n    .nav-content {\n      height: 35%;\n      background-color: rgba(50, 13, 136);\n    }\n  }\n"])),(e=>e.toggle?"none":"static"),(e=>e.toggle?"-1000px":"0px"));var Ue=e=>{let{}=e;const[t,n]=Object(a.useState)(!0),[c,s]=Object(a.useState)(!1),i=Object(a.useRef)(),r=e=>{window.scrollY>=66?s(!0):s(!1)};Object(a.useEffect)((()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r))),[]);const l=(e,t)=>{t.current.contains(e.target)?n(!1):n(!0)};return Object(a.useEffect)((()=>(document.addEventListener("mousedown",(e=>l(e,i))),()=>{document.removeEventListener("mousedown",(e=>l(e,i)))})),[]),Object(o.jsxs)(j.a,{children:[Object(o.jsxs)("nav",{className:"nav_bar ".concat(c&&"nav_bar-offset-crossed"),children:[Object(o.jsxs)(Pe,{toggle:t,children:[Object(o.jsx)("div",{className:"nav-content",ref:i,children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#home",children:[Object(o.jsx)("span",{className:"links",children:"Home "})," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#faq",children:[Object(o.jsx)("span",{className:"links",children:"FAQ "})," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#prizes",children:[Object(o.jsx)("span",{className:"links",children:"Prizes "})," "]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"#sponsors",children:[Object(o.jsx)("span",{className:"links",children:"Sponsors "})," "]})}),Object(o.jsx)("img",{className:"s-close",onClick:()=>n(!0),src:Me})]})}),Object(o.jsx)("div",{className:"ease"})]}),Object(o.jsx)("img",{className:"s-open",onClick:()=>n(!1),src:Fe})]}),Object(o.jsx)(h.c,{children:Object(o.jsx)(h.a,{path:"/",children:Object(o.jsx)(Ie,{})})})]})};const We=document.getElementById("body"),Be=document.getElementById("footer");i.a.render(Object(o.jsx)(c.a.Fragment,{children:Object(o.jsx)(de,{children:Object(o.jsx)(Ue,{})})}),We),i.a.render(Object(o.jsx)(c.a.Fragment,{children:Object(o.jsx)(l,{})}),Be)}},[[53,1,2]]]);
//# sourceMappingURL=main.756e7f54.chunk.js.map