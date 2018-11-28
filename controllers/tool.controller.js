const ToolRepository = require('../repositories/tool.repository');

/**
 * Controller do request /tools (GET)
 */
exports.get = (req, res, next) => {

    if (req.query.tag == null) {
        ToolRepository.getAll()
            .then((tools) => {
                res.status(200).send(tools);
            }).catch(err => res.status(500).send(err))
    } else {
        ToolRepository.getByTag(req.query.tag)
        .then((tools) => {
            res.status(200).send(tools);
        }).catch(err => res.status(500).send(err))
    }

};

/**
 * Controller do request /tools (POST)
 * Criaçaõ de um nova ferramenta
 */
exports.post = (req, res, next) => {
    const t = req.body;
    ToolRepository.create(t)
        .then((tool) => {
            res.status(200).send(tool);
        }).catch(err => res.status(500).send(err))
};

/**
 * Controller do request /tools/:id (DELETE)
 */
exports.delete = (req, res, next) => {
    ToolRepository.delete(req.params.id)
        .then((tool) => {
            res.status(200).send();
        }).catch(err => console.error.bind(console, `Error ${err}`))
};