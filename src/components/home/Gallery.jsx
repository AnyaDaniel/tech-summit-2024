import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 lg:px-40 py-16 lg:py-24 relative bg-gray-50">
      <h1 className="text-3xl text-center md:text-4xl font-medium text-black mb-4 md:mb-6">
        Gallery
      </h1>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-1 flex-col">
            <Image
              height={600}
              width={500}
              className="object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/african-american-friends-business-workers-sitting-table-working-office_839833-15846.jpg?w=996&t=st=1706540493~exp=1706541093~hmac=b5c3c2ef1e62fe72c3121e7eb38d564cbda360c7fbe4beebf4285b25ccefe4bd"
            />
          </div>
          <div className="flex flex-1 flex-row gap-2">
            <div className="flex flex-1 flex-col">
              <Image
                height={600}
                width={500}
                className="object-cover h-full"
                src="https://img.freepik.com/free-photo/african-american-female-psychotherapist-getting-applause-after-successful-group-therapy_637285-9975.jpg?w=996&t=st=1706541248~exp=1706541848~hmac=212eced63c5103c2c35827f8bf869a42093ec2c657722112c7c923b59e7410f3"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <Image
                height={600}
                width={500}
                className="object-cover h-full"
                src="https://img.freepik.com/free-photo/new-male-employee-conversing-with-female-colleagues-his-new-office-job_23-2149034616.jpg?w=996&t=st=1706541379~exp=1706541979~hmac=9e63c06c3f4130f16b691473e55cf196c3a72f65c1dabfb6c5deeb176d223600"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="hidden md:flex flex-1 flex-row gap-2">
            <div className="flex flex-1 flex-col">
              <Image
                height={600}
                width={500}
                className="object-cover h-full"
                src="https://img.freepik.com/free-photo/group-four-african-american-happy-succesfull-mans-suit-rich-black-business-mans-sitting-chairs-looking-mobile-phones_627829-2987.jpg?w=996&t=st=1706541433~exp=1706542033~hmac=70744dd09e4299f6030c7533636bfa9e5eb8b9ae5a39239b8f737f7661d6cff1"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <Image
                height={600}
                width={500}
                className="object-cover h-full"
                src="https://img.freepik.com/free-photo/people-office-during-work-day_23-2150690136.jpg?w=996&t=st=1706541484~exp=1706542084~hmac=16d92fff3dec9cbcea021df44757770f2e1ccea8c3cb490c1e6405bddcc26a9d"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <Image
              height={600}
              width={500}
              className="object-cover w-full h-full"
              src="https://img.freepik.com/free-photo/close-up-people-chatting-outside_23-2149033734.jpg?w=996&t=st=1706541283~exp=1706541883~hmac=a5756a9b935e70a435dad6b1e4550a676859712c0a22aa65c29986843ad60d99"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
