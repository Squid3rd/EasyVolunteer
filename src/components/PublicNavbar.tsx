import exp from "constants"
import MaxwidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { Icon } from "./Icon"
import { Button } from "./ui/button"
import { useSession, signOut } from "next-auth/react";
const Navbar = () =>{
    const { data: session, status } = useSession();
    console.log("Session = ",session);
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxwidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link href="/">
                                    <Icon.logo className="h-20 w-20"/>
                                </Link>
                            </div>
                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    <Link href="/">
                                        <p className="text-base font-bold">Home</p>
                                    </Link>
{/*                                     <Link href="/detail">
                                        <p className="text-base  font-bold">Volunteer</p>
                                    </Link> */}
                                    <Link href="#about-me">
                                        <p className="text-base  font-bold">About</p>
                                    </Link>
                                    {!session?.user.role && (
                                    <Link href="/login">
                                        <p className="text-base  font-bold">Sign In</p>
                                    </Link>
                                    )}
                                    {!session?.user.role && (
                                    <Link href="/register">
                                        <Button className="text-base  font-bold h-8">
                                            Sign Up
                                        </Button>
                                    </Link>
                                     )}
                                    {session?.user.role && (
                                        <Button className="text-base  font-bold h-8"
                                            onClick={() => signOut({ callbackUrl: "/login" })}
                                        >
                                            Sign out
                                        </Button>
                                        )}
                                    <div>
                                    <Link href="/profile/1">
                                        {session?.user.name}
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxwidthWrapper>
            </header>
        </div>
    )
}
export default Navbar
