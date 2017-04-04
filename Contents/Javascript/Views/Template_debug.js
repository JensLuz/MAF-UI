var Template = new MAF.Class({
	ClassName: 'Template',
	Extends: MAF.system.FullscreenView,

	createView: function () {
		var view = this;
		
		this.setStyles({
				backgroundColor: 'rgba(30,30, 30, 1)'
			});

		// Set containers
		var  mainContainer = view.elements.mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0
				}
		}).appendTo(view);
		//Header container
		var  headerContainer = view.elements.mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 80,
				vOffset: 0,
				backgroundColor: 'rgba(0,0,0, 0.3)'
				}
			}).appendTo(view);

		var  bigContainer = view.elements.bigContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 3080,
				vOffset: 0
				}
		}).appendTo(mainContainer);
		
		//Header app name
		var headerLabel = view.elements.headerLabel =  new MAF.element.Text({
			label: $_(""),
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
			
				
		//TOP SECTION
		var  topContainer = view.elements.topContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0,
				transform: 'translateZ(0)'
				}
		}).appendTo(bigContainer);

		var backButton = view.elements.backButton = new MAF.control.BackButton({
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
				onSelect: function() {
					var statusText = view.createTextblock(100,800,1800,20,"",18,"white",view.elements.topContainer);
					var statusText2 = view.createTextblock(100,820,1800,20,"",18,"white",view.elements.topContainer);
					var statusText3 = view.createTextblock(100,840,1800,20,"",18,"white",view.elements.topContainer);
					var statusText4 = view.createTextblock(100,860,1800,20,"",18,"white",view.elements.topContainer);
					var statusText5 = view.createTextblock(100,880,1800,20,"",18,"white",view.elements.topContainer);
					var statusText6 = view.createTextblock(100,900,1800,20,"",18,"white",view.elements.topContainer);

					var oauthRequest = new XMLHttpRequest();			
					var token_endpoint_url = 'http://127.0.0.1:81/sa/oauth/token?grant_type=urn:eos:cpe:certificate&client_id=tvshop';	
					var i = 0;
					var answer = [];
					
					oauthRequest.open("POST",token_endpoint_url, true);
					oauthRequest.onreadystatechange = function() {
						answer[oauthRequest.readyState]= oauthRequest.readyState + " - " + oauthRequest.responseText;
						
						if (oauthRequest.readyState=== 4 && oauthRequest.status === 200) {
							var tokenObject = JSON.parse(oauthRequest.responseText);
							statusText.setText(tokenObject.access_token);
							
							
							//var callResponse = oauthRequest.responseText;
							//var tokenObject = JSON.parse(callResponse);
							
							
							/* //Who am I
							var apiRequest = new XMLHttpRequest();
							var api_gateway_url = 'http://whoami.cloud/whoami';
							apiRequest.setRequestHeader('Authorization', 'bearer ' + tokenObject.access_token); //access_token here
							apiRequest.open("POST", api_gateway_url, false);
							statusText.setText("Access token: "+tokenObject.access_token);
							
							apiRequest.onreadystatechange = function() { 
								statusText3.setText("readystate: " + apiRequest.readyState + " & request status: " + apiRequest.status);
								if (apiRequest.readyState===4 && apiRequest.status === 200) {
									statusText3.setText("You have customer ID " + apiRequest.responseText);
								}
							}
							apiRequest.send(); */
						}
					};
					oauthRequest.send();
					statusText.setText(answer[0]);
					statusText2.setText(answer[1]);
					statusText3.setText(answer[2]);
					statusText4.setText(answer[3]);
					statusText5.setText(answer[4]);
					
				},
				onNavigate: function (event) {
					event.stop();
					//when the user scrolls up or down
					console.log("Top button container");
					switch(event.payload.direction) {
						case 'right':
							view.elements.topButton2.focus();
							break;
						case 'up':
							view.elements.backButton.focus();
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.middleButton);
					break;}
				}
			}
		}).appendTo(topButtonContainer);
		
		//top daypass button
		var topButton2 = view.elements.topButton2 = new MAF.control.TextButton({
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
					//when the user scrolls up or down
					console.log("Top button container");
					switch(event.payload.direction) {
						case 'right':
							view.elements.topButton3.focus();
							break;
						case 'up':
							view.elements.backButton.focus();
							break;
						case 'left':
							view.elements.topButton.focus();
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.middleButton2);
					break;}
				}
			}
		}).appendTo(topButtonContainer);
		
		//top voorwaarden button
		var topButton3 = view.elements.topButton3 = new MAF.control.TextButton({
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
					event.stop();
					//when the user scrolls up or down
					console.log("Top button container");
					switch(event.payload.direction) {
						case 'up':
							view.elements.backButton.focus();
							break;
						case 'left':
							view.elements.topButton2.focus();
							break;
						case 'down':
							view.moveContainers(event.payload.direction, view.elements.middleButton2);
					break;}
				}
			}
		}).appendTo(topButtonContainer);
		
		//PRODUCT logo
		var  img_productlogo = view.elements.img_productlogo = new MAF.element.Image({
			src: "",
			missingSrc: 'Images/telenet_logo.png',
			styles: {
				vOffset: 160,
				hOffset: 130,
				width: 500
			}
		}).appendTo(topContainer);
		
		//MIDDLE SECTION
		var  middleContainer = view.elements.middleContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 1000,
				transform: 'translateZ(0)'
				}
		}).appendTo(bigContainer);

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
		
		//BOTTOM SECTION
		var  bottomContainer = view.elements.bottomContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 2000,
				transform: 'translateZ(0)'
				}
		}).appendTo(bigContainer);
	},

	moveContainers: function(direction, focusItem) {
		var view = this,
		moveSize = 1000;
		console.log('MOVE: ', direction);
		if (!view.animating) {
			view.animating = true;
			switch(direction) {
				case 'up':
					view.elements.bigContainer.animate({
							duration: 0.3,
							vOffset: direction === 'down' ? (view.elements.bigContainer.vOffset - moveSize) : (view.elements.bigContainer.vOffset + moveSize),
							events: {
								onAnimationEnded: function(ani) {
									focusItem.focus();
									view.animating = false;
									ani.reset();
								}
							}
					});
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
			visibleCells: 7,
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
								//transform: 'translate3d(0px, 0px, 0px)',
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
				//onNavigate: function(event) {this.customNavigate && this.customNavigate(event);}
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
	}
});