"use client"
import { ReactNode, useState } from "react";
import "./globals.css"
import { SessionWrapper } from "../../components/sessionWrapper";
import { Navbar } from "../../components/nav/navbar";


export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <SessionWrapper>
      <html>
        <body>
          <div>
            <Navbar />
            <div>
              {children}
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>

  );
}
