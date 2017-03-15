var defaultBody = new MAF.Class({

	Extends: MAF.system.FullscreenView,

	viewBackParams: {
		reset: false
	},

	createView: function () {
		var self = this;

		var topContainer = new MAF.element.Container({
			ClassName: 'topContainer'
		}).appendTo(self);
	},

	doSomething: function () {
	}
});