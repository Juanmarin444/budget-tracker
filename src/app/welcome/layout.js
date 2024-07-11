import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";

export default function Layout ({children}) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}