import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../../components/profile/importBsjs";
import "./global.css";
import "../../sytles/style/style.scss";
import EnrollmentSteps from "../../components/profile/EnrollmentSteps";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="Profile">
        <ImportBsJS />
        <EnrollmentSteps />
        {children}
      </body>
    </html>
  );
}