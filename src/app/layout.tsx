import "./globals.css";
import Image from "next/image";
import Logo from "../../public/assets/images/shakeit_logo.png";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-slate-100">
        <div className="flex flex-1 justify-center flex-col items-center min-w-96">
          <div className="max-w-[1024px] w-full bg-white">
            <div className="flex flex-row items-center justify-between py-6">
              <div className="px-5">
                <Link href={"/"}>
                  <Image
                    className="w-16"
                    src={Logo}
                    alt={"쉐이킷 로고 이미지"}
                    width={360}
                  />
                </Link>
                <h1 className="hidden">나만의 칵테일 저장소 쉐이킷</h1>
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
