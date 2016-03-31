import Ember from 'ember';

export default Ember.Route.extend({
  model() {  //the same as writing model: function()
    return Ember.RSVP.hash({
      cities: this.store.findAll('city'),
      rentals: this.store.findAll('rental')
    });

    // return this.store.findAll('announcement');
     //step 2: -this.store.findAll('rental') here we modify the route to find method.  we specify this.store to refer to the Firebase data store that we set up.  Then we run the findAll method with the argument rental; this instructs Ember Data to find all records fo the type rental in the store and return the to our application.  step 1: -return rentals- a method within an Ember class is called a hook.  Here is a model hook added to our index route handler.  the hook returns an array of hard coded property rentals
  },
  announcements() {
    return this.store.findAll('announcement');
  },
  actions: {
    // save3(params) {
    //   var newRental = this.store.createRecord('rental', params);
    //   newRental.save();
    //   this.transitionTo('index');
    // },
    save6(params) {
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('index');
    },
    deleteCity(city) {
      if (confirm('You sure you want to delete this city?')) {
        city.destroyRecord();
        this.transitionTo('index');
      }
    }

  }
});

//the index.hbs template will read this as the model property. model data in a route handler is available to the templates and components that correspond to that route.  The index.hbs can display this model data because the data is within its context.


// okay, so I'm writing about this in here because I don't know how to comment out the hbs file.  just like angular we are running a for each loop in the html.  okay, cool.  Whatever.  This is an example of what we're doing. Maybe this is the new norm?
// <ul>
//   {{#each model as |rental|}}
//      <li>{{rental.owner}}'s {{rental.type}} in {{rental.city.name}}</li>
//   {{/each}}
// </ul>
//we are looping through the model hook and we are labeling each object in that mofo 'rental' and then we are calling the object properties and listing them out.

//so we just added a rental-tile component.  Now this looks similar to angular where we nest the various components and display different html stuff.  we changed the for loop above to:
// <ul>
//   {{#each model as |rental|}}
//     <li>{{rental-tile rental=rental}}</li>
//   {{/each}}
// </ul>
// so we are still looping through the model and assigning the variable name rental to it.  variable names on the left of the equals refer to the name used within the component; on the right is the object we're assigning that variable name to.


//the save function is passed up from the save1 function on the route handler for the new rental, it gets sent with the params laid out in that function.  the save1 function is called with an action helper in a button on the new rental hbs page.  I think this gets passed up as a save2 function to the index hbs where save 2 is set to equal save 3. Which this function uses on the index source file. Not quite sure about it all.
