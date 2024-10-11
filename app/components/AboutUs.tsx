const people = [
  {
    name: "Joe Sang",
    role: "Director",
    imageUrl: "/team/2.jpeg",
    bio: `Mr. Sang holds a Master of Business Administration in Strategy, a Bachelor of Arts in
Economics, and is a Certified Public Accountant (CPA K).
With over 20 years of hands-on experience, he has held senior managerial positions in
various organizations, including parastatals and multinational corporations.
His previous roles include General Manager Finance and Strategy at KPC, Head of Group
Business Performance &amp; Planning at East Africa Breweries Limited, Finance Director at East
Africa Maltings Limited, Management Accountant at Unga Group, and Financial Accountant
at National Oil Corporation of Kenya (NOCK).
His diverse experience in finance, management, and strategic planning equips him to lead
KPC as Africa&#39;s premier Oil and Gas Company.
Mr. Sang is known for his collaborative leadership style, emphasizing teamwork, employee
development, and delivering exceptional business performance. His passion for developing
others and fostering a collaborative environment in all areas of his life.`,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Jinaro Kibet",
    role: "Chairman",
    imageUrl: "/team/1.jpeg",
    bio: `Jinaro Kibet, SC has the rank of Senior Counsel, the highest level of recognition for an
advocate in Kenyan legal practice.
He has 34 years of post-qualification experience during which he has garnered a wealth of
experience in securities advisory, corporate restructuring, banking, and insurance law
advisory for local and international corporates, private equity and investment advisory,
public-private partnerships, capital markets and securities, mergers and acquisitions, and
other financial services.
Due to his significant advisory experience and cutting-edge solutions to the legal needs of
diverse clientele, Jinaro has been internationally recognized for his work by The Legal 500
and Chambers &amp; Partners.
He was recently ranked in The Legal 500 Europe, Middle East &amp; Africa 2023 as a
Recommended Lawyer in the Commercial, Corporate, and M&amp;A practice as well as in the
Employment practice.
He has deep capital markets expertise, having previously served as chairperson of the
Capital Markets Tribunal.
He also serves as a Board Member in numerous organizations in the Kenyan commercial
landscape both in the private and public sectors.
He has been an avid ally of the Kenyan athletics fraternity, currently serving as Vice-
President of Athletics Kenya. In addition, in 2020 he was appointed to the World Athletics
Governance Commission and the Human Rights Working Group.`,
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white" id="about">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-500">
              Our team is driven by a shared passion for making a meaningful
              difference. Each of us brings unique skills, experiences, and
              dedication to the mission of creating lasting impact. Together, we
              work to ensure that every donation is used effectively to support
              those in need and create positive change in our communities. Get
              to know the faces behind our mission.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="rounded-lg object-cover shadow-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    {/* <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
