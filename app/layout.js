import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import PrivacyConsent from "@/components/PrivacyConsent";
export const metadata={metadataBase:new URL(SITE.url),title:{default:SITE.title,template:"%s | TrafficCampaign"},description:SITE.description,alternates:{canonical:"/"},openGraph:{type:"website",siteName:SITE.name,title:SITE.title,description:SITE.description,url:SITE.url},robots:{index:true,follow:true},icons:{icon:[{url:"/favicon.ico"},{url:"/icon.svg",type:"image/svg+xml"}],apple:[{url:"/apple-icon.png",sizes:"180x180",type:"image/png"}]}};
export default function RootLayout({children}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><PrivacyConsent/></body></html>}
