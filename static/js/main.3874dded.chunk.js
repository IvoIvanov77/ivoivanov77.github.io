(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,t,a){e.exports=a(685)},216:function(e,t,a){},220:function(e,t,a){},681:function(e,t,a){},683:function(e,t,a){},685:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(42),o=a.n(s),l=a(13),i=a(55);var c={ajaxCalls:0,message:""};var u=function e(t){return t.forEach(function(t){t.children.length>0?e(t.children):delete t.children}),t};var m=!!sessionStorage.getItem("authtoken");var p={userRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GOT_USER_REPOS"===t.type?t.data:e},foundRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"GOT_FOUND_REPOS"===t.type?t.data:e},directories:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return"GOT_TREE"===n.type?Object.assign({},a,{tree:(e=n.data.tree,t=[],e.forEach(function(e){var a=e.path.split("/"),n=t;a.forEach(function(t){var a=n.find(function(e){return e.name===t});if(a)n=a.children;else{var r={name:t,children:[]},s=Object.assign({},e,r);n.push(s),n=s.children}})}),u(t))}):a},fileContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"GOT_CONTENT"===t.type?t.data:e},ajaxObject:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_AJAX_CALL":return Object.assign({},e,{ajaxCalls:e.ajaxCalls+1});case"SUCCESS_AJAX_CALL":return Object.assign({},e,{ajaxCalls:e.ajaxCalls-1});case"FAIL_AJAX_CALL":return Object.assign({},e,{message:t.errorMessage,ajaxCalls:e.ajaxCalls-1});default:return e}},loggedInUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case"GOT_USER_DATA":return!0;case"CLEAR_USER_DATA":return!1;default:return e}},singleRepo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"GOT_SINGLE_REPO"===t.type?Object.assign({},e,t.data):e}},h=a(196),d=Object(i.d)(Object(i.c)(p),Object(i.a)(h.a)),g=a(692),f=a(695),v=a(694),b=a(26),E=a(8),O=a(9),j=a(12),y=a(10),C=a(11),S=a(4);a(216);var x=Object(l.b)(function(e){return{loading:e.ajaxObject.ajaxCalls>0}})(function(e){var t=e.loading;return t?r.a.createElement("div",{className:"preloader"},t&&r.a.createElement("p",null,"Loading \u2026")):null}),N=a(29),k=a.n(N),w=a(54),A=function(){function e(t){Object(E.a)(this,e),this.apiUrl=t}return Object(O.a)(e,[{key:"get",value:function(e,t,a,n){return n?fetch("".concat(this.apiUrl).concat(e),t):fetch("".concat(this.apiUrl,"/").concat(e),t).then(function(e){return"text"===a?e.text():e.json()})}},{key:"post",value:function(e,t,a){return t.method="POST",a&&(t.body=JSON.stringify(a)),fetch("".concat(this.apiUrl,"/").concat(e),t).then(function(e){return 204===e.status?e.text():e.json()})}}]),e}();function _(e){var t=e.split(", "),a={};return t.forEach(function(e){var t=e.split("; "),n=t[1].replace('rel="',"").replace('"',"");a[n]=t[0].replace(/[<>]/g,"")}),a}function U(e){return{type:"GOT_FOUND_REPOS",data:e}}function I(e){return{type:"GOT_SINGLE_REPO",data:e}}function P(e){return{type:"GOT_TREE",data:e}}function L(e){return{type:"GOT_CONTENT",data:e}}function T(e){return{type:"FAIL_AJAX_CALL",errorMessage:e}}var R=new A("https://api.github.com");function D(e,t,a,n){return function(r){r({type:"START_AJAX_CALL",ajaxCalls:0}),R.get(e,a,n).then(function(e){e.message?r(T(e.message)):(r(t(e)),r({type:"SUCCESS_AJAX_CALL"}))},function(e){r(T(e.message))})}}function M(e){return function(t){t({type:"START_AJAX_CALL",ajaxCalls:0}),function(e){return F.apply(this,arguments)}(e).then(function(e){t(function(e){return{type:"GOT_USER_REPOS",data:e}}(e)),t({type:"SUCCESS_AJAX_CALL"})})}}function F(){return(F=Object(w.a)(k.a.mark(function e(t){var a,n,r,s,o,l,i,c,u;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=new A(""),n={mode:"cors"},r="https://api.github.com/users/".concat(t,"/repos?per_page=100"),s=!0,o=[];case 5:if(!s){e.next=17;break}return e.next=8,a.get(r,n,"json",!0);case 8:return l=e.sent,(i=l.headers.get("Link"))?(c=_(i),r=c.next,s=!!c.next):s=!1,e.next=13,l.json();case 13:u=e.sent,o=o.concat(u),e.next=5;break;case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function J(e){return D("repositories/".concat(e,"/git/trees/master?recursive=1"),P)}function G(e,t){return D("repos/".concat(e,"/").concat(t),I)}function X(e,t){return D("repositories/".concat(e,"/contents/").concat(t),L,{headers:{Accept:"application/vnd.github.VERSION.raw"}},"text")}a(220);var B=a(45),W="LEFT",z="RIGHT",V=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,r=[];n<=t;)r.push(n),n+=a;return r},q=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).gotoPage=function(e){var t=a.props.onPageChanged,n=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,a.totalPages)),s={currentPage:r,totalPages:a.totalPages,pageLimit:a.pageLimit,totalRecords:a.totalRecords};a.setState({currentPage:r},function(){return n(s)})},a.handleClick=function(e){return function(t){t.preventDefault(),a.gotoPage(e)}},a.handleMoveLeft=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage-2*a.pageNeighbours-1)},a.handleMoveRight=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage+2*a.pageNeighbours+1)},a.fetchPageNumbers=function(){var e=a.totalPages,t=a.state.currentPage,n=a.pageNeighbours,r=2*a.pageNeighbours+3;if(e>r+2){var s=Math.max(2,t-n),o=Math.min(e-1,t+n),l=V(s,o),i=s>2,c=e-o>1,u=r-(l.length+1);switch(!0){case i&&!c:var m=V(s-u,s-1);l=[W].concat(Object(B.a)(m),Object(B.a)(l));break;case!i&&c:var p=V(o+1,o+u);l=Object(B.a)(l).concat(Object(B.a)(p),[z]);break;case i&&c:default:l=[W].concat(Object(B.a)(l),[z])}return[1].concat(Object(B.a)(l),[e])}return V(1,e)},a.state={currentPage:1},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"componentDidUpdate",value:function(e){e.totalRecords!==this.props.totalRecords&&this.gotoPage(1)}},{key:"render",value:function(){var e=this,t=this.props,a=t.totalRecords,s=void 0===a?null:a,o=t.pageLimit,l=void 0===o?30:o,i=t.pageNeighbours,c=void 0===i?0:i;if(this.pageLimit="number"===typeof l?l:30,this.totalRecords="number"===typeof s?s:0,this.pageNeighbours="number"===typeof c?Math.max(0,Math.min(c,2)):0,this.totalPages=Math.ceil(this.totalRecords/this.pageLimit),!this.totalRecords||1===this.totalPages)return null;var u=this.state.currentPage,m=this.fetchPageNumbers();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{"aria-label":"Countries Pagination"},r.a.createElement("ul",{className:"pagination"},m.map(function(t,a){return t===W?r.a.createElement("li",{key:a,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"/","aria-label":"Previous",onClick:e.handleMoveLeft},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))):t===z?r.a.createElement("li",{key:a,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"/","aria-label":"Next",onClick:e.handleMoveRight},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next"))):r.a.createElement("li",{key:a,className:"page-item".concat(u===t?" active":"")},r.a.createElement("a",{className:"page-link",href:"/",onClick:e.handleClick(t)},t))}))))}}]),t}(n.Component),H=a(222),K=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.repo.name),r.a.createElement("td",null,e.repo.description),r.a.createElement("td",null,e.repo.stargazers_count),r.a.createElement("td",null,e.repo.created_at),r.a.createElement("td",null,e.repo.language),r.a.createElement("td",null,r.a.createElement("a",{href:e.repo.html_url},r.a.createElement("i",{className:"fa fa-folder-open-o"}),"open")),r.a.createElement("td",null,r.a.createElement(H.a,{to:"/".concat(e.repo.owner.login,"/").concat(e.repo.name)}," explore")))},Q=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).onPageChanged=function(e){var t=a.state.allCountries,n=e.currentPage,r=e.pageLimit,s=(n-1)*r,o=t.slice(s,s+r);a.setState({currentPage:n,currentCountries:o})},a.state={allCountries:[],currentCountries:[],currentPage:null,pageLimit:10},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.setState({allCountries:this.props.data})}},{key:"componentDidUpdate",value:function(e){if(this.props.data!==e.data){var t=this.props.data,a=this.state,n=a.currentPage,r=a.pageLimit,s=(n-1)*r,o=t.slice(s,s+r);this.setState({allCountries:t,currentPage:n,currentCountries:o})}}},{key:"render",value:function(){var e=this.state,t=e.allCountries,a=e.currentCountries,n=e.currentPage,s=e.pageLimit,o=t.length,l=Math.ceil(o/s);if(0===o)return r.a.createElement("div",null,"No repos");var i=["text-dark py-2 pr-4 m-0",n?"border-gray border-right":""].join(" ").trim();return r.a.createElement("div",{className:"container mb-5"},r.a.createElement("div",{className:"row d-flex flex-row py-5"},r.a.createElement("div",{className:"w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between"},r.a.createElement("div",{className:"d-flex flex-row align-items-center"},r.a.createElement("h2",{className:i},r.a.createElement("strong",{className:"text-secondary"},o)," Countries"),n&&r.a.createElement("span",{className:"current-page d-inline-block h-100 pl-4 text-secondary"},"Page ",r.a.createElement("span",{className:"font-weight-bold"},n)," / ",r.a.createElement("span",{className:"font-weight-bold"},l))),r.a.createElement("div",{className:"d-flex flex-row py-4 align-items-center"},r.a.createElement(q,{totalRecords:o,pageLimit:s,pageNeighbours:1,onPageChanged:this.onPageChanged}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{id:"mytable",className:"table table-bordered table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Stars"),r.a.createElement("th",null,"Creation time"),r.a.createElement("th",null,"Language"),r.a.createElement("th",null,"Open in Github"),r.a.createElement("th",null,"Explore"))),r.a.createElement("tbody",null,a.map(function(e){return r.a.createElement(K,{key:e.id,repo:e})})))))))}}]),t}(n.Component),$=a(693),Y=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={userInput:""},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(Object(S.a)(a))),a.onSubmit=a.handleButtonClick.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"handleOnChange",value:function(e){e.preventDefault(),this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleButtonClick",value:function(){var e=this.state.userInput.split("/"),t=e[0],a=e[1];this.props.dispatch(G(t,a))}},{key:"render",value:function(){var e=this.props,t=e.repos,a=e.ajaxCalls,n=e.errorMessage,s=e.repo;return s.id?r.a.createElement($.a,{to:"/".concat(s.owner,"/").concat(s.name)}):r.a.createElement("div",{className:"home"},r.a.createElement("input",{value:this.state.userInput,name:"userInput",onChange:this.handleOnChange}),r.a.createElement("button",{onClick:this.handleButtonClick},"get repo"),r.a.createElement("p",null,"ajax call: ",a),r.a.createElement("p",null,this.state.username),r.a.createElement("p",null,n),r.a.createElement("h5",null,sessionStorage.getItem("username")),r.a.createElement("h5",null,sessionStorage.getItem("authtoken")),r.a.createElement(Q,{data:t||[]}))}}]),t}(n.Component);Object(l.b)(function(e){return{repos:e.userRepos.length?e.userRepos:e.foundRepos.items,repo:e.singleRepo,ajaxCalls:e.ajaxObject.ajaxCalls,errorMessage:e.ajaxObject.message}})(Y);var Z=a(33),ee=a(197),te=a.n(ee);function ae(e){return e.split(".").pop()}var ne=a(198),re=a.n(ne),se=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={fileExtension:""},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.defaultPath&&(this.props.dispatch(X(this.props.repoId,this.props.defaultPath)),this.setState({fileExtension:"md"}))}},{key:"componentDidUpdate",value:function(e,t){this.props.repoId!==e.repoId?this.componentDidMount():this.props.node!==e.node&&this.props.node&&"tree"!==this.props.node.type&&(this.props.dispatch(X(this.props.repoId,this.props.node.path)),this.setState({fileExtension:ae(this.props.node.name)}))}},{key:"render",value:function(){return this.props.node||this.props.content?"md"===this.state.fileExtension?r.a.createElement("div",{className:"readme-viewer"},r.a.createElement(re.a,{source:this.props.content})):r.a.createElement("div",{className:"content-viewer"},r.a.createElement(te.a,{className:this.state.fileExtension},this.props.content)):r.a.createElement("div",null," ","This repository has no Readme. Please select a file to see its content here...")}}]),t}(n.Component);var oe=Object(l.b)(function(e){return{content:e.fileContent,ajaxCalls:e.ajaxObject.ajaxCalls,errorMessage:e.ajaxObject.message}})(se),le={component:{width:"45%",display:"inline-block",verticalAlign:"top",padding:"20px","@media (maxWidth: 640px)":{backgroundColor:"red",width:"100%",display:"block"}},viewer:{base:{fontSize:"14px",whiteSpace:"pre-wrap",backgroundColor:"#282C34",border:"solid 1px black",padding:"20px",color:"#eef9ff",minHeight:"250px"}}},ie={tree:{base:{listStyle:"none",backgroundColor:"#3C3F41",margin:0,padding:10,color:"#eef9ff",fontFamily:"lucida grande ,tahoma,verdana,arial,sans-serif",fontSize:"14px"},node:{base:{position:"relative"},link:{cursor:"pointer",position:"relative",padding:"0px 5px",display:"block"},activeLink:{background:"#35373c"},toggle:{base:{position:"relative",float:"left",display:"inline-block",verticalAlign:"center",marginLeft:"-5px",height:"16px",width:"16px"},wrapper:{position:"absolute",top:"50%",left:"50%",margin:"-7px 0 0 -7px",height:"14px"},height:8,width:8,arrow:{fill:"#9DA5AB",strokeWidth:0}},header:{base:{display:"inline-block",verticalAlign:"top",color:"#9DA5AB",fontSize:"14px"},connector:{width:"2px",height:"12px",borderLeft:"solid 2px black",borderBottom:"solid 2px black",position:"absolute",top:"0px",left:"-21px"},title:{lineHeight:"24px",verticalAlign:"middle",overflow:"hidden"}},subtree:{listStyle:"none",marginLeft:"4px"},loading:{color:"#E2C089"}}}},ce=function(e,t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())},ue=function e(t,a,n){return n(a,t)||t.children&&t.children.length&&!!t.children.find(function(t){return e(t,a,n)})},me=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ce;if(n(a,t)||!t.children)return t;var r=t.children.filter(function(e){return ue(e,a,n)}).map(function(t){return e(t,a,n)});return Object.assign({},t,{children:r})},pe=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ce,r=t.children;if(!r||0===r.length)return Object.assign({},t,{toggled:!1});var s=t.children.filter(function(e){return ue(e,a,n)}),o=s.length>0;return o&&(r=s.map(function(t){return e(t,a,n)})),Object.assign({},t,{children:r,toggled:o})},he=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).getData=function(){return{type:"tree",name:"temp",toggled:!0,children:a.props.tree}},a.state={data:{}},a.onToggle=a.onToggle.bind(Object(S.a)(Object(S.a)(a))),a.onFilterMouseUp=a.onFilterMouseUp.bind(Object(S.a)(Object(S.a)(a))),a}var a;return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.dispatch(J(e))}},{key:"componentDidUpdate",value:function(e){this.props.tree!==e.tree&&this.setState({data:this.getData()})}},{key:"onFilterMouseUp",value:(a=Object(w.a)(k.a.mark(function e(t){var a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("loading..."),a=t.target.value.trim()){e.next=4;break}return e.abrupt("return",this.setState({data:this.getData()}));case 4:return n=me(this.getData(),a),e.next=7,pe(n,a);case 7:n=e.sent,this.setState({data:n}),console.log("end");case 10:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"onToggle",value:function(e,t){if(this.state.cursor){var a=this.state.cursor;a.active=!1,this.setState({cursor:a})}e.active=!0,e.children&&(e.toggled=t),this.setState({cursor:e})}},{key:"render",value:function(){var e=this.state.data,t=this.props.tree;if(!t)return"";var a=t.find(function(e){return"README.MD"===e.path.toUpperCase()}),n=a?a.path:void 0;return r.a.createElement("div",{className:"tree-viewer-container"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{style:le.searchBox},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-filter"})),r.a.createElement("input",{className:"form-control",onKeyUp:this.onFilterMouseUp,placeholder:"filter...",type:"text"}))),r.a.createElement(Z.Treebeard,{data:e,onToggle:this.onToggle,decorators:this.props.decorators,style:ie})),r.a.createElement("div",{className:"content-viewer-container"},r.a.createElement(oe,{style:le.viewer.base,node:this.state.cursor,repoId:this.props.match.params.id,defaultPath:n})))}}]),t}(n.Component);Z.decorators.Header=function(e){var t=e.style,a=e.node;a.name||(a.name=".blank");var n="tree"===a.type?"folder":ae(a.name),s="fiv-sqo fiv-icon-".concat(n," fiv-sqo fiv-icon-blank");return r.a.createElement("div",{style:t.base},r.a.createElement("div",{style:t.title},r.a.createElement("i",{className:s,style:{marginRight:"5px",fontSize:"18px"}}),a.name))};var de=Object(l.b)(function(e){return{tree:e.directories.tree,repo:e.singleRepo,decorators:Z.decorators}})(he),ge=a(665),fe=a(686),ve=a(687),be=a(691),Ee=function(e){return r.a.createElement(fe.a,{controlId:e.inputId,validationState:e.validateInput},r.a.createElement(ve.a,null,e.labelValue),r.a.createElement(be.a,{type:e.type,name:e.name,value:e.value,placeholder:e.placeholder,onChange:e.handleChange}),r.a.createElement(be.a.Feedback,null))},Oe=function(e){return r.a.createElement(Ee,{inputId:"emailInput",validateInput:e.validateEmail,labelValue:"Email",type:"email",name:"email",value:e.value,placeholder:"example@email.com",handleChange:e.handleChange})},je=a(202),ye=a(203),Ce=a.n(ye),Se={validateEmail:function(e){return e?je.validate(e)?"success":"error":null},validateConfirmEmail:function(e,t){return t?t===e?"success":"error":null},validateUserName:function(e){return e?e.length>2?"success":"error":null},validatePassword:function(e){var t=new Ce.a;return t.is().min(6).has().digits(),e?t.validate(e)?"success":"error":null},validateConfirmPassword:function(e,t){return t?t===e?"success":"error":null}},xe=function(e){return r.a.createElement(Ee,{inputId:"passwordInput",validateInput:e.validatePassword,labelValue:"Password",type:"password",name:"password",value:e.value,placeholder:"password",handleChange:e.handleChange})},Ne="kid_Bk3haU7TQ",ke=new A("https://baas.kinvey.com");var we={headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa(Ne+":3eacdc7655d84ba3a550b115ec7e5d7e")}},Ae=function(){return{headers:{"Content-Type":"application/json",Authorization:"Kinvey "+sessionStorage.getItem("authtoken")}}};var _e={login:function(e,t){var a={username:e,password:t};return ke.post("user/".concat(Ne,"/login"),we,a)},register:function(e,t){var a={username:e,password:t};return ke.post("user/".concat(Ne),we,a)},logout:function(){return ke.post("user/".concat(Ne,"/_logout"),Ae())},saveSession:function(e){var t=e._kmd.authtoken;sessionStorage.setItem("authtoken",t);var a=e._id;sessionStorage.setItem("userId",a);var n=e.username;sessionStorage.setItem("username",n)},clearSession:function(){sessionStorage.clear()}};function Ue(e){return{type:"FAIL_AJAX_CALL",errorMessage:e}}var Ie=function(e){function t(e,a){var n;return Object(E.a)(this,t),(n=Object(j.a)(this,Object(y.a)(t).call(this,e,a))).handleUserChange=function(e){var t=e.target,a=t.name,r=t.value,s=n.state.user;s[a]=r,n.setState({user:s})},n.handleStateChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(function(e){return e[a]=r,{prevState:e}})},n.createUser=function(e){var t,a;(e.preventDefault(),"success"===Se.validatePassword(n.state.user.password)&&"success"===Se.validateEmail(n.state.user.email))?(n.setState({errorMessage:""}),n.props.dispatch((t=n.state.user.email,a=n.state.user.password,function(e){e({type:"START_AJAX_CALL",ajaxCalls:0}),_e.register(t,a).then(function(t){t.error?e(Ue(t.error)):(e({type:"GOT_USER_DATA"}),e({type:"SUCCESS_AJAX_CALL"}),_e.saveSession(t))},function(t){e(Ue(t.message))})}))):n.setState({errorMessage:"Error"})},n.handleUserChange=n.handleUserChange.bind(Object(S.a)(Object(S.a)(n))),n.state={user:{email:"",name:"",password:""},confirmPassword:"",errorMessage:"",success:!1,successMessage:""},n}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return sessionStorage.getItem("authtoken")||this.props.loggedInUser?r.a.createElement($.a,{to:"/repo_explorer"}):r.a.createElement("div",{className:"form-container"},r.a.createElement("h3",{className:"error"},this.state.errorMessage),r.a.createElement("h3",{className:"success"},this.state.successMessage),r.a.createElement("form",{onSubmit:this.createUser},r.a.createElement("h1",{style:{textAlign:"center"}},"Registration Form"),r.a.createElement(Oe,{validateEmail:Se.validateEmail(this.state.user.email),value:this.state.user.email,handleChange:this.handleUserChange}),r.a.createElement(Ee,{inputId:"nameInput",validateInput:Se.validateUserName(this.state.user.name),labelValue:"Username",type:"text",name:"name",value:this.state.user.name,placeholder:"username",handleChange:this.handleUserChange}),r.a.createElement(xe,{validatePassword:Se.validatePassword(this.state.user.password),value:this.state.user.password,handleChange:this.handleUserChange}),r.a.createElement(Ee,{inputId:"confirmPasswordInput",validateInput:Se.validateConfirmPassword(this.state.user.password,this.state.confirmPassword),labelValue:"Confirm Password",type:"password",name:"confirmPassword",value:this.state.confirmPassword,placeholder:"confirm password",handleChange:this.handleStateChange}),r.a.createElement(ge.a,{type:"submit"},"Submit")),r.a.createElement(H.a,{to:"#/login"},"Login"))}}]),t}(n.Component),Pe=Object(l.b)(function(e){return{loggedInUser:e.loggedInUser}})(Ie),Le=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).handleUserChange=function(e){var t=e.target,n=t.name,r=t.value,s=a.state.user;s[n]=r,a.setState({user:s})},a.loginUser=function(e){var t,n;(e.preventDefault(),"success"===Se.validatePassword(a.state.user.password)&&"success"===Se.validateEmail(a.state.user.email))?(a.setState({errorMessage:""}),a.props.dispatch((t=a.state.user.email,n=a.state.user.password,function(e){e({type:"START_AJAX_CALL",ajaxCalls:0}),_e.login(t,n).then(function(t){t.error?e(Ue(t.error)):(e({type:"GOT_USER_DATA"}),_e.saveSession(t),e({type:"SUCCESS_AJAX_CALL"}))},function(t){e(Ue(t.message))})}))):a.setState({errorMessage:"Error"})},a.state={user:{email:"",password:""},error:"",token:null},a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return sessionStorage.getItem("authtoken")||this.props.loggedInUser?r.a.createElement($.a,{to:"/repo_explorer"}):r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:this.loginUser},r.a.createElement("div",{className:"error"},this.state.error),r.a.createElement("h1",{style:{textAlign:"center"}},"Login Form"),r.a.createElement(Oe,{validateEmail:Se.validateEmail(this.state.user.email),value:this.state.user.email,handleChange:this.handleUserChange}),r.a.createElement(xe,{validatePassword:Se.validatePassword(this.state.user.password),value:this.state.user.password,handleChange:this.handleUserChange}),r.a.createElement(ge.a,{type:"submit"},"Submit")),r.a.createElement(H.a,{to:"/register"},"Register"))}}]),t}(r.a.Component),Te=Object(l.b)(function(e){return{loggedInUser:e.loggedInUser}})(Le),Re=a(690),De=a(688),Me=a(689),Fe=function(e){return e.loggedInUser?r.a.createElement(De.a,{pullRight:!0},r.a.createElement(Me.a,{onClick:e.logout},"Sign Out")):r.a.createElement(De.a,{pullRight:!0},r.a.createElement(Me.a,{href:"/login"},"Sign In"),r.a.createElement(Me.a,{href:"/register"},"Sign Up"))},Je=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={owner:"",redirect:!1},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(Object(S.a)(a))),a.onSubmit=a.onSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"handleOnChange",value:function(e){e.preventDefault(),this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),(0,this.props.dispatch)(M(this.state.owner)),this.setState({redirect:!0})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-sm-3 col-md-3"},r.a.createElement("form",{className:"navbar-form",role:"search",onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search",name:"owner",style:{backgroundColor:"#404448"},value:this.state.owner,onChange:this.handleOnChange}),r.a.createElement("div",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-default",type:"submit"},r.a.createElement("i",{className:"glyphicon glyphicon-search"}))))))}}]),t}(n.Component),Ge=Object(l.b)()(Je),Xe=a(86),Be=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={userInput:"",owner:"",repo:"",redirect:!1},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(Object(S.a)(a))),a.onSubmit=a.onSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"handleOnChange",value:function(e){e.preventDefault(),this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.userInput.split("/"),a=Object(Xe.a)(t,2),n=a[0],r=a[1];this.setState({owner:n,repo:r,redirect:!0})}},{key:"render",value:function(){var e=this.state,t=e.redirect,a=e.owner,n=e.repo;return r.a.createElement("div",{className:"col-sm-3 col-md-3"},r.a.createElement("form",{className:"navbar-form",role:"search",onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search",name:"userInput",value:this.state.userInput,onChange:this.handleOnChange}),r.a.createElement("div",{className:"input-group-btn"},r.a.createElement("button",{className:"btn btn-default",type:"submit"},r.a.createElement("i",{className:"glyphicon glyphicon-search"}))))),t&&r.a.createElement($.a,{to:"/".concat(a,"/").concat(n)}))}}]),t}(n.Component),We=Object(l.b)()(Be),ze=Object(l.b)(function(e){return{loggedInUser:e.loggedInUser}})(function(e){return r.a.createElement(Re.a,{inverse:!0,collapseOnSelect:!0,className:"header"},r.a.createElement(Re.a.Header,null,r.a.createElement(Re.a.Brand,null,r.a.createElement("a",{href:"/repo_explorer"},"Repo Explorer")),r.a.createElement(Re.a.Toggle,null)),r.a.createElement(Ge,null),r.a.createElement(We,null),r.a.createElement(Re.a.Collapse,null,r.a.createElement(Fe,{loggedInUser:e.loggedInUser,logout:function(){return e.dispatch(function(e){e({type:"START_AJAX_CALL",ajaxCalls:0}),_e.logout().then(function(t){console.log(t),t.error?e(Ue(t.error)):(e({type:"CLEAR_USER_DATA"}),e({type:"SUCCESS_AJAX_CALL"}),_e.clearSession())},function(t){e(Ue(t.message))})})}})))}),Ve=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).getData=function(){var e=a.props,t=e.repo,n=e.tree;return{type:"tree",name:t?t.name:"root",toggled:!0,children:n}},a.state={data:{}},a.onToggle=a.onToggle.bind(Object(S.a)(Object(S.a)(a))),a.onFilterMouseUp=a.onFilterMouseUp.bind(Object(S.a)(Object(S.a)(a))),a}var a;return Object(C.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.owner,t=this.props.match.params.repoName;this.props.dispatch(G(e,t))}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params!==e.match.params&&this.componentDidMount(),this.props.repo!==e.repo){var t=this.props.repo.id;this.props.dispatch(J(t))}this.props.tree!==e.tree&&this.setState({data:this.getData()})}},{key:"onFilterMouseUp",value:(a=Object(w.a)(k.a.mark(function e(t){var a,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("loading..."),a=t.target.value.trim()){e.next=4;break}return e.abrupt("return",this.setState({data:this.getData()}));case 4:return n=me(this.getData(),a),e.next=7,pe(n,a);case 7:n=e.sent,this.setState({data:n}),console.log("end");case 10:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"onToggle",value:function(e,t){if(this.state.cursor){var a=this.state.cursor;a.active=!1,this.setState({cursor:a})}e.active=!0,e.children&&(e.toggled=t),this.setState({cursor:e})}},{key:"render",value:function(){var e=this.state.data,t=this.props.tree;if(!t)return r.a.createElement("h2",null,"Not found");var a=t.find(function(e){return"README.MD"===e.path.toUpperCase()}),n=a?a.path:void 0;return r.a.createElement("div",{className:"tree-viewer-container"},r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{style:le.searchBox},r.a.createElement("div",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:"fa fa-filter"})),r.a.createElement("input",{className:"form-control",onKeyUp:this.onFilterMouseUp,placeholder:"filter...",type:"text"}))),r.a.createElement(Z.Treebeard,{data:e,onToggle:this.onToggle,decorators:this.props.decorators,style:ie})),r.a.createElement("div",{className:"content-viewer-container"},r.a.createElement(oe,{style:le.viewer.base,node:this.state.cursor,repoId:this.props.repo.id,defaultPath:n})))}}]),t}(n.Component);var qe=Object(l.b)(function(e){return{tree:e.directories.tree,repo:e.singleRepo,decorators:Z.decorators}})(Ve),He=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={keyWord:"",params:{language:"",user:"",minStars:"",maxStars:""}},a.onChange=a.onChange.bind(Object(S.a)(Object(S.a)(a))),a.onSubmit=a.onSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"onChange",value:function(e){var t=e.target,a=t.name,n=t.value;"keyWord"===a?this.setState(function(e){return e[a]=n,{prevState:e}}):this.setState(function(e){return e.params[a]=n,{prevState:e}})}},{key:"onSubmit",value:function(e){e.preventDefault(),(0,this.props.dispatch)(function(e){return D("search/repositories?q=".concat(e,"&per_page=100"),U)}(this.createQueryString()))}},{key:"createQueryString",value:function(){var e="",t=this.state,a=t.keyWord,n=t.params;return a&&(e=e.concat("".concat(a))),Object.entries(n).forEach(function(t){var a=Object(Xe.a)(t,2),n=a[0],r=a[1];if(r)switch(n){case"minStars":e=e.concat(" stars:".concat(r,"..*"));break;case"maxStars":e=e.endsWith("*")?e.replace(/.$/,r):e.concat(" stars:..".concat(r));break;default:e=e.concat(" ".concat(n,":").concat(r))}}),console.log(e),e}},{key:"render",value:function(){return this.props.result.total_count>0?r.a.createElement($.a,{to:"/"}):r.a.createElement("form",{className:"form-horizontal",onSubmit:this.onSubmit},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Form Name"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"key_word"},"Key Word"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{id:"key_word",name:"keyWord",type:"text",value:this.state.keyWord,placeholder:"Search for keyword in name, description or readme",className:"form-control input-md",onChange:this.onChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"owner"},"Owner username"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{id:"owner",name:"user",type:"text",placeholder:"Owner",className:"form-control",value:this.state.params.user,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"language"},"Language"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{id:"language",name:"language",type:"text",placeholder:"Language",className:"form-control",value:this.state.params.language,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"min_stars"},"Min stars"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{id:"min_stars",name:"minStars",type:"number",placeholder:"Stars, greater than or equal to:",className:"form-control",value:this.state.params.minStars,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"max_stars"},"Max stars"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{id:"max_stars",name:"maxStars",type:"number",placeholder:"Stars, less than or equal to:",className:"form-control",value:this.state.params.maxStars,onChange:this.onChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-md-4 control-label",htmlFor:"submit"}),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{id:"submit",name:"submit",className:"btn btn-primary"},"Search")))))}}]),t}(n.Component);var Ke=Object(l.b)(function(e){return{result:e.foundRepos}})(He),Qe=(a(681),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={userInput:"",jump:!1,search:!1},a.onChange=a.onChange.bind(Object(S.a)(Object(S.a)(a))),a.onSubmit=a.onSubmit.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.userInput.split("/");t[0];t[1]?this.setState({jump:!0}):this.setState({search:!0})}},{key:"render",value:function(){return this.state.jump?r.a.createElement($.a,{to:"/".concat(this.state.userInput)}):r.a.createElement("div",{id:"search"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"search",autoFocus:!0,name:"userInput",value:this.state.userInput,onChange:this.onChange,placeholder:"type keyword(s) here"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search")))}}]),t}(n.Component)),$e=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={username:""},a.handleOnChange=a.handleOnChange.bind(Object(S.a)(Object(S.a)(a))),a}return Object(C.a)(t,e),Object(O.a)(t,[{key:"handleOnChange",value:function(e){e.preventDefault(),this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ze,null),r.a.createElement(x,null),r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/repository/:id",component:de}),r.a.createElement(v.a,{exact:!0,path:"/:owner/:repoName",component:qe}),r.a.createElement(v.a,{path:"/register",component:Pe}),r.a.createElement(v.a,{path:"/login",component:Te}),r.a.createElement(v.a,{path:"/search",component:Ke})))}}]),t}(n.Component),Ye=(a(683),document.getElementById("root"));o.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(g.a,null,r.a.createElement(f.a,null,r.a.createElement(v.a,{exact:!0,path:"/repo_explorer",component:Qe}),r.a.createElement($e,null)))),Ye)}},[[207,2,1]]]);
//# sourceMappingURL=main.3874dded.chunk.js.map