//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    hiddenName: true,
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {

    const db = wx.cloud.database()

    wx.cloud.callFunction({
      name: 'login',
      data: {
      },
      success: res => {
        var openid = res.result.openid;
        //--------------------------------------
        //-----------------------------------------------------------
        var opid;
        db.collection('UserInformation').add({
          data: {
            count: 1,
            openid
          },
          success: res => {
            // 在返回结果中会包含新创建的记录的 _id
            this.setData({
              counterId: res._id,
              count: 1
            })
            console.log('[数据库1] [新增记录] 成功，记录 _id: ', openid)
            wx.request({
              url: 'https://www.zishuyuni.club/Huiiii/OpenId.php',
              method: "POST",
              data: {
                opid: openid
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              success: function (res) {
                console.log("success")
                console.log(res.data)
                console.log(opid)
              },
              fail: function () {
                console.log("fail")
              }
            })
          },
        })
        setTimeout(function () {
          //页面跳转相当于	
          console.log("sdfsf")
          wx.switchTab({
            url: '../mainInterface/mainInterface',
          })
        }, 2000);
      },
    })
  },

  onChangeShowState: function () {
    this.setData({
      showView: (!this.data.showView)
    })
  },

})


