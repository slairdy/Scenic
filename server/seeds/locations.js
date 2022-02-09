/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        { id:1,
          name: "Muriwai",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1},
        {id:2,
          name: "Titirangi Beach",
        lat_long:"-36.95088061389701, 174.6597378808997",
        descr: "lorem ipsum dolor sit amet",
        owner_id: 1,
        admin_entry: 1,
        activated: 1},
        {id:3,
          name: "placeholder",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1},
        {id:4,
          name: "placeholder",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1},
        {id:5,
          name: "placeholder",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1},
        {id:6,
          name: "placeholder",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1},
        {id:7,
          name: "placeholder",
          lat_long:"-36.83370190679586, 174.4276397464362",
          descr: "lorem ipsum dolor sit amet",
          owner_id: 1,
          admin_entry: 1,
          activated: 1}
      ]);
    });
};