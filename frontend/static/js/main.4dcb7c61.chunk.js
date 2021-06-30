(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(5),s=n.n(c),i=(n(3),n(2)),r=n(6),u=n(7),p=new(function(){function e(t){var n=t.address,a=t.token,o=t.groupId;Object(r.a)(this,e),this._address=n,this._token=a,this._groupId=o}return Object(u.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"getUserInformation",value:function(){var e=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"changeUserInformation",value:function(e,t){var n=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"putLike",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return t?fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._getResponseData(e)})):fetch("".concat(this._address,"/").concat(this._groupId,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return n._getResponseData(e)}))}}]),e}())({address:"https://mesto.nomoreparties.co/v1",token:"6df26ad6-4b0b-4694-ac83-2ab40c0d09c7",groupId:"cohort-19"}),l=n.p+"static/media/logo.bbe2a6ea.svg",d=n(0);var _=function(){return Object(d.jsx)("header",{className:"header",children:Object(d.jsx)("button",{href:"#",target:"_blank",className:"header__logo",children:Object(d.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e: Mesto"})})})},h=o.a.createContext(),j=o.a.createContext();var f=function(e){var t=o.a.useContext(h),n=o.a.useContext(j);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("button",{onClick:e.onEditAvatar,type:"button",className:"profile__change-avatar-button",children:Object(d.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsxs)("div",{className:"profile__wrap",children:[Object(d.jsx)("h1",{className:"profile__name",children:t.name}),Object(d.jsx)("button",{onClick:e.onEditProfile,type:"button",className:"profile__edit-button"})]}),Object(d.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(d.jsx)("button",{onClick:e.onAddPlace,type:"button",className:"profile__add-button"})]}),Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:"gallery-grid",children:n})})]})};var m=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){var t=o.a.useContext(h),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id}));return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("button",{type:"button",className:"".concat(n?"card__bin-button":"card__bin-button_hidden"),onClick:function(){e.delete(e.card)}}),Object(d.jsx)("img",{className:"card__img",src:e.card.link,alt:e.card.name,onClick:function(){e.selectImage(e.card)}}),Object(d.jsxs)("div",{className:"card__footer",children:[Object(d.jsx)("h2",{className:"card__title",children:e.card.name}),Object(d.jsxs)("div",{className:"card__wrap-like",children:[Object(d.jsx)("button",{type:"button",className:"card__like-button ".concat(a&&"card__like-button_active"),onClick:function(){e.like(e.card)}}),Object(d.jsx)("div",{className:"card__like-count",children:e.card.likes.length})]})]})]})};var O=function(e){return Object(d.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(d.jsxs)("form",{className:"popup__container popup__container_type_".concat(e.name),name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[Object(d.jsx)("h2",{className:"popup__title popup__title_type_".concat(e.name),children:"".concat(e.title)}),Object(d.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),e.children,Object(d.jsx)("button",{type:"submit",className:"popup__save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})};var g=function(e){return Object(d.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"bigger-img",children:Object(d.jsxs)("div",{className:"popup__bigger-img",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_small",id:"imgCloseButton",onClick:e.onClose}),Object(d.jsx)("img",{className:"popup__img",src:e.card&&e.card.link,alt:e.card&&e.card.name}),Object(d.jsx)("p",{className:"popup__img-title",children:e.card&&e.card.name})]})})};var v=function(e){var t=o.a.useContext(h),n=o.a.useState(""),a=Object(i.a)(n,2),c=a[0],s=a[1],r=o.a.useState(""),u=Object(i.a)(r,2),p=u[0],l=u[1];return o.a.useEffect((function(){s(t.name),l(t.about)}),[t]),Object(d.jsx)(O,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:p})},children:Object(d.jsxs)("div",{className:"popup__inputs",children:[Object(d.jsx)("input",{id:"name-input",type:"text",className:"popup__input popup__input_type_name",name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:c,onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"name-input-error",className:"popup__error"}),Object(d.jsx)("input",{id:"profession-input",type:"text",className:"popup__input popup__input_type_profession",name:"profession",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",minLength:"2",maxLength:"200",value:p,onChange:function(e){l(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"profession-input-error",className:"popup__error"})]})})};var x=function(e){var t=o.a.useContext(h),n=o.a.useRef("");return o.a.useEffect((function(){n.current.src=t.avatar}),[t]),Object(d.jsx)(O,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n.current.src})},children:Object(d.jsxs)("div",{className:"popup__inputs popup__inputs_tiny",children:[Object(d.jsx)("input",{id:"avatar-link-input",type:"url",className:"popup__input popup__input_type_avatar",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:n,onChange:function(e){n.current.src=e.target.value},required:!0}),Object(d.jsx)("span",{id:"avatar-link-input-error",className:"popup__error"})]})})};var k=function(e){var t=o.a.useState(""),n=Object(i.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),r=Object(i.a)(s,2),u=r[0],p=r[1];return Object(d.jsx)(O,{name:"place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:Object(d.jsxs)("div",{className:"popup__inputs popup__inputs_small",children:[Object(d.jsx)("input",{id:"place-input",type:"text",className:"popup__input popup__input_type_place",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"place-input-error",className:"popup__error"}),Object(d.jsx)("input",{id:"link-input",type:"url",className:"popup__input popup__input_type_link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"link-input-error",className:"popup__error"})]})})};var C=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=o.a.useState(!1),s=Object(i.a)(c,2),r=s[0],u=s[1],l=o.a.useState(!1),C=Object(i.a)(l,2),N=C[0],y=C[1],I=o.a.useState(),S=Object(i.a)(I,2),E=S[0],D=S[1],T=o.a.useState([]),P=Object(i.a)(T,2),L=P[0],U=P[1],R=o.a.useState([]),A=Object(i.a)(R,2),z=A[0],w=A[1];function q(e){var t=e.likes.some((function(e){return e._id===L._id}));p.changeLikeCardStatus(e._id,!t).then((function(t){var n=z.map((function(n){return n._id===e._id?t:n}));w(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043b\u0430\u0439\u043a\u0430")}))}function J(e){p.deleteCard(e._id).then((function(){var t=z.filter((function(t){return t._id!==e._id}));w(t)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}function F(){a(!1),u(!1),y(!1),D(null)}function B(e){D(e)}return o.a.useEffect((function(){p.getUserInformation().then((function(e){U(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}),[]),o.a.useEffect((function(){p.getInitialCards().then((function(e){w(e.map((function(e){return Object(d.jsx)(b,{id:e._id,selectImage:B,card:e,like:q,delete:J},e._id)})))})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a")}))}),[z]),Object(d.jsx)(h.Provider,{value:L,children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__container",children:[Object(d.jsx)(_,{}),Object(d.jsx)(j.Provider,{value:z,children:Object(d.jsx)(f,{onEditAvatar:function(){a(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){y(!0)}})}),Object(d.jsx)(m,{}),Object(d.jsx)(v,{isOpen:r,onClose:F,onUpdateUser:function(e){var t=e.name,n=e.about;p.changeUserInformation(t,n).then((function(e){U(e),u(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(d.jsx)(k,{isOpen:N,onClose:F,onAddPlace:function(e){var t=e.name,n=e.link;p.addNewCard({name:t,link:n}).then((function(){y(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438")}))}}),Object(d.jsx)(x,{isOpen:n,onClose:F,onUpdateAvatar:function(e){var t=e.avatar;p.changeUserAvatar(t).then((function(e){U(e),a(!1)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")}))}}),Object(d.jsx)(O,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:"",onClose:F}),Object(d.jsx)(g,{card:E,isOpen:E,onClose:F})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),N()},3:function(e,t,n){}},[[13,1,2]]]);
//# sourceMappingURL=main.4dcb7c61.chunk.js.map