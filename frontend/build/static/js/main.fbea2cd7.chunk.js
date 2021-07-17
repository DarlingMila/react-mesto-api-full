(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),o=n.n(s),r=(n(5),n(23)),i=n(2),u=n(3),l=n(14),p=n(15),d=new(function(){function e(t){var n=t.address,a=t.token,c=t.groupId;Object(l.a)(this,e),this._address=n,this._token=a,this._groupId=c}return Object(p.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(e){var t=this;return fetch("".concat(this._address,"/cards"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this,a=e.name,c=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({name:a,link:c})}).then((function(e){return n._getResponseData(e)}))}},{key:"deleteCard",value:function(e,t){var n=this;return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return n._getResponseData(e)}))}},{key:"getUserInformation",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeUserInformation",value:function(e,t,n){var a=this;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({name:e,about:t})}).then((function(e){return a._getResponseData(e)}))}},{key:"changeUserAvatar",value:function(e,t){var n=this;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({avatar:e})}).then((function(e){return n._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t,n){var a=this;return t?fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return a._getResponseData(e)})):fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return a._getResponseData(e)}))}}]),e}())({address:"http://api.mesto.cards.nomoredomains.club"}),j=new(function(){function e(t){var n=t.address;Object(l.a)(this,e),this._address=n}return Object(p.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"register",value:function(e,t){var n=this;return fetch("".concat(this._address,"/sign-up"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"authorize",value:function(e,t){var n=this;return fetch("".concat(this._address,"/sign-in"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"getUserInfo",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return t._getResponseData(e)}))}}]),e}())({address:"http://api.mesto.cards.nomoredomains.club"}),h=n(9),m=n(0);var b=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),r=Object(i.a)(o,2),u=r[0],l=r[1];return Object(m.jsx)("section",{className:"getIn",children:Object(m.jsxs)("form",{className:"getIn__form",onSubmit:e.onRegister,children:[Object(m.jsx)("h2",{className:"getIn__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)("div",{className:"getIn__inputs",children:[Object(m.jsx)("input",{id:"email-input",type:"email",className:"getIn__input",name:"email",placeholder:"Email",minLength:"2",maxLength:"30",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"email-input-error",className:"email__error"}),Object(m.jsx)("input",{id:"password-input",type:"password",className:"getIn__input",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"30",value:u,onChange:function(e){l(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"password-input-error",className:"password__error"})]}),Object(m.jsx)("button",{type:"submit",className:"getIn__submit-button",onClick:function(t){t.preventDefault(),a&&u&&e.onRegister(u,a).then((function(){s(""),l("")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")}))},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(m.jsxs)("p",{className:"getIn__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(m.jsx)(h.b,{to:"sign-in",className:"getIn__enter-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})};var _=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),r=Object(i.a)(o,2),l=r[0],p=r[1],d=Object(u.g)();return Object(m.jsx)("section",{className:"getIn",children:Object(m.jsxs)("form",{className:"getIn__form",onSubmit:e.onSubmit,children:[Object(m.jsx)("h2",{className:"getIn__title",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsxs)("div",{className:"getIn__inputs",children:[Object(m.jsx)("input",{id:"email-input",type:"email",className:"getIn__input",name:"email",placeholder:"Email",minLength:"2",maxLength:"30",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"email-input-error",className:"email__error"}),Object(m.jsx)("input",{id:"password-input",type:"password",className:"getIn__input",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"30",value:l,onChange:function(e){p(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"password-input-error",className:"password__error"})]}),Object(m.jsx)("button",{type:"submit",className:"getIn__submit-button",onClick:function(t){t.preventDefault(),a&&l&&e.onLogin(l,a).then((function(){s(""),p("")})).then((function(){d.push("/main")})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435")}))},children:"\u0412\u043e\u0439\u0442\u0438"})]})})},f=n.p+"static/media/logo.bbe2a6ea.svg";var g=function(e){return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("button",{href:"#",target:"_blank",className:"header__logo",children:Object(m.jsx)("img",{src:f,alt:"\u041b\u043e\u0433\u043e: Mesto"})}),Object(m.jsx)(u.b,{exact:!0,path:"/main",children:Object(m.jsxs)("div",{className:"header__side-wrap",children:[Object(m.jsx)("p",{className:"header__email",children:e.userEmail}),Object(m.jsx)("button",{className:"header__button",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(m.jsx)(u.b,{path:"/sign-up",children:Object(m.jsx)("div",{className:"header__side-wrap",children:Object(m.jsx)(h.b,{to:"sign-in",className:"header__button",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(m.jsx)(u.b,{path:"/sign-in",children:Object(m.jsx)("div",{className:"header__side-wrap",children:Object(m.jsx)(h.b,{to:"sign-up",className:"header__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})})]})},O=c.a.createContext();var x=function(e){var t=c.a.useContext(O),n=e.card.owner===t._id,a=e.card.likes.some((function(e){return e===t._id})),s="".concat(n?"card__bin-button":"card__bin-button_hidden"),o="card__like-button ".concat(a&&"card__like-button_active");return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("button",{type:"button",className:s,onClick:function(){e.deleteButton(e.card)}}),Object(m.jsx)("img",{className:"card__img",src:e.card.link,alt:e.card.name,onClick:function(){e.selectImage(e.card)}}),Object(m.jsxs)("div",{className:"card__footer",children:[Object(m.jsx)("h2",{className:"card__title",children:e.card.name}),Object(m.jsxs)("div",{className:"card__wrap-like",children:[Object(m.jsx)("button",{type:"button",className:o,onClick:function(){e.likeButton(e.card)}}),Object(m.jsx)("div",{className:"card__like-count",children:e.card.likes.length})]})]})]})};var v=function(e){var t=c.a.useContext(O);return Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__change-avatar-button",children:Object(m.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsxs)("div",{className:"profile__wrap",children:[Object(m.jsx)("h1",{className:"profile__name",children:t.name}),Object(m.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(m.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(m.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(m.jsx)("section",{children:Object(m.jsx)("ul",{className:"gallery-grid",children:e.cards.map((function(t){return Object(m.jsx)(x,{id:t._id,card:t,selectImage:e.onCardClick,likeButton:e.onCardLike,deleteButton:e.onCardDelete},t._id)})).reverse()})})]})};var N=function(e){return e.loggedIn?Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})}):Object(m.jsx)(m.Fragment,{})};var C=function(e){return Object(m.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(m.jsxs)("form",{className:"popup__container popup__container_type_".concat(e.name),name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[Object(m.jsx)("h2",{className:"popup__title popup__title_type_".concat(e.name),children:"".concat(e.title)}),Object(m.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children,Object(m.jsx)("button",{type:"submit",className:"popup__save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var k=function(e){return Object(m.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"bigger-img",children:Object(m.jsxs)("div",{className:"popup__bigger-img",children:[Object(m.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_small",id:"imgCloseButton",onClick:e.onClose}),Object(m.jsx)("img",{className:"popup__img",src:e.card&&e.card.link,alt:e.card&&e.card.name}),Object(m.jsx)("p",{className:"popup__img-title",children:e.card&&e.card.name})]})})};var y=function(e){var t=c.a.useContext(O),n=c.a.useState(""),a=Object(i.a)(n,2),s=a[0],o=a[1],r=c.a.useState(""),u=Object(i.a)(r,2),l=u[0],p=u[1];return c.a.useEffect((function(){o(t.name||""),p(t.about||"")}),[t]),Object(m.jsx)(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:Object(m.jsxs)("div",{className:"popup__inputs",children:[Object(m.jsx)("input",{id:"name-input",type:"text",className:"popup__input popup__input_type_name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:s,onChange:function(e){o(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"name-input-error",className:"popup__error"}),Object(m.jsx)("input",{id:"profession-input",type:"text",className:"popup__input popup__input_type_profession",name:"profession",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",minLength:"2",maxLength:"200",value:l,onChange:function(e){p(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"profession-input-error",className:"popup__error"})]})})};var S=function(e){var t=c.a.useRef("");return Object(m.jsx)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},children:Object(m.jsxs)("div",{className:"popup__inputs popup__inputs_tiny",children:[Object(m.jsx)("input",{id:"avatar-link-input",type:"url",className:"popup__input popup__input_type_avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(m.jsx)("span",{id:"avatar-link-input-error",className:"popup__error"})]})})};var I=function(e){var t=c.a.useState(""),n=Object(i.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),r=Object(i.a)(o,2),u=r[0],l=r[1];return Object(m.jsx)(C,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u}),s(""),l("")},children:Object(m.jsxs)("div",{className:"popup__inputs popup__inputs_small",children:[Object(m.jsx)("input",{id:"place-input",type:"text",className:"popup__input popup__input_type_place",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:a,onChange:function(e){s(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"place-input-error",className:"popup__error"}),Object(m.jsx)("input",{id:"link-input",type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:u,onChange:function(e){l(e.target.value)},required:!0}),Object(m.jsx)("span",{id:"link-input-error",className:"popup__error"})]})})};var w=function(e){return Object(m.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children]})})},L=n.p+"static/media/success.a9eb6caf.svg";var D=function(e){return Object(m.jsx)(w,{isOpen:e.isOpen,onClose:e.onClose,children:Object(m.jsxs)("div",{className:"popup__info-wrap",children:[Object(m.jsx)("img",{src:L,alt:"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsx)("h2",{className:"popup__title popup__title_info",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]})})},A=n.p+"static/media/error.d4ce2a26.svg";var E=function(e){return Object(m.jsx)(w,{isOpen:e.isOpen,onClose:e.onClose,children:Object(m.jsxs)("div",{className:"popup__info-wrap",children:[Object(m.jsx)("img",{src:A,alt:"\u041e\u0448\u0438\u0431\u043a\u0430"}),Object(m.jsx)("h2",{className:"popup__title popup__title_info",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},T=n(24),R=n(25),P=function(e){var t=e.component,n=Object(R.a)(e,["component"]);return Object(m.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(m.jsx)(t,Object(T.a)({},n)):Object(m.jsx)(u.a,{to:"./sign-in"})}})};var B=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(""),o=Object(i.a)(s,2),l=o[0],p=o[1],h=c.a.useState(!1),f=Object(i.a)(h,2),x=f[0],w=f[1],L=c.a.useState(!1),A=Object(i.a)(L,2),T=A[0],R=A[1],B=Object(u.g)(),U=c.a.useCallback((function(){var e=localStorage.getItem("jwt");e&&j.getUserInfo(e).then((function(e){p(e.user.email),a(!0),B.push("/main")})).catch((function(){B.push("/sign-in")}))}),[B]);c.a.useEffect((function(){U()}),[U]),c.a.useEffect((function(){if(n){var e=localStorage.getItem("jwt");e&&j.getUserInfo(e).then((function(e){p(e.user.email)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u043f\u043e\u0447\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),[n]);var z=c.a.useState(!1),q=Object(i.a)(z,2),J=q[0],F=q[1],M=c.a.useState(!1),H=Object(i.a)(M,2),G=H[0],K=H[1],Q=c.a.useState(!1),V=Object(i.a)(Q,2),W=V[0],X=V[1],Y=c.a.useState([]),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=c.a.useState(),ne=Object(i.a)(te,2),ae=ne[0],ce=ne[1],se=c.a.useState({}),oe=Object(i.a)(se,2),re=oe[0],ie=oe[1];function ue(){F(!1),K(!1),X(!1),ce(null),w(null),R(null)}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");d.getUserInformation(e).then((function(e){var t=e.user;ie(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}),[n]),c.a.useEffect((function(){var e=localStorage.getItem("jwt");d.getInitialCards(e).then((function(e){ee(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a")}))}),[n]),Object(m.jsx)(O.Provider,{value:re,children:Object(m.jsx)("div",{className:"page",children:Object(m.jsxs)("div",{className:"page__container",children:[Object(m.jsx)(g,{onSignOut:function(){localStorage.removeItem("jwt"),p(null),a(!1),B.push("/sign-in")},userEmail:l}),Object(m.jsxs)(u.d,{children:[Object(m.jsx)(P,{path:"/main",loggedIn:n,component:v,onEditAvatar:function(){F(!0)},onEditProfile:function(){K(!0)},onAddPlace:function(){X(!0)},onCardClick:function(e){ce(e)},onCardLike:function(e){var t=localStorage.getItem("jwt"),n=e.likes.some((function(e){return e===re._id}));d.changeLikeCardStatus(e._id,!n,t).then((function(t){var n=$.map((function(n){return n._id===e._id?t.card:n}));ee(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430")}))},onCardDelete:function(e){var t=localStorage.getItem("jwt");d.deleteCard(e._id,t).then((function(){var t=$.filter((function(t){return t._id!==e._id}));ee(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))},cards:$}),Object(m.jsx)(u.b,{path:"/sign-up",children:Object(m.jsx)(b,{onRegister:function(e,t){return j.register(e,t).then((function(e){return w(!0),B.push("/sign-in"),e})).catch((function(){R(!0)}))}})}),Object(m.jsx)(u.b,{path:"/sign-in",children:Object(m.jsx)(_,{onLogin:function(e,t){return j.authorize(e,t).then((function(e){e&&(a(!0),localStorage.setItem("jwt",e.token))})).catch((function(){R(!0)}))}})}),Object(m.jsx)(u.b,{children:n?Object(m.jsx)(u.a,{to:"/main"}):Object(m.jsx)(u.a,{to:"/sign-up"})})]}),Object(m.jsx)(N,{loggedIn:n}),Object(m.jsx)(D,{isOpen:x,onClose:ue}),Object(m.jsx)(E,{isOpen:T,onClose:ue}),Object(m.jsx)(y,{isOpen:G,onClose:ue,onUpdateUser:function(e){var t=e.name,n=e.about,a=localStorage.getItem("jwt");d.changeUserInformation(t,n,a).then((function(e){ie(e),K(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(m.jsx)(I,{isOpen:W,onClose:ue,onAddPlace:function(e){var t=e.name,n=e.link,a=localStorage.getItem("jwt");d.addNewCard({name:t,link:n},a).then((function(e){ee([].concat(Object(r.a)($),[e.card])),X(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}}),Object(m.jsx)(S,{isOpen:J,onClose:ue,onUpdateAvatar:function(e){var t=e.avatar,n=localStorage.getItem("jwt");d.changeUserAvatar(t,n).then((function(e){ie(e),F(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(m.jsx)(C,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:"",onClose:ue}),Object(m.jsx)(k,{card:ae,isOpen:ae,onClose:ue})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(B,{})})}),document.getElementById("root")),U()},5:function(e,t,n){}},[[36,1,2]]]);
//# sourceMappingURL=main.fbea2cd7.chunk.js.map