"use strict";(self.webpackChunkmon_app=self.webpackChunkmon_app||[]).push([[561],{80146:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(43504),r=n(80184);function s(e){var t=e.isOpen,n=(e.setIsOpen,e.navigation);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:" fixed  h-full bg-gray-200 p-2  ease-in-out duration-300 ".concat(t?"translate-x-0 ":"-translate-x-full"),children:(0,r.jsx)("h3",{className:"mt-5 text-2xl  flex flex-col",children:n.map((function(e,t){return(0,r.jsxs)(a.OL,{to:e.to,className:"flex justify-start items-center p-2 space-x-3 rounded-md",children:[(0,r.jsx)("span",{className:"".concat(e.icon&&"w-5 h-5"),children:e.icon&&e.icon}),(0,r.jsx)("span",{className:"text-sm font-semibold",children:e.name})]},t)}))})})})}},1039:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(80184);function r(e){var t=e.title,n=e.setIsOpen,r=e.isOpen;e.menu;return(0,a.jsxs)("div",{className:"flex justify-start items-center bg-white shadow ",children:[(0,a.jsx)("div",{className:"px-2 sm:px-6 lg:px-4",children:r?(0,a.jsxs)("svg",{onClick:function(){return n(!r)},className:"  z-30 flex items-center cursor-pointer right-10 top-6",fill:"#000000",viewBox:"0 0 100 80",width:"20",height:"20",children:[(0,a.jsx)("rect",{width:"10",height:"100"}),(0,a.jsx)("rect",{x:"30",width:"10",height:"100"}),(0,a.jsx)("rect",{x:"60",width:"10",height:"100"})]}):(0,a.jsxs)("svg",{onClick:function(){return n(!r)},className:"  z-30 flex items-center cursor-pointer right-10 top-6",fill:"#000000",viewBox:"0 0 100 80",width:"20",height:"20",children:[(0,a.jsx)("rect",{width:"100",height:"10"}),(0,a.jsx)("rect",{y:"30",width:"100",height:"10"}),(0,a.jsx)("rect",{y:"60",width:"100",height:"10"})]})}),(0,a.jsx)("div",{children:(0,a.jsx)("h3",{className:"text-base py-2 px-2 sm:px-6 lg:px-4  font-medium text-gray-700",children:t&&t})})]})}},56683:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(46971),r=(n(53983),n(80184));function s(e){var t=e.images,n=void 0===t?[]:t,s=e.photoIndex,i=e.isLightBoxOpen,o=e.closePortal,c=e.setPhotoIndex;return i?"string"===typeof n?(0,r.jsx)(a.Z,{mainSrc:n,onCloseRequest:o}):(0,r.jsx)(a.Z,{mainSrc:n[s],nextSrc:n[(s+1)%n.length],prevSrc:n[(s+n.length-1)%n.length],onCloseRequest:o,onMovePrevRequest:function(){return c((s+n.length-1)%n.length)},onMoveNextRequest:function(){return c((s+1)%n.length)}}):null}},52710:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(29439),r=n(72791);function s(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,r.useState)(0),o=(0,a.Z)(i,2),c=o[0],l=o[1];return{isLightBoxOpen:n,setLightBoxOpen:s,photoIndex:c,setPhotoIndex:l,open:function(){return s(!0)},close:function(){s(!1),l(0)}}}},24602:function(e,t,n){n.r(t),n.d(t,{default:function(){return be}});var a=n(29439),r=n(72791),s=n(1039),i=n(80146),o=n(16871),c=n(31027),l=n.n(c),u=n(80184);function d(){return(0,u.jsxs)("div",{className:" metronome",children:[(0,u.jsx)("h1",{className:"text-center",children:"Metronome"}),(0,u.jsx)("p",{className:"text-center",children:"A great instrumentalist can perform a piece of music at a wide variety of tempos \u23f1. To truly control your instrument  \ud83c\udfb9 \ud83e\udd41 , you must be able to play a passage just as compellingly at rapid speed as you might at a languid speed, and vice versa. For centuries, musicians have practiced playing at a variety of tempos by using a device known as a metronome."}),(0,u.jsx)(l(),{maxBpm:"300 "})]})}var m=n(15861),h=n(87757),p=n.n(h),x=n(74569),f=n.n(x),v=n(36151),j=n(52791),g=n(19218),b=n(39891),w=n(55628),y=n(27247);function N(){var e=(0,o.s0)(),t=(0,w.a)(),n=(0,r.useState)([]),s=(0,a.Z)(n,2),i=s[0],c=s[1],l=(0,r.useState)([]),d=(0,a.Z)(l,2),h=d[0],x=d[1],N=function(){var e=(0,m.Z)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().delete("http://localhost:3000/spacetune/api/tools/deleteEarTrainingHistory/"+t);case 2:x(h.filter((function(e){return e._id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=(0,r.useState)(),k=(0,a.Z)(S,2),C=k[0],Z=k[1];(0,r.useEffect)((function(){var e=function(){var e=(0,m.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get("http://localhost:3000/spacetune/api/tools/getEarTrainings");case 2:t=e.sent,console.log(t),c(t.data.content);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=(0,m.Z)(p().mark((function e(){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get("http://localhost:3000/spacetune/api/tools/getEarTrainingHistory/"+t.user._id);case 2:n=e.sent,console.log("++++++",n),x(n.data.content);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(),e()}),[]);return(0,u.jsx)(j.Z,{className:"box grid place-items-center ",children:(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:"text-7xl text-center m-2",children:"Ear Training"}),(0,u.jsx)("p",{className:"text-lg m-5",children:"You will hear a sound \ud83d\udd0a and you have to guess the result, choose a training from the list below"}),(0,u.jsx)("div",{className:"text-center",children:(0,u.jsx)(g.Z,{id:"outlined-select-currency",select:!0,label:"select training",onChange:function(e){Z(e.target.value)},value:C,helperText:"Please select training level",fullWidth:!0,children:i.map((function(e){return(0,u.jsxs)(b.Z,{value:e,children:["Name:",e.name," Level: ",e.level]},e._id)}))})}),(0,u.jsx)(v.Z,{fullWidth:!0,variant:"contained",type:"submit",onClick:function(t){t.preventDefault(),e("/app/tools/questions",{state:{scale:C.scale,id:C._id,chords:C.chords,perfectPitch:C.perfectPitch}})},children:"Get Started"}),(0,u.jsx)("h2",{className:"text-2xl text-center m-2",children:"History"}),(0,u.jsx)("div",{className:"text-center grid place-items-center ",children:(0,u.jsxs)("table",{class:"table-auto text-center ",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Name"}),(0,u.jsx)("th",{children:"Level"}),(0,u.jsx)("th",{children:"Score"}),(0,u.jsx)("th",{children:"Action"})]})}),(0,u.jsx)("tbody",{children:h.map((function(e){var t,n;return(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{children:[" ",null===(t=e.earTraining)||void 0===t?void 0:t.name]}),(0,u.jsx)("td",{children:null===(n=e.earTraining)||void 0===n?void 0:n.level}),(0,u.jsxs)("td",{children:[e.score,"/",e.questions]}),(0,u.jsxs)("td",{children:["              ",(0,u.jsx)(y.Z,{onClick:function(t){return N(e._id,t)},color:"secondary"})]})]})}))})]})})]})})}var S=n(1413),k=n(56683),C=n(52710);function Z(){var e=(0,C.Z)(),t=(0,r.useState)(""),n=(0,a.Z)(t,2),s=n[0],i=n[1],o=(0,r.useState)(),c=(0,a.Z)(o,2),l=c[0],d=c[1],h=(0,r.useState)(!1),x=(0,a.Z)(h,2),j=(x[0],x[1],(0,r.useState)(!1)),g=(0,a.Z)(j,2),b=g[0],w=g[1],y=function(){var e=(0,m.Z)(p().mark((function e(t){var n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().post("http://localhost:3000/spacetune/api/tools/fetchTab",{name:s});case 2:0==(n=e.sent).data.success?(w(!1),d(null)):(d(n.data.content.photo),w(!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"metronome text-center",children:[(0,u.jsx)("h2",{className:"text-3xl",children:"Type the name of the song"}),(0,u.jsx)("div",{className:"flex justify-center mt-10",children:(0,u.jsxs)("div",{className:"mb-3 xl:w-96",children:[(0,u.jsx)("input",{type:"search",className:"\r form-control\r block\r w-full\r px-3\r py-1.5\r text-base\r font-normal\r text-gray-700\r bg-white bg-clip-padding\r border border-solid border-gray-300\r rounded\r transition\r ease-in-out\r m-0\r focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\r ",id:"exampleSearch",placeholder:"Type song name",onChange:function(e){return i(e.target.value)}}),(0,u.jsx)(v.Z,{fullWidth:!0,variant:"contained",type:"submit",onClick:y,children:"Search"}),e.isLightBoxOpen&&l&&(0,u.jsx)(k.Z,(0,S.Z)((0,S.Z)({images:"http://localhost:3000/"+l},e),{},{closePortal:e.close})),l&&(0,u.jsx)("img",{src:"http://localhost:3000/"+l,alt:"tab",className:"w-full h-auto",onClick:e.open}),!b&&(0,u.jsx)("p",{className:"text-lg m-5",children:" Tabs not found"})]})})]})}var P=function(e){var t=(0,o.s0)(),n=e.track;return(0,u.jsx)("div",{className:"col-md-6 track mt-5",children:(0,u.jsx)("div",{className:"card mb-4 shadow-sm",children:(0,u.jsxs)("div",{className:"card-body",children:[(0,u.jsx)("h5",{children:n.artist_name}),(0,u.jsxs)("p",{className:"card-text",children:[(0,u.jsxs)("strong",{children:[(0,u.jsx)("i",{className:"fas fa-play"})," Track"]}),": ",n.track_name,(0,u.jsx)("br",{}),(0,u.jsxs)("strong",{children:[(0,u.jsx)("i",{className:"fas fa-compact-disc"})," Album"]}),": ",n.album_name]}),(0,u.jsxs)("div",{onClick:function(e){t("/app/tools/lyrics",{state:{id:n.track_id}})},className:"btn btn-dark btn-block",children:[(0,u.jsx)("i",{className:"fas fa-chevron-right"})," View Lyrics"]})]})})})},A=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=(t[0],t[1],(0,r.useState)("")),s=(0,a.Z)(n,2),i=s[0],o=s[1],c=(0,r.useState)([]),l=(0,a.Z)(c,2),d=l[0],m=l[1];return(0,u.jsxs)("div",{className:"card card-body mb-4 p-4 text-center box grid place-items-center",children:[(0,u.jsxs)("h1",{className:"display-4 text-center",children:[(0,u.jsx)("i",{className:"fas fa-music"})," Search For A Song"]}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f().get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=".concat(i,"&page_size=10&page=1&s_track_rating=desc&apikey=977816c334068d2c128b3f32578cc04d")).then((function(e){console.log("tes",e),m(e.data.message.body.track_list)})).catch((function(e){return console.log(e)}))},children:[(0,u.jsx)("div",{className:"form-group ",children:(0,u.jsx)("input",{type:"search",className:"\r text-center\r form-control\r block\r w-full\r px-3\r py-1.5\r text-base\r font-normal\r text-gray-700\r bg-white bg-clip-padding\r border border-solid border-gray-300\r rounded\r transition\r ease-in-out\r m-0\r focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none\r ",id:"exampleSearch",placeholder:"Type song name",onChange:function(e){o(e.target.value)}})}),(0,u.jsx)(v.Z,{fullWidth:!0,variant:"contained",type:"submit",children:"Search"})]}),(0,u.jsx)("div",{className:"grid grid-cols-3 gap-4",children:d&&d.map((function(e){return(0,u.jsx)(P,{track:e.track},e.track.track_id)}))})]})},M=new(window.AudioContext||window.webkitAudioContext),B=M.createAnalyser();B.fftSize=2048;var q={getAudioContext:function(){return M},getAnalyser:function(){return B},resetAnalyser:function(){B=M.createAnalyser()},decodeAudioData:function(e){M.decodeAudioData(e).then((function(e){}))}};var F=function(e,t){return Math.floor(1200*Math.log(e/function(e){return 440*Math.pow(2,(e-69)/12)}(t))/Math.log(2))},D=function(e){return e>0?50+e:50-e},T=q.getAudioContext(),_=q.getAnalyser(),E=new Float32Array(2048),H=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function z(){var e=(0,r.useState)(null),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,r.useState)(!1),o=(0,a.Z)(i,2),c=o[0],l=o[1],d=(0,r.useState)("C"),h=(0,a.Z)(d,2),x=h[0],f=h[1],v=(0,r.useState)("4"),j=(0,a.Z)(v,2),g=j[0],b=j[1],w=(0,r.useState)("0 Hz"),y=(0,a.Z)(w,2),N=y[0],S=y[1],k=(0,r.useState)("0"),C=(0,a.Z)(k,2),Z=C[0],P=C[1],A=(0,r.useState)(!1),M=(0,a.Z)(A,2),B=(M[0],M[1]);(0,r.useEffect)((function(){null!=n&&n.connect(_)}),[n]),setInterval((function(e){_.getFloatTimeDomainData(E);var t=function(e,t){for(var n=e.length,a=0,r=0;r<n;r++){var s=e[r];a+=s*s}if((a=Math.sqrt(a/n))<.01)return-1;for(var i=0,o=n-1,c=0;c<n/2;c++)if(Math.abs(e[c])<.2){i=c;break}for(var l=1;l<n/2;l++)if(Math.abs(e[n-l])<.2){o=n-l;break}n=(e=e.slice(i,o)).length;for(var u=new Array(n).fill(0),d=0;d<n;d++)for(var m=0;m<n-d;m++)u[d]=u[d]+e[m]*e[m+d];for(var h=0;u[h]>u[h+1];)h++;for(var p=-1,x=-1,f=h;f<n;f++)u[f]>p&&(p=u[f],x=f);var v=x,j=u[v-1],g=u[v],b=u[v+1],w=(j+b-2*g)/2;return w&&(v-=(b-j)/2/(2*w)),t/v}(E,T.sampleRate);if(t>-1){var n=function(e){var t=Math.log(e/440)/Math.log(2)*12;return Math.round(t)+69}(t);console.log("note",n);var a=H[n%12],r=Math.floor(n/12)-1,s=F(t,n);S(parseFloat(t).toFixed(2)+" Hz"),f(a),b(r),P(s),B(!1),console.log(n,a,r,s,t)}}),1);var q=function(){var e=(0,m.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:if(t=e.sent,"suspended"!==T.state){e.next=6;break}return e.next=6,T.resume();case 6:l(!0),B(!0),setTimeout((function(){return B(!1)}),5e3),s(T.createMediaStreamSource(t));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){return navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,autoGainControl:!1,noiseSuppression:!1,latency:0}})};return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"flex flex-col items-center",children:[(0,u.jsx)("h1",{className:"m-2",children:" Guitar Tuner"}),(0,u.jsx)("p",{className:"w-3/5",children:"Hello! You have found the fastest and right way to tune your guitar \ud83c\udfb8. The tuning will be done using the free online guitar tuner, working through a microphone on your device. This tuner is suitable for acoustic and for electric guitar."}),(0,u.jsxs)("div",{className:c?"visible flex flex-col transition-all ease-in delay-75 bg-white justify-center items-center p-10 rounded-xl shadow-lg mb-5 w-60 h-60":"invisible transition-all w-0 h-0",children:[(0,u.jsxs)("div",{className:"flex items-start font-mono",children:[(0,u.jsx)("span",{className:c?"visible transition-all delay-75 font-thin text-9xl":"invisible text-xs",children:x}),(0,u.jsx)("span",{className:"bg-green-600 p-1 px-2 text-white rounded-lg",children:g})]}),(0,u.jsxs)("div",{className:"w-full flex justify-center items-center",children:[(0,u.jsx)("div",{className:"bg-gradient-to-r to-green-400 from-red-600 py-1 rounded-full rotate-180",style:{width:(Z<0?D(Z):"50")+"%"}}),(0,u.jsx)("span",{className:"font-bold text-lg text-green-800",children:"I"}),(0,u.jsx)("div",{className:"bg-gradient-to-r from-green-400 to-red-600 py-1 rounded-full",style:{width:(Z>0?D(Z):"50")+"%"}})]}),(0,u.jsx)("div",{className:"mt-2 text-xs text-gray-400",children:(0,u.jsx)("span",{children:N})})]}),c?(0,u.jsx)("button",{className:"bg-black text-white w-20 h-20 rounded-full shadow-xl transition-all",onClick:function(){n.disconnect(_),l(!1)},children:"Stop"}):(0,u.jsx)("button",{className:"bg-black text-white w-20 h-20 rounded-full shadow-xl transition-all",onClick:q,children:"Start"})]})})}var I=n(36471),G=n(1845),O=[{name:"Clap",sound:"/DrumSamples/Claps/Clap1.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"white"},{name:"Hi-hat (open)",sound:"/DrumSamples/OpenHats/OpenHiHat01.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"#3f51b5"},{name:"Hi-hat (closed)",sound:"/DrumSamples/ClosedHats/HiHat01.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"white"},{name:"Snare 2",sound:"/DrumSamples/AltSnare1/AltSD25.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"#3f51b5"},{name:"Snare 1",sound:"/DrumSamples/MainSnare/Snare1.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"white"},{name:"Kick",sound:"/DrumSamples/Kicks/KickDrum01.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"#3f51b5"},{name:"Bassline",sound:"/BassSamples/HighE-BassNote.wav",pattern:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1},color:"white"}];function L(e){return e>=14?"/BassSamples/G-BassNote.wav":e>=12?"/BassSamples/A-BassNote.wav":e>=10?"/BassSamples/B-BassNote.wav":e>=8?"/BassSamples/D-BassNote.wav":e>=6?"/BassSamples/HighE-BassNote.wav":e>=4?"/BassSamples/D-BassNote.wav":e>=2?"/BassSamples/B-BassNote.wav":"/BassSamples/HighE-BassNote.wav"}var W=function(e){var t=(0,r.useState)(!1),n=(0,a.Z)(t,2),s=n[0],i=n[1];return(0,u.jsx)("td",{className:"tCell",style:s?{background:e.color,padding:"25px"}:{background:"#151515",padding:"25px"},onClick:function(){return i(!s),s||(new G.Howl({src:["Bassline"===e.name?L(e.column):e.sound],html5:!0}).play(),G.Howler.volume(1)),void e.updateGrid(e.row,e.column,!s)}})},R=function(e){for(var t=[],n=0;n<16;n++)t.push((0,u.jsx)(W,{row:e.row,column:n,sound:e.instrumentSound,pattern:e.pattern[n],color:e.instrumentColor,name:e.instrumentName,updateGrid:e.updateGrid},n+e.row));return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:"instrument",children:e.instrumentName}),t]})};var Y=function(e){return(0,u.jsxs)("div",{children:[(0,u.jsxs)("label",{className:"temStyle",children:["Tem",(0,u.jsx)("span",{className:"poStyle",children:"po"})]}),(0,u.jsx)("input",{className:"tempoBorder",label:"Tempo",type:"number",min:"40",max:"240",value:e.value,onChange:e.onTempoChange})]})},Q=n(38596),K=n(90126),V=n(22962),X=(0,Q.Z)((function(e){return{button:{margin:e.spacing(1)}}})),U=function(e){var t=X();return(0,u.jsx)("div",{children:e.isPlaying?(0,u.jsx)(K.Z,{variant:"outlined",color:"primary",className:t.button,disabled:e.isPlaying,onClick:e.onClick,children:"Playing.."}):(0,u.jsx)(K.Z,{variant:"contained",color:"primary",className:t.button,startIcon:(0,u.jsx)(V.Z,{}),onClick:e.onClick,children:"Play"})})},$=n(37714),J=(0,Q.Z)((function(e){return{button:{margin:e.spacing(1),backgroundColor:"#330704",border:"1px solid",borderColor:"#000","&:hover":{backgroundColor:"#440704",color:"#FFF",border:"1px solid",borderColor:"#FFF"}}}})),ee=function(e){var t=J();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(K.Z,{variant:"contained",color:"secondary",className:t.button,startIcon:(0,u.jsx)($.Z,{}),disabled:!e.isPlaying,onClick:e.onClick,children:"Stop"})})},te=n(38317),ne=n(24076),ae=n(7727),re=n(1288),se=(0,Q.Z)((function(e){return{root:{width:300+2*e.spacing(3)},margin:{height:e.spacing(3)}}})),ie=(0,te.Z)({root:{color:"white",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(ne.Z),oe=function(e){var t=se();return(0,u.jsx)("div",{className:t.root,children:(0,u.jsxs)(re.Z,{container:!0,spacing:2,children:[(0,u.jsx)(re.Z,{item:!0,children:(0,u.jsx)(ae.Z,{className:"volIcon",fontSize:"large"})}),(0,u.jsx)(re.Z,{item:!0,xs:!0,children:(0,u.jsx)(ie,{value:e.volNum,onChange:e.onChange,"aria-labelledby":"continuous-slider"})})]})})},ce=function(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,r.useState)(120),o=(0,a.Z)(i,2),c=o[0],l=o[1],d=(0,r.useState)(50),m=(0,a.Z)(d,2),h=m[0],p=m[1],x=(0,r.useState)([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),f=(0,a.Z)(x,2),v=f[0],j=(f[1],(0,r.useState)([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),g=(0,a.Z)(j,2),b=g[0],w=g[1],y=(0,r.useState)(0),N=(0,a.Z)(y,2),k=N[0],C=N[1],Z=(0,r.useState)([O[0].pattern,O[1].pattern,O[2].pattern,O[3].pattern,O[4].pattern,O[5].pattern,O[6].pattern]),P=(0,a.Z)(Z,2),A=P[0],M=P[1],B=function(){s(!n)},q=15e3/c,F=function(){var e=document.getElementById("".concat(k)),t=0===k?document.getElementById("15"):document.getElementById("".concat(k-1));t.classList.remove("playhead"),t.classList.add("inactive"),e.classList.remove("inactive"),e.classList.add("playhead")},D=function(e){for(var t=0;t<e.length;t++)n=e[t],new G.Howl({src:[n],html5:!0,volume:h/100}).play();var n};(0,r.useEffect)((function(){if(n){var e=setInterval((function(){F(),function(){for(var e=[],t=0;t<7;t++){if(A[t][k]){var n="Bassline"===O[t].name?L(k):O[t].sound;e.push(n)}D(e)}}(),C(k<15?function(e){return++e}:0)}),q);return function(){return clearInterval(e)}}C(0),w(v.map((function(e,t){return(0,u.jsx)("td",{id:t,className:e>0?"playhead":"inactive cycle"},t+v)})))}),[n,q,h,k]);var T=O.map((function(e,t){return(0,u.jsx)(R,{row:t,updateGrid:function(e,t,n){return function(e,t,n){var a=(0,S.Z)({},A[e]);a[t]=n;for(var r=[],s=0;s<7;s++)e===s?r.push(a):r.push(A[s]);M(r)}(e,t,n)},instrumentName:e.name,instrumentSound:e.sound,pattern:e.pattern,instrumentColor:e.color},t)})),_=n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("td",{className:"instrument"}),b]}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{className:n?"hidden":"instrument"},"1"),(0,u.jsx)("td",{className:"inactive"},"2"),(0,u.jsx)("td",{className:"inactive"},"3"),(0,u.jsx)("td",{className:"inactive"},"4"),(0,u.jsx)("td",{className:"inactive"},"5"),(0,u.jsx)("td",{className:"inactive"},"6"),(0,u.jsx)("td",{className:"inactive"},"7"),(0,u.jsx)("td",{className:"inactive"},"8"),(0,u.jsx)("td",{className:"inactive"},"9"),(0,u.jsx)("td",{className:"inactive"},"10"),(0,u.jsx)("td",{className:"inactive",children:" "},"11"),(0,u.jsx)("td",{className:"inactive"},"12"),(0,u.jsx)("td",{className:"inactive"},"13"),(0,u.jsx)("td",{className:"inactive"},"14"),(0,u.jsx)("td",{className:"inactive"},"15"),(0,u.jsx)("td",{className:"inactive"},"16"),(0,u.jsx)("td",{className:"inactive"},"17")]})});new(window.AudioContext||window.webkitAudioContext);return(0,u.jsx)("div",{className:"flex content-center canvas",children:(0,u.jsxs)("div",{className:"container bg-black flex-initial w-64",children:[(0,u.jsxs)("div",{className:"btnGroup",children:[(0,u.jsx)(U,{onClick:B,isPlaying:n}),(0,u.jsx)(ee,{onClick:B,isPlaying:n}),(0,u.jsxs)("h1",{className:"text-white text-7xl\t",children:["Beat Maker ",(0,u.jsx)("span",{className:" ".concat(n?"rotate":""),children:"\ud83c\udfa7"}),"\ud83d\udd25"]})]}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{className:"volTempo",children:[(0,u.jsx)("div",{className:"volStyle",children:(0,u.jsx)(oe,{volNum:h,onChange:function(e,t){p(t)}})}),(0,u.jsx)("div",{className:"tempoStyle",children:(0,u.jsx)(Y,{value:c,onTempoChange:function(e){!function(e){var t=e.target.value;l(parseInt(t))}(e)}})})]}),(0,u.jsx)("br",{}),(0,u.jsx)("table",{className:"table-auto",children:(0,u.jsxs)("tbody",{children:[_,T]})})]})})},le=n(44282);n(66049);function ue(e){return 48===e?"/PianoSamples/C2.mp3":49===e?"/PianoSamples/Db2.mp3":50===e?"/PianoSamples/D2.mp3":51===e?"/PianoSamples/Eb2.mp3":52===e?"/PianoSamples/E2.mp3":53===e?"/PianoSamples/F2.mp3":54===e?"/PianoSamples/Gb2.mp3":55===e?"/PianoSamples/G2.mp3":56===e?"/PianoSamples/Ab2.mp3":57===e?"/PianoSamples/A2.mp3":58===e?"/PianoSamples/Bb2.mp3":59===e?"/PianoSamples/B2.mp3":60===e?"/PianoSamples/C3.mp3":61===e?"/PianoSamples/Db3.mp3":62===e?"/PianoSamples/D3.mp3":63===e?"/PianoSamples/Eb3.mp3":64===e?"/PianoSamples/E3.mp3":65===e?"/PianoSamples/F3.mp3":66===e?"/PianoSamples/Gb3.mp3":67===e?"/PianoSamples/G3.mp3":68===e?"/PianoSamples/Ab3.mp3":69===e?"/PianoSamples/A3.mp3":70===e?"/PianoSamples/Bb3.mp3":71===e?"/PianoSamples/B3.mp3":72===e?"/PianoSamples/C4.mp3":73===e?"/PianoSamples/Db4.mp3":74===e?"/PianoSamples/D4.mp3":75===e?"/PianoSamples/Eb4.mp3":76===e?"/PianoSamples/E4.mp3":77===e?"/PianoSamples/F4.mp3":void 0}function de(){var e=(0,r.useState)("Record"),t=(0,a.Z)(e,2),n=(t[0],t[1],le.qM.fromNote("c3")),s=le.qM.fromNote("f5"),i=le.WX.create({firstNote:n,lastNote:s,keyboardConfig:le.WX.HOME_ROW}),o=[],c=!1,l="",d=[];o=[];return(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)("h1",{className:"text-center",children:["Simple Piano",(0,u.jsx)("div",{className:"robot1"})]}),(0,u.jsx)("button",{onClick:function(){c=!c,console.log(c),!0===c&&(d=[])},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"\ud83d\udd34"}),(0,u.jsx)("button",{onClick:function(){var e=0,t=0,n=0;new Audio(d[0]).play();for(var a=function(a){t=o[a]-o[a-1],n=e=t+n,setTimeout((function(){new Audio(d[a]).play()}),e)},r=1;r<d.length;r++)a(r);c=!1,o=[]},className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"\u25b6\ufe0f"}),(0,u.jsx)("p",{className:"text-center",children:"Press keys or use your mouse to play a melody \ud83c\udfb5 we believe in you \u2764\ufe0f"}),(0,u.jsx)(le.id,{className:"PianoDarkTheme",noteRange:{first:n,last:s},playNote:function(e){var t=new G.Howl({src:ue(e),html5:!0});l=ue(e);var n=(new Date).getTime();o.push(n),!0===c&&d.push(l),t.play()},stopNote:function(e){console.log(e)},width:1e3,keyboardShortcuts:i})]})}var me=n(20890);function he(e){return[{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"B minor",sound:"/questions/bminor.mp3"},{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"C major",sound:"/questions/cmajor.mp3"},{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"C minor",sound:"/questions/cminor.mp3"},{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"D minor",sound:"/questions/dminor.mp3"},{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"F major",sound:"/questions/fmajor.mp3"},{question:"Chords quiz",answers:["B minor","C major","C minor","D minor","F major","F minor"],correctAnswer:"F minor",sound:"/questions/fminor.mp3"}][e]}function pe(e){return[{question:"Perfect Pitch quiz",answers:["A","B","C","D","E","F"],correctAnswer:"A",sound:"/questions/A2.mp3"},{question:"Perfect Pitch quiz",answers:["A","B","C","D","E","F"],correctAnswer:"B",sound:"/questions/B2.mp3"},{question:"Perfect Pitch quiz",answers:["A","B","C","D","E","F"],correctAnswer:"F",sound:"/questions/F2.mp3"},{question:"Perfect Pitch quiz",answers:["A","B","C","D","E","F"],correctAnswer:"C",sound:"/questions/C2.mp3"}][e]}var xe=function(){var e,t,n=(0,o.s0)(),s=(0,w.a)(),i=(0,o.TH)().state,c=[];if(0!=i.scale)for(var l=0;l<i.scale;l++){var d=Math.floor(5*Math.random());c.push([{question:"Scales Quiz",answers:["Major(ionian)","Natural Minor(aeolian)","Harmonic Minor","Major Pentatonic","Minor Pentatonic"],correctAnswer:"Major(ionian)",sound:"/questions/major.mp3"},{question:"Scales Quiz",answers:["Major(ionian)","Natural Minor(aeolian)","Harmonic Minor","Major Pentatonic","Minor Pentatonic"],correctAnswer:"Natural Minor(aeolian)",sound:"/questions/minor.mp3"},{question:"Scales Quiz",answers:["Major(ionian)","Natural Minor(aeolian)","Harmonic Minor","Major Pentatonic","Minor Pentatonic"],correctAnswer:"Harmonic Minor",sound:"/questions/harmonic.mp3"},{question:"Scales Quiz",answers:["Major(ionian)","Natural Minor(aeolian)","Harmonic Minor","Major Pentatonic","Minor Pentatonic"],correctAnswer:"Major Pentatonic",sound:"/questions/major-pentatonic.mp3"},{question:"Scales Quiz",answers:["Major(ionian)","Natural Minor(aeolian)","Harmonic Minor","Major Pentatonic","Minor Pentatonic"],correctAnswer:"Minor Pentatonic",sound:"/questions/minor-pentatonic.mp3"}][d])}if(0!=i.chords)for(var h=0;h<i.chords;h++){var x=Math.floor(6*Math.random());c.push(he(x))}if(0!=i.perfectPitch)for(var g=0;g<i.perfectPitch;g++){var b=Math.floor(4*Math.random());c.push(pe(b))}var y=(0,r.useState)(0),N=(0,a.Z)(y,2),S=N[0],k=N[1],C=(0,r.useState)(0),Z=(0,a.Z)(C,2),P=Z[0],A=Z[1],M=function(){var e=(0,m.Z)(p().mark((function e(t){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.target.textContent===(null===(a=c[S])||void 0===a?void 0:a.correctAnswer)&&A(P+1),!(S+1<(null===c||void 0===c?void 0:c.length))){e.next=5;break}k(S+1),e.next=7;break;case 5:return e.next=7,f().post("http://localhost:3000/spacetune/api/tools/addEarTrainingHistory",{user:s.user._id,score:P,questions:null===c||void 0===c?void 0:c.length,earTraining:i.id}).then((function(e){n("/app/tools/eartraining",{state:{score:P,id:i.id}})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t;new G.Howl({src:null===(t=c[S])||void 0===t?void 0:t.sound,html5:!0}).play()};return(0,r.useEffect)((function(){B()}),[S]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(j.Z,{className:"box grid place-items-center ",children:[(0,u.jsxs)(me.Z,{variant:"h4",children:["Question ",S+1," (",null===(e=c[S])||void 0===e?void 0:e.question,") "]}),(0,u.jsx)(me.Z,{mt:5,children:(0,u.jsx)(v.Z,{onClick:B,variant:"outlined",children:"Hear Again"})}),null===(t=c[S])||void 0===t?void 0:t.answers.map((function(e,t){return(0,u.jsx)(j.Z,{mt:2,children:(0,u.jsx)(v.Z,{onClick:M,variant:"contained",children:e})},t)})),(0,u.jsxs)(j.Z,{mt:5,children:["Score: ",P," / ",c.length]})]})})},fe=n(46431),ve=n.n(fe),je=n(74655),ge=function(e){var t=(0,r.useState)({}),n=(0,a.Z)(t,2),s=n[0],i=n[1],c=(0,r.useState)({}),l=(0,a.Z)(c,2),d=l[0],m=l[1],h=(0,o.s0)(),p=(0,o.TH)();return(0,r.useEffect)((function(){f().get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=".concat(p.state.id,"&apikey=977816c334068d2c128b3f32578cc04d")).then((function(e){var t=e.data.message.body.lyrics;return console.log("lyrics",t),m({lyrics:t}),f().get("https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=".concat(p.state.id,"&apikey=977816c334068d2c128b3f32578cc04d"))})).then((function(e){console.log("res",e);var t=e.data.message.body.track;i({track:t})})).catch((function(e){return console.log(e)}))}),[p.state.id]),void 0===s||void 0===d||0===Object.keys(s).length||0===Object.keys(d).length?(0,u.jsx)(je.Z,{}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(v.Z,{variant:"contained",type:"submit",onClick:function(e){return h("/app/tools/lyricsgenerator")},children:"Go Back"})}),(0,u.jsxs)("div",{className:"card",children:[(0,u.jsxs)("h5",{className:"text-center text-5xl text-blue-500",children:[s.track.track_name," by ",s.track.artist_name]}),(0,u.jsx)("div",{className:"card-body",children:(0,u.jsx)("p",{className:"text-xl mt-10",children:d.lyrics.lyrics_body})})]}),(0,u.jsxs)("ul",{className:"list-group mt-3 text-center",children:[(0,u.jsxs)("li",{className:"list-group-item",children:[(0,u.jsx)("strong",{children:"Album ID"}),": ",s.track.album_id]}),(0,u.jsxs)("li",{className:"list-group-item",children:[(0,u.jsx)("strong",{children:"Song Genre"}),":"," ",0===s.track.primary_genres.music_genre_list.length?"NO GENRE AVAILABLE":s.track.primary_genres.music_genre_list[0].music_genre.music_genre_name]}),(0,u.jsxs)("li",{className:"list-group-item",children:[(0,u.jsx)("strong",{children:"Explicit Words"}),":"," ",0===s.track.explicit?"No":"Yes"]}),(0,u.jsxs)("li",{className:"list-group-item",children:[(0,u.jsx)("strong",{children:"Release Date"}),":"," ",(0,u.jsx)(ve(),{format:"MM/DD/YYYY",children:s.track.first_release_date})]})]})]})};function be(){var e=(0,r.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,u.jsxs)("div",{children:[(0,u.jsx)(s.Z,{title:"Tools",setIsOpen:c,isOpen:n}),(0,u.jsxs)("div",{className:"flex flex-row",children:[(0,u.jsx)("div",{className:"".concat(n?"w-1/12":"w-0"," flex flex-col"),children:(0,u.jsx)(i.Z,{isOpen:n,setIsOpen:c,navigation:[{name:"Metronome",to:"metronome",current:!0},{name:"Guitar Tuner",to:"tuner",current:!1},{name:"Tab generator",to:"tabgenerator",current:!1},{name:"Ear training",to:"eartraining",current:!1},{name:"Beat Maker",to:"beatmaker",current:!1},,{name:"Piano",to:"piano",current:!1},{name:"Lyrics Generator",to:"lyricsgenerator",current:!1}]})}),(0,u.jsx)("div",{className:"".concat(n?"w-11/12":"w-full"," flex flex-col p-1"),children:(0,u.jsx)(r.Suspense,{fallback:(0,u.jsx)(I.Z,{}),children:(0,u.jsxs)(o.Z5,{children:[(0,u.jsx)(o.AW,{path:"/metronome",element:(0,u.jsx)(d,{})}),(0,u.jsx)(o.AW,{path:"/tuner",element:(0,u.jsx)(z,{})}),(0,u.jsx)(o.AW,{path:"/beatmaker",element:(0,u.jsx)(ce,{})}),(0,u.jsx)(o.AW,{path:"/piano",element:(0,u.jsx)(de,{})}),(0,u.jsx)(o.AW,{path:"/earTraining",element:(0,u.jsx)(N,{})}),(0,u.jsx)(o.AW,{path:"/questions",element:(0,u.jsx)(xe,{})}),(0,u.jsx)(o.AW,{path:"/lyricsgenerator",element:(0,u.jsx)(A,{})}),(0,u.jsx)(o.AW,{path:"/lyrics",element:(0,u.jsx)(ge,{})}),(0,u.jsx)(o.AW,{path:"/tabgenerator",element:(0,u.jsx)(Z,{})})]})})})]})]})}}}]);
//# sourceMappingURL=561.99c0828b.chunk.js.map