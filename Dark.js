input= document.getElementById("input")
add = document.getElementById("add")
collect= document.getElementById("collect")

add.addEventListener("click", function(){
  if(input.value.length>0){
  var list = document.createElement("li");
  list.appendChild(document.createTextNode(input.value));
  list.style.border="1px double blue"
  list.style.borderRadius="10px"
  list.style.color="red"
  
  list.style.width="50%"
  list.style.margin="auto"
  list.style.overflow="scroll"
  
 
  collect.append(list)
  input.value="";
  }
});

light=document.getElementById("light")
dark=document.getElementById("dark")
begin=document.getElementById("begin")
body=document.querySelectorAll('body')[0]

dark.addEventListener("click",function(){
  body.style.backgroundColor="black"
})

light.addEventListener("click",function(){
  body.style.backgroundColor="white"
})

