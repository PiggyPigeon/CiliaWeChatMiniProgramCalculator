// components/counter-button/counter-button.js
Component({
  properties: {
    index: {
      type: Number,
    },

    comfortLevels: {
      type: Array,
      value: ['very comfortable', 'acceptable', 'unwearable',],
    },

    comfortIndex: {
      type: Number,
      value: 0, 
    },

    count: {
      type: Number,
      value: 0
    },

    identifier: {
      type: String,
      value: 'OD'
    },

    lensId: {
      type: Number,
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
    
    sizeConcern: {
      type: String,
      value: '', 
    },

    tightnessConcern: {
      type: String,
      value: '', 
    },

    curvatureConcern: {
      type: String,
      value: '',  
    },

    originalResultOD: String,
    originalResultOS: String,

  },

  methods: {
    toggleCollapse: function() {
      const collapsed = !this.data.collapsed;
      this.setData({ collapsed });
    },

    incrementCount: function() {
      this.triggerEvent('incrementCount', {
        identifier: this.properties.identifier,
        lensId: this.properties.lensId
      });
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

    onRadioChangeSize: function(e) {
      this.setData({ sizeConcern: e.detail.value });
      this.triggerEvent('sizeConcernChanged', { sizeConcern: this.data.sizeConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },
    onRadioChangeTightness: function(e) {
      this.setData({ tightnessConcern: e.detail.value });
      this.triggerEvent('tightnessConcernChanged', { tightnessConcern: this.data.tightnessConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },
    onRadioChangeCurvature: function(e) {
      this.setData({ curvatureConcern: e.detail.value });
      this.triggerEvent('curvatureConcernChanged', { curvatureConcern: this.data.curvatureConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

    
  }
});
