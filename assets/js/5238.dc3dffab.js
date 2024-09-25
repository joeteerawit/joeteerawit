"use strict";(self.webpackChunkjoeteerawit=self.webpackChunkjoeteerawit||[]).push([[5238],{5673:(e,t,n)=>{n.d(t,{a:()=>i});var r=n(844),a=n(6375);function i(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:d(e),edges:o(e)};return(0,r.D)(e.graph())||(t.value=(0,r.e)(e.graph())),t}function d(e){return(0,r.s)(e.nodes(),(function(t){var n=e.node(t),a=e.parent(t),i={v:t};return(0,r.D)(n)||(i.value=n),(0,r.D)(a)||(i.parent=a),i}))}function o(e){return(0,r.s)(e.edges(),(function(t){var n=e.edge(t),a={v:t.v,w:t.w};return(0,r.D)(t.name)||(a.name=t.name),(0,r.D)(n)||(a.value=n),a}))}(0,a.a)(i,"write"),(0,a.a)(d,"writeNodes"),(0,a.a)(o,"writeEdges")},5238:(e,t,n)=>{n.r(t),n.d(t,{render:()=>S});var r=n(5673),a=n(8515),i=n(4164),d=(n(4188),n(5206)),o=n(4818),s=(n(6449),n(7851),n(6304)),l=(n(844),n(9913),n(1869),n(6375)),g=new Map,c=new Map,f=new Map,h=(0,l.a)((()=>{c.clear(),f.clear(),g.clear()}),"clear"),p=(0,l.a)(((e,t)=>{let n=c.get(t)||[];return s.b.trace("In isDescendant",t," ",e," = ",n.includes(e)),n.includes(e)}),"isDescendant"),u=(0,l.a)(((e,t)=>{let n=c.get(t)||[];return s.b.info("Descendants of ",t," is ",n),s.b.info("Edge is ",e),e.v!==t&&e.w!==t&&(n?n.includes(e.v)||p(e.v,t)||p(e.w,t)||n.includes(e.w):(s.b.debug("Tilt, ",t,",not in descendants"),!1))}),"edgeInCluster"),b=(0,l.a)(((e,t,n,r)=>{s.b.warn("Copying children of ",e,"root",r,"data",t.node(e),r);let a=t.children(e)||[];e!==r&&a.push(e),s.b.warn("Copying (nodes) clusterId",e,"nodes",a),a.forEach((a=>{if(t.children(a).length>0)b(a,t,n,r);else{let i=t.node(a);s.b.info("cp ",a," to ",r," with parent ",e),n.setNode(a,i),r!==t.parent(a)&&(s.b.warn("Setting parent",a,t.parent(a)),n.setParent(a,t.parent(a))),e!==r&&a!==e?(s.b.debug("Setting parent",a,e),n.setParent(a,e)):(s.b.info("In copy ",e,"root",r,"data",t.node(e),r),s.b.debug("Not Setting parent for node=",a,"cluster!==rootId",e!==r,"node!==clusterId",a!==e));let d=t.edges(a);s.b.debug("Copying Edges",d),d.forEach((a=>{s.b.info("Edge",a);let i=t.edge(a.v,a.w,a.name);s.b.info("Edge data",i,r);try{u(a,r)?(s.b.info("Copying as ",a.v,a.w,i,a.name),n.setEdge(a.v,a.w,i,a.name),s.b.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):s.b.info("Skipping copy of edge ",a.v,"--\x3e",a.w," rootId: ",r," clusterId:",e)}catch(e){s.b.error(e)}}))}s.b.debug("Removing node",a),t.removeNode(a)}))}),"copy"),w=(0,l.a)(((e,t)=>{let n=t.children(e),r=[...n];for(let a of n)f.set(a,e),r=[...r,...w(a,t)];return r}),"extractDescendants"),v=(0,l.a)(((e,t,n)=>{let r=e.edges().filter((e=>e.v===t||e.w===t)),a=e.edges().filter((e=>e.v===n||e.w===n)),i=r.map((e=>({v:e.v===t?n:e.v,w:e.w===t?t:e.w}))),d=a.map((e=>({v:e.v,w:e.w})));return i.filter((e=>d.some((t=>e.v===t.v&&e.w===t.w))))}),"findCommonEdges"),y=(0,l.a)(((e,t,n)=>{let r,a=t.children(e);if(s.b.trace("Searching children of id ",e,a),a.length<1)return e;for(let e of a){let a=y(e,t,n),i=v(t,n,a);if(a){if(!(i.length>0))return a;r=a}}return r}),"findNonClusterChild"),m=(0,l.a)((e=>g.has(e)&&g.get(e).externalConnections&&g.has(e)?g.get(e).id:e),"getAnchorId"),X=(0,l.a)(((e,t)=>{if(!e||t>10)s.b.debug("Opting out, no graph ");else{s.b.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(s.b.warn("Cluster identified",t," Replacement id in edges: ",y(t,e,t)),c.set(t,w(t,e)),g.set(t,{id:y(t,e,t),clusterData:e.node(t)}))})),e.nodes().forEach((function(t){let n=e.children(t),r=e.edges();n.length>0?(s.b.debug("Cluster identified",t,c),r.forEach((e=>{p(e.v,t)^p(e.w,t)&&(s.b.warn("Edge: ",e," leaves cluster ",t),s.b.warn("Descendants of XXX ",t,": ",c.get(t)),g.get(t).externalConnections=!0)}))):s.b.debug("Not a cluster ",t,c)}));for(let t of g.keys()){let n=g.get(t).id,r=e.parent(n);r!==t&&g.has(r)&&!g.get(r).externalConnections&&(g.get(t).id=r)}e.edges().forEach((function(t){let n=e.edge(t);s.b.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),s.b.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,a=t.w;if(s.b.warn("Fix XXX",g,"ids:",t.v,t.w,"Translating: ",g.get(t.v)," --- ",g.get(t.w)),g.get(t.v)||g.get(t.w)){if(s.b.warn("Fixing and trying - removing XXX",t.v,t.w,t.name),r=m(t.v),a=m(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){let a=e.parent(r);g.get(a).externalConnections=!0,n.fromCluster=t.v}if(a!==t.w){let r=e.parent(a);g.get(r).externalConnections=!0,n.toCluster=t.w}s.b.warn("Fix Replacing with XXX",r,a,t.name),e.setEdge(r,a,n,t.name)}})),s.b.warn("Adjusted Graph",(0,r.a)(e)),E(e,0),s.b.trace(g)}}),"adjustClustersAndEdges"),E=(0,l.a)(((e,t)=>{if(s.b.warn("extractor - ",t,(0,r.a)(e),e.children("D")),t>10)return void s.b.error("Bailing out");let n=e.nodes(),a=!1;for(let t of n){let n=e.children(t);a=a||n.length>0}if(a){s.b.debug("Nodes = ",n,t);for(let a of n)if(s.b.debug("Extracting node",a,g,g.has(a)&&!g.get(a).externalConnections,!e.parent(a),e.node(a),e.children("D")," Depth ",t),g.has(a))if(!g.get(a).externalConnections&&e.children(a)&&e.children(a).length>0){s.b.warn("Cluster without external connections, without a parent and with children",a,t);let n="TB"===e.graph().rankdir?"LR":"TB";g.get(a)?.clusterData?.dir&&(n=g.get(a).clusterData.dir,s.b.warn("Fixing dir",g.get(a).clusterData.dir,n));let i=new o.a({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));s.b.warn("Old graph before copy",(0,r.a)(e)),b(a,e,i,a),e.setNode(a,{clusterNode:!0,id:a,clusterData:g.get(a).clusterData,label:g.get(a).label,graph:i}),s.b.warn("New graph after copy node: (",a,")",(0,r.a)(i)),s.b.debug("Old graph after copy",(0,r.a)(e))}else s.b.warn("Cluster ** ",a," **not meeting the criteria !externalConnections:",!g.get(a).externalConnections," no parent: ",!e.parent(a)," children ",e.children(a)&&e.children(a).length>0,e.children("D"),t),s.b.debug(g);else s.b.debug("Not a cluster",a,t);n=e.nodes(),s.b.warn("New list of nodes",n);for(let r of n){let n=e.node(r);s.b.warn(" Now next level",r,n),n?.clusterNode&&E(n.graph,t+1)}}else s.b.debug("Done, no node has children",e.nodes())}),"extractor"),N=(0,l.a)(((e,t)=>{if(0===t.length)return[];let n=Object.assign([],t);return t.forEach((t=>{let r=e.children(t),a=N(e,r);n=[...n,...a]})),n}),"sorter"),C=(0,l.a)((e=>N(e,e.children())),"sortNodesByHierarchy"),x=(0,l.a)((async(e,t,n,o,c,f)=>{s.b.warn("Graph in recursive render:XAX",(0,r.a)(t),c);let h=t.graph().rankdir;s.b.trace("Dir in recursive render - dir:",h);let p=e.insert("g").attr("class","root");t.nodes()?s.b.info("Recursive render XXX",t.nodes()):s.b.info("No nodes found for",t),t.edges().length>0&&s.b.info("Recursive edges",t.edge(t.edges()[0]));let u=p.insert("g").attr("class","clusters"),b=p.insert("g").attr("class","edgePaths"),w=p.insert("g").attr("class","edgeLabels"),v=p.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){let r=t.node(e);if(void 0!==c){let n=JSON.parse(JSON.stringify(c.clusterData));s.b.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",n.height,"\nParent cluster",c.height),t.setNode(c.id,n),t.parent(e)||(s.b.trace("Setting parent",e,c.id),t.setParent(e,c.id,n))}if(s.b.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),r?.clusterNode){s.b.info("Cluster identified XBX",e,r.width,t.node(e));let{ranksep:i,nodesep:d}=t.graph();r.graph.setGraph({...r.graph.graph(),ranksep:i+25,nodesep:d});let l=await x(v,r.graph,n,o,t.node(e),f),g=l.elem;(0,a.i)(r,g),r.diff=l.diff||0,s.b.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,a.k)(g,r)}else t.children(e).length>0?(s.b.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",t),s.b.trace(y(r.id,t)),g.set(r.id,{id:y(r.id,t),node:r})):(s.b.trace("Node - the non recursive path XAX",e,v,t.node(e),h),await(0,a.j)(v,t.node(e),h))}))),await(0,l.a)((async()=>{let e=t.edges().map((async function(e){let n=t.edge(e.v,e.w,e.name);s.b.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),s.b.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),s.b.info("Fix",g,"ids:",e.v,e.w,"Translating: ",g.get(e.v),g.get(e.w)),await(0,a.d)(w,n)}));await Promise.all(e)}),"processEdges")(),s.b.info("Graph before layout:",JSON.stringify((0,r.a)(t))),s.b.info("############################################# XXX"),s.b.info("###                Layout                 ### XXX"),s.b.info("############################################# XXX"),(0,d.a)(t),s.b.info("Graph after layout:",JSON.stringify((0,r.a)(t)));let m=0,{subGraphTitleTotalMargin:X}=(0,i.a)(f);return await Promise.all(C(t).map((async function(e){let n=t.node(e);if(s.b.info("Position XBX => "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n?.clusterNode)n.y+=X,s.b.info("A tainted cluster node XBX1",e,n.id,n.width,n.height,n.x,n.y,t.parent(e)),g.get(n.id).node=n,(0,a.m)(n);else if(t.children(e).length>0){s.b.info("A pure cluster node XBX1",e,n.id,n.x,n.y,n.width,n.height,t.parent(e)),n.height+=X,t.node(n.parentId);let r=n?.padding/2||0,i=n?.labelBBox?.height||0,d=i-r||0;s.b.debug("OffsetY",d,"labelHeight",i,"halfPadding",r),await(0,a.a)(u,n),g.get(n.id).node=n}else{let e=t.node(n.parentId);n.y+=X/2,s.b.info("A regular node XBX1 - using the padding",n.id,"parent",n.parentId,n.width,n.height,n.x,n.y,"offsetY",n.offsetY,"parent",e,e?.offsetY,n),(0,a.m)(n)}}))),t.edges().forEach((function(e){let r=t.edge(e);s.b.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(r),r),r.points.forEach((e=>e.y+=X/2));let i=t.node(e.v);var d=t.node(e.w);let l=(0,a.f)(b,r,g,n,i,d,o);(0,a.e)(r,l)})),t.nodes().forEach((function(e){let n=t.node(e);s.b.info(e,n.type,n.diff),n.isGroup&&(m=n.diff)})),s.b.warn("Returning from recursive render XAX",p,m),{elem:p,diff:m}}),"recursiveRender"),S=(0,l.a)((async(e,t)=>{let n=new o.a({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),i=t.select("g");(0,a.g)(i,e.markers,e.type,e.diagramId),(0,a.l)(),(0,a.c)(),(0,a.b)(),h(),e.nodes.forEach((e=>{n.setNode(e.id,{...e}),e.parentId&&n.setParent(e.id,e.parentId)})),s.b.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){let t=e.start,r=t+"---"+t+"---1",a=t+"---"+t+"---2",i=n.node(t);n.setNode(r,{domId:r,id:r,parentId:i.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),n.setParent(r,i.parentId),n.setNode(a,{domId:a,id:a,parentId:i.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),n.setParent(a,i.parentId);let d=structuredClone(e),o=structuredClone(e),s=structuredClone(e);d.label="",d.arrowTypeEnd="none",d.id=t+"-cyclic-special-1",o.arrowTypeEnd="none",o.id=t+"-cyclic-special-mid",s.label="",i.isGroup&&(d.fromCluster=t,s.toCluster=t),s.id=t+"-cyclic-special-2",n.setEdge(t,r,d,t+"-cyclic-special-0"),n.setEdge(r,a,o,t+"-cyclic-special-1"),n.setEdge(a,t,s,t+"-cyc<lic-special-2")}else n.setEdge(e.start,e.end,{...e},e.id)})),s.b.warn("Graph at first:",JSON.stringify((0,r.a)(n))),X(n),s.b.warn("Graph after XAX:",JSON.stringify((0,r.a)(n)));let d=(0,s.X)();await x(i,n,e.type,e.diagramId,void 0,d)}),"render")}}]);