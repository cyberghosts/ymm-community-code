// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a POI Schema. This will be the basis of how user data is stored in the db
var POISchema = new Schema({
    poiname: {type: String, required: true},
    address: {type: String, required: false},
    phone: {type: String, required: false},
    description: {type: String, required: true},
    category: {type: String, required: true},
    rating: {type: Number, required: false},
    location: {type: [Number], required: true}, // [Long, Lat]
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

// Sets the created_at parameter equal to the current time
POISchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Indexes this schema in geoJSON format (critical for running proximity searches)
POISchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-user"
module.exports = mongoose.model('geodb-poi', POISchema);
