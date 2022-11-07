"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{29630:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(63366),r=n(87462),s=n(67294),o=n(86010),a=n(39707),c=n(94780),h=n(81719),u=n(78884),p=n(36622),l=n(1588),d=n(34867);function f(e){return(0,d.Z)("MuiTypography",e)}(0,l.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=n(85893);const y=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=(0,h.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,p.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),m={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},k={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var g=s.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiTypography"}),s=(e=>k[e]||e)(n.color),h=(0,a.Z)((0,r.Z)({},n,{color:s})),{align:l="inherit",className:d,component:g,gutterBottom:T=!1,noWrap:N=!1,paragraph:_=!1,variant:O="body1",variantMapping:x=m}=h,b=(0,i.Z)(h,y),A=(0,r.Z)({},h,{align:l,color:s,className:d,component:g,gutterBottom:T,noWrap:N,paragraph:_,variant:O,variantMapping:x}),I=g||(_?"p":x[O]||m[O])||"span",D=(e=>{const{align:t,gutterBottom:n,noWrap:i,paragraph:r,variant:s,classes:o}=e,a={root:["root",s,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,n&&"gutterBottom",i&&"noWrap",r&&"paragraph"]};return(0,c.Z)(a,f,o)})(A);return(0,v.jsx)(E,(0,r.Z)({as:I,ref:t,ownerState:A,className:(0,o.Z)(D.root,d)},b))}))},81621:function(e,t,n){n.d(t,{Ps:function(){return H}});var i=function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)};Object.create;Object.create;function r(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,i=1;for(const o of e.body.matchAll(s)){if("number"===typeof o.index||r(!1),o.index>=t)break;n=o.index+o[0].length,i+=1}return{line:i,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,i="".padStart(n)+e.body,r=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,h=t.column+a,u=`${e.name}:${o}:${h}\n`,p=i.split(/\r\n|[\n\r]/g),l=p[r];if(l.length>120){const e=Math.floor(h/80),t=h%80,n=[];for(let i=0;i<l.length;i+=80)n.push(l.slice(i,i+80));return u+c([[`${o} |`,n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return u+c([[o-1+" |",p[r-1]],[`${o} |`,l],["|","^".padStart(h)],[`${o+1} |`,p[r+1]]])}function c(e){const t=e.filter((([e,t])=>void 0!==t)),n=Math.max(...t.map((([e])=>e.length)));return t.map((([e,t])=>e.padStart(n)+(t?" "+t:""))).join("\n")}class h extends Error{constructor(e,...t){var n,i,r;const{nodes:s,source:a,positions:c,path:p,originalError:l,extensions:d}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!==p&&void 0!==p?p:void 0,this.originalError=null!==l&&void 0!==l?l:void 0,this.nodes=u(Array.isArray(s)?s:s?[s]:void 0);const f=u(null===(n=this.nodes)||void 0===n?void 0:n.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!==a&&void 0!==a?a:null===f||void 0===f||null===(i=f[0])||void 0===i?void 0:i.source,this.positions=null!==c&&void 0!==c?c:null===f||void 0===f?void 0:f.map((e=>e.start)),this.locations=c&&a?c.map((e=>o(a,e))):null===f||void 0===f?void 0:f.map((e=>o(e.source,e.start)));const v="object"==typeof(y=null===l||void 0===l?void 0:l.extensions)&&null!==y?null===l||void 0===l?void 0:l.extensions:void 0;var y;this.extensions=null!==(r=null!==d&&void 0!==d?d:v)&&void 0!==r?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!==l&&void 0!==l&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,h):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function u(e){return void 0===e||0===e.length?void 0:e}function p(e,t,n){return new h(`Syntax Error: ${n}`,{source:e,positions:[t]})}var l,d=n(72380);!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(l||(l={}));var f,v=n(97359),y=n(87392),E=n(68297);!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(f||(f={}));class m{constructor(e){const t=new d.WU(f.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==f.EOF)do{if(e.next)e=e.next;else{const t=x(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===f.COMMENT);return e}}function k(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function g(e,t){return T(e.charCodeAt(t))&&N(e.charCodeAt(t+1))}function T(e){return e>=55296&&e<=56319}function N(e){return e>=56320&&e<=57343}function _(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return f.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":`"${e}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function O(e,t,n,i,r){const s=e.line,o=1+n-e.lineStart;return new d.WU(t,n,i,s,o,r)}function x(e,t){const n=e.source.body,i=n.length;let r=t;for(;r<i;){const t=n.charCodeAt(r);switch(t){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===n.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 35:return b(e,r);case 33:return O(e,f.BANG,r,r+1);case 36:return O(e,f.DOLLAR,r,r+1);case 38:return O(e,f.AMP,r,r+1);case 40:return O(e,f.PAREN_L,r,r+1);case 41:return O(e,f.PAREN_R,r,r+1);case 46:if(46===n.charCodeAt(r+1)&&46===n.charCodeAt(r+2))return O(e,f.SPREAD,r,r+3);break;case 58:return O(e,f.COLON,r,r+1);case 61:return O(e,f.EQUALS,r,r+1);case 64:return O(e,f.AT,r,r+1);case 91:return O(e,f.BRACKET_L,r,r+1);case 93:return O(e,f.BRACKET_R,r,r+1);case 123:return O(e,f.BRACE_L,r,r+1);case 124:return O(e,f.PIPE,r,r+1);case 125:return O(e,f.BRACE_R,r,r+1);case 34:return 34===n.charCodeAt(r+1)&&34===n.charCodeAt(r+2)?P(e,r):D(e,r)}if((0,E.X1)(t)||45===t)return A(e,r,t);if((0,E.LQ)(t))return F(e,r);throw p(e.source,r,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":k(t)||g(n,r)?`Unexpected character: ${_(e,r)}.`:`Invalid character: ${_(e,r)}.`)}return O(e,f.EOF,i,i)}function b(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(10===e||13===e)break;if(k(e))++r;else{if(!g(n,r))break;r+=2}}return O(e,f.COMMENT,t,r,n.slice(t+1,r))}function A(e,t,n){const i=e.source.body;let r=t,s=n,o=!1;if(45===s&&(s=i.charCodeAt(++r)),48===s){if(s=i.charCodeAt(++r),(0,E.X1)(s))throw p(e.source,r,`Invalid number, unexpected digit after 0: ${_(e,r)}.`)}else r=I(e,r,s),s=i.charCodeAt(r);if(46===s&&(o=!0,s=i.charCodeAt(++r),r=I(e,r,s),s=i.charCodeAt(r)),69!==s&&101!==s||(o=!0,s=i.charCodeAt(++r),43!==s&&45!==s||(s=i.charCodeAt(++r)),r=I(e,r,s),s=i.charCodeAt(r)),46===s||(0,E.LQ)(s))throw p(e.source,r,`Invalid number, expected digit but got: ${_(e,r)}.`);return O(e,o?f.FLOAT:f.INT,t,r,i.slice(t,r))}function I(e,t,n){if(!(0,E.X1)(n))throw p(e.source,t,`Invalid number, expected digit but got: ${_(e,t)}.`);const i=e.source.body;let r=t+1;for(;(0,E.X1)(i.charCodeAt(r));)++r;return r}function D(e,t){const n=e.source.body,i=n.length;let r=t+1,s=r,o="";for(;r<i;){const i=n.charCodeAt(r);if(34===i)return o+=n.slice(s,r),O(e,f.STRING,t,r+1,o);if(92!==i){if(10===i||13===i)break;if(k(i))++r;else{if(!g(n,r))throw p(e.source,r,`Invalid character within String: ${_(e,r)}.`);r+=2}}else{o+=n.slice(s,r);const t=117===n.charCodeAt(r+1)?123===n.charCodeAt(r+2)?C(e,r):R(e,r):L(e,r);o+=t.value,r+=t.size,s=r}}throw p(e.source,r,"Unterminated string.")}function C(e,t){const n=e.source.body;let i=0,r=3;for(;r<12;){const e=n.charCodeAt(t+r++);if(125===e){if(r<5||!k(i))break;return{value:String.fromCodePoint(i),size:r}}if(i=i<<4|w(e),i<0)break}throw p(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+r)}".`)}function R(e,t){const n=e.source.body,i=S(n,t+2);if(k(i))return{value:String.fromCodePoint(i),size:6};if(T(i)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=S(n,t+8);if(N(e))return{value:String.fromCodePoint(i,e),size:12}}throw p(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function S(e,t){return w(e.charCodeAt(t))<<12|w(e.charCodeAt(t+1))<<8|w(e.charCodeAt(t+2))<<4|w(e.charCodeAt(t+3))}function w(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function L(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw p(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function P(e,t){const n=e.source.body,i=n.length;let r=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<i;){const i=n.charCodeAt(s);if(34===i&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const i=O(e,f.BLOCK_STRING,t,s+3,(0,y.wv)(c).join("\n"));return e.line+=c.length-1,e.lineStart=r,i}if(92!==i||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==i&&13!==i)if(k(i))++s;else{if(!g(n,s))throw p(e.source,s,`Invalid character within String: ${_(e,s)}.`);s+=2}else a+=n.slice(o,s),c.push(a),13===i&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,r=s;else a+=n.slice(o,s),o=s+1,s+=4}throw p(e.source,s,"Unterminated string.")}function F(e,t){const n=e.source.body,i=n.length;let r=t+1;for(;r<i;){const e=n.charCodeAt(r);if(!(0,E.HQ)(e))break;++r}return O(e,f.NAME,t,r,n.slice(t,r))}var M=n(51270);class B{constructor(e,t={}){const n=(0,M.T)(e)?e:new M.H(e);this._lexer=new m(n),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(f.NAME);return this.node(e,{kind:v.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.h.DOCUMENT,definitions:this.many(f.SOF,this.parseDefinition,f.EOF)})}parseDefinition(){if(this.peek(f.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===f.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw p(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(f.BRACE_L))return this.node(e,{kind:v.h.OPERATION_DEFINITION,operation:d.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(f.NAME)&&(n=this.parseName()),this.node(e,{kind:v.h.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(f.NAME);switch(e.value){case"query":return d.ku.QUERY;case"mutation":return d.ku.MUTATION;case"subscription":return d.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(f.PAREN_L,this.parseVariableDefinition,f.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(f.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(f.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(f.DOLLAR),this.node(e,{kind:v.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.h.SELECTION_SET,selections:this.many(f.BRACE_L,this.parseSelection,f.BRACE_R)})}parseSelection(){return this.peek(f.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,i;return this.expectOptionalToken(f.COLON)?(n=t,i=this.parseName()):i=t,this.node(e,{kind:v.h.FIELD,alias:n,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(f.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(f.PAREN_L,t,f.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:v.h.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(f.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(f.NAME)?this.node(e,{kind:v.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:v.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:v.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:v.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case f.BRACKET_L:return this.parseList(e);case f.BRACE_L:return this.parseObject(e);case f.INT:return this.advanceLexer(),this.node(t,{kind:v.h.INT,value:t.value});case f.FLOAT:return this.advanceLexer(),this.node(t,{kind:v.h.FLOAT,value:t.value});case f.STRING:case f.BLOCK_STRING:return this.parseStringLiteral();case f.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:v.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:v.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:v.h.NULL});default:return this.node(t,{kind:v.h.ENUM,value:t.value})}case f.DOLLAR:if(e){if(this.expectToken(f.DOLLAR),this._lexer.token.kind===f.NAME){const e=this._lexer.token.value;throw p(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:v.h.STRING,value:e.value,block:e.kind===f.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:v.h.LIST,values:this.any(f.BRACKET_L,(()=>this.parseValueLiteral(e)),f.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:v.h.OBJECT,fields:this.any(f.BRACE_L,(()=>this.parseObjectField(e)),f.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:v.h.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(f.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(f.AT),this.node(t,{kind:v.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(f.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(f.BRACKET_R),t=this.node(e,{kind:v.h.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(f.BANG)?this.node(e,{kind:v.h.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:v.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(f.STRING)||this.peek(f.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.many(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);return this.node(e,{kind:v.h.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(f.COLON);const n=this.parseNamedType();return this.node(e,{kind:v.h.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();return this.node(e,{kind:v.h.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.h.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(f.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseFieldDefinition,f.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(f.COLON);const r=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:v.h.FIELD_DEFINITION,description:t,name:n,arguments:i,type:r,directives:s})}parseArgumentDefs(){return this.optionalMany(f.PAREN_L,this.parseInputValueDef,f.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(f.COLON);const i=this.parseTypeReference();let r;this.expectOptionalToken(f.EQUALS)&&(r=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:v.h.INPUT_VALUE_DEFINITION,description:t,name:n,type:i,defaultValue:r,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.h.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:r,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:v.h.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(f.EQUALS)?this.delimitedMany(f.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:v.h.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:r})}parseEnumValuesDefinition(){return this.optionalMany(f.BRACE_L,this.parseEnumValueDefinition,f.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(e,{kind:v.h.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw p(this._lexer.source,this._lexer.token.start,`${U(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:v.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseInputValueDef,f.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===f.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:v.h.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:v.h.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.h.UNION_TYPE_EXTENSION,name:t,directives:n,types:i})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.h.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(f.AT);const n=this.parseName(),i=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:v.h.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:r,locations:s})}parseDirectiveLocations(){return this.delimitedMany(f.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(l,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new d.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw p(this._lexer.source,t.start,`Expected ${Q(e)}, found ${U(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==f.NAME||t.value!==e)throw p(this._lexer.source,t.start,`Expected "${e}", found ${U(t)}.`);this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===f.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!==e&&void 0!==e?e:this._lexer.token;return p(this._lexer.source,t.start,`Unexpected ${U(t)}.`)}any(e,t,n){this.expectToken(e);const i=[];for(;!this.expectOptionalToken(n);)i.push(t.call(this));return i}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==f.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw p(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function U(e){const t=e.value;return Q(e.kind)+(null!=t?` "${t}"`:"")}function Q(e){return function(e){return e===f.BANG||e===f.DOLLAR||e===f.AMP||e===f.PAREN_L||e===f.PAREN_R||e===f.SPREAD||e===f.COLON||e===f.EQUALS||e===f.AT||e===f.BRACKET_L||e===f.BRACKET_R||e===f.BRACE_L||e===f.PIPE||e===f.BRACE_R}(e)?`"${e}"`:e}var V=new Map,K=new Map,G=!0,j=!1;function q(e){return e.replace(/[\s,]+/g," ").trim()}function $(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var i=e.name.value,r=q((o=e.loc).source.body.substring(o.start,o.end)),s=K.get(i);s&&!s.has(r)?G&&console.warn("Warning: fragment with name "+i+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||K.set(i,s=new Set),s.add(r),t.has(r)||(t.add(r),n.push(e))}else n.push(e);var o})),i(i({},e),{definitions:n})}function Y(e){var t=q(e);if(!V.has(t)){var n=function(e,t){return new B(e,t).parseDocument()}(e,{experimentalFragmentVariables:j,allowLegacyFragmentVariables:j});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");V.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var i=e[n];i&&"object"===typeof i&&t.add(i)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}($(n)))}return V.get(t)}function H(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"===typeof e&&(e=[e]);var i=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?i+=t.loc.source.body:i+=t,i+=e[n+1]})),Y(i)}var W,J=H,Z=function(){V.clear(),K.clear()},z=function(){G=!1},X=function(){j=!0},ee=function(){j=!1};(W=H||(H={})).gql=J,W.resetCaches=Z,W.disableFragmentWarnings=z,W.enableExperimentalFragmentVariables=X,W.disableExperimentalFragmentVariables=ee,H.default=H},55850:function(e,t,n){n.d(t,{a:function(){return O}});var i=n(23564),r=n(27354),s=n(67294),o=n.t(s,2),a=n(30320),c=!1,h=o.useSyncExternalStore||function(e,t,n){var i=t();__DEV__&&!c&&i!==t()&&(c=!0,__DEV__&&r.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var o=s.useState({inst:{value:i,getSnapshot:t}}),h=o[0].inst,p=o[1];return a.JC?s.useLayoutEffect((function(){Object.assign(h,{value:i,getSnapshot:t}),u(h)&&p({inst:h})}),[e,i,t]):Object.assign(h,{value:i,getSnapshot:t}),s.useEffect((function(){return u(h)&&p({inst:h}),e((function(){u(h)&&p({inst:h})}))}),[e]),i};function u(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch(i){return!0}}var p,l=n(82152),d=n(14012),f=n(85317),v=n(30990),y=n(1644);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(p||(p={}));var E=new Map;function m(e){var t;switch(e){case p.Query:t="Query";break;case p.Mutation:t="Mutation";break;case p.Subscription:t="Subscription"}return t}function k(e,t){var n=function(e){var t,n,i=E.get(e);if(i)return i;__DEV__?(0,r.kG)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):(0,r.kG)(!!e&&!!e.kind,32);for(var s=[],o=[],a=[],c=[],h=0,u=e.definitions;h<u.length;h++){var l=u[h];if("FragmentDefinition"!==l.kind){if("OperationDefinition"===l.kind)switch(l.operation){case"query":o.push(l);break;case"mutation":a.push(l);break;case"subscription":c.push(l)}}else s.push(l)}__DEV__?(0,r.kG)(!s.length||o.length||a.length||c.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):(0,r.kG)(!s.length||o.length||a.length||c.length,33),__DEV__?(0,r.kG)(o.length+a.length+c.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(o.length," queries, ").concat(c.length," ")+"subscriptions and ".concat(a.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(o.length+a.length+c.length<=1,34),n=o.length?p.Query:p.Mutation,o.length||a.length||(n=p.Subscription);var d=o.length?o:a.length?a:c;__DEV__?(0,r.kG)(1===d.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(d.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):(0,r.kG)(1===d.length,35);var f=d[0];t=f.variableDefinitions||[];var v={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:n,variables:t};return E.set(e,v),v}(e),i=m(t),s=m(n.type);__DEV__?(0,r.kG)(n.type===t,"Running a ".concat(i," requires a graphql ")+"".concat(i,", but a ").concat(s," was used instead.")):(0,r.kG)(n.type===t,36)}var g=n(48702),T=n(53712),N=n(21436),_=Object.prototype.hasOwnProperty;function O(e,t){return void 0===t&&(t=Object.create(null)),function(e,t){var n=(0,s.useRef)();n.current&&e===n.current.client&&t===n.current.query||(n.current=new x(e,t,n.current));var i=n.current,r=(0,s.useState)(0),o=(r[0],r[1]);return i.forceUpdate=function(){o((function(e){return e+1}))},i}(function(e){var t=(0,s.useContext)((0,f.K)()),n=e||t.client;return __DEV__?(0,r.kG)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!n,31),n}(t.client),e).useQuery(t)}var x=function(){function e(e,t,n){this.client=e,this.query=t,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(a.sy?WeakSet:Set),this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),k(t,p.Query);var i=n&&n.result,r=i&&i.data;r&&(this.previousData=r)}return e.prototype.forceUpdate=function(){__DEV__&&r.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},e.prototype.asyncUpdate=function(){var e=this;return new Promise((function(t){e.asyncResolveFns.add(t),e.optionsToIgnoreOnce.add(e.watchQueryOptions),e.forceUpdate()}))},e.prototype.useQuery=function(e){var t=this;this.renderPromises=(0,s.useContext)((0,f.K)()).renderPromises,this.useOptions(e);var n=this.useObservableQuery(),i=h((0,s.useCallback)((function(){if(t.renderPromises)return function(){};var e=function(){var e=t.result,i=n.getCurrentResult();e&&e.loading===i.loading&&e.networkStatus===i.networkStatus&&(0,l.D)(e.data,i.data)||t.setResult(i)},i=function(s){var o=n.last;r.unsubscribe();try{n.resetLastResults(),r=n.subscribe(e,i)}finally{n.last=o}if(!_.call(s,"graphQLErrors"))throw s;var a=t.result;(!a||a&&a.loading||!(0,l.D)(s,a.error))&&t.setResult({data:a&&a.data,error:s,loading:!1,networkStatus:y.I.error})},r=n.subscribe(e,i);return function(){return r.unsubscribe()}}),[n,this.renderPromises,this.client.disableNetworkFetches]),(function(){return t.getCurrentResult()}),(function(){return t.getCurrentResult()}));this.unsafeHandlePartialRefetch(i);var r=this.toQueryResult(i);return!r.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(e){return e(r)})),this.asyncResolveFns.clear()),r},e.prototype.useOptions=function(t){var n,i=this.createWatchQueryOptions(this.queryHookOptions=t),r=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(r)&&(0,l.D)(i,r)||(this.watchQueryOptions=i,r&&this.observable&&(this.optionsToIgnoreOnce.delete(r),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(n=this.result)||void 0===n?void 0:n.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||e.prototype.onCompleted,this.onError=t.onError||e.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},e.prototype.getObsQueryOptions=function(){var e=[],t=this.client.defaultOptions.watchQuery;return t&&e.push(t),this.queryHookOptions.defaultOptions&&e.push(this.queryHookOptions.defaultOptions),e.push((0,T.o)(this.observable&&this.observable.options,this.watchQueryOptions)),e.reduce(d.J)},e.prototype.createWatchQueryOptions=function(e){var t;void 0===e&&(e={});var n=e.skip,r=(e.ssr,e.onCompleted,e.onError,e.defaultOptions,(0,i._T)(e,["skip","ssr","onCompleted","onError","defaultOptions"])),s=Object.assign(r,{query:this.query});if(!this.renderPromises||"network-only"!==s.fetchPolicy&&"cache-and-network"!==s.fetchPolicy||(s.fetchPolicy="cache-first"),s.variables||(s.variables={}),n){var o=s.fetchPolicy,a=void 0===o?this.getDefaultFetchPolicy():o,c=s.initialFetchPolicy,h=void 0===c?a:c;Object.assign(s,{initialFetchPolicy:h,fetchPolicy:"standby"})}else s.fetchPolicy||(s.fetchPolicy=(null===(t=this.observable)||void 0===t?void 0:t.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return s},e.prototype.getDefaultFetchPolicy=function(){var e,t;return(null===(e=this.queryHookOptions.defaultOptions)||void 0===e?void 0:e.fetchPolicy)||(null===(t=this.client.defaultOptions.watchQuery)||void 0===t?void 0:t.fetchPolicy)||"cache-first"},e.prototype.onCompleted=function(e){},e.prototype.onError=function(e){},e.prototype.useObservableQuery=function(){var e=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,s.useMemo)((function(){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}),[e]);var t=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&t&&(this.renderPromises.registerSSRObservable(e),e.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(e)),e},e.prototype.setResult=function(e){var t=this.result;t&&t.data&&(this.previousData=t.data),this.result=e,this.forceUpdate(),this.handleErrorOrCompleted(e)},e.prototype.handleErrorOrCompleted=function(e){var t=this;e.loading||Promise.resolve().then((function(){e.error?t.onError(e.error):e.data&&t.onCompleted(e.data)})).catch((function(e){__DEV__&&r.kG.warn(e)}))},e.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},e.prototype.toQueryResult=function(e){var t=this.toQueryResultCache.get(e);if(t)return t;var n=e.data,r=(e.partial,(0,i._T)(e,["data","partial"]));return this.toQueryResultCache.set(e,t=(0,i.pi)((0,i.pi)((0,i.pi)({data:n},r),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!t.error&&(0,N.O)(e.errors)&&(t.error=new v.c({graphQLErrors:e.errors})),t},e.prototype.unsafeHandlePartialRefetch=function(e){!e.partial||!this.queryHookOptions.partialRefetch||e.loading||e.data&&0!==Object.keys(e.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(e,{loading:!0,networkStatus:y.I.refetch}),this.observable.refetch())},e}()}}]);