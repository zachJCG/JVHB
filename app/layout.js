import './globals.css';

export const metadata = {
  title: 'Joseph v. HiBob — Case Tracker',
  description: 'Joseph Carter Group — Case Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
