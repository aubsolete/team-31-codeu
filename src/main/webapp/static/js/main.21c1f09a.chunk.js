(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),i=a.n(l),o=(a(28),a(1)),s=a(2),c=a(4),u=a(3),m=a(5),h=(a(29),a(7)),d=a(11),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={text:"",messages:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null==this.state.messages?r.a.createElement("div",null," loading messages"):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{value:this.state.text,onChange:this.onTextChange.bind(this)}),r.a.createElement("button",{onClick:this.onButtonClick.bind(this),disabled:""===this.state.text.length}," submit ")),r.a.createElement("div",{className:"message-container"},0===this.state.messages.length&&r.a.createElement("p",null," There are no posts yet "),this.state.messages.map(function(e){return r.a.createElement("div",{key:e.id,className:"message-div"},r.a.createElement("div",{className:"message-header"},e.user," - ",new Date(e.timestamp).toDateString()),r.a.createElement("div",{className:"message-body"},e.text))})))}},{key:"componentDidMount",value:function(){this.getMessages()}},{key:"onTextChange",value:function(e){e.preventDefault(),this.setState({text:e.target.value})}},{key:"onButtonClick",value:function(e){var t=this;e.preventDefault(),fetch("/messages?text=".concat(this.state.text),{method:"POST"}).then(function(e){return t.getMessages()}).catch(function(){return alert("Unable to upload the message. An error occured.")})}},{key:"getMessages",value:function(){var e=this;return fetch("/feed").then(function(e){return e.json()}).then(function(t){return e.setState({messages:t})})}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={text:"",teams:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null==this.state.teams?r.a.createElement("div",null," loading teams"):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{value:this.state.text,onChange:this.onTextChange.bind(this)}),r.a.createElement("button",{onClick:this.onButtonClick.bind(this),disabled:""===this.state.text.length}," Submit ")),r.a.createElement("div",{className:"team-container"},0===this.state.teams.length&&r.a.createElement("p",null," There are no teams yet "),this.state.teams.map(function(e){return r.a.createElement("div",{key:e.teamId,className:"team-div"},r.a.createElement("div",{className:"team-body"},r.a.createElement("li",null,r.a.createElement(h.b,{to:"/admin-team/".concat(e.teamId)}," ",e.teamName," "))))})))}},{key:"componentDidMount",value:function(){this.getTeams()}},{key:"onTextChange",value:function(e){e.preventDefault(),this.setState({text:e.target.value})}},{key:"onButtonClick",value:function(e){var t=this;e.preventDefault(),fetch("/admin-team-list?cohortId=".concat(this.props.match.params.cohortId,"&teamName=").concat(this.state.text),{method:"POST"}).then(function(e){return t.getTeams()}).catch(function(){return alert("Unable to upload the team. An error occured.")})}},{key:"getTeams",value:function(){var e=this;return fetch("/admin-team-list?cohortId=".concat(this.props.match.params.cohortId)).then(function(e){return e.json()}).then(function(t){return e.setState({teams:t})})}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={text:"",members:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null==this.state.members?r.a.createElement("div",null," loading members"):r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{value:this.state.text,onChange:this.onTextChange.bind(this)}),r.a.createElement("button",{onClick:this.onButtonClick.bind(this),disabled:""===this.state.text.length}," submit ")),r.a.createElement("div",{className:"member-container"},0===this.state.members.length&&r.a.createElement("p",null," There are no members yet "),this.state.members.map(function(e){return r.a.createElement("div",{key:e.id,className:"member-div"},r.a.createElement("div",{className:"member-body"},e.email))})))}},{key:"componentDidMount",value:function(){this.getMembers()}},{key:"onTextChange",value:function(e){e.preventDefault(),this.setState({text:e.target.value})}},{key:"onButtonClick",value:function(e){var t=this;e.preventDefault(),fetch("/create-user?teamId=".concat(this.props.match.params.teamId,"&email=").concat(this.state.text),{method:"POST"}).then(function(e){return t.getMembers()}).catch(function(){return alert("Unable to upload the member. An error occured.")})}},{key:"getMembers",value:function(){var e=this;return fetch("/admin-user-list?teamId=".concat(this.props.match.params.teamId)).then(function(e){return e.json()}).then(function(t){return e.setState({members:t})})}}]),t}(r.a.Component),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={cohortName:"",cohorts:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return null==this.state.cohorts?n.createElement("div",null," loading cohorts"):n.createElement("div",null,n.createElement("div",null,n.createElement("textarea",{value:this.state.cohortName,onChange:this.onCohortNameChange.bind(this)}),n.createElement("button",{onClick:this.onButtonClick.bind(this),disabled:""===this.state.cohortName.length}," Submit ")),n.createElement("div",null,0===this.state.cohorts.length&&n.createElement("p",null," There are no cohorts yet "),this.state.cohorts.map(function(e){return n.createElement("div",{key:e.cohortId},n.createElement("div",null,n.createElement("li",null,n.createElement(h.b,{to:"/cohort/".concat(e.cohortId)}," ",e.cohortName," "))))})))}},{key:"componentDidMount",value:function(){this.loadCohorts()}},{key:"onCohortNameChange",value:function(e){e.preventDefault(),this.setState({cohortName:e.target.value})}},{key:"onButtonClick",value:function(e){var t=this;e.preventDefault(),fetch("/cohort?cohortName=".concat(this.state.cohortName),{method:"POST"}).then(function(e){return t.loadCohorts()})}},{key:"loadCohorts",value:function(){var e=this;fetch("/cohort-list").then(function(e){return e.json()}).then(function(t){return e.setState({cohorts:t})})}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={team:null,users:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.team,a=e.users;return t?r.a.createElement("div",null,r.a.createElement("h1",null,t.teamName),r.a.createElement("form",null,r.a.createElement("input",{value:t.projectName,placeholder:"Project Name",onChange:this.onProjectNameChange.bind(this)}),r.a.createElement("textarea",{value:t.projectDescription,placeholder:"There is no project description yet.",onChange:this.onProjectDescChange.bind(this)}),r.a.createElement("input",{value:t.githubLink,placeholder:"Github Link",onChange:this.onGithubLinkChange.bind(this)}),r.a.createElement("button",{onClick:this.onButtonClick.bind(this)}," Edit Project ")),r.a.createElement("ul",null,a.map(function(e){return r.a.createElement("div",{key:e.userId},r.a.createElement("img",{src:e.imgUrl,alt:"User"}),r.a.createElement(h.b,{to:"/user/".concat(e.userId)}," ",e.firstName," ",e.lastName," "),r.a.createElement("p",null," ",e.aboutMe," "))}),";")):r.a.createElement("p",null," Team is loading... ")}},{key:"componentDidMount",value:function(){var e=this;fetch("/team?teamId={this.props.match.params.teamId}").then(function(e){return e.json()}).then(function(t){e.setState({team:t}),fetch("/admin-user-list?teamId={team.teamId}").then(function(e){return e.json()}).then(function(t){return e.setState({users:t})})})}},{key:"onProjectNameChange",value:function(e){e.preventDefault();var t=Object.assign(this.state.team,{projectName:e.target.value});this.setState({team:t})}},{key:"onProjectDescChange",value:function(e){e.preventDefault();var t=Object.assign(this.state.team,{projectDescription:e.target.value});this.setState({team:t})}},{key:"onGithubLinkChange",value:function(e){e.preventDefault();var t=Object.assign(this.state.team,{githubLink:e.target.value});this.setState({team:t})}}]),t}(r.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={teams:null,cohorts:null,selectedCohort:"",selectedCohortId:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.teams,a=e.cohorts;return null===a?r.a.createElement("div",null," Loading cohorts..."):0===a.length?r.a.createElement("div",null," no cohorts to select"):r.a.createElement("div",null,r.a.createElement("select",{value:this.state.selectedCohort,onChange:this.onChangeCohortId.bind(this)},a.map(function(e){return r.a.createElement("option",{value:e.cohortId}," ",e.cohortName," ")}),";"),r.a.createElement("div",null,null===t&&r.a.createElement("p",null," There are no teams yet "),null!=t&&t.map(function(e){return r.a.createElement("div",{key:e.teamId},r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/team/".concat(e.teamId)}," ",e.teamName," "))))})))}},{key:"componentDidMount",value:function(){var e=this;fetch("/cohort-list").then(function(e){return e.json()}).then(function(t){return e.setState({cohorts:t})})}},{key:"onChangeCohortId",value:function(e){console.log(e.target.value),this.setState({selectedCohortId:e.target.value}),this.getThisCohortsTeams(e.target.value)}},{key:"getThisCohortsTeams",value:function(e){var t=this;return fetch("/admin-team-list?cohortId=".concat(e)).then(function(e){return e.json()}).then(function(e){return t.setState({teams:e})})}}]),t}(r.a.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={action:"",imageUrl:null,file:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("form",{action:this.state.action,method:"POST",encType:"multipart/form-data",onSubmit:this.onSubmit.bind(this)},n.createElement("input",{type:"file",name:"image",onChange:this.onFileUpload.bind(this)}),n.createElement("input",{type:"submit",value:"Submit"})),null!=this.state.imageUrl&&n.createElement("img",{alt:"user profile",src:this.state.imageUrl}))}},{key:"componentDidMount",value:function(){var e=this;fetch("/blobstore-upload-url").then(function(e){return e.text()}).then(function(t){e.setState({action:t})})}},{key:"onFileUpload",value:function(e){this.setState({file:e.target.files[0]})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("image",this.state.file);var n={method:"POST",mode:"cors",body:a};fetch(this.state.action,n).then(function(e){return e.text()}).then(function(e){t.setState({imageUrl:e})}).catch(function(e){alert("unable to upload image")})}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:null,action:"",currentUser:null,file:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleFirstName",value:function(e){e.preventDefault();var t=Object.assign({},this.state.user,{firstName:e.target.value});this.setState({user:t})}},{key:"handleLastName",value:function(e){e.preventDefault();var t=Object.assign({},this.state.user,{lastName:e.target.value});this.setState({user:t})}},{key:"handleAboutMe",value:function(e){e.preventDefault();var t=Object.assign({},this.state.user,{aboutMe:e.target.value});this.setState({user:t})}},{key:"onFileUpload",value:function(e){this.setState({file:e.target.files[0]})}},{key:"handleImg",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("image",this.state.file);var n={method:"POST",mode:"cors",body:a};fetch(this.state.action,n).then(function(e){return e.text()}).then(function(a){var n=Object.assign({},t.state.user,{imgUrl:e.target.value});return t.setState({user:n}),t.handleFormSubmit(e)}).catch(function(e){alert("unable to upload image")})}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=this.state.user,a=t.firstName,n=t.lastName,r=t.imgUrl,l=t.aboutMe;return fetch("/about?userId=".concat(this.props.match.params.userId,"&firstName=").concat(a,"&lastName=").concat(n,"&imgUrl=").concat(r,"&aboutMe=").concat(l),{method:"POST"}).then(function(e){e.json().then(function(e){console.log("Successful"+e)})})}},{key:"render",value:function(){if(null==this.state.user)return r.a.createElement("div",null," loading user");if(null==this.state.currentUser)return r.a.createElement("div",null," checking current user");var e=this.state.currentUser.id!==this.state.user.id;return r.a.createElement("div",null,r.a.createElement("form",{action:this.state.action,method:"POST",encType:"multipart/form-data",onSubmit:this.handleImg.bind(this)},null!=this.state.imgUrl&&r.a.createElement("img",{alt:"user profile",src:this.state.imgUrl}),r.a.createElement("div",null,r.a.createElement("input",{type:"file",name:"image",onChange:this.handleImg.bind(this),disabled:this.state.currentUser.id!==this.state.user.id}))),r.a.createElement("form",{method:"POST",encType:"multipart/form-data",onSubmit:this.handleFormSubmit.bind(this)},r.a.createElement("fieldset",{disabled:this.state.currentUser.id!==this.state.user.id},r.a.createElement("div",null,r.a.createElement("input",{inputType:"text",title:"First name",value:this.state.user.firstName,onChange:this.handleFirstName.bind(this)}),r.a.createElement("input",{inputType:"text",title:"Last name",value:this.state.user.lastName,onChange:this.handleLastName.bind(this)}),r.a.createElement("input",{inputType:"text",title:"Email",value:this.state.user.email,disabled:!0})),r.a.createElement("div",null,r.a.createElement("textarea",{title:"About",value:this.state.user.aboutMe,handleChange:this.handleAboutMe.bind(this),placeholder:"Tell us about you"})),r.a.createElement("div",null,r.a.createElement("button",{type:"primary",title:"Submit",disabled:e})))))}},{key:"componentDidMount",value:function(){var e=this;fetch("/login-status").then(function(e){return e.json()}).then(function(t){e.setState({currentUser:t})}),fetch("/blobstore-upload-url").then(function(e){return e.text()}).then(function(t){e.setState({action:t})}),fetch("/about").then(function(e){return e.json()}).then(function(t){e.setState({user:t})})}}]),t}(r.a.Component);function j(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"CodeU Starter Project"),r.a.createElement("p",null,"This is the CodeU starter project. Click the links above to login and visit your page. You can post messages on your page, and you can visit other user pages if you have their URL."),r.a.createElement("p",null,"This is your code now! Feel free to make changes, and don't be afraid to get creative! You could start by modifying this page to tell the world more about your team."))}function C(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Our Team"),r.a.createElement("h2",null,"Denise Chacanaca"),r.a.createElement("ul",null,r.a.createElement("li",null,"Summer Feelz: empowering, happy, and exciting :D "),r.a.createElement("li",null,"Aspirational Hobby: My aspirational hobby is to dance. I love dancing, its a huge part of my culture and community so I would love to get better at it! "),r.a.createElement("li",null,"Ask me About: True crime and Literature ")),r.a.createElement("h2",null,"Teammate B Name: Natalie "),r.a.createElement("ul",null,r.a.createElement("li",null,"Summer Feelz: relaxing, exciting, free "),r.a.createElement("li",null,"Aspirational Hobby: Cooking"),r.a.createElement("li",null,"Ask me About: Where to get a delicious $5 breakfast in Miami ")),r.a.createElement("h2",null,"Aubree Dix"),r.a.createElement("ul",null,r.a.createElement("li",null,"Summer Feelz: Sad, adventurous, and relieved!"),r.a.createElement("li",null,"Aspirational Hobby: I would spend all of my time and money learning how to ride a dragon. Yes, I know dragons don't exist, but GOT just ended and I don't know what to do with my emotions right now. (If this *must* be reality, I would learn how to fix up cars.)"),r.a.createElement("li",null,"Ask me About: Maintaining a long-distance relationship.")))}var O=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/about/"},"About Our Team")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/cohort/"},"Add Cohort")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/select-cohort/"},"Select Cohorts")))),r.a.createElement(d.a,{path:"/",exact:!0,component:j}),r.a.createElement(d.a,{path:"/about/",component:C}),r.a.createElement(d.a,{path:"/feed/",component:f}),r.a.createElement(d.a,{path:"/admin-team/:teamId",exact:!0,component:b}),r.a.createElement(d.a,{path:"/cohort/:cohortId",exact:!0,component:v}),r.a.createElement(d.a,{path:"/user/:userId",component:k}),r.a.createElement(d.a,{path:"/cohort",exact:!0,component:p}),r.a.createElement(d.a,{path:"/team/:teamId",component:g}),r.a.createElement(d.a,{path:"/select-cohort",component:E}),r.a.createElement(d.a,{path:"/image-upload",component:y})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.21c1f09a.chunk.js.map