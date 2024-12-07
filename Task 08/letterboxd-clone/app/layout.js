import './globals.css'; 
import Navbar from '../components/Navbar'; 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar will appear on every page */}
        <main>{children}</main> {/* The content of each page will be rendered here */}
      </body>
    </html>
  );
}
