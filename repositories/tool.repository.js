var mongoose = require('mongoose')
var Tool = require('../config/db');


module.exports = new class ToolRepository {

    getAll() {
        return Tool.find();
    }

    getByTag(tag) {
        return Tool.find({ 
            tags: { $in: [tag] }
          });
    }

    create(tool) {
        return Tool.create(tool);
    }

    delete(id) {
        return Tool.deleteOne({ id: id });
        
    }

}