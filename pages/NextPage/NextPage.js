// pages/NextPage/NextPage.js
// NextPage.js
Page({
  data: {
    originalResultOS: '',
    originalResultOD: '',
    resultOS: '',
    resultOD: '',
    showOS: true,
    showOD: false,
    imageOS: '', 
    notesOS: '',        
    imageOD: '', 
    notesOD: '',
    activeTab: 'OS' ,
    comfortLevels: ['1 - Excellent', '2', '3', '4', '5', '6', '7', '8', '9', '10 - Unwearable'],
    comfortIndexOD: 0, 
    comfortIndexOS: 0,


    concernTabOS: 'NoConcerns',
    
    concernsOS: [],
    
    
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
    // Set the received data to state
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
      activeTab: 'OD'
    });
  },

  showNoConcernsOS() {
    this.setData({concernTabOS: 'NoConcerns' });
  },

  showHaveConcernsOS() {
    this.setData({concernTabOS: 'HaveConcerns' });
  },

  onCheckboxChangeOS(e) {
    this.setData({ concernsOS: e.detail.value });
  },



  onRadioChangeOS(e) {
    this.setData({
      imageOS: e.detail.value
    });
  },

  onRadioChangeOD(e) {
    this.setData({
      imageOD: e.detail.value
    });
  },

  onNotesInputOS(e) {
    this.setData({
      notesOS: e.detail.value
    });
  },

  saveNotesOS() {
    // For now, we are just saving the notes in `notesOS`.
    // You can add additional logic here if needed.
    wx.showToast({
      title: 'Notes saved',
      icon: 'success',
      duration: 2000
    });
  },

  onNotesInputOD(e) {
    this.setData({
      notesOD: e.detail.value
    });
  },

  saveNotesOD() {
    // For now, we are just saving the notes in `notesOS`.
    // You can add additional logic here if needed.
    wx.showToast({
      title: 'Notes saved',
      icon: 'success',
      duration: 2000
    });
  },

  addNewLens() {
    // Define the action for adding a new OS lens
    // For example, navigate to another page or show a form
  },

  


});
