const search = window.document.location.search;
const params = new URLSearchParams(search);
const path = params.get("path");
const finalPath = window.document.domain === "" ? localRoot + path : path;
const script = document.createElement("script");
script.src = finalPath;
document.body.appendChild(script);
	
addLoadEvent(() => {
	const postSummary = posts.find(obj => obj.postPath === path);
	document.head.innerHTML = document.head.innerHTML.replace(/{{title}}/ig, postSummary.title);
	let bodyInnerHTML = document.body.innerHTML;
	bodyInnerHTML = bodyInnerHTML.replaceAll(/{{title}}/ig, postSummary.title);
	bodyInnerHTML = bodyInnerHTML.replaceAll(/{{date}}/ig, postSummary.dateLabel);
	bodyInnerHTML = bodyInnerHTML.replaceAll(/{{author}}/ig, postSummary.author);
	document.body.innerHTML = bodyInnerHTML;
	document.getElementById("postContentContainer").innerHTML = content;
});