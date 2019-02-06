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

let obj =[];
// let tom = Person.create({
// firstName: 'Tom',
// lastName: 'Dale'
// });
// //console.log(tom.fullName);
// let alice = Person.create({
// firstName: 'Alice',
// lastName: 'Joyce'
// });
// let steeve = Person.create({
// firstName: 'Steeve',
// lastName: 'David'
// });

let arr=Person.create([{
firstName: 'Tom',
lastName: 'Dale'
},{
firstName: 'Alice',
lastName: 'Joyce'
},{
firstName: 'Steeve',
lastName: 'David'
}]);



// obj.push(tom);
// obj.push(alice);
// obj.push(steeve);

export default Route.extend({
  //return tom;
  model(){
      for(var i=0;i<arr.length;i++){
        obj.push(arr[i]);
        //console.log(obj[i]);
        //return obj;

    }
    console.log(obj);
    return obj;



  }
});
