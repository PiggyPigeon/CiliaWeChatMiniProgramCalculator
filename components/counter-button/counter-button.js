// components/counter-button/counter-button.js
Component({
  properties: {
    index: {
      type: Number,
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
    }
  }
});
