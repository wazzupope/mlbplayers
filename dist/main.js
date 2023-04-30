(()=>{"use strict";function t(t){const e=document.createElement("table");return e.setAttribute("id",t),e}function e(t){const e=t,n=`${e.id}-body`,a=document.createElement("thead");a.setAttribute("class","table-header"),e.appendChild(a);const s=document.createElement("tbody");s.setAttribute("class","table-body"),s.setAttribute("id",n),e.appendChild(s);const l=document.createElement("tr");function c(){const t=document.createElement("th");return t.setAttribute("class","table-cell"),t}l.setAttribute("class","tr"),l.setAttribute("class","header-row"),a.appendChild(l),l.appendChild(c()),l.appendChild(c());const r=document.createElement("th");r.setAttribute("class","table-cell"),r.setAttribute("class","header-cell"),l.appendChild(r);const d=document.createElement("button");d.setAttribute("class","header-button"),d.setAttribute("class","games-played"),d.setAttribute("id","gamesPlayed"),d.textContent="GP",r.appendChild(d);const i=document.createElement("th");i.setAttribute("class","table-cell"),i.setAttribute("class","header-cell"),l.appendChild(i);const o=document.createElement("button");o.setAttribute("class","header-button"),o.setAttribute("class","games-won"),o.setAttribute("id","gamesWon"),o.textContent="W",i.appendChild(o);const u=document.createElement("th");u.setAttribute("class","table-cell"),u.setAttribute("class","header-cell"),l.appendChild(u);const m=document.createElement("button");m.setAttribute("class","header-button"),m.setAttribute("class","games-lost"),m.setAttribute("id","gamesLost"),m.textContent="L",u.appendChild(m);const b=document.createElement("th");b.setAttribute("class","table-cell"),b.setAttribute("class","header-cell"),l.appendChild(b);const p=document.createElement("button");p.setAttribute("class","header-button"),p.setAttribute("class","win-pct"),p.setAttribute("id","winPct"),p.textContent="Win%",b.appendChild(p);const h=document.createElement("th");h.setAttribute("class","table-cell"),h.setAttribute("class","header-cell"),l.appendChild(h);const A=document.createElement("button");A.setAttribute("class","header-button"),A.setAttribute("class","runs-for"),A.setAttribute("id","runsFor"),A.textContent="RS",h.appendChild(A);const g=document.createElement("th");g.setAttribute("class","table-cell"),g.setAttribute("class","header-cell"),l.appendChild(g);const C=document.createElement("button");C.setAttribute("class","header-button"),C.setAttribute("class","runs-against"),C.setAttribute("id","runsAgainst"),C.textContent="RA",g.appendChild(C);const E=document.createElement("th");E.setAttribute("class","table-cell"),E.setAttribute("class","header-cell"),l.appendChild(E);const f=document.createElement("button");f.setAttribute("class","header-button"),f.setAttribute("class","run-diff"),f.setAttribute("id","runDiff"),f.textContent="Diff",E.appendChild(f)}function n(t,e){const n=document.createElement("td");return n.textContent=t,n.setAttribute("class","table-cell"),n.setAttribute("class",e),n}!function(){const e=document.getElementById("content");for(;e.lastChild;)e.lastChild.remove();e.appendChild(function(){const t=document.createElement("header");t.setAttribute("id","header");const e=document.createElement("h1");return e.setAttribute("id","title"),e.textContent="MLB Standings",t.appendChild(e),t}()),e.appendChild(function(){const t=document.createElement("main");t.setAttribute("id","main");const e=document.createElement("section");e.setAttribute("id","al-container");const n=document.createElement("section");n.setAttribute("id","nl-container"),t.appendChild(e),t.appendChild(n);const a=document.createElement("h2");a.setAttribute("class","league-header"),a.textContent="American League";const s=document.createElement("h2");return s.setAttribute("class","league-header"),s.textContent="National League",e.appendChild(a),n.appendChild(s),t}());const n=document.getElementById("al-container"),a=document.getElementById("nl-container");n.appendChild(t("al-table")),a.appendChild(t("nl-table"))}();const a=["team","games-played","games-won","games-lost","win-pct","runs-for","runs-against","run-diff"];function s(t){const e=t.name,s=document.createElement("tr"),l=e.replace(/\w+/g,(t=>t.charAt(0).toLowerCase()+t.substr(1))).replace(/\s/g,"-").replace(".","-");s.setAttribute("id",l);const c=document.getElementById("al-table-body"),r=document.getElementById("nl-table-body");"American League"===t.league?(c.appendChild(s),s.setAttribute("class","al-row"),s.setAttribute("class","row")):(r.appendChild(s),s.setAttribute("class","nl-row"),s.setAttribute("class","row")),s.appendChild(function(t){const e=document.createElement("td"),n=document.createElement("img");return e.appendChild(n),n.setAttribute("class","logo-img"),n.src=t.logo,n.height="30",e.setAttribute("class","table-cell"),e.setAttribute("class","logo-cell"),e}(t)),s.appendChild(n(t.name,a[0])),s.appendChild(n(t.gamesPlayed,a[1])),s.appendChild(n(t.gamesWon,a[2])),s.appendChild(n(t.gamesLost,a[3])),s.appendChild(n(t.winPct,a[4])),s.appendChild(n(t.runsFor,a[5])),s.appendChild(n(t.runsAgainst,a[6])),s.appendChild(n(t.runDiff,a[7]))}const l=new Headers;l.append("x-apisports-key","c16bc477f3a2a8d3fd289b58d1172ad8");const c={method:"GET",headers:l,redirect:"follow"};class r{constructor(t,e,n,a,s,l,c,r,d,i){this.name=t,this.id=e,this.logo=n,this.runsFor=a,this.runsAgainst=s,this.runDiff=a-s,this.league=l,this.gamesPlayed=c,this.gamesWon=r,this.gamesLost=d,this.winPct=i}}function d(t,e,n="asc"){const a=document.getElementById("al-table-body"),l=document.getElementById("nl-table-body");a.innerHTML&&l.innerHTML&&(a.innerHTML="",l.innerHTML="");("desc"===n?[...t].sort(((t,n)=>t[e]<n[e]?-1:t[e]>n[e]?1:0)):[...t].sort(((t,n)=>n[e]<t[e]?-1:n[e]>t[e]?1:0))).map((t=>(s(t),t)))}fetch("https://v1.baseball.api-sports.io/standings?season=2023&league=1",c,{mode:"cors"}).then((t=>t.json())).then((t=>t.response[0])).then((t=>{const e=function(t){return t.map((t=>new r(t.team.name,t.team.id,t.team.logo,t.points.for,t.points.against,t.group.name,t.games.played,t.games.win.total,t.games.lose.total,t.games.win.percentage)))}(t),n=e.filter((t=>"American League"===t.league)),a=e.filter((t=>"National League"===t.league));return n.concat(a)})).then((t=>(function(){const t=document.getElementById("al-table"),n=document.getElementById("nl-table");e(t),e(n)}(),function(t){const e=t.map((t=>(s(t),t))),n=e.filter((t=>"American League"===t.league)),a=e.filter((t=>"National League"===t.league)),l=document.querySelectorAll("th button"),c=Array.from(document.querySelectorAll("tr td"));[...l].map((t=>(t.addEventListener("click",(t=>{var e;c.forEach((t=>(t.hasAttribute("selected-column")&&t.removeAttribute("selected-column"),c))),e=t,[...l].map((t=>(t!==e.target&&t.removeAttribute("data-dir"),t))),"desc"===t.target.getAttribute("data-dir")?(d(n,t.target.id,"desc"),d(a,t.target.id,"desc"),t.target.setAttribute("data-dir","asc")):(d(n,t.target.id,"asc"),d(a,t.target.id,"asc"),t.target.setAttribute("data-dir","desc"));const s=t.target.classList[0];return c.forEach((t=>{t.classList.contains(s)&&t.classList.add("selected-column")})),t})),l)))}(t),t))).catch((t=>console.log("error",t)))})();