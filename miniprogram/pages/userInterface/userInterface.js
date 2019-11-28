// pages/log_User/log_User.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:"",
    passworad:"",
    hiddenmodalput: true,
    //-------注册邮箱-----------
    signEmail:"",//注册邮箱
    phone: '',//注册手机号
    code: '',//注册验证码
    iscode: null,//用于存放验证码接口里获取到的code
    codename: '获取验证码',
    signPhoneGetPhone:'',
    signEmailGetWord:''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  email:function(e){
    this.setData({
      email:e.detail.value
    })
    console.log(this.data.email)
  },
  passward:function(e){
    this.setData({
      passward: e.detail.value
    })
    console.log(this.data.passward)
  },//-----------获取登录框信息

//---------------------注册弹窗显示/消失-------------------//
  modalinput: function () {                               //
    this.setData({                                        //
                                                          //
      hiddenmodalput: !this.data.hiddenmodalput           //
    })                                                    //
  },                                                      //
  cancel: function () {                                   //
    this.setData({                                        //                                                     
      hiddenmodalput: true                                //
    });                                                   //
  },                                                      //
  confirm: function () {
    console.log("1");   
    if (this.data.signPhoneGetPhone.length == 0 || this.data.signEmailGetWord.length == 0){
      console.log("2");
        wx.showModal({
          title: '提示',
          content: '务必填好您的信息',
        })
    }
                                                 //
  },                                                      //
//--------------------------------------------------------// 
//--------------------------------------------------------//
  signEmailGetWord:function(e){
    this.setData({
      signEmailGetWord: e.detail.value
    })
    console.log(this.data.signEmailGetWord)
  },
  signPhoneGetPhone:function(e){
    this.setData({
      signPhoneGetPhone: e.detail.value
    })
    console.log(this.data.signPhoneGetPhone)
  },  
  signPhoneGetcode: function (e) {
    this.setData({
      signPhoneGetcode: e.detail.value
    })
    console.log(this.data.signPhoneGetcode)
  },   

})