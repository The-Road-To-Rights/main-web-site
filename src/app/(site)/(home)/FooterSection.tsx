import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/Navbar-section/abf.png';
import { FaTiktok } from 'react-icons/fa';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone } from 'lucide-react';
import logo2 from '../../images/Footer-section/b.svg';
import { FaMedium } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 
                    <div className="space-y-6">
                        <div className="w-60">
                            <Image
                                src={logo}
                                alt="Road to Rights Log"
                                className="h-16 md:h-20 w-auto"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-300">
                                Apartment 11 B Sky Gardens # 36 Perera Mawatte
                            </p>
                            <p className="text-sm text-gray-300">
                                Kotuwegoda Rajagiriya Sri Lanka
                            </p>
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Phone size={16} />
                                <span>(+94) 7x xxx xx</span>
                            </div>
                            <Link
                                href="mailto:road2rights@gmail.com"
                                className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                road2rights@gmail.com
                            </Link>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Opening Hours</h3>
                        <div className="space-y-4 pt-6">
                            <div className="flex justify-between text-sm text-gray-300">
                                <span>Mon - Fri:</span>
                                <span>9:00 am - 5:00 pm</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-300">
                                <span>Sat - Sun:</span>
                                <span>9:00 am - 5:00 pm</span>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6 pl-24">
                        <h3 className="text-lg font-semibold">Connect With Us</h3>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Facebook size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Twitter size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <FaMedium size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <Youtube size={24} />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                <FaTiktok size={24} />
                            </Link>
                        </div>
                        <div className="flex gap-4 mt-6">

                            <Image
                                src={logo2}
                                alt="SDG Action Awards"
                                className="object-contain h-14 md:h-18 w-auto"
                            />
                        </div>
                    </div>
                </div>


                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-center text-sm text-gray-400">
                        Copyright ©2024 Road To Rights. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;