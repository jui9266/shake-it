import "./globals.css";
import Image from "next/image";
import Logo from "../../public/assets/images/shakeit_logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-slate-100">
        <div className="flex flex-1 justify-center  flex-col items-center ">
          <div className="max-w-[1024px] w-full py-8 bg-white">
            <div className="flex items-center justify-center flex-col">
              <Image
                className="w-20"
                src={Logo}
                alt={"쉐이킷 로고 이미지"}
                width={360}
              />
              <h1 className="text-sm my-3">나만의 칵테일 저장소 쉐이킷</h1>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
