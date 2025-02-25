import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'], 
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio DamianDev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gradient-cover`}>
        {children}
      </body>
    </html>
  );
}
