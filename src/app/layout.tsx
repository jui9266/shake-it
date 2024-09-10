import "./globals.css";
import Image from "next/image";
import Logo from "../assets/images/shakeit_logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-1 justify-center bg-slate-100">
          <div className="max-w-[1024px] w-full py-10 bg-white">
            <div className="flex items-center justify-center flex-col">
              <Image
                className="w-28"
                src={Logo}
                alt={"쉐이킷 로고 이미지"}
                width={360}
              />
              <h1 className="text-sm mt-3">나만의 칵테일 저장소 쉐이킷</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
