
exports.seed = function(knex) {
      return knex('users').insert([
        {id: 1, username: 'eleasah', password: '$2y$08$dk9PALY6yE5vObJMDVYt7u6p22teLQt0rThef44tV0jat5uQSUqXW'},
        {id: 2, username: 'jason', password: '$2y$08$dk9PALY6yE5vObJMDVYt7u6p22teLQt0rThef44tV0jat5uQSUqXW'},
        {id: 3, username: 'emily', password: '$2y$08$dk9PALY6yE5vObJMDVYt7u6p22teLQt0rThef44tV0jat5uQSUqXW'}
      ]);
};
