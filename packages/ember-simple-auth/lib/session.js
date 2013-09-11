Ember.SimpleAuth.Session = Ember.Object.extend({
  init: function() {
    this._super();
    this.set('authToken', sessionStorage.authToken);
  },
  logout: function() {
    this.set('authToken', undefined);
  },
  isAuthenticated: Ember.computed('authToken', function() {
    return !Ember.isEmpty(this.get('authToken'));
  }),
  authTokenObserver: Ember.observer(function() {
    sessionStorage.authToken = this.get('authToken');
  }, 'authToken')
});