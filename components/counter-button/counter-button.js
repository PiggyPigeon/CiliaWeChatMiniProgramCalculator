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

    deviationDirection: {
      type: String,
      value: '', 
    },

    BFRpoolingConcern: {
      type: Boolean,
      value: false,
    },

    originalResultOD: String,
    originalResultOS: String,

  },

  data: {
    deviationOptions: [
      { value: 'up', label: '上', checked: false },
      { value: 'up-right', label: '右上', checked: false },
      { value: 'right', label: '右', checked: false },
      { value: 'down-right', label: '右下', checked: false },
      { value: 'down', label: '下', checked: false },
      { value: 'down-left', label: '左下', checked: false },
      { value: 'left', label: '左下', checked: false },
      { value: 'up-left', label: '左上', checked: false },
    ],
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
      const isDeviationChecked = e.detail.value.includes('hasDeviation');
       this.setData({ deviationConcern: isDeviationChecked });
 
       if (!isDeviationChecked) {
        const resetOptions = this.data.deviationOptions.map(function(option) {
          return {
            value: option.value, 
            label: option.label,
            checked: false       
          };
        });
        this.setData({
          deviationOptions: resetOptions,
          deviationDirection: ''
        });
        this.triggerEvent('deviationDirectionChanged', {
          deviationDirection: this.data.deviationDirection,
          identifier: this.data.identifier,
          lensId: this.data.lensId
        });
     }
     this.triggerEvent('deviationChanged', {
      deviationConcern: isDeviationChecked,
      identifier: this.data.identifier,
      lensId: this.data.lensId
    });
  
    },
 
     onDeviationDirectionChange: function(e) {
      const newDirection = e.detail.value;
      const updatedOptions = this.data.deviationOptions.map(function(option) {
        return {
          value: option.value, 
          label: option.label, 
          checked: option.value === newDirection 
        };
      });
      this.setData({
        deviationOptions: updatedOptions,
        deviationDirection: newDirection,
      });
      this.triggerEvent('deviationDirectionChanged', {
        deviationDirection: this.data.deviationDirection,
        identifier: this.data.identifier,
        lensId: this.data.lensId
      });
    },

      onRadioChangeSliding: function(e) {
      this.setData({ slidingConcern: e.detail.value });
      this.triggerEvent('slidingConcernChanged', { slidingConcern: this.data.slidingConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },



    onBFRpoolingChange: function(e) {
      this.setData({ BFRpoolingConcern: e.detail.value.length > 0 });
      this.triggerEvent('BFRpoolingChanged', { BFRpoolingConcern: this.data.BFRpoolingConcern, identifier: this.data.identifier, lensId: this.data.lensId });
    },

  }
});
