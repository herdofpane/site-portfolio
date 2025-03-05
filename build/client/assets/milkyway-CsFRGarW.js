import{y as Ke,z as We,B as qe,V as S,Q as Oe,P as te,O as ne,F as Ie,h as x,H as X,T as K,I as Qe,J as W,K as ie,N as oe,L as re,X as $e,Y as Je,Z as et,_ as tt}from"./three-B_s0NcTJ.js";var nt=Object.defineProperty,ot=(N,h,R)=>h in N?nt(N,h,{enumerable:!0,configurable:!0,writable:!0,value:R}):N[h]=R,i=(N,h,R)=>(ot(N,typeof h!="symbol"?h+"":h,R),R);const ae=new Ke,je=new We,at=Math.cos(70*(Math.PI/180)),Se=(N,h)=>(N%h+h)%h;class lt extends qe{constructor(h,R){super(),i(this,"object"),i(this,"domElement"),i(this,"enabled",!0),i(this,"target",new S),i(this,"minDistance",0),i(this,"maxDistance",1/0),i(this,"minZoom",0),i(this,"maxZoom",1/0),i(this,"minPolarAngle",0),i(this,"maxPolarAngle",Math.PI),i(this,"minAzimuthAngle",-1/0),i(this,"maxAzimuthAngle",1/0),i(this,"enableDamping",!1),i(this,"dampingFactor",.05),i(this,"enableZoom",!0),i(this,"zoomSpeed",1),i(this,"enableRotate",!0),i(this,"rotateSpeed",1),i(this,"enablePan",!0),i(this,"panSpeed",1),i(this,"screenSpacePanning",!0),i(this,"keyPanSpeed",7),i(this,"zoomToCursor",!1),i(this,"autoRotate",!1),i(this,"autoRotateSpeed",2),i(this,"reverseOrbit",!1),i(this,"reverseHorizontalOrbit",!1),i(this,"reverseVerticalOrbit",!1),i(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),i(this,"mouseButtons",{LEFT:X.ROTATE,MIDDLE:X.DOLLY,RIGHT:X.PAN}),i(this,"touches",{ONE:K.ROTATE,TWO:K.DOLLY_PAN}),i(this,"target0"),i(this,"position0"),i(this,"zoom0"),i(this,"_domElementKeyEvents",null),i(this,"getPolarAngle"),i(this,"getAzimuthalAngle"),i(this,"setPolarAngle"),i(this,"setAzimuthalAngle"),i(this,"getDistance"),i(this,"listenToKeyEvents"),i(this,"stopListenToKeyEvents"),i(this,"saveState"),i(this,"reset"),i(this,"update"),i(this,"connect"),i(this,"dispose"),this.object=h,this.domElement=R,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>b.phi,this.getAzimuthalAngle=()=>b.theta,this.setPolarAngle=t=>{let n=Se(t,2*Math.PI),r=b.phi;r<0&&(r+=2*Math.PI),n<0&&(n+=2*Math.PI);let u=Math.abs(n-r);2*Math.PI-u<u&&(n<r?n+=2*Math.PI:r+=2*Math.PI),P.phi=n-r,e.update()},this.setAzimuthalAngle=t=>{let n=Se(t,2*Math.PI),r=b.theta;r<0&&(r+=2*Math.PI),n<0&&(n+=2*Math.PI);let u=Math.abs(n-r);2*Math.PI-u<u&&(n<r?n+=2*Math.PI:r+=2*Math.PI),P.theta=n-r,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",he),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(C),e.update(),y=s.NONE},this.update=(()=>{const t=new S,n=new S(0,1,0),r=new Oe().setFromUnitVectors(h.up,n),u=r.clone().invert(),w=new S,z=new Oe,G=2*Math.PI;return function(){const Le=e.object.position;r.setFromUnitVectors(h.up,n),u.copy(r).invert(),t.copy(Le).sub(e.target),t.applyQuaternion(r),b.setFromVector3(t),e.autoRotate&&y===s.NONE&&F(Y()),e.enableDamping?(b.theta+=P.theta*e.dampingFactor,b.phi+=P.phi*e.dampingFactor):(b.theta+=P.theta,b.phi+=P.phi);let B=e.minAzimuthAngle,H=e.maxAzimuthAngle;isFinite(B)&&isFinite(H)&&(B<-Math.PI?B+=G:B>Math.PI&&(B-=G),H<-Math.PI?H+=G:H>Math.PI&&(H-=G),B<=H?b.theta=Math.max(B,Math.min(H,b.theta)):b.theta=b.theta>(B+H)/2?Math.max(B,b.theta):Math.min(H,b.theta)),b.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,b.phi)),b.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(v,e.dampingFactor):e.target.add(v),e.zoomToCursor&&l||e.object.isOrthographicCamera?b.radius=se(b.radius):b.radius=se(b.radius*L),t.setFromSpherical(b),t.applyQuaternion(u),Le.copy(e.target).add(t),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(P.theta*=1-e.dampingFactor,P.phi*=1-e.dampingFactor,v.multiplyScalar(1-e.dampingFactor)):(P.set(0,0,0),v.set(0,0,0));let q=!1;if(e.zoomToCursor&&l){let Q=null;if(e.object instanceof te&&e.object.isPerspectiveCamera){const $=t.length();Q=se($*L);const ee=$-Q;e.object.position.addScaledVector(E,ee),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const $=new S(p.x,p.y,0);$.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/L)),e.object.updateProjectionMatrix(),q=!0;const ee=new S(p.x,p.y,0);ee.unproject(e.object),e.object.position.sub(ee).add($),e.object.updateMatrixWorld(),Q=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;Q!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(Q).add(e.object.position):(ae.origin.copy(e.object.position),ae.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(ae.direction))<at?h.lookAt(e.target):(je.setFromNormalAndCoplanarPoint(e.object.up,e.target),ae.intersectPlane(je,e.target))))}else e.object instanceof ne&&e.object.isOrthographicCamera&&(q=L!==1,q&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/L)),e.object.updateProjectionMatrix()));return L=1,l=!1,q||w.distanceToSquared(e.object.position)>k||8*(1-z.dot(e.object.quaternion))>k?(e.dispatchEvent(C),w.copy(e.object.position),z.copy(e.object.quaternion),q=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Me),e.domElement.addEventListener("pointerdown",we),e.domElement.addEventListener("pointercancel",Re),e.domElement.addEventListener("wheel",Pe)},this.dispose=()=>{var t,n,r,u,w,z;(t=e.domElement)==null||t.removeEventListener("contextmenu",Me),(n=e.domElement)==null||n.removeEventListener("pointerdown",we),(r=e.domElement)==null||r.removeEventListener("pointercancel",Re),(u=e.domElement)==null||u.removeEventListener("wheel",Pe),(w=e.domElement)==null||w.ownerDocument.removeEventListener("pointermove",le),(z=e.domElement)==null||z.ownerDocument.removeEventListener("pointerup",ce),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",he)};const e=this,C={type:"change"},g={type:"start"},T={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let y=s.NONE;const k=1e-6,b=new Ie,P=new Ie;let L=1;const v=new S,A=new x,_=new x,U=new x,O=new x,D=new x,a=new x,d=new x,f=new x,m=new x,E=new S,p=new x;let l=!1;const o=[],c={};function Y(){return 2*Math.PI/60/60*e.autoRotateSpeed}function V(){return Math.pow(.95,e.zoomSpeed)}function F(t){e.reverseOrbit||e.reverseHorizontalOrbit?P.theta+=t:P.theta-=t}function I(t){e.reverseOrbit||e.reverseVerticalOrbit?P.phi+=t:P.phi-=t}const J=(()=>{const t=new S;return function(r,u){t.setFromMatrixColumn(u,0),t.multiplyScalar(-r),v.add(t)}})(),j=(()=>{const t=new S;return function(r,u){e.screenSpacePanning===!0?t.setFromMatrixColumn(u,1):(t.setFromMatrixColumn(u,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(r),v.add(t)}})(),M=(()=>{const t=new S;return function(r,u){const w=e.domElement;if(w&&e.object instanceof te&&e.object.isPerspectiveCamera){const z=e.object.position;t.copy(z).sub(e.target);let G=t.length();G*=Math.tan(e.object.fov/2*Math.PI/180),J(2*r*G/w.clientHeight,e.object.matrix),j(2*u*G/w.clientHeight,e.object.matrix)}else w&&e.object instanceof ne&&e.object.isOrthographicCamera?(J(r*(e.object.right-e.object.left)/e.object.zoom/w.clientWidth,e.object.matrix),j(u*(e.object.top-e.object.bottom)/e.object.zoom/w.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function Z(t){e.object instanceof te&&e.object.isPerspectiveCamera||e.object instanceof ne&&e.object.isOrthographicCamera?L/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function de(t){e.object instanceof te&&e.object.isPerspectiveCamera||e.object instanceof ne&&e.object.isOrthographicCamera?L*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function me(t){if(!e.zoomToCursor||!e.domElement)return;l=!0;const n=e.domElement.getBoundingClientRect(),r=t.clientX-n.left,u=t.clientY-n.top,w=n.width,z=n.height;p.x=r/w*2-1,p.y=-(u/z)*2+1,E.set(p.x,p.y,1).unproject(e.object).sub(e.object.position).normalize()}function se(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function ue(t){A.set(t.clientX,t.clientY)}function xe(t){me(t),d.set(t.clientX,t.clientY)}function fe(t){O.set(t.clientX,t.clientY)}function Ne(t){_.set(t.clientX,t.clientY),U.subVectors(_,A).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(F(2*Math.PI*U.x/n.clientHeight),I(2*Math.PI*U.y/n.clientHeight)),A.copy(_),e.update()}function ke(t){f.set(t.clientX,t.clientY),m.subVectors(f,d),m.y>0?Z(V()):m.y<0&&de(V()),d.copy(f),e.update()}function ve(t){D.set(t.clientX,t.clientY),a.subVectors(D,O).multiplyScalar(e.panSpeed),M(a.x,a.y),O.copy(D),e.update()}function Ce(t){me(t),t.deltaY<0?de(V()):t.deltaY>0&&Z(V()),e.update()}function Fe(t){let n=!1;switch(t.code){case e.keys.UP:M(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:M(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:M(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:M(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function be(){if(o.length==1)A.set(o[0].pageX,o[0].pageY);else{const t=.5*(o[0].pageX+o[1].pageX),n=.5*(o[0].pageY+o[1].pageY);A.set(t,n)}}function ge(){if(o.length==1)O.set(o[0].pageX,o[0].pageY);else{const t=.5*(o[0].pageX+o[1].pageX),n=.5*(o[0].pageY+o[1].pageY);O.set(t,n)}}function ye(){const t=o[0].pageX-o[1].pageX,n=o[0].pageY-o[1].pageY,r=Math.sqrt(t*t+n*n);d.set(0,r)}function ze(){e.enableZoom&&ye(),e.enablePan&&ge()}function Be(){e.enableZoom&&ye(),e.enableRotate&&be()}function Ee(t){if(o.length==1)_.set(t.pageX,t.pageY);else{const r=pe(t),u=.5*(t.pageX+r.x),w=.5*(t.pageY+r.y);_.set(u,w)}U.subVectors(_,A).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(F(2*Math.PI*U.x/n.clientHeight),I(2*Math.PI*U.y/n.clientHeight)),A.copy(_)}function _e(t){if(o.length==1)D.set(t.pageX,t.pageY);else{const n=pe(t),r=.5*(t.pageX+n.x),u=.5*(t.pageY+n.y);D.set(r,u)}a.subVectors(D,O).multiplyScalar(e.panSpeed),M(a.x,a.y),O.copy(D)}function Te(t){const n=pe(t),r=t.pageX-n.x,u=t.pageY-n.y,w=Math.sqrt(r*r+u*u);f.set(0,w),m.set(0,Math.pow(f.y/d.y,e.zoomSpeed)),Z(m.y),d.copy(f)}function He(t){e.enableZoom&&Te(t),e.enablePan&&_e(t)}function Ue(t){e.enableZoom&&Te(t),e.enableRotate&&Ee(t)}function we(t){var n,r;e.enabled!==!1&&(o.length===0&&((n=e.domElement)==null||n.ownerDocument.addEventListener("pointermove",le),(r=e.domElement)==null||r.ownerDocument.addEventListener("pointerup",ce)),Xe(t),t.pointerType==="touch"?Ve(t):Ye(t))}function le(t){e.enabled!==!1&&(t.pointerType==="touch"?Ze(t):Ge(t))}function ce(t){var n,r,u;Ae(t),o.length===0&&((n=e.domElement)==null||n.releasePointerCapture(t.pointerId),(r=e.domElement)==null||r.ownerDocument.removeEventListener("pointermove",le),(u=e.domElement)==null||u.ownerDocument.removeEventListener("pointerup",ce)),e.dispatchEvent(T),y=s.NONE}function Re(t){Ae(t)}function Ye(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case X.DOLLY:if(e.enableZoom===!1)return;xe(t),y=s.DOLLY;break;case X.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;fe(t),y=s.PAN}else{if(e.enableRotate===!1)return;ue(t),y=s.ROTATE}break;case X.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ue(t),y=s.ROTATE}else{if(e.enablePan===!1)return;fe(t),y=s.PAN}break;default:y=s.NONE}y!==s.NONE&&e.dispatchEvent(g)}function Ge(t){if(e.enabled!==!1)switch(y){case s.ROTATE:if(e.enableRotate===!1)return;Ne(t);break;case s.DOLLY:if(e.enableZoom===!1)return;ke(t);break;case s.PAN:if(e.enablePan===!1)return;ve(t);break}}function Pe(t){e.enabled===!1||e.enableZoom===!1||y!==s.NONE&&y!==s.ROTATE||(t.preventDefault(),e.dispatchEvent(g),Ce(t),e.dispatchEvent(T))}function he(t){e.enabled===!1||e.enablePan===!1||Fe(t)}function Ve(t){switch(De(t),o.length){case 1:switch(e.touches.ONE){case K.ROTATE:if(e.enableRotate===!1)return;be(),y=s.TOUCH_ROTATE;break;case K.PAN:if(e.enablePan===!1)return;ge(),y=s.TOUCH_PAN;break;default:y=s.NONE}break;case 2:switch(e.touches.TWO){case K.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ze(),y=s.TOUCH_DOLLY_PAN;break;case K.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Be(),y=s.TOUCH_DOLLY_ROTATE;break;default:y=s.NONE}break;default:y=s.NONE}y!==s.NONE&&e.dispatchEvent(g)}function Ze(t){switch(De(t),y){case s.TOUCH_ROTATE:if(e.enableRotate===!1)return;Ee(t),e.update();break;case s.TOUCH_PAN:if(e.enablePan===!1)return;_e(t),e.update();break;case s.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;He(t),e.update();break;case s.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ue(t),e.update();break;default:y=s.NONE}}function Me(t){e.enabled!==!1&&t.preventDefault()}function Xe(t){o.push(t)}function Ae(t){delete c[t.pointerId];for(let n=0;n<o.length;n++)if(o[n].pointerId==t.pointerId){o.splice(n,1);return}}function De(t){let n=c[t.pointerId];n===void 0&&(n=new x,c[t.pointerId]=n),n.set(t.pageX,t.pageY)}function pe(t){const n=t.pointerId===o[0].pointerId?o[1]:o[0];return c[n.pointerId]}R!==void 0&&this.connect(R),this.update()}}class it extends Qe{constructor(h){super(h),this.type=W}parse(h){const s=function(a,d){switch(a){case 1:console.error("THREE.RGBELoader Read Error: "+(d||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(d||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(d||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(d||""))}return-1},P=`
`,L=function(a,d,f){d=d||1024;let E=a.pos,p=-1,l=0,o="",c=String.fromCharCode.apply(null,new Uint16Array(a.subarray(E,E+128)));for(;0>(p=c.indexOf(P))&&l<d&&E<a.byteLength;)o+=c,l+=c.length,E+=128,c+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(E,E+128)));return-1<p?(f!==!1&&(a.pos+=l+p+1),o+c.slice(0,p)):!1},v=function(a){const d=/^#\?(\S+)/,f=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,p=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,l={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let o,c;if(a.pos>=a.byteLength||!(o=L(a)))return s(1,"no header found");if(!(c=o.match(d)))return s(3,"bad initial token");for(l.valid|=1,l.programtype=c[1],l.string+=o+`
`;o=L(a),o!==!1;){if(l.string+=o+`
`,o.charAt(0)==="#"){l.comments+=o+`
`;continue}if((c=o.match(f))&&(l.gamma=parseFloat(c[1])),(c=o.match(m))&&(l.exposure=parseFloat(c[1])),(c=o.match(E))&&(l.valid|=2,l.format=c[1]),(c=o.match(p))&&(l.valid|=4,l.height=parseInt(c[1],10),l.width=parseInt(c[2],10)),l.valid&2&&l.valid&4)break}return l.valid&2?l.valid&4?l:s(3,"missing image size specifier"):s(3,"missing format specifier")},A=function(a,d,f){const m=d;if(m<8||m>32767||a[0]!==2||a[1]!==2||a[2]&128)return new Uint8Array(a);if(m!==(a[2]<<8|a[3]))return s(3,"wrong scanline width");const E=new Uint8Array(4*d*f);if(!E.length)return s(4,"unable to allocate buffer space");let p=0,l=0;const o=4*m,c=new Uint8Array(4),Y=new Uint8Array(o);let V=f;for(;V>0&&l<a.byteLength;){if(l+4>a.byteLength)return s(1);if(c[0]=a[l++],c[1]=a[l++],c[2]=a[l++],c[3]=a[l++],c[0]!=2||c[1]!=2||(c[2]<<8|c[3])!=m)return s(3,"bad rgbe scanline format");let F=0,I;for(;F<o&&l<a.byteLength;){I=a[l++];const j=I>128;if(j&&(I-=128),I===0||F+I>o)return s(3,"bad scanline data");if(j){const M=a[l++];for(let Z=0;Z<I;Z++)Y[F++]=M}else Y.set(a.subarray(l,l+I),F),F+=I,l+=I}const J=m;for(let j=0;j<J;j++){let M=0;E[p]=Y[j+M],M+=m,E[p+1]=Y[j+M],M+=m,E[p+2]=Y[j+M],M+=m,E[p+3]=Y[j+M],p+=4}V--}return E},_=function(a,d,f,m){const E=a[d+3],p=Math.pow(2,E-128)/255;f[m+0]=a[d+0]*p,f[m+1]=a[d+1]*p,f[m+2]=a[d+2]*p,f[m+3]=1},U=function(a,d,f,m){const E=a[d+3],p=Math.pow(2,E-128)/255;f[m+0]=oe.toHalfFloat(Math.min(a[d+0]*p,65504)),f[m+1]=oe.toHalfFloat(Math.min(a[d+1]*p,65504)),f[m+2]=oe.toHalfFloat(Math.min(a[d+2]*p,65504)),f[m+3]=oe.toHalfFloat(1)},O=new Uint8Array(h);O.pos=0;const D=v(O);if(D!==-1){const a=D.width,d=D.height,f=A(O.subarray(O.pos),a,d);if(f!==-1){let m,E,p;switch(this.type){case ie:p=f.length/4;const l=new Float32Array(p*4);for(let c=0;c<p;c++)_(f,c*4,l,c*4);m=l,E=ie;break;case W:p=f.length/4;const o=new Uint16Array(p*4);for(let c=0;c<p;c++)U(f,c*4,o,c*4);m=o,E=W;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:a,height:d,data:m,header:D.string,gamma:D.gamma,exposure:D.exposure,type:E}}}return null}setDataType(h){return this.type=h,this}load(h,R,e,C){function g(T,s){switch(T.type){case ie:case W:"colorSpace"in T?T.colorSpace="srgb-linear":T.encoding=3e3,T.minFilter=re,T.magFilter=re,T.generateMipmaps=!1,T.flipY=!0;break}R&&R(T,s)}return super.load(h,g,e,C)}}class ct extends $e{constructor(h){super(h),this.hdrLoader=new it,this.type=W}load(h,R,e,C){typeof h=="string"?h=[h]:Array.isArray(h)||(console.warn("THREE.HDRCubeTextureLoader signature has changed. Use .setDataType() instead."),this.setDataType(h),h=R,R=e,e=C,C=arguments[4]);const g=new Je;switch(g.type=this.type,g.type){case ie:case W:"colorSpace"in g?g.colorSpace="srgb-linear":g.encoding=3e3,g.minFilter=re,g.magFilter=re,g.generateMipmaps=!1;break}const T=this;let s=0;function y(k,b,P,L){new et(T.manager).setPath(T.path).setResponseType("arraybuffer").setWithCredentials(T.withCredentials).load(h[k],function(v){s++;const A=T.hdrLoader.parse(v);if(A){if(A.data!==void 0){const _=new tt(A.data,A.width,A.height);_.type=g.type,"colorSpace"in _?_.colorSpace=g.SRGBColorSpace:_.encoding=g.encoding,_.format=g.format,_.minFilter=g.minFilter,_.magFilter=g.magFilter,_.generateMipmaps=g.generateMipmaps,g.images[k]=_}s===6&&(g.needsUpdate=!0,b&&b(g))}},P,L)}for(let k=0;k<h.length;k++)y(k,R,e,C);return g}setDataType(h){return this.type=h,this.hdrLoader.setDataType(h),this}}const ht="/assets/earth-DvZudj9K.glb",pt="/assets/milkyway-nx-Ds_hwpSC.hdr",dt="/assets/milkyway-ny-BqhFvupA.hdr",mt="/assets/milkyway-nz-D6l6T-pv.hdr",ut="/assets/milkyway-px-BjIdbMt0.hdr",ft="/assets/milkyway-py-BD6pEbZF.hdr",bt="/assets/milkyway-pz-Bx3WFS88.hdr",gt="/assets/milkyway-Vkpv7LbT.jpg";export{ct as H,lt as O,dt as a,mt as b,ut as c,ft as d,ht as e,bt as f,gt as g,pt as m};
