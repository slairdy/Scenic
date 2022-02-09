/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('location_features').del()
    .then(function () {
      // Inserts seed entries
      return knex('location_features').insert([
        {feature_id: 2, location_id: 1},
        {feature_id: 3, location_id: 1},
        {feature_id: 5, location_id: 1},
        {feature_id: 4, location_id: 2},
        {feature_id: 3, location_id: 2},
        {feature_id: 1, location_id: 2},
        {feature_id: 5, location_id: 2},
        {feature_id: 3, location_id: 3},
        {feature_id: 1, location_id: 3},
        {feature_id: 1, location_id: 4},
        {feature_id: 2, location_id: 4},
        {feature_id: 3, location_id: 4},
        {feature_id: 4, location_id: 4},
        {feature_id: 5, location_id: 4},
        {feature_id: 3, location_id: 5},
        {feature_id: 4, location_id: 5},
        {feature_id: 2, location_id: 6},
        {feature_id: 3, location_id: 6},
        {feature_id: 4, location_id: 6},
        {feature_id: 5, location_id: 6},
        {feature_id: 2, location_id: 7}
      ]);
    });
};
