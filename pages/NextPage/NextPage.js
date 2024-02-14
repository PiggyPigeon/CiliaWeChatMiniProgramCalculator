// pages/NextPage/NextPage.js

Page({
  data: {
    activeTab: 'OD',
    showOS: false,
    showOD: true,
    originalResultOS: '',
    originalResultOD: '',
    
    lensCollection: [ 
      {id: 1, 
      countOD: 0, 
      countOS: 0, 
      compNotesOD: '', 
      compNotesOS: '', 
      resultOD: '', 
      resultOS: '', 
      comfortIndexOD: 0, 
      comfortIndexOS: 0,
      concernTabOD: 'none', 
      concernTabOS: 'none', 
      OZsizeConcernOD: '',
      OADsizeConcernOD: '',
      RCthicknessConcernOD: '',
      slidingConcernOD: '',

      SPKConcernOD: '',
      OZsizeConcernOS: '',
      OADsizeConcernOS: '',
      RCthicknessConcernOS: '',
      slidingConcernOS: '',
    
      SPKConcernOS: ''
    } 
    ],
    nextLensId: 2,   
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

  handleConcernTabChanged: function(e) {
    const { lensId, identifier, concernTab } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'concernTabOD' : 'concernTabOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: concernTab});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },
  
  handleOZSizeConcernChanged: function(e) {
    const { lensId, identifier, OZsizeConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'OZsizeConcernOD' : 'OZsizeConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: OZsizeConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },

  handleOADSizeConcernChanged: function(e) {
    const { lensId, identifier, OADsizeConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'OADsizeConcernOD' : 'OADsizeConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: OADsizeConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },

  handleRCthicknessConcernChanged: function(e) {
    const { lensId, identifier, RCthicknessConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'RCthicknessConcernOD' : 'RCthicknessConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: RCthicknessConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },
  
  handleSlidingConcernChanged: function(e) {
    const { lensId, identifier, slidingConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'slidingConcernOD' : 'slidingConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: slidingConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
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

  handleSPKChange: function(e) {
    const { lensId, identifier, SPKConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'SPKConcernOD' : 'SPKConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: SPKConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
    },

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
          title: `镜片 ${lens.id} BFK OS 值超出范围 (37.5 - 46.5)`,
          icon: 'none',
          duration: 2000
        });
        allBFKValid = false; 
      }
      if ((bfkOD < 37.5 || bfkOD > 46.5)) {
        wx.showToast({
          title: `镜片 ${lens.id} BFK OD 值超出范围 (37.5 - 46.5)`,
          icon: 'none',
          duration: 2000
        });
        allBFKValid = false;  
      }
    });
    if (allBFKValid) {
    const newLens = { id: this.data.nextLensId, countOD: 0, countOS: 0, compNotesOS: '', compNotesOD: '', resultOD: '', resultOS: '', comfortIndexOD: 0, comfortIndexOS: 0, concernTabOD: 'none', concernTabOS: 'none'};
    const newLensCollection = this.data.lensCollection.concat(newLens); 
    this.setData({
      lensCollection: newLensCollection,
      nextLensId: this.data.nextLensId + 1
    });
  }
  },
});

