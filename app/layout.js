import MainHeader from "./components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "Beloil PhoneBook",
  description: "Phone book of all telephone numbers in our enterprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <MainHeader />
        {children}
        
      </body>
    </html> 
  );
}
