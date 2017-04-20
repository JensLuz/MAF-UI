var HomeView = new MAF.Class({
		ClassName: 'HomeView',

		Extends: MAF.system.FullscreenView,
		animating: false,

		initialize: function () {
			var view = this;
			view.parent(); // Call the super class, in this case the FullscreenView
			view.setStyle('backgroundColor', 'rgba(0, 0, 0, 0.8)');
			var counter = 0;
		},

		createView: function () {
			var view = this;
			this.setStyles({
				backgroundColor: 'rgba(30,30, 30, 1)'
			});
			
			var  mainContainer = view.elements.mainContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 1080,
				vOffset: 0
				}
			}).appendTo(view);
			
			
			var statusText = view.createTextblock(10,780,1910,40,"",18,"white",view.elements.mainContainer);
			var statusText2 = view.createTextblock(10,820,1910,40,"",18,"white",view.elements.mainContainer);
			
			var statusText4 = view.createTextblock(10,920,1910,40,"",18,"white",view.elements.mainContainer);
			var accessToken;
			var headerAuth = 0;
			
			var customerDataObject = view.getCustomerData();
			statusText4.setText(customerDataObject);
			
			var  headerContainer = view.elements.headerContainer = new MAF.element.Container({
			styles: {
				width: 1920,
				height: 80,
				vOffset: 0,
				backgroundColor: 'rgba(0,0,0, 0.3)'
				}
			}).appendTo(view);
			
			//Header app name
			var headerLabel = new MAF.element.Text({
				label: $_("TV-SHOP"),
				styles: {
					color: 'rgba(250,250,250, 0.5)',
					//color: 'white',
					fontSize: 35,
					//backgroundColor: 'black',
					trucanion: 'end',
					wrap: true,
					width: 200,
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

			var welcomeText = "Welkom in de TV-Shop";
			var topLabel = new MAF.element.Text({
				label: $_(welcomeText),
				styles: {
					color: "white",
					fontSize: 65,
					//backgroundColor: 'black',
					width: 750,
					height: 100,
					hOffset: 630,
					vOffset: 200
				},
				textStyles: {
					anchorStyle: 'center'
				}
			}).appendTo(mainContainer);
			
			var welcomeText2 = "Kies uw abonnement:";
			var topLabel2 = new MAF.element.Text({
				label: $_(welcomeText2),
				styles: {
					color: "white",
					fontSize: 40,
					//backgroundColor: 'black',
					width: 750,
					height: 70,
					hOffset: 750,
					vOffset: 350
				},
				textStyles: {
					anchorStyle: 'center'
				}
			}).appendTo(mainContainer);
				
			this.elements.mainSlider = view.createCarousel(10,500,1920,190,mainContainer);
			
			var productImages = [
				'Images/Play/PLAY_logo.png',
				'Images/PlayMore/PLAYMORE_logo.png',
				'Images/PlaySports/PLAYSPORTS_logo.png'
			];
			this.elements.mainSlider.changeDataset(
			productImages.map( function( e ) { return {title: e};}),true);

		},

		updateView: function () {
			
		},

		destroyView: function () {
			delete this.animating;
			delete this.timer;
		},
		
		getTokens: function (callback) {
			var view = this;
			var oauthRequest = new XMLHttpRequest();
			var token_endpoint_url = 'http://127.0.0.1:81/sa/oauth/token?grant_type=urn:eos:cpe:certificate&client_id=tvshop';
			var err;

			oauthRequest.open("POST", token_endpoint_url, true);
			oauthRequest.onreadystatechange = function () {

				if (oauthRequest.readyState === 4 && oauthRequest.status === 200) {
					err = 0;
					callback(err, oauthRequest.responseText);
					//return token;
					return oauthRequest.responseText;
				} else {
					token = "fail";
					err = 1;
					callback(err);
				}
			};
			oauthRequest.send();
		},
		
		getData: function (tokens, callback) {
			var view = this;
			var apiRequest = new XMLHttpRequest();
			var api_gateway_url = 'http://whoami.cloud/whoami';
			var err2;
			
			tokenObject = JSON.parse(tokens);
			accessToken = tokenObject.access_token;

			apiRequest.open("GET", api_gateway_url, false);
			apiRequest.setRequestHeader('Authorization', 'bearer ' + accessToken);
			apiRequest.onreadystatechange = function () {
				
				if (apiRequest.readyState === 4 && apiRequest.status === 200) {
					err2 = 0;
					callback(err2, apiRequest.responseText);
					return apiRequest.responseText;
				} else {
					err2 = 1;
					callback(err2);
				}
			};
			apiRequest.send();
		},
		
		getCustomerData: function () {
			var view = this;
			var statusText3 = view.createTextblock(10,820,1910,40,"",18,"white",view.elements.mainContainer);
			var statusText4 = view.createTextblock(10,840,1910,40,"",18,"white",view.elements.mainContainer);
			var tokens = view.getTokens(function(err, data){
				if (err == 0){
					statusText3.setText("Tokens retrieved");
					var customerData = view.getData(data,function(err, data2){
						if (err == 0){
						statusText3.setText("Customer data retrieved");
						statusText4.setText(data2);
						
						var statusText5 = view.createTextblock(10,880,1910,40,"",18,"white",view.elements.mainContainer);
						//dataObject = JSON.parse(data2);
						statusText5.setText(data2.firstName);
						
						return data2;
						} else statusText3.setText("Customer data not available");
					});
					return customerData;
				} else statusText3.setText("Tokens not available");
			});		
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
		createCarousel: function (posx, posy, width, height, container) {

			var slider = new MAF.element.SlideCarousel({
					visibleCells: 3,
					focusIndex: 2,
					slideDuration: 0.3,
					styles: {
						width: width,
						height: height,
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
									onBlur: function () {
										this.title.animate({
											duration: 0.2,
											backgroundColor: 'rgba(20,20, 20, 1)',
											//backgroundColor: 'black'
											});
									},
									onSelect: function(){
										var data = this.getCellDataItem();
										var available_views = ['view-PlayView','view-PlayMoreView',
										'view-PlaySportsView'];
										var index = this.getCellDataIndex();
										var view_ID = available_views[index];
										MAF.application.loadView(view_ID, {
										prevData: data
										});
									}
								}
						});

						cell.title = new MAF.element.Image({
								hideWhileLoading: true,
								manageWaitIndicator: true,
								//aspect: "auto",
								styles: {
									width: 620,
									height: 175,
									//backgroundColor: 'black',
									backgroundColor: 'rgba(20,20, 20, 1)',
									paddingTop: 15,
									paddingLeft: 15,
									paddingRight: 15,
									paddingBottom: 15
								}
							}).appendTo(cell);
						return cell;
					},
					cellUpdater: function (cell, data) {
						cell.title.setSource(data.title);
					},
					events: {
						onDatasetChanged: function () {
							//this.getCurrentCell().focus();
							this.animate({
								opacity: 1,
								duration: 0.2
							});
						},
						onNavigate: function (event) {
							this.customNavigate && this.customNavigate(event);
						}
					}
				}).appendTo(container);
			return slider;
		}
	});