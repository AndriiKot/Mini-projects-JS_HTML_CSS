(()=>{"use strict";const n=n=>"function"==typeof n,t=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:n)(t)&&t()||t},o=function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)].map((()=>o(o(n))))},e=document.querySelector("button"),i="animationGo",l=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*t+n)}.bind(void 0,0,100),c=(o(8,0),o.bind(void 0,8,l),((n,t)=>{n.classList.toggle(t)}).bind(void 0,e,i));e.addEventListener("click",c),e.addEventListener("click",(async function(n,t,o){n.currentTarget.classList.contains(i)?console.log("ON"):console.log("OFF")})),console.log(function(){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return[...new Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:8)].fill(n)}())})();
//# sourceMappingURL=bundle.js.map