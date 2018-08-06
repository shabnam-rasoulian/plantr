const { db, Gardener, Plot, Vegetable } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    const veg = Vegetable.create({ name: 'tomato', color: 'red' });
    /*
    veg.then(() => {
      return veg.create({ name: 'tomato', color: 'red' });
    });*/
    //const veg = Vegetable.create({ name: 'tomato', color: 'red' });
    // Vegetable.create({ name: 'avocado', color: 'green' }),
    // Vegetable.create({ name: 'carrot', color: 'orange' }),

    db.close();
  })
  .catch(err => {
    console.log('Disaster!');
    console.log(err);
    //db.close();
  });

//db.close();
