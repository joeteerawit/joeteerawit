"use strict";(self.webpackChunkjoeteerawit=self.webpackChunkjoeteerawit||[]).push([[5206],{4818:(e,n,t)=>{t.d(n,{a:()=>d});var r=t(844),i=t(9913),o=t(1869),a=t(6375),s="\0",d=class{static{(0,a.a)(this,"Graph")}constructor(e={}){this._isDirected=!(0,r.x)(e,"directed")||e.directed,this._isMultigraph=!!(0,r.x)(e,"multigraph")&&e.multigraph,this._isCompound=!!(0,r.x)(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=(0,o.O)(void 0),this._defaultEdgeLabelFn=(0,o.O)(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[s]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return(0,o.e)(e)||(e=(0,o.O)(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return(0,r.b)(this._nodes)}sources(){var e=this;return(0,r.p)(this.nodes(),(function(n){return(0,i.d)(e._in[n])}))}sinks(){var e=this;return(0,r.p)(this.nodes(),(function(n){return(0,i.d)(e._out[n])}))}setNodes(e,n){var t=arguments,i=this;return(0,r.n)(e,(function(e){t.length>1?i.setNode(e,n):i.setNode(e)})),this}setNode(e,n){return(0,r.x)(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=s,this._children[e]={},this._children[s][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return(0,r.x)(this._nodes,e)}removeNode(e){var n=this;if((0,r.x)(this._nodes,e)){var t=(0,a.a)((function(e){n.removeEdge(n._edgeObjs[e])}),"removeEdge");delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],(0,r.n)(this.children(e),(function(e){n.setParent(e)})),delete this._children[e]),(0,r.n)((0,r.b)(this._in[e]),t),delete this._in[e],delete this._preds[e],(0,r.n)((0,r.b)(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if((0,r.D)(n))n=s;else{for(var t=n+="";!(0,r.D)(t);t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var n=this._parent[e];if(n!==s)return n}}children(e){if((0,r.D)(e)&&(e=s),this._isCompound){var n=this._children[e];if(n)return(0,r.b)(n)}else{if(e===s)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var n=this._preds[e];if(n)return(0,r.b)(n)}successors(e){var n=this._sucs[e];if(n)return(0,r.b)(n)}neighbors(e){var n=this.predecessors(e);if(n)return(0,r.Q)(n,this.successors(e))}isLeaf(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length}filterNodes(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;(0,r.n)(this._nodes,(function(t,r){e(r)&&n.setNode(r,t)})),(0,r.n)(this._edgeObjs,(function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,t.edge(e))}));var i={};function o(e){var r=t.parent(e);return void 0===r||n.hasNode(r)?(i[e]=r,r):r in i?i[r]:o(r)}return(0,a.a)(o,"findParent"),this._isCompound&&(0,r.n)(n.nodes(),(function(e){n.setParent(e,o(e))})),n}setDefaultEdgeLabel(e){return(0,o.e)(e)||(e=(0,o.O)(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return(0,r.z)(this._edgeObjs)}setPath(e,n){var t=this,i=arguments;return(0,r.L)(e,(function(e,r){return i.length>1?t.setEdge(e,r,n):t.setEdge(e,r),r})),this}setEdge(){var e,n,t,i,o=!1,a=arguments[0];"object"==typeof a&&null!==a&&"v"in a?(e=a.v,n=a.w,t=a.name,2===arguments.length&&(i=arguments[1],o=!0)):(e=a,n=arguments[1],t=arguments[3],arguments.length>2&&(i=arguments[2],o=!0)),e=""+e,n=""+n,(0,r.D)(t)||(t=""+t);var s=h(this._isDirected,e,n,t);if((0,r.x)(this._edgeLabels,s))return o&&(this._edgeLabels[s]=i),this;if(!(0,r.D)(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[s]=o?i:this._defaultEdgeLabelFn(e,n,t);var d=f(this._isDirected,e,n,t);return e=d.v,n=d.w,Object.freeze(d),this._edgeObjs[s]=d,u(this._preds[n],e),u(this._sucs[e],n),this._in[n][s]=d,this._out[e][s]=d,this._edgeCount++,this}edge(e,n,t){var r=1===arguments.length?g(this._isDirected,arguments[0]):h(this._isDirected,e,n,t);return this._edgeLabels[r]}hasEdge(e,n,t){var i=1===arguments.length?g(this._isDirected,arguments[0]):h(this._isDirected,e,n,t);return(0,r.x)(this._edgeLabels,i)}removeEdge(e,n,t){var r=1===arguments.length?g(this._isDirected,arguments[0]):h(this._isDirected,e,n,t),i=this._edgeObjs[r];return i&&(e=i.v,n=i.w,delete this._edgeLabels[r],delete this._edgeObjs[r],c(this._preds[n],e),c(this._sucs[e],n),delete this._in[n][r],delete this._out[e][r],this._edgeCount--),this}inEdges(e,n){var t=this._in[e];if(t){var i=(0,r.z)(t);return n?(0,r.p)(i,(function(e){return e.v===n})):i}}outEdges(e,n){var t=this._out[e];if(t){var i=(0,r.z)(t);return n?(0,r.p)(i,(function(e){return e.w===n})):i}}nodeEdges(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))}};function u(e,n){e[n]?e[n]++:e[n]=1}function c(e,n){--e[n]||delete e[n]}function h(e,n,t,i){var o=""+n,a=""+t;if(!e&&o>a){var s=o;o=a,a=s}return o+""+a+""+((0,r.D)(i)?"\0":i)}function f(e,n,t,r){var i=""+n,o=""+t;if(!e&&i>o){var a=i;i=o,o=a}var s={v:i,w:o};return r&&(s.name=r),s}function g(e,n){return h(e,n.v,n.w,n.name)}d.prototype._nodeCount=0,d.prototype._edgeCount=0,(0,a.a)(u,"incrementOrInitEntry"),(0,a.a)(c,"decrementOrRemoveEntry"),(0,a.a)(h,"edgeArgsToId"),(0,a.a)(f,"edgeArgsToObj"),(0,a.a)(g,"edgeObjToId")},5206:(e,n,t)=>{t.d(n,{a:()=>un});var r=t(4818),i=t(844),o=t(1869),a=t(6375);function s(e,n,t,r){var o;do{o=(0,i.T)(r)}while(e.hasNode(o));return t.dummy=n,e.setNode(o,t),o}function d(e){var n=(new r.a).setGraph(e.graph());return(0,i.n)(e.nodes(),(function(t){n.setNode(t,e.node(t))})),(0,i.n)(e.edges(),(function(t){var r=n.edge(t.v,t.w)||{weight:0,minlen:1},i=e.edge(t);n.setEdge(t.v,t.w,{weight:r.weight+i.weight,minlen:Math.max(r.minlen,i.minlen)})})),n}function u(e){var n=new r.a({multigraph:e.isMultigraph()}).setGraph(e.graph());return(0,i.n)(e.nodes(),(function(t){e.children(t).length||n.setNode(t,e.node(t))})),(0,i.n)(e.edges(),(function(t){n.setEdge(t,e.edge(t))})),n}function c(e,n){var t,r,i=e.x,o=e.y,a=n.x-i,s=n.y-o,d=e.width/2,u=e.height/2;if(!a&&!s)throw new Error("Not possible to find intersection inside of the rectangle");return Math.abs(s)*d>Math.abs(a)*u?(s<0&&(u=-u),t=u*a/s,r=u):(a<0&&(d=-d),t=d,r=d*s/a),{x:i+t,y:o+r}}function h(e){var n=(0,i.s)((0,i.K)(v(e)+1),(function(){return[]}));return(0,i.n)(e.nodes(),(function(t){var r=e.node(t),o=r.rank;(0,i.D)(o)||(n[o][r.order]=t)})),n}function f(e){var n=(0,i.G)((0,i.s)(e.nodes(),(function(n){return e.node(n).rank})));(0,i.n)(e.nodes(),(function(t){var r=e.node(t);(0,i.x)(r,"rank")&&(r.rank-=n)}))}function g(e){var n=(0,i.G)((0,i.s)(e.nodes(),(function(n){return e.node(n).rank}))),t=[];(0,i.n)(e.nodes(),(function(r){var i=e.node(r).rank-n;t[i]||(t[i]=[]),t[i].push(r)}));var r=0,o=e.graph().nodeRankFactor;(0,i.n)(t,(function(n,t){(0,i.D)(n)&&t%o!=0?--r:r&&(0,i.n)(n,(function(n){e.node(n).rank+=r}))}))}function l(e,n,t,r){var i={width:0,height:0};return arguments.length>=4&&(i.rank=t,i.order=r),s(e,"border",i,n)}function v(e){return(0,i.F)((0,i.s)(e.nodes(),(function(n){var t=e.node(n).rank;if(!(0,i.D)(t))return t})))}function p(e,n){var t={lhs:[],rhs:[]};return(0,i.n)(e,(function(e){n(e)?t.lhs.push(e):t.rhs.push(e)})),t}function m(e,n){var t=(0,i.h)();try{return n()}finally{console.log(e+" time: "+((0,i.h)()-t)+"ms")}}function w(e,n){return n()}function b(e){function n(t){var r=e.children(t),o=e.node(t);if(r.length&&(0,i.n)(r,n),(0,i.x)(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var a=o.minRank,s=o.maxRank+1;a<s;++a)_(e,"borderLeft","_bl",t,o,a),_(e,"borderRight","_br",t,o,a)}}(0,a.a)(n,"dfs"),(0,i.n)(e.children(),n)}function _(e,n,t,r,i,o){var a={width:0,height:0,rank:o,borderType:n},d=i[n][o-1],u=s(e,"border",a,t);i[n][o]=u,e.setParent(u,r),d&&e.setEdge(d,u,{weight:1})}function y(e){var n=e.graph().rankdir.toLowerCase();("lr"===n||"rl"===n)&&E(e)}function x(e){var n=e.graph().rankdir.toLowerCase();("bt"===n||"rl"===n)&&N(e),("lr"===n||"rl"===n)&&(L(e),E(e))}function E(e){(0,i.n)(e.nodes(),(function(n){k(e.node(n))})),(0,i.n)(e.edges(),(function(n){k(e.edge(n))}))}function k(e){var n=e.width;e.width=e.height,e.height=n}function N(e){(0,i.n)(e.nodes(),(function(n){C(e.node(n))})),(0,i.n)(e.edges(),(function(n){var t=e.edge(n);(0,i.n)(t.points,C),(0,i.x)(t,"y")&&C(t)}))}function C(e){e.y=-e.y}function L(e){(0,i.n)(e.nodes(),(function(n){I(e.node(n))})),(0,i.n)(e.edges(),(function(n){var t=e.edge(n);(0,i.n)(t.points,I),(0,i.x)(t,"x")&&I(t)}))}function I(e){var n=e.x;e.x=e.y,e.y=n}(0,a.a)(s,"addDummyNode"),(0,a.a)(d,"simplify"),(0,a.a)(u,"asNonCompoundGraph"),(0,a.a)(c,"intersectRect"),(0,a.a)(h,"buildLayerMatrix"),(0,a.a)(f,"normalizeRanks"),(0,a.a)(g,"removeEmptyRanks"),(0,a.a)(l,"addBorderNode"),(0,a.a)(v,"maxRank"),(0,a.a)(p,"partition"),(0,a.a)(m,"time"),(0,a.a)(w,"notime"),(0,a.a)(b,"addBorderSegments"),(0,a.a)(_,"addBorderNode"),(0,a.a)(y,"adjust"),(0,a.a)(x,"undo"),(0,a.a)(E,"swapWidthHeight"),(0,a.a)(k,"swapWidthHeightOne"),(0,a.a)(N,"reverseY"),(0,a.a)(C,"reverseYOne"),(0,a.a)(L,"swapXY"),(0,a.a)(I,"swapXYOne");var T=class{static{(0,a.a)(this,"List")}constructor(){var e={};e._next=e._prev=e,this._sentinel=e}dequeue(){var e=this._sentinel,n=e._prev;if(n!==e)return R(n),n}enqueue(e){var n=this._sentinel;e._prev&&e._next&&R(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n}toString(){for(var e=[],n=this._sentinel,t=n._prev;t!==n;)e.push(JSON.stringify(t,D)),t=t._prev;return"["+e.join(", ")+"]"}};function R(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function D(e,n){if("_next"!==e&&"_prev"!==e)return n}(0,a.a)(R,"unlink"),(0,a.a)(D,"filterOutLinks");var O=(0,o.O)(1);function M(e,n){if(e.nodeCount()<=1)return[];var t=F(e,n||O),r=P(t.graph,t.buckets,t.zeroIdx);return(0,i.d)((0,i.s)(r,(function(n){return e.outEdges(n.v,n.w)})))}function P(e,n,t){for(var r,i=[],o=n[n.length-1],a=n[0];e.nodeCount();){for(;r=a.dequeue();)S(e,n,t,r);for(;r=o.dequeue();)S(e,n,t,r);if(e.nodeCount())for(var s=n.length-2;s>0;--s)if(r=n[s].dequeue()){i=i.concat(S(e,n,t,r,!0));break}}return i}function S(e,n,t,r,o){var a=o?[]:void 0;return(0,i.n)(e.inEdges(r.v),(function(r){var i=e.edge(r),s=e.node(r.v);o&&a.push({v:r.v,w:r.w}),s.out-=i,G(n,t,s)})),(0,i.n)(e.outEdges(r.v),(function(r){var i=e.edge(r),o=r.w,a=e.node(o);a.in-=i,G(n,t,a)})),e.removeNode(r.v),a}function F(e,n){var t=new r.a,o=0,a=0;(0,i.n)(e.nodes(),(function(e){t.setNode(e,{v:e,in:0,out:0})})),(0,i.n)(e.edges(),(function(e){var r=t.edge(e.v,e.w)||0,i=n(e),s=r+i;t.setEdge(e.v,e.w,s),a=Math.max(a,t.node(e.v).out+=i),o=Math.max(o,t.node(e.w).in+=i)}));var s=(0,i.K)(a+o+3).map((function(){return new T})),d=o+1;return(0,i.n)(t.nodes(),(function(e){G(s,d,t.node(e))})),{graph:t,buckets:s,zeroIdx:d}}function G(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}function j(e){var n="greedy"===e.graph().acyclicer?M(e,t(e)):z(e);function t(e){return function(n){return e.edge(n).weight}}(0,i.n)(n,(function(n){var t=e.edge(n);e.removeEdge(n),t.forwardName=n.name,t.reversed=!0,e.setEdge(n.w,n.v,t,(0,i.T)("rev"))})),(0,a.a)(t,"weightFn")}function z(e){var n=[],t={},r={};function o(a){(0,i.x)(r,a)||(r[a]=!0,t[a]=!0,(0,i.n)(e.outEdges(a),(function(e){(0,i.x)(t,e.w)?n.push(e):o(e.w)})),delete t[a])}return(0,a.a)(o,"dfs"),(0,i.n)(e.nodes(),o),n}function B(e){(0,i.n)(e.edges(),(function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var r=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,r)}}))}function V(e){e.graph().dummyChains=[],(0,i.n)(e.edges(),(function(n){Y(e,n)}))}function Y(e,n){var t=n.v,r=e.node(t).rank,i=n.w,o=e.node(i).rank,a=n.name,d=e.edge(n),u=d.labelRank;if(o!==r+1){var c,h,f;for(e.removeEdge(n),f=0,++r;r<o;++f,++r)d.points=[],c=s(e,"edge",h={width:0,height:0,edgeLabel:d,edgeObj:n,rank:r},"_d"),r===u&&(h.width=d.width,h.height=d.height,h.dummy="edge-label",h.labelpos=d.labelpos),e.setEdge(t,c,{weight:d.weight},a),0===f&&e.graph().dummyChains.push(c),t=c;e.setEdge(t,i,{weight:d.weight},a)}}function q(e){(0,i.n)(e.graph().dummyChains,(function(n){var t,r=e.node(n),i=r.edgeLabel;for(e.setEdge(r.edgeObj,i);r.dummy;)t=e.successors(n)[0],e.removeNode(n),i.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height),n=t,r=e.node(n)}))}function A(e){var n={};function t(r){var o=e.node(r);if((0,i.x)(n,r))return o.rank;n[r]=!0;var a=(0,i.G)((0,i.s)(e.outEdges(r),(function(n){return t(n.w)-e.edge(n).minlen})));return(a===Number.POSITIVE_INFINITY||null==a)&&(a=0),o.rank=a}(0,a.a)(t,"dfs"),(0,i.n)(e.sources(),t)}function K(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function H(e){var n,t,i=new r.a({directed:!1}),o=e.nodes()[0],a=e.nodeCount();for(i.setNode(o,{});J(i,e)<a;)n=W(i,e),t=i.hasNode(n.v)?K(e,n):-K(e,n),X(i,e,t);return i}function J(e,n){function t(r){(0,i.n)(n.nodeEdges(r),(function(i){var o=i.v,a=r===o?i.w:o;!e.hasNode(a)&&!K(n,i)&&(e.setNode(a,{}),e.setEdge(r,a,{}),t(a))}))}return(0,a.a)(t,"dfs"),(0,i.n)(e.nodes(),t),e.nodeCount()}function W(e,n){return(0,i.H)(n.edges(),(function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return K(n,t)}))}function X(e,n,t){(0,i.n)(e.nodes(),(function(e){n.node(e).rank+=t}))}function U(e){var n={},t={},r=[];function o(a){if((0,i.x)(t,a))throw new Q;(0,i.x)(n,a)||(t[a]=!0,n[a]=!0,(0,i.n)(e.predecessors(a),o),delete t[a],r.push(a))}if((0,a.a)(o,"visit"),(0,i.n)(e.sinks(),o),(0,i.N)(n)!==e.nodeCount())throw new Q;return r}function Q(){}function Z(e,n,t){(0,o.z)(n)||(n=[n]);var r=(e.isDirected()?e.successors:e.neighbors).bind(e),a=[],s={};return(0,i.n)(n,(function(n){if(!e.hasNode(n))throw new Error("Graph does not have node: "+n);$(e,n,"post"===t,s,r,a)})),a}function $(e,n,t,r,o,a){(0,i.x)(r,n)||(r[n]=!0,t||a.push(n),(0,i.n)(o(n),(function(n){$(e,n,t,r,o,a)})),t&&a.push(n))}function ee(e,n){return Z(e,n,"post")}function ne(e,n){return Z(e,n,"pre")}function te(e){A(e=d(e));var n,t=H(e);for(ae(t),re(t,e);n=de(t);)ce(t,e,n,ue(t,e,n))}function re(e,n){var t=ee(e,e.nodes());t=t.slice(0,t.length-1),(0,i.n)(t,(function(t){ie(e,n,t)}))}function ie(e,n,t){var r=e.node(t).parent;e.edge(t,r).cutvalue=oe(e,n,t)}function oe(e,n,t){var r=e.node(t).parent,o=!0,a=n.edge(t,r),s=0;return a||(o=!1,a=n.edge(r,t)),s=a.weight,(0,i.n)(n.nodeEdges(t),(function(i){var a=i.v===t,d=a?i.w:i.v;if(d!==r){var u=a===o,c=n.edge(i).weight;if(s+=u?c:-c,fe(e,t,d)){var h=e.edge(t,d).cutvalue;s+=u?-h:h}}})),s}function ae(e,n){arguments.length<2&&(n=e.nodes()[0]),se(e,{},1,n)}function se(e,n,t,r,o){var a=t,s=e.node(r);return n[r]=!0,(0,i.n)(e.neighbors(r),(function(o){(0,i.x)(n,o)||(t=se(e,n,t,o,r))})),s.low=a,s.lim=t++,o?s.parent=o:delete s.parent,t}function de(e){return(0,i.q)(e.edges(),(function(n){return e.edge(n).cutvalue<0}))}function ue(e,n,t){var r=t.v,o=t.w;n.hasEdge(r,o)||(r=t.w,o=t.v);var a=e.node(r),s=e.node(o),d=a,u=!1;a.lim>s.lim&&(d=s,u=!0);var c=(0,i.p)(n.edges(),(function(n){return u===ge(0,e.node(n.v),d)&&u!==ge(0,e.node(n.w),d)}));return(0,i.H)(c,(function(e){return K(n,e)}))}function ce(e,n,t,r){var i=t.v,o=t.w;e.removeEdge(i,o),e.setEdge(r.v,r.w,{}),ae(e),re(e,n),he(e,n)}function he(e,n){var t=(0,i.q)(e.nodes(),(function(e){return!n.node(e).parent})),r=ne(e,t);r=r.slice(1),(0,i.n)(r,(function(t){var r=e.node(t).parent,i=n.edge(t,r),o=!1;i||(i=n.edge(r,t),o=!0),n.node(t).rank=n.node(r).rank+(o?i.minlen:-i.minlen)}))}function fe(e,n,t){return e.hasEdge(n,t)}function ge(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}function le(e){switch(e.graph().ranker){case"network-simplex":default:me(e);break;case"tight-tree":pe(e);break;case"longest-path":ve(e)}}(0,a.a)(M,"greedyFAS"),(0,a.a)(P,"doGreedyFAS"),(0,a.a)(S,"removeNode"),(0,a.a)(F,"buildState"),(0,a.a)(G,"assignBucket"),(0,a.a)(j,"run"),(0,a.a)(z,"dfsFAS"),(0,a.a)(B,"undo"),(0,a.a)(V,"run"),(0,a.a)(Y,"normalizeEdge"),(0,a.a)(q,"undo"),(0,a.a)(A,"longestPath"),(0,a.a)(K,"slack"),(0,a.a)(H,"feasibleTree"),(0,a.a)(J,"tightTree"),(0,a.a)(W,"findMinSlackEdge"),(0,a.a)(X,"shiftRanks"),(0,o.O)(1),(0,o.O)(1),U.CycleException=Q,(0,a.a)(U,"topsort"),(0,a.a)(Q,"CycleException"),Q.prototype=new Error,(0,a.a)(Z,"dfs"),(0,a.a)($,"doDfs"),(0,a.a)(ee,"postorder"),(0,a.a)(ne,"preorder"),te.initLowLimValues=ae,te.initCutValues=re,te.calcCutValue=oe,te.leaveEdge=de,te.enterEdge=ue,te.exchangeEdges=ce,(0,a.a)(te,"networkSimplex"),(0,a.a)(re,"initCutValues"),(0,a.a)(ie,"assignCutValue"),(0,a.a)(oe,"calcCutValue"),(0,a.a)(ae,"initLowLimValues"),(0,a.a)(se,"dfsAssignLowLim"),(0,a.a)(de,"leaveEdge"),(0,a.a)(ue,"enterEdge"),(0,a.a)(ce,"exchangeEdges"),(0,a.a)(he,"updateRanks"),(0,a.a)(fe,"isTreeEdge"),(0,a.a)(ge,"isDescendant"),(0,a.a)(le,"rank");var ve=A;function pe(e){A(e),H(e)}function me(e){te(e)}function we(e){var n=s(e,"root",{},"_root"),t=_e(e),r=(0,i.F)((0,i.z)(t))-1,o=2*r+1;e.graph().nestingRoot=n,(0,i.n)(e.edges(),(function(n){e.edge(n).minlen*=o}));var a=ye(e)+1;(0,i.n)(e.children(),(function(i){be(e,n,o,a,r,t,i)})),e.graph().nodeRankFactor=o}function be(e,n,t,r,o,a,s){var d=e.children(s);if(d.length){var u=l(e,"_bt"),c=l(e,"_bb"),h=e.node(s);e.setParent(u,s),h.borderTop=u,e.setParent(c,s),h.borderBottom=c,(0,i.n)(d,(function(i){be(e,n,t,r,o,a,i);var d=e.node(i),h=d.borderTop?d.borderTop:i,f=d.borderBottom?d.borderBottom:i,g=d.borderTop?r:2*r,l=h!==f?1:o-a[s]+1;e.setEdge(u,h,{weight:g,minlen:l,nestingEdge:!0}),e.setEdge(f,c,{weight:g,minlen:l,nestingEdge:!0})})),e.parent(s)||e.setEdge(n,u,{weight:0,minlen:o+a[s]})}else s!==n&&e.setEdge(n,s,{weight:0,minlen:t})}function _e(e){var n={};function t(r,o){var a=e.children(r);a&&a.length&&(0,i.n)(a,(function(e){t(e,o+1)})),n[r]=o}return(0,a.a)(t,"dfs"),(0,i.n)(e.children(),(function(e){t(e,1)})),n}function ye(e){return(0,i.L)(e.edges(),(function(n,t){return n+e.edge(t).weight}),0)}function xe(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,(0,i.n)(e.edges(),(function(n){e.edge(n).nestingEdge&&e.removeEdge(n)}))}function Ee(e,n,t){var r,o={};(0,i.n)(t,(function(t){for(var i,a,s=e.parent(t);s;){if((i=e.parent(s))?(a=o[i],o[i]=s):(a=r,r=s),a&&a!==s)return void n.setEdge(a,s);s=i}}))}function ke(e,n,t){var o=Ne(e),a=new r.a({compound:!0}).setGraph({root:o}).setDefaultNodeLabel((function(n){return e.node(n)}));return(0,i.n)(e.nodes(),(function(r){var s=e.node(r),d=e.parent(r);(s.rank===n||s.minRank<=n&&n<=s.maxRank)&&(a.setNode(r),a.setParent(r,d||o),(0,i.n)(e[t](r),(function(n){var t=n.v===r?n.w:n.v,o=a.edge(t,r),s=(0,i.D)(o)?0:o.weight;a.setEdge(t,r,{weight:e.edge(n).weight+s})})),(0,i.x)(s,"minRank")&&a.setNode(r,{borderLeft:s.borderLeft[n],borderRight:s.borderRight[n]}))})),a}function Ne(e){for(var n;e.hasNode(n=(0,i.T)("_root")););return n}function Ce(e,n){for(var t=0,r=1;r<n.length;++r)t+=Le(e,n[r-1],n[r]);return t}function Le(e,n,t){for(var r=(0,i.U)(t,(0,i.s)(t,(function(e,n){return n}))),o=(0,i.d)((0,i.s)(n,(function(n){return(0,i.P)((0,i.s)(e.outEdges(n),(function(n){return{pos:r[n.w],weight:e.edge(n).weight}})),"pos")}))),a=1;a<t.length;)a<<=1;var s=2*a-1;a-=1;var d=(0,i.s)(new Array(s),(function(){return 0})),u=0;return(0,i.n)(o.forEach((function(e){var n=e.pos+a;d[n]+=e.weight;for(var t=0;n>0;)n%2&&(t+=d[n+1]),d[n=n-1>>1]+=e.weight;u+=e.weight*t}))),u}function Ie(e){var n={},t=(0,i.p)(e.nodes(),(function(n){return!e.children(n).length})),r=(0,i.F)((0,i.s)(t,(function(n){return e.node(n).rank}))),o=(0,i.s)((0,i.K)(r+1),(function(){return[]}));function s(t){if(!(0,i.x)(n,t)){n[t]=!0;var r=e.node(t);o[r.rank].push(t),(0,i.n)(e.successors(t),s)}}(0,a.a)(s,"dfs");var d=(0,i.P)(t,(function(n){return e.node(n).rank}));return(0,i.n)(d,s),o}function Te(e,n){return(0,i.s)(n,(function(n){var t=e.inEdges(n);if(t.length){var r=(0,i.L)(t,(function(n,t){var r=e.edge(t),i=e.node(t.v);return{sum:n.sum+r.weight*i.order,weight:n.weight+r.weight}}),{sum:0,weight:0});return{v:n,barycenter:r.sum/r.weight,weight:r.weight}}return{v:n}}))}function Re(e,n){var t={};return(0,i.n)(e,(function(e,n){var r=t[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};(0,i.D)(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)})),(0,i.n)(n.edges(),(function(e){var n=t[e.v],r=t[e.w];!(0,i.D)(n)&&!(0,i.D)(r)&&(r.indegree++,n.out.push(t[e.w]))})),De((0,i.p)(t,(function(e){return!e.indegree})))}function De(e){var n=[];function t(e){return function(n){n.merged||((0,i.D)(n.barycenter)||(0,i.D)(e.barycenter)||n.barycenter>=e.barycenter)&&Oe(e,n)}}function r(n){return function(t){t.in.push(n),0==--t.indegree&&e.push(t)}}for((0,a.a)(t,"handleIn"),(0,a.a)(r,"handleOut");e.length;){var o=e.pop();n.push(o),(0,i.n)(o.in.reverse(),t(o)),(0,i.n)(o.out,r(o))}return(0,i.s)((0,i.p)(n,(function(e){return!e.merged})),(function(e){return(0,i.J)(e,["vs","i","barycenter","weight"])}))}function Oe(e,n){var t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight),n.weight&&(t+=n.barycenter*n.weight,r+=n.weight),e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=!0}function Me(e,n){var t=p(e,(function(e){return(0,i.x)(e,"barycenter")})),r=t.lhs,o=(0,i.P)(t.rhs,(function(e){return-e.i})),a=[],s=0,d=0,u=0;r.sort(Se(!!n)),u=Pe(a,o,u),(0,i.n)(r,(function(e){u+=e.vs.length,a.push(e.vs),s+=e.barycenter*e.weight,d+=e.weight,u=Pe(a,o,u)}));var c={vs:(0,i.d)(a)};return d&&(c.barycenter=s/d,c.weight=d),c}function Pe(e,n,t){for(var r;n.length&&(r=(0,i.k)(n)).i<=t;)n.pop(),e.push(r.vs),t++;return t}function Se(e){return function(n,t){return n.barycenter<t.barycenter?-1:n.barycenter>t.barycenter?1:e?t.i-n.i:n.i-t.i}}function Fe(e,n,t,r){var o=e.children(n),a=e.node(n),s=a?a.borderLeft:void 0,d=a?a.borderRight:void 0,u={};s&&(o=(0,i.p)(o,(function(e){return e!==s&&e!==d})));var c=Te(e,o);(0,i.n)(c,(function(n){if(e.children(n.v).length){var o=Fe(e,n.v,t,r);u[n.v]=o,(0,i.x)(o,"barycenter")&&je(n,o)}}));var h=Re(c,t);Ge(h,u);var f=Me(h,r);if(s&&(f.vs=(0,i.d)([s,f.vs,d]),e.predecessors(s).length)){var g=e.node(e.predecessors(s)[0]),l=e.node(e.predecessors(d)[0]);(0,i.x)(f,"barycenter")||(f.barycenter=0,f.weight=0),f.barycenter=(f.barycenter*f.weight+g.order+l.order)/(f.weight+2),f.weight+=2}return f}function Ge(e,n){(0,i.n)(e,(function(e){e.vs=(0,i.d)(e.vs.map((function(e){return n[e]?n[e].vs:e})))}))}function je(e,n){(0,i.D)(e.barycenter)?(e.barycenter=n.barycenter,e.weight=n.weight):(e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight),e.weight+=n.weight)}function ze(e){var n=v(e),t=Be(e,(0,i.K)(1,n+1),"inEdges"),r=Be(e,(0,i.K)(n-1,-1,-1),"outEdges"),o=Ie(e);Ye(e,o);for(var a,s=Number.POSITIVE_INFINITY,d=0,u=0;u<4;++d,++u){Ve(d%2?t:r,d%4>=2);var c=Ce(e,o=h(e));c<s&&(u=0,a=(0,i.f)(o),s=c)}Ye(e,a)}function Be(e,n,t){return(0,i.s)(n,(function(n){return ke(e,n,t)}))}function Ve(e,n){var t=new r.a;(0,i.n)(e,(function(e){var r=e.graph().root,o=Fe(e,r,t,n);(0,i.n)(o.vs,(function(n,t){e.node(n).order=t})),Ee(e,t,o.vs)}))}function Ye(e,n){(0,i.n)(n,(function(n){(0,i.n)(n,(function(n,t){e.node(n).order=t}))}))}function qe(e){var n=Ke(e);(0,i.n)(e.graph().dummyChains,(function(t){for(var r=e.node(t),i=r.edgeObj,o=Ae(e,n,i.v,i.w),a=o.path,s=o.lca,d=0,u=a[d],c=!0;t!==i.w;){if(r=e.node(t),c){for(;(u=a[d])!==s&&e.node(u).maxRank<r.rank;)d++;u===s&&(c=!1)}if(!c){for(;d<a.length-1&&e.node(u=a[d+1]).minRank<=r.rank;)d++;u=a[d]}e.setParent(t,u),t=e.successors(t)[0]}}))}function Ae(e,n,t,r){var i,o,a=[],s=[],d=Math.min(n[t].low,n[r].low),u=Math.max(n[t].lim,n[r].lim);i=t;do{i=e.parent(i),a.push(i)}while(i&&(n[i].low>d||u>n[i].lim));for(o=i,i=r;(i=e.parent(i))!==o;)s.push(i);return{path:a.concat(s.reverse()),lca:o}}function Ke(e){var n={},t=0;function r(o){var a=t;(0,i.n)(e.children(o),r),n[o]={low:a,lim:t++}}return(0,a.a)(r,"dfs"),(0,i.n)(e.children(),r),n}function He(e,n){var t={};function r(n,r){var o=0,a=0,s=n.length,d=(0,i.k)(r);return(0,i.n)(r,(function(n,u){var c=We(e,n),h=c?e.node(c).order:s;(c||n===d)&&((0,i.n)(r.slice(a,u+1),(function(n){(0,i.n)(e.predecessors(n),(function(r){var i=e.node(r),a=i.order;(a<o||h<a)&&(!i.dummy||!e.node(n).dummy)&&Xe(t,r,n)}))})),a=u+1,o=h)})),r}return(0,a.a)(r,"visitLayer"),(0,i.L)(n,r),t}function Je(e,n){var t={};function r(n,r,o,a,s){var d;(0,i.n)((0,i.K)(r,o),(function(r){d=n[r],e.node(d).dummy&&(0,i.n)(e.predecessors(d),(function(n){var r=e.node(n);r.dummy&&(r.order<a||r.order>s)&&Xe(t,n,d)}))}))}function o(n,t){var o,a=-1,s=0;return(0,i.n)(t,(function(i,d){if("border"===e.node(i).dummy){var u=e.predecessors(i);u.length&&(o=e.node(u[0]).order,r(t,s,d,a,o),s=d,a=o)}r(t,s,t.length,o,n.length)})),t}return(0,a.a)(r,"scan"),(0,a.a)(o,"visitLayer"),(0,i.L)(n,o),t}function We(e,n){if(e.node(n).dummy)return(0,i.q)(e.predecessors(n),(function(n){return e.node(n).dummy}))}function Xe(e,n,t){if(n>t){var r=n;n=t,t=r}var i=e[n];i||(e[n]=i={}),i[t]=!0}function Ue(e,n,t){if(n>t){var r=n;n=t,t=r}return(0,i.x)(e[n],t)}function Qe(e,n,t,r){var o={},a={},s={};return(0,i.n)(n,(function(e){(0,i.n)(e,(function(e,n){o[e]=e,a[e]=e,s[e]=n}))})),(0,i.n)(n,(function(e){var n=-1;(0,i.n)(e,(function(e){var d=r(e);if(d.length)for(var u=((d=(0,i.P)(d,(function(e){return s[e]}))).length-1)/2,c=Math.floor(u),h=Math.ceil(u);c<=h;++c){var f=d[c];a[e]===e&&n<s[f]&&!Ue(t,e,f)&&(a[f]=e,a[e]=o[e]=o[f],n=s[f])}}))})),{root:o,align:a}}function Ze(e,n,t,r,o){var s={},d=$e(e,n,t,o),u=o?"borderLeft":"borderRight";function c(e,n){for(var t=d.nodes(),r=t.pop(),i={};r;)i[r]?e(r):(i[r]=!0,t.push(r),t=t.concat(n(r))),r=t.pop()}function h(e){s[e]=d.inEdges(e).reduce((function(e,n){return Math.max(e,s[n.v]+d.edge(n))}),0)}function f(n){var t=d.outEdges(n).reduce((function(e,n){return Math.min(e,s[n.w]-d.edge(n))}),Number.POSITIVE_INFINITY),r=e.node(n);t!==Number.POSITIVE_INFINITY&&r.borderType!==u&&(s[n]=Math.max(s[n],t))}return(0,a.a)(c,"iterate"),(0,a.a)(h,"pass1"),(0,a.a)(f,"pass2"),c(h,d.predecessors.bind(d)),c(f,d.successors.bind(d)),(0,i.n)(r,(function(e){s[e]=s[t[e]]})),s}function $e(e,n,t,o){var a=new r.a,s=e.graph(),d=on(s.nodesep,s.edgesep,o);return(0,i.n)(n,(function(n){var r;(0,i.n)(n,(function(n){var i=t[n];if(a.setNode(i),r){var o=t[r],s=a.edge(o,i);a.setEdge(o,i,Math.max(d(e,n,r),s||0))}r=n}))})),a}function en(e,n){return(0,i.H)((0,i.z)(n),(function(n){var t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return(0,i.u)(n,(function(n,i){var o=an(e,i)/2;t=Math.max(n+o,t),r=Math.min(n-o,r)})),t-r}))}function nn(e,n){var t=(0,i.z)(n),r=(0,i.G)(t),o=(0,i.F)(t);(0,i.n)(["u","d"],(function(t){(0,i.n)(["l","r"],(function(a){var s,d=t+a,u=e[d];if(u!==n){var c=(0,i.z)(u);(s="l"===a?r-(0,i.G)(c):o-(0,i.F)(c))&&(e[d]=(0,i.E)(u,(function(e){return e+s})))}}))}))}function tn(e,n){return(0,i.E)(e.ul,(function(t,r){if(n)return e[n.toLowerCase()][r];var o=(0,i.P)((0,i.s)(e,r));return(o[1]+o[2])/2}))}function rn(e){var n,t=h(e),r=(0,o.T)(He(e,t),Je(e,t)),a={};(0,i.n)(["u","d"],(function(o){n="u"===o?t:(0,i.z)(t).reverse(),(0,i.n)(["l","r"],(function(t){"r"===t&&(n=(0,i.s)(n,(function(e){return(0,i.z)(e).reverse()})));var s=("u"===o?e.predecessors:e.successors).bind(e),d=Qe(0,n,r,s),u=Ze(e,n,d.root,d.align,"r"===t);"r"===t&&(u=(0,i.E)(u,(function(e){return-e}))),a[o+t]=u}))}));var s=en(e,a);return nn(a,s),tn(a,e.graph().align)}function on(e,n,t){return function(r,o,a){var s,d=r.node(o),u=r.node(a),c=0;if(c+=d.width/2,(0,i.x)(d,"labelpos"))switch(d.labelpos.toLowerCase()){case"l":s=-d.width/2;break;case"r":s=d.width/2}if(s&&(c+=t?s:-s),s=0,c+=(d.dummy?n:e)/2,c+=(u.dummy?n:e)/2,c+=u.width/2,(0,i.x)(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":s=u.width/2;break;case"r":s=-u.width/2}return s&&(c+=t?s:-s),s=0,c}}function an(e,n){return e.node(n).width}function sn(e){dn(e=u(e)),(0,i.v)(rn(e),(function(n,t){e.node(t).x=n}))}function dn(e){var n=h(e),t=e.graph().ranksep,r=0;(0,i.n)(n,(function(n){var o=(0,i.F)((0,i.s)(n,(function(n){return e.node(n).height})));(0,i.n)(n,(function(n){e.node(n).y=r+o/2})),r+=o+t}))}function un(e,n){var t=n&&n.debugTiming?m:w;t("layout",(function(){var n=t("  buildLayoutGraph",(function(){return _n(e)}));t("  runLayout",(function(){cn(n,t)})),t("  updateInputGraph",(function(){hn(e,n)}))}))}function cn(e,n){n("    makeSpaceForEdgeLabels",(function(){yn(e)})),n("    removeSelfEdges",(function(){Rn(e)})),n("    acyclic",(function(){j(e)})),n("    nestingGraph.run",(function(){we(e)})),n("    rank",(function(){le(u(e))})),n("    injectEdgeLabelProxies",(function(){xn(e)})),n("    removeEmptyRanks",(function(){g(e)})),n("    nestingGraph.cleanup",(function(){xe(e)})),n("    normalizeRanks",(function(){f(e)})),n("    assignRankMinMax",(function(){En(e)})),n("    removeEdgeLabelProxies",(function(){kn(e)})),n("    normalize.run",(function(){V(e)})),n("    parentDummyChains",(function(){qe(e)})),n("    addBorderSegments",(function(){b(e)})),n("    order",(function(){ze(e)})),n("    insertSelfEdges",(function(){Dn(e)})),n("    adjustCoordinateSystem",(function(){y(e)})),n("    position",(function(){sn(e)})),n("    positionSelfEdges",(function(){On(e)})),n("    removeBorderNodes",(function(){Tn(e)})),n("    normalize.undo",(function(){q(e)})),n("    fixupEdgeLabelCoords",(function(){Ln(e)})),n("    undoCoordinateSystem",(function(){x(e)})),n("    translateGraph",(function(){Nn(e)})),n("    assignNodeIntersects",(function(){Cn(e)})),n("    reversePoints",(function(){In(e)})),n("    acyclic.undo",(function(){B(e)}))}function hn(e,n){(0,i.n)(e.nodes(),(function(t){var r=e.node(t),i=n.node(t);r&&(r.x=i.x,r.y=i.y,n.children(t).length&&(r.width=i.width,r.height=i.height))})),(0,i.n)(e.edges(),(function(t){var r=e.edge(t),o=n.edge(t);r.points=o.points,(0,i.x)(o,"x")&&(r.x=o.x,r.y=o.y)})),e.graph().width=n.graph().width,e.graph().height=n.graph().height}(0,a.a)(pe,"tightTreeRanker"),(0,a.a)(me,"networkSimplexRanker"),(0,a.a)(we,"run"),(0,a.a)(be,"dfs"),(0,a.a)(_e,"treeDepths"),(0,a.a)(ye,"sumWeights"),(0,a.a)(xe,"cleanup"),(0,a.a)(Ee,"addSubgraphConstraints"),(0,a.a)(ke,"buildLayerGraph"),(0,a.a)(Ne,"createRootNode"),(0,a.a)(Ce,"crossCount"),(0,a.a)(Le,"twoLayerCrossCount"),(0,a.a)(Ie,"initOrder"),(0,a.a)(Te,"barycenter"),(0,a.a)(Re,"resolveConflicts"),(0,a.a)(De,"doResolveConflicts"),(0,a.a)(Oe,"mergeEntries"),(0,a.a)(Me,"sort"),(0,a.a)(Pe,"consumeUnsortable"),(0,a.a)(Se,"compareWithBias"),(0,a.a)(Fe,"sortSubgraph"),(0,a.a)(Ge,"expandSubgraphs"),(0,a.a)(je,"mergeBarycenters"),(0,a.a)(ze,"order"),(0,a.a)(Be,"buildLayerGraphs"),(0,a.a)(Ve,"sweepLayerGraphs"),(0,a.a)(Ye,"assignOrder"),(0,a.a)(qe,"parentDummyChains"),(0,a.a)(Ae,"findPath"),(0,a.a)(Ke,"postorder"),(0,a.a)(He,"findType1Conflicts"),(0,a.a)(Je,"findType2Conflicts"),(0,a.a)(We,"findOtherInnerSegmentNode"),(0,a.a)(Xe,"addConflict"),(0,a.a)(Ue,"hasConflict"),(0,a.a)(Qe,"verticalAlignment"),(0,a.a)(Ze,"horizontalCompaction"),(0,a.a)($e,"buildBlockGraph"),(0,a.a)(en,"findSmallestWidthAlignment"),(0,a.a)(nn,"alignCoordinates"),(0,a.a)(tn,"balance"),(0,a.a)(rn,"positionX"),(0,a.a)(on,"sep"),(0,a.a)(an,"width"),(0,a.a)(sn,"position"),(0,a.a)(dn,"positionY"),(0,a.a)(un,"layout"),(0,a.a)(cn,"runLayout"),(0,a.a)(hn,"updateInputGraph");var fn=["nodesep","edgesep","ranksep","marginx","marginy"],gn={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},ln=["acyclicer","ranker","rankdir","align"],vn=["width","height"],pn={width:0,height:0},mn=["minlen","weight","width","height","labeloffset"],wn={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},bn=["labelpos"];function _n(e){var n=new r.a({multigraph:!0,compound:!0}),t=Pn(e.graph());return n.setGraph((0,o.T)({},gn,Mn(t,fn),(0,i.J)(t,ln))),(0,i.n)(e.nodes(),(function(t){var r=Pn(e.node(t));n.setNode(t,(0,i.i)(Mn(r,vn),pn)),n.setParent(t,e.parent(t))})),(0,i.n)(e.edges(),(function(t){var r=Pn(e.edge(t));n.setEdge(t,(0,o.T)({},wn,Mn(r,mn),(0,i.J)(r,bn)))})),n}function yn(e){var n=e.graph();n.ranksep/=2,(0,i.n)(e.edges(),(function(t){var r=e.edge(t);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)}))}function xn(e){(0,i.n)(e.edges(),(function(n){var t=e.edge(n);if(t.width&&t.height){var r=e.node(n.v),i={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};s(e,"edge-proxy",i,"_ep")}}))}function En(e){var n=0;(0,i.n)(e.nodes(),(function(t){var r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=(0,i.F)(n,r.maxRank))})),e.graph().maxRank=n}function kn(e){(0,i.n)(e.nodes(),(function(n){var t=e.node(n);"edge-proxy"===t.dummy&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))}))}function Nn(e){var n=Number.POSITIVE_INFINITY,t=0,r=Number.POSITIVE_INFINITY,o=0,s=e.graph(),d=s.marginx||0,u=s.marginy||0;function c(e){var i=e.x,a=e.y,s=e.width,d=e.height;n=Math.min(n,i-s/2),t=Math.max(t,i+s/2),r=Math.min(r,a-d/2),o=Math.max(o,a+d/2)}(0,a.a)(c,"getExtremes"),(0,i.n)(e.nodes(),(function(n){c(e.node(n))})),(0,i.n)(e.edges(),(function(n){var t=e.edge(n);(0,i.x)(t,"x")&&c(t)})),n-=d,r-=u,(0,i.n)(e.nodes(),(function(t){var i=e.node(t);i.x-=n,i.y-=r})),(0,i.n)(e.edges(),(function(t){var o=e.edge(t);(0,i.n)(o.points,(function(e){e.x-=n,e.y-=r})),(0,i.x)(o,"x")&&(o.x-=n),(0,i.x)(o,"y")&&(o.y-=r)})),s.width=t-n+d,s.height=o-r+u}function Cn(e){(0,i.n)(e.edges(),(function(n){var t,r,i=e.edge(n),o=e.node(n.v),a=e.node(n.w);i.points?(t=i.points[0],r=i.points[i.points.length-1]):(i.points=[],t=a,r=o),i.points.unshift(c(o,t)),i.points.push(c(a,r))}))}function Ln(e){(0,i.n)(e.edges(),(function(n){var t=e.edge(n);if((0,i.x)(t,"x"))switch(("l"===t.labelpos||"r"===t.labelpos)&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset}}))}function In(e){(0,i.n)(e.edges(),(function(n){var t=e.edge(n);t.reversed&&t.points.reverse()}))}function Tn(e){(0,i.n)(e.nodes(),(function(n){if(e.children(n).length){var t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),a=e.node((0,i.k)(t.borderLeft)),s=e.node((0,i.k)(t.borderRight));t.width=Math.abs(s.x-a.x),t.height=Math.abs(o.y-r.y),t.x=a.x+t.width/2,t.y=r.y+t.height/2}})),(0,i.n)(e.nodes(),(function(n){"border"===e.node(n).dummy&&e.removeNode(n)}))}function Rn(e){(0,i.n)(e.edges(),(function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}}))}function Dn(e){var n=h(e);(0,i.n)(n,(function(n){var t=0;(0,i.n)(n,(function(n,r){var o=e.node(n);o.order=r+t,(0,i.n)(o.selfEdges,(function(n){s(e,"selfedge",{width:n.label.width,height:n.label.height,rank:o.rank,order:r+ ++t,e:n.e,label:n.label},"_se")})),delete o.selfEdges}))}))}function On(e){(0,i.n)(e.nodes(),(function(n){var t=e.node(n);if("selfedge"===t.dummy){var r=e.node(t.e.v),i=r.x+r.width/2,o=r.y,a=t.x-i,s=r.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:i+2*a/3,y:o-s},{x:i+5*a/6,y:o-s},{x:i+a,y:o},{x:i+5*a/6,y:o+s},{x:i+2*a/3,y:o+s}],t.label.x=t.x,t.label.y=t.y}}))}function Mn(e,n){return(0,i.E)((0,i.J)(e,n),Number)}function Pn(e){var n={};return(0,i.n)(e,(function(e,t){n[t.toLowerCase()]=e})),n}(0,a.a)(_n,"buildLayoutGraph"),(0,a.a)(yn,"makeSpaceForEdgeLabels"),(0,a.a)(xn,"injectEdgeLabelProxies"),(0,a.a)(En,"assignRankMinMax"),(0,a.a)(kn,"removeEdgeLabelProxies"),(0,a.a)(Nn,"translateGraph"),(0,a.a)(Cn,"assignNodeIntersects"),(0,a.a)(Ln,"fixupEdgeLabelCoords"),(0,a.a)(In,"reversePointsForReversedEdges"),(0,a.a)(Tn,"removeBorderNodes"),(0,a.a)(Rn,"removeSelfEdges"),(0,a.a)(Dn,"insertSelfEdges"),(0,a.a)(On,"positionSelfEdges"),(0,a.a)(Mn,"selectNumberAttrs"),(0,a.a)(Pn,"canonicalize")}}]);