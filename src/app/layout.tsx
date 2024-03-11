"use client"
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/PublicNavbar'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AuthProvider from '@/lib/auth/provider';
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClinet = new QueryClient();
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <AuthProvider>
          <QueryClientProvider client={queryClinet}>
            <main className='relative flex flex-col min-h-screen'>
                <Navbar/>
                <div className='flex-grow flex-1'>
                  {children}
                </div>
            </main>
            <Toaster />
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}