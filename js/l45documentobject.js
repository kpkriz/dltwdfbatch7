// let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTML Collection 
// val = document.links[0];
// val = document.links[3];
// val = document.links[3].id; 
// val = document.links[3].className;  //string
val = document.links[3].classList; // DOMTokenList
val = document.links[3].classList[0];
val = document.links[3].classList[1];

val = document.forms  // HTML Collection
val = document.forms[0]
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;  // DOMTokenList
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;  // String
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].src;
val = document.images[0].getAttribute('type');
val = document.images[0].getAttribute("src");


val = document.scripts; //HTML Collection
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute("src");
val = document.scripts[0].getAttribute("type");

// console.log(val);

// Change Styling

// document.getElementById("tasktitle").style.backgroundColor = "green";
// document.getElementById("tasktitle").style.color = "#fff";
// document.getElementById("tasktitle").style.padding = "5px";

//Change Content

// document.getElementById("tasktitle").textContent = "My List"
// document.getElementById("tasktitle").innerText = "My Tasks";
// document.getElementById("tasktitle").innerHTML = '<span style="color:blue">My Jobs</span>';

// Call By Class Name

let lis = document.getElementsByClassName("list-group-item");  // HTML Collection
// console.log(lis);
// console.log(lis);
// lis[0].style.color = "blue";
// lis[1].textContent = "Have to visit";

// Call By Tag (Element)

let litags = document.getElementsByTagName("li");
// console.log(litags);
// console.log(litags[3]);
// litags[0].style.color= "red";
// litags[1].innerText = "Have to Cook";


// querySelector()
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li"));
// document.querySelector("li").style.color="green";
// document.querySelector("ul li").style.color = "blue";
// document.querySelector("ul li:nth-child(odd)").style.background="silver"
// document.querySelector("ul li:nth-child(even)").style.background = "grey";
// document.querySelector("ul li:last-of-type").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").textContent = "Have to read";


let listitems = document.querySelector("ul").getElementsByClassName("list-group-item"); //result = first li
 	listitems = document.querySelector("ul").getElementsByClassName("list-group-item");//HTMLCollection
// console.log(listitems);
// console.log(listitems[3]);
// console.log(typeof listitems);

let arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
// 	// console.log(arritem);

// 	// arritem.textContent = 'hello';

// 	arritem.innerText =`${idx} : Hello`;
// })


// querySelectorAll

// let its = document.querySelector("ul.list-group li.list-group-item");
// // console.log(its);

// let itms = document.querySelectorAll("ul.list-group li.list-group-item"); //Nodelist
// // console.log(itms);
// // console.log(itms[3]);

// itms.forEach(function(itm,idx){
// 	// console.log(itm);
// 	// itm.textContent = "Hello";
// 	itm.innerText = `${idx} : Hello World`;
// });

const liodds = document.querySelectorAll("li:nth-child(odd)");
// console.log(liodds);
const lievens = document.querySelectorAll("li:nth-child(even)");
// console.log(lievens);

liodds.forEach(function(liodd,idx){
	// console.log(liodd);
	liodd.style.backgroundColor = "grey";
});



for(let i = 0;i<lievens.length; i++){
	// console.log(i);

	// console.log(lievens[i]);

	lievens[i].style.background = "silver";
}

// children

let chl;

const getul = document.querySelector("ul.list-group");
// console.log(getul);
// const getli = document.querySelector("li.list-group-item:first-child");
// console.log(getli);

chl = getul.children; // HTML Collection
// console.log(chl);
// console.log(chl[3]);

// getul.children[1].innerText = "Have to Eat";
// getul.children[1].innerHTML = `Have to read <a href="#" id="delete-item4" class="delete-item delete-me"><i class="far fa-trash-alt"></i></a>`;

//children to children

chl = getul.children;
chl = getul.children[1];
chl = getul.children[1].children;
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList;
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute("href");

		// ul 		li 		  a 		HTMLCollection
// chl = getul.children[1].children[0].children;
		// ul 		li 		  a 		HTMLCollection
chl = getul.children[1].children[0].children[0];

// console.log(chl);

// First Element Child 
// chl = getul.querySelector('li');
chl = getul.firstElementChild;
//console.log(chl);

// Last Element Child
// chl = getul.querySelector("li:last-child");
chl = getul.lastElementChild;
//console.log(chl)

// Child Element Count
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;
// console.log(chl);

// Parent Element

const getfirstli = document.querySelector("li.list-group-item:first-child");
// console.log(getfirstli);

let par = getfirstli.parentElement;
// console.log(par);


// Next Element Sibling
		// list item 1 list item 2
let sbl = getfirstli.nextElementSibling;
		// list item 1 list item 2
	sbl = getfirstli.nextElementSibling;
		//list item 1  list item 2			list item 3      list item 4        list item 5                  
	sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling

// console.log(sbl);

//Previous Element Sibling

			/// list item 1 list item 2      list item 3        list item 2
let psbl = getfirstli.nextElementSibling.nextElementSibling.PreviousElementSibling;
// console.log(psbl);


// Create Element

const newli = document.createElement('li');

// console.log(newli);

// ADD ID

newli.id = 'new-item';

// ADD Class

// newli.className = "list-group-item"
// newli.className = "delete-me";
newli.className = "list-group-item delete-me";
newli.classList.add("delete-i","hide-me");

// Add Attribute = setAttribute(qulifiedName , value);
newli.setAttribute("title", "newitem");

// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `list Item 6 <a href="#" id="delete-item1" class="delete-item"><i class="far fa-trash-alt"></i></a>`

// Create Text Node

newli.appendChild(document.createTextNode("Save Myanmar"));

console.log(newli);


//<li id = "new-item" class= "list-group-item" title= "newitem"></li>

const newlink = document.createElement("a");

//add href
newlink.href = "#";

// Add ID
newlink.id = "delete-item6";

//Add Class
newlink.classList.add("delete-item");

// newlink.innerHTML = `< i class="far fa-trash-alt"></i>`;

console.log(newlink);

// <a href="#" id="delete-item5" class="delete-item"></a>

newli.appendChild(newlink);
// console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);






// Replace Element

const newtitleh2 = document.createElement("h2");

newtitleh2.id = "tasktitle";

var newcaption = document.createTextNode("All My Lists");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);



// replaceChild(new,old);

const getcardaction = document.querySelector(".card-action");

getcardaction.replaceChild(newtitleh2, oldtitleh4);


// Remove Element(self)

const getlis = document.querySelectorAll("li"); // Node List
// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[5].remove();



// Remove Child Element
const getfirstul = document.querySelector("ul");
// console.log(getfirstul);

// getfirstul.remove();

// getfirstul.removeChild(getlis[5]);
// getfirstul.removeChild(getlis[0]);


// className vs classList

const firstli = document.querySelector("li:first-child");
// console.log(firstli);
// console.log(firstli.children); // HTML Collection
// console.log(firstli.children[0]);

let firstlink;
		

				//a
firstlink = firstli.children[0];
// console.log(firstli.children[0].className);

//a 
// firstlink.className = "delete-myself";
// firstlink.className = "delete-item delete-myself";
// firstlink.className = "delete-item delete-me delete-myself";


// firstlink = firstlink.classList;  //DOM Token List
// console.log(firstlink);
// console.log(firstlink[0]);
// console.log(firstlink[1]);

//a
//firstlink.classList.add("delete-ourserve");
//firstlink.classList.add("delete-myself");
//firstlink.classList.add("delete-myself","delete-ourserve");

//firstlink.className = "delete-item delete-me delete-myself delete-ourserve";
//firstlink.className = "delete-item delete-me delete-myself "

//firstlink.classList.remove("delete-myself");
//firstlink.classList.remove("delete-myself","delete-ourserve");


// replace (old,new);
// firstlink.className = "delete-item delete-myself";
// firstlink.classList.replace("delete-me" , "delete-myself")
// firstlink.classList.replace("delete-item" , "delete-ourserve");

if(firstlink.classList.contains("delete-me")){
	console.log("yes");
}else{
	console.log("no");
}

if(firstlink.className === "delete.item delete-me"){
	console.log('yes');
}else{
	console.log('no');
}

// console.log(firstlink.className);




// Attribute  

let getatt = firstlink.href;
getatt = firstlink.getAttribute('href');

// console.log(getatt);
firstlink.setAttribute("href","https://google.com");

getatt =firstlink.hasAttribute('href');
console.log(getatt);  //true
getatt = firstlink.hasAttribute('title');
console.log(getatt);  //false



// addEventListener သင်ခန်းစာပြန်ကြည့်ရန်

// addEventListener (eventype, function);

const clearbtn = document.querySelector('.clear-tasks');

//Method 1

clearbtn.addEventListener('click',function(e){
	// console.log('hay,I am working');

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

	e.preventDefault();
})

//Method 2

// clearbtn.addEventListener("click",myclick);

//console.log(clearbtn.className);

function myclick(e){
	// console.log("I am working");

	// console.log(e);
	// console.log(e.target);
	// console.log(this);

	let val;

	val = e.target.className;
	val = e.target.classList;  //DOM Token List
	val = e.target.id;

	//console.log(val);

	// e.target.innerText = "Finished";

	// Event Type

	val = e.type;



	// Coordinates event - relative to the window
	val = e.clientX;
	val = e.clientY;


	// Coordinates event - relative to the element

	//val = e.offsetX;
	// val = e.offsetY;

	console.log(val);
}


//MouseEvent

const clbtn = document.querySelector(".clear-tasks");
const card=document.querySelector(".card")
const cardactionarea = document.querySelector(".card-action");
//single click
// clbtn.addEventListener("click",mouseeventtype);

//double click
// clbtn.addEventListener("dblclick",mouseeventtype);


//MouseDown

// clbtn.addEventListener("mousedown",mouseeventtype);

//Mouseup

// clbtn.addEventListener("mouseup",mouseeventtype);

//Mouseenter
// card.addEventListener("mouseenter",mouseeventtype)

//MouseOver (action to each childs mouse hover)
// cardactionarea.addEventListener("mouseover",mouseeventtype);

//MouseLeave
 // card.addEventListener("mouseleave",mouseeventtype);

//Mouseout (action to each childs mouse out)
// cardactionarea.addEventListener("mouseout",mouseeventtype);

// Mouse move
// card.addEventListener('mousemove',mouseeventtype);

// function mouseeventtype(e){
// 	console.log(`Event type = ${e.type}`);
// 	// headingh2.textContent = `MouseX: ${e.clientX} MouseY: ${e.clientY}`;
// 	headingh2.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// 	document.body.style.background = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},1)`;

// }


// const formel = document.querySelector("form");

// formel.addEventListener("submit", inputeventtype);

// function inputeventtype(e){
// 	console.log(`Event Type = ${e.type}`);

// 	e.preventDefault();
// }



const inputtask = document.getElementById('task');
const geth2 = document.querySelector('h2');

// KeyDown
// inputtask.addEventListener("keydown",inputeventtype);

// KeyPress
// inputtask.addEventListener("keypress",inputeventtype);

// keyup
// inputtask.addEventListener('keyup' , inputeventtype)

// input
// inputtask.addEventListener('input',inputeventtype);

// focus
// inputtask.addEventListener('focus',inputeventtype);

// blur
// inputtask.addEventListener('blur',inputeventtype);

//cut
// inputtask.addEventListener('cut',inputeventtype);

// paste
// inputtask.addEventListener('paste',inputeventtype);

// function inputeventtype(e){

// 	console.log(`Event Type = ${e.type}`);

// 	// console.log(inputtask.value);
// 	// geth2.textContent = inputtask.value;

// 	console.log(e.target.value);
// 	geth2.innerText = e.target.value;
// }



// Event Bubbling

document.querySelector('.card-title').addEventListener('ckick',function(){
	console.log('i am card-title');
});

document.querySelector('.card-content').addEventListener('ckick',function(){
	console.log('i am card-content');
});

document.querySelector('.card').addEventListener('ckick',function(){
	console.log('i am card');
});


//Event Delegation

// const deleitem = document.querySelector('.delete-item');

// deleitem.addEventListener('click',deleteitem);

// function deleteitem(e){
// 	console.log('I am delete-item');

// 	console.log(e.target);

// 	e.preventDefault();
// }

// document.body.addEventListener('click',evendeleg);

function evendeleg(e){

	//console.log('i am working');

	// console.log(e.target);

		//i
// 	if(e.target.className === "far fa-trash-alt"){
// 		console.log('hay i am trash can');
// 	}
// }

	// 	// i      a
	// if(e.target.parentElement.className === 'delete-item'){
	// 	console.log('hay i am delete item by a tag');
	// }
		// i      a
	// if(e.target.parentElement.className === 'delete-item delete-me'){
	// 	console.log('hay i am delete item by a tag');
	// 	e.preventDefault();
	// }

		// i      a
	if(e.target.parentElement.classList.contains('delete-item')){
		// console.log('hay i am delete item by a tag');
			//i
		// e.target.remove();
		    //i       a
		// e.target.parentElement.remove();
			//i  	  a            li
		e.target.parentElement.parentElement.remove();

	}
	e.preventDefault();
}




document.querySelector('form').addEventListener('submit',function(e){

	e.preventDefault();

	// console.log('hay i am working');

	const getnewtask = document.getElementById('task').value;
	// console.log(getnewtask);

	localStorage.setItem('mytask',getnewtask);

	let alltasks;

	if(localStorage.getItem('mytasks') === null){
		alltasks = [];
	}else{
		alltasks = JSON.parse(localStorage.getItem('mytasks'));
	}

	// ["have to eat"]
	
	alltasks.push(getnewtask);

	// ['have to eat', 'have to cook'];

	localStorage.setItem('mytasks',JSON.stringify(alltasks));

	console.log(alltasks);

	
})

// console.log(localStorage.getItem("mytasks"));
// console.log(typeof localStorage.getItem("mytasks"));

// console.log(JSON.parse(localStorage.getItem("mytasks")));
// console.log(JSON.parse(typeof localStorage.getItem("mytasks")));

let getalltasks = localStorage.getItem("mytasks");
	getalltasks = JSON.parse(getalltasks);
console.log(getalltasks);

getalltasks.forEach(function(getalltasks){
	console.log(getalltasks);
});
