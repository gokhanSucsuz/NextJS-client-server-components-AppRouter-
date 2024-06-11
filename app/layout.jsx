import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/websitelayout/header";
import Topnav from "./components/websitelayout/topnav";
import Footer from "./components/websitelayout/footer";
import { LeftColumn } from "./components/websitelayout/leftcolumn";
import RigthColumn from "./components/websitelayout/rightcolumn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Topnav />
				<div className="row">
					<LeftColumn>
						{children}
					</LeftColumn>
					<RigthColumn />
				</div>
				<Footer />
			</body>
		</html>
	);
}