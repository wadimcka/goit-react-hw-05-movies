"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{713:(t,a,s)=>{s.d(a,{Bt:()=>u,LB:()=>r,bI:()=>c,hd:()=>o,y:()=>n});var e=s(294);e.Z.defaults.baseURL="https://api.themoviedb.org/3/",e.Z.defaults.params={api_key:"fb5a8efc74b4cfbb21e23283cbfdefb3",language:"en-US"};const r=async()=>{const t=await e.Z.get("trending/all/day"),{data:a}=t;if(t.status<200||t.status>=300)throw new Error("Data failed to load. Status: "+t.status);return a.results},o=async t=>{const a=await e.Z.get("movie/".concat(t)),{data:s}=a;if(a.status<200||a.status>=300)throw new Error("Data failed to load. Status: "+a.status);return s},n=async t=>{const a=await e.Z.get("movie/".concat(t,"/credits")),{data:s}=a;if(a.status<200||a.status>=300)throw new Error("Data failed to load. Status: "+a.status);return s.cast},u=async t=>{const a=await e.Z.get("movie/".concat(t,"/reviews")),{data:s}=a;if(a.status<200||a.status>=300)throw new Error("Data failed to load. Status: "+a.status);return s.results},c=async t=>{const a=await e.Z.get("search/movie?query=".concat(t)),{data:s}=a;if(a.status<200||a.status>=300)throw new Error("Data failed to load. Status: "+a.status);return s.results}},186:(t,a,s)=>{s.r(a),s.d(a,{default:()=>l});var e=s(689),r=s(85),o=s(791),n=s(713),u=s(263),c=s(184);const l=()=>{const[t,a]=(0,o.useState)([]),[s,l]=(0,o.useState)(!1),[i,d]=(0,o.useState)(null),{movieId:h}=(0,e.UO)();return(0,o.useEffect)((()=>{const t=new AbortController,s=t.signal;if(!h)return;return(async()=>{l(!0),d(null);try{const t=await(0,n.Bt)(h,{signal:s});a(t),0===t.length&&r.Am.warn("No data found for your request")}catch(i){"AbortError"===i.name?console.log("Request was aborted"):(d(i),r.Am.warn(i.message))}finally{l(!1)}})(),()=>{t.abort()}}),[h]),(0,c.jsxs)("div",{children:[null!==i&&r.Am.error(i),s&&(0,c.jsx)(u.a,{}),(0,c.jsx)("ul",{children:t.map((t=>{let{author:a,id:s,content:e,created_at:r,author_details:o}=t;return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:o&&o.avatar_path?"https://image.tmdb.org/t/p/w200/".concat(o.avatar_path):"https://fakeimg.pl/200x300",width:200,alt:"Card"}),(0,c.jsx)("h3",{children:a}),(0,c.jsx)("span",{children:r}),(0,c.jsx)("p",{children:e})]},s)}))})]})}}}]);
//# sourceMappingURL=186.5f16a27e.chunk.js.map