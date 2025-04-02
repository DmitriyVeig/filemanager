import "./css/globals.css";
import Link from "next/link";
import Title from "./components/Title";
import SignIn from "./components/SignIn";

export const metadata = {
    title: "File manager",
    description: "File manager Ubuntu based",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <header>
            <Link href="./"><Title/></Link>
            <Link href="./sign_in/"><SignIn/></Link>
        </header>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}