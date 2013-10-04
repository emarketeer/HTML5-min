var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());

if ( ie ) {
	if ( ie < 8 ) {
		window.onload = function() {
	    	var div = document.createElement('div');
	    	div.className = 'old-browser';
	    	if (document.body.firstChild) {
	      	document.body.insertBefore(div, document.body.firstChild);
	    	} else {
	      	document.body.appendChild(div);
	    	}
		    div.innerHTML = 'The internet browser your are using is extremely outdated. Elements on this website may not display as intended.<br />You should <a href="http://browsehappy.com" target="_blank">upgrade your browser</a> immediately.';
  		};
	}
}