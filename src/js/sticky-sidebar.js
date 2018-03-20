import 'sticky-sidebar';

new StickySidebar('#sticky-sidebar', {
	containerSelector: '#main-content',
	innerWrapperSelector: '.sidebar__inner',
	topSpacing: 20,
	bottomSpacing: 20,
	minWidth: 767
});