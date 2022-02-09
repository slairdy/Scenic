/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('featured_location').del()
    .then(function () {
      // Inserts seed entries
      return knex('featured_location').insert([
        {id: 1, location_id: 2}
      ]);
    });
};
