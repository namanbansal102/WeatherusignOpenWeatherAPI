console.log("my Login page is running")

let login = document.querySelector('#login')
let signUp = document.querySelector('#signup')
let pass = document.querySelector('#pass')
let invalidId = document.querySelector('#invalid-id')
let invalidPass = document.querySelector('#invalid-pass')
let userEnter = document.querySelector('#user-enter')
let loginf = document.querySelector("#final-button")
let username = document.querySelector('#username')
let userArray = []
userArray.push("Ram23")
userArray.push("admin")
userArray.push('notify565')

let userStore = localStorage.setItem('user', JSON.stringify(userArray))
let getUser = JSON.parse(localStorage.getItem('user'))
let passArray = []
passArray.push('myPass')
passArray.push('admin')
passArray.push('admin1')
let passStore = localStorage.setItem('pass', JSON.stringify(passArray))

console.log("passArray value")
console.log()
let getPass = JSON.parse(localStorage.getItem('pass'))

console.log(getPass)
signUp.addEventListener('click', function () {
    mobileUserArray=[]

    console.log('sign up');
    loginf.innerHTML="Sign up"
    loginf.id ="sign"
   
    userEnter.innerText = "Please Enter Your Mobile Or email"
    username.id="signupUsername";
    let mobileNum;
    let verifyNum;
 setInterval(() => {
    verifyNum=isNaN(username.value);
    console.log(verifyNum);
 }, 2000);
    setInterval(() => {
        
        if(verifyNum==false && username.value.length==10){
            invalidId.innerHTML=""
            console.log("mobile number is correct");
            mobileNum=username.value
            console.log(mobileNum);
mobileUserArray.push(username.value)

            
            
            
        }else if(verifyNum==true){
            console.log("Verify Num is true");
            let emailCheck=/.com$/;
          setInterval(() => {
            if(emailCheck.test(username.value)){
                console.log("Email is Correct");
                userArray.push(username.value)
                invalidId.style.display = 'block';
                invalidId.innerHTML = "Email Address Is Correct"
mobileUserArray.push(username.value)

                
                

            }else{
                invalidId.style.display = 'block';
                invalidId.innerHTML = "Email Address Is Incorrect"
                
              
            }

          }, 10000);
        }
        else{
            console.log("Mobile Number  is incorrect")
            invalidId.style.display = 'block';
            invalidId.innerHTML = "Mobile Number Is Incorrect"
        }
        
    }, 5000);
    loginf.addEventListener('click',function() {
        clearInterval();
        console.log(pass.value.length)
        if(mobileUserArray.length!=0 && pass.value!=null ){
            console.log("Thanks For Signing Up");
            userArray.push(mobileUserArray[0]);
            localStorage.setItem('user', JSON.stringify(userArray));
            passArray.push(pass.value)
            localStorage.setItem('pass', JSON.stringify(passArray))
            let getUser = JSON.parse(localStorage.getItem('user'));
            let getPass = JSON.parse(localStorage.getItem('pass'))




        }else{
            alert("Please Enter a Valid Username And Password")
        }
        
    })
   
    

    
    
    
    
    
})

loginf.addEventListener('click',function () {
    console.log("Login button is running")
    loginf.id='loginfo'
    loginf.innerHTML="Login in"
    userEnter.innerText = "Please Enter Your UserName"
    username.id ="username";
    console.log("login button is Running")
    pass.addEventListener('keyup', function name(user) {
        setInterval(() => {
        let user = pass.value;

        if (user.length < 5) {

            invalidPass.style.display = 'block'
            invalidPass.innerHTML = "Please enter a Correct Password"
        } else if (user.length > 5) {
            invalidPass.style.display = 'none'
            localStorage.setItem('pass', user)
        }

    }, 3000);



})
loginf.addEventListener('click', function () {
    invalidId.innerHTML=""
    invalidPass.innerHTML=""
    if (username.value.length === 0) {
        console.log("Please Enter A UserName");
        invalidId.style.display = 'block';
        invalidId.innerHTML = "UserName Cannot Be Null"
    }
    if (pass.value.length == 0) {
        console.log('Null value')
        invalidPass.style.display = 'block'
        invalidPass.innerHTML = "PassWord Cannot Be null"

    
    }
    else {
        console.log("Successully Achieved vlaue")
        fun();
        function fun() {
            
 let UserIndex;
            getUser.forEach(element => {
                if (element === username.value) {
                    console.log("Username Successfully Matched")
                     UserIndex = getUser.indexOf(element)
                    console.log(UserIndex);

                }
            });
            let myIndexPass;
            getPass.forEach(element => {
                if (element === pass.value) {
                    console.log("Password Successfully Mathced")
                    console.log("Fetching Index")
                    myIndexPass = getPass.indexOf(element)
                    console.log(myIndexPass);
                    
                }})
                 if(UserIndex==null &&myIndexPass==null){
                    invalidId.style.display = 'block';
                    invalidId.innerHTML = "UserName Not Matched";
                    invalidPass.style.display = 'block'
                    invalidPass.innerHTML = "PassWord Not Matched"
                   }
    
               else if(UserIndex==null ){
                invalidId.innerHTML=""
                invalidId.style.display = 'block';
                invalidId.innerHTML = "UserName Not Matched"
               }else if(myIndexPass==null){
                invalidPass.innerHTML=""
                invalidPass.style.display = 'block'
                invalidPass.innerHTML = "PassWord Not Matched"
               }else{
                console.log("Else function is Running")
                console.log(UserIndex)
                console.log();
                let a=9
                
                window.open('weather.html');
            }
            



            // function fun ends
        }


    }

});


})


console.log("Program Compiled")
console.log(getPass)
console.log(getUser)

