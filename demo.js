
// form.addEventListener("submit", (e)=>
// {
//     e.PreventDefault()
// })


function calculate(){
var sub1 = parseInt(document.getElementById("markone").value);
var sub2 = parseInt(document.getElementById("marktwo").value);
var sub3 = parseInt(document.getElementById("markthree").value);



  
if(sub1<0 | sub2<0 | sub3<0 | sub1>101 | sub2>101 | sub3>101)
{
   alert("please enter correct marks")
}


 else {
    var total=sub1+sub2+sub3;
    document.getElementById("obtain").innerHTML=total;
    
    var per=total/3;
    document.getElementById("percentage").innerHTML=per;


     if(per>=90 & per<=100) 
    {
      document.getElementById("grade").innerHTML="Grade A";
       
    }    
     else if(per<=89 & per>=60)
        {
         document.getElementById("grade").innerHTML="Grade B";
       
    
      } 
           else if(per<=59 & per>=40)
      {
       
document.getElementById("grade").innerHTML="Grade C";
       
       }
       else if(per<=39 & per>=0)
       {
        
 document.getElementById("grade").innerHTML="Grade D";
        
        }
  }
  if(sub1>35 & sub2>35 & sub3>35)

  {
   document.getElementById("remarks").innerHTML="Pass";
  }
  else{
   document.getElementById("remarks").innerHTML="Fail";

  }
}
 








