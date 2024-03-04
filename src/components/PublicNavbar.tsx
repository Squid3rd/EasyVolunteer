import exp from "constants"
import MaxwidthWrapper from "./MaxWidthWrapper"
import Link from "next/link"
import { Icon } from "./Icon"
import { Button } from "./ui/button"

const Navbar = () =>{
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
                                    <Link href="/home">
                                        <p className="text-base font-bold">Home</p>
                                    </Link>
                                    <Link href="/home">
                                        <p className="text-base  font-bold">Volunteer</p>
                                    </Link>
                                    <Link href="/home">
                                        <p className="text-base  font-bold">About</p>
                                    </Link>
                                    <Link href="/home">
                                        <p className="text-base  font-bold">Contact</p>
                                    </Link>
                                    <Link href="/login">
                                        <p className="text-base  font-bold">Sign In</p>
                                    </Link>
                                    <Link href="/register">
                                        <Button className="text-base  font-bold h-8">
                                            Sign Up
                                        </Button>
                                    </Link>
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