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
      sizeConcernOD: '',
      tightnessConcernOD: '',
      curvatureConcernOD: '',
      sizeConcernOS: '',
      tightnessConcernOS: '',
      curvatureConcernOS: '',
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

  // handleIncrement: function(e) {
  //   const { identifier, lensId } = e.detail;
  //   const lenses = this.data.lensCollection.map(counter => {
  //     if (counter.id === lensId) {
  //       if (identifier === 'OD') {
  //         return Object.assign({}, counter, { countOD: counter.countOD + 1 });
  //       } else if (identifier === 'OS') {
  //         return Object.assign({}, counter, { countOS: counter.countOS + 1 });
  //       }
  //     }
  //     return counter;
  //   });
  //   this.setData({
  //     lensCollection: lenses
  //   });
  // },

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
  
  handleSizeConcernChanged: function(e) {
    const { lensId, identifier, sizeConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'sizeConcernOD' : 'sizeConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: sizeConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },
  
  
  handleTightnessConcernChanged: function(e) {
    const { lensId, identifier, tightnessConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'tightnessConcernOD' : 'tightnessConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: tightnessConcern});
      this.setData({
        [`lensCollection[${lensIndex}]`]: updatedLens
      });
    }
  },

  handleCurvatureConcernChanged: function(e) {
    const { lensId, identifier, curvatureConcern } = e.detail;
    const lensIndex = this.data.lensCollection.findIndex(lens => lens.id === lensId);
    if (lensIndex !== -1) {
      const lensKey = identifier === 'OD' ? 'curvatureConcernOD' : 'curvatureConcernOS';
      const updatedLens = Object.assign({}, this.data.lensCollection[lensIndex], {[lensKey]: curvatureConcern});
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

