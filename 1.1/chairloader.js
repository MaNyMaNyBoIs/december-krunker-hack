try {
	(ttap)(hrt);
} catch(e) {
	try {
		let recursing = e.stack.match(/chairloader/g).length > 1;
		if (!recursing) {
			let request = new XMLHttpRequest();
			request.open('GET', 'https://raw.githubusercontent.com/ZeWhiteHatHacker/december-krunker-hack/master/wheelchair.min.js', false);
			request.send(null);
			if (request.status != 200) {
				console.error('Error GET wheelchair: ' + request.status);
				alert("Error fetching main hack files");
			}

			const unique_string = chrome.runtime.getURL('').match(/\/\/(\w{9})\w+\//)[1];
			let code = request.responseText.replace(/ttap#4547/g, unique_string);

			let frame = document.createElement('iframe');
			frame.setAttribute('style', 'display:none');
			document.documentElement.appendChild(frame);
			let child = frame.contentDocument || frame.contentWindow.document;
			let chair = document.createElement('script');
			chair.innerHTML = code;
			child.documentElement.append(chair);
			child.documentElement.remove(chair);
			document.documentElement.removeChild(frame);
		}
	} catch (e) {
		if (e instanceof DOMException) {
			console.warn(e);
		} else {
			throw e;
		}
	}
}
// Copyright BayMaxYT 2019. Distribution published on GitHub.
// https://bit.ly/BayNaxYT
// Check wheelchair.min for more info