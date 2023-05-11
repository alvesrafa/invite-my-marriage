import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rafael e Lívia ♡♡",
  description: "Você foi convidado(a)!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col  items-center justify-center p-2 lg:p-18 xl:p-24">
          <div className="flex flex-col items-center max-w-screen-sm">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
