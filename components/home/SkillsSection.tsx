import React from 'react';
import { Card, CardHeader, CardBody } from '@/components/Card';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="bg-custom-800 flex flex-col items-center justify-center text-center px-5 py-14">
     <h2 className="text-5xl font-bold text-custom-100 my-4">
      Skills
     </h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          Full Stack Web Developent
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          Backend Developent
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          Frontend Developent
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          Software Developent
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          Database Administration
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-sm w-full">
        <CardHeader className="bg-custom-700">
         <p className="text-white text-xl">
          DevOps Engineer
         </p>
        </CardHeader>
        <CardBody className="bg-custom-700">
          <p className="text-white text-md">
           This is the body of the card. It can contain any content.
          </p>
        </CardBody>
      </Card>
     </div>
    </section>
  );
};

export default SkillsSection;