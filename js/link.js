function goLink(url, newTab) {
	if (newTab) {
	 	window.open(url, '_blank', 'height=250, width=650');
	} 
	else {
		window.open(url, '_blank');
	}
};