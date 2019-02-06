import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object'
let Person = EmberObject.extend({
firstName: null,
lastName: null,

fullName: computed('firstName', 'lastName', function() {
return `${this.firstName} ${this.lastName}`;
//console.log(fullname);
})
});

let tom = Person.create({
firstName: 'Tom',
lastName: 'Dale'
});
//console.log(tom.fullName);

export default Route.extend({
  //return tom;
  model(){
return tom;
  }
});
