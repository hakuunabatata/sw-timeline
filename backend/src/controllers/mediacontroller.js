const Media = require("../models/media");

module.exports = {
  async index(req, res) {
    const filter = JSON.parse(req.headers.authorization);

    const media = await Media.find(filter).sort({ timeline: 1 });
    return res.json(media);
  },
  async create(req, res) {
    const media = await Media.create(req.body);

    return res.json(media);
  },
};
