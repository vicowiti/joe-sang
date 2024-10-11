"use client";

import Image from "next/image";
import Programs from "./Programs";
import AboutUs from "./AboutUs"
import { FaDonate } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import Link from "next/link";
import OurMission from "./OurMission"

const metrics = [
  {
    id: 1,
    stat: "10K+",
    emphasis: "Lives",
    rest: "To be Impacted.",
  },
  {
    id: 2,
    stat: "500",
    emphasis: "Volunteers",
    rest: "To be engaged.",
  },
  {
    id: 3,
    stat: "KES 200M",
    emphasis: "To be raised",
    rest: "For a good course.",
  },
  {
    id: 4,
    stat: "10",
    emphasis: "Years",
    rest: "Of Dedicated Service.",
  },
];

export default function NewLanding() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                  src="/3.jpeg"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-[#9ca909] mix-blend-multiply" />
              </div>
              <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Bringing Hope,</span>
                  <span className="block text-indigo-200">Changing Lives</span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                  From Barefoot Beginnings to Boundless Destinations, A journey
                  of Hope, Resilience and Transformation
                </p>
                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      href="/donate"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                    >
                      Donate Now
                    </Link>
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OurMission />

        {/* Alternating Feature Sections */}
        <div className="relative overflow-hidden pt-16 pb-32">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <FaPeopleRoof
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Building a Brighter Future
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Joe is seeking partners who share his belief in the
                      transformative power of education and the potential within
                      every child.Together, the aim is to raise 200 million
                      Kenya Shillings over the next two years. This amount will
                      be managed as an endowment fund dedicated to promoting
                      holistic community development through youth involvement,
                      with a key focus on education. With the support of donors
                      and well-wishers, this fund will empower the youth through
                      education, providing them with the resources and
                      opportunities they need to succeed.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/donate"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Donate Today
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6"></div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    width={100}
                    height={100}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/2.jpeg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                      <FaDonate
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Provide Much Needed Support
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                       Your support can make a lasting impact. By contributing,
                      you are helping us provide essential resources and
                      assistance to those in need. Every donation brings us one
                      step closer to our goal, creating hope and changing lives.
                      Together, we can build a brighter future for everyone.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/donate"
                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
                      >
                        Donate Today
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    width={100}
                    height={100}
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/0.jpeg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
<AboutUs/>
        <Programs />

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <Image
                  width={100}
                  height={100}
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="/1.jpeg"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-base font-semibold">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Foundation Metrics
                </span>
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                Impacting generations, one life at a time.
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Our mission is to create lasting change by supporting
                individuals today, which in turn benefits their families and
                future generations. Every contribution helps build a stronger
                foundation for a brighter future, making a profound impact on
                communities for years to come.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Join Joe Sang in creating</span>
              <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                a positive impact today.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
              <Link
                href="/donate"
                className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700"
              >
                Donate
              </Link>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
