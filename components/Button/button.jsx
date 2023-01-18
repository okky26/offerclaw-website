
export default function Button({style, content, handler}){
    return(
        <button className={style} onClick={handler}>
            {content}
        </button>
    )
}