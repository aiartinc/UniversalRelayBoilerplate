(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{795:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=p(r(64)),l=r(39),c=p(l),o=r(136),s=r(25),u=p(r(135)),i=p(r(36)),d=p(r(0)),f=p(r(57));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return a._handle_onClick_Create=function(){var e,t,r,l,c,o,s;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.state,t=e.UserAccount_Identifier,r=e.User_Secret,a.setState({currentOperation:"creating",User_Secret:""}),n.prev=2,l=window.location,c=l.protocol+"//"+l.hostname+":"+l.port,n.next=7,regeneratorRuntime.awrap(fetch(c+"/auth/createuser",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({UserAccount_Identifier:t,User_Secret:r})}));case 7:return o=n.sent,n.next=10,regeneratorRuntime.awrap(o.json());case 10:s=n.sent,console.log("CREATE USER RESPONSE"),console.log(s),s.success?a.setState({currentOperation:"success"}):a.setState({currentOperation:"failure",errorMessage:s.error}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(2),a.setState({currentOperation:"failure",errorMessage:"Did not receive proper response from server. Please try again. Message:"+n.t0.message});case 19:case"end":return n.stop()}},null,n,[[2,16]])},a._handle_onClick_CancelCreation=function(){a.setState({currentOperation:"failure",errorMessage:"User creation has been canceled"})},a._handle_onClick_TryAgain=function(){a.setState({currentOperation:"prompt",errorMessage:""})},a._handle_onClick_Continue=function(){window.location.replace("/")},a.state={currentOperation:"prompt",errorMessage:"",UserAccount_Identifier:"",User_Secret:""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),n(t,[{key:"renderCreating",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return d.default.createElement(c.default,{className:e.card},d.default.createElement(l.CardHeader,{title:"Creating user"}),d.default.createElement(l.CardContent,null,d.default.createElement(i.default,{component:"p"},"Creating user",d.default.createElement("span",{class:e.userName},t),", please wait."),d.default.createElement("br",null),d.default.createElement("br",null),d.default.createElement(o.LinearProgress,{mode:"query"})),d.default.createElement(l.CardActions,null,d.default.createElement(a.default,{onClick:this._handle_onClick_CancelCreation},"Cancel")))}},{key:"renderSuccess",value:function(){var e=this.props.classes,t=this.state.UserAccount_Identifier;return d.default.createElement(c.default,{className:e.card},d.default.createElement(l.CardHeader,{title:"Creating user"}),d.default.createElement(l.CardContent,null,d.default.createElement(i.default,{component:"p"},"Created user",d.default.createElement("span",{class:e.userName},t),".")),d.default.createElement(l.CardActions,null,d.default.createElement(a.default,{onClick:this._handle_onClick_Continue},"Continue")))}},{key:"renderFailure",value:function(){var e=this.props.classes,t=this.state,r=t.UserAccount_Identifier,n=t.errorMessage;return d.default.createElement(c.default,{className:e.card},d.default.createElement(l.CardHeader,{title:"Creating user"}),d.default.createElement(l.CardContent,null,d.default.createElement(i.default,{component:"p"},"Failed creating user",d.default.createElement("span",{class:e.userName},r),"because ",n,".")),d.default.createElement(l.CardActions,null,d.default.createElement(a.default,{onClick:this._handle_onClick_TryAgain},"Try Again")))}},{key:"renderPrompt",value:function(){var e=this,t=this.props.classes,r=this.state,n=r.UserAccount_Identifier,o=r.User_Secret;return d.default.createElement(c.default,{className:t.card},d.default.createElement(l.CardHeader,{title:"Create New User"}),d.default.createElement(l.CardContent,null,d.default.createElement(u.default,{label:"Account Name",fullWidth:!0,value:n,onChange:function(t){return e.setState({UserAccount_Identifier:t.target.value})}}),d.default.createElement(u.default,{label:"Password",type:"password",fullWidth:!0,value:o,onChange:function(t){return e.setState({User_Secret:t.target.value})}})),d.default.createElement(l.CardActions,null,d.default.createElement(a.default,{onClick:this._handle_onClick_Create},"Create")))}},{key:"render",value:function(){var e=this.state.currentOperation;return d.default.createElement(f.default,null,"prompt"===e&&this.renderPrompt(),"creating"===e&&this.renderCreating(),"success"===e&&this.renderSuccess(),"failure"===e&&this.renderFailure())}}]),t}();t.default=(0,s.withStyles)(function(e){return{card:{minWidth:320},userName:{borderWidth:1,borderColor:"#c0c0c0",fontWeight:"bold",paddingLeft:10,paddingRight:10}}})(m)}}]);