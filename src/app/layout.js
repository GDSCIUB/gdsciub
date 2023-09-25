import "./globals.css";

export const metadata = {
  title: "GDSC - IUB",
  description: "Webiste of Google Developer Student Club, IUB Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
