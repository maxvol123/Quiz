import { type } from "../modals"
import { Cssquestions } from "./cssquestions"
import { Htmlquestions } from "./questions"

interface ElementProps {
    element:type
    StartG:()=>void
    setAr:any
}
export function Game({element,StartG,setAr}:ElementProps) {
    function setArray(id:any) {
        if (id===1) {
            setAr(Htmlquestions)
        }else{
            if (id===2) {
            setAr(Cssquestions)
            }
        }
    }
    return(
        <>
            <div className="text-center mr-10 w-36 pb-3 bg-gray-600/70">
                <h1>{element.title}</h1>
                <h1>questions-{element.questions}</h1>
                <button onClick={()=>{StartG();console.log(element.id);setArray(element.id)}} className="bg-indigo-800 rounded px-3 py-0.5">Start</button>
            </div>
            </>
    )
}