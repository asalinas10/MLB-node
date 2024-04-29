const Team = require('../models/teamModel');
const factory = require('./handlerFactory');

exports.createTeam = factory.createOne(Team);
exports.getAllTeams = factory.getAll(Team);
exports.getTeam = factory.getOne(Team);
exports.updateTeam = factory.updateOne(Team);
exports.deleteTeam = factory.deleteOne(Team);
