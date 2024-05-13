(function(u,c){typeof exports=="object"&&typeof module<"u"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):(u=typeof globalThis<"u"?globalThis:u||self,c(u.Utilidades={}))})(this,function(u){"use strict";function c(e){return e.every(t=>JSON.stringify(t)===JSON.stringify(e[0]))}function S(e=0,t=1,n=2){return t===void 0&&(t=e,e=0),parseFloat((Math.random()*(t-e)+e).toFixed(n))}function a(e,t){return t===void 0&&(t=e,e=0),Math.round(e+Math.random()*(t-e))}function J(e,t){return S(e,t)}function z(e){return e[a(e.length)]}function W(e,t=1){const n=[];for(let i=0;i<e.length;i+=t)n.push(e.slice(i,i+t));return n}function X(e,t,n=!1){const i=Math.max(...e.map(r=>r[t]));return n?i:e.find(r=>r[t]===i)}function H(e,t,n=!1){const i=Math.min(...e.map(r=>r[t]));return n?i:e.find(r=>r[t]===i)}function U(e=[]){for(let t=0;t<e.length-1;t++)if(e[t]>e[t+1])return!1;return!0}function K(e=[],t=1){for(let n=0;n<t;n++){let i=e[e.length-1];for(let r=e.length-2;r>=0;r--){const s=e[r];e[r]=i,i=s}e[e.length-1]=i}return e}function V(e=[],t=1){for(let n=0;n<t;n++){let i=e[0];for(let r=1;r<e.length;r++){const s=e[r];e[r]=i,i=s}e[0]=i}return e}function Q(e,t){const n=new Set;return e.filter(i=>{const r=i[t];return n.has(r)?!1:(n.add(r),!0)})}function D(e){return JSON.parse(JSON.stringify(e))}function Z(e,t=!0){if(t)return e.sort(()=>Math.random()-.5);const n=D(e),i=[];for(;n.length;){const r=a(n.length);i.push(n[r]),n.splice(r,1)}return i}function O(e,t=!1){return t?e.sort((n,i)=>n-i):[...e].sort((n,i)=>n-i)}function tt(e,t,n=!1){return n?e.sort((i,r)=>i[t]-r[t]):[...e].sort((i,r)=>i[t]-r[t])}function et(e,t=!1){return t?e.sort((n,i)=>i-n):[...e].sort((n,i)=>i-n)}function nt(e,t,n=!1){return n?e.sort((i,r)=>r[t]-i[t]):[...e].sort((i,r)=>r[t]-i[t])}const it=Object.freeze(Object.defineProperty({__proto__:null,allEqual:c,choice:z,chunk:W,findBigObject:X,findLowObject:H,isSorted:U,moveLeft:K,moveRight:V,removeDuplicatesObj:Q,shuffle:Z,sortAscending:O,sortAscendingObject:tt,sortDescending:et,sortDescendingObject:nt},Symbol.toStringTag,{value:"Module"}));let rt=class{constructor(t){this.value=t,this.left=null,this.right=null,this.parent=null}};class j{constructor(t){this.root=null,this.count=0,t!==void 0&&this.add(t)}size(){return this.count}add(t){if(typeof t!="number"||isNaN(t)){console.error("Value need to be a number!");return}const n=new rt(t);if(this.root===null){this.count++,this.root=n;return}let i=this.root;for(;i;){if(t===i.value)return;if(i.value>t)if(i.left===null){n.parent=i,i.left=n,this.count++;break}else i=i.left;else if(i.right===null){n.parent=i,i.right=n,this.count++;break}else i=i.right}}smaller(t){if(!this.root)return;let n=this.search(t||this.root.value);do{if(n.left===null)return n.value;n=n.left}while(n)}larger(t){if(!this.root)return;let n=this.search(t||this.root.value);do{if(n.right===null)return n.value;n=n.right}while(n)}search(t){if(!this.root)return;if(typeof t!="number")throw new Error("Value need to be a number!");let n=this.root;for(;n;){if(t===n.value)return n;if(n.value>t){if(n.left===null)return!1;n=n.left}else{if(n.right===null)return!1;n=n.right}}}delete(t){var i,r;const n=this.search(t);if(!n)return!1;if(n.left===null&&n.right===null)((i=n.parent.left)==null?void 0:i.value)===n.value?n.parent.left=null:n.parent.right=null;else if(n.left!==null&&n.right===null||n.left===null&&n.right!==null){const s=n.left||n.right;s.parent=n.parent,((r=n.parent.left)==null?void 0:r.value)===n.value?n.parent.left=s:n.parent.right=s}else if(n.left!==null&&n.right!==null){const s=this.search(this.larger(n.left.value));s.value===n.left.value?n.left=null:s.parent.right=null,n.value=s.value}else throw new Error("Error deleting value")}}const st=new j;let d=class{constructor(t){if(!t)throw new Error("Node value cannot be undefined.");this.value=t,this.next=null,this.prev=null}};class ut{constructor(t){this.head=null,this.tail=null,this.size=0,Array.isArray(t)?t.forEach(n=>this.push(n)):t!==void 0&&this.push(t)}print(){let t=this.head;for(;t!==null;)console.log(t.value),t=t.next;return this}clear(){return this.head=null,this.tail=null,this.size=0,this}get(t,n=!1){if(t<0||t>=this.size)return;let i=this.head;if(t<this.size/2)for(let r=0;r<t;r++)i=i.next;else{i=this.tail;for(let r=this.size-1;r>t;r--)i=i.prev}return n?i:i.value}set(t,n){const i=this.get(t,!0);return i?(i.value=n,!0):!1}unshift(t){if(!this.head)return this.push(t);const n=new d(t);return n.next=this.head,this.head.prev=n,this.head=n,this.size++,this}push(t){const n=new d(t);return this.head?(this.tail.next=n,n.prev=this.tail,this.tail=n):(this.head=n,this.tail=n),this.size++,this}insert(t,n){if(t===0)return this.unshift(n);if(t===this.size)return this.push(n);if(t<0||t>this.size)return!1;const i=new d(n),r=this.get(t-1,!0);return i.prev=r,i.next=r.next,r.next.prev=i,r.next=i,this.size++,this}shift(){if(this.size===0)return;const t=this.head;return this.size>1?(this.head=this.head.next,this.head.prev=null,t.next=null,this.size--):this.clear(),t.value}pop(){if(this.size===0)return;const t=this.tail;return this.size>1?(this.tail=this.tail.prev,this.tail.next=null,t.prev=null,this.size--):this.clear(),t.value}remove(t){if(t<0||t>=this.size)return!1;if(t===0)return this.shift();if(t===this.size-1)return this.pop();const n=this.get(t,!0),i=n.prev,r=n.next;return i.next=r,r.prev=i,n.prev=null,n.next=null,this.size--,n.value}reverse(){}sort(){}toArray(){const t=[];let n=this.head;for(;n!==null;)t.push(n.value),n=n.next;return t}}class g{constructor(t){this.value=t,this.next=null}}class lt{constructor(t){this.head=null,this.tail=null,this.size=0,Array.isArray(t)?t.forEach(n=>this.push(n)):t!==void 0&&this.push(t)}print(){let t=this.head;for(;t!==null;)console.log(t.value),t=t.next;return this}clear(){return this.head=null,this.tail=null,this.size=0,this}get(t,n=!1){if(t<0||t>=this.size)return;let i=this.head;for(let r=0;r<t;r++)i=i.next;return n?i:i.value}set(t,n){const i=this.get(t,!0);return i?(i.value=n,!0):!1}unshift(t){const n=new g(t);return n.next=this.head,this.head=n,this.tail||(this.tail=n),this.size++,this}push(t){const n=new g(t);return this.head?(this.tail.next=n,this.tail=n):(this.head=n,this.tail=n),this.size++,this}insert(t,n){if(t===0)return this.unshift(n);if(t===this.size)return this.push(n);if(t<0||t>this.size)return!1;const i=new g(n),r=this.get(t-1,!0);return i.next=r.next,r.next=i,this.size++,this}shift(){if(!this.size)return;const t=this.head.value;return this.head=this.head.next,this.size--,this.size===0&&this.clear(),t}pop(){if(this.size===0)return;let t=this.head,n=this.head;for(;n.next!==null;)t=n,n=n.next;return this.tail=t,this.tail.next=null,this.size--,this.size===0&&this.clear(),n.value}remove(t){if(t===0)return this.shift();if(t===this.size)return this.pop();if(t<0||t>this.size)return;const n=this.get(t-1,!0),i=n.next;return n.next=i.next,i.next=null,this.size--,i.value}reverse(){let t=this.head;this.head=this.tail,this.tail=t;let n=null,i=null;for(let r=0;r<this.size;r++)i=t.next,t.next=n,n=t,t=i;return this}sort(){}toArray(){const t=[];let n=this.head;for(;n!==null;)t.push(n.value),n=n.next;return t}}const ot=Object.freeze(Object.defineProperty({__proto__:null,BinarySearchTree:j,BinarySearchTreeInstance:st,DLLNode:d,DoublyLinkedList:ut,LLNode:g,LinkedList:lt},Symbol.toStringTag,{value:"Module"}));function T(...e){return e.reduce((t,n)=>t+n,0)}function ht(...e){return e.length?T(...e)/e.length:0}function f(e,t=0,n=1){return Math.min(n,Math.max(t,e))}function at(e){return e*(Math.PI/180)}function ct(e=0,t=10,n=5){const i=[],r=(t-e)/(n-1);for(let s=0;s<n;s++)i.push(e+r*s);return i}function ft(e=3,t=5){if(e<=1)return[0];const n=[];for(let i=0;i<e;i++)n.push(-t+i*(2*t)/(e-1));return n}function dt(...e){if(e.length){if(e.length===1)return e[0]}else return 0;let t=e[0];for(let n=1;n<e.length;n++)t/=e[n];return t}function B(e){return e<=1?e:e*B(e-1)}function gt(e,t,n={x:0,y:0}){return{x:t*Math.cos(e)+n.x,y:t*Math.sin(e)+n.y}}function mt(e,t,n){return f((e-t)/(n-t))}function yt(e){if(typeof e!="number"||isNaN(e)||!isFinite(e))throw new Error("Input must be a finite number");return e%1!==0}function E(e){return e%2==0}function pt(e){return e%2==1}function wt(e,t){return e%t==0}function bt(e){const t=String(e);let n=0;for(let i=0;i<t.length;i++)n+=Math.pow(t[i],t.length);return n===e}function vt(e){return typeof e=="number"&&!isNaN(e)}function xt(e,t,n){return t+(n-t)*e}function Mt(e,t,n,i,r){return(e-t)*(r-i)/(n-t)+i}function Nt(...e){const{length:t}=e;return t?(O(e,!0),E(t)?(e[t/2-1]+e[t/2])/2:e[(t-1)/2]):0}function St(...e){if(e.length===1)return e[0];const t={};let n=e[0],i=0;for(let r=0;r<e.length;r++){const s=e[r];t[s]?t[s]++:t[s]=1,i<t[s]&&(n=s,i=t[s])}return n}function zt(...e){return e.reduce((t,n)=>t*n,1)}function w(e){return e===0?0:-Math.abs(e)}function Dt(e,t){return 100*e/t}function m(e){return e*(180/Math.PI)}function Ot(e,t,n=1,i=[]){const r=[];for(let s=e;s<t+1;s+=n){let o=!1;i.forEach(({start:l,end:y})=>{s>=l&&s<=y&&(o=!0)}),o||r.push(s)}return r}function jt(e,t=2){if(typeof e!="number")throw new TypeError("The `num` parameter must be a number");if(typeof t!="number")throw new TypeError("The `maxOfDecimals` parameter must be a number");if(t<0)throw new RangeError("The `maxOfDecimals` parameter must be greater than or equal to 0");const n=e.toString().indexOf(".")+1;return n>0&&e.toString().substring(n).length>t?parseFloat(e.toFixed(t)):e}function Tt(...e){if(e.length){if(e.length===1)return e[0]}else return 0;let t=e[0];for(let n=1;n<e.length;n++){if(typeof e[n]!="number")throw new Error(`The element at position ${n} is not a number`);t-=e[n]}return t}const Bt=Object.freeze(Object.defineProperty({__proto__:null,average:ht,clamp:f,degreesToRadians:at,divideEvenly:ct,divideEvenlyWithSpread:ft,division:dt,factorial:B,getPositionWithAngleDistance:gt,invertedLerp:mt,isDecimal:yt,isEven:E,isMultipleOf:wt,isNarcissisticNumber:bt,isOdd:pt,isValidNumber:vt,lerp:xt,map:Mt,median:Nt,mode:St,multiplication:zt,negative:w,percentage:Dt,radiansToDegrees:m,range:Ot,roundNumber:jt,subtraction:Tt,sum:T},Symbol.toStringTag,{value:"Module"}));function b(e,t,n,i){return Math.atan2(i-t,n-e)}function Et(e,t){return b(e.x,e.y,t.x,t.y)}function C(e,t,n,i){return m(b(e,t,n,i))}function Ct(e,t){return C(e.x,e.y,t.x,t.y)}function F(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),i=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);return Math.atan2(i,n)}function Ft(e,t,n,i,r,s,o,l){return F({x:e+n/2,y:t+i/2,width:n,height:i},{x:r+o/2,y:s+l/2,width:o,height:l})}function At(e){return Math.PI*e*e}function It(e,t){return e*t}function qt(e){return 2*Math.PI*e}function A(e,t){return 2*(e+t)}function Pt(e){return A(e.x,e.y,e.width,e.height)}function v(e,t){return e+t/2}function x(e,t){return e+t/2}function I(e,t,n,i){return{x:v(e,n),y:x(t,i)}}function Rt(e){return v(e.x,e.width)}function _t(e){return x(e.y,e.height)}function kt(e){return I(e.x,e.y,e.width,e.height)}function q(e,t,n,i){return[{x:e,y:t},{x:e+n,y:t},{x:e+n,y:t+i},{x:e,y:t+i}]}function $t(e){return q(e.x,e.y,e.width,e.height)}function M(e,t,n,i){return Math.sqrt((e-n)*(e-n)+(t-i)*(t-i))}function Lt(e,t){return M(e.x,e.y,t.x,t.y)}function P(e,t){return M(e.x,e.y,t.x,t.y)-(e.radius+t.radius)}function Yt(e,t,n,i,r,s){return P({x:e,y:t,radius:n},{x:i,y:r,radius:s})}function R(e,t){const n=Math.min(e.x+e.width,t.x+t.width)-Math.max(e.x,t.x),i=Math.min(e.y+e.height,t.y+t.height)-Math.max(e.y,t.y);return n*i}function Gt(e,t,n,i,r,s,o,l){return R({x:e+n/2,y:t+i/2,width:n,height:i},{x:r+o/2,y:s+l/2,width:o,height:l})}function Jt({keys:e={forward:!1,left:!1,right:!1,reverse:!1},x:t,y:n,speed:i,acceleration:r,maxSpeed:s=1/0,friction:o=0,rotation:l,rotationSpeed:y,bounds:p={x:{min:-1/0,max:1/0},y:{min:-1/0,max:1/0}}}){e.forward?i+=r:e.reverse&&(i-=r);const je=Number(e.reverse)+1;if(i>s?i=s/je:i<-s/2&&(i=-s/2),i>0?i-=o:i<0&&(i+=o),Math.abs(i)<o&&(i=0),i){const G=i>0?1:-1;e.left&&(l-=y*G),e.right&&(l+=y*G)}const Te=t+Math.sin(l)*i,Be=n-Math.cos(l)*i;return{x:f(Te,p.x.min,p.x.max),y:f(Be,p.y.min,p.y.max),speed:i,rotation:l}}class h{constructor(t=0,n=t){this.x=0,this.y=0,this.set(t,n)}set(t=0,n=t){return typeof t=="object"?(this.x=t.x||0,this.y=t.y||0):(this.x=t||0,this.y=n||0),this}clone(){return new h(this.x,this.y)}add(t){return this.x+=t.x,this.y+=t.y,this}subtract(t){return this.x-=t.x,this.y-=t.y,this}scale(t=1){return this.x*=t,this.y*=t,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}divide(t){return this.x/=t.x,this.y/=t.y,this}dot(t){return this.x*t.x+this.y*t.y}moveTowards(t=h.zero(),n=1){n=f(n,0,1);const r=t.subtract(this).scale(n);return this.add(r)}magnitude(){return this.x*this.x+this.y*this.y}magnitudeSqr(){return Math.sqrt(this.magnitude())}distance(t=h.zero()){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}distanceSqrt(t){return Math.sqrt(this.distance(t))}normalize(){const t=this.distanceSqrt();return Math.abs(t)<1e-9?(this.x=0,this.y=0):(this.x/=t,this.y/=t),this}diferenceAngle(t){return m(Math.atan2(t.y-this.y,t.x-this.x))}angle(){let t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),m(t)}rotate(t=0){const n=Math.cos(t),i=Math.sin(t),r=this.x*n-this.y*i,s=this.x*i+this.y*n;return this.set(r,s)}toPrecision(t=1){return this.x=Number(this.x.toFixed(t)),this.y=Number(this.y.toFixed(t)),this}equals(t){return this.x===t.x&&this.y===t.y}toString(){return"["+this.x+"; "+this.y+"]"}absolute(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}negative(){return this.x=w(this.x),this.y=w(this.y),this}negate(){return this.x=this.x*-1,this.y=this.y*-1,this}invert(){const t=this.x;return this.x=this.y,this.y=t,this}static zero(){return new h(0)}static one(){return new h(1)}static positiveInfinity(){return new h(1/0)}static negativeInfinity(){return new h(-1/0)}static up(){return new h(0,-1)}static down(){return new h(0,1)}static left(){return new h(-1,0)}static right(){return new h(1,0)}static random(){return new h(Math.random(),Math.random())}}const Wt=Object.freeze(Object.defineProperty({__proto__:null,Vector2:h,calcAngleBetweenRectangles:F,calcAngleBetweenRectanglesByCoordinates:Ft,calcAngleBetweenTwoPoints:b,calcAngleBetweenTwoPointsDegrees:C,calcAngleBetweenTwoPointsVector2:Et,calcAngleBetweenTwoPointsVector2Degrees:Ct,calcCircleArea:At,calcCirclePerimeter:qt,calcDistanceBetweenCircles:P,calcDistanceBetweenCirclesByCoordinates:Yt,calcDistanceBetweenTwoPointObjects:Lt,calcDistanceBetweenTwoPoints:M,calcOverlapBetweenRectangles:R,calcOverlapBetweenRectanglesByCoordinates:Gt,calcRectangleArea:It,calcRectangleCenter:I,calcRectangleCenterFromBounds:kt,calcRectangleCenterX:v,calcRectangleCenterXFromBounds:Rt,calcRectangleCenterY:x,calcRectangleCenterYFromBounds:_t,calcRectanglePerimeter:Pt,calcRectanglePerimeterByDimensions:A,calcRectangleVertices:q,calcVerticesFromRectangleBounds:$t,topDownCarMovimentation:Jt},Symbol.toStringTag,{value:"Module"}));class _{constructor(){this.events={}}on(t,n){this.has(t)||(this.events[t]=[]),this.events[t].push(n)}emit(t,...n){this.has(t)&&this.events[t].forEach(i=>{i(...n)})}off(t){delete this.events[t]}once(t,n){let i=(...r)=>{n(...r),this.off(t)};this.on(t,i)}clear(){this.events={}}has(t){return this.events[t]!==void 0}}const Xt=new _;class Ht{constructor(){this._lastNumber=0,this._currentNumber=1,this.sequence=[0]}next(){const t=this._currentNumber+this._lastNumber;return this._lastNumber=this._currentNumber,this._currentNumber=t,this.sequence.push(t),this._currentNumber}current(){return this.sequence[this.sequence.length-1]}before(){if(this.sequence.length>1)return this._lastNumber=this._currentNumber-this._lastNumber,this._currentNumber=this._currentNumber-this._lastNumber,this.sequence.pop(),this._currentNumber}}function Ut(e=20){const t=[0,1];for(;t.length<e;)t.push(t[t.length-2]+t[t.length-1]);return t}function Kt(e=100){const t=[0,1];do{if(t[t.length-2]+t[t.length-1]>=e)return t;t.push(t[t.length-2]+t[t.length-1])}while(t[t.length-1]<e)}function Vt(e=1,t=100){const n=[];let i=0,r=e;for(;r<=t;){const s=r+i;i=r,r=s,n.push(r)}return n}function N(e=10){return e<=1?e:N(e-1)+N(e-2)}function Qt(e){for(let t=1;t<e.length;t++)if(e[0]!=e[t])return!1;return!0}function Zt(e){if(typeof e=="string")return parseInt(e,2)}function te(e=[.25,.5,.25]){let t=0;const n=Math.random();for(let i=0;i<e.length;i++)if(t+=e[i],n<=t)return i}function ee(e,t){return JSON.stringify(e)===JSON.stringify(t)}const ne=1024;function ie(e){return Number(e).toString(2)}function re(){return{time:se(),milliseconds:ue(),seconds:le(),minutes:oe(),hours:he(),day:k(),weekDay:ae(),week:ce(),month:$(),year:L(),dateFormatted:fe()}}function se(){return new Date().getTime()}function ue(){return new Date().getMilliseconds()}function le(){return new Date().getSeconds()}function oe(){return new Date().getMinutes()}function he(){return new Date().getHours()}function k(){return new Date().getDate()}function ae(){return new Date().getDay()+1}function ce(){const e=new Date,t=new Date(e.getFullYear(),0,1),n=Math.floor((e-t)/(24*60*60*1e3));return Math.ceil(n/7)}function $(){return new Date().getMonth()+1}function L(){return new Date().getFullYear()}function fe(){return k()+"/"+$()+"/"+L()}const de={name:"utilidades",version:"1.3.2",description:"Just simple utils for javascript :)",homepage:"https://201flaviosilva-labs.github.io/utilidades/",author:"201flaviosilva",license:"MIT",type:"module",main:"./dist/utilidades.umd.cjs",module:"./dist/utilidades.js",types:"./types/main.d.ts",scripts:{clear:"rm -rf types && rm -rf docs && rm -rf build && rm -rf dist",dev:"vite",test:"vitest --watch=false","test:dev":"vitest",coverage:"vitest run --coverage",jsdoc:"jsdoc -c jsdoc.conf.json",types:"npx -p typescript tsc src/*.js --declaration --allowJs --emitDeclarationOnly --outDir types",compile:"vite build",build:"npm run clear && npm run compile && npm run jsdoc && npm run types",bump:"npm run build && np --no-cleanup --any-branch"},devDependencies:{"@vitest/coverage-c8":"^0.31.4","clean-jsdoc-theme":"^4.3.0",jsdoc:"^4.0.3",np:"^8.0.4",typescript:"^5.4.5",vite:"^4.5.3",vitest:"^0.31.4"},files:["README.md","CHANGELOG.md","package.json","dist","types","index.d.ts"],exports:{types:"./types/main.d.ts",import:"./dist/utilidades.js",require:"./dist/utilidades.umd.cjs"},engines:{node:">=16.0.0",npm:">=7.0.0"},keywords:["utils"],repository:{type:"git",url:"git+https://github.com/201flaviosilva-labs/utilidades.git"},bugs:{url:"https://github.com/201flaviosilva-labs/utilidades/issues"}};function ge(){return de.version}function me(e){return Object.keys(e).length===0}function Y(e){try{if(!e||typeof e=="object"&&Object.keys(e).length==0)return!0}catch{return!0}return!1}function ye(e){return!Y(e)}function pe(...e){for(let t=0;t<e.length;t++)if(!e[t])return!1;return!0}function we(...e){return!!e.find(t=>!!t)}function be(e,t){return!!e!=!!t}function ve(){return"#"+(Math.random()*16777215<<0).toString(16)}function xe(){return`0x${Math.floor(Math.random()*16777215).toString(16)}`}function Me(){return`rgb(${a(255)}, ${a(255)}, ${a(255)})`}function Ne(){return`rgba(${a(255)}, ${a(255)}, ${a(255)}, ${Math.random().toFixed(5)})`}function Se(e={numberCharacters:12,numbers:!0,symbols:!0,capital:!0,small:!0}){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","y","Z"],n=["a","b","c","d","e","f","G","H","I","J","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],i=["0","1","2","3","4","5","6","7","8","9"],r=["!",'"',"@","#","€","$","£","%","‰","&","¶","/","(","[",")","]","=","≠","'","?","+","*"];let s=[];s=e.capital?[...s,...t]:[...s],s=e.small?[...s,...n]:[...s],s=e.numbers?[...s,...i]:[...s],s=e.symbols?[...s,...r]:[...s];let o="";for(let l=0;l<e.numberCharacters;l++)o+=z(s);return o}function ze(e,t=2){let n=new Array(t).fill(0);for(let i=0;i<e;i++){const r=Math.random(),s=Math.floor(r*t);r<.5?n[s]++:n[s]--}return n}function De(e){return e.split("").reverse().join("")}async function Oe(e=1e3){if(typeof e!="number"||e<0||isNaN(e))throw new Error("Time must be a non-negative number");return new Promise(t=>setTimeout(t,e))}u.Arrays=it,u.DataStructures=ot,u.EventSystem=_,u.EventSystemInstance=Xt,u.Fibonacci=Ht,u.MEGABYTE_IN_KILOBYTES=ne,u.Maths=Bt,u.Physics=Wt,u.allCharactersSame=Qt,u.and=pe,u.binary2Decimal=Zt,u.choiceTrend=te,u.clone=D,u.compare2Objects=ee,u.decimal2Binary=ie,u.fibonacciCustomSequence=Vt,u.fibonacciSequence=Ut,u.fibonacciUntil=Kt,u.getDate=re,u.getVersion=ge,u.isFalsy=Y,u.isObjectEmpty=me,u.isTruthy=ye,u.or=we,u.randomColor=ve,u.randomColor0X=xe,u.randomFloat=S,u.randomInt=a,u.randomNumber=J,u.randomRGBAColor=Ne,u.randomRGBColor=Me,u.randomString=Se,u.randomWalk=ze,u.recursiveFibonacci=N,u.reverseString=De,u.sleep=Oe,u.xor=be,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});