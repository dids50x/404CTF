(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{5889:function(e,t,a){Promise.resolve().then(a.bind(a,6712)),Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.bind(a,1118))},6712:function(e,t,a){"use strict";a.d(t,{default:function(){return m}});var i=a(7437),n=a(6648),s=a(9666),o=a(999),r=a(9775),l=a(2690),c=a(6908),A=a(9961),u=a(2126),d=a(2265);function h(e){(e=Object.assign({},{position:"top-right",duration:4e3},e)).duration=parseInt(e.duration)||0;let t=[],a="notification-container",i="animation-slide-in",n="animation-fade-in",s="overlay",o=".".concat(s),r={dialog:{classType:"notification-default",defaultTitle:"Confirm",defaultMessage:"Default Confirm message"},info:{classType:"notification-info",defaultTitle:"Info",defaultMessage:"default Info"},success:{classType:"notification-success",defaultTitle:"Success",defaultMessage:"default Success"},warning:{classType:"notification-warning",defaultTitle:"Warning",defaultMessage:"default Warning"},error:{classType:"notification-error",defaultTitle:"Error",defaultMessage:"An error has occurred"}},l=()=>'\n    <a class="notification-close">\n      <svg viewbox="0 0 50 50">\n        <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />\n      </svg>\n    </a>\n    <div class="notification-body">\n      <div class="notification-icon"></div>\n      <div class="notification-content">\n        <div class="notification-title"></div>\n        <div class="notification-desc"></div>\n      </div>\n    </div>',c=()=>'<div class="notification-buttons">\n    <span class="notification-button notification-cancel"></span>\n    <span class="notification-button notification-action"></span>\n    </div>',A=e=>{let t=document.querySelector(".".concat(a,".").concat(e));return t||((t=document.createElement("div")).classList=a+" "+e,document.body.appendChild(t)),t},u=t=>{let a=A(e.position),u=document.createElement("div");if(u.classList.add("notification"),u.classList.add("center"===e.position?n:i),u.classList.add(r[t].classType),u.insertAdjacentHTML("beforeend",l()),"dialog"===t){if(u.insertAdjacentHTML("beforeend",c()),!document.querySelector(o)){let e=document.createElement("div");e.classList.add(s),document.body.appendChild(e)}document.querySelector(o).classList.add("active")}return e.position.includes("bottom")?a.prepend(u):a.appendChild(u),u},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=e.querySelector(".notification-action");a.addEventListener("click",function i(n){return n.stopPropagation(),n.preventDefault(),h(e),a.removeEventListener("click",i,!1),!!t&&t("ok")},!1);let i=e.querySelector(".notification-cancel");i.addEventListener("click",function a(n){return n.stopPropagation(),n.preventDefault(),h(e),i.removeEventListener("click",a,!1),!!t&&t("cancel")},!1)},h=s=>{let r=document.querySelector(".".concat(a,".").concat(e.position));clearTimeout(t.shift()),s.classList.remove("center"===e.position?n:i),s.classList.add("center"===e.position?"animation-fade-out":"animation-slide-out"),setTimeout(function(){s.parentNode==r&&(r.removeChild(s),"dialog"===e.type&&document.querySelector(o).classList.remove("active")),r.hasChildNodes()||document.body.removeChild(r)},500)},m=function(){let{type:a,title:i,message:n,callback:s=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.type=a;let o=u(a),l=o.querySelector(".notification-title"),c=o.querySelector(".notification-desc"),A=i||r[a].defaultTitle,m=n||r[a].defaultMessage;if(l.innerText=A,c.innerText=m,"dialog"===a)d(o,s);else if(e.duration){let a=setTimeout(()=>h(o),e.duration);t.push(a)}let f=o.querySelector(".notification-close");f.addEventListener("click",function e(t){h(o),f.removeEventListener("click",e,!1)},!1)};return{dialog:e=>{let{title:t,message:a,callback:i=null}=e;return m({type:"dialog",title:t,message:a,callback:i})},info:e=>{let{title:t,message:a}=e;return m({type:"info",title:t,message:a})},success:e=>{let{title:t,message:a}=e;return m({type:"success",title:t,message:a})},warning:e=>{let{title:t,message:a}=e;return m({type:"warning",title:t,message:a})},error:e=>{let{title:t,message:a}=e;return m({type:"error",title:t,message:a})},setPosition:t=>{e.position=t}}}function m(){return(0,d.useEffect)(()=>{let e=new URLSearchParams(window.location.search).get("reponse");"4"===e?(console.log("Vous devez \xeatre connect\xe9(e) pour acheter un billet"),h({position:"bottom-right",duration:7e3}).error({title:"Erreur",message:"Vous devez \xeatre connect\xe9(e) pour acheter un billet"})):"3"===e?h({position:"bottom-right",duration:7e3}).error({title:"Erreur",message:"Hacker D\xe9tect\xe9"}):"2"===e?h({position:"bottom-right",duration:7e3}).error({title:"Erreur",message:"Solde insuffisant"}):"1"===e&&h({position:"bottom-right",duration:7e3}).info({title:"Merci pour votre achat",message:"Vous pouvez consulter vos billets dans l'onglet Mes billets"})},[]),(0,i.jsxs)("section",{children:[(0,i.jsx)("div",{id:"0",className:"max-w-6xl mx-auto px-4 sm:px-6",children:(0,i.jsxs)("div",{className:"py-12 md:py-20",children:[(0,i.jsxs)("div",{className:"max-w-3xl mx-auto text-center pb-12 md:pb-20",children:[(0,i.jsx)("h2",{className:"h2 mb-4",children:"Choisissez votre place parmis nos nombreuses cat\xe9gories."}),(0,i.jsx)("p",{className:"text-xl text-gray-400",children:"D\xe9p\xe9chez vous il ne reste plus beaucoup de billets !"})]}),(0,i.jsxs)("div",{className:"flex justify-center flex-wrap",children:[(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:o.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune VIP"}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Profitez d'une vue imprenable sur le terrain depuis les meilleures places de la tribune centrale. Acc\xe8s exclusif aux installations VIP, service de restauration haut de gamme et confort optimal."}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"btn text-white-500 border-red-500 border-2 bg-transparent w-full sm:w-auto mt-4",children:"Billets \xe9puis\xe9s"})})]}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up","data-aos-delay":"100",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:c.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune Lat\xe9rale"}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Asseyez-vous le long du terrain pour une exp\xe9rience immersive. Ces places offrent une vue panoramique sur toute l'action, id\xe9ales pour les amateurs de proximit\xe9 avec les joueurs."}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto mt-4",onClick:e=>{e.preventDefault();let t=document.cookie.split("; "),a=t.find(e=>e.startsWith("token=")),i=t.find(e=>e.startsWith("balance="));a&&i?u.Z.post("/achat",{numero:"Laterale"},{withCredentials:!0}).then(e=>{200===e.status&&(window.location.href="?reponse=1")}).catch(e=>{400===e.response.status?window.location.href="?reponse=3":window.location.href="?reponse=2"}):window.location.href="?reponse=4"},children:"40€"})})]}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up","data-aos-delay":"200",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:r.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune Familiale "}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Id\xe9al pour les familles et les groupes, ces places offrent un environnement convivial et familial. Situ\xe9es dans des zones r\xe9serv\xe9es, elles offrent une vue d\xe9gag\xe9e sur le terrain et un acc\xe8s facile aux commodit\xe9s."}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto mt-4",onClick:e=>{e.preventDefault();let t=document.cookie.split("; "),a=t.find(e=>e.startsWith("token=")),i=t.find(e=>e.startsWith("balance="));a&&i?u.Z.post("/achat",{numero:"Familiale"},{withCredentials:!0}).then(e=>{200===e.status&&(window.location.href="?reponse=1")}).catch(e=>{400===e.response.status?window.location.href="?reponse=3":window.location.href="?reponse=2"}):window.location.href="?reponse=4"},children:"30€"}),"                "]})]}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up","data-aos-delay":"300",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:s.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune Est"}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Vivez l'ambiance anim\xe9e des supporters depuis la tribune est. Ces places offrent une atmosph\xe8re \xe9lectrique avec une vue rapproch\xe9e sur les supporters et une proximit\xe9 excitante avec l'action sur le terrain."}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto mt-4",onClick:e=>{e.preventDefault();let t=document.cookie.split("; "),a=t.find(e=>e.startsWith("token=")),i=t.find(e=>e.startsWith("balance="));a&&i?u.Z.post("/achat",{numero:"Est"},{withCredentials:!0}).then(e=>{200===e.status&&(window.location.href="?reponse=1")}).catch(e=>{400===e.response.status?window.location.href="?reponse=3":window.location.href="?reponse=2"}):window.location.href="?reponse=4"},children:"20€"}),"                "]})]}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up","data-aos-delay":"400",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:l.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune Ouest"}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Pour ceux qui recherchent une exp\xe9rience relaxante et panoramique, les places en tribune ouest offrent une vue d\xe9gag\xe9e sur le terrain avec un confort sup\xe9rieur. Profitez d'une atmosph\xe8re d\xe9tendue tout en savourant le jeu."}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto mt-4",onClick:e=>{e.preventDefault();let t=document.cookie.split("; "),a=t.find(e=>e.startsWith("token=")),i=t.find(e=>e.startsWith("balance="));a&&i?u.Z.post("/achat",{numero:"Ouest"},{withCredentials:!0}).then(e=>{200===e.status&&(window.location.href="?reponse=1")}).catch(e=>{400===e.response.status?window.location.href="?reponse=3":window.location.href="?reponse=2"}):window.location.href="?reponse=4"},children:"15€"}),"                "]})]}),(0,i.jsxs)("div",{className:"relative flex flex-col items-center m-4","data-aos":"fade-up","data-aos-delay":"500",children:[(0,i.jsx)(n.default,{className:"max-w-full mx-auto md:max-w-none h-auto",src:A.Z,alt:"Stadium image",width:50,height:50}),(0,i.jsx)("h4",{className:"h4 mb-2",children:"Tribune Nord et Sud"}),(0,i.jsx)("p",{className:"text-lg text-gray-400 text-center",children:"Plongez dans l'\xe9nergie pure des supporters depuis les tribunes nord ou sud. Ces places offrent une exp\xe9rience immersive au cœur de l'action, avec une atmosph\xe8re vibrante et une vue dynamique sur le terrain."}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto mt-4",onClick:e=>{e.preventDefault();let t=document.cookie.split("; "),a=t.find(e=>e.startsWith("token=")),i=t.find(e=>e.startsWith("balance="));a&&i?u.Z.post("/achat",{numero:"Nord et Sud"},{withCredentials:!0}).then(e=>{200===e.status&&(window.location.href="?reponse=1")}).catch(e=>{400===e.response.status?window.location.href="?reponse=3":window.location.href="?reponse=2"}):window.location.href="?reponse=4"},children:"10€"}),"                "]})]})]})]})}),(0,i.jsx)("a",{href:"/credits/index.html",style:{marginTop:"20px"},children:(0,i.jsx)("h1",{children:"Credits"})})]})}a(1592),u.Z.defaults.baseURL="https://le-match-du-siecle.challenges.404ctf.fr/api"},1592:function(){},9666:function(e,t){"use strict";t.Z={src:"/_next/static/media/bleachers.74a1b260.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2klEQVR42mMAgVQXa6Z8b2cWEDuY15PZXEqdK93NiIkBBIp8nUAMOMhNUA/OiVVNAbEbUy1ZQTSXvrKcdr6Xm3Oel5NPqqtVRr63Q7S7joYUXFdtoMfx3gyf//OyIv8vzIr9Pz8z+n99gPMJoJQoQ7a3c+yKkvT/K0rSfqyryPq9qjT9z5aa/J+rSjP+x9ubJTAsKc18sq+j6v+OlvL/+zur/+9tq/q/qTnv/7qGnP8LC9IfM6yuzDm1p7Xi6MqK7NOb64tObWssOTWvIPnUmqqck0uKMy4wEAIAcaRWAvx1TQsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},999:function(e,t){"use strict";t.Z={src:"/_next/static/media/crown.32f9b6c3.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX+t0P+t0L+tkL+t0P+t0L+t0L+tkP+tkP+tkP+t0P+t0P+t0P+t0L+t0P+t0L+tkP+tkP+t0P+t0P+t0P+tkP+tkP+t0P+t0P+t0P+t0L+tkP+tkP+tkP+t0L+tkM4uI98AAAAHXRSTlMAAAACAgMDBB0qKz09WVlqcYCCh6St0NHW6ur6/c6jrl0AAABESURBVHjaHcVHFoAgDAXAHwtipReF5P7H9OlsBqRGYFKEGYO1X+nUIvpKiPww3xxhpLfWxWANznsXNuw1l5LrAVp+9AJ55AO3wgPpBgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},9775:function(e,t){"use strict";t.Z={src:"/_next/static/media/family.5bf77f06.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AZHtBgEQmif/W0sdFMOjDj74xgTsb8WkwtoAAAAhIS0BAQD/AAAkATgR3ADI/d5SbssCCAEFIA8ISjmXiejHAADwAdR0Z0kUWRCd9vj9Acia2kewreIxzioGoCIKCe26wMFIAZ+HXmU7My6a/vsJAKO9vE397wUpWkM6iv//AACivcphAXqUKTxWHWbD/////Ieir/3o4PjvmW1OCgP++sUAVoJKActvZKr/NTBV6vT6/hsE+QLyAQn7zgEZ+wMWHeOK/A2XAeRWcf8UCw8A+f78AOMl9f/VJDUBuS5UAAwDAwD25N8AAb5OXPMmBBYJ8S3oA/sw7AAI++cAwQV7/8UaRQD+49v5ODR31yFnry8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},2690:function(e,t){"use strict";t.Z={src:"/_next/static/media/moon.620553c8.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR42mP4d8OKkQEK/t2EsP/ftE7/d90qnAEuccOaEUJbcQAlAv7fttH5e83q59cTpnYgQTag4EogvQuIFYHsgv+3rPmB7G8/zphdYYDq3AnEF0EmQPl6QGv+fz9t9hthzTUrFhgbKLkZqOj/1+OmX8EO+n/HRv3/XRt2qM7N/29b//95wfz/58PGOxlArgU66DdQ8ifIWCANkTxi/ByIFRlAAOhaW6CDLoPsBBkL0gmTBABnqICbJ6oJ2QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6908:function(e,t){"use strict";t.Z={src:"/_next/static/media/soccer-player.d182a353.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42mOAgbRpE7VXzp8xhQEI7h88wvR6jTbT2zWGzAw1BdnJtcnxfbtD/M/uqCn/wcDAoM2ADLoKsrRDMtMCThuKvtkU4/NzRmt1PwMQbG3W7N7WrDyVAQbCMme/LsjruV5a7ajJAAQ7W9WqtjQp9zHUdm9mYQCBlEmHMmomX18V43MmT0x0JgODqioDMlhaW/ZkUlutfywDA0+8nu5sBlMpGQYYqNHW2DzfzGA2AzqQVWVkAAFBGfkGBgYGMCdBTY45W0ebhUFCEcwHAE+oP2D3tyNjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},1118:function(e,t){"use strict";t.default={src:"/_next/static/media/stade.1dca3277.jpeg",height:3584,width:5376,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJ2Fm//EABwQAAEDBQAAAAAAAAAAAAAAABEAEhMCBBUicf/aAAgBAQABPwCeyifj6JQC7XrF/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ABb/2Q==",blurWidth:8,blurHeight:5}},9961:function(e,t){"use strict";t.Z={src:"/_next/static/media/sunny.41f04042.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42jWPPy9DcRSG31xX0thcA8EskuLGKmYLH8BqMjMahM1kEItEpf7cIunYRBBfgEVshNolujRNk/55Ts8vbd/xPO+bJ0chVJIcl1rmTNsUdEgWbWgYyrnE4RZ3I3Vephs8Thgl1bjWLuVoTA5Thy0+5o1qavymHd5mjUwNsnhVFHTiy64D43MBvhaNn3yHSmwUdSzOdcDzVFi2vWCEwne+Oyicyl1rrvjnfa5fqi7B60xQtCnFKwrhSvvcRn88TRoP4wE2udEO90pEUaPy+GHTdXtc6IgsWh9+2QPj0ovv5sfHMQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[520,892,971,23,744],function(){return e(e.s=5889)}),_N_E=e.O()}]);