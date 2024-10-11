"use client";
import React, { useState, useEffect } from 'react';
import awardsData from "@/constants/awards.json";
import Image from 'next/image';
import { Card, CardBody, CardHeader } from "@/components/Card";
import Metadata from "@/components/Metadata";
import Button from "@/components/Button";
import { Award } from "@/types/awardTypes";

const Awards: React.FC = () => {
    // State to track selected image for the modal
    const [selectedImage, setSelectedImage] = useState<Award | null>(null); 
    
    // Function to open the modal with the selected award image
    const openModal = (award: Award) => {
        setSelectedImage(award); 
    };

    // Function to close the modal
    const closeModal = () => {
        console.log("Close");
        setSelectedImage(null);
    };

    // Disable all interactions and scrolling when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('overflow-hidden', 'pointer-events-none');
        } else {
            document.body.classList.remove('overflow-hidden', 'pointer-events-none');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'pointer-events-none');
        };
    }, [selectedImage]);

    const description = "Explore Lance Orville Dalanon's awards and certifications, highlighting achievements in software engineering and dedication to excellence in web development.";

    return (
    <>
        <Metadata description={description} />
        <main>
            <article>
                <div className={`flex flex-col items-center justify-start overflow-hidden bg-custom-800 ${selectedImage ? 'pointer-events-none' : ''}`}>
                    <header>
                        <h1 className="text-3xl md:text-5xl text-center font-bold text-custom-100 mt-32 mx-6 uppercase">
                            My Awards Showcase
                        </h1>
                    </header>
                    {/* Award Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10 md:grid-flow-row-dense">
                        {awardsData.map((award: Award) => (  
                            <Card
                                key={award.id}
                                className="flex flex-col h-full rounded-2xl bg-custom-700 text-white transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                                onClick={() => openModal(award)}
                            >
                                <CardHeader>
                                    <Image
                                        src={award.award_image || '/images/certificate-template.jpg'}
                                        alt={`${award.award_name} - Issued in ${award.award_issued_month} ${award.award_issued_year}`}
                                        height={1000}
                                        width={1000}
                                        className="h-96 w-full"
                                    />
                                </CardHeader>
                                <CardBody className="p-4">
                                    <h2 className="text-lg font-semibold">{award.award_name}</h2>
                                    <p className="text-sm mt-2">
                                        Issued: {award.award_issued_month} {award.award_issued_year}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    {/* Modal Overlay */}
                    {selectedImage && (
                        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75 pointer-events-auto">
                            <div
                                className="relative"
                                onClick={closeModal}
                            >
                                {/* Full-screen Image */}
                                <Image
                                    src={selectedImage.award_image || '/images/certificate-template.jpg'}
                                    alt={`${selectedImage.award_name} - Issued in ${selectedImage.award_issued_month} ${selectedImage.award_issued_year}`}
                                    height={5000}
                                    width={5000}
                                    className="max-h-screen w-full p-10 select-none"
                                />
                                
                                {/* Close Button */}
                                <Button
                                    className="fixed top-4 right-4 text-6xl text-white font-bold hover:text-gray-300 z-25 select-none"
                                    onClick={closeModal}
                                >
                                    X
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </article>
        </main>
    </>
    );
};

export default Awards;
