Polymer({
  is: 'my-comp-team-06',

  properties: {


    progressPercent: {
      type: Number,
      value: 0,
      observer: '_progressPercentChanged'
    },
    showPercentage: {
      type: Boolean,
      value: false
    }
  },

  _progressPercentChanged: function (newValue) {
    var progressValue = newValue;

    if (progressValue >= 100) {
      progressValue = 100;
    } else if (progressValue <= 0) {
      progressValue = 0;
    }

    this.$.progressIndicator.style.width = progressValue + '%';
  },

  // Element Lifecycle

  created: function () {
  },

  ready: function () {
    // `ready` is called after all elements have been configured, but
    // propagates bottom-up. This element's children are ready, but parents
    // are not.
    //
    // This is the point where you should make modifications to the DOM (when
    // necessary), or kick off any processes the element wants to perform.
  },

  attached: function () {
    // `attached` fires once the element and its parents have been inserted
    // into a document.
    //
    // This is a good place to perform any work related to your element's
    // visual state or active behavior (measuring sizes, beginning animations,
    // loading resources, etc).
  },

  detached: function () {
    // The analog to `attached`, `detached` fires when the element has been
    // removed from a document.
    //
    // Use this to clean up anything you did in `attached`.
  },

  // Element Behavior

  /**
   * Sometimes it's just nice to say hi.
   *
   * @param {string} greeting A positive greeting.
   * @return {string} The full greeting.
   */
  sayHello: function (greeting) {
    var response = greeting || 'Hello World!';
    return 'my-comp-team-06 says, ' + response;
  },

  /**
   * The `my-comp-team-06-lasers` event is fired whenever `fireLasers` is called.
   *
   * @event my-comp-team-06-lasers
   * @detail {{sound: String}}
   */

  /**
   * Attempt to destroy this element's enemies with a beam of light!
   *
   * Or, at least, dispatch an event in the vain hope that someone else will
   * do the zapping.
   */
  fireLasers: function () {
    this.fire('my-comp-team-06-lasers', { sound: 'Pew pew!' });
  }
});