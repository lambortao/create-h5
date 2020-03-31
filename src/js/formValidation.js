import { layer } from "./tools";

/**
 * 表单验证
 * @param {jquery} sendBtn 提交按钮的jQuery元素
 * @param {array} dataInput 提交input的jQuery元素数组集合
 * 
 * 例子：
 * JavaScript
 * const fromValiFunc = new fromValidation(
    $('#confirmToSubmit'),
    [
      $('#name'),
      $('#phoneNumber'),
      $('#verificationCode'),
      $('#prov'),
      $('#city'),
      $('#store')
    ]
  );
  fromValiFunc.init(res => {
    console.log(res);
  })

  HTML 
  <input 
    id="verificationCode" 
    type="number" 
    placeholder="请填写验证码"
    required-msg="请填写验证码"
    error-msg="请填写正确的验证码"
    key="code"
    required
    maxlength="4"
  >
 */
class formValidation {
  constructor(sendBtn, dataInput) {
    this.sendBtn = sendBtn;
    this.dataInput = dataInput;
    this.postData = {}
  }
  /**
   * 
   * @param {jquery} element 接收一个jQuery对象
   * @return {string | boolean} 验证通过返回验证的数据，验证不通过返回false
   */
  checkData(element) {
    const type = element.attr('type');
    const value = element.val();
    const requiredMsg = element.attr('required-msg');
    const errorMsg = element.attr('error-msg');
    let result;
    if (value === '') {
      layer(requiredMsg);
      result = false;
    } else {
      switch (type) {
        case 'text':
          result = value;
          break;
        case 'tel':
          if ( value.length !== 11 || parseInt(value.substr(0, 1)) !== 1 ) {
            layer(errorMsg);
          } else {
            result = value;
          }
          break;
        case 'number':
          if (value.length !== 4) {
            layer(errorMsg);
          } else {
            result = value;
          }
          break;
      }
    }
    return result;
  }

  init(fun) {
    const _this = this;
    this.sendBtn.click(function() {
      for (let index = 0; index < _this.dataInput.length; index++) {
        const element = _this.dataInput[index];
        // 首先检查是否需要验证
        if (element.attr('required')) {
          // 然后去做验证
          const checkResult = _this.checkData(element);
          if (checkResult) {
            let key = element.attr('key');
            _this.postData[key] = checkResult;
          } else {
            return;
          }
        } else {
          let key = element.attr('key');
          _this.postData[key] = element.val();
        }
      }
      
      fun(_this.postData);
    });
  };
}

export default formValidation;