import WebTitle from "@/components/WebTitle/webTitle"
import FooterNav from "@/components/Navbar/footerNav"
import FooterLink from "@/components/FooterLink/footerLink"

export default function Footer(){
    return(
        <>
            <section className="h-screen sm:h-[75vh] bg-footer bg-cover bg-repeat-y flex flex-col items-center justify-evenly gap-y-2">
                <WebTitle childStyle={'text-neutral-50 mx-auto'} containerStyle={'items-center justify-center'}/>
                <p className="w-2/3 flex items-center justify-center text-center text-sm font-sans-serif font-normal capitalize text-neutral-50 sm:text-md">we may earn commision for purchase made through our links</p>
                <FooterNav/>
                <FooterLink/>
            </section>
        </>
    )
}