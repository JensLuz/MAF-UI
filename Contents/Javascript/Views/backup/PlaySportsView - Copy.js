var PlaySportsView = new MAF.Class({
	ClassName: 'PlaySportsView',

	Extends: MAF.system.FullscreenView,
	animating: false,

	createView: function () {
		var view = this;
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
		//set containers
		var  mainContainer = view.elements.mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0
				}
		}).appendTo(view);
		
		var  headerContainer = view.elements.mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 80,
				vOffset: 0,
				backgroundColor: 'rgba(0,0,0, 0.3)'
				}
			}).appendTo(view);
			
		//Header app name
		var playsportsLabel = new MAF.element.Text({
			label: $_("PLAY SPORTS"),
			styles: {
				color: 'rgba(250,250,250, 0.5)',
				//color: 'white',
				fontSize: 35,
				//backgroundColor: 'black',
				trucanion: 'end',
				wrap: true,
				width: 300,
				height: 40,
				hOffset: 50,
				vOffset: 18
			},
			textStyles: {
				anchorStyle: 'center'
			}
		}).appendTo(headerContainer);
		
			//Real-time clock
			var time = moment().format('HH:mm');
			var clockLabel = new MAF.element.Text({
            ClassName: 'Clock',
            data: time,
			styles: {
					color: 'rgba(250,250,250, 0.5)',
					//color: 'white',
					fontSize: 35,
					//backgroundColor: 'black',
					trucanion: 'end',
					wrap: true,
					width: 200,
					height: 40,
					hOffset: 1750,
					vOffset: 18
					},
				textStyles: {
					anchorStyle: 'center'
				}
			});

			this.timer = new Timer(1, function () {
            var now = moment().format('HH:mm');
            if (now !== time) {
                clockLabel.setText(now);
            }
			});
			this.timer.start();
			clockLabel.appendTo(headerContainer);

		var  bigContainer = view.elements.bigContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 3080,
				vOffset: 0
				}
		}).appendTo(mainContainer);
		
		//FIRST SECTION
		//top container
		var  topContainer = view.elements.topContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0,
				backgroundImage: backgroundSources[0]
				}
		}).appendTo(bigContainer);
		
		var backButton = new MAF.control.BackButton({
			label: $_('BACK'),
			styles: {
				vOffset: 90,
				paddingLeft: 30,
				width: 180
			}
		}).appendTo(topContainer);
		
		//button container top
		var topButtonContainer = view.elements.topButtonContainer = new MAF.element.Container({
			styles: {
				width: 810,
				height: 90,
				vOffset: 820,
				hOffset: 130,
				//backgroundColor: 'black'
				}
		}).appendTo(topContainer);
		
		//top subscribe button
		var topButton = view.elements.topButton = new MAF.control.TextButton({
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
					console.log("Animate top");

				},
				onSelect: function () {
					console.log("topSubscribe selected");
				},
				onNavigate: function (event) {

					//when the user scrolls down
					if (event.payload.direction === 'down') {
							console.log("topSUBSCRIBE Down pressed");
							view.moveContainers(event.payload.direction, middleButton);
							event.stop();
					}
				}
			}
		}).appendTo(topButtonContainer);
		
		//top daypass button
		var topButton2 = new MAF.control.TextButton({
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
	
					//when the user scrolls down
					if (event.payload.direction === 'down') {
							console.log("topDAYPASS Down pressed");
							view.moveContainers(event.payload.direction, middleButton);
							event.stop();
					}
					
				}
			}
		}).appendTo(topButtonContainer);
		
		//top voorwaarden button
		var topButton3 = new MAF.control.TextButton({
			label: $_('Voorwaarden'),
			styles: {
				width: 250,
				height: 85,
				backgroundColor: 'black',
				fontSize: 32,
				hOffset: 560,
				vOffset: 0
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {

				},
				onNavigate: function (event) {
	
					//when the user scrolls down
					if (event.payload.direction === 'down') {
							console.log("topRULES Down pressed");
							view.moveContainers(event.payload.direction, middleButton);
							event.stop();
					}
					
				}
			}
		}).appendTo(topButtonContainer);
		
		//PLAY SPORTS logo
		var  img_playsports = new MAF.element.Image({
			src: 'Images/PlaySports/PLAYSPORTS_logo.png',
			missingSrc: 'Images/telenet_logo.png',
			styles: {
				vOffset: 160,
				hOffset: 130,
				width: 500
			}
		}).appendTo(topContainer);
		
		//Top text fields
		this.elements.promoText1 = view.createTextblock(130,300,700,400,promoString1,55,"white",topContainer);
		this.elements.promoText2 = view.createTextblock(130,550,800,400,promoString2,30,"white",topContainer);

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
					MAF.application.loadView('view-VideoView', "");
				}
			}
		}).appendTo(topContainer);		
		
		
		//MIDDLE SECTION
		//middle container
		var  middleContainer = view.elements.middleContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 1000,
				backgroundImage: backgroundSources[1]
				}
		}).appendTo(bigContainer);
				
		//image container middle
		var middleImageContainer = view.elements.middleButtonContainer = new MAF.element.Container({
			styles: {
				width: 600,
				height: 100,
				vOffset: 620,
				hOffset: 130,
				//backgroundColor: 'black'
				}
		}).appendTo(middleContainer);
		
		var slider1 = this.elements.slider1 = view.createHorizontalGrid(0,0,750,80,middleImageContainer,80,80,1);
		this.elements.slider1.changeDataset(
		sportsImages.map( function( e ) { return {title: e};}),true);
				
		slider1.customNavigate = function(event) {
				switch (event.payload.direction) {
					case "up" : view.moveContainers(event.payload.direction, topButton);
					case "down" : middleButton.focus();
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
		}).appendTo(middleContainer);
		
		//cycling image container middle
		var cyclingImageContainer = view.elements.cyclingImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(middleContainer);
		
		//golf image container middle
		var golfImageContainer = view.elements.golfImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(middleContainer);
		
		//moto image container middle
		var motoImageContainer = view.elements.motoImageContainer = new MAF.element.Container({
			styles: {
				width: 1000,
				height: 150,
				vOffset: 590,
				hOffset: 1000,
				//backgroundColor: 'black'
				}
		}).appendTo(middleContainer);
		
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
		
		//button container middle
		var middleButtonContainer = view.elements.middleButtonContainer = new MAF.element.Container({
			styles: {
				width: 810,
				height: 90,
				vOffset: 820,
				hOffset: 130,
				//backgroundColor: 'black'
				}
		}).appendTo(middleContainer);
		
		//middle subscribe button
		var middleButton = view.elements.topButton = new MAF.control.TextButton({
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
					console.log("Animate middle");
					view.hideAllDynamicContainers();
				},
				onSelect: function () {
					console.log("Middle selected");
				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls up or down
					console.log("middleSUBSCRIBE Up/Down pressed");
					switch(event.payload.direction) {
						case 'up':
							slider1.focus();
							break;
						case 'right':
							middleButton2.focus();
							break;
						case 'down':
							//view.moveContainers(event.payload.direction, slider1);
					break;}
				}
			}
		}).appendTo(middleButtonContainer);
		
		//middle daypass button
		var middleButton2 = new MAF.control.TextButton({
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
					view.hideAllDynamicContainers();
				},
				onNavigate: function (event) {
				event.stop();
					//when the user scrolls up or down
					console.log("middleDAYPASS Up/Down pressed");
					switch(event.payload.direction) {
						case 'up':
							slider1.focus();
							break;
						case 'left':
							middleButton.focus();
							break;
						case 'down':
							//view.moveContainers(event.payload.direction, slider1);
					break;}
				}
			}
		}).appendTo(middleButtonContainer);
		
		//Set middle texts
		this.elements.promoText3 = view.createTextblock(130,250,700,400,promoString3,55,"white",middleContainer);
		this.elements.promoText4 = view.createTextblock(130,400,700,400,promoString4,30,"white",middleContainer);

	
		
		
		
		//BOTTOM SECTION
		//bottom container
		var  bottomContainer = view.elements.bottomContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 2000,
				backgroundImage: backgroundSources[2]
				}
		}).appendTo(bigContainer);

		

	


	

				

		



/* 		
		//bottom button
		var bottomButton = view.elements.bottomButton = new MAF.control.TextButton({
			label: $_('Bottom'),
			styles: {
				width: 250,
				height: 100,
				backgroundColor: 'black',
				hOffset: 50,
				vOffset: 350
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					console.log("Animate bottom");

				},
				onNavigate: function (event) {
					//when the user scrolls up
					if (event.payload.direction === 'up') {
						console.log("BOTTOMBUTTON UP pressed");
						view.moveContainers(event.payload.direction, middleButton);
						event.stop();
					} 			 
			}}
		}).appendTo(bottomContainer); */


		


		
		
		
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
		
/* 		slider1 = this.elements.slider1 = view.createCarousel(400,350,bottomContainer);
		slider1.customNavigate = function(event) {
				switch (event.payload.direction) {
					case "up" : view.moveContainers(event.payload.direction, middleButton);
					break;
				}
		};
		this.elements.slider1.changeDataset(
		imageSources1.map( function( e ) { return {title: e};}),true); */
		
	},

	moveContainers: function(direction, focusItem) {
		var view = this,
		moveSize = 1000;
		console.log('MOVE: ', direction);
		if (!view.animating) {
			view.animating = true;
			switch(direction) {
				case 'up':
				case 'down':
					view.elements.bigContainer.animate({
							duration: 0.3,
							vOffset: direction === 'up' ? (view.elements.bigContainer.vOffset + moveSize) : (view.elements.bigContainer.vOffset - moveSize),
							events: {
								onAnimationEnded: function(ani) {
									focusItem.focus();
									view.animating = false;
									ani.reset();
								}
							}
					});
					break;
			}
		}
	},
	
	//Textblock creator
	createTextblock: function(posx,posy,w,h,text,fontsize,clr,container) {
		var textBlock = new MAF.element.Text({
			label: $_(text),
			styles: {
				color: clr,
				fontSize: fontsize,
				//backgroundColor: 'black',
				trucanion: 'end',
				wrap: true,
				width: w,
				height: h,
				hOffset: posx,
				vOffset: posy
			},
			textStyles: {
				anchorStyle: 'center'
			}
		}).appendTo(container);
		return textBlock;
	},
	
	// Creates the Carousel and returns it as var
	createCarousel: function(posx,posy,pxwide,pxhigh,container) {
		var view = this;	
		var slider = new MAF.element.SlideCarousel({
			visibleCells: 8,
			focusIndex: 1,
			slideDuration: 0.2,
			styles:{
				width: pxwide, //1000
				height: pxwide, //175
				hOffset: posx,
				vOffset: posy
			},
			cellCreator: function () {
				var cell = new MAF.element.SlideCarouselCell({
					styles: {
						//this.getCellDimensions(),
						width: 90,
						height: 100,
					},
					events: {
						onFocus: function () {
							this.title.animate({
								//transform: 'translate3d(+1500px, 0px, 0px)',
								duration: 0.2,
								//backgroundColor: 'white'
								backgroundColor: Theme.getStyles('BaseFocus', 'backgroundColor')
							});
						},
						onBlur: function(){
							this.title.animate({
								duration: 0.2,
								backgroundColor: 'black'
							});
						},
						onSelect: function(){

						}
					}
				});
				
				cell.title = new MAF.element.Image({
					hideWhileLoading: true,
					manageWaitIndicator: true,
					//aspect: "auto",
						styles: {
							width: 125,
							height: 175,
							backgroundColor: 'black',
							paddingTop: 7,
							paddingLeft: 7,
							paddingRight: 7,
							paddingBottom: 7
						}
				}).appendTo(cell);
				return cell;
			},
				cellUpdater: function(cell, data){
					cell.title.setSource(data.title);
				},
			events: {
				onDatasetChanged: function(){
					//this.getCurrentCell().focus();
					this.animate({
						opacity: 1,
						duration: 0.2
					});
				},
				onNavigate: function(event) {this.customNavigate && this.customNavigate(event);}
			}
		}).appendTo(container);
		return slider;
	},
	
	// Creates the Carousel and returns it as var
	createHorizontalGrid: function(posx,posy,pxwide,pxhigh,container,cellwidth,cellheight,showContainerSwitch) {
		var view=this;
		var horizontalGrid = new MAF.element.Grid({
			rows: 1,
			columns: 8,
			carousel: true,
			styles: {
				width: pxwide, //400
				height: pxhigh, // 80
				vOffset: posx,
				hOffset: posy
			},
			cellCreator: function () {
				var cell = new MAF.element.GridCell({
					styles: this.getCellDimensions(),
					events:{
						onSelect: function () {
							log('onSelect GridCell', this.getCellIndex());
						},
						onFocus: function () {
							this.animate({
								backgroundColor: Theme.getStyles('BaseFocus', 'backgroundColor'),
								duration: 0.1,
								//scale: 1.2
							});
							log('onFocus GridCell', this.getCellIndex());
							if (showContainerSwitch===1) {
								switch(this.getCellIndex()) {
									case 0:
										console.log('ImageGrid case 0');
										view.hideAllDynamicContainers();
										view.elements.footballImageContainer.show()	;
									break;
									case 1:
										console.log('ImageGrid case 1');
										view.hideAllDynamicContainers();
										view.elements.cyclingImageContainer.show();
									break;
									case 2:
										console.log('ImageGrid case 2');
										view.hideAllDynamicContainers();
										view.elements.golfImageContainer.show();
									break;
									case 3:
										console.log('ImageGrid case 3');
										view.hideAllDynamicContainers();
										view.elements.motoImageContainer.show();
									break;
									case 4:
										console.log('ImageGrid case 4');
										view.hideAllDynamicContainers();
									break;}
							}
						},
						onBlur: function () {
							this.animate({
								backgroundColor: null,
								duration: 0.1,
								//scale: 1.0
							});
						}
					}
				});

				cell.title = new MAF.element.Image({
					hideWhileLoading: true,
					manageWaitIndicator: true,
					//aspect: "auto",
						styles: {
							width: cellwidth, //80
							height: cellheight, //80
							//backgroundColor: 'black',
							paddingTop: 7,
							paddingLeft: 10,
							paddingRight: 10,
							paddingBottom: 7
						}
				}).appendTo(cell);
				return cell;
			},
			cellUpdater: function (cell, data) {
				cell.title.setSource(data.title);
			},
			events: {
				onNavigate: function(event) {this.customNavigate && this.customNavigate(event);}
			}
		}).appendTo(container);
		
		return horizontalGrid;
	},
	
	hideAllDynamicContainers: function() {
		var view = this;
		view.elements.footballImageContainer.hide();
		view.elements.cyclingImageContainer.hide();
		view.elements.golfImageContainer.hide()
		view.elements.motoImageContainer.hide()
	},

	updateView: function() {
		var view = this;
	},

	destroyView: function() {
		delete this.animating;
		delete this.timer;
	}

});
