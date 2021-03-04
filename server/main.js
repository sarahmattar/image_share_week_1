import { Meteor } from 'meteor/meteor';

import '../lib/collections.js';

Meteor.startup(() => {
	// code to run on server at startup
	if (Images.find().count() == 0) {
		for (var i = 1; i < 23; i++) {
			Images.insert({
				img_src: 'img_' + i + '.jpg',
				img_alt: 'image number ' + i,
			});
		} // end of for insert images
	} // end of if have no images
	// count the images!
	console.log('startup.js says: ' + Images.find().count());
});
