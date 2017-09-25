import Ember from 'ember';

export default Ember.Route.extend({
  model.function () {
    return this.store.query('question', {
      orderBy: 'content',
     }
  });
    actions: {
      save3(params){
        var newQuestion=this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index'),
      }
      update(question, params) {
        Object.keys(params)forEach(function(key) {
          if(params[key])!==undefined) {
          }
       });
       question.save()
       this.transitionTo('index'),
     }
    }
  });
