interface ElementProps {
    element:any
    curentquestion:number
    AddPoint:()=>void
    setPoint:any
    point:number
}
export function Start({element,curentquestion,AddPoint,setPoint,point}:ElementProps) {    
    console.log(element);
    const Addscore = (key:any)=>{
        if (key===element[curentquestion].correct) {
            console.log(true);
            setPoint(point+1)
            console.log(point);
            
        }else{
            console.log(false);
        }
    }
    return(
    <div>
    <div className='flex flex-col h-screen w-screen flex-wrap text-center content-center'>
    <div className="">{element[curentquestion].text}</div>
    <div className="w-80 bg-black/30 text-center cursor-pointer" onClick={()=>{AddPoint(); Addscore("var_1");}}>{element[curentquestion].var_1}</div><br />
    <div className="w-80 bg-black/30 text-center cursor-pointer" onClick={()=>{AddPoint(); Addscore("var_2")}}>{element[curentquestion].var_2}</div><br />
    </div>
</div>

    )
}