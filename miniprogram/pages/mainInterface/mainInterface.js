// pages2/pages/mainInterface/mainInterface.js
var QQMapWX = require('../../qqmap-wx-jssdk.js');
var qqmap = new QQMapWX({
  //在腾讯地图开放平台申请密钥 http://lbs.qq.com/mykey.html
  key: 'AVABZ-EIPWP-7RTDK-L6UQ3-SHYET-V5B6V'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc: '../../images/cut.png',
    imageFire: '../../images/fire_icon.png',
    imageWrench: '../../images/fault.png',
    imageSearch: '../../images/search.png',
    myLatitude: "",
    myLongitude: "",
    myAddress: ""
  },
  /**
   * 翻译按钮
   */
  translateWord: function () {
    var that = this;
    var type = that.data.type === 'cn' ? 'en' : 'cn';
    that.setData({
      type: type
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */




  onLoad: function (options) {
    var that = this
    //用微信提供的api获取经纬度
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function (res) {
        that.setData({ myLatitude: res.latitude, myLongitude: res.longitude }) 
        //用腾讯地图的api，根据经纬度获取城市
        qqmap.reverseGeocoder({
            location: {
            latitude: that.data.myLatitude,
            longitude: that.data.myLongitude
          },   
          success: function (res) {
            console.log(res)
            var a = res.result.address_component
            //获取市和区（区可能为空）
            that.setData({ myAddress: a.city + a.district })
            //控制台输出结果
            console.log(that.data.myAddress)  
          }
        })
      }
    })
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

  }

})