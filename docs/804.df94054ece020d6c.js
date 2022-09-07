"use strict";(self.webpackChunkpersonal_project_angular=self.webpackChunkpersonal_project_angular||[]).push([[804],{2804:(Z,_,l)=>{l.r(_),l.d(_,{LoginModule:()=>y});var d=l(6895),h=l(529),m=l(1068),t=l(433),o=l(8274),w=l(7991);function C(n,i){1&n&&(o.TgZ(0,"p",17),o._uU(1," Email is Required "),o.qZA())}function P(n,i){1&n&&(o.TgZ(0,"p",17),o._uU(1," Please enter a valid email address "),o.qZA())}function b(n,i){1&n&&(o.TgZ(0,"p",17),o._uU(1," Password is Required "),o.qZA())}function M(n,i){1&n&&(o.TgZ(0,"p",17),o._uU(1," Password must be at least 8 characters in length "),o.qZA())}const f=function(n){return{error:n}},O=function(n,i){return{"fa-eye":n,"fa-eye-slash":i}};let v=(()=>{class n{constructor(r,e){this.loginService=r,this.router=e,this.loginFormGroup=new t.cw({email:new t.NI("",[t.kI.required,t.kI.email]),password:new t.NI("",[t.kI.required,t.kI.minLength(7)])}),this.passwordType="password",this.showPasswordIcon=!0}ngOnInit(){}loginUser(){this.loginFormGroup.valid&&this.loginService.loginUser(this.loginFormGroup.value).subscribe(r=>{r.user&&(this.loginService.loggedUser=r,this.router.navigate(["/user"]),localStorage.setItem("token",JSON.stringify(r)),this.loginService.isLogged=!0)})}showPassword(){"password"===this.passwordType?(this.passwordType="text",this.showPasswordIcon=!1):(this.passwordType="password",this.showPasswordIcon=!0)}}return n.\u0275fac=function(r){return new(r||n)(o.Y36(w.r),o.Y36(m.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:27,vars:16,consts:[[1,"wrapper"],[1,"rocket"],["src","assets/images/bg-images/rocket.png","alt",""],[1,"login",3,"formGroup"],[1,"login__title"],[1,"login__inputs"],[1,"form__group","field",3,"ngClass"],["type","email","placeholder","Email","formControlName","email","id","name",1,"login__input","form__field"],["for","name",1,"form__label"],["class","error__message",4,"ngIf"],["id","password","placeholder","Password","formControlName","password",1,"login__input","form__field",3,"type"],["for","password",1,"form__label"],[1,"show-password",3,"click"],[1,"fa-solid",3,"ngClass"],[1,"to-register"],["routerLink","/register"],["type","submit",1,"login__submit",3,"click"],[1,"error__message"]],template:function(r,e){if(1&r&&(o.TgZ(0,"div",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"form",3)(4,"h1",4),o._uU(5,"Log In"),o.qZA(),o.TgZ(6,"div",5)(7,"div",6),o._UZ(8,"input",7),o.TgZ(9,"label",8),o._uU(10,"Email"),o.qZA(),o.YNc(11,C,2,0,"p",9),o.YNc(12,P,2,0,"p",9),o.qZA(),o.TgZ(13,"div",6),o._UZ(14,"input",10),o.TgZ(15,"label",11),o._uU(16,"Password"),o.qZA(),o.TgZ(17,"span",12),o.NdJ("click",function(){return e.showPassword()}),o._UZ(18,"i",13),o.qZA(),o.YNc(19,b,2,0,"p",9),o.YNc(20,M,2,0,"p",9),o.qZA(),o.TgZ(21,"p",14),o._uU(22," New to Best-Page? "),o.TgZ(23,"a",15),o._uU(24," Create Account"),o.qZA()(),o.TgZ(25,"button",16),o.NdJ("click",function(){return e.loginUser()}),o._uU(26," Log In "),o.qZA()()()()),2&r){let s,g,p,u,c,a;o.xp6(3),o.Q6J("formGroup",e.loginFormGroup),o.xp6(4),o.Q6J("ngClass",o.VKq(9,f,!(null!=(s=e.loginFormGroup.get("email"))&&s.valid)&&(null==(s=e.loginFormGroup.get("email"))?null:s.touched))),o.xp6(4),o.Q6J("ngIf",""===(null==(g=e.loginFormGroup.get("email"))?null:g.value)&&(null==(g=e.loginFormGroup.get("email"))?null:g.touched)),o.xp6(1),o.Q6J("ngIf",!(null!=(p=e.loginFormGroup.get("email"))&&p.valid)&&""!==(null==(p=e.loginFormGroup.get("email"))?null:p.value)),o.xp6(1),o.Q6J("ngClass",o.VKq(11,f,!(null!=(u=e.loginFormGroup.get("password"))&&u.valid)&&(null==(u=e.loginFormGroup.get("password"))?null:u.touched))),o.xp6(1),o.Q6J("type",e.passwordType),o.xp6(4),o.Q6J("ngClass",o.WLB(13,O,!e.showPasswordIcon,e.showPasswordIcon)),o.xp6(1),o.Q6J("ngIf",""===(null==(c=e.loginFormGroup.get("password"))?null:c.value)&&(null==(c=e.loginFormGroup.get("password"))?null:c.touched)),o.xp6(1),o.Q6J("ngIf",(null==(a=e.loginFormGroup.get("password"))?null:a.touched)&&""!==(null==(a=e.loginFormGroup.get("password"))?null:a.value)&&(null==(a=e.loginFormGroup.get("password"))?null:a.value).length<8)}},dependencies:[t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u,d.mk,d.O5,m.yS],styles:[".wrapper[_ngcontent-%COMP%]{margin-top:50px;max-width:1148px;padding:15px;display:flex;justify-content:space-evenly}.rocket[_ngcontent-%COMP%]{width:200px}.rocket[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%}@media (max-width: 540px){.rocket[_ngcontent-%COMP%]{display:none}}.login[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.login__title[_ngcontent-%COMP%]{font-size:30px;font-family:Arial,Helvetica,sans-serif;margin-bottom:25px;color:#1781c7}.login__inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;margin-bottom:25px}.login__submit[_ngcontent-%COMP%]{font-size:20px;font-family:Arial,Helvetica,sans-serif;width:100%;background-color:#1781c7;padding:5px;color:#fff;transition:.3s;margin-top:30px}.login__submit[_ngcontent-%COMP%]:hover{background-color:#064975}.login__submit[_ngcontent-%COMP%]:disabled{background-color:#6395b6;cursor:not-allowed}.login[_ngcontent-%COMP%]   .to-register[_ngcontent-%COMP%]{text-align:center;font-size:15px;font-family:arial;margin-top:15px}.login[_ngcontent-%COMP%]   .to-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#117edd;font-weight:600}.form__group[_ngcontent-%COMP%]{position:relative;padding:15px 0 0;margin-top:10px;width:100%}.form__group.error[_ngcontent-%COMP%]   .form__field[_ngcontent-%COMP%]{border-bottom:2px solid red;color:red}.form__group.error[_ngcontent-%COMP%]   .form__label[_ngcontent-%COMP%]{color:red}.form__group[_ngcontent-%COMP%]   .error__message[_ngcontent-%COMP%]{position:absolute;color:red}.form__group[_ngcontent-%COMP%]   .show-password[_ngcontent-%COMP%]{position:absolute;right:0;top:50%;font-size:16px}.form__field[_ngcontent-%COMP%]{font-family:inherit;width:100%;border:0;border-bottom:2px solid #9b9b9b;outline:0;font-size:1.3rem;color:#11998e;padding:7px 0;background:transparent;transition:border-color .2s;margin-bottom:5px}.form__field[_ngcontent-%COMP%]::placeholder{color:transparent}.form__field[_ngcontent-%COMP%]:placeholder-shown ~ .form__label[_ngcontent-%COMP%]{font-size:1.3rem;cursor:text;top:20px}.form__label[_ngcontent-%COMP%]{position:absolute;top:0;display:block;transition:.2s;font-size:1rem;color:#9b9b9b}.form__field[_ngcontent-%COMP%]:focus{padding-bottom:6px;border-width:3px;border-image:linear-gradient(to right,#11998e,#38ef7d);border-image-slice:1}.form__field[_ngcontent-%COMP%]:focus ~ .form__label[_ngcontent-%COMP%]{position:absolute;top:0;display:block;transition:.2s;font-size:1rem;color:#11998e}.form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid{box-shadow:none}"],changeDetection:0}),n})(),y=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[t.UX,d.ez,h.JF,m.Bz.forChild([{path:"",component:v}])]}),n})()}}]);