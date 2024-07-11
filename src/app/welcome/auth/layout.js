import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";

export default function Layout({ children }) {
    return (
        // <div className="min-w-72">
            // <Header />
            <div className="flex justify-center">
                {children}
            </div>
            // <Footer />
        // </div>
    );
}