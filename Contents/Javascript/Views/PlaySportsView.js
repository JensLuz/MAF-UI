var Template = Template || require('./Javascript/Views/Template.js');
var PlaySportsView = new MAF.Class({
	ClassName: 'PlaySportsView',

	Extends: Template,
	animating: false,

	updateView: function () {
		var view = this;
		var CurrentProduct="PLAYSPORTS";
		view.parent(); // Call super class constructor
		view.setStyles({
			width: 1920,
			height: 3080
		});
		var focusBool = false;
		
		//SET ARRAYS
		//Backgrounds
		var backgroundSources=[
		"Images/PlaySports/playsports_bg1.jpg",
		"Images/PlaySports/playsports_bg2.jpg",
		"Images/PlaySports/playsports_bg3.jpg"
		];
		//Text
		var promoString1 = "Beleef sport straffer dan ooit voor € 18.40 per maand";
		var promoString2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sagittis dui. Mauris aliquam ultrices libero, et accumsan est efficitur eu. Vivamus consectetur, ipsum vitae laoreet varius, nisl augue elementum nibh, ut pulvinar nisi mauris a ex. Fusce erat orci, luctus et egestas quis, fringilla quis magna. Nulla facilisi.";
		var promoString3 = "Het grootste aanbod, boordevol topsport.";
		var promoString4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sagittis dui. Mauris aliquam ultrices libero, et accumsan est efficitur eu.";
		//Middle slider
		var sportsImages=	[
		"Images/PlaySports/football.png",
		"Images/PlaySports/bicycle.png",
		"Images/PlaySports/golf.png",
		"Images/PlaySports/moto.png",
		"Images/PlaySports/volleyball.png"];	
		//football leagues images
		var footballImages=[
		"Images/PlaySports/CL_logo.jpg",
		"Images/PlaySports/JupilerPro_logo.png",
		"Images/PlaySports/PremierLeague_logo.png",
		"Images/PlaySports/Eredivisie_logo.png",
		"Images/PlaySports/PrimeraDivision_logo.png",
		"Images/PlaySports/BundesLiga_logo.png"
		];
		//cycling tours
		var cyclingImages=[
		"Images/PlaySports/TourDeFrance_logo.jpg",
		"Images/PlaySports/Vuelta_logo.jpg",
		"Images/PlaySports/Giro_logo.png",
		"Images/PlaySports/MilanSanRemo_logo.jpg",
		"Images/PlaySports/ParisRoubaix_logo.jpg",
		"Images/PlaySports/Scheldeprijs_logo.jpg",
		];
		//Golf tours
		var golfImages=[
		"Images/PlaySports/EuropeanTour_logo.gif",
		"Images/PlaySports/PGAtour_logo.jpg",
		"Images/PlaySports/RyderCup_logo.png"
		];
		//Moto championships
		var motoImages=[
		"Images/PlaySports/Formula1_logo.jpg",
		"Images/PlaySports/Superbike_logo.gif",
		"Images/PlaySports/MotoGP_logo.jpg"
		];

		this.setStyles({backgroundColor: 'rgba(0, 0, 0, 0.8)'});

		// Set containers
		view.elements.topContainer.setStyles({backgroundImage: backgroundSources[0]});
		view.elements.middleContainer.setStyles({backgroundImage: backgroundSources[1]});
		view.elements.bottomContainer.setStyles({backgroundImage: backgroundSources[2]});
		view.elements.headerLabel.setText("PLAY SPORTS");
		
		//TOP SECTION
		view.elements.img_productlogo.setSource('Images/PlaySports/PLAYSPORTS_logo.png');
		//Top text fields
		this.elements.promoText1 = view.createTextblock(130,300,700,400,promoString1,55,"white",view.elements.topContainer);
		this.elements.promoText2 = view.createTextblock(130,550,800,400,promoString2,30,"white",view.elements.topContainer);
		
		//top play video button
		var playtrailerButton = new MAF.control.TextButton({
			styles: {
				width: 106,
				height: 106,
				//backgroundColor: 'black',
				backgroundImage:"Images/play_video.png",
				fontSize: 32,
				hOffset: 1300,
				vOffset: 450
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					this.setStyles({backgroundColor: "Images/play_video_hover.png"});
				},
				onSelect: function () {
					MAF.application.loadView('view-VideoView', ""); //Put original view in data parameter to know which movie to play
				}
			}
		}).appendTo(view.elements.topContainer);	
		
		//MIDDLE SECTION
		this.elements.promoText3 = view.createTextblock(130,300,700,400,promoString3,55,"white",view.elements.middleContainer);
		this.elements.promoText4 = view.createTextblock(130,450,800,400,promoString4,30,"white",view.elements.middleContainer);

		//middle subscribe button
		var middleButton = view.elements.middleButton = new MAF.control.TextButton({
			label: $_('Abonneer'),
			styles: {
				width: 250,
				height: 85,
				backgroundColor: 'black',
				fontSize: 32,
				hOffset: 0,
				vOffset: 0
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {

				},
				onNavigate: function (event) {
					event.stop();
					switch(event.payload.direction) {
						case 'right':
							view.elements.middleButton2.focus();
							break;
						case 'up':
							view.elements.slider1.focus();
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.bottomButton);
					break;}
				}
			}
		}).appendTo(view.elements.middleButtonContainer);
		
		//middle daypass button
		var middleButton2 = view.elements.middleButton2 = new MAF.control.TextButton({
			label: $_('Dagpas'),
			styles: {
				width: 250,
				height: 85,
				backgroundColor: 'black',
				fontSize: 32,
				hOffset: 280,
				vOffset: 0
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {

				},
				onNavigate: function (event) {
					event.stop();
					switch(event.payload.direction) {
						case 'left':
							view.elements.middleButton.focus();
							break;
						case 'up':
							view.elements.slider1.focus();
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.bottomButton);
					break;}
				}
			}
		}).appendTo(view.elements.middleButtonContainer);	
		
		//image container middle
		var middleImageContainer = view.elements.middleImageContainer = new MAF.element.Container({
			styles: {
				width: 600,
				height: 100,
				vOffset: 620,
				hOffset: 130,
				//backgroundColor: 'black'
				}
		}).appendTo(view.elements.middleContainer);
		
		var slider1 = this.elements.slider1 = view.createHorizontalGrid(0,0,750,80,middleImageContainer,80,80,1);
		this.elements.slider1.changeDataset(
		sportsImages.map( function( e ) { return {title: e};}),true);
				
		slider1.customNavigate = function(event) {
				switch (event.payload.direction) {
					case "up" : view.moveContainers(event.payload.direction, view.elements.topButton);
					case "down" : view.elements.middleButton.focus();
					case "left" : hideAllDynamicContainers();
					case "right" : hideAllDynamicContainers();
					break;
				}
		};
		
		//football image container middle
		var footballImageContainer = view.elements.footballImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(view.elements.middleContainer);
		
		//cycling image container middle
		var cyclingImageContainer = view.elements.cyclingImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(view.elements.middleContainer);
		
		//golf image container middle
		var golfImageContainer = view.elements.golfImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(view.elements.middleContainer);
		
		//moto image container middle
		var motoImageContainer = view.elements.motoImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(view.elements.middleContainer);
		
		//football images collection -- no navigation
		var slider2 = view.elements.slider2 = view.createHorizontalGrid(0,0,1000,130,footballImageContainer,130,130,0);
		view.elements.slider2.changeDataset(
		footballImages.map( function( e ) { return {title: e};}),true);
		
		//cycling images collection -- no navigation
		var slider3 = view.elements.slider3 = view.createHorizontalGrid(0,0,1000,130,cyclingImageContainer,130,130,0);
		view.elements.slider3.changeDataset(
		cyclingImages.map( function( e ) { return {title: e};}),true);
		
		//golf images collection -- no navigation
		var slider4 = view.elements.slider4 = view.createHorizontalGrid(0,0,1000,130,golfImageContainer,130,130,0);
		view.elements.slider4.changeDataset(
		golfImages.map( function( e ) { return {title: e};}),true);
		
		//moto images collection -- no navigation
		var slider5 = view.elements.slider5 = view.createHorizontalGrid(0,0,1000,130,motoImageContainer,130,130,0);
		view.elements.slider5.changeDataset(
		motoImages.map( function( e ) { return {title: e};}),true);
		
		//Hide dynamic sports containers
		view.hideAllDynamicContainers();

		
		
		//BOTTOM SECTION

		var bottomButton = view.elements.bottomButton = new MAF.control.TextButton({
			styles: {
				width: 106,
				height: 106,
				//backgroundColor: 'black',
				backgroundImage:"Images/play_video.png",
				fontSize: 32,
				hOffset: 1200,
				vOffset: 530
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					this.setStyles({backgroundColor: "Images/play_video_hover.png"});
				},
				onSelect: function () {
					console.log(this.getView());
				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls up or down
					console.log("Bottom Play Button Nav");
					switch(event.payload.direction) {
						case 'up':
							view.moveContainers(event.payload.direction, view.elements.middleButton);
							break;
					}
				}
			}
		}).appendTo(view.elements.bottomContainer);

		
		var imageSources1=[
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5663/7EGUG00Z/posters/lord-of-the-rings-1-the-fellowship-of-the-ring.jpg', //339x488
		'http://imgc.allpostersimages.com/images/P-473-488-90/62/6212/G9S1100Z/posters/lord-of-the-rings-two-toweres.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5661/HZDUG00Z/posters/lord-of-the-rings-the-return-of-the-king.jpg',
		'http://cache2.allpostersimages.com/p/LRG/93/9318/CK67500Z/posters/james-bond-spectre-colour-teaser.jpg'
		];		
	},

	destroyView: function() {
		delete this.animating;
		delete this.timer;
	},
	
	hideAllDynamicContainers: function() {
		var view = this;
		view.elements.footballImageContainer.hide();
		view.elements.cyclingImageContainer.hide();
		view.elements.golfImageContainer.hide();
		view.elements.motoImageContainer.hide();
	},

});
