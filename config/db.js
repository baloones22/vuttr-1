var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://127.0.0.1/db_vuttr');

var Schema = mongoose.Schema;

autoIncrement.initialize(mongoose);


var toolsSchema = new Schema({
    title: String,
    link: String,
    description: String,
    tags: [String]
});

toolsSchema.plugin(autoIncrement.plugin, {
    model: 'Tool',
    field: 'id',
    startAt: 1,
    incrementBy: 1
});

toolsSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var retJson = {
            id: ret.id,
            title: ret.title,
            link: ret.link,
            description: ret.description,
            tags: ret.tags
        };
        return retJson;
    }
});


var Tool = mongoose.model('Tool', toolsSchema);
module.exports = Tool;