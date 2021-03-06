var module = {};
// Include your views
include("Javascript/Views/Template.js");
include("Javascript/Views/PlayMoreView.js");
include("Javascript/Views/PlayView.js");
include("Javascript/Views/PlaySportsView.js");
include("Javascript/Views/HomeView.js");
include("Javascript/Views/VideoView.js");
include("Javascript/Views/TransportOverlay.js");

// Data URL to be used to fetch the news
var token_endpoint_url = 'http://127.0.0.1:81/sa/oauth/token?grant_type=urn:eos:cpe:certificate&client_id=tvshop';
//var token_endpoint_url = 'https://silentauth.cloud/oauth/token?grant_type=urn:eos:cpe:certificate&client_id=tvshop';
var api_gateway_url = 'http://whoami.cloud/whoami';

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
	},
	ControlMediaTransportOverlayButton: {
		styles: {
			fontSize: 30,
			height: 100,
			width: 100,
			borderRadius: 2
		},
		normal: {
			styles: {
				color: 'white',
				backgroundColor: ''
			}
		},
		focused: {
			styles: {
				color: 'white',
				backgroundColor: '#5f429c'
			}
		}
	}
});

// Overlay style



// Init application with view config
MAF.application.init({
	views: [
		{ id: 'view-HomeView', viewClass: HomeView },
		{ id: 'view-PlayMoreView', viewClass: PlayMoreView },
		{ id: 'view-PlayView', viewClass: PlayView },
		{ id: 'view-PlaySportsView', viewClass: PlaySportsView },
		{ id: 'view-VideoView', viewClass: VideoView },
		{ id: 'view-TransportOverlay', viewClass: TransportOverlay },
		{ id: 'view-About', viewClass: MAF.views.AboutBox } // Use standard About view
	],
	defaultViewId: 'view-HomeView',
	settingsViewId: 'view-About'
});
