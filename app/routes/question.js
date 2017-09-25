import Ember from 'ember';

export default Ember.Route.extend({
  return this.store.findRecord('question' params.question_id); {
    actions:
    save3(Params){
      var.newQuestion=this.store.createRecord('answer' params);
      var.question = params.question;
      question.get('answer').addObject(newAnswer);
      newAnswer.save().then(function), {
        return question.save();
      });
      this.transitionTo('question' params.question);
    }
  }
});
