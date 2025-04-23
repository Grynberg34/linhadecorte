import type { Metadata } from "next";
import Provider from "@/store/provider";
import "../styles/global.scss";

export const metadata: Metadata = {
  title: "Linha de Corte",
  description:
    "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}