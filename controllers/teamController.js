const Team = require('../models/teamModel');
const factory = require('./handlerFactory');

exports.setTeamUserIds = (req, res, next) => {
  if (!req.body.team) req.body.team = req.params.teamId;
  // if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.createTeam = factory.createOne(Team);
exports.getAllTeams = factory.getAll(Team);
exports.getTeam = factory.getOne(Team);
exports.updateTeam = factory.updateOne(Team);
exports.deleteTeam = factory.deleteOne(Team);
