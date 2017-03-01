var MainView = new MAF.Class({
	ClassName: 'MainView',

	Extends: MAF.system.FullscreenView,

	initialize: function () {
		var view = this;
		view.parent(); // Call the super class, in this case the FullscreenView
		view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
		var counter = 0;
		view.animating = false;
	},

	createView: function () {
		var view = this;
		var focusBool = false;

		//set containers
		var  mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080
				}
		}).appendTo(view);

		var  bigContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 3080
				}
		}).appendTo(mainContainer);
		
		//top container
		var  topContainer = this.elements.topContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0
				}
		}).appendTo(bigContainer);
		//middle container
		var  middleContainer = this.elements.middleContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 1000
				}
		}).appendTo(bigContainer);
		//bottom container
		var  bottomContainer = this.elements.bottomContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 2000
				}
		}).appendTo(bigContainer);
		
		//set background images
		var  topWallpaper = new MAF.element.Image({
			styles: {
				width: 1920,
				height: 1080
			}
		});
		topWallpaper.setSources({
			src: 'Images/wallpaper1.jpg',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(topContainer);
		
		var  middleWallpaper = new MAF.element.Image({
			styles: {
				width: 1920,
				height: 1080
			}
		});
		middleWallpaper.setSources({
			src: 'Images/wallpaper2.jpg',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(middleContainer);
		
		var  bottomWallpaper = new MAF.element.Image({
			styles: {
				width: 1920,
				height: 1080
			}
		});
		bottomWallpaper.setSources({
			src: 'Images/wallpaper3.jpg',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(bottomContainer);
		
		//top subscribe button
		var topButton = new MAF.control.TextButton({
			label: $_('Subscribe'),
			styles: {
				width: 250,
				height: 100,
				backgroundColor: 'black',
				hOffset: 1000,
				vOffset: 700
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					console.log("Animate top");

				},
				onSelect: function () {
					console.log("Top selected");
				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls down
					switch(event.payload.direction) {
						case 'right':
							console.log("SUBSCRIBE Right pressed");
							topButton2.focus();
							break;
						case 'down':
							console.log("SUBSCRIBE Down pressed");
							view.moveContainers(event.payload.direction, middleButton);
							break;
					}
				}
			}
		}).appendTo(topContainer);
		
		//top daypass button
		var topButton2 = new MAF.control.TextButton({
			label: $_('Daypass'),
			styles: {
				width: 250,
				height: 100,
				backgroundColor: 'black',
				hOffset: 1300,
				vOffset: 700
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {

				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls down
					switch(event.payload.direction) {
						case 'left':
							console.log("SUBSCRIBE Left pressed");
							topButton.focus();
							break;
						case 'down':
							console.log("SUBSCRIBE Down pressed");
							view.moveContainers(event.payload.direction, middleButton);
							break;
					}
				}
			}
		}).appendTo(topContainer);
		
		//middle button
		var middleButton = new MAF.control.TextButton({
			label: $_('Middle'),
			styles: {
				width: 250,
				height: 100,
				backgroundColor: 'black',
				hOffset: 1000,
				vOffset: 500
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					console.log("Animate middle");

				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls up or down
					console.log("DAYPASS UP OR DOWN pressed");
					switch(event.payload.direction) {
						case 'up':
							view.moveContainers(event.payload.direction, topButton);
							break;
						case 'down':
							view.moveContainers(event.payload.direction, bottomButton);
							break;
					}
				}
			}
		}).appendTo(middleContainer);
		
		//bottom button
		var bottomButton = new MAF.control.TextButton({
			label: $_('Bottom'),
			styles: {
				width: 250,
				height: 100,
				backgroundColor: 'black',
				hOffset: 1000,
				vOffset: 500
			},
			textStyles: {
				anchorStyle: 'center'
			},
			events: {
				onFocus: function () {
					console.log("Animate bottom");

				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls up
					if (event.payload.direction === 'up') {
						console.log("BOTTOMBUTTON UP pressed");
						view.moveContainers(event.payload.direction, middleButton);
					}
			}}
		}).appendTo(bottomContainer);
		
		
		//PLAY MORE logo
		var  img_playmore = new MAF.element.Image({
			styles: {
				vOffset: 100,
				hOffset: 1000,
				width: 500
			}
		}).appendTo(view);
		
		img_playmore.setSources({
			src: 'Images/play_more.png',
			missingSrc: 'Images/telenet_logo.png'
		}).appendTo(topContainer);
		
		var promoText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis \
				vitae sagittis dui. Mauris aliquam ultrices libero, et accumsan est \
				efficitur eu. Vivamus consectetur, ipsum vitae laoreet varius, nisl \
				augue elementum nibh, ut pulvinar nisi mauris a ex. Fusce erat orci, \
				luctus et egestas quis, fringilla quis magna. Nulla facilisi. Nulla \
				scelerisque iaculis sapien, sed tincidunt lectus laoreet vitae. Nullam \
				sit amet risus tristique, pulvinar elit eu, condimentum lorem. Proin \
				pellentesque est in vestibulum ornare.";
				
		//Beschikbaar in Play More
		var topLabel = new MAF.element.Text({
			label: $_(promoText),
			styles: {
				color: "white",
				fontSize: 25,
				//backgroundColor: 'black',
				trucanion: 'end',
				wrap: true,
				width: 700,
				height: 400,
				hOffset: 1000,
				vOffset: 300
			},
			textStyles: {
				anchorStyle: 'center'
			}
		}).appendTo(topContainer);
		
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
		
	},

	moveContainers: function(direction, focusItem) {
		var view = this,
			moveSize = 1000;
		console.log('MOVE: ', direction)
		if (!view.animating) {
			view.animating = true;
			switch(direction) {
				case 'up':
				case 'down':
					view.elements.topContainer.animate({
							duration: 0.3,
							vOffset: direction === 'up' ? (view.elements.topContainer.vOffset + moveSize) : (view.elements.topContainer.vOffset - moveSize),
							events: {
								onAnimationEnded: function() {
									focusItem.focus();
									view.animating = false;
								}
							}
					});
					view.elements.middleContainer.animate({
							duration: 0.3,
							vOffset: direction === 'up' ? (view.elements.middleContainer.vOffset + moveSize) : (view.elements.middleContainer.vOffset - moveSize)
					});
					view.elements.bottomContainer.animate({
							duration: 0.3,
							vOffset: direction === 'up' ? (view.elements.bottomContainer.vOffset + moveSize) : (view.elements.bottomContainer.vOffset - moveSize)
					});
					break;
			}
		}
	},

	// After the update view the focus view is called
	focusView: function () {
		var view = this;
	},

	destroyView: function() {
		delete this.animating;
	}

});
