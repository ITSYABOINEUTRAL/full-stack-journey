
const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "User",
  tableName: "users",

  columns: {
    id: {
      type: "int",
      primary: true,
      generated: true,
    },

    fullName: {
      type: "varchar",
      length: 150,
    },

    email: {
      type: "varchar",
      length: 150,
      unique: true,
    },

    password: {
      type: "varchar",
      length: 100,
      select: false,
    },

    role: {
      type: "enum",
      enum: ["admin", "teacher", "student"],
      default: "student",
    },

    avatar: {
      type: "varchar",
      length: 500,
      nullable: true,
    },

    isActive: {
      type: "boolean",
      default: true,
    },

    createdAt: {
      type: "timestamp",
      createDate: true,
    },

    updatedAt: {
      type: "timestamp",
      updateDate: true,
    },
  },
});
