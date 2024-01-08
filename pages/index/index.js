// index.js
Page({
  data: {
    valueOS: '',
    valueOD: '',
    resultOS: '',
    resultOD: ''
  },
  
  clearInputs() {
    this.setData({
      valueOS: '',
      valueOD: '',
      resultOS: '',
      resultOD: ''
    });
  },

  handleInputOS(e) {
    this.handleInput(e, 'valueOS');
  },

  handleInputOD(e) {
    this.handleInput(e, 'valueOD');
  },

  handleInput(e, field) {
    let value = e.detail.value;
    value = value.replace(/\D/g, ''); 

    if (value.length > 2) {
      value = value.slice(0, 2) + '.' + value.slice(2,4); 
    }

    let update = {};
    update[field] = value;
    this.setData(update);
  },

  calculate() {
    const valueOS = parseFloat(this.data.valueOS);
    const valueOD = parseFloat(this.data.valueOD);

  if ((valueOS < 37.5 || valueOS > 46.5)) {
    wx.showToast({
      title: 'SIM K OS 值超出范围 (37.5 - 46.5)',
      icon: 'none',
      duration: 2000
    });
    return; 
  }
  if ((valueOD < 37.5 || valueOD > 46.5)) {
    wx.showToast({
      title: 'SIM K OD 值超出范围 (37.5 - 46.5)',
      icon: 'none',
      duration: 2000
    });
    return; 
  }
  
    const resultOS = Math.round((6.293 + 0.828 * valueOS) * 4)/4;
    const resultOD = Math.round((6.293 + 0.828 * valueOD) * 4)/4;

    this.setData({
      resultOS: resultOS.toFixed(2).toString(),
      resultOD: resultOD.toFixed(2).toString()
    });
  },
  continueToNextPage() {
    wx.navigateTo({
      url: `/pages/NextPage/NextPage?resultOS=${this.data.resultOS}&resultOD=${this.data.resultOD}`
    });
  }
});
