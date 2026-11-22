
const { EntitySchema } = require("typeorm");

// A PENDING signup. This is NOT a user yet.
// It holds the entered details plus the OTP state in reg_metadata.
// When the OTP is verified, the controller creates a real User from this
// row and then deletes it. Nothing here ever lands in the users table
// until verification succeeds.
module.exports = new EntitySchema({
  name: "Registration",
  tableName: "registrations",

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

    // One pending registration per email; a repeat signup overwrites it.
    email: {
      type: "varchar",
      length: 150,
      unique: true,
    },

    // Already bcrypt-hashed in the controller — never plaintext.
    password: {
      type: "varchar",
      length: 100,
    },

    // The OTP lives here, as JSON:
    //   {
    //     otp:          123456,                       // 6-digit int
    //     is_verified:  false,                        // flipped true on verify
    //     time_sent:    "2026-11-18T10:00:00.000Z",   // when the code was issued
    //     time_updated: "2026-11-18T10:00:00.000Z"    // last change to this blob
    //   }
    reg_metadata: {
      type: "jsonb",
    },

    createdAt: {
      type: "timestamp",
      createDate: true,
    },
  },
});