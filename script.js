
var totalCredits = 0;
var totalMarks = 0;
var CGPA = 0;

nosubssubm.addEventListener("click",()=>{
    if(document.getElementById("nosubs").value !=""){
    console.log("Hello");
    mcsub.style.visibility="visible"
    tryagain.style.visibility="visible"

   var nos = parseInt(document.getElementById("nosubs").value)
  
    for(let i = 0; i<nos;i++){
        let div = document.createElement("div")
        div.className = "card"
        let subname = document.createElement("div")
        subname.className = "subname"
        subname.innerHTML = `Subject ${i+1}`
        let credits = document.createElement("div")
        credits.className="credits"
        credits.innerHTML='<label for="cred">Enter credits: </label><select "id="cred" class="credits"><option value="">Please choose the  number of credits</option><option value="1.5">1.5</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select>'
        let marks = document.createElement("div")
        marks.className = "marks"
        marks.innerHTML = `<label for="mark">Enter marks: </label><input placeholder = "Enter marks for Subject ${i+1}" type="text" id="mark" class="mark">`
        div.append(subname,credits,marks)
        document.getElementById("mcsub").insertAdjacentElement("beforebegin",div)
    }

    document.querySelector("form").remove()}
})
// credits = document.querySelector
document.getElementById("mcsub").addEventListener("click",()=>{
   document.querySelectorAll("select").forEach((s)=>{
    if(s.value!=undefined)
      totalCredits += parseInt(s.value)
    })
    let length = document.body.getElementsByClassName("card").length
    for(let i = 0; i<length;i++){
        let crd = parseInt(document.body.getElementsByClassName("card")[i].getElementsByClassName("credits")[1].value)
        var mrks = parseInt(document.body.getElementsByClassName("card")[i].getElementsByClassName("mark")[0].value)
        let gp = 0;
        switch(true){
            case(mrks>=0 && mrks<45):console.log("F");gp = 0;
                                     break
            case (mrks >=45 && mrks <=49): console.log("E");gp = 4;break;
            case (mrks >=50 && mrks <=55): console.log("D");gp = 5;break;
            case (mrks >=56 && mrks <=65): console.log("C");gp = 7;break;
            case (mrks >=66 && mrks <=74): console.log("B");gp = 8;break;
            case (mrks >=75 && mrks <=89): console.log("A");gp = 9;break;
            default: console.log("S");gp = 10;
                    break;
           
        }
        totalMarks+=(crd*gp);

    }
    CGPA = totalMarks/totalCredits
    totalCredits = 0;
    totalMarks = 0;
    console.log(CGPA);
    if(CGPA != NaN && CGPA !=undefined &&CGPA!=null){
        mcsub.style.visibility="hidden"
        Array.from(document.getElementsByClassName("card")).forEach((s)=>{
            s.remove()
            
        })
    }
    let div = document.createElement("div")
            div.className = "finalcgpa"
            let innerchild1 = document.createElement("div")
            let innerchild2 = document.createElement("div")
            if(CGPA>=4){
                innerchild1.innerHTML = "Congratulations! You have passed the exam!!!"
                innerchild2.innerHTML = `CGPA: ${CGPA.toFixed(2)}*`
                div.append(innerchild1,innerchild2)
            }
            else{
                innerchild1.innerHTML = "Sorry!Better luck next time"
                div.style.backgroundColor="#cb1010b8"
                div.append(innerchild1)
            }
            
            document.getElementById("mcsub").insertAdjacentElement("beforebegin",div)
            div.innerHTML+="*Results are not 100% accurate"
    
})
tryagain.addEventListener("click",()=>{
    location.reload()
})

