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

      // <!-- learning about components -->
    fartCounters: [ 
      {id: 1, countOD: 0, countOS: 0, compNotesOD: '', compNotesOS: ''} 
    ],
    nextCounterId: 2,
    // compNotesOS: '',        
    // compNotesOD: '',


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

    comfortLevels: ['1 - 非常舒服', '2 - 可以', '3 - 不能穿'],
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
    const { identifier, counterId } = e.detail;
    const counters = this.data.fartCounters.map(counter => {
      if (counter.id === counterId) {
        if (identifier === 'OD') {
          return Object.assign({}, counter, { countOD: counter.countOD + 1 });
        } else if (identifier === 'OS') {
          return Object.assign({}, counter, { countOS: counter.countOS + 1 });
        }
      }
      return counter;
    });
    this.setData({
      fartCounters: counters
    });
  },

  handleNotes: function(e) {
    // Extract relevant information from the event object
    const { notes, identifier, counterId } = e.detail;

    // Create a new array by mapping over the existing fart counters
    const counters = this.data.fartCounters.map(counter => {
      // Check if the current counter's id matches the counterId passed in
      if (counter.id === counterId) {
        // Create a copy of the current counter to avoid modifying it directly
        const updatedCounter = Object.assign({}, counter);

        // Check the identifier ('OD' or 'OS') to determine which notes to update
        if (identifier === 'OD') {
          // Update the compNotesOD property of the copied counter with the new notes
          updatedCounter.compNotesOD = notes;
        } else if (identifier === 'OS') {
          // Update the compNotesOS property of the copied counter with the new notes
          updatedCounter.compNotesOS = notes;
        }

        // Return the updated counter
        return updatedCounter;
      }
      // If the current counter's id doesn't match, return it unchanged
      return counter;
    });

    // Set the data property 'fartCounters' to the new array with updated counters
    this.setData({
      fartCounters: counters
    });
  },


  addNewFartCounter: function() {
    const newCounter = { id: this.data.nextCounterId, countOD: 0, countOS: 0, compNotesOS: '', compNotesOD: '' };
    const newFartCounters = this.data.fartCounters.concat(newCounter); 
    this.setData({
      fartCounters: newFartCounters,
      nextCounterId: this.data.nextCounterId + 1
    });
  },
});
