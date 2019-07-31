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
//digunakan untuk menampilkan hasil log pada console browser yang digunakan

function logError(error) {
  console.log('Looks like there was a problem:', error);
}
//digunakan untuk menampilkan error pada console browser yang digunakan

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
//digunakan untuk menampilkan hasil dari response, ketika response hasilnya tidak ok
//maka ditampilan status errornya

function readResponseAsJSON(response) {
  return response.json();
}
//digunakan untuk mengembalikan hasil dari response untuk file json yang digunakan

function readResponseAsBlob(response) {
  return response.blob();
}
//digunakan untuk mengembalikan hasil dari response untuk blob

function readResponseAsText(response) {
  return response.text();
}
//mengembalikan hasil dari response untuk hasil berupa text

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
//melakukan fetching pada file examples/animals.json, kemudian ke fungsi valisadi respon 
//sebagai pengecekkan, dilanjutkan ke respon json lalu ditampilkan log resultnya. jika terjai 
//maka akan ditampilkan pada log error

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
//digunakan untuk feching sebuah gambar, digunakan gambar pada examples/fetching.jpg,
//kemudian masuk kebagian validasi respon dan membaca respon blob kemudian masuk ke
//fungsi untuk menampilkan gambar

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
//digunakan untuk melakukan fetching text, text ini berasal dari examples/words.txt
//kemudian masuk kebagian validasi respon dan membaca respon blob kemudian masuk ke
//fungsi untuk menampilkan text tersebut

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
//digunakan untuk melakukan fetching json, text ini berasal dari examples/data.json
//kemudian masuk kebagian validasi respon dan membaca respon blob kemudian masuk ke
//fungsi untuk menampilkan data json tersebut