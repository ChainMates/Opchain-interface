import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import NavBar from '@/components/NavBar/navBar';
// import { useRouter } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Opchain',
  description: 'decentralized trade options',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  // const router = useRouter()
  // router.push("/", undefined)

  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <div className="h-screen w-screen bg-[url('/bg2.jpg')] bg-cover flex justify-center items-center">
            <div className="h-[96%] w-[96.5%] bg-black/25  backdrop-blur-xl flex justify-center items-center rounded-xl">
              <div className="h-full w-[20%] bg-sf1 flex flex-col justify-center items-center rounded-l-xl ">
                <NavBar />
              </div>
              <div className="h-full w-[80%] bg-sf2 flex flex-col justify-center items-center rounded-r-xl">
                {children}
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
// bg-gradient-to-bl from-10% from-cyan-700/50 via-slate-900 via-75% to-blue-800/30 to-85% 