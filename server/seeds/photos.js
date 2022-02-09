/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {location_id: 1, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 2, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 3, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 4, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 5, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 6, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
        {location_id: 7, filepath: 'muriwai_1.png', descr:'Cliffs at Muriwai beach', credit:'Kushal Permal',credit_url:'https://unsplash.com/@fightagainstthedyingofthelight'},
      ]);
    });
};