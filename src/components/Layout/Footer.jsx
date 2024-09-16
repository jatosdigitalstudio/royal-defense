'use client'
import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiFacebookCircleFill,
    RiInstagramLine,
    RiLinkedinFill,
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiTwitterFill,
    RiInstagramFill
} from "react-icons/ri"

export default function Footer() {
    return (
        <footer className="bg-[#0e2e74]/55 ">
            <div className="max-w-[78rem] mx-auto p-8 lg:pt-12">
                <div className="flex justify-center text-center text-white">
                            <Link href={"/"} className="flex items-center gap-2 text-white text-xl font-semibold">
                                <Image src="/images/logo-RD-white.png" width={200}  height={200} alt="Logo Royal Defense"   />
                            </Link>
                        </div>
                {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-center text-center text-white">
                            <Link href={"/"} className="flex items-center gap-2 text-white text-xl font-semibold">
                                <Image src="/Logo-RD.png" width={120}  height={100} alt="Logo Royal Defense"   />
                            </Link>
                        </div>

                        <ul className="mt-4 md:mt-6 flex justify-start gap-4 md:gap-6">
                            <li>
                                <Link href="#">
                                    <RiFacebookCircleFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiInstagramLine
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiLinkedinFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiTwitterFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-left">
                            <p className="text-lg font-medium text-white">Menu</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/about">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/service">
                                        Our Services
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/project">
                                        Our Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/team">
                                        Our Teams
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-left">
                            <p className="text-lg font-medium text-white">Menu</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/about">
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/service">
                                        Our Services
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/project">
                                        Our Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/team">
                                        Our Teams
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        

                       


                        <div className="text-left col-span-2">
                            <p className="text-lg font-medium text-white">Contact Us</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiMessage2Line fontSize={18} className="text-gray-100" />

                                        <span className="flex-1 text-gray-100">info@royalcemerlang.com</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                    >
                                        <RiPhoneLine fontSize={18} className="text-gray-100" />

                                        <span className="flex-1 text-gray-100">0878-8676-0377</span>
                                    </Link>
                                </li>

                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <RiMapPinLine fontSize={18} className="text-gray-100"/>

                                    <address className="-mt-0.5 flex-1 not-italic text-gray-100">
                                        Eighty Eight @Kasablanka Office Tower Lantai 3 unit B,
                                        Jalan Casablanca Raya Kav.88
                                    </address>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="mt-10 border-t border-gray-300 pt-6">
                    <div className="text-center ">
                        {/* <div className="text-sm text-gray-500 flex items-center gap-3">
                            <Link className="inline-block text-white transition hover:text-white/75" href="/">
                                Terms & Conditions
                            </Link>
                            <Link className="inline-block text-white transition hover:text-white/75" href="/">
                                Privacy Policy
                            </Link>
                        </div> */}

                        <p className="mt-2 text-sm text-gray-200 sm:order-first sm:mt-0">Copyright &copy; 2024 royaldefense.co.id</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}