(this["webpackJsonptest-geo"]=this["webpackJsonptest-geo"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(18),a=n.n(r),s=(n(23),n(3)),i=n.n(s),u=n(6),l=n(2),d=n.p+"static/media/logo.6ce24c58.svg",j=(n(25),function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){t(e)},e.next=3,navigator.geolocation.watchPosition(n,(function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=n(9),b=n.n(p),f=n(1);b.a.accessToken="pk.eyJ1Ijoia2Fya2xlbyIsImEiOiJja2xxbmJjNmgxZHVzMm9tc2Vja3FzNmJmIn0.oMIEudxUzM7cbbOj2bybpw";var g=function(e){var t=e.lng,n=e.lat,c=e.track,r=Object(o.useRef)(null),a=Object(o.useState)(12),s=Object(l.a)(a,2),i=s[0],u=(s[1],Object(o.useState)(null)),d=Object(l.a)(u,2),j=d[0],p=d[1];return Object(o.useEffect)((function(){j&&(null===j||void 0===j||j.getSource("route").setData({type:"Feature",properties:{},geometry:{type:"LineString",coordinates:c}}))}),[c]),Object(o.useEffect)((function(){var e=r.current,o=new b.a.Map({container:e,style:"mapbox://styles/mapbox/streets-v11",center:[t,n],zoom:i});return p(o),o.on("load",(function(){o.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:c}}}),o.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#922","line-width":8}})})),function(){return o.remove()}}),[]),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"map-container",ref:r,style:{position:"absolute",top:100,right:100,left:100,bottom:100}})})};var O=function(){var e=Object(o.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)([]),a=Object(l.a)(r,2),s=a[0],p=a[1],b=Object(o.useState)(-70.9),O=Object(l.a)(b,2),v=O[0],m=O[1],h=Object(o.useState)(42.35),x=Object(l.a)(h,2),y=x[0],S=x[1];return console.log(n),console.log(s),Object(o.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(c);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.useEffect)((function(){n&&(m(null===n||void 0===n?void 0:n.coords.longitude),S(null===n||void 0===n?void 0:n.coords.latitude),p(s.concat([[null===n||void 0===n?void 0:n.coords.longitude,null===n||void 0===n?void 0:n.coords.latitude]])))}),[n]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),n&&Object(f.jsx)("b",{children:"coords: ".concat(n.coords.latitude,", ").concat(n.coords.longitude)}),Object(f.jsxs)("p",{children:["Edit ",Object(f.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(f.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(f.jsx)(g,{lat:y,lng:v,track:s})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.0f8337e2.chunk.js.map