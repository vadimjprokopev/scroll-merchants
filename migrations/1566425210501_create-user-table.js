/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true
    },
    username: {
      type: "varchar(255)",
      notNull: true,
      unique: true
    },
    password: {
      type: "varchar(255)",
      notNull: true
    },
    created: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp")
    },
    deleted: {
      type: "timestamp",
      default: null
    }
  });
};
