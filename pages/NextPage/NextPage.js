// pages/NextPage/NextPage.js
// NextPage.js
Page({
  data: {
    resultOS: '',
    resultOD: '',
    showOS: false,
    showOD: false,
    imageOS: '', 
    notesOS: '',        
    imageOD: '', 
    notesOD: '',
    activeTab: 'OS'   
  },

  onLoad(options) {
    // Set the received data to state
    this.setData({
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
