
export default function Toggle({handler,content}){
    return(
        <button className="flex items-center justify-center w-8 h-8 sm:hidden" onClick={handler}>
            {content}
        </button>
    )
}