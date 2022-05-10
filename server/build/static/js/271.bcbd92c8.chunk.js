"use strict";(self.webpackChunkmon_app=self.webpackChunkmon_app||[]).push([[271],{68870:function(e,r,t){var o=t(23814),n=t(57829),i=(0,t(67107).Z)(),a=(0,o.Z)({defaultTheme:i,defaultClassName:"MuiBox-root",generateClassName:n.Z.generate});r.Z=a},39891:function(e,r,t){t.d(r,{Z:function(){return T}});var o=t(4942),n=t(63366),i=t(87462),a=t(72791),c=t(28182),s=t(90767),l=t(12065),p=t(47630),d=t(93736),u=t(66199),f=t(98441),b=t(40162),m=t(42071),v=t(30208);var g=(0,v.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var O=(0,v.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var y=(0,v.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),h=t(95159);function j(e){return(0,h.Z)("MuiMenuItem",e)}var P=(0,v.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=t(80184),Z=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],E=(0,p.ZP)(f.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,t.dense&&r.dense,t.divider&&r.divider,!t.disableGutters&&r.gutters]}})((function(e){var r,t=e.theme,n=e.ownerState;return(0,i.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat(t.palette.divider),backgroundClip:"padding-box"},(r={"&:hover":{textDecoration:"none",backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(r,"&.".concat(P.selected),(0,o.Z)({backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)},"&.".concat(P.focusVisible),{backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,o.Z)(r,"&.".concat(P.selected,":hover"),{backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}),(0,o.Z)(r,"&.".concat(P.focusVisible),{backgroundColor:t.palette.action.focus}),(0,o.Z)(r,"&.".concat(P.disabled),{opacity:t.palette.action.disabledOpacity}),(0,o.Z)(r,"& + .".concat(g.root),{marginTop:t.spacing(1),marginBottom:t.spacing(1)}),(0,o.Z)(r,"& + .".concat(g.inset),{marginLeft:52}),(0,o.Z)(r,"& .".concat(y.root),{marginTop:0,marginBottom:0}),(0,o.Z)(r,"& .".concat(y.inset),{paddingLeft:36}),(0,o.Z)(r,"& .".concat(O.root),{minWidth:36}),r),!n.dense&&(0,o.Z)({},t.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,(0,o.Z)({},"& .".concat(O.root," svg"),{fontSize:"1.25rem"})))})),T=a.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiMenuItem"}),o=t.autoFocus,l=void 0!==o&&o,p=t.component,f=void 0===p?"li":p,v=t.dense,g=void 0!==v&&v,O=t.divider,y=void 0!==O&&O,h=t.disableGutters,P=void 0!==h&&h,T=t.focusVisibleClassName,D=t.role,k=void 0===D?"menuitem":D,x=t.tabIndex,S=(0,n.Z)(t,Z),R=a.useContext(u.Z),z={dense:g||R.dense||!1,disableGutters:P},C=a.useRef(null);(0,b.Z)((function(){l&&C.current&&C.current.focus()}),[l]);var N,F=(0,i.Z)({},t,{dense:z.dense,divider:y,disableGutters:P}),M=function(e){var r=e.disabled,t=e.dense,o=e.divider,n=e.disableGutters,a=e.selected,c=e.classes,l={root:["root",t&&"dense",r&&"disabled",!n&&"gutters",o&&"divider",a&&"selected"]},p=(0,s.Z)(l,j,c);return(0,i.Z)({},c,p)}(t),q=(0,m.Z)(C,r);return t.disabled||(N=void 0!==x?x:-1),(0,w.jsx)(u.Z.Provider,{value:z,children:(0,w.jsx)(E,(0,i.Z)({ref:q,role:k,tabIndex:N,component:f,focusVisibleClassName:(0,c.Z)(M.focusVisible,T)},S,{ownerState:F,classes:M}))})}))},66703:function(e,r,t){t.d(r,{P:function(){return s}});var o=t(87462),n=t(72791),i=t(71124),a=["M7.99-.01c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-3h-2v-7h2v7z"],c=["M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 16H9v-2h2v2zm0-3H9V4h2v9z"],s=(0,n.memo)((0,n.forwardRef)((function(e,r){return n.createElement(i.Z,(0,o.Z)({svgPaths16:a,svgPaths20:c,ref:r,name:"error"},e))})))},71124:function(e,r,t){var o=t(87462),n=t(45987),i=t(72791),a=t(81694),c=t.n(a),s=t(52007),l=t.n(s),p=t(68246),d=t.n(p),u=t(31629),f=["className","color","name","size","svgPaths16","svgPaths20","title"],b=["className"],m={},v={},g=(0,i.forwardRef)((function(e,r){var t=e.className,a=e.color,s=void 0===a?"currentColor":a,l=e.name,p=e.size,g=void 0===p?16:p,O=e.svgPaths16,y=e.svgPaths20,h=e.title,j=(0,n.Z)(e,f),P=(0,u.m)("Icon",{color:s},m,v),w=P.className,Z=(0,n.Z)(P,b),E=g>=20?20:16,T=(16===E?O:y).map((function(e,r){return i.createElement("path",{key:r,d:e,fillRule:"evenodd"})})),D="0 0 ".concat(E," ").concat(E);return i.createElement(d(),(0,o.Z)({is:"svg",ref:r,className:c()(t,w)},Z,j,{"data-icon":l,width:g,height:g,viewBox:D}),h&&i.createElement("title",null,h),T)}));g.propTypes={className:l().string,color:l().string,size:l().number,name:l().string,title:l().string,svgPaths16:l().arrayOf(l().string).isRequired,svgPaths20:l().arrayOf(l().string).isRequired},r.Z=g},7102:function(e,r,t){var o=t(4942),n=t(87462),i=t(45987),a=t(72791),c=t(81694),s=t.n(c),l=t(52007),p=t.n(l),d=t(68246),u=t.n(d),f=t(31629),b=["activeElevation","background","border","borderBottom","borderLeft","borderRight","borderTop","className","elevation","hoverElevation"],m=["className"];function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O={_hover:"&:hover",_active:"&:active"},y={},h=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.activeElevation,o=e.background,c=e.border,l=e.borderBottom,p=e.borderLeft,d=e.borderRight,v=e.borderTop,g=e.className,h=e.elevation,j=e.hoverElevation,P=(0,i.Z)(e,b),w=(0,f.m)("Pane",{elevation:h,hoverElevation:j,activeElevation:t,background:o,border:c,borderTop:v,borderRight:d,borderBottom:l,borderLeft:p},O,y),Z=w.className,E=(0,i.Z)(w,m);return a.createElement(u(),(0,n.Z)({ref:r,className:s()(g,Z)},E,P))}))),j=p().oneOfType([p().string,p().bool]);h.propTypes=g(g({},u().propTypes),{},{background:p().string,elevation:p().oneOf([0,1,2,3,4]),hoverElevation:p().oneOf([0,1,2,3,4]),activeElevation:p().oneOf([0,1,2,3,4]),border:j,borderTop:j,borderRight:j,borderBottom:j,borderLeft:j}),r.Z=h},58620:function(e,r,t){t.d(r,{Z:function(){return ae}});var o=t(4942),n=t(87462),i=t(45987),a=t(72791),c=t(52007),s=t.n(c),l=t(68246),p=t.n(l),d=t(12668);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var f=(0,a.memo)((0,a.forwardRef)((function(e,r){return a.createElement(d.Z,(0,n.Z)({marginTop:4,marginBottom:0,size:300,color:"muted"},e,{ref:r}))})));f.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},d.Z.propTypes);var b=f;function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var v=(0,a.memo)((0,a.forwardRef)((function(e,r){return a.createElement(d.Z,(0,n.Z)({marginTop:0,size:300,color:"muted"},e,{ref:r}))})));v.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},d.Z.propTypes);var g=v,O=t(81694),y=t.n(O),h=t(31629),j=["className","size"],P=["className"];function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var E={},T={},D=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.className,o=e.size,c=void 0===o?400:o,s=(0,i.Z)(e,j),l=(0,h.m)("Label",{size:c},E,T),d=l.className,u=(0,i.Z)(l,P);return a.createElement(p(),(0,n.Z)({is:"label",ref:r,className:y()(d,t)},u,s))})));D.propTypes=Z(Z({},p().propTypes),{},{size:s().oneOf([100,200,300,400,500,600,700,800,900])});var k=D,x=["children","isAstrixShown"];function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var z=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.children,o=e.isAstrixShown,c=(0,i.Z)(e,x);return a.createElement(k,(0,n.Z)({display:"block",marginBottom:0},c,{ref:r}),t," ",o&&a.createElement("span",{title:"This field is required."},"*"))})));z.propTypes=R(R({},k.propTypes),{},{isAstrixShown:s().bool});var C=z,N=t(66703),F=t(7102),M=["children"];function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var I=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.children,o=(0,i.Z)(e,M);return a.createElement(F.Z,(0,n.Z)({ref:r,display:"flex"},o),a.createElement(N.P,{color:"danger",marginTop:1,size:14,marginRight:8}),a.createElement(d.Z,{marginTop:0,size:300,color:"danger",role:"alert"},t))})));I.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},F.Z.propTypes);var B=I,L=["hint","label","labelFor","children","isRequired","labelProps","description","validationMessage"];function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var V=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.hint,o=e.label,c=e.labelFor,s=e.children,l=e.isRequired,d=e.labelProps,u=void 0===d?{size:400}:d,f=e.description,m=e.validationMessage,v=(0,i.Z)(e,L);return a.createElement(p(),(0,n.Z)({},v,{ref:r}),a.createElement(p(),{display:"flex",flexDirection:"column",marginBottom:8},a.createElement(C,(0,n.Z)({htmlFor:c,isAstrixShown:l},u),o),"string"===typeof f?a.createElement(b,null,f):f),s,"string"===typeof m?a.createElement(B,{marginTop:8},m):m,"string"===typeof t?a.createElement(g,{marginTop:6},t):t)})));V.propTypes=H(H(H(H({label:s().node.isRequired,labelFor:s().string,isRequired:s().bool,description:s().node,hint:s().node,validationMessage:s().node},l.dimensions.propTypes),l.spacing.propTypes),l.position.propTypes),l.layout.propTypes);var A=V,G=t(29439),W=0;var X=t(62171),Y=["className","disabled","fontFamily","grammarly","height","isInvalid","placeholder","required","spellCheck","width"],J=["className"];function K(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?K(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var U={_focus:"&:focus",_disabled:"&:disabled",_invalid:'&[aria-invalid="true"]:not(:focus)',_placeholder:"&::placeholder",_placeholderHover:"&:hover::placeholder",_placeholderFocus:"&:focus::placeholder"},$={border:"none",MozAppearance:"none",outline:"none",textDecoration:"none",WebkitAppearance:"none",WebkitFontSmoothing:"antialiased",minHeight:80,paddingX:12,paddingY:8,borderRadius:4},ee=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.className,o=e.disabled,c=void 0!==o&&o,s=e.fontFamily,l=void 0===s?"ui":s,d=e.grammarly,u=void 0!==d&&d,f=e.height,b=e.isInvalid,m=void 0!==b&&b,v=e.placeholder,g=e.required,O=e.spellCheck,j=void 0===O||O,P=e.width,w=void 0===P?"100%":P,Z=(0,i.Z)(e,Y),E=(0,X.Z)().fontFamilies[l]||l,T=(0,h.m)("Input",{appearance:"default"},U,$),D=T.className,k=(0,i.Z)(T,J);return a.createElement(p(),(0,n.Z)({is:"textarea",ref:r,className:y()(D,t),width:w,height:f,required:g,disabled:c,placeholder:v,spellCheck:j,"aria-invalid":m,"data-gramm_editor":u,fontFamily:E},k,Z))})));ee.propTypes=Q(Q(Q(Q(Q({},l.dimensions.propTypes),l.spacing.propTypes),l.position.propTypes),l.layout.propTypes),{},{required:s().bool,disabled:s().bool,isInvalid:s().bool,spellCheck:s().bool,grammarly:s().bool,placeholder:s().string,appearance:s().string,width:s().oneOfType([s().string,s().number]),className:s().string});var re=ee,te=["appearance","description","disabled","hint","id","inputHeight","inputWidth","isInvalid","label","placeholder","required","resize","spellCheck","validationMessage"];function oe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ne(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?oe(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ie=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=function(e,r){var t=(0,a.useState)((function(){return r||[e,++W].filter(Boolean).join("-")}));return(0,G.Z)(t,1)[0]}("TextareaField",e.id),o=e.appearance,c=e.description,s=e.disabled,p=e.hint,d=(e.id,e.inputHeight),u=void 0===d?80:d,f=e.inputWidth,b=void 0===f?"100%":f,m=e.isInvalid,v=e.label,g=e.placeholder,O=e.required,y=e.resize,h=e.spellCheck,j=e.validationMessage,P=(0,i.Z)(e,te),w=(0,l.splitBoxProps)(P),Z=w.matchedProps,E=w.remainingProps;return a.createElement(A,(0,n.Z)({marginBottom:24,label:v,isRequired:O,hint:p,description:c,validationMessage:j,labelFor:t},Z),a.createElement(re,(0,n.Z)({id:t,ref:r,width:b,height:u,disabled:s,required:O,isInvalid:m,appearance:o,placeholder:g,spellCheck:h,resize:y},E)))})));ie.propTypes=ne(ne(ne({},re.propTypes),A.propTypes),{},{label:s().node.isRequired,required:s().bool,description:s().node,hint:s().node,validationMessage:s().node,inputHeight:s().number,inputWidth:s().oneOfType([s().number,s().string])});var ae=ie},12668:function(e,r,t){var o=t(4942),n=t(87462),i=t(45987),a=t(72791),c=t(52007),s=t.n(c),l=t(68246),p=t.n(l),d=t(31629),u=t(62171),f=["color","fontFamily","size"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v={},g=(0,a.memo)((0,a.forwardRef)((function(e,r){var t=e.color,o=void 0===t?"default":t,c=e.fontFamily,s=void 0===c?"ui":c,l=e.size,b=void 0===l?400:l,m=(0,i.Z)(e,f),g=(0,u.Z)(),O=g.colors,y=g.fontFamilies[s]||s,h=O[o]||O.text&&O.text[o]||o,j=(0,d.m)("Paragraph",{size:b},v,v);return a.createElement(p(),(0,n.Z)({is:"p",ref:r},j,{fontFamily:y,color:h},m))})));g.propTypes=m(m({},p().propTypes),{},{size:s().oneOf([300,400,500]),fontFamily:s().string}),r.Z=g}}]);
//# sourceMappingURL=271.bcbd92c8.chunk.js.map