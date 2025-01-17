// pages/index/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:null,
    password:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  usernameInput: function (event) {
    this.setData({
      username:event.detail.value
    })
  },
  passwordInput:function(event){
    this.setData({
      password:event.detail.value
    })
  },
  loginbtnInput:function(){
    app.appData.userinfo = { username: this.data.username, password: this.data.password };
    wx.redirectTo({url:"/pages/main/main"})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})