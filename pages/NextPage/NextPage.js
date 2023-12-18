// pages/NextPage/NextPage.js
// NextPage.js
Page({
  data: {
    originalResultOS: '',
    originalResultOD: '',
    resultOS: '',
    resultOD: '',
    showOS: false,
    showOD: true,
    notesOS: '',        
    notesOD: '',
    activeTab: 'OD',
    sizeConcernOD: '',
    tightnessConcernOD: '',
    curvatureConcernOD: '',
    sizeConcernOS: '',
    tightnessConcernOS: '',
    curvatureConcernOS: '',

    showNoConcernOD: true,
    showConcernsOD: false,
    concernTabOD: 'none',

    showNoConcernOS: true,
    showConcernsOS: false,
    concernTabOS: 'none',

    comfortLevels: ['1 - 非常舒服', '2 - acceptable', '3 - 不能穿'],
    comfortIndexOD: 0, 
    comfortIndexOS: 0,    
  },
  
  onBFKInputOS (e) {
    this.handleInput(e, 'resultOS');
  },

  onBFKInputOD(e) {
    this.handleInput(e, 'resultOD');
  },

  handleInput(e, field) {
    let value = e.detail.value;
    value = value.replace(/\D/g, ''); // Remove non-numeric characters

    if (value.length > 2) {
      value = value.slice(0, 2) + '.' + value.slice(2, 4);
    } 
 
    let update = {};
    update[field] = value;
    this.setData(update);
  },
  
  onComfortLevelChangeOD: function(e) {
    this.setData({
      comfortIndexOD: e.detail.value
    })
  },
  onComfortLevelChangeOS: function(e) {
    this.setData({
      comfortIndexOS: e.detail.value
    })
  },

  onLoad(options) {
    this.setData({
      originalResultOS: options.resultOS || '',
      originalResultOD: options.resultOD || '',
      resultOS: options.resultOS || '',
      resultOD: options.resultOD || ''
    });
  },

  showOSOptions() {
    this.setData({
      showOS: true,
      showOD: false,
      activeTab: 'OS'
    });
  },

  showODOptions() {
    this.setData({
      showOS: false,
      showOD: true,
      activeTab: 'OD',
    });
  },

  showNoConcernsMenuOS() {
    this.setData({
      showConcernsOS: false,
      showNoConcernOS: true,
      concernTabOS: 'none'
    })
  },

  showSomeConcernsMenuOS() {
    this.setData({
      showConcernsOS: true,
      showNoConcernOS: false,
      concernTabOS: 'some'
    })
  },

  showNoConcernsMenuOD() {
    this.setData({
      showConcernsOD: false,
      showNoConcernOD: true,
      concernTabOD: 'none'
    });
  },

  showSomeConcernsMenuOD() {
    this.setData({
      showConcernsOD: true,
      showNoConcernOD: false,
      concernTabOD: 'some'
    });
  },

  onRadioChangeSizeOD(e) {
    this.setData({
      sizeConcernOD: e.detail.value
    });
  },

  onRadioChangeTightnessOD(e) {
    this.setData({
      tightnessConcernOD: e.detail.value
    });
  },

  onRadioChangeCurvatureOD(e) {
    this.setData({
      curvatureConcernOD: e.detail.value
    });
  },
 
  onRadioChangeSizeOS(e) {
    this.setData({
      sizeConcernOS: e.detail.value
    });
  },

  onRadioChangeTightnessOS(e) {
    this.setData({
      tightnessConcernOS: e.detail.value
    });
  },

  onRadioChangeCurvatureOS(e) {
    this.setData({
      curvatureConcernOS: e.detail.value
    });
  },

  onNotesInputOS(e) {
    this.setData({
      notesOS: e.detail.value
    });
  },

  // saveNotesOS() {
  //   wx.showToast({
  //     title: 'Notes saved',
  //     icon: 'success',
  //     duration: 2000
  //   });
  // },

  // saveNotesOD() {
  //   wx.showToast({
  //     title: 'Notes saved',
  //     icon: 'success',
  //     duration: 2000
  //   });
  // },

  onNotesInputOD(e) {
    this.setData({
      notesOD: e.detail.value
    });
  },

  addNewLens() {
    // Define the action for adding a new OS lens
    // For example, navigate to another page or show a form
  },
});
