webpackJsonp([10],{"./app/components/Buttons/ButtonOutline/index.js":function(e,n,o){"use strict";var t=o("./node_modules/rebass/dist/index.js"),i=(o.n(t),function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  ","\n  font-weight: 300;\n  font-family: 'Microsoft JhengHei', 'Noto Sans', Arial, sans-serif;\n  background: transparent;\n  box-shadow: inset 0 0 0 2px;\n  transition: all 0.25s ease;\n  &:hover {\n    box-shadow: inset 0 0 0 2px;\n    background: rgba(255, 255, 255, 0.125);\n  }\n  &:focus {\n    color: currentColor;\n  }\n"],["\n  ","\n  font-weight: 300;\n  font-family: 'Microsoft JhengHei', 'Noto Sans', Arial, sans-serif;\n  background: transparent;\n  box-shadow: inset 0 0 0 2px;\n  transition: all 0.25s ease;\n  &:hover {\n    box-shadow: inset 0 0 0 2px;\n    background: rgba(255, 255, 255, 0.125);\n  }\n  &:focus {\n    color: currentColor;\n  }\n"]));n.a=t.ButtonOutline.extend(i,function(e){return"\n    border-radius: "+(e.borderRadius||0)+";\n  "})},"./app/containers/HomePage/SectionQuiz/index.js":function(e,n,o){"use strict";function t(e,n){var o={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o}function i(e){var n=e.showQuizAction,o=e.windowHeight,i=e.windowWidth,r=t(e,["showQuizAction","windowHeight","windowWidth"]);return H(p.Relative,{style:{height:o,overflow:"hidden"}},void 0,H(b.a,{},void 0,s.a.createElement(S,z({},r,{size:Math.max(o,i),ratio:1,src:x.a}))),k,H(b.a,{},void 0,H(f.a,{is:h.a,color:"white"},void 0,H(m.a,{f:["1em","1.25em","1.75em"],color:"white",lineHeight:2},void 0,"2018年十大預測，你會是那精準的預言家嗎？",_,"快來和專家一起預言2018市場走向"),H(g.a,{is:l.Link,to:"/quiz/1",mt:"1em",f:["1em","1.25em"],color:"white",px:"2.5em",py:"1em",borderRadius:"2em",onClick:function(){n(Object.assign({},location))}},void 0,"開始測驗"))))}function r(e){return{showQuizAction:function(n){return e(Object(O.b)(n))}}}Object.defineProperty(n,"__esModule",{value:!0});var a=o("./node_modules/react/react.js"),s=o.n(a),c=o("./node_modules/react-redux/es/index.js"),u=o("./node_modules/redux/es/index.js"),d=o("./node_modules/prop-types/index.js"),l=(o.n(d),o("./node_modules/react-router-dom/index.js")),p=(o.n(l),o("./node_modules/rebass/dist/index.js")),f=(o.n(p),o("./app/components/GridSystem/Container/index.js")),b=o("./app/components/VerticalCenter/index.js"),m=o("./app/components/Text/index.js"),g=o("./app/components/Buttons/ButtonOutline/index.js"),h=o("./app/components/TextAlign/Center.js"),v=o("./app/decorators/WithResizeListener/index.js"),j=o("./app/containers/HomePage/SectionQuiz/intro2-bg.png"),x=o.n(j),w=o("./app/containers/HomePage/SectionQuiz/observe.png"),y=o.n(w),O=o("./app/containers/HomePage/actions.js"),z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},H=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,o,t,i){var r=n&&n.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&r)for(var s in r)void 0===o[s]&&(o[s]=r[s]);else o||(o=r||{});if(1===a)o.children=i;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:n,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}}}(),P=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  ",";\n"],["\n  ",";\n"]),S=p.BackgroundImage.extend(P,function(e){var n=e.size;return"\n    width: "+n+"px;\n    height: "+n+"px;\n  "}),k=H(p.Absolute,{bottom:!0,left:!0,right:!0},void 0,H(f.a,{},void 0,H(p.Relative,{ml:"auto",w:"20%",z:99},void 0,H(p.BackgroundImage,{ratio:453/314,src:y.a,mb:"-1em"})))),_=H("br",{});n.default=Object(u.c)(Object(c.b)(null,r),v.a)(i)},"./app/containers/HomePage/SectionQuiz/intro2-bg.png":function(e,n,o){e.exports=o.p+"globalassets/staticfiles/campaigns/taiwan/outlooks-2018/img/3525ea44cf2bf4d209934bfe7de4adcb.png"},"./app/containers/HomePage/SectionQuiz/observe.png":function(e,n,o){e.exports=o.p+"globalassets/staticfiles/campaigns/taiwan/outlooks-2018/img/b8b13a7ae7cfd31157211aacc5765ce6.png"},"./app/containers/HomePage/actions.js":function(e,n,o){"use strict";function t(e){var n=e.hash;return Object(r.a)(),{type:a.b,hash:n}}function i(){return Object(r.b)(),{type:a.a}}n.b=t,n.a=i;var r=o("./app/utils/appScrollHandler.js"),a=o("./app/containers/HomePage/constants.js")},"./app/utils/appScrollHandler.js":function(e,n,o){"use strict";function t(){document.body.style.overflow="hidden",document.body.style.height="100vh"}function i(){document.body.style.overflow="auto",document.body.style.height="auto"}o.d(n,"a",function(){return t}),o.d(n,"b",function(){return i})}});