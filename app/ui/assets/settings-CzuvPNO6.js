import{a as e}from"./request-QqSoPAZ6.js";import{d as n}from"./index-VfqKZcDz.js";function r(){return e({method:"get",url:"/config/setting"})}function o(t){return e({method:"put",url:"/config/setting",data:t})}function g(){return e({method:"get",url:"/config/serials"})}const u=n("settingStore",{state(){return{setting:{}}},actions:{setItem(t){this.setting=t},getItem(){return this.setting},updateItem(t){this.setting=t}}});export{g as a,o as b,r as g,u};
