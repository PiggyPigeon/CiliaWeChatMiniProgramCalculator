// components/counter-button/counter-button.js
Component({
  properties: {
    index: {
      type: Number,
    },

    comfortLevels: {
      type: Array,
      value: ['很舒服', '可以接受', '不能戴',],
    },

    comfortIndex: {
      type: Number,
      value: 0, 
    },

    identifier: {
      type: String,
      value: 'OD'
    },

    lensId: {
      type: Number,
    },

    concernsCollapsed: {
      type: Boolean,
      value: false,
    },

    collapsed: {
      type: Boolean,
      value: false,
    },

    notes: {
      type: String,
      value: '',
    },

    BFKinput: {
      type: String,
      value: '',
    },

    concernTab: {
      type: String,
      value: 'none', 
    },
    
    OZsizeConcern: {
      type: String,
      value: '', 
    },

    OADsizeConcern: {
      type: String,
      value: '', 
    },

    RCthicknessConcern: {
      type: String,
      value: '', 
    },

    slidingConcern: {
      type: String,
      value: '', 
    },

    SPKConcern: {
      type: Boolean,
      value: false,
    },

    deviationConcern: {
      type: Boolean,
      value: false,
    },

    BFRpoolingConcern: {
      type: Boolean,
      value: false,
    },

    originalResultOD: String,
    originalResultOS: String,

  },


  methods: {

    toggleLensContent: function() {
      this.setData({ collapsed: !this.data.collapsed });
    },

    toggleConcernsCollapse: function() {
      this.setData({ concernsCollapsed: !this.data.concernsCollapsed });
    },

    takeNotes: function(e) {
      this.triggerEvent('takeNotes', {
        notes: e.detail.value,
        identifier: this.properties.identifier,
        lensId: this.properties.lensId
      });
    },

    editBFK: function(e) {
      this.triggerEvent('editBFK', {
        BFKinput: e.detail.value,
        identifier: this.properties.identifier,
        lensId: this.properties.lensId,
      });
    },

    changeComfortLevel: function(e) {
      this.setData({
        comfortIndex: e.detail.value
      });

      this.triggerEvent('changeComfortLevel', {
        comfortIndex: this.data.comfortIndex,
        identifier: this.properties.identifier,
        lensId: this.properties.lensId,
      });
    },

    toggleConcerns: function(e) {
      const concernState = e.currentTarget.dataset.concern;
      this.setData({ concernTab: concernState });

      this.triggerEvent('toggleConcerns', { concernTab: this.data.concernTab, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onRadioChangeOZSize: function(e) {
      this.setData({ OZsizeConcern: e.detail.value });
      this.triggerEvent('OZsizeConcernChanged', { OZsizeConcern: this.data.OZsizeConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onRadioChangeOADSize: function(e) {
      this.setData({ OADsizeConcern: e.detail.value });
      this.triggerEvent('OADsizeConcernChanged', { OADsizeConcern: this.data.OADsizeConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onRadioChangeRCthickness: function(e) {
      this.setData({ RCthicknessConcern: e.detail.value });
      this.triggerEvent('RCthicknessConcernChanged', { RCthicknessConcern: this.data.RCthicknessConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onRadioChangeSliding: function(e) {
      this.setData({ slidingConcern: e.detail.value });
      this.triggerEvent('slidingConcernChanged', { slidingConcern: this.data.slidingConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },


    onSPKChange: function(e) {
      this.setData({ SPKConcern: e.detail.value.length > 0 });
      this.triggerEvent('SPKChanged', { SPKConcern: this.data.SPKConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onDeviationChange: function(e) {
      this.setData({ deviationConcern: e.detail.value.length > 0 });
      this.triggerEvent('deviationChanged', { deviationConcern: this.data.deviationConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    onBFRpoolingChange: function(e) {
      this.setData({ BFRpoolingConcern: e.detail.value.length > 0 });
      this.triggerEvent('BFRpoolingChanged', { BFRpoolingConcern: this.data.BFRpoolingConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

  }
});
