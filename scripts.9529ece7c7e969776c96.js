var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,s=a.util.type(t);switch(n=n||{},s){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in n[i]=r={},t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(n[i]=r=[],t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var u=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],u=a.util.type(l);"Object"!==u||i[s(l)]?"Array"!==u||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:n,language:s,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),i&&i.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(i&&i.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,i,s,o,l){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var c=n[u];c=Array.isArray(c)?c:[c];for(var d=0;d<c.length;++d){if(l&&l==u+","+d)return;var g=c[d],p=g.inside,f=!!g.lookbehind,m=!!g.greedy,h=0,y=g.alias;if(m&&!g.pattern.global){var b=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,b+"g")}g=g.pattern||g;for(var v=i,w=s;v<t.length;w+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof r)){if(m&&v!=t.length-1){if(g.lastIndex=w,!($=g.exec(e)))break;for(var F=$.index+(f&&$[1]?$[1].length:0),A=$.index+$[0].length,x=v,P=w,S=t.length;x<S&&(P<A||!t[x].type&&!t[x-1].greedy);++x)F>=(P+=t[x].length)&&(++v,w=P);if(t[v]instanceof r)continue;E=x-v,k=e.slice(w,P),$.index-=w}else{g.lastIndex=0;var $=g.exec(k),E=1}if($){f&&(h=$[1]?$[1].length:0),A=(F=$.index+h)+($=$[0].slice(h)).length;var _=k.slice(0,F),j=k.slice(A),N=[v,E];_&&(++v,w+=_.length,N.push(_));var C=new r(u,p?a.tokenize($,p):$,y,$,m);if(N.push(C),j&&N.push(j),Array.prototype.splice.apply(t,N),1!=E&&a.matchGrammar(e,t,n,v,w,!0,u+","+d),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var n={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}a.hooks.run("wrap",n);var s=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(s?" "+s:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[r],r)),i&&e.close()}),!1),a):a;var i=a.util.currentScript();if(i&&(a.filename=i.src,i.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){function s(){a.manual||a.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&i&&i.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return a}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,a=e.getAttribute("data-src"),r=e,i=/\blang(?:uage)?-([\w-]+)\b/i;r&&!i.test(r.className);)r=r.parentNode;if(r&&(n=(e.className.match(i)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=t[s]||s}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var l=new XMLHttpRequest;l.open("GET",a,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(o.textContent=l.responseText,Prism.highlightElement(o),e.setAttribute("data-src-loaded","")):o.textContent=l.status>=400?"✖ Error "+l.status+" while fetching file: "+l.statusText:"✖ Error: File does not exist or is empty")},l.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()}))),Prism.languages.csharp=Prism.languages.extend("clike",{keyword:/\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,string:[{pattern:/@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,greedy:!0}],"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,operator:/>>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),Prism.languages.insertBefore("csharp","class-name",{"generic-method":{pattern:/\w+\s*<[^>\r\n]+?>\s*(?=\()/,inside:{function:/^\w+/,"class-name":{pattern:/\b[A-Z]\w*(?:\.\w+)*\b/,inside:{punctuation:/\./}},keyword:Prism.languages.csharp.keyword,punctuation:/[<>(),.:]/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}}),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(Prism),function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var e,t=function(){if(void 0===e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding=0,t.style.border=0,t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e},n=0;Prism.hooks.add("before-sanity-check",(function(e){var t=e.element.parentNode,n=t&&t.getAttribute("data-line");if(t&&n&&/pre/i.test(t.nodeName)){var r=0;a(".line-highlight",t).forEach((function(e){r+=e.textContent.length,e.parentNode.removeChild(e)})),r&&/^( \n)+$/.test(e.code.slice(-r))&&(e.code=e.code.slice(0,-r))}})),Prism.hooks.add("complete",(function e(t){var a=t.element.parentNode,i=a&&a.getAttribute("data-line");if(a&&i&&/pre/i.test(a.nodeName)){clearTimeout(n);var l=Prism.plugins.lineNumbers,u=t.plugins&&t.plugins.lineNumbers;r(a,"line-numbers")&&l&&!u?Prism.hooks.add("line-numbers",e):(s(a,i)(),n=setTimeout(o,1))}})),window.addEventListener("hashchange",o),window.addEventListener("resize",(function(){var e=[];a("pre[data-line]").forEach((function(t){e.push(s(t))})),e.forEach(i)}))}function a(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function r(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function i(e){e()}function s(e,n,a){var s=(n="string"==typeof n?n:e.getAttribute("data-line")).replace(/\s+/g,"").split(","),o=+e.getAttribute("data-line-offset")||0,l=(t()?parseInt:parseFloat)(getComputedStyle(e).lineHeight),u=r(e,"line-numbers"),c=u?e:e.querySelector("code")||e,d=[];return s.forEach((function(t){var n=t.split("-"),r=+n[0],i=+n[1]||r,s=e.querySelector('.line-highlight[data-range="'+t+'"]')||document.createElement("div");if(d.push((function(){s.setAttribute("aria-hidden","true"),s.setAttribute("data-range",t),s.className=(a||"")+" line-highlight"})),u&&Prism.plugins.lineNumbers){var g=Prism.plugins.lineNumbers.getLine(e,r),p=Prism.plugins.lineNumbers.getLine(e,i);if(g){var f=g.offsetTop+"px";d.push((function(){s.style.top=f}))}if(p){var m=p.offsetTop-g.offsetTop+p.offsetHeight+"px";d.push((function(){s.style.height=m}))}}else d.push((function(){s.setAttribute("data-start",r),i>r&&s.setAttribute("data-end",i),s.style.top=(r-o-1)*l+"px",s.textContent=new Array(i-r+2).join(" \n")}));d.push((function(){c.appendChild(s)}))})),function(){d.forEach(i)}}function o(){var e=location.hash.slice(1);a(".temporary.line-highlight").forEach((function(e){e.parentNode.removeChild(e)}));var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),r=document.getElementById(n);r&&(r.hasAttribute("data-line")||r.setAttribute("data-line",""),s(r,t,"temporary ")(),document.querySelector(".temporary.line-highlight").scrollIntoView())}}}();