const Media = require("../models/media");


module.exports = {
    async index (req, res)  {
        const filter = req.headers.filter

        const media = await Media.find(filter)
        return res.json(media)
    },
    async create(req, res)  {
        const media = await Media.create(req.body);
    
        return res.json(media);
    }
}