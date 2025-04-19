const localRoot = "D:/Hao/test";

const addLoadEvent = (func) => { 
  var oldonload = window.onload; 
  if (typeof window.onload != 'function') { 
    window.onload = func; 
  } else { 
    window.onload = function() { 
      if (oldonload) { 
        oldonload(); 
      } 
      func(); 
    } 
  } 
}

const initPosts = (count) => {
	let arr = [];
	const max = count || posts.length;
	for(let i=0; i < posts.length && i < max; i++) {
		const postData = posts[i];
		let temp = postTemplate;
		const coverUrl = window.document.domain === "" ? localRoot + postData.cover : postData.cover;
		temp = temp.replaceAll(/{{title}}/ig, postData.title);
		temp = temp.replaceAll(/{{dateLabel}}/ig, postData.dateLabel);
		temp = temp.replaceAll(/{{author}}/ig, postData.author);
		temp = temp.replaceAll(/{{cover}}/ig, coverUrl);
		temp = temp.replaceAll(/{{description}}/ig, postData.description);
		if (postData.version === "v2") {
			const postBasePath = window.document.domain === "" ? localRoot + "/posts/dynamic-post.html" : "/posts/dynamic-post.html";
			const postPath = postBasePath + `?path=${postData.postPath}`;
			temp = temp.replaceAll(/{{postUrl}}/ig, postPath);
		} else {
			const postUrl = window.document.domain === "" ? localRoot + postData.postUrl : postData.postUrl;
			temp = temp.replaceAll(/{{postUrl}}/ig, postUrl);
		}
		arr.push(temp);
	}
	const postsHtml = arr.join("");
	document.getElementById("blogContainer").innerHTML = postsHtml;
};

addLoadEvent(() => {
	if (window.document.domain === "") {
		const links = document.querySelectorAll("a[href]");
		links.forEach(link => {
		  const href = link.getAttribute("href");
		  if (!href.startsWith(localRoot)) {
			link.setAttribute("href", localRoot + href);
		  }
		});
		
		const images = document.querySelectorAll("img[src]");
		images.forEach(img => {
		  const src = img.getAttribute("src");
		  if (!src.startsWith(localRoot)) {
			img.setAttribute("src", localRoot + src);
		  }
		});
	}
});