// pages/NextPage/NextPage.js
// NextPage.js
Page({
  data: {
    activeTab: 'OD',
    lensCollection: [ 
      {id: 1, countOD: 0, countOS: 0, compNotesOD: '', compNotesOS: '', resultOD: '', resultOS: '', comfortIndexOD: 0, comfortIndexOS: 0 } 
    ],
    nextLensId: 2,

    originalResultOS: '',
    originalResultOD: '',
    resultOS: '',
    resultOD: '',
    showOS: false,
    showOD: true,
    notesOS: '',        
    notesOD: '',
    sizeConcernOD: '',
    tightnessConcernOD: '',
    curvatureConcernOD: '',
    sizeConcernOS: '',
    tightnessConcernOS: '',
    curvatureConcernOS: '',

    showRadioButtonsOD: true,
    showRadioButtonsOS: true,

    showNoConcernOD: true,
    showConcernsOD: false,
    concernTabOD: 'none',
    showNoConcernOS: true,
    showConcernsOS: false,
    concernTabOS: 'none',

    // comfortLevels: ['1 - 非常舒服', '2 - 可以', '3 - 不能穿'],
    // comfortIndexOD: 0, 
    // comfortIndexOS: 0,    
  },
  

  onBFKInputOS (e) {
    this.handleInput(e, 'resultOS');
  },

  onBFKInputOD(e) {
    this.handleInput(e, 'resultOD');
  },

  handleInput(e, field) {
    let value = e.detail.value;
    value = value.replace(/\D/g, ''); 

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
      concernTabOS: 'none',
      sizeConcernOS: '',
      curvatureConcernOS: '',
      tightnessConcernOS: '',
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
      concernTabOD: 'none',
      sizeConcernOD: '',
      curvatureConcernOD: '',
      tightnessConcernOD: '',
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

  toggleRadioButtonsOD() {
    this.setData({
      showRadioButtonsOD: !this.data.showRadioButtonsOD
    });
  },

  toggleRadioButtonsOS() {
    this.setData({
      showRadioButtonsOS: !this.data.showRadioButtonsOS
    });
  },


 onNotesInputOS(e) {
  this.setData({
    notesOS: e.detail.value
  });
},

onNotesInputOD(e) {
  this.setData({
    notesOD: e.detail.value
  });
},

  // <!-- learning about components -->
  handleIncrement: function(e) {
    const { identifier, lensId } = e.detail;
    const lenses = this.data.lensCollection.map(counter => {
      if (counter.id === lensId) {
        if (identifier === 'OD') {
          return Object.assign({}, counter, { countOD: counter.countOD + 1 });
        } else if (identifier === 'OS') {
          return Object.assign({}, counter, { countOS: counter.countOS + 1 });
        }
      }
      return counter;
    });
    this.setData({
      lensCollection: lenses
    });
  },

  handleComfortLevelChange: function(e) {
    const { comfortIndex, identifier, lensId } = e.detail;
    const lenses = this.data.lensCollection.map(index => {
      if (index.id === lensId) {
        const updatedIndex = Object.assign({}, index);
        if (identifier === 'OD') {
          updatedIndex.comfortIndexOD = comfortIndex;
        } else if (identifier === 'OS') {
          updatedIndex.comfortIndexOS = comfortIndex;
        }
        return updatedIndex;
      }
      return index;
    });
    this.setData({
      lensCollection: lenses
    });
  },


    // actual component building down here
  handleNotes: function(e) {
    const { notes, identifier, lensId } = e.detail;
    const lenses = this.data.lensCollection.map(note => {
      if (note.id === lensId) {
        const updatedNote = Object.assign({}, note);
        if (identifier === 'OD') {
          updatedNote.compNotesOD = notes;
        } else if (identifier === 'OS') {
          updatedNote.compNotesOS = notes;
        }
        return updatedNote;
      }
      return note;
    });
    this.setData({
      lensCollection: lenses
    });
  },

  onLoad(options) {
    let updatedLensCollection = this.data.lensCollection.map((lens, index) => {
      if (index === 0) { 
        return {
          id: lens.id, 
          countOD: lens.countOD,
          countOS: lens.countOS,
          compNotesOD: lens.compNotesOD,
          compNotesOS: lens.compNotesOS,
          resultOD: options.resultOD || lens.resultOD, 
          resultOS: options.resultOS || lens.resultOS,
        };
      }
      return lens;
    });
    this.setData({
      originalResultOS: options.resultOS || '',
      originalResultOD: options.resultOD || '',
      lensCollection: updatedLensCollection
    });
  },

  handleBFKInput: function(e) {
    const { BFKinput, identifier, lensId } = e.detail;
    let formattedInput = BFKinput.replace(/\D/g, '');
    if (formattedInput.length > 2) { 
      formattedInput = formattedInput.slice(0, 2) + '.' + formattedInput.slice(2, 4); 
    }
    const lenses = this.data.lensCollection.map(lens => {
      if (lens.id === lensId) {
        const updatedBFK = Object.assign({}, lens);
        if (identifier === 'OD') {
          updatedBFK.resultOD = formattedInput;
        } else if (identifier === 'OS') {
          updatedBFK.resultOS = formattedInput;
        }
        return updatedBFK;
      }
      return lens;
    });
    this.setData({
      lensCollection: lenses
    });
  },

  addNewLens: function() {
    let allBFKValid = true;
    this.data.lensCollection.forEach(lens => {
      let bfkOD = parseFloat(lens.resultOD);
      let bfkOS = parseFloat(lens.resultOS);
      if ((bfkOS < 37.5 || bfkOS > 46.5)) {
        wx.showToast({
          title: `Lens ${lens.id} BFK OS value is out of range (37.5 - 46.5)`,
          icon: 'none',
          duration: 2000
        });
        allBFKValid = false; 
      }
      if ((bfkOD < 37.5 || bfkOD > 46.5)) {
        wx.showToast({
          title: `Lens ${lens.id} BFK OD value is out of range (37.5 - 46.5)`,
          icon: 'none',
          duration: 2000
        });
        allBFKValid = false;  
      }
    });
    if (allBFKValid) {
    const newLens = { id: this.data.nextLensId, countOD: 0, countOS: 0, compNotesOS: '', compNotesOD: '', resultOD: '', resultOS: '', comfortIndexOD: 0, comfortIndexOS: 0 };
    const newLensCollection = this.data.lensCollection.concat(newLens); 
    this.setData({
      lensCollection: newLensCollection,
      nextLensId: this.data.nextLensId + 1
    });
  }
  },
});

