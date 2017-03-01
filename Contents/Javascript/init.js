// Include your views
include("Javascript/Views/MainView.js");

// Set base glow and focus theme
Theme.set({
	BaseGlow: {
		styles: {
			color: 'white',
			backgroundColor: 'transparent'
		}
	},
	BaseFocus: {
		styles: {
			backgroundColor: '#FFBF00'
		}
	}
});

// Backbutton style


// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-MainView', viewClass: MainView },
		{ id: 'view-About', viewClass: MAF.views.AboutBox } // Use standard About view
	],
	defaultViewId: 'view-MainView',
	settingsViewId: 'view-About'
});
