"use client"
import React from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
    return (
    <section id="contact" className="px-5 py-14">
        <h2 className="text-5xl font-bold text-custom-100 text-center my-4">
            LET’S GET CONNECTED
        </h2>
        <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
            <Image 
                src={`/images/lance-dalanon-two.jpg`} 
                alt={`Lance Dalanon Contact Me`} 
                width="480" 
                height="480" 
                className="rounded-xl shadow-lg" 
            />
            </div>
            <div>

            </div>
        </div>
    </section>
    );
};

export default ContactSection;