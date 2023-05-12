(()=>{"use strict";var e={426:(e,r,t)=>{t.d(r,{Z:()=>l});var n=t(81),a=t.n(n),o=t(645),i=t.n(o)()(a());i.push([e.id,"@charset \"UTF-8\";\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n#game-container{\r\n    display: flex;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    justify-content: space-evenly;\r\n    translate: -50% -50%;\r\n}\r\n.board{\r\n    width: 40vw;\r\n    height: 40vw;\r\n    max-width: 80vh;\r\n    max-height: 80vh;\r\n    border: 1px solid black;\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n.cell{\r\n    background-color: aqua;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    line-height: 200%;\r\n}\r\n.cell:hover{\r\n    border: 3px solid black;\r\n}\r\n.cell--marked::after{\r\n    content: 'X';\r\n    color: rgb(255, 0, 0);\r\n}\r\n.cell--marked-ship::after{\r\n    color: #0000ff;\r\n}.cell--ship{\r\n    border: 3px solid green;\r\n    background-color: rgb(177, 255, 131);\r\n}",""]);const l=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);n&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},i=[],l=0;l<e.length;l++){var c=e[l],s=n.base?c[0]+n.base:c[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(h);else{var f=a(h,n);n.byIndex=l,r.splice(l,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=t(o[i]);r[l].references--}for(var c=n(e,a),s=0;s<o.length;s++){var d=t(o[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},569:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,a&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{const e=()=>{let e=[],r=[];(()=>{for(let r=0;r<100;r++)e.push({hited:!1,hasShip:!1})})();const t=r=>{let t=document.createElement("div");return e.forEach((e=>{let n=document.createElement("div");n.classList.add("cell"),e.hited&&n.classList.add("cell--marked"),e.hasShip&&r&&n.classList.add("cell--ship"),e.hited&&e.hasShip&&n.classList.add("cell--marked-ship"),t.appendChild(n)})),t.innerHTML};let n=t();return{placeShip:(t,n,a)=>{let o=((e,r,t)=>{let n=[r];for(let a=1;a<e;a++)"x"===t?n.push(r+a):n.push(r+10*a);return n})(t,n,a);if(((r,t)=>{for(let n in r){let a=r[n];if(Math.floor(a/10)>9)return!0;if(9==a%10&&n<r.length-1&&"x"===t)return!0;if(e[a].hasShip)return!0}return!1})(o,a))return!1;let i=((e,r)=>{let t=r,n=[];return{lenght:e,coords:t,hit:e=>(n.push(e),!0),hitedCoords:n,isSunk:()=>n.length===t.length}})(t,o);return o.forEach((r=>{e[r].hasShip=i})),r.push(i),!0},board:e,receiveAttack:r=>!e[r].hited&&(e[r].hasShip&&e[r].hasShip.hit(r),e[r].hited=!0,n=t(),!0),ships:r,allSunk:()=>{for(let e in r)if(!r[e].isSunk())return!1;return!0},updateHTML:(e=!1)=>(n=t(e),n)}},r=r=>({playerName:r,PlayerBoard:e(),attack:(e,r)=>r.PlayerBoard.receiveAttack(e)}),n=(()=>{let e=document.querySelector("#player-board"),r=document.querySelector("#pc-board");return{updateScreen:t=>{let n;t.playerName?(n=t.PlayerBoard.updateHTML(!0),e.innerHTML=n):(n=t.PlayerBoard.updateHTML(),r.innerHTML=n)},returnBoardList:t=>{let n;return n=t.playerName?e.querySelectorAll(".cell"):r.querySelectorAll(".cell"),n}}})(),a=(()=>{let e,t,a,o;const i=()=>{n.returnBoardList(o).forEach(((r,l)=>{r.addEventListener("click",(()=>{var r;a.attack(l,o)&&(n.updateScreen(o),o.PlayerBoard.allSunk()?(r=a).playerName?console.log(`${r.playerName} won`):console.log("PC won"):(a.playerName?(a=e,o=t):(a=t,o=e),i()))}))}))};return{startGame:(l="Person")=>{t=r(l),t.PlayerBoard.placeShip(5,4,"x"),t.PlayerBoard.placeShip(4,19,"y"),t.PlayerBoard.placeShip(3,35,"x"),t.PlayerBoard.placeShip(3,54,"x"),t.PlayerBoard.placeShip(2,82,"x"),a=t,n.updateScreen(t),e=r(),e.PlayerBoard.placeShip(5,7,"y"),e.PlayerBoard.placeShip(4,11,"y"),e.PlayerBoard.placeShip(3,33,"y"),e.PlayerBoard.placeShip(3,40,"y"),e.PlayerBoard.placeShip(2,55,"y"),o=e,n.updateScreen(e),i(t)}}})();var o=t(379),i=t.n(o),l=t(795),c=t.n(l),s=t(569),d=t.n(s),p=t(565),u=t.n(p),h=t(216),f=t.n(h),v=t(589),y=t.n(v),m=t(426),g={};g.styleTagTransform=y(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=f(),i()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals,a.startGame("Igor")})()})();