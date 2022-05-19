const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const todoSchema = new Schema(
  {
    title: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },

    completed: Boolean,
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    active: Boolean,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const ToDo = model("ToDo", todoSchema);

module.exports = ToDo;