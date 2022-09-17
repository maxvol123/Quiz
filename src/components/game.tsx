import { type } from "../modals"

interface ElementProps {
    element:type
    StartG:()=>void
}
export function Game({element,StartG}:ElementProps) {
    return(
        <>
            <div className="text-center mr-10 w-36 pb-3 bg-gray-600/70">
                <h1>{element.title}</h1>
                <h1>questions-{element.questions}</h1>
                <button onClick={()=>StartG()} className="bg-indigo-800 rounded px-3 py-0.5">Start</button>
            </div>
            </>
    )
}