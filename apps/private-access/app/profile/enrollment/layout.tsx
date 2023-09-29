import 'bootstrap/dist/css/bootstrap.css';
import ImportBsJS from "../../components/profile/importBsjs";
import "./global.css";
import "../../sytles/style/style.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="Profile" >
        {/*bootstrap injection */}
        <ImportBsJS />
        {children}
      </body>
    </html>
  );
}