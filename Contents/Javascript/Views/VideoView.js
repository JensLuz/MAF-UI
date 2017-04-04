var VideoView = new MAF.Class({
	Extends: MAF.system.FullscreenView,

	ClassName: 'VideoView',

	initialize: function () {
		// Reference to the current view
		var view = this;
		view.parent(); // Call super class constructor
		MAF.mediaplayer.init(); // Initialize mediaplayer
	},

	// Create your view template
	createView: function () {
		// Reference to the current view
		var view = this;
		YouTube.get('https://www.youtube.com/watch?v=3ZPTIn0jmzw', function(config) {
			MAF.mediaplayer.playlist.set((new MAF.media.Playlist()).addEntry(new MAF.media.PlaylistEntry(config)));
			MAF.mediaplayer.playlist.start();
			playlist.onPlaylistEnd(MAF.application.loadView('view-PlayView', ""));
		});
	},

	// When closing the application make sure you unreference your objects and arrays
	destroyView: function () {
		MAF.mediaplayer.control.stop();
	}
});
