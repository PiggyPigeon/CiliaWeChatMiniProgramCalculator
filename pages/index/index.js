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
    const isValidNumber = (value) => {
      const number = parseFloat(value);
      return value != null && (value - number === 0);
    };
  
    let valueOS = this.data.valueOS;
    let valueOD = this.data.valueOD;
  
    valueOS = isValidNumber(valueOS) ? parseFloat(valueOS) : 0;
    valueOD = isValidNumber(valueOD) ? parseFloat(valueOD) : 0;

    let invalidInput = false; 
  
    if (valueOS < 37.5 || valueOS > 46.5) {
      wx.showToast({
        title: 'SIM K OS 值超出范围 (37.5 - 46.5)',
        icon: 'none',
        duration: 2000
      });
      this.setData({
        valueOS: '',
        resultOS: '',
      });
      invalidInput = true; 
    }
  
    if (valueOD < 37.5 || valueOD > 46.5) {
      wx.showToast({
        title: 'SIM K OD 值超出范围 (37.5 - 46.5)',
        icon: 'none',
        duration: 2000
      });
      this.setData({
        valueOD: '',
        resultOD: '',
      });
      invalidInput = true; 
    }

    if (invalidInput) {
      return; 
    }
    
    const resultOS = valueOS !== 0 ? Math.round((6.293 + 0.828 * valueOS) * 4)/4 : 0;
    const resultOD = valueOD !== 0 ? Math.round((6.293 + 0.828 * valueOD) * 4)/4 : 0;
  
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
