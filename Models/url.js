const { default: mongoose } = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
    redirectedURL: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    totalVisit: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

urlSchema.pre("save", async function (next) {
  console.log(this.totalVisit[1]);
  this.totalVisit[1]++;
  next();
});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
