(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{6090:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allPictures",function(){return n(5165)}])},7698:function(e,t,n){"use strict";var r=n(5893),i=n(9008),l=n.n(i),o=n(1664),a=n.n(o),s=n(1163),c=n(5616),d=n(2293),h=n(3156),u=n(155),p=n(5861),m=n(9417),x=n(3946),f=n(5449);n(7294),t.Z=e=>{let{children:t}=e,n=(0,s.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Picture of the Day"})}),(0,r.jsxs)(c.Z,{style:{display:"flex",flexDirection:"column",minHeight:"calc(100vh - 16px)"},children:[(0,r.jsx)(c.Z,{component:"header",children:(0,r.jsx)(d.Z,{position:"static",style:{marginBottom:"20px",backgroundColor:"#b200ff"},children:(0,r.jsx)(h.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(p.Z,{variant:"h6",style:{flexGrow:1,cursor:"default"},children:"Astronomy Picture of the Day"}),(0,r.jsx)(a(),{href:"/",passHref:!0,children:(0,r.jsx)(m.Z,{component:"p",style:{margin:"0 10px",color:"white",borderBottom:"/"===n.pathname||n.pathname.startsWith("/[date]")?"2px solid white":"none",borderRadius:"0"},children:"Home"})}),(0,r.jsx)(a(),{href:"/allPictures",passHref:!0,children:(0,r.jsx)(m.Z,{component:"p",style:{margin:"0 10px",color:"white",borderBottom:"/allPictures"===n.pathname?"2px solid white":"none",borderRadius:"0"},children:"All Pictures"})})]})})})}),(0,r.jsx)(h.Z,{component:"main",children:t}),(0,r.jsx)(c.Z,{component:"footer",style:{backgroundColor:"#b200ff",color:"white",padding:"10px",textAlign:"center",marginTop:"auto"},children:(0,r.jsxs)(p.Z,{variant:"body2",children:["Made by"," ",(0,r.jsx)(a(),{href:"https://github.com/DaryaEnina",passHref:!0,target:"_blank",children:(0,r.jsx)("span",{style:{color:"white",borderBottom:"2px solid white"},children:"Darya Enina"})})," ",(0,r.jsx)(x.Z,{href:"https://github.com/DaryaEnina",target:"_blank",style:{color:"white"},children:(0,r.jsx)(f.Z,{})})]})})]})]})}},5165:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),l=n(7698),o=n(5861),a=n(3156),s=n(7563),c=n(9417),d=n(8456),h=n(6886),u=n(6242),p=n(9974),m=n(3965),x=n(4267),f=n(657),g=n(7645),j=n(6514),y=n(1425);t.default=e=>{let{apodDataList:t}=e,[n,Z]=(0,i.useState)(""),[b,v]=(0,i.useState)(""),[w,P]=(0,i.useState)([]),[D,_]=(0,i.useState)(!1),[k,S]=(0,i.useState)(!1),[B,C]=(0,i.useState)(null),E=(e,t)=>{let n=e.target.value;"start"===t?Z(n):v(n)},T=()=>{if(!n||!b)return S(!0),!1;let e=new Date().toISOString().split("T")[0];return n>e||b>e?(S(!0),!1):(S(!1),!0)},H=async()=>{if(!T())return;_(!0);let e=[],t=new Date(n),r=new Date(b);for(P([]);t<=r;){let n=t.toISOString().split("T")[0],r=fetch("https://api.nasa.gov/planetary/apod?api_key=".concat("f4byH8fvMMse2k3jaXzEJVhS9OPbc9UgclE9qPtf","&date=").concat(n));e.push(r),t.setDate(t.getDate()+1)}let i=await Promise.all(e),l=await Promise.all(i.map(e=>e.json()));P(e=>[...e,...l]),_(!1)},O=e=>{C(e)},I=()=>{C(null)};return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{variant:"h4",gutterBottom:!0,children:"All Pictures"}),(0,r.jsxs)(a.Z,{component:"form",style:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(s.Z,{type:"date",id:"startDate",label:"Start Date",value:n,onChange:e=>E(e,"start"),margin:"normal",fullWidth:!0,style:{width:200,marginBottom:10},InputLabelProps:{shrink:!0},InputProps:{inputProps:{style:{fontSize:16}}}}),(0,r.jsx)(s.Z,{type:"date",id:"endDate",label:"End Date",value:b,onChange:e=>E(e,"end"),margin:"normal",fullWidth:!0,style:{width:200,marginBottom:10},InputLabelProps:{shrink:!0},InputProps:{inputProps:{style:{fontSize:16}}}}),(0,r.jsx)(c.Z,{variant:"contained",onClick:H,disabled:D,style:{width:200,marginBottom:20,backgroundColor:"#b200ff"},children:D?(0,r.jsx)(d.Z,{size:24,color:"inherit"}):"Fetch Pictures"}),k&&(0,r.jsx)(o.Z,{variant:"body2",color:"error",style:{marginBottom:10},children:"Please select both start and end dates, and ensure they are not greater than today."})]}),w.length>0&&(0,r.jsx)(h.ZP,{container:!0,component:"section",spacing:2,children:w.map(e=>(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,children:(0,r.jsx)(u.Z,{style:{height:"100%",display:"flex",flexDirection:"column",cursor:"pointer",transition:"transform 0.3s"},onMouseOver:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseOut:e=>{e.currentTarget.style.transform="scale(1)"},children:(0,r.jsxs)(p.Z,{onClick:()=>O(e),children:["image"===e.media_type?(0,r.jsx)(m.Z,{component:"img",alt:e.title,height:"240",style:{objectFit:"cover"},image:e.url}):(0,r.jsx)(m.Z,{component:"iframe",title:e.title,height:"240",src:e.url,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0}),(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(o.Z,{gutterBottom:!0,variant:"h6",children:e.title}),(0,r.jsxs)(o.Z,{variant:"subtitle2",color:"textSecondary",component:"p",children:["Date: ",e.date]})]})]})})},e.date))}),(0,r.jsxs)(f.Z,{open:!!B,onClose:I,maxWidth:"lg",fullWidth:!0,children:[(0,r.jsx)(g.Z,{children:null==B?void 0:B.title}),(0,r.jsxs)(j.Z,{children:[(null==B?void 0:B.media_type)==="video"?(0,r.jsx)(m.Z,{component:"iframe",title:null==B?void 0:B.title,src:null==B?void 0:B.url,height:"auto",style:{minHeight:"400px"}}):(0,r.jsx)(m.Z,{component:"img",alt:null==B?void 0:B.title,width:"100%",style:{objectFit:"cover"},image:null==B?void 0:B.url}),(0,r.jsxs)(o.Z,{variant:"h6",style:{marginTop:"16px"},children:["Date: ",null==B?void 0:B.date]}),(0,r.jsx)(o.Z,{children:null==B?void 0:B.explanation})]}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(c.Z,{onClick:I,color:"primary",children:"Закрыть"})})]})]})}}},function(e){e.O(0,[861,676,563,900,888,774,179],function(){return e(e.s=6090)}),_N_E=e.O()}]);