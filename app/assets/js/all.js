 //進場動畫全域設定
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 160, // 動畫觸發位置(px)[底部距離動畫元素的位置，不要太高]
  delay: 0, // 動畫延遲
  duration: 400, // 動畫執行時間(ms)
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

 //台灣縣市地區選擇器
 //文檔：https://github.com/essoduke/jQuery-TWzipcode
const twzipcode = $('#twzipcode').twzipcode();
// const twzipcode = new TWzipcode();

// let get = twzipcode.get('country').value;
// console.log(get);


//自訂程式碼
const registerTitle = document.querySelector('.registerTitle');
// const registerCounty = document.querySelector('#registerCounty'); //通訊地址縣市選擇器
// const registerDistrict = document.querySelector('#registerDistrict'); //通訊地址區域選擇器
// const registerZipcode = document.querySelector('#registerZipcode'); //通訊地址郵遞區號
// const registerAddress = document.querySelector('#registerAddress'); //通訊地址欄位

//新增計畫步驟1~2
const planAddName = document.querySelector('#planAddName'); //真實姓名
const planAddEmail = document.querySelector('#planAddEmail'); //電子信箱
const planAddDateStart = document.querySelector('#planAddDateStart'); //預計開始日期
const planAddDateEnd = document.querySelector('#planAddDateEnd'); //預計結束日期
const planAddTargetMoney = document.querySelector('#planAddTargetMoney'); //目標金額
const planAddCatalog = document.querySelector('#planAddCatalog'); //標的分類
const planAddTargetName = document.querySelector('#planAddTargetName'); //計畫名稱
const planAddMembersCount = document.querySelector('#planAddMembersCount'); //計畫參與人數
const planAddPicture = document.querySelector('#planAddPicture'); //圖片上傳
const planAddBankAccount = document.querySelector('#planAddBankAccount'); //銀行扣款帳號
const planAddBankDebitDate = document.querySelector('#planAddBankDebitDate'); //扣款日
const planAddBankDebitMoney = document.querySelector('#planAddBankDebitMoney'); //扣款金額

//邀請參與人
// const planAddInviteName = document.querySelectorAll('.planAddInviteName'); //參與人名字
// const planAddInviteEmail = document.querySelectorAll('.planAddInviteEmail'); //參與人Email
const planAddInviteName1 = document.querySelector('#planAddInviteName1'); //參與人名字1
const planAddInviteName2 = document.querySelector('#planAddInviteName2'); //參與人名字1
const planAddDoneInviteName = document.querySelector('#planAddDoneInviteName');

//新增計畫步驟4
const planAddDoneCatalog = document.querySelector('#planAddDoneCatalog'); //使用者所選的標的名稱
const planAddDoneTargetName = document.querySelector('#planAddDoneTargetName'); //使用者所設置的計畫名稱
const planAddDoneTargetMoney = document.querySelector('#planAddDoneTargetMoney'); //使用者所設置的目標金額
const planAddDoneDate = document.querySelector('#planAddDoneDate'); //使用者所選的規劃時間  [2021/09/01 ~ 2025/09/01]
const planAddDoneBankAccount = document.querySelector('#planAddDoneBankAccount'); //使用者所選的銀行帳戶
const planAddDoneBankDebitDate = document.querySelector('#planAddDoneBankDebitDate'); //使用者所選的扣款日期 [每個月x號]
const planAddDoneBankDebitMoney = document.querySelector('#planAddDoneBankDebitMoney'); //使用者所設置扣款金額

const validRegisterInput = () => {
  const registerAccount = document.querySelector("#registerAccount").value;
  const registerPwd = document.querySelector("#registerPwd").value;
  const registerConfirmPwd = document.querySelector("#registerConfirmPwd").value;

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

}


const validPlanAddStepInput1 = () => {
  let dateStart = '';
  let dateEnd = '';

  const updateDate = (start,end) => {
    planAddDoneDate.value = `${start} ~ ${end}`;
  }

  $('#planAddDateStart').blur(() => {
    if(planAddDateStart.value !== '') {
      $('#planAddDateStart').addClass('is-valid');
      $('#planAddDateStart').removeClass('is-invalid');
      dateStart = planAddDateStart.value;
    } else {
      $('#planAddDateStart').addClass('is-invalid');
      $('#planAddDateStart').removeClass('is-valid');
    }
    updateDate(dateStart,dateEnd);
  });

  $('#planAddDateEnd').blur(() => {
    if(planAddDateEnd.value !== '') {
      $('#planAddDateEnd').addClass('is-valid');
      $('#planAddDateEnd').removeClass('is-invalid');
      dateEnd = planAddDateEnd.value;
    } else {
      $('#planAddDateEnd').addClass('is-invalid');
      $('#planAddDateEnd').removeClass('is-valid');
    }
    updateDate(dateStart,dateEnd);
  });

  $('#planAddTargetMoney').blur(() => {
    let money = planAddTargetMoney.valueAsNumber;
    if(money !== '' ) {
      if (money >=10000 && money <= 10000000) {
        $('#planAddTargetMoney').addClass('is-valid');
        $('#planAddTargetMoney').removeClass('is-invalid');
        planAddDoneTargetMoney.valueAsNumber = money;
      } else {
        $('#planAddTargetMoney').addClass('is-invalid');
        $('#planAddTargetMoney').removeClass('is-valid');
        $('#planAddTargetMoneyFeedback').text('金額需介於10,000 ~ 10,000,000 之間');
        planAddDoneTargetMoney.valueAsNumber = 0;
      }
    } else {
      $('#planAddTargetMoney').addClass('is-invalid');
      $('#planAddTargetMoney').removeClass('is-valid')
      $('#planAddTargetMoneyFeedback').text('請輸入目標金額');
      planAddDoneTargetMoney.valueAsNumber = 0;
    }
  });

  $('#planAddCatalog').blur(() => {
    if(planAddCatalog.value !== '') {
      $('#planAddCatalog').addClass('is-valid');
      $('#planAddCatalog').removeClass('is-invalid');
      planAddDoneCatalog.value = planAddCatalog.value;
    } else {
      $('#planAddCatalog').addClass('is-invalid');
      $('#planAddCatalog').removeClass('is-valid');
    }
  });

  $('#planAddTargetName').blur(() => {
    if(planAddTargetName.value !== '') {
      $('#planAddTargetName').addClass('is-valid');
      $('#planAddTargetName').removeClass('is-invalid');
      planAddDoneTargetName.value = planAddTargetName.value;
    } else {
      $('#planAddTargetName').addClass('is-invalid');
      $('#planAddTargetName').removeClass('is-valid');
    }
  });

  $('#planAddMembersCount').blur(() => {
    if(planAddMembersCount.value !== '') {
      $('#planAddMembersCount').addClass('is-valid');
      $('#planAddMembersCount').removeClass('is-invalid');
    } else {
      $('#planAddMembersCount').addClass('is-invalid');
      $('#planAddMembersCount').removeClass('is-valid');
    }
  });

  $('#planAddPicture').change(() => {
    let fileType = planAddPicture.files[0].type;
    let fileSize = planAddPicture.files[0].size;

    if(!fileType.includes('image/jpeg') && !fileType.includes('image/png')) {
      $('#planAddPicture').addClass('is-invalid');
      $('#planAddPicture').removeClass('is-valid');
      $('#planAddPictureFeedback').text('副檔名必須為.jpg或是.png檔');
      console.log(fileType);
    } else if(fileSize > 1048600) {
      $('#planAddPictureFeedback').text('檔案大小不可超過1MB');
    }
    else {
      $('#planAddPicture').addClass('is-valid');
      $('#planAddPicture').removeClass('is-invalid');
    }

  });
}

const validPlanAddStepInput2 = () => {
  $('#planAddBankAccount').blur(() => {
    if(planAddBankAccount.value !== '') {
      $('#planAddBankAccount').addClass('is-valid');
      $('#planAddBankAccount').removeClass('is-invalid');
      planAddDoneBankAccount.value = planAddBankAccount.value;
    } else {
      $('#planAddBankAccount').addClass('is-invalid');
      $('#planAddBankAccount').removeClass('is-valid');
    }
  });

  $('#planAddBankDebitDate').blur(() => {
    let date = planAddBankDebitDate.value;
    if(date !== '') {
      $('#planAddBankDebitDate').addClass('is-valid');
      $('#planAddBankDebitDate').removeClass('is-invalid');
      planAddDoneBankDebitDate.value = `每個月${date}號`
    } else {
      $('#planAddBankDebitDate').addClass('is-invalid');
      $('#planAddBankDebitDate').removeClass('is-valid');
    }
  });

  $('#planAddBankDebitMoney').blur(() => {
    let money = planAddBankDebitMoney.valueAsNumber;
    if(money !== '' ) {
      if (money >=1000 && money <= 1000000) {
        $('#planAddBankDebitMoney').addClass('is-valid');
        $('#planAddBankDebitMoney').removeClass('is-invalid');
        planAddDoneBankDebitMoney.valueAsNumber = money;
      } else {
        $('#planAddBankDebitMoney').addClass('is-invalid');
        $('#planAddBankDebitMoney').removeClass('is-valid');
        $('#planAddBankDebitMoneyFeedback').text('金額需介於1,000 ~ 1,000.000 之間');
        planAddDoneBankDebitMoney.valueAsNumber = 0;
      }
    } else {
      $('#planAddBankDebitMoney').addClass('is-invalid');
      $('#planAddBankDebitMoney').removeClass('is-valid')
      $('#planAddBankDebitMoneyFeedback').text('請輸入目標金額');
      planAddDoneBankDebitMoney.valueAsNumber = 0;
    }

  });
}

const validPlanAddStepInput3 = () => {
  // let inviteName = [];
  // let inviteEmail = [];

  $('#planAddInviteName1').change(() => {
    planAddDoneInviteName.value = `${planAddInviteName1.value}, ${planAddInviteName2.value},`;
  });

  $('#planAddInviteName2').change(() => {
    planAddDoneInviteName.value = `${planAddInviteName1.value}, ${planAddInviteName2.value}`;
  });

  // planAddInviteEmail

}

const validPlanAddCheck = inputId => {
  return inputId.getAttribute('class').includes('is-valid');
}

//JQuery 開始
$(document).ready( () => {
  $('#btnRegisterNext').click( e => {
    validRegisterInput();
  });

  $('#btnRegisterPrevious').click(() => {
    $('.register--form__basic').addClass('d-none');
    $('.register--form__init').removeClass('d-none');

    $('#btnRegisterNext').removeClass('d-none');

    $('.btnRegisterGroup').addClass('d-none');
    $('.btnRegisterGroup').removeClass('d-flex');

    registerTitle.textContent = "填寫註冊資料";
  });

//執行驗證函數
  validPlanAddStepInput1();
  validPlanAddStepInput2();
  validPlanAddStepInput3();

  //新增計畫第一步驟 下一步按鈕
  $('#btnplanAddstep1Next').click (e => {
    if (validPlanAddCheck(planAddDateStart) && validPlanAddCheck(planAddDateEnd) && validPlanAddCheck(planAddTargetMoney) && validPlanAddCheck(planAddCatalog) && validPlanAddCheck(planAddTargetName) && validPlanAddCheck(planAddMembersCount) && validPlanAddCheck(planAddPicture)) {
      $('.planAdd--form__step1').addClass('d-none');
      $('.planAdd--form__step2').removeClass('d-none');
      $('.planAddStep2').addClass('active');
    } else {
      return;
    }
  });

  //新增計畫第二步驟

      //上一步按鈕
  $('#btnplanAddstep2Previous').click (e => {
    $('.planAdd--form__step1').removeClass('d-none');
    $('.planAdd--form__step2').addClass('d-none');
    $('.planAddStep2').removeClass('active');
  });
      //下一步按鈕
  $('#btnplanAddstep2Next').click (e => {
    if (validPlanAddCheck(planAddBankAccount) && validPlanAddCheck(planAddBankDebitDate) && validPlanAddCheck(planAddBankDebitMoney)) {
      $('.planAdd--form__step2').addClass('d-none');
      $('.planAdd--form__step3').removeClass('d-none');
      $('.planAddStep3').addClass('active');
    } else {
      return;
    }
  });

  //新增計畫第三步驟

      //上一步按鈕
  $('#btnplanAddstep3Previous').click (e => {
    $('.planAdd--form__step2').removeClass('d-none');
    $('.planAdd--form__step3').addClass('d-none');
    $('.planAddStep3').removeClass('active');
  });
      //下一步按鈕
  $('#btnplanAddstep3Next').click (e => {
    $('.planAdd--form__step3').addClass('d-none');
    $('.planAdd--form__step4').removeClass('d-none');
    $('.planAddStep4').addClass('active');
  });

  //新增計畫第四步驟

      //上一步按鈕
  $('#btnplanAddstep4Previous').click (e => {
    $('.planAdd--form__step3').removeClass('d-none');
    $('.planAdd--form__step4').addClass('d-none');
    $('.planAddStep4').removeClass('active');
  });
      //送出按鈕
  $('#btnplanAddSubmit').click (e => {

  });

});