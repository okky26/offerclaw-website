import Link from "next/link";

export default function FooterLink(){
    return(
        <>
            <ul className="w-full flex flex-col items-center justify-center sm:flex-row sm:justify-end sm:gap-x-3 sm:px-3">
                <li>
                    <Link
                        href={'/'}
                        className={'text-sm text-neutral-50 font-sans-serif font-normal capitalize flex items-center justify-center w-full'}
                    >
                        Contact
                     </Link>
                </li>
                <li>
                    <Link
                        href={'/'}
                        className={'text-sm text-neutral-50 font-sans-serif font-normal capitalize flex items-center justify-center w-full'}
                    >
                        terms & conditions
                     </Link>
                </li>
                <li>
                    <Link
                        href={'/'}
                        className={'text-sm text-neutral-50 font-sans-serif font-normal capitalize flex items-center justify-center w-full'}
                    >
                        privacy policy
                     </Link>
                </li>
            </ul>
        </>
    )
}