// index.js
Page({
  data: {
    value1: '',
    result: ''
  },
  
  handleInput1(e) {
    let value = e.detail.value;
    value = value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 2) {
      value = value.slice(0, 2) + '.' + value.slice(2); // Add decimal after first two digits
    }

    this.setData({
      value1: value
    });
  },

  calculate() {
    const value1 = parseFloat(this.data.value1);
    const result = Math.round((6.293 + 0.828 * value1) * 4)/4
    this.setData({
      result: result.toFixed(2).toString()
    });
  }
});
