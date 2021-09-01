"use strict";

//進場動畫全域設定
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 160,
  // 動畫觸發位置(px)[底部距離動畫元素的位置，不要太高]
  delay: 0,
  // 動畫延遲
  duration: 400,
  // 動畫執行時間(ms)
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); //台灣縣市地區選擇器
//文檔：https://github.com/essoduke/jQuery-TWzipcode

var twzipcode = $('#twzipcode').twzipcode(); // const twzipcode = new TWzipcode();
// let get = twzipcode.get('country').value;
// console.log(get);
//日期選擇器

var elem = document.querySelector('input[name="registerBirthDay"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  nextArrow: '>',
  prevArrow: '<',
  format: 'yyyy/mm/dd',
  buttonClass: 'btn',
  weekStart: 1,
  clearBtn: true
}); //自訂程式碼

var registerTitle = document.querySelector('.registerTitle');
var registerCounty = document.querySelector('#registerCounty'); //通訊地址縣市選擇器

var registerDistrict = document.querySelector('#registerDistrict'); //通訊地址區域選擇器

var registerZipcode = document.querySelector('#registerZipcode'); //通訊地址郵遞區號

var registerAddress = document.querySelector('#registerAddress'); //通訊地址欄位

var validRegisterInput = function validRegisterInput() {
  var registerAccount = document.querySelector("#registerAccount").value;
  var registerPwd = document.querySelector("#registerPwd").value;
  var registerConfirmPwd = document.querySelector("#registerConfirmPwd").value;

  if (registerAccount.length < 6 || registerAccount.length > 30) {
    $('#registerAccountError').removeClass('d-none');
  } else if (registerPwd.length < 8) {
    $('#registerAccountError').addClass('d-none');
    $('#registerPwdError').removeClass('d-none');
  } else if (registerPwd !== registerConfirmPwd) {
    $('#registerPwdError').addClass('d-none');
    $('#registerConfirmPwdError').removeClass('d-none');
  } else {
    $('#registerConfirmPwdError').addClass('d-none');
    $('#registerAccountError').addClass('d-none');
    $('#registerPwdError').addClass('d-none');
    $('.register--form__basic').removeClass('d-none');
    $('.register--form__init').addClass('d-none');
    $('#btnRegisterNext').addClass('d-none');
    $('.btnRegisterGroup').removeClass('d-none');
    $('.btnRegisterGroup').addClass('d-flex');
    registerTitle.textContent = "填寫基本資料";
  }
};

$(document).ready(function () {
  $('#btnRegisterNext').click(function (e) {
    validRegisterInput();
  });
  $('#btnRegisterPrevious').click(function () {
    $('.register--form__basic').addClass('d-none');
    $('.register--form__init').removeClass('d-none');
    $('#btnRegisterNext').removeClass('d-none');
    $('.btnRegisterGroup').addClass('d-none');
    $('.btnRegisterGroup').removeClass('d-flex');
    registerTitle.textContent = "填寫註冊資料";
  });
});
//# sourceMappingURL=all.js.map
