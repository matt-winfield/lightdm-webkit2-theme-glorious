class SwipeEventCallback {
	constructor() {
		this._bodyBackground = document.querySelector('.body-background');
		this._sidebar = document.querySelector('.sidebar#sidebar');
		this._createMouseSwipeEvents();
	}

	_createMouseSwipeEvents() {

		// Swipe event for body overlay
		const bodyBackgroundSwipe = new SwipeEvent(
			this._bodyBackground,
			(el, dir) => {
				if (dir === 'left') {
					sidebar.showSidebar();
				}
			}
		);

		const sidebarSwipe = new SwipeEvent(
			this._sidebar,
			(el, dir) => {
				if (dir === 'right') {
					sidebar.hideSidebar();
				}
			}
		);
	}
}
