const mongoose = require('mongoose');
const slugify = require('slugify');

const teamSchema = new mongoose.Schema(
  {
    id: Number,
    name: {
      type: String,
      required: [true, 'Every team must have a name'],
      unique: true,
    },
    slug: String,
    location: {
      type: String,
      required: [true, 'Every team must have a location'],
    },
    park: {
      type: String,
      required: [true, 'Every team must have a park'],
    },
    players: Number,
    avgAge: Number,
    runsPerGame: Number,
    plateAppearences: Number,
    atBats: Number,
    runs: Number,
    hits: Number,
    doubles: Number,
    triples: Number,
    homeruns: Number,
    runsBattedIn: Number,
    stolenBases: Number,
    caughtStealing: Number,
    basesOnBalls: Number,
    strikeouts: Number,
    battingAverage: Number,
    onBasePercentage: Number,
    slugging: Number,
    ops: Number,
    opsplus: Number,
    totalBases: Number,
    hitByPitch: Number,
    sacBunts: Number,
    sacFlys: Number,
    intentionalBasesOnBalls: Number,
    leftOnBase: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

teamSchema.index({ slug: 1 });

// DOCUMENT MIDDLEWARE

// Embed slug into new tour
teamSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
