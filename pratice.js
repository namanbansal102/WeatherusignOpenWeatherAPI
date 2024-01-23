// // let mySet=new Set();
// // mySet.add("that")
// // mySet.add(455)
// // mySet.add("new")
// // mySet.delete(455)
// // mySet.has(455)
// // console.log(mySet);
// // mySet.forEach(element => {
// //     console.log(element)
    
// // });
// // //Set method is used in map for adding in mymap
// // let myMap=new Map();
// // let key1="hello"
// // let key2="Say Hello"
// // let key3=2232
// // myMap.set(key1,"This is a String ")
// // myMap.set(key2,"This is Also a string")
// // myMap.set(key3,"This is a number")
// // console.log(myMap)
// // console.log(myMap.keys(0))
// // myObj={};
// // //We can use identifiers in Symbols
// // let k1=Symbol();
// // let k2=Symbol();
// // myObj[k1]="harry";
// // myObj[k2]="Rohan";
// // console.log(myObj[k1]);


// // // Array Destrcuting in javaScript
// // let a,b;
// // [a,b]=[1,2]
// // console.log(a,b)

// // //New Method
// // // [{c,d,e,f}={c:2,d:3,e:6,f:5}];
// // // console.log(c,d)
// // let c,d;
// // const fru=['mango','banana'];
// // [c,d]=fru;
// // console.log(c,d);
// // //////obbject desturcuting
// // let laptop={
// //     model:"Dell Inspirion"
// //     ,ScreenSize:"15.6 inch",
// //     Bluetooth:"Yes"

// // };
// // const {model,ScreenSize,Bluetooth}=laptop
// // console.log(model,ScreenSize,Bluetooth)

async function hello() {
    const url = 'https://qrcode3.p.rapidapi.com/qrcode/text';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'af06b3cd62msh84183ebf9197530p17882ajsn5137a7a5c006',
		'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
	},
	body: {
		data: 'https://linqr.app',
		image: {
			uri: 'icon://appstore',
			modules: true
		},
		style: {
			module: {
				color: 'black',
				shape: 'default'
			},
			inner_eye: {shape: 'default'},
			outer_eye: {shape: 'default'},
			background: {}
		},
		size: {
			width: 200,
			quiet_zone: 4,
			error_correction: 'M'
		},
		output: {
			filename: 'qrcode',
			format: 'png'
		}
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
hello();
const input = document.querySelector("#phone");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

// initialise plugin
const iti = window.intlTelInput(input, {
  utilsScript: "/intl-tel-input/js/utils.js?1683804567815"
});

const reset = () => {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

// on blur: validate
input.addEventListener('blur', () => {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      const errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

// on keyup / change flag: reset
input.addEventListener('change', reset);
input.addEventListener('keyup', reset);
