/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsBlob(response) {
  return response.blob();
}

function readResponseAsText(response) {
  return response.text();
}

function	showImage(responseAsBlob)	{
		var	container	=	document.getElementById('img-container');
		var	imgElem	=	document.createElement('img');
		container.appendChild(imgElem);
		var	imgUrl	=	URL.createObjectURL(responseAsBlob);
		imgElem.src	=	imgUrl;
}

function	showText(responseAsText)	{
		var	message	=	document.getElementById('message');
		message.textContent	=	responseAsText;
}

function	showData(responseAsText)	{
		var	message	=	document.getElementById('data');
			
		message.forEach(obj => {Object.entries(obj).forEach(([key, value]) => {
				message(`${key} ${value}`);
			});
		});
		message.textContent	=	responseAsText;
}
// Fetch JSON ----------

function fetchJSON() {
  // TODO
	fetch('examples/animals.json')	
	.then(validateResponse)	
	.then(readResponseAsJSON)	
	.then(logResult)	
	.catch(logError);

}
const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);


// Fetch Image ----------

function fetchImage() {
  // TODO
  	fetch('examples/fetching.jpg')
		.then(validateResponse)
		.then(readResponseAsBlob)
		.then(showImage)
		.catch(logError);

}
const imgButton = document.getElementById('img-btn');
imgButton.addEventListener('click', fetchImage);


// Fetch text ----------

function fetchText() {
  // TODO
  	fetch('examples/words.txt')
		.then(validateResponse)
		.then(readResponseAsText)
		.then(showText)
		.catch(logError);

}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);


function fetchData() {
  // TODO
  	fetch('examples/data.json')
	
	.then(validateResponse)	
	.then(readResponseAsJSON)	
	.then(showData)	
	.catch(logError);

}
const dataButton = document.getElementById('data-btn');
dataButton.addEventListener('click', fetchData);