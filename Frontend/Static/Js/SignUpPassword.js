import MainSignUp from "./MainSignUp";

export default class extends MainSignUp {
    constructor() {

    }

    async getHTML() {
        return `
        
        <div class="middlePart-div">
          <p class="myMiddleMainPara-para">انشاء حساب</p>
          <p class="myMiddlePara-para">انضم إلينا اليوم واحصل على إمكانية الوصول إلى موارد البحث المميزة</p>
          
          <div class="myMainMiddleField-div">
    
          <p class="myNamePara-para">الاسم الكامل</p>
          <input class="myNameInput-input" placeholder="ادخل اسمك"></input>  
    
          <p class="myNamePara-para">البريد الالكتروني</p>
          <input class="myNameInput-input" placeholder="you@example.com"></input>  
    
          <button href="/signUpPassword" button-link route="SignUpPassword/SignUpPass.html" class="myButton-btn"> متابعة </button>
    
          <div class="lowerSection-div"><p class="myLowerRightPara-para">تسجيل الدخول</p><p class="myLowerLeftPara-para">لديك حساب بالفعل؟</p></div>
            Password
          </div>
        </div>
      </div>
        `;
    }
}