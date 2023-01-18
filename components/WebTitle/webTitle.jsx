import Link from "next/link";



export default function WebTitle({childStyle, containerStyle}){
    return(
        <section className={`w-full flex ${containerStyle}`}>
            <Link
            href={'/'}
            className={`font-sans-serif text-3xl font-bold ${childStyle}`}
            >
                OFFERCLAW
            </Link>
        </section>
    )
}