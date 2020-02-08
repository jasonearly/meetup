(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),s=n.n(i),o=(n(26),n(2)),c=n(6),l=n(4),u=n(3),h=n(5),d=(n(27),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),t}(a.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),t}(a.Component),v=n(7),m=n.n(v),f=[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-08-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}],g=n(8),b=n.n(g);function w(e){var t,n,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!window.location.href.startsWith("http://localhost")){r.next=2;break}return r.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return r.next=4,m.a.awrap(k());case 4:if(!(t=r.sent)){r.next=11;break}return n="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+e+"&access_token="+t,r.next=9,m.a.awrap(b.a.get(n));case 9:return a=r.sent,r.abrupt("return",a.data);case 11:return r.abrupt("return",[]);case 12:case"end":return r.stop()}}))}function y(e,t,n){var a,r,i,s,o;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!window.location.href.startsWith("http://localhost")){c.next=2;break}return c.abrupt("return",f);case 2:if(navigator.onLine){c.next=5;break}return a=localStorage.getItem("lastEvents"),c.abrupt("return",JSON.parse(a));case 5:return c.next=7,m.a.awrap(k());case 7:if(!(r=c.sent)){c.next=19;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,e&&t&&(i+="&lat="+e+"&lon="+t),n&&(i+="&page="+n),e&&t&&n&&(i+="&lat="+e+"&lon="+t+"&page="+n),c.next=15,m.a.awrap(b.a.get(i));case 15:return s=c.sent,(o=s.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(o)),c.abrupt("return",o);case 19:case"end":return c.stop()}}))}function k(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?E("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=2oos1uv203dg8eq4lspekauprq&response_type=code&redirect_uri=https://jasonearly.com/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:E("renew",localStorage.getItem("refresh_token"))}function E(e,t){var n,a;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return"get"===e?n="https://qsekf999u9.execute-api.us-east-2.amazonaws.com/dev/api/token/"+t:"renew"===e&&(n="https://qsekf999u9.execute-api.us-east-2.amazonaws.com/dev/api/refresh/"+t),r.next=3,m.a.awrap(b.a.get(n));case 3:return a=r.sent,localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("refresh_token",a.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),r.abrupt("return",a.data.access_token);case 8:case"end":return r.stop()}}))}var _=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component)),O=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),w(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We can not find the city you are looking for. Please try another city"}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(_,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Your City of Choice"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t}),n.props.updateEvents(null,null,t)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}))}}]),t}(a.Component),j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?y(e,t,n.state.page).then((function(a){return n.setState({events:a,lat:e,lon:t})})):a?y(n.state.lat,n.state.lon,a).then((function(e){return n.setState({events:e,page:a})})):y(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,{updateEvents:this.updateEvents}),r.a.createElement(S,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(p,{events:this.state.events}))}}]),t}(a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(20);s.a.render(r.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}(),z.config("15fcc493958042768372285070c66528").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.64a2d5b8.chunk.js.map