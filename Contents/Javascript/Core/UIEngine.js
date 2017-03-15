var UIEngine = function () {

	//This object handles the sale - communicates with the backend
	var purchaseManager = function (product) {};

	//Timers are needed to keep the header clock up to date
	var timeManager = function () {};

	//Fix the header on each view
	var setHeader = function (time) {};

	//Creates the Carousel and returns it as var
	var createCarousel = function (posx, posy, width, heigth, container) {

		var slider = new MAF.element.SlideCarousel({
				visibleCells: 3,
				focusIndex: 2,
				slideDuration: 0.3,
				styles: {
					width: 1920,
					height: 190,
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
								onSelect: function () {
									var data = this.getCellDataItem();
									var available_views = ['view-PlayView', 'view-PlayMoreView',
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
	};
}
();