function copyMailAddress() {
	navigator.clipboard.writeText("mashalmaliyakkal@gmail.com");
	showToaster();
}

function showToaster() {
	const emailLinkElement = document.getElementById('email');
	emailLinkElement.innerHTML = `<div id='toaster' class='toaster'>Email copied!</div>`;
	setTimeout(() => {
		emailLinkElement.innerHTML = `<a onclick="copyMailAddress()" class="fadeIn fa fa-at"></a>`;
	}, 1000);
}