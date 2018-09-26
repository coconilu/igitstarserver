webpackJsonp([1],{"0aTT":function(t,e){},"1e2F":function(t,e){},"1h8H":function(t,e){},"2TZk":function(t,e){},CyA4:function(t,e){},K2AC:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},o,!1,function(t){a("1h8H")},null,null).exports,n=a("mvHQ"),r=a.n(n),c=a("Dd8w"),l=a.n(c),u=a("NYxO"),d=a("mtWM"),h=a.n(d);s.a.use(u.a);var m=new u.a.Store({state:{noticeErrorUserName:!1,hasLogin:!1,userName:"",avatarURL:"",collections:[],userInformations:{}},mutations:{updateNoticeErrorUserName:function(t,e){t.noticeErrorUserName=e.noticeErrorUserName},updateLoginState:function(t,e){t.hasLogin=e.hasLogin},updateUserName:function(t,e){t.userName=e.userName},updateAvatarURL:function(t,e){t.avatarURL=e.avatarURL},updateUserInformations:function(t,e){t.userInformations=l()({},e)},updateCollections:function(t,e){switch(e.type){case"add":t.collections.unshift(e.newItem);break;case"toTop":t.collections.unshift.apply(t.collections,t.collections.splice(e.toTopIndex,1));break;case"remove":t.collections.splice(e.removeIndex,1)}},initData:function(t){t.userName=window.localStorage.getItem("userName")||"",t.avatarURL=window.localStorage.getItem("avatarURL")||"",t.hasLogin="true"===window.localStorage.getItem("hasLogin"),t.collections=JSON.parse(window.localStorage.getItem("collections"))||[]},emptyData:function(t){t.userName="",t.avatarURL="",t.collections=[],t.userInformations={}}},actions:{login:function(t,e){var a=t.commit,s=t.state,o=e?e.userName:s.userName;o.length&&this.$axios.get("https://api.github.com/users/"+o,{headers:{Accept:"application/vnd.github.v3+json"}}).then(function(t){200===t.status&&(a("updateUserName",{userName:t.data.login}),a("updateAvatarURL",{avatarURL:t.data.avatar_url}),a("updateLoginState",{hasLogin:!0}),a("updateUserInformations",t.data),setTimeout(function(){window.localStorage.setItem("userName",s.userName),window.localStorage.setItem("avatarURL",s.avatarURL)}))}).catch(function(t){console.log("login fail!"),s.noticeErrorUserName=!0,s.hasLogin=!1})},logout:function(t){var e=t.commit,a=t.state;e("emptyData"),setTimeout(function(){window.localStorage.setItem("userName",a.userName),window.localStorage.setItem("avatarURL",a.avatarURL),window.localStorage.setItem("collections",r()(a.collections||[]))})},persistCollections:function(t,e){var a=t.commit,s=t.state;a("updateCollections",e),setTimeout(function(){window.localStorage.setItem("collections",r()(s.collections||[]))})}}});m.$axios=h.a;var v=m,f=a("/ocq"),p={name:"Avatar",props:{size:Number},data:function(){return{avatarStyle:{width:this.size+"px",height:this.size+"px"}}},computed:{avatarImgUrl:function(){return this.$store.state.avatarURL}},methods:{logout:function(){this.$store.dispatch("logout")}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"avatar-container",style:this.avatarStyle,on:{click:this.logout}},[e("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",width:this.size,height:this.size}},[e("path",{attrs:{d:"M776.226905 148.865176a471.312573 471.312573 0 0 1 82.338972 77.886834c24.000608 29.066834 44.572557 60.385324 61.767022 94.160167a492.805655 492.805655 0 0 1 52.453354 221.481087 481.137982 481.137982 0 0 1-36.589413 187.552723 491.526305 491.526305 0 0 1-98.765827 152.652053 469.470309 469.470309 0 0 1-146.10178 103.217965 429.145194 429.145194 0 0 1-179.620753 38.175807 426.074754 426.074754 0 0 1-178.546098-38.175807 475.201797 475.201797 0 0 1-146.61352-103.217965 480.882112 480.882112 0 0 1-98.868175-152.652053 488.711734 488.711734 0 0 1-36.026499-187.603897c0-37.971111 4.298616-75.276959 12.895849-111.815198 8.597233-36.589413 20.776645-71.336561 36.538239-104.292619A465.683433 465.683433 0 0 1 159.733684 233.762848c23.335346-28.657442 49.434087-54.500314 78.245051-77.375093 15.096331-11.514151 31.369664-15.761593 48.871174-12.947023 17.501509 2.916918 31.727882 11.872369 42.730293 26.917526 10.951237 15.045157 15.045157 31.881404 12.332935 50.508742a68.266121 68.266121 0 0 1-25.740524 45.135471 330.942281 330.942281 0 0 0-99.277567 121.538258 353.919409 353.919409 0 0 0-34.491279 154.801361c0 47.284779 8.597233 91.90851 25.68935 133.82002a347.16444 347.16444 0 0 0 70.517777 109.665889 337.18551 337.18551 0 0 0 104.957881 74.202306c40.171593 18.269119 82.901886 27.378092 128.190879 27.378092 45.237819 0 87.968112-9.108973 128.139706-27.378092a337.287858 337.287858 0 0 0 104.906707-74.202306 353.765887 353.765887 0 0 0 71.029517-109.665889c17.501509-41.962683 26.252264-86.53524 26.252264-133.82002a352.281841 352.281841 0 0 0-36.998805-158.588237 331.351673 331.351673 0 0 0-103.985575-123.073479 64.990985 64.990985 0 0 1-27.275744-44.111991c-3.121614-18.627337 0.51174-35.821803 10.797715-51.634569 10.285975-14.993983 24.358826-24.15413 42.218553-27.378092 17.859727-3.223962 34.286582 0.51174 49.382913 11.25828zM511.759654 545.514878c-17.859727 0-33.10958-6.65262-45.851907-19.855513a66.782075 66.782075 0 0 1-19.036729-47.898867V69.289601c0-18.627337 6.345576-34.798322 19.036729-48.359434 12.742327-13.612285 27.99218-20.469601 45.851907-20.469601 18.524989 0 34.081886 6.857316 46.824214 20.469601 12.691153 13.561111 19.036729 29.680922 19.036729 48.359434v408.522071c0 18.678511-6.345576 34.593626-19.036729 47.898867a62.432284 62.432284 0 0 1-46.824214 19.855513z",fill:"#BC3F4E","p-id":"1930"}})]),this._v(" "),e("img",{style:this.avatarStyle,attrs:{src:this.avatarImgUrl,alt:""}})])},staticRenderFns:[]};var _={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],class:{"input--background-animation":t.logining},attrs:{type:"text",placeholder:"Your Github username"},domProps:{value:t.userName},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||(t.userName=e.target.value)}}}),a("button",{attrs:{type:"submit"},on:{click:t.login}},[t._v("Login")])])},staticRenderFns:[]};var S={name:"HomePageHeader",components:{Avatar:a("VU/8")(p,g,!1,function(t){a("K2AC")},null,null).exports,LoginForm:a("VU/8")({name:"LoginForm",data:function(){return{userName:"",logining:!1}},methods:{login:function(){this.logining=!0,this.userName=this.userName.replace(/(^\s*)|(\s*$)/g,""),this.userName.length&&this.$store.dispatch("login",{userName:this.userName})}}},_,!1,function(t){a("fQAd")},null,null).exports},computed:{hasLogined:function(){return!!this.$store.state.userName.length}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"home-page-header"},[e("article",[e("section"),this._v(" "),e("section",[e("transition",{attrs:{name:"login-widget","enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp",mode:"out-in"}},[this.hasLogined?e("Avatar",{attrs:{size:42}}):e("LoginForm")],1)],1)])])},staticRenderFns:[]};var C=a("VU/8")(S,w,!1,function(t){a("sQS/")},null,null).exports,F=a("//Fk"),L=a.n(F),k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skeleton"},[e("div",{staticClass:"skeleton-image"}),this._v(" "),e("div",{staticClass:"skeleton-header"},[e("div",{staticClass:"skeleton-header-title"}),this._v(" "),e("div",{staticClass:"skeleton-header-button"})]),this._v(" "),e("div",{staticClass:"skeleton-body"},[e("div",{staticClass:"skeleton-body-line-one"}),this._v(" "),e("div",{staticClass:"skeleton-body-line-two"})]),this._v(" "),e("div",{staticClass:"skeleton-footer"},[e("div",{staticClass:"skeleton-footer-one"}),this._v(" "),e("div",{staticClass:"skeleton-footer-two"}),this._v(" "),e("div",{staticClass:"skeleton-footer-three"})])])}]};var N=a("VU/8")({name:"Skeleton"},k,!1,function(t){a("2TZk")},null,null).exports,b={name:"StarCard",props:["metaData","index"],data:function(){return{repository_url:"",title:"",img_url:"",description:"",language:"",issue_numeber:0,star_number:0,fork_number:0,haveUpdated:"",updatedTime:"",auth_home_url:"https://github.com/"+this.metaData.owner.login}},filters:{separationPath:function(t){return t.replace("/"," / ")}},methods:{collectRepository:function(){this.$emit("addToCollections",this.index)},getUpdatedTimeString:function(t){var e=(+new Date-new Date(t).getTime())/36e5;return e<24?"Updated "+Math.ceil(e)+" hours ago":"Updated "+Math.floor(e/24)+" days ago"},translateData:function(){this.metaData&&(this.repository_url=this.metaData.html_url,this.title=this.metaData.full_name,this.img_url=this.metaData.owner.avatar_url,this.description=this.metaData.description,this.language=this.metaData.language,this.issue_numeber=this.metaData.open_issues_count,this.star_number=this.metaData.stargazers_count,this.fork_number=this.metaData.forks_count,this.haveUpdated=this.getUpdatedTimeString(this.metaData.pushed_at),this.updatedTime=new Date(this.metaData.pushed_at))}},created:function(){this.translateData()}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"star-card"},[a("article",{staticClass:"star-card-main"},[a("header",{staticClass:"star-card-header"},[a("a",{staticClass:"star-card__avatar",attrs:{href:t.auth_home_url,target:"_blank"}},[a("svg",{staticClass:"star-card__avatar--back",attrs:{viewBox:"0 0 1024 1024",version:"1.1",width:"40",height:"40"}},[a("path",{attrs:{d:"M937.792 491.675L810.993 362.469c-10.356-10.603-32.157-10.603-42.513 0-10.791 10.989-10.791 31.786 0 42.775l126.799 129.248c5.744 5.838 7.833 20.905 4.569 31.185l-0.936 2.168c-3.699 8.95-8.79 18.072-18.602 18.072h-60.397c-2.371 0-4.308-0.193-6.832-0.429-1.24-0.129-2.35-0.236-3.329-0.236-11.118 0-11.118 10.839-11.118 16.033v164.082c0 50.223-35.66 81.043-61.224 81.043H625.863V578.706c0-7.126 0-16.011-9.834-16.011-0.783 0-1.632 0.086-3.307 0.258-1.567 0.172-3.503 0.386-6.157 0.386H411.34c-2.306 0-4.656-0.172-7.31-0.343-2.241-0.15-4.373-0.301-6.397-0.301-15.339 0-17.645 10.023-17.645 16.011v269.743h-91.423c-11.444 0-25.412-8.242-36.486-21.506-13.359-16.033-20.713-37.173-20.713-59.538V603.324c0-4.378 0-16.011-12.858-16.011-1.371 0-2.959 0.107-5.592 0.343-1.98 0.15-4.221 0.322-6.875 0.322h-60.375c-9.791 0-14.903-9.122-18.624-18.072a32.7 32.7 0 0 0-1.088-2.554c-1.458-2.962-4.069-17.75 4.765-26.742l366.277-377.4c6.614-6.718 10.77-8.091 14.991-8.091 6.658 0 10.574 1.588 14.991 6.095l140.876 141.482c10.313 10.56 32.135 10.56 42.491 0 10.813-11.01 10.77-31.851-0.174-42.99L569.448 126.573C556.263 113.138 539.641 112 525.085 112l-13.402 0.107-11.531-0.086c-15.883 0-32.483 1.309-45.69 16.612L86.161 497.835c-23.497 23.931-30.895 64.302-17.58 95.96 14.229 33.804 43.688 55.653 75.061 55.653h24.999v117.959c0 36.208 11.618 72.351 31.896 99.158C222.664 895.86 253.211 912 286.543 912h450.868c33.484 0 64.705-16.076 87.898-45.286 21.626-27.193 34.028-63.401 34.028-99.308V649.447h20.974c32.135 0 63.769-25.326 75.105-59.881 13.379-31.936 5.808-74.025-17.624-97.891zM565.161 624.851v223.598H438.667V624.851h126.494z",fill:"#FDC068","p-id":"4112"}})]),t._v(" "),a("img",{staticClass:"star-card__avatar--front",attrs:{src:t.img_url,alt:"logo"}})]),t._v(" "),a("div",{staticClass:"star-card-header__title"},[a("a",{attrs:{href:t.repository_url,target:"_blank"}},[t._v(t._s(t._f("separationPath")(t.title)))])]),t._v(" "),a("div",{staticClass:"star-card-header__buttons"},[t._t("default",[a("button",{attrs:{title:"collect"},on:{click:t.collectRepository}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",width:"30",height:"30"}},[a("path",{attrs:{d:"M875.157333 521.386667l74.709334-85.461334c26.090667-29.824 13.866667-67.52-24.768-76.309333L681.728 304.213333l-127.786667-214.677333c-20.288-34.069333-59.946667-34.090667-80.213333 0l-127.786667 214.677333-243.392 55.381334c-38.442667 8.746667-50.837333 46.506667-24.768 76.309333l164.394667 188.053333-22.613333 248.917334c-3.605333 39.466667 28.437333 62.805333 64.874666 47.146666l229.376-98.432-16.810666-39.210666-229.397334 98.453333c-6.698667 2.88-6.229333 3.221333-5.546666-4.096l24.256-267.093333-176.426667-201.813334c-4.757333-5.461333-4.885333-5.034667 2.133333-6.634666l261.205334-59.434667 137.173333-230.4c3.733333-6.293333 3.114667-6.293333 6.869333 0l137.152 230.4 261.205334 59.434667c7.125333 1.621333 6.954667 1.088 2.133333 6.613333l-74.709333 85.482667 32.106666 28.074666z m0 0l74.709334-85.461334c26.090667-29.824 13.866667-67.52-24.768-76.309333L681.728 304.213333l-127.786667-214.677333c-20.288-34.069333-59.946667-34.090667-80.213333 0l-127.786667 214.677333-243.392 55.381334c-38.442667 8.746667-50.837333 46.506667-24.768 76.309333l164.394667 188.053333-22.613333 248.917334c-3.605333 39.466667 28.437333 62.805333 64.874666 47.146666l229.376-98.432-16.810666-39.210666-229.397334 98.453333c-6.698667 2.88-6.229333 3.221333-5.546666-4.096l24.256-267.093333-176.426667-201.813334c-4.757333-5.461333-4.885333-5.034667 2.133333-6.634666l261.205334-59.434667 137.173333-230.4c3.733333-6.293333 3.114667-6.293333 6.869333 0l137.152 230.4 261.205334 59.434667c7.125333 1.621333 6.954667 1.088 2.133333 6.613333l-74.709333 85.482667 32.106666 28.074666z",fill:"#ffffff","p-id":"4550"}}),a("path",{attrs:{d:"M682.666667 917.333333a192 192 0 1 0 0-384 192 192 0 0 0 0 384z m0 42.666667c-129.6 0-234.666667-105.066667-234.666667-234.666667s105.066667-234.666667 234.666667-234.666666 234.666667 105.066667 234.666666 234.666666-105.066667 234.666667-234.666666 234.666667z",fill:"#ffffff","p-id":"4551"}}),a("path",{attrs:{d:"M769.429333 646.122667a21.333333 21.333333 0 0 1 29.930667 30.421333l-143.978667 141.653333a21.333333 21.333333 0 0 1-30.037333-0.106666l-64.426667-64.426667a21.333333 21.333333 0 0 1 30.165334-30.186667l49.472 49.472 128.853333-126.826666z",fill:"#ffffff","p-id":"4552"}})])])])],2)]),t._v(" "),a("p",{staticClass:"star-card-description"},[t._v(t._s(t.description))]),t._v(" "),a("footer",{staticClass:"star-card-footer"},[t.language?a("div",{staticClass:"star-card-footer-language"},[a("span",{staticClass:"star-card-footer-language-icon"}),t._v(" "+t._s(t.language))]):t._e(),t._v(" "),t.issue_numeber?a("div",{staticClass:"star-card-footer-issue"},[a("svg",{attrs:{viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}})]),t._v(t._s(t.issue_numeber)+"\n      ")]):t._e(),t._v(" "),t.star_number?a("div",{staticClass:"star-card-footer-star"},[a("svg",{attrs:{"aria-label":"star",viewBox:"0 0 14 16",version:"1.1",width:"14",height:"16",role:"img"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})]),t._v(t._s(t.star_number)+"\n      ")]):t._e(),t._v(" "),t.fork_number?a("div",{staticClass:"star-card-footer-fork"},[a("svg",{attrs:{viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})]),t._v(t._s(t.fork_number)+"\n      ")]):t._e(),t._v(" "),a("div",{staticClass:"star-card-footer-updated",attrs:{title:t.updatedTime}},[t._v(t._s(t.haveUpdated))])])]),t._v(" "),a("aside")])},staticRenderFns:[]};var T=a("VU/8")(b,y,!1,function(t){a("zrNS")},null,null).exports,x={name:"CollectCard",props:["metaData","index"],components:{StarCard:T},methods:{toTheTop:function(){this.$emit("toTheTop",this.index)},removeFromCollections:function(){this.$emit("removeFromCollections",this.index)}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("StarCard",{attrs:{metaData:this.metaData}},[e("button",{staticStyle:{"background-color":"#BC3F4E"},attrs:{title:"cancle collected"},on:{click:this.removeFromCollections}},[e("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",width:"30",height:"30"}},[e("path",{attrs:{d:"M949.888 457.258667c26.069333-29.824 13.866667-67.52-24.789333-76.309334L681.728 325.546667l-127.786667-214.677334c-20.266667-34.069333-59.925333-34.090667-80.213333 0l-127.786667 214.677334-243.370666 55.381333c-38.442667 8.746667-50.858667 46.506667-24.789334 76.309333l164.394667 188.053334-22.613333 248.917333c-3.584 39.466667 28.458667 62.805333 64.896 47.146667l237.781333-102.037334a21.333333 21.333333 0 0 0-16.810667-39.210666L267.626667 902.186667c-6.698667 2.88-6.229333 3.221333-5.568-4.096l24.277333-267.093334-176.426667-201.813333c-4.757333-5.461333-4.906667-5.034667 2.133334-6.634667l261.205333-59.434666 137.152-230.4c3.733333-6.293333 3.136-6.293333 6.869333 0l137.173334 230.4 261.205333 59.434666c7.125333 1.621333 6.954667 1.088 2.133333 6.613334l-176.426666 201.813333 24.256 267.093333a21.333333 21.333333 0 1 0 42.496-3.84l-22.613334-248.917333 164.394667-188.053333z",fill:"#ffffff","p-id":"4923"}})])]),this._v(" "),e("button",{staticStyle:{"background-color":"#FDC068"},attrs:{title:"to the top"},on:{click:this.toTheTop}},[e("svg",{staticClass:"icon",attrs:{t:"1534993217247",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8389","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"32",height:"32"}},[e("path",{attrs:{d:"M483.029333 286.165333l30.165334-30.208 415.957333 415.829334c16.426667 16.426667 16.64 43.648 0 60.288a42.538667 42.538667 0 0 1-60.330667 0.042666L513.28 376.746667l-355.242667 355.413333a42.496 42.496 0 0 1-60.288 0 42.837333 42.837333 0 0 1-0.085333-60.330667l383.701333-383.872 1.706667-1.749333z",fill:"#ffffff","p-id":"8390"}})])])])},staticRenderFns:[]},I={render:function(){var t=this.$createElement;return(this._self._c||t)("transition-group",{staticClass:"cards-container",attrs:{name:"cards-container",tag:"div","leave-active-class":"animated flipOutX when-cards-active","enter-active-class":"animated flipInX when-cards-active"}},[this._t("default")],2)},staticRenderFns:[]};var $={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"introduction"},[a("div",{staticClass:"introduction-content-wrapper"},[t._m(0),t._v(" "),a("p",{staticClass:"introduction__instruction"},[t._v("\n      马上加入吧，只需要在右上角输入你的 GitHub username"),t.shouldShowErrorNotice?t._e():a("span",[t._v("（请注意，不是登录邮箱哦）")]),t._v("。\n    ")]),t._v(" "),t.shouldShowErrorNotice?a("p",{staticClass:"introduction__instruction--notice animated infinite tada delay-2s"},[t._v("请注意，不是登录邮箱哦")]):t._e(),t._v(" "),a("p",{staticClass:"introduction__footer"},[t._v("Yours")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"introduction__presentation"},[e("span",{staticClass:"introduction__presentation__header"},[this._v("iGitStar")]),this._v(" 是管理 GitHub stars 的辅助工具，它是独立于 GitHub 的，而不会影响你的 GitHub 的数据。对于经常需要翻阅 stars 或者借助 stars 学习的用户非常适用，它可以帮你置顶你喜欢的 star 项目。\n    ")])}]};var D={name:"HomePageMain",components:{Skeleton:N,StarCard:T,CollectCard:a("VU/8")(x,U,!1,null,null,null).exports,CardContainer:a("VU/8")({name:"CardContainer"},I,!1,function(t){a("wtt+")},null,null).exports,Introduction:a("VU/8")({name:"Introduction",computed:{shouldShowErrorNotice:function(){return this.$store.state.noticeErrorUserName}}},$,!1,function(t){a("0aTT")},null,null).exports},data:function(){return{hasLoadedAllStars:!1,canShowIndication:!1,canShowStars:!1,shouldShowSkeleton:!0,isLoadingStars:!1,collectionsFromServer:[],starsFromServer:[],page:1,animationOutTime:1e3}},computed:{userName:function(){return this.$store.state.userName},collectionsFromLocal:function(){return this.$store.state.collections}},watch:{userName:{handler:function(t){var e=this;if(t.length){this.hasLoadedAllStars=!1,this.page=1;var a=this.collectionsFromLocal.length;if(this.collectionsFromLocal&&a>0){var s=0,o=void 0,i=!0;!function t(){o=e.collectionsFromLocal.slice(s,s+=7),e.getCollectionsFromServer(o,function(o){e.shouldShowSkeleton=!1,e.smoothInsertItemByTimeout(e.collectionsFromServer,o,void 0,function(){s>=a?e.canShowStars=!0:t(),e.canShowIndication=!0},i?(i=!1,500):0)})}()}else this.canShowStars=!0}else this.hasLoadedAllStars=!1,this.canShowIndication=!1,this.canShowStars=!1,this.shouldShowSkeleton=!0,this.isLoadingStars=!1,this.starsFromServer=[],this.collectionsFromServer=[],this.page=1,this.$store.dispatch("logout")},immediate:!0},canShowStars:{handler:function(t){var e=this;if(t){var a=function t(a){e.loadStars(function(s,o){e.shouldShowSkeleton=!1,e.smoothInsertItemByTimeout(s,o,function(){e.canShowIndication=!1},function(){e.canShowIndication=!0,e.isLoadingStars=!1,a&&e.onVisible(document.querySelector("section.indication"),function(){t(!1)})},0)})};!document.querySelector("section.indication")||document.querySelector("section.indication").getBoundingClientRect().top<window.innerHeight?a(!0):this.onVisible(document.querySelector("section.indication"),function(){a(!1)})}},immediate:!0}},methods:{getCollectionsFromServer:function(t,e,a){var s=this,o=t.map(function(t,e){return s.$axios.get("https://api.github.com/repos/"+t,{headers:{Accept:"application/vnd.github.v3+json"}})});L.a.all(o).then(function(t){e&&e(t.map(function(t){return t.data}))}).catch(function(t){a&&a(t)})},getStarsFromServer:function(t,e,a,s){this.$axios.get("https://api.github.com/users/"+t+"/starred",{headers:{Accept:"application/vnd.github.v3+json"},params:{page:e}}).then(function(t){200===t.status&&a&&a(t.data)}).catch(function(t){s&&s(t)})},getRepositoryFromServer:function(t,e,a){this.$axios.get("https://api.github.com/repos/"+t,{headers:{Accept:"application/vnd.github.v3+json"}}).then(function(t){e&&e(t.data)}).catch(function(t){a&&a(t)})},addToCollections:function(t){var e=this;this.starsFromServer[t].hasCollected||(this.$set(this.starsFromServer[t],"hasCollected",!0),setTimeout(function(){e.collectionsFromServer.unshift(e.starsFromServer[t])},this.animationOutTime),this.$store.dispatch("persistCollections",{type:"add",newItem:this.starsFromServer[t].full_name}))},repositoryToTop:function(t){0!==t&&(this.collectionsFromServer.unshift.apply(this.collectionsFromServer,this.collectionsFromServer.splice(t,1)),this.$store.dispatch("persistCollections",{type:"toTop",toTopIndex:t}))},removeFromCollections:function(t){var e=this,a=this.collectionsFromLocal[t];this.collectionsFromServer.splice(t,1),this.$store.dispatch("persistCollections",{type:"remove",removeIndex:t}),setTimeout(function(){e.starsFromServer.length&&e.starsFromServer.forEach(function(t){t.full_name===a&&e.$set(t,"hasCollected",!1)})},this.animationOutTime)},smoothInsertItemByTimeout:function(t,e,a,s,o){var i=0;a&&a();setTimeout(function(){!function a(){setTimeout(function(){i<e.length?(t.push(e[i++]),a()):s&&s()},200)}()},o||0)},loadStars:function(t){var e=this;this.hasLoadedAllStars||(this.isLoadingStars=!0,this.getStarsFromServer(this.userName,this.page++,function(a){a.length>=0?(a.length<30&&(e.hasLoadedAllStars=!0),e.collectionsFromLocal.length&&a.forEach(function(t){e.collectionsFromLocal.includes(t.full_name)&&(t.hasCollected=!0)}),t?t(e.starsFromServer,a):e.smoothInsertItemByTimeout(e.starsFromServer,a)):e.hasLoadedAllStars=!0}))},onVisible:function(t,e){var a=this,s=void 0;window.addEventListener("scroll",function(){clearTimeout(s),s=setTimeout(function(){!a.isLoadingStars&&t&&t.getBoundingClientRect().top<window.innerHeight&&e&&e()},200)})}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{mode:"out-in"}},[t.userName.length?a("article",{staticClass:"home-page-main"},[a("transition",{attrs:{name:"home-page-switcher",mode:"out-in"}},[t.shouldShowSkeleton?a("section",{staticClass:"skeleton-container"},t._l([1,2,3],function(t){return a("Skeleton",{key:t})})):a("div",{staticClass:"cards-container"},[a("CardContainer",[t._l(t.collectionsFromServer,function(e,s){return a("CollectCard",{key:e.full_name,attrs:{metaData:e,index:s},on:{toTheTop:t.repositoryToTop,removeFromCollections:t.removeFromCollections}})}),t._v(" "),t._l(t.starsFromServer,function(e,s){return e.hasCollected?t._e():a("StarCard",{key:e.full_name,attrs:{metaData:e,index:s},on:{addToCollections:t.addToCollections}})})],2)],1)]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:t.canShowIndication,expression:"canShowIndication"}],staticClass:"indication"},[a("transition",{attrs:{name:"indication-switcher",mode:"out-in","leave-active-class":"animated fadeOutDown"}},[t.hasLoadedAllStars?a("span",[t._v("—— · No More · ——")]):a("Skeleton")],1)],1)],1):a("Introduction")],1)},staticRenderFns:[]};var R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"home-page-footer"},[e("p",[this._v("Copyright © 2018")])])}]};var z={name:"HomePage",components:{HomePageHeader:C,HomePageBody:a("VU/8")(D,H,!1,function(t){a("ngJF")},null,null).exports,HomePageFooter:a("VU/8")({name:"HomePageFooter"},R,!1,function(t){a("CyA4")},null,null).exports}},E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-page"},[e("HomePageHeader"),this._v(" "),e("article",{staticClass:"home-page-main-container"},[e("HomePageBody"),this._v(" "),e("HomePageFooter")],1)],1)},staticRenderFns:[]};var A=a("VU/8")(z,E,!1,function(t){a("V+Du")},null,null).exports;s.a.use(f.a);var V=new f.a({routes:[{path:"/",name:"HomePage",component:A}]});a("1e2F"),a("kw8N");s.a.config.productionTip=!1,s.a.prototype.$axios=h.a,new s.a({el:"#app",router:V,store:v,components:{App:i},template:"<App/>",created:function(){this.$store.commit("initData"),this.$store.dispatch("login")}})},"V+Du":function(t,e){},fQAd:function(t,e){},kw8N:function(t,e){},ngJF:function(t,e){},"sQS/":function(t,e){},"wtt+":function(t,e){},zrNS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.67c1eb94a5f712fffe7e.js.map