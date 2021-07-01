(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),o=n.n(c),i=(n(5),n(23)),r=n(2),u=n(3),l=n(14),p=n(15),d=new(function(){function e(t){var n=t.address,a=t.token,s=t.groupId;Object(l.a)(this,e),this._address=n,this._token=a,this._groupId=s}return Object(p.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInformation",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"changeUserInformation",value:function(e,t){var n=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._getResponseData(e)}))}}]),e}())({address:"http://api.mesto.cards.nomoredomains.club"}),h=new(function(){function e(t){var n=t.address;Object(l.a)(this,e),this._address=n}return Object(p.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"register",value:function(e,t){var n=this;return fetch("".concat(this._address,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"authorize",value:function(e,t){var n=this;return fetch("".concat(this._address,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponseData(e)}))}}]),e}())({address:"http://api.mesto.cards.nomoredomains.club"}),j=n(9),_=n(0);var m=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(_.jsx)("section",{className:"getIn",children:Object(_.jsxs)("form",{className:"getIn__form",onSubmit:e.onRegister,children:[Object(_.jsx)("h2",{className:"getIn__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsxs)("div",{className:"getIn__inputs",children:[Object(_.jsx)("input",{id:"email-input",type:"email",className:"getIn__input",name:"email",placeholder:"Email",minLength:"2",maxLength:"30",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"email-input-error",className:"email__error"}),Object(_.jsx)("input",{id:"password-input",type:"password",className:"getIn__input",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"30",value:u,onChange:function(e){l(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"password-input-error",className:"password__error"})]}),Object(_.jsx)("button",{type:"submit",className:"getIn__submit-button",onClick:function(t){t.preventDefault(),a&&u&&e.onRegister(u,a).then((function(){c(""),l("")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")}))},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(_.jsxs)("p",{className:"getIn__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(_.jsx)(j.b,{to:"sign-in",className:"getIn__enter-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var b=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],p=i[1],d=Object(u.g)();return Object(_.jsx)("section",{className:"getIn",children:Object(_.jsxs)("form",{className:"getIn__form",onSubmit:e.onSubmit,children:[Object(_.jsx)("h2",{className:"getIn__title",children:"\u0412\u0445\u043e\u0434"}),Object(_.jsxs)("div",{className:"getIn__inputs",children:[Object(_.jsx)("input",{id:"email-input",type:"email",className:"getIn__input",name:"email",placeholder:"Email",minLength:"2",maxLength:"30",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"email-input-error",className:"email__error"}),Object(_.jsx)("input",{id:"password-input",type:"password",className:"getIn__input",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"30",value:l,onChange:function(e){p(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"password-input-error",className:"password__error"})]}),Object(_.jsx)("button",{type:"submit",className:"getIn__submit-button",onClick:function(t){t.preventDefault(),a&&l&&e.onLogin(l,a).then((function(){c(""),p("")})).then((function(){d.push("/main")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435")}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},f=n.p+"static/media/logo.bbe2a6ea.svg";var g=function(e){return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("button",{href:"#",target:"_blank",className:"header__logo",children:Object(_.jsx)("img",{src:f,alt:"\u041b\u043e\u0433\u043e: Mesto"})}),Object(_.jsx)(u.b,{exact:!0,path:"/main",children:Object(_.jsxs)("div",{className:"header__side-wrap",children:[Object(_.jsx)("p",{className:"header__email",children:e.userEmail}),Object(_.jsx)("button",{className:"header__button",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(_.jsx)(u.b,{path:"/sign-up",children:Object(_.jsx)("div",{className:"header__side-wrap",children:Object(_.jsx)(j.b,{to:"sign-in",className:"header__button",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(_.jsx)(u.b,{path:"/sign-in",children:Object(_.jsx)("div",{className:"header__side-wrap",children:Object(_.jsx)(j.b,{to:"sign-up",className:"header__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})})]})},O=s.a.createContext();var x=function(e){var t=s.a.useContext(O),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id})),c="".concat(n?"card__bin-button":"card__bin-button_hidden"),o="card__like-button ".concat(a&&"card__like-button_active");return Object(_.jsxs)("li",{className:"card",children:[Object(_.jsx)("button",{type:"button",className:c,onClick:function(){e.deleteButton(e.card)}}),Object(_.jsx)("img",{className:"card__img",src:e.card.link,alt:e.card.name,onClick:function(){e.selectImage(e.card)}}),Object(_.jsxs)("div",{className:"card__footer",children:[Object(_.jsx)("h2",{className:"card__title",children:e.card.name}),Object(_.jsxs)("div",{className:"card__wrap-like",children:[Object(_.jsx)("button",{type:"button",className:o,onClick:function(){e.likeButton(e.card)}}),Object(_.jsx)("div",{className:"card__like-count",children:e.card.likes.length})]})]})]})};var v=function(e){var t=s.a.useContext(O);return Object(_.jsxs)("main",{className:"content",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__change-avatar-button",children:Object(_.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{className:"profile__wrap",children:[Object(_.jsx)("h1",{className:"profile__name",children:t.name}),Object(_.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(_.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(_.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(_.jsx)("section",{children:Object(_.jsx)("ul",{className:"gallery-grid",children:e.cards.map((function(t){return Object(_.jsx)(x,{id:t._id,card:t,selectImage:e.onCardClick,likeButton:e.onCardLike,deleteButton:e.onCardDelete},t._id)}))})})]})};var N=function(e){return e.loggedIn?Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})}):Object(_.jsx)(_.Fragment,{})};var k=function(e){return Object(_.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(_.jsxs)("form",{className:"popup__container popup__container_type_".concat(e.name),name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[Object(_.jsx)("h2",{className:"popup__title popup__title_type_".concat(e.name),children:"".concat(e.title)}),Object(_.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children,Object(_.jsx)("button",{type:"submit",className:"popup__save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var C=function(e){return Object(_.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"bigger-img",children:Object(_.jsxs)("div",{className:"popup__bigger-img",children:[Object(_.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_small",id:"imgCloseButton",onClick:e.onClose}),Object(_.jsx)("img",{className:"popup__img",src:e.card&&e.card.link,alt:e.card&&e.card.name}),Object(_.jsx)("p",{className:"popup__img-title",children:e.card&&e.card.name})]})})};var y=function(e){var t=s.a.useContext(O),n=s.a.useState(""),a=Object(r.a)(n,2),c=a[0],o=a[1],i=s.a.useState(""),u=Object(r.a)(i,2),l=u[0],p=u[1];return s.a.useEffect((function(){o(t.name||""),p(t.about||"")}),[t]),Object(_.jsx)(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:l})},children:Object(_.jsxs)("div",{className:"popup__inputs",children:[Object(_.jsx)("input",{id:"name-input",type:"text",className:"popup__input popup__input_type_name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:c,onChange:function(e){o(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"name-input-error",className:"popup__error"}),Object(_.jsx)("input",{id:"profession-input",type:"text",className:"popup__input popup__input_type_profession",name:"profession",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",minLength:"2",maxLength:"200",value:l,onChange:function(e){p(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"profession-input-error",className:"popup__error"})]})})};var I=function(e){var t=s.a.useRef("");return Object(_.jsx)(k,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},children:Object(_.jsxs)("div",{className:"popup__inputs popup__inputs_tiny",children:[Object(_.jsx)("input",{id:"avatar-link-input",type:"url",className:"popup__input popup__input_type_avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(_.jsx)("span",{id:"avatar-link-input-error",className:"popup__error"})]})})};var S=function(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(_.jsx)(k,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),c(""),l("")},children:Object(_.jsxs)("div",{className:"popup__inputs popup__inputs_small",children:[Object(_.jsx)("input",{id:"place-input",type:"text",className:"popup__input popup__input_type_place",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"place-input-error",className:"popup__error"}),Object(_.jsx)("input",{id:"link-input",type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:u,onChange:function(e){l(e.target.value)},required:!0}),Object(_.jsx)("span",{id:"link-input-error",className:"popup__error"})]})})};var w=function(e){return Object(_.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(_.jsxs)("div",{className:"popup__container",children:[Object(_.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children]})})},L=n.p+"static/media/success.a9eb6caf.svg";var D=function(e){return Object(_.jsx)(w,{isOpen:e.isOpen,onClose:e.onClose,children:Object(_.jsxs)("div",{className:"popup__info-wrap",children:[Object(_.jsx)("img",{src:L,alt:"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(_.jsx)("h2",{className:"popup__title popup__title_info",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})},E=n.p+"static/media/error.d4ce2a26.svg";var T=function(e){return Object(_.jsx)(w,{isOpen:e.isOpen,onClose:e.onClose,children:Object(_.jsxs)("div",{className:"popup__info-wrap",children:[Object(_.jsx)("img",{src:E,alt:"\u041e\u0448\u0438\u0431\u043a\u0430"}),Object(_.jsx)("h2",{className:"popup__title popup__title_info",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},R=n(24),P=n(25),U=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(_.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(_.jsx)(t,Object(R.a)({},n)):Object(_.jsx)(u.a,{to:"./sign-in"})}})};var A=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=s.a.useState(""),o=Object(r.a)(c,2),l=o[0],p=o[1],j=s.a.useState(!1),f=Object(r.a)(j,2),x=f[0],w=f[1],L=s.a.useState(!1),E=Object(r.a)(L,2),R=E[0],P=E[1],A=Object(u.g)(),z=s.a.useCallback((function(){var e=localStorage.getItem("jwt");e&&h.getUserInfo(e).then((function(e){p(e.data.email),a(!0),A.push("/main")})).catch((function(){A.push("/sign-in")}))}),[A]);s.a.useEffect((function(){z()}),[z]),s.a.useEffect((function(){if(n){var e=localStorage.getItem("jwt");e&&h.getUserInfo(e).then((function(e){p(e.data.email)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),[n]);var q=s.a.useState(!1),B=Object(r.a)(q,2),J=B[0],F=B[1],M=s.a.useState(!1),H=Object(r.a)(M,2),G=H[0],K=H[1],Q=s.a.useState(!1),V=Object(r.a)(Q,2),W=V[0],X=V[1],Y=s.a.useState([]),Z=Object(r.a)(Y,2),$=Z[0],ee=Z[1],te=s.a.useState(),ne=Object(r.a)(te,2),ae=ne[0],se=ne[1],ce=s.a.useState({}),oe=Object(r.a)(ce,2),ie=oe[0],re=oe[1];function ue(){F(!1),K(!1),X(!1),se(null),w(null),P(null)}return s.a.useEffect((function(){d.getUserInformation().then((function(e){re(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}),[]),s.a.useEffect((function(){d.getInitialCards().then((function(e){ee(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a")}))}),[]),Object(_.jsx)(O.Provider,{value:ie,children:Object(_.jsx)("div",{className:"page",children:Object(_.jsxs)("div",{className:"page__container",children:[Object(_.jsx)(g,{onSignOut:function(){localStorage.removeItem("jwt"),p(null),a(!1),A.push("/sign-in")},userEmail:l}),Object(_.jsxs)(u.d,{children:[Object(_.jsx)(U,{path:"/main",loggedIn:n,component:v,onEditAvatar:function(){F(!0)},onEditProfile:function(){K(!0)},onAddPlace:function(){X(!0)},onCardClick:function(e){se(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ie._id}));d.changeLikeCardStatus(e._id,!t).then((function(t){var n=$.map((function(n){return n._id===e._id?t:n}));ee(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430")}))},onCardDelete:function(e){d.deleteCard(e._id).then((function(){var t=$.filter((function(t){return t._id!==e._id}));ee(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))},cards:$}),Object(_.jsx)(u.b,{path:"/sign-up",children:Object(_.jsx)(m,{onRegister:function(e,t){return h.register(e,t).then((function(e){return w(!0),A.push("/sign-in"),e})).catch((function(){P(!0)}))}})}),Object(_.jsx)(u.b,{path:"/sign-in",children:Object(_.jsx)(b,{onLogin:function(e,t){return h.authorize(e,t).then((function(e){e&&(a(!0),localStorage.setItem("jwt",e.token))})).catch((function(){P(!0)}))}})}),Object(_.jsx)(u.b,{children:n?Object(_.jsx)(u.a,{to:"/main"}):Object(_.jsx)(u.a,{to:"/sign-up"})})]}),Object(_.jsx)(N,{loggedIn:n}),Object(_.jsx)(D,{isOpen:x,onClose:ue}),Object(_.jsx)(T,{isOpen:R,onClose:ue}),Object(_.jsx)(y,{isOpen:G,onClose:ue,onUpdateUser:function(e){var t=e.name,n=e.about;d.changeUserInformation(t,n).then((function(e){re(e),K(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(_.jsx)(S,{isOpen:W,onClose:ue,onAddPlace:function(e){var t=e.name,n=e.link;d.addNewCard({name:t,link:n}).then((function(e){ee([e].concat(Object(i.a)($))),X(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}}),Object(_.jsx)(I,{isOpen:J,onClose:ue,onUpdateAvatar:function(e){var t=e.avatar;d.changeUserAvatar(t).then((function(e){re(e),F(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(_.jsx)(k,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:"",onClose:ue}),Object(_.jsx)(C,{card:ae,isOpen:ae,onClose:ue})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(_.jsx)(s.a.StrictMode,{children:Object(_.jsx)(j.a,{children:Object(_.jsx)(A,{})})}),document.getElementById("root")),z()},5:function(e,t,n){}},[[36,1,2]]]);
//# sourceMappingURL=main.f0263dcd.chunk.js.map