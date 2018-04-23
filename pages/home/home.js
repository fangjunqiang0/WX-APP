// pages/home/home.js


Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxmlHidden: true,
    wxsHidden: true,
    wxddHidden: true,
    componentHidden: true,

    wxmlArr: ['数据绑定', '列表渲染', '条件渲染', '模板', '事件','引用'],
    wxsArr: ['模块', '变量', '注释', '运算符', '语句', '数据类型', '基础类库'],
   
  },
/**
 * WXMLBtnClick
 */
  wxmlBtnClick(e) {
    console.log(e)
    this.data.wxmlHidden = !this.data.wxmlHidden;
    this.setData({
      wxmlHidden: this.data.wxmlHidden
    })
  },

  wxsBtnClick(e) {
    console.log(e)
    this.data.wxsHidden = !this.data.wxsHidden;
    this.setData({
      wxsHidden: this.data.wxsHidden
    })
  },

  wxssBtnClick(e) {
    console.log(e)

  },

  componentBtnClick(e) {
    console.log(e)
  },
  /** wxml子项点击事件 */
  wxmlDetailClick(e) {
    console.log(e)
    let id = Number(e.currentTarget.id)
    switch (id) {
      case 0:
        wx.navigateTo({
          url: "./bindData/bindData",
        })
        break
      case 1:
        wx.navigateTo({
          url: './list/list',
        })
        break
      case 2:
        wx.navigateTo({
          url: './condition/condition',
        })
        break
      case 3:
        wx.navigateTo({
          url: './template/template',
        })
        break
      case 4:
        wx.navigateTo({
          url: './event/event',
        })
        break
      case 5:
        wx.navigateTo({
          url: './quote/quote',
        })
        break
      default:
        break
    }

  },

  /** wxs子项点击事件 */
  wxsDetailClick(e) {
    console.log(e)
    let id = Number(e.currentTarget.id)
    switch (id) {
      case 0:
        wx.navigateTo({
          url: "./templateWXS/templateWXS",
        })
        break
      case 1:
        wx.navigateTo({
          url: './variable/variable',
        })
        break
      case 2:
        wx.navigateTo({
          url: './note/note',
        })
        break
      case 3:
        wx.navigateTo({
          url: './operator/operator',
        })
        break
      case 4:
        wx.navigateTo({
          url: './sentence/sentence',
        })
        break
      case 5:
        wx.navigateTo({
          url: './dataType/dataType',
        })
        break
      case 6:
        wx.navigateTo({
          url: './baseLibrary/baseLibrary',
        })
        break
      default:
        break
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload');
    // this.data.message = 'hello fangjunqiang';

    // this.data.message = 'hello message';
    // this.setData({
    //   message: this.data.message
    // });
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage');
  }
});