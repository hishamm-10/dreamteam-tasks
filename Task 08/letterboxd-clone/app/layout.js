import './globals.css'; // Import global styles
import Navbar from '../components/Navbar'; // Adjust the path if necessary

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