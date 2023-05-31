(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>l});var t=n(81),a=n.n(t),o=n(645),i=n.n(o)()(a());i.push([e.id,'@charset "UTF-8";\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    box-sizing: border-box;\r\n}\r\nbody{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background: radial-gradient(circle, #22499C, #00277A 50vh);\r\n}\r\n#game-title{\r\n    font-size: 4em;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: white;\r\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.496);\r\n}\r\n.start-screen{\r\n    display: flex;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    width: 50vw;\r\n    translate: -50% -50%;\r\n}\r\n.start-screen > *{\r\n    padding: 10px;\r\n    margin: 5px;\r\n    border-radius: 8px;\r\n    font-size: 1.5em;\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.425);\r\n}\r\n.start-screen--invisible{\r\n    display: none;\r\n}\r\n.start-screen__name-input{\r\n    text-transform: uppercase;\r\n}\r\n.start-screen__text{\r\n    color: white;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.500) ;\r\n    box-shadow: none;\r\n}\r\n.game-screen{\r\n    display: flex;\r\n    position: absolute;\r\n    width: 100vw;\r\n    top: 50%;\r\n    left: 50%;\r\n    justify-content: space-evenly;\r\n    translate: -50% -50%;\r\n}\r\n.game-screen--invisible{\r\n    display: none;\r\n}\r\n.end-screen{\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    translate: -50% -50%;\r\n}\r\n.end-screen > *{\r\n    font-weight: bold;\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin: 5px;\r\n}\r\n.end-screen__text{\r\n    font-size: 3em;\r\n    color: white;\r\n    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.427);\r\n}\r\n.end-screen--invisible{\r\n    display: none;\r\n}\r\n.board{\r\n    width: 40vw;\r\n    height: 40vw;\r\n    max-width: 80vh;\r\n    max-height: 80vh;\r\n    display: grid;\r\n    gap: 3px;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);\r\n}\r\n.placement-board{\r\n    width: 60vw;\r\n    height: 60vw;\r\n    max-width: 60vh;\r\n    max-height: 60vh;\r\n    display: grid;\r\n    gap: 3px;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    grid-template-rows: repeat(10, 1fr);    \r\n}\r\n.board-placement-screen{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    translate: -50% -50%;\r\n}\r\n.board-placement-screen__checkbox{\r\n    display: none;\r\n}\r\n.board-placement-screen__label{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background-color: white;\r\n}\r\n.board-placement-screen__label:active{\r\n    padding: 10px;\r\n    margin: 10px;\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n\r\n.board-placement-screen--invisible{\r\n    display: none;\r\n}\r\n.cell{\r\n    border: 1px solid white;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n.cell--ship-projection{\r\n    background-color: #FFFFFFAA;\r\n}\r\n.board > .cell:hover{\r\n    background-color: #65ff65;\r\n    transition: 200ms;\r\n}\r\n.board > .cell--marked:hover{\r\n    background-color: #ff5d5d;\r\n    transition: 200ms;\r\n}\r\n.cell--ship{\r\n    border: 2px solid white;\r\n    background-color: #3e7bff;\r\n}\r\n.cell--sunked-ship{\r\n    border: 1px solid white;\r\n    background-color: #ff5d5d;\r\n    transition: 500ms;\r\n}\r\n.cell__mark{\r\n    width: 50%;\r\n    height: 50%;\r\n    position: relative;\r\n    top: 50%;\r\n    left: 50%;\r\n    background-color: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.458);\r\n    translate: -50% -50%;\r\n}\r\n.cell--marked-ship > .cell__mark{\r\n    background-color: red;\r\n\r\n}\r\n',""]);const l=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);t&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),r.push(d))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},i=[],l=0;l<e.length;l++){var c=e[l],s=t.base?c[0]+t.base:c[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(h);else{var m=a(h,t);t.byIndex=l,r.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);r[l].references--}for(var c=t(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{const e=(()=>{let e=document.querySelector("#start-screen"),r=document.querySelector(".start-screen__name-input"),n=document.querySelector(".start-screen__start-input"),t=document.querySelector("#board-placement-screen"),a=document.querySelector("#game-screen"),o=document.querySelector("#player-board"),i=document.querySelector("#pc-board"),l=document.querySelector("#end-screen"),c=document.querySelector(".end-screen__text");return document.querySelector(".end-screen__play-again").addEventListener("click",(()=>{l.classList.add("end-screen--invisible"),e.classList.remove("start-screen--invisible")})),{playerNameInput:r,startGameInput:n,changeToBoardScreen:()=>{e.classList.add("start-screen--invisible"),t.classList.remove("board-placement-screen--invisible")},changeToGameScreen:()=>{t.classList.add("board-placement-screen--invisible"),a.classList.remove("game-screen--invisible")},changeToEndScreen:e=>{a.classList.add("game-screen--invisible"),l.classList.remove("end-screen--invisible"),c.textContent=`${e} WINS`},updateGameScreen:e=>{let r;e.playerName?(r=e.PlayerBoard.updateHTML(!0),o.innerHTML=r):(r=e.PlayerBoard.updateHTML(),i.innerHTML=r)},returnBoardList:e=>{let r;return r=e.playerName?o.querySelectorAll(".cell"):i.querySelectorAll(".cell"),r}}})(),r=()=>{let e=[],r=[];(()=>{for(let r=0;r<100;r++)e.push({hited:!1,hasShip:!1})})();const n=(r,n,t)=>{let a=((e,r,n)=>{let t=[r];for(let a=1;a<e;a++)"x"===n?t.push(r+a):t.push(r+10*a);return t})(r,n,t);return!((r,n)=>{for(let t in r){let a=r[t];if(Math.floor(a/10)>9)return!0;if(9==a%10&&t<r.length-1&&"x"===n)return!0;if(e[a].hasShip)return!0}return!1})(a,t)&&a},t=r=>{let n=document.createElement("div");return e.forEach((e=>{let t=document.createElement("div");if(t.classList.add("cell"),e.hited){t.classList.add("cell--marked");let e=document.createElement("div");e.classList.add("cell__mark"),t.appendChild(e)}e.hasShip&&e.hasShip.isSunk()&&t.classList.add("cell--sunked-ship"),e.hasShip&&r&&t.classList.add("cell--ship"),e.hited&&e.hasShip&&t.classList.add("cell--marked-ship"),n.appendChild(t)})),n.innerHTML};let a=t();return{placeShip:(t,a,o)=>{let i=n(t,a,o);if(!1===i)return!1;let l=((e,r)=>{let n=r,t=[];return{lenght:e,coords:n,hit:e=>(t.push(e),!0),hitedCoords:t,isSunk:()=>t.length===n.length}})(t,i);return i.forEach((r=>{e[r].hasShip=l})),r.push(l),!0},board:e,receiveAttack:r=>!e[r].hited&&(e[r].hasShip&&e[r].hasShip.hit(r),e[r].hited=!0,a=t(),!0),ships:r,allSunk:()=>{for(let e in r)if(!r[e].isSunk())return!1;return!0},updateHTML:(e=!1)=>(a=t(e),a),generateValidLocations:n}},t=e=>({playerName:e,PlayerBoard:r(),attack:(e,r)=>r.PlayerBoard.receiveAttack(e)}),a=()=>Object.assign({IAAttack:e=>{!1===(e=>{let r=(e=>{let r=[];return e.board.forEach(((e,n)=>{e.hited&&e.hasShip&&r.push(n)})),r})(e),n=((e,r)=>{let n=[];return r.forEach((r=>{!1===e.board[r].hited&&n.push(r)})),n})(e,(e=>{let r=[];return e.forEach((e=>{let n=e-1,t=e+1,a=e-10,o=e+10;r=r.concat(((e,r,n,t)=>{let a=[];return e%10!=9&&e>=0&&a.push(e),r%10!=0&&a.push(r),n>0&&a.push(n),t<100&&a.push(t),a})(n,t,a,o))})),r})(r));if(n=[...new Set(n)],n.length>0){let r=Math.floor(Math.random()*n.length);return e.receiveAttack(n[r]),!0}return!1})(e)&&(e=>{let r=[];e.board.forEach(((e,n)=>{!1===e.hited&&r.push(n)}));let n=Math.floor(Math.random()*r.length);e.receiveAttack(r[n])})(e)},placeRandomShip:(e,r)=>{let n=[],t=0===Math.floor(2*Math.random())?"x":"y";e.board.forEach(((e,r)=>n.push(r)));let a=n.filter((n=>!!e.generateValidLocations(r,n,t))),o=Math.floor(Math.random()*a.length);e.placeShip(r,a[o],t)}},t()),o=(()=>{let r,n,o,i;const l=r=>{let n;n=r.playerName?r.playerName:"PC",e.changeToEndScreen(n)},c=()=>{o.playerName?(o=r,i=n):(o=n,i=r),s()},s=()=>{o===n?e.returnBoardList(i).forEach(((r,n)=>{r.addEventListener("click",(()=>{o.attack(n,i)&&(e.updateGameScreen(i),i.PlayerBoard.allSunk()?l(o):c())}))})):(r.IAAttack(n.PlayerBoard),e.updateGameScreen(i),i.PlayerBoard.allSunk()?l(o):c())};return{startGame:(l,c)=>{l=l.toUpperCase(),n=t(l),c.forEach((e=>{n.PlayerBoard.placeShip(e.size,e.initialCoord,e.orientation)})),o=n,e.updateGameScreen(n),r=a(),r.placeRandomShip(r.PlayerBoard,5),r.placeRandomShip(r.PlayerBoard,4),r.placeRandomShip(r.PlayerBoard,3),r.placeRandomShip(r.PlayerBoard,3),r.placeRandomShip(r.PlayerBoard,2),i=r,e.updateGameScreen(r),s(n)}}})(),i=o,l=(()=>{let r,n,a=document.querySelector(".placement-board"),o=document.querySelector(".board-placement-screen__checkbox"),l=document.querySelector(".board-placement-screen__label"),c=[5,4,3,3,2],s=[];o.addEventListener("change",(()=>{o.checked?l.textContent="AXIS: Y":l.textContent="AXIS: X"}));const d=()=>{n=a.querySelectorAll(".cell"),n.forEach(((e,r)=>{e.addEventListener("mouseover",(()=>{m(r)})),e.addEventListener("click",(()=>{p(r),d()}))}))},p=e=>{let n=r.PlayerBoard.ships.length,t=c[n],a=o.checked?"y":"x",i={size:t,initialCoord:e,orientation:a};s.push(i),r.PlayerBoard.placeShip(t,e,a),h(),n>c.length-2&&u()},u=()=>{e.changeToGameScreen(),i.startGame(e.playerNameInput.value,s),e.playerNameInput.value=null},h=()=>{let e=r.PlayerBoard.updateHTML(!0);a.innerHTML=e},m=e=>{n.forEach((e=>{e.classList.remove("cell--ship-projection")}));let t=r.PlayerBoard.ships.length,a=o.checked?"y":"x",i=r.PlayerBoard.generateValidLocations(c[t],e,a);i?i.forEach((e=>{n[e].classList.add("cell--ship-projection")})):n[e].style.cursor="not-allowed"};return{start:()=>{r=t(),h(),d(),s=[]}}})();var c=n(379),s=n.n(c),d=n(795),p=n.n(d),u=n(569),h=n.n(u),m=n(565),f=n.n(m),v=n(216),g=n.n(v),y=n(589),b=n.n(y),x=n(426),S={};S.styleTagTransform=b(),S.setAttributes=f(),S.insert=h().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=g(),s()(x.Z,S),x.Z&&x.Z.locals&&x.Z.locals,e.startGameInput.addEventListener("click",(()=>{e.playerNameInput.value?(e.changeToBoardScreen(),l.start()):(e.playerNameInput.placeholder="Name is necessarry",e.playerNameInput.focus())}))})()})();