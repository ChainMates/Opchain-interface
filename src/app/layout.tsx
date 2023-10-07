import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import NavBar from '@/components/NavBar/navBar';
import UserMenu from '@/components/general/userMenu';


export const metadata: Metadata = {
  title: 'Opchain',
  description: 'Your Options On Chain',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="h-screen w-screen bg-gradient-to-r from-sf2 to-sf1 bg-cover flex justify-center items-center">
            {/* <div className="h-[96%] w-[96.5%] backdrop-blur-xl flex justify-center items-center rounded-xl">
              <div className="h-full w-[20%] bg-sf1 flex flex-col justify-center items-center rounded-l-xl ">
                <NavBar />
              </div>
              <div className="h-full w-[80%] bg-sf2 flex flex-col justify-center items-center rounded-r-xl">
                <div className='w-full pt-unit-4 px-unit-4 flex justify-end items-start gap-unit-1'>
                  <UserMenu />
                </div> */}
                {children}
              {/* </div> */}
            {/* </div> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}