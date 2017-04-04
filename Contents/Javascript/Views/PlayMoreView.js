var Template = Template || require('./Javascript/Views/Template.js');
var PlayMoreView = new MAF.Class({
	ClassName: 'PlayMoreView',

	Extends: Template,
	animating: false,

	updateView: function () {
		var view = this;
		var CurrentProduct="PLAYMORE";
		view.parent(); // Call super class constructor
		view.setStyles({
			width: 1920,
			height: 3080
		});
		
		var backgroundSources=[
		"Images/PlayMore/playmore_bg1.jpg",
		"Images/PlayMore/playmore_bg2.jpg",
		"Images/PlayMore/playmore_bg3.jpg"
		];
		var promoString1 = "De beste films en nieuwst series voor slechts € 24.95 per maand";
		var promoString2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sagittis dui. Mauris aliquam ultrices libero, et accumsan est efficitur eu. Vivamus consectetur, ipsum vitae laoreet varius, nisl augue elementum nibh, ut pulvinar nisi mauris a ex. Fusce erat orci, luctus et egestas quis, fringilla quis magna. Nulla facilisi.";
		var promoString3 = "Je favoriete films, series en kids content";
		var promoString4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae sagittis dui. Mauris aliquam ultrices libero, et accumsan est efficitur eu. Vivamus consectetur, ipsum vitae laoreet varius, nisl augue elementum nibh, ut pulvinar nisi mauris a ex. Fusce erat orci, luctus et egestas quis, fringilla quis magna.";
		var promoString5 = "Je favoriete programma's bekijken wanneer het jou uitkomt ...";
		var promoString6 = "Met Terugkijk TV van Play kan je de belangrijkste tv-programma's van de laatste 7 dagen (inclusief dag van uitzending) op elk moment herbekijken of herstarten op je tv, tablet of smartphone.";

		
		var imageSources1=[
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5663/7EGUG00Z/posters/lord-of-the-rings-1-the-fellowship-of-the-ring.jpg', //339x488
		'http://imgc.allpostersimages.com/images/P-473-488-90/62/6212/G9S1100Z/posters/lord-of-the-rings-two-toweres.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5661/HZDUG00Z/posters/lord-of-the-rings-the-return-of-the-king.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5666/DM3UG00Z/posters/the-matrix.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/55/5580/JZ3VG00Z/posters/the-matrix-reloaded.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/56/5662/U1FUG00Z/posters/the-matrix-revolutions.jpg',
		'http://imgc.allpostersimages.com/images/P-488-488-90/93/9337/SKU7500Z/posters/star-wars-episode-i.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/7/789/LLEI000Z/posters/star-wars-episode-ii-attack-of-the-clones.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/38/3899/G5RJF00Z/posters/star-wars-episode-3.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/95/9514/QJS6500Z/posters/star-wars-the-force-awakens-one-sheet.jpg',
		'http://cache2.allpostersimages.com/p/LRG/98/9834/SO4Y500Z/posters/star-wars-rogue-one-teaser.jpg',
		'http://cache2.allpostersimages.com/p/LRG/93/9318/CK67500Z/posters/james-bond-spectre-colour-teaser.jpg'
		];
		
		var imageSources2=[
		'http://cache2.allpostersimages.com/p/LRG/58/5890/3K2PG00Z/posters/game-of-thrones-winter-is-coming-house-stark.jpg',
		'http://cache2.allpostersimages.com/p/LRG/95/9515/8YP6500Z/posters/narcos-lies-are-necessary.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/69/6986/UXRK100Z/posters/breaking-bad-i-am-the-one-who-knocks.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/89/8961/FZBQ300Z/posters/house-of-cards-bad.jpg',
		'http://cache2.allpostersimages.com/p/LRG/87/8703/APQU300Z/posters/the-flash.jpg',
		'http://cache2.allpostersimages.com/p/LRG/87/8766/ZFAT300Z/posters/vikings.jpg',
		'http://cache2.allpostersimages.com/p/LRG/62/6228/XH93100Z/posters/dexter-angel.jpg',
		'http://cache2.allpostersimages.com/p/LRG/78/7802/OBQ5300Z/posters/suits.jpg',
		'http://imgc.allpostersimages.com/images/P-473-488-90/80/8012/KBS6300Z/posters/sherlock-close-up-foil-poster.jpg',
		'http://cache2.allpostersimages.com/p/LRG/86/8621/WQFM300Z/posters/supernatural-demons.jpg',
		'http://cache2.allpostersimages.com/p/LRG/95/9530/NQ94500Z/posters/the-100-key-art.jpg',
		'http://cache2.allpostersimages.com/p/LRG/97/9771/PFPZ500Z/posters/bojack-horseman-hollywood-poolside.jpg'
		];
		
		// Set containers
		view.elements.topContainer.setStyles({backgroundImage: backgroundSources[0]});
		view.elements.middleContainer.setStyles({backgroundImage: backgroundSources[1]});
		view.elements.bottomContainer.setStyles({backgroundImage: backgroundSources[2]});
		view.elements.headerLabel.setText("PLAY MORE");
		
		//TOP SECTION
		view.elements.img_productlogo.setSource('Images/PlayMore/PLAYMORE_logo.png');
		view.elements.img_productlogo.setStyles({hOffset: 1000});
		view.elements.topButtonContainer.setStyles({hOffset: 1000});
		//Top text fields
		this.elements.promoText1 = view.createTextblock(1000,300,700,400,promoString1,55,"white",view.elements.topContainer);
		this.elements.promoText2 = view.createTextblock(1000,550,800,400,promoString2,30,"white",view.elements.topContainer);
		
		//top play video button
		var playtrailerButton = new MAF.control.TextButton({
			styles: {
				width: 106,
				height: 106,
				//backgroundColor: 'black',
				backgroundImage:"Images/play_video.png",
				fontSize: 32,
				hOffset: 600,
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
		this.elements.promoString3 = view.createTextblock(130,250,700,400,promoString3,55,"white",view.elements.middleContainer);
		this.elements.promoString4 = view.createTextblock(130,450,800,400,promoString4,30,"white",view.elements.middleContainer);
	
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
							view.moveContainers(event.payload.direction, view.elements.topButton);
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
							view.moveContainers(event.payload.direction, view.elements.topButton2);
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.bottomButton);
					break;}
				}
			}
		}).appendTo(view.elements.middleButtonContainer);
		
		//BOTTOM SECTION
		this.elements.promoString5 = view.createTextblock(130,250,700,400,promoString5,55,"white",view.elements.bottomContainer);
		this.elements.promoString6 = view.createTextblock(130,500,700,400,promoString6,30,"white",view.elements.bottomContainer);
		
		//top play video button
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
		
		//4TH SECTION PLAY MORE
		var fourthContainer = view.elements.fourthContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				backgroundImage:"Images/PlayMore/playmore_bg4.jpg",
				vOffset: 3000,
				transform: 'translateZ(0)'
				}
		}).appendTo(view.elements.bigContainer);
		
		//Channel Slider
		
	},

	destroyView: function() {
		delete this.animating;
		delete this.timer;
	}

});
