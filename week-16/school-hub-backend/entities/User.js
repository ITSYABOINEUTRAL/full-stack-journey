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

    // Registration / email-verification state, stored as JSON:
    //   {
    //     otp:          123456,                       // 6-digit code
    //     is_verified:  false,                        // flipped true on verify
    //     time_sent:    "2026-11-18T10:00:00.000Z",   // when the code was issued
    //     time_updated: "2026-11-18T10:00:00.000Z"    // last change to this blob
    //   }
    // jsonb lets Postgres store and index it as real JSON.
    reg_metadata: {
      type: "jsonb",
      nullable: true,
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