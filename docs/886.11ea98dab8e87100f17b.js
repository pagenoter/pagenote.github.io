(self.webpackChunkpagenote_cn=self.webpackChunkpagenote_cn||[]).push([[886],{98886:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Slider:()=>p,default:()=>f});var s=a(63804),l=a.n(s),r=a(45697),c=a.n(r),n=a(79941),i=a(76796),o=a(51290);const h=function(e){var t=e.hsl,a=e.offset,s=e.onClick,r=void 0===s?function(){}:s,c=e.active,i=e.first,o=e.last,h=(0,n.ZP)({default:{swatch:{height:"12px",background:"hsl("+t.h+", 50%, "+100*a+"%)",cursor:"pointer"}},first:{swatch:{borderRadius:"2px 0 0 2px"}},last:{swatch:{borderRadius:"0 2px 2px 0"}},active:{swatch:{transform:"scaleY(1.8)",borderRadius:"3.6px/2px"}}},{active:c,first:i,last:o});return l().createElement("div",{style:h.swatch,onClick:function(e){return r({h:t.h,s:.5,l:a,source:"hsl"},e)}})},d=function(e){var t=e.onClick,a=e.hsl,s=(0,n.ZP)({default:{swatches:{marginTop:"20px"},swatch:{boxSizing:"border-box",width:"20%",paddingRight:"1px",float:"left"},clear:{clear:"both"}}}),r=.1;return l().createElement("div",{style:s.swatches},l().createElement("div",{style:s.swatch},l().createElement(h,{hsl:a,offset:".80",active:Math.abs(a.l-.8)<r&&Math.abs(a.s-.5)<r,onClick:t,first:!0})),l().createElement("div",{style:s.swatch},l().createElement(h,{hsl:a,offset:".65",active:Math.abs(a.l-.65)<r&&Math.abs(a.s-.5)<r,onClick:t})),l().createElement("div",{style:s.swatch},l().createElement(h,{hsl:a,offset:".50",active:Math.abs(a.l-.5)<r&&Math.abs(a.s-.5)<r,onClick:t})),l().createElement("div",{style:s.swatch},l().createElement(h,{hsl:a,offset:".35",active:Math.abs(a.l-.35)<r&&Math.abs(a.s-.5)<r,onClick:t})),l().createElement("div",{style:s.swatch},l().createElement(h,{hsl:a,offset:".20",active:Math.abs(a.l-.2)<r&&Math.abs(a.s-.5)<r,onClick:t,last:!0})),l().createElement("div",{style:s.clear}))};var p=function(e){var t=e.hsl,a=e.onChange,s=e.pointer,r=e.styles,c=void 0===r?{}:r,h=e.className,p=void 0===h?"":h,f=(0,n.ZP)((0,i.Z)({default:{hue:{height:"12px",position:"relative"},Hue:{radius:"2px"}}},c));return l().createElement("div",{style:f.wrap||{},className:"slider-picker "+p},l().createElement("div",{style:f.hue},l().createElement(o.PS,{style:f.Hue,hsl:t,pointer:s,onChange:a})),l().createElement("div",{style:f.swatches},l().createElement(d,{hsl:t,onClick:a})))};p.propTypes={styles:c().object},p.defaultProps={pointer:function(){var e=(0,n.ZP)({default:{picker:{width:"14px",height:"14px",borderRadius:"6px",transform:"translate(-7px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}}});return l().createElement("div",{style:e.picker})},styles:{}};const f=(0,o.t1)(p)}}]);