const calculateFormEl=document.getElementById("calculateForm");
const resultEl=document.getElementById("result");

const calculateMarks=(event)=>{
    const maxMarks=400;

    event.preventDefault();

    const formData=new FormData(calculateFormEl);
    const data={};

    formData.forEach((value,key)=>{
        data[key]=+value;
    });

    const totalMarks=data.MATHS+data.SCIENCE+data.ENGLISH+data.HINDI;
    const percentage=Math.round((totalMarks/maxMarks)*100);
    resultEl.innerText=`YOU HAVE GOT ${totalMarks} MARKS OUT OF ${maxMarks} AND YOUR PERCENTAGE IS ${percentage}%`;
};