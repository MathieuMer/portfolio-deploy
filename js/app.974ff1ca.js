(function(e){function t(t){for(var s,n,i=t[0],r=t[1],o=t[2],u=0,g=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&g.push(a[n][0]),a[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);b&&b(t);while(g.length)g.shift()();return l.push.apply(l,o||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],s=!0,i=1;i<c.length;i++){var r=c[i];0!==a[r]&&(s=!1)}s&&(l.splice(t--,1),e=n(n.s=c[0]))}return e}var s={},a={app:0},l=[];function n(t){if(s[t])return s[t].exports;var c=s[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=s,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(c,s,function(t){return e[t]}.bind(null,s));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/portfolio-deploy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var b=r;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},1086:function(e,t,c){e.exports=c.p+"img/rea1-tables.ef6d967a.jpg"},"2ce6":function(e,t,c){"use strict";c("9d1c")},"3df1":function(e,t,c){e.exports=c.p+"img/rea1-icon-left-font-monochrome-white2.f50ef7e6.png"},"3f2f":function(e,t,c){e.exports=c.p+"img/moi-moto.0fa91121.jpg"},"41f7":function(e,t,c){e.exports=c.p+"img/royaume-uni.e5564902.svg"},5695:function(e,t,c){e.exports=c.p+"img/rea1-login.f1389bd9.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var s=c("7a23"),a={id:"bloc-page"},l={id:"main"};function n(e,t,c,n,i,r){var o=Object(s["t"])("ASide"),b=Object(s["t"])("router-view");return Object(s["p"])(),Object(s["c"])("div",a,[Object(s["g"])(o),Object(s["g"])("main",l,[Object(s["g"])(b)])])}var i=c("ecba"),r=c.n(i),o={id:"sideNavigation"},b=Object(s["g"])("h1",{class:"title__name"},[Object(s["f"])(" Mathieu "),Object(s["g"])("span",{class:"title__name--color"},"MERCIER")],-1),u=Object(s["g"])("p",{class:"title__description"},"développeur web",-1),g=Object(s["g"])("img",{class:"portrait",src:r.a,alt:"Mathieu MERCIER"},null,-1),_={class:"nav__links"},j=Object(s["f"])("Accueil"),O=Object(s["f"])("Réalisations"),p=Object(s["f"])("Contact"),d=Object(s["f"])("CV"),v=Object(s["g"])("div",{class:"nav__socials"},[Object(s["g"])("a",{href:"https://github.com/MathieuMer"},[Object(s["g"])("i",{class:"fab fa-github"})]),Object(s["g"])("a",{href:"https://www.linkedin.com/in/m-mercier-dev"},[Object(s["g"])("i",{class:"fab fa-linkedin-in"})])],-1);function m(e,t,c,a,l,n){var i=Object(s["t"])("router-link");return Object(s["p"])(),Object(s["c"])("aside",o,[Object(s["g"])(i,{to:"/",class:"title"},{default:Object(s["y"])((function(){return[b,u]})),_:1}),g,Object(s["g"])("nav",null,[Object(s["g"])("ul",_,[Object(s["g"])("li",null,[Object(s["g"])(i,{to:"/",class:"/"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(s["y"])((function(){return[j]})),_:1},8,["class","onClick"])]),Object(s["g"])("li",null,[Object(s["g"])(i,{to:"/realisations",class:"/realisations"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(s["y"])((function(){return[O]})),_:1},8,["class","onClick"])]),Object(s["g"])("li",null,[Object(s["g"])(i,{to:"/contact",class:"/contact"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(s["y"])((function(){return[p]})),_:1},8,["class","onClick"])]),Object(s["g"])("li",null,[Object(s["g"])(i,{to:"/CV",class:"/CV"===e.$route.path?"active":"",onClick:n.showSideNavigation},{default:Object(s["y"])((function(){return[d]})),_:1},8,["class","onClick"])])])]),v])}var f={name:"ASide",components:{},methods:{showSideNavigation:function(e){e.preventDefault(),this.$store.state.visibleAside&&(document.getElementById("sideNavigation").style.marginLeft="-100vw",document.getElementById("main").style.marginTop="0",document.getElementById("main").style.opacity="1",this.$store.dispatch("toggleAside").then((function(){console.log("toggle menu")})).catch((function(e){console.log(e)})))}}};f.render=m;var h=f,y={components:{ASide:h},data:function(){return{}},methods:{}};c("2ce6");y.render=n;var S=y,C=c("6c02"),x={class:"bloc-accueil"},E=Object(s["g"])("div",{class:"bloc-accueil__titre"},[Object(s["g"])("p",null,[Object(s["g"])("span",{class:"bloc-accueil__titre--span1"},"Bonjour,"),Object(s["g"])("br"),Object(s["g"])("span",{class:"bloc-accueil__titre--span2"},"je suis Mathieu,")]),Object(s["g"])("h2",null,"développeur web junior, freelance")],-1),w={class:"bloc-accueil__bouttons"},k=Object(s["f"])("REALISATIONS"),A=Object(s["f"])("CONTACT");function M(e,t,c,a,l,n){var i=Object(s["t"])("router-link");return Object(s["p"])(),Object(s["c"])("div",x,[E,Object(s["g"])("div",w,[Object(s["g"])(i,{class:"bloc-accueil__bouttons__item",to:"/realisations"},{default:Object(s["y"])((function(){return[k]})),_:1}),Object(s["g"])(i,{class:"bloc-accueil__bouttons__item",to:"/contact"},{default:Object(s["y"])((function(){return[A]})),_:1})])])}var R={name:"Accueil",components:{}};R.render=M;var P=R,T={class:"rea__container"},V=Object(s["g"])("div",{class:"rea__entete rea__bloc"},[Object(s["g"])("h2",null,"Réalisations")],-1),q={class:"rea__bloc rea__container__miniatures"},L=Object(s["g"])("h3",null,"Groupomania",-1),N=Object(s["g"])("h3",null,"Portfolio",-1),I=Object(s["g"])("h3",null,"OhMyfood",-1),D=Object(s["g"])("h3",null,"So Peckoko",-1);function J(e,t,c,a,l,n){var i=Object(s["t"])("rea1"),r=Object(s["t"])("rea2"),o=Object(s["t"])("rea3"),b=Object(s["t"])("rea4");return Object(s["p"])(),Object(s["c"])("div",T,[V,Object(s["g"])("div",q,[Object(s["g"])("div",{class:["rea__miniature rea1__miniature",1==l.showRea?"active":""],onClick:t[1]||(t[1]=function(e){return l.showRea=1})},[L],2),Object(s["g"])("div",{class:["rea__miniature rea2__miniature",2==l.showRea?"active":""],onClick:t[2]||(t[2]=function(e){return l.showRea=2})},[N],2),Object(s["g"])("div",{class:["rea__miniature rea3__miniature",3==l.showRea?"active":""],onClick:t[3]||(t[3]=function(e){return l.showRea=3})},[I],2),Object(s["g"])("div",{class:["rea__miniature rea4__miniature",4==l.showRea?"active":""],onClick:t[4]||(t[4]=function(e){return l.showRea=4})},[D],2)]),1===l.showRea?(Object(s["p"])(),Object(s["c"])(i,{key:0})):Object(s["d"])("",!0),2===l.showRea?(Object(s["p"])(),Object(s["c"])(r,{key:1})):Object(s["d"])("",!0),3===l.showRea?(Object(s["p"])(),Object(s["c"])(o,{key:2})):Object(s["d"])("",!0),4===l.showRea?(Object(s["p"])(),Object(s["c"])(b,{key:3})):Object(s["d"])("",!0)])}var G=c("3df1"),B=c.n(G),U=c("5695"),F=c.n(U),z=c("6410"),H=c.n(z),W=c("1086"),$=c.n(W),Q={class:"rea1__container rea__bloc"},X=Object(s["g"])("h3",{class:"rea1__titre"},"Réseau Social d'entreprise: Groupomania",-1),K=Object(s["g"])("h4",{class:"rea1__sous-titre"},"Conception Front-end et Back-end",-1),Y=Object(s["g"])("img",{class:"rea1__logo",src:B.a,alt:"logo groupomania"},null,-1),Z=Object(s["g"])("div",{class:"rea1__technos"},[Object(s["g"])("ul",{class:"rea1__technos__container"},[Object(s["g"])("li",null,"HTML"),Object(s["g"])("li",null,"SCSS"),Object(s["g"])("li",null,"VueJS"),Object(s["g"])("li",null,"NodeJS"),Object(s["g"])("li",null,"MySQL"),Object(s["g"])("li",null,"BootstrapVue")])],-1),ee=Object(s["g"])("div",{class:"rea1__description"},[Object(s["g"])("p",null,[Object(s["f"])(" Dernier projet du parcours Développeur Web d'Openclassrooms, consistant à développer entièrement la MVP d'un réseau social d'entreprise. A partir d'un cahier des charges, il a fallu respecter les besoins du client, dont le but était principalement d'améliorer l'ambiance et les relations entres tous les employés de l'entreprise. "),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Fonctionnalitées implémentées : "),Object(s["g"])("br"),Object(s["g"])("br")]),Object(s["g"])("div",{class:"rea1__description__listes"},[Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Création de compte / Login"),Object(s["g"])("li",null,"Poster un message texte et/ou image"),Object(s["g"])("li",null,"Preview du post avant envoi"),Object(s["g"])("li",null,"Edition et suppression du message par son auteur")]),Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Système de commentaires"),Object(s["g"])("li",null,"Système de signalements des messages et commentaires"),Object(s["g"])("li",null,"Panneau de modération pour les utilisateurs ayant les droits"),Object(s["g"])("li",null,"Possibilité de supprimer son compte")])]),Object(s["g"])("p",null,[Object(s["g"])("br"),Object(s["f"])(" Technologies utilisées :"),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" La partie backend du projet est conçu avec NodeJS / Express."),Object(s["g"])("br"),Object(s["f"])(" Pour le frontend, j'ai utilisé le framework VueJS, avec VueX et Vue router."),Object(s["g"])("br"),Object(s["f"])(" La base de données MySQL a été créée en utilisant l'ORM Sequelize."),Object(s["g"])("br"),Object(s["f"])(" Utilisation de la bibliothèque Axios pour les appels API. ")])],-1),te=Object(s["g"])("div",{class:"rea1__caroussel"},[Object(s["g"])("div",{id:"carouselRea1",class:"carousel slide","data-bs-ride":"carousel"},[Object(s["g"])("div",{class:"carousel-indicators"},[Object(s["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),Object(s["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(s["g"])("button",{type:"button","data-bs-target":"#carouselRea1","data-bs-slide-to":"2","aria-label":"Slide 3"})]),Object(s["g"])("div",{class:"carousel-inner"},[Object(s["g"])("div",{class:"carousel-item active"},[Object(s["g"])("img",{src:F.a,class:"d-block",alt:"page login groupomania"}),Object(s["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(s["g"])("h5",null,"Page d'accueil")])]),Object(s["g"])("div",{class:"carousel-item"},[Object(s["g"])("img",{src:H.a,class:"d-block",alt:"timeline groupomania"}),Object(s["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(s["g"])("h5",{class:"black-color"},"Timeline")])]),Object(s["g"])("div",{class:"carousel-item"},[Object(s["g"])("img",{src:$.a,class:"d-block",alt:"tables mySQL"}),Object(s["g"])("div",{class:"carousel-caption d-none d-md-block"},[Object(s["g"])("h5",null,"Base de données mySQL")])])]),Object(s["g"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselRea1","data-bs-slide":"prev"},[Object(s["g"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(s["g"])("span",{class:"visually-hidden"},"Previous")]),Object(s["g"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselRea1","data-bs-slide":"next"},[Object(s["g"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(s["g"])("span",{class:"visually-hidden"},"Next")])])],-1),ce=Object(s["g"])("div",{class:"rea1__repo"},[Object(s["g"])("a",{href:"https://github.com/MathieuMer/Projet_7_Groupomania"},[Object(s["g"])("p",null,"Voir le repository sur Github"),Object(s["g"])("i",{class:"fab fa-github"})])],-1);function se(e,t,c,a,l,n){return Object(s["p"])(),Object(s["c"])("div",Q,[X,K,Y,Z,ee,te,ce])}var ae={name:"rea1",components:{}};ae.render=se;var le=ae,ne={class:"rea2__container rea__bloc"},ie=Object(s["e"])('<h3 class="rea2__titre">Portfolio</h3><h4 class="rea2__sous-titre">Réalisation de ce portfolio avec le framework Vue JS</h4><div class="rea2__technos"><ul class="rea2__technos__container"><li>HTML</li><li>SCSS</li><li>VueJS</li><li>JavaScript</li></ul></div><div class="rea2__description"><p> Dès la fin de la formation de Développeur Web avec Openclassrooms, j&#39;ai décidé de construire ce portfolio.<br> Ce site a été conçu en utilisant le framework javascript VUE. En plus d&#39;afficher mes réalisations, j&#39;y ai aussi ajouté un formulaire de contact avec emailJS, et une page dédiée à mon CV.<br> Utilisation de SCSS et SASS pour la gestion du style et des @media-querries.<br><br></p></div><div class="rea2__repo"><a href="https://github.com/MathieuMer/Portfolio"><p>Voir le repository sur Github</p><i class="fab fa-github"></i></a></div>',5);function re(e,t,c,a,l,n){return Object(s["p"])(),Object(s["c"])("div",ne,[ie])}var oe={name:"rea2",components:{}};oe.render=re;var be=oe,ue=c("73c2"),ge=c.n(ue),_e={class:"rea3__container rea__bloc"},je=Object(s["g"])("h3",{class:"rea3__titre"},"Application de restauration: Ohmyfood",-1),Oe=Object(s["g"])("h4",{class:"rea3__sous-titre"},"Création du Front-end à partir de maquettes",-1),pe=Object(s["g"])("div",{class:"rea3__technos"},[Object(s["g"])("ul",{class:"rea3__technos__container"},[Object(s["g"])("li",null,"HTML"),Object(s["g"])("li",null,"SCSS"),Object(s["g"])("li",null,"Animations CSS")])],-1),de=Object(s["g"])("div",{class:"rea3__description"},[Object(s["g"])("p",null,[Object(s["f"])(" Troisième projet du parcours Développeur Web d'Openclassrooms : Transformer une maquette en site web."),Object(s["g"])("br"),Object(s["f"])(" Ce projet m'a permit de découvrir et d'apprendre à utiliser SASS (variables, boucles, mixins, extend...), gérer et organiser le code SCSS, et créer mes premières animations CSS."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["g"])("img",{class:"rea4__image",src:ge.a,alt:"ohmyfood"})])],-1),ve=Object(s["g"])("div",{class:"rea3__repo"},[Object(s["g"])("a",{href:"https://mathieumer.github.io/MathieuMercier_3_22012021/"},[Object(s["g"])("p",null,"Voir le site Ohmyfood"),Object(s["g"])("i",{class:"fab fa-github"})])],-1);function me(e,t,c,a,l,n){return Object(s["p"])(),Object(s["c"])("div",_e,[je,Oe,pe,de,ve])}var fe={name:"rea3",components:{}};fe.render=me;var he=fe,ye=c("8ea1"),Se=c.n(ye),Ce={class:"rea4__container rea__bloc"},xe=Object(s["g"])("h3",{class:"rea4__titre"},"So Pekocko",-1),Ee=Object(s["g"])("h4",{class:"rea4__sous-titre"},"Développement backend-end",-1),we=Object(s["g"])("div",{class:"rea4__technos"},[Object(s["g"])("ul",{class:"rea4__technos__container"},[Object(s["g"])("li",null,"NodeJS"),Object(s["g"])("li",null,"Express"),Object(s["g"])("li",null,"MongoDB")])],-1),ke=Object(s["g"])("div",{class:"rea4__description"},[Object(s["g"])("p",null,[Object(s["f"])(" Développement backend d'une application d'avis gastronomiques concernant des sauces piquantes. "),Object(s["g"])("br"),Object(s["g"])("br")]),Object(s["g"])("div",{class:"rea4__description__listes"},[Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Architecture serveur NodeJS/Express"),Object(s["g"])("li",null,"Création des routes et tests via l'outil Postman"),Object(s["g"])("li",null,"Base de données MongoDB Atlas")])]),Object(s["g"])("img",{class:"rea4__image",src:Se.a,alt:"routes soPekocko"}),Object(s["g"])("div",{class:"rea4__repo"},[Object(s["g"])("a",{href:"https://github.com/MathieuMer/P6_Mathieu_MERCIER"},[Object(s["g"])("p",null,"Voir le repository sur Github"),Object(s["g"])("i",{class:"fab fa-github"})])])],-1);function Ae(e,t,c,a,l,n){return Object(s["p"])(),Object(s["c"])("div",Ce,[xe,Ee,we,ke])}var Me={name:"rea4",components:{}};Me.render=Ae;var Re=Me,Pe={name:"Realisations",components:{rea1:le,rea2:be,rea3:he,rea4:Re},data:function(){return{showRea:0,isActive:!1}},methods:{}};Pe.render=J;var Te=Pe,Ve=(c("b0c0"),Object(s["g"])("div",{class:"cv__entete div__bloc"},[Object(s["g"])("h2",null,"Contact")],-1)),qe=Object(s["g"])("div",{class:"div__bloc"},[Object(s["f"])(" Bonjour,"),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Vous pouvez me contacter via ce petit formulaire, je vous répondrai par email le plus rapidement possible. Je peux aussi répondre par téléphone, dans ce cas laissez moi votre numéro dans le corps du message. Merci !"),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["g"])("span",{class:"contact-texte--prenom"},"Mathieu")],-1),Le=Object(s["g"])("label",null,"Nom",-1),Ne=Object(s["g"])("label",null,"Email",-1),Ie=Object(s["g"])("label",null,"Message",-1),De=Object(s["g"])("input",{class:"submit-button",type:"submit",value:"Envoyer"},null,-1),Je={key:0,class:"contact__success"};function Ge(e,t,c,a,l,n){return Object(s["p"])(),Object(s["c"])("div",null,[Ve,qe,Object(s["g"])("form",{class:"contact-form",onSubmit:t[4]||(t[4]=Object(s["A"])((function(){return n.sendEmail&&n.sendEmail.apply(n,arguments)}),["prevent"]))},[Le,Object(s["z"])(Object(s["g"])("input",{class:"input-style","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.name=e}),type:"text",name:"user_name",required:""},null,512),[[s["w"],l.name]]),Ne,Object(s["z"])(Object(s["g"])("input",{class:"input-style","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.email=e}),type:"email",name:"user_email",required:""},null,512),[[s["w"],l.email]]),Ie,Object(s["z"])(Object(s["g"])("textarea",{name:"message","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.message=e}),rows:"8",required:""},null,512),[[s["w"],l.message]]),De],32),l.emailSent?(Object(s["p"])(),Object(s["c"])("p",Je," Merci pour votre message. Je vous répondrai dès des possible. ")):Object(s["d"])("",!0)])}var Be=c("f8c5"),Ue={name:"Contact",data:function(){return{name:"",email:"",message:"",emailSent:!1}},methods:{sendEmail:function(e){var t=this;Be["a"].sendForm("service_hci0lwc","template_zzcminq",e.target,"user_FpGnVlCs4brXMucs0Xs5q",{user_name:this.name,user_email:this.email,message:this.message}).then((function(e){console.log("SUCCESS!",e.status,e.text),t.emailSent=!0,t.name="",t.email="",t.message=""})).catch((function(e){console.log({error:e})}))}}};Ue.render=Ge;var Fe=Ue,ze=c("3f2f"),He=c.n(ze),We=c("a261"),$e=c.n(We),Qe=c("41f7"),Xe=c.n(Qe),Ke=c("ff95"),Ye=c.n(Ke),Ze={class:"cv__container"},et=Object(s["g"])("div",{class:"cv__entete div__bloc"},[Object(s["g"])("h2",null,"Curriculum Vitæ"),Object(s["g"])("a",{class:"cv__entete__icone",href:"CV_MERCIER_MATHIEU_DEV.pdf",target:"_blank"},[Object(s["g"])("i",{class:"fas fa-download"})])],-1),tt={class:"div__bloc cv__profil"},ct=Object(s["g"])("h3",null,"Qui suis-je ?",-1),st={class:"cv__bloc__item"},at={class:"bloc__interne"},lt={class:"bloc__profil__1"},nt=Object(s["g"])("img",{class:"bloc__profil__img1",src:He.a,alt:""},null,-1),it=Object(s["g"])("p",null,[Object(s["f"])(" Je mappelle "),Object(s["g"])("strong",null,"Mathieu MERCIER"),Object(s["f"])(", je suis né le 7 mars 1988 et je vis actuellement dans la "),Object(s["g"])("strong",null,"région Pays de Loire"),Object(s["f"])("."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Dans la vie, je suis passionné par beaucoup de choses : Le sport (cyclisme en particulier), la musique (guitare), la moto..."),Object(s["g"])("br"),Object(s["f"])(" Depuis quelques temps je me suis également découvert une passion pour les voyages. Ayant eu envie de découvrir l'Amérique latine, "),Object(s["g"])("strong",null,"j'ai donc appris l'espagnol"),Object(s["f"])(" via des applications, pour pouvoir être autonome lors de mes voyages."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Professionnellement, j'ai été pendant quelques années technicien en électronique et télécommunications. Ayant travaillé dans plusieurs entreprises, avec des missions variées, j'ai appris à être "),Object(s["g"])("strong",null,"rigoureux, minutieux dans mon travail"),Object(s["f"])(", que ce soit "),Object(s["g"])("strong",null,"en équipe ou en solo."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" En 2020, j'ai décidé de quitter mon poste de pour me lancer dans une nouvelle aventure, et concrétiser une idée que j'avais depuis quelques années: Apprendre le développement web, et en faire mon métier."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Openclassrooms m'a permis de me former en ligne au métier de développeur web, et d'obtenir le titre \"Développeur web\" en juin 2021."),Object(s["g"])("br"),Object(s["g"])("br"),Object(s["f"])(" Je cherche donc activement "),Object(s["g"])("strong",null,"un poste de développeur web"),Object(s["f"])(", plutôt orienté front-end. En parallèle, "),Object(s["g"])("strong",null,"j'ai aussi créé ma micro-entreprise"),Object(s["f"])(", et je continue à me former et à apprendre chaque jour. ")],-1),rt={class:"bloc__profil__bouttons"},ot=Object(s["f"])("VOIR MES PROJETS"),bt=Object(s["f"])("ME CONTACTER"),ut=Object(s["g"])("a",{class:"bloc__profil__bouttons--item",href:"CV_MERCIER_MATHIEU_DEV.pdf",target:"_blank"},"VOIR LE CV AU FORMAT PDF",-1),gt=Object(s["g"])("div",{class:"cv__experiences div__bloc"},[Object(s["g"])("h3",null,"Expériences professionelles"),Object(s["g"])("div",{class:"cv__bloc__item"},[Object(s["g"])("div",{class:"bloc__interne"},[Object(s["g"])("div",{class:"cv__experience"},[Object(s["g"])("p",{class:"cv__date"},"2016-2020"),Object(s["g"])("p",{class:"cv__experience__poste"},"Technicien en téléphonie mobile."),Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Réparation et remise à neuf de téléphone mobiles (Apple, Samsung)"),Object(s["g"])("li",null,"Gestion du service SWAP Apple")]),Object(s["g"])("p",{class:"cv__lieu"},"Telstore. Le Loroux Bottereau (44)")]),Object(s["g"])("div",{class:"cv__experience"},[Object(s["g"])("p",{class:"cv__date"},"2015-2016"),Object(s["g"])("p",{class:"cv__experience__poste"},"Technicien codification en électronique."),Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Gestion de la base de composants SAP"),Object(s["g"])("li",null,"Codifications des nouveaux produits clients"),Object(s["g"])("li",null,"Traitement des PCN (Product Change Notification)")]),Object(s["g"])("p",{class:"cv__lieu"},"Lacroix Electronics. St Pierre Monlimart (49)")]),Object(s["g"])("div",{class:"cv__experience"},[Object(s["g"])("p",{class:"cv__date"},"2012-2015"),Object(s["g"])("p",{class:"cv__experience__poste"},"Technicien en Télécommunications."),Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Déploiement et maintenance de sites GSM, TNT et FM"),Object(s["g"])("li",null,"Maintenance pylônes"),Object(s["g"])("li",null,"Audits de sites, visites techniques")]),Object(s["g"])("p",{class:"cv__lieu"},"ITAS Ouest. Thouaré-sur-loire (44)."),Object(s["g"])("p",{class:"cv__lieu"},"Groupe SNEF télécom. Cuincy (59)."),Object(s["g"])("p",{class:"cv__lieu"},"Groupe CIRCET. Arras (62).")])])])],-1),_t=Object(s["g"])("div",{class:"cv__formation div__bloc"},[Object(s["g"])("h3",null,"Formation"),Object(s["g"])("div",{class:"cv__bloc__item"},[Object(s["g"])("div",{class:"bloc__interne"},[Object(s["g"])("div",{class:"cv__diplome"},[Object(s["g"])("p",{class:"cv__date"},"2021"),Object(s["g"])("p",{class:"cv__diplome__nom"},"Certification RNCP (niveau 5) de Développeur Web"),Object(s["g"])("p",{class:"cv__lieu"},"Openclassrooms")]),Object(s["g"])("div",{class:"cv__diplome"},[Object(s["g"])("p",{class:"cv__date"},"2008-2009"),Object(s["g"])("p",{class:"cv__diplome__nom"},"Licence professionnelle Technologies Avancées de l'Electronique des Communications"),Object(s["g"])("p",{class:"cv__lieu"},"Université du Littoral. CALAIS (62)")]),Object(s["g"])("div",{class:"cv__diplome"},[Object(s["g"])("p",{class:"cv__date"},"2006-2008"),Object(s["g"])("p",{class:"cv__diplome__nom"},"Brevet de Technicien Supérieur Systèmes Electroniques."),Object(s["g"])("p",{class:"cv__lieu"},"Lycée Blaise Pascal. LONGUENESSE (62)")]),Object(s["g"])("div",{class:"cv__diplome"},[Object(s["g"])("p",{class:"cv__date"},"2005-2006"),Object(s["g"])("p",{class:"cv__diplome__nom"},"BAC Sciences et Techniques Industrielles Génie Electronique."),Object(s["g"])("p",{class:"cv__lieu"},"Lycée Blaise Pascal. LONGUENESSE (62)")])])])],-1),jt=Object(s["g"])("div",{class:"cv__competences div__bloc"},[Object(s["g"])("h3",null,"Compétences"),Object(s["g"])("div",{class:"cv__bloc__item"},[Object(s["g"])("div",{class:"bloc__interne bloc__competences"},[Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__html"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 90"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"HTML")]),Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__css"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 80"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"CSS")]),Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__js"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 60"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"JavaScript")]),Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__vue"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 60"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"Vue JS")]),Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__nodejs"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 60"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"Node JS")]),Object(s["g"])("div",{class:"cv__techno"},[Object(s["g"])("svg",{class:"competence__wordpress"},[Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"}),Object(s["g"])("circle",{cx:"35",cy:"35",r:"35"})]),Object(s["g"])("div",{class:"cv__techno__number"},[Object(s["f"])(" 50"),Object(s["g"])("span",null,"%")]),Object(s["g"])("p",null,"Wordpress")])])])],-1),Ot=Object(s["g"])("div",{class:"cv__langue div__bloc"},[Object(s["g"])("h3",null,"Langues"),Object(s["g"])("div",{class:"cv__bloc__item"},[Object(s["g"])("div",{class:"bloc__interne"},[Object(s["g"])("div",{class:"cv__language"},[Object(s["g"])("div",{class:"cv__language__haut"},[Object(s["g"])("img",{class:"cv__langue__flag",src:$e.a,alt:"drapeau-france"}),Object(s["g"])("p",{class:"cv__langue__francais"},"Français (langue maternelle)")]),Object(s["g"])("div",{class:"cv__langue__progressbar"},[Object(s["g"])("div",{class:"progress__out"},[Object(s["g"])("div",{class:"progress__in progress__in--fr"}," 100% ")])])]),Object(s["g"])("div",{class:"cv__language"},[Object(s["g"])("div",{class:"cv__language__haut"},[Object(s["g"])("img",{class:"cv__langue__flag",src:Xe.a,alt:"drapeau-royaume-uni"}),Object(s["g"])("p",{class:"cv__langue__anglais"},"Anglais professionnel")]),Object(s["g"])("div",{class:"cv__langue__progressbar"},[Object(s["g"])("div",{class:"progress__out"},[Object(s["g"])("div",{class:"progress__in progress__in--en"}," 70% ")])])]),Object(s["g"])("div",{class:"cv__language"},[Object(s["g"])("div",{class:"cv__language__haut"},[Object(s["g"])("img",{class:"cv__langue__flag",src:Ye.a,alt:"drapeau-espagne"}),Object(s["g"])("p",{class:"cv__langue__espagnol"},"Espagnol (autodidacte depuis janvier 2020)")]),Object(s["g"])("div",{class:"cv__langue__progressbar"},[Object(s["g"])("div",{class:"progress__out"},[Object(s["g"])("div",{class:"progress__in progress__in--es"}," 60% ")])])])])])],-1),pt=Object(s["g"])("div",{class:"cv__softskills div__bloc"},[Object(s["g"])("h3",null,"Soft-skills"),Object(s["g"])("div",{class:"cv__bloc__item"},[Object(s["g"])("div",{class:"bloc__interne"},[Object(s["g"])("ul",null,[Object(s["g"])("li",null,"Rigueur"),Object(s["g"])("li",null,"Autonomie"),Object(s["g"])("li",null,"Travail d'équipe"),Object(s["g"])("li",null,"Polyvalence"),Object(s["g"])("li",null,"Adaptabilitée")])])])],-1);function dt(e,t,c,a,l,n){var i=Object(s["t"])("router-link");return Object(s["p"])(),Object(s["c"])("div",Ze,[et,Object(s["g"])("div",tt,[ct,Object(s["g"])("div",st,[Object(s["g"])("div",at,[Object(s["g"])("div",lt,[nt,it,Object(s["g"])("div",rt,[Object(s["g"])(i,{class:"bloc__profil__bouttons--item",to:"/realisations"},{default:Object(s["y"])((function(){return[ot]})),_:1}),Object(s["g"])(i,{class:"bloc__profil__bouttons--item",to:"/contact"},{default:Object(s["y"])((function(){return[bt]})),_:1}),ut])])])])]),gt,_t,jt,Ot,pt])}var vt={name:"CV",components:{}};vt.render=dt;var mt=vt,ft=[{path:"/",name:"accueil",component:P},{path:"/realisations",name:"Realisations",component:Te},{path:"/contact",name:"Contact",component:Fe},{path:"/CV",name:"CV",component:mt},{path:"",component:P}],ht=Object(C["a"])({history:Object(C["b"])(),routes:ft,scrollBehavior:function(e,t,c){var s={top:0,behavior:"smooth"};document.getElementById("main").scrollTo(s)}}),yt=ht,St=c("5502"),Ct=Object(St["a"])({state:{visibleAside:!1},mutations:{TOGGLE_ASIDE:function(e){e.visibleAside=!e.visibleAside}},actions:{toggleAside:function(e){var t=e.commit;t("TOGGLE_ASIDE")}},modules:{}});Object(s["b"])(S).use(Ct).use(yt).mount("#app")},6410:function(e,t,c){e.exports=c.p+"img/rea1-timeline.f0e10094.jpg"},"73c2":function(e,t,c){e.exports=c.p+"img/rea3-tablette.ded127f2.jpg"},"8ea1":function(e,t,c){e.exports=c.p+"img/rea2-fonctions.19c4263d.jpg"},"9d1c":function(e,t,c){},a261:function(e,t,c){e.exports=c.p+"img/france.684cc20f.svg"},ecba:function(e,t,c){e.exports=c.p+"img/portrait.7a640dad.jpg"},ff95:function(e,t,c){e.exports=c.p+"img/espagne.7b6d1881.svg"}});
//# sourceMappingURL=app.974ff1ca.js.map