webpackJsonp([3],{"./app/containers/HomePage/SectionGif/down.svg":function(e,o,n){e.exports=n.p+"globalassets/staticfiles/campaigns/taiwan/2018_outlook/css172dc113385a65e1736958dc259ffc19.svg"},"./app/containers/HomePage/SectionGif/index.js":function(e,o,n){"use strict";function t(e,o){var n={};for(var t in e)o.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}function r(e){var o=e.ratio,n=e.src,r=e.loop,i=e.autoPlay,a=e.muted,s=e.controls,l=e.playsInline,c=e.innerRef,f=t(e,["ratio","src","loop","autoPlay","muted","controls","playsInline","innerRef"]);return p.a.createElement(m.Relative,h({pb:100*o+"%"},f),w(P,{innerRef:c,loop:r,autoPlay:i,muted:a,controls:s,playsInline:l},void 0,g()(n)?n.map(j):j(n)))}function i(e,o){var n={};for(var t in e)o.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}function a(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function s(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function l(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var c=n("./node_modules/react/react.js"),p=n.n(c),f=(n("./node_modules/prop-types/index.js"),n("./node_modules/react-scroll/modules/index.js")),u=n("./node_modules/redux/es/index.js"),m=n("./node_modules/rebass/dist/index.js"),d=n("./app/components/GridSystem/Container/index.js"),y=n("./app/components/Text/index.js"),b=n("./node_modules/styled-components/dist/styled-components.es.js"),v=n("./node_modules/lodash/isArray.js"),g=n.n(v),h=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},w=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),P=b.default.video.withConfig({displayName:"NativePlayer__Player"})(["position: absolute;width: 100%;height: 100%;top: 0;left: 0;"]),j=function(e,o){return w("source",{src:e},o)};r.defaultProps={ratio:9/16};var _=r,O=n("./app/decorators/WithResizeListener/index.js"),x=n("./app/decorators/WithScrollListener/index.js"),S=n("./app/containers/HomePage/SectionGif/sample-480p.mp4"),k=n.n(S),G=n("./app/containers/HomePage/SectionGif/sample-720p.mp4"),H=n.n(G),R=n("./app/containers/HomePage/SectionGif/sample-480p.webm"),I=n.n(R),C=n("./app/containers/HomePage/SectionGif/sample-720p.webm"),E=n.n(C),A=n("./app/containers/HomePage/SectionGif/down.svg"),B=n.n(A),T=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},V=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),$=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),z=function(e,o){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}}))}(["\n  cursor: pointer;\n"],["\n  cursor: pointer;\n"]),W=m.BackgroundImage.extend(z),L=function(e){function o(){return a(this,o),s(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return l(o,e),$(o,[{key:"componentDidMount",value:function(){this.props.registerInView(this.container),this.props.inView.ele&&this.player.play()}},{key:"componentWillReceiveProps",value:function(e){var o=e.inView.ele;!this.props.inView.ele&&o&&this.player.play()}},{key:"render",value:function(){var e=this,o=this.props,n=o.isSm,t=i(o,["isSm"]);return p.a.createElement(d.a,T({},t,{innerRef:function(o){e.container=o}}),V(_,{src:n?[E.a,H.a]:[I.a,k.a],innerRef:function(o){e.player=o},loop:!0,muted:!0,playsInline:!0,controls:!1}),V(m.Absolute,{bottm:!0,left:!0,right:!0},void 0,V(m.Box,{mt:["-5em","-6em","-8em"]},void 0,V(m.Box,{w:["2em","2.5em","3em"],mx:"auto"},void 0,V(W,{src:B.a,ratio:1,mb:["0.5em","0.75em","1em"],onClick:function(){f.scroller.scrollTo("forecast",{duration:500,smooth:!0})}})),V(y.a,{center:!0,f:["1em","1.25em","1.5em"],color:"mainBlue"},void 0,"十大預測"))))}}]),o}(c.PureComponent);o.default=Object(u.c)(x.a,O.a)(L)},"./app/containers/HomePage/SectionGif/sample-480p.mp4":function(e,o,n){e.exports=n.p+"globalassets/staticfiles/campaigns/taiwan/2018_outlook/img71093d7a99325f5aecc802bffaf517d2.mp4"},"./app/containers/HomePage/SectionGif/sample-480p.webm":function(e,o,n){e.exports=n.p+"globalassets/staticfiles/campaigns/taiwan/2018_outlook/img9ce145e017ecee591f998d5ffbb56695.webm"},"./app/containers/HomePage/SectionGif/sample-720p.mp4":function(e,o,n){e.exports=n.p+"globalassets/staticfiles/campaigns/taiwan/2018_outlook/img963b013e7d8aae0cff2544c7fd6fb90c.mp4"},"./app/containers/HomePage/SectionGif/sample-720p.webm":function(e,o,n){e.exports=n.p+"globalassets/staticfiles/campaigns/taiwan/2018_outlook/img4601203c3f734c8bd197939b30e37e4d.webm"}});