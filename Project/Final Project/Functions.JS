
function NextH(){
  window.open("Home Page.html" , "_self")
}

function Next1(){
window.open("Page 1.html" , "_self")
}
function Next2(){
window.open("Page 2.html" , "_self")
}

function Next3(){
window.open("Page 3.html" , "_self")
}

function Next4(){
window.open("Page 4.html" , "_self")
}

function Next5(){
window.open("Page 5.html" , "_self")
}

function Next6(){
window.open("Page 6.html" , "_self")
}

function timerUpdate(){
  var now = new Date()
  var dName = now.getDay()
  var dNum = now.getDate()
  var month = now.getMonth()
  var year = now.getFullYear()
  var hours = now.getHours()
  var min = now.getMinutes()
  var pe = "AM"

  if(hours == 0){
    hours = 12
  }

  if(hours > 12){
    hours = hours - 12
    pe = "PM"
  }


  var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
  var week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
  var ids = ["dName" , "dNum" , "month" , "year" , "hours" , "min" , "pe"]
  var values = [week[dName] , dNum.toString().padStart(2 , "0") , months[month] , year , hours.toString().padStart(2 , "0") , min.toString().padStart(2 , "0") , pe]
  
  
  
  
  for(var i = 0 ; i < ids.length ; i++ )
  document.getElementById(ids[i]).firstChild.nodeValue = values[i]
}

function timerController(){
  timerUpdate()
  window.setInterval("timerUpdate()" , 250)

}


/* Page 4 */
function placeOrder04db(db , ds , da){
  var data = document.getElementById('yo04')
  var order
  if(db == 1){ 
    var db = document.getElementById('db').innerHTML
    data.textContent = "Your order is : " + db + " Service"
    order = db
  }
  if(ds == 1){
    var ds = document.getElementById('ds').innerHTML
    data.textContent = "Your order is : " + ds + " Service"
    order = ds
  }
  if(da == 1){
    var da = document.getElementById('da').innerHTML
    data.textContent = "Your order is : " + da + " Service"
    order = da
  }
  
}
  

function sendEmail(){
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var msg = document.getElementById('msg')
  var body = name + " , " + msg 

  var params = {
    name: document.getElementById("name").value,
    order: document.getElementById('yo04'),
    message: document.getElementById("msg").value,
    email: document.getElementById("email")
  }

  emailjs.send("service_kshrsvb","template_3f073nm", params).then(function(res){
    window.open("Success.html" , "_self")
    alert("success" + res.status) });

    
    
}