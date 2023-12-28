// components/counter-button/counter-button.js
Component({
  properties: {
    count: {
      type: Number,
      value: 0
    },
    identifier: {
      type: String,
      value: 'OD'
    },
    counterId: {
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
  },

  methods: {
    toggleCollapse: function() {
      const collapsed = !this.data.collapsed;
      this.setData({ collapsed });
    },

    incrementCount: function() {
      this.triggerEvent('incrementCount', {
        identifier: this.properties.identifier,
        counterId: this.properties.counterId
      });
    },

    takeNotes: function(e) {
      this.triggerEvent('takeNotes', {
        notes: e.detail.value,
        identifier: this.properties.identifier,
        counterId: this.properties.counterId
      });
    }

  }
});
