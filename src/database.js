const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/IBMV').
  catch(error => handleError(error))
  .then(() => console.log('¡CONNECTED!'));

mongoose.connection.on('error', err => {
    logError(err);
});

