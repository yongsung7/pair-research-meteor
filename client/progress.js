if (Meteor.isClient) {
    Template.progress.helpers({
	latestAffinity: function(){
	    var lastUpdate = Affinity.findOne({}, {sort:{timestamp: -1}})
	    if(lastUpdate && lastUpdate.timestamp) {
		return lastUpdate.timestamp / 1000;
	    }
	    else return ""
	},
	numAffinities: function(){
	    var affs = Affinity.find();
	    return affs.count()
	},
	numPeople: function(){
	    var peeps = Pool.find({need: {$ne: ""}});
	    return peeps.count()
	}
    })
}
