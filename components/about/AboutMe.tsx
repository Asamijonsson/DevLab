"use client";
import { useState } from "react";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "About This Website"];

  return (
    <div className="text-sm font-medium text-center pt-30">
      <ul className="flex flex-wrap -mb-px justify-center">
        {tabs.map((tab) => (
          <li key={tab} className="me-2">
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-400 hover:border-gray-300 dark:hover:text-gray-300
                  ${
                    activeTab === tab
                      ? "text-white border-white dark:text-white dark:border-white"
                      : "border-transparent"
                  }
                `}
              aria-current={activeTab === tab ? "page" : undefined}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      <div className="p-6 my-3">
        {(() => {
          switch (activeTab) {
            case "About Me":
              return (
                <p className="p-6 border-2 border-white rounded-lg mx-auto my-3 max-w-xl">
                  I’m a junior software developer with 3.5 years of
                  vocational college education where I learned fundamental
                  coding skills. I am capable of creating simple applications.
                  <br />
                  On the frontend, I have studied HTML, CSS, JavaScript,
                  TypeScript, React, Redux and CMS. I’ve learned a bit about three.js as well.
                  <br />
                  On the backend, I have learned Node.js using tools like
                  Insomnia, PgAdmin and Docker as well as .NET with C#.
                  <br />
                  Additionally, I have studied SQL, GitHub, end-to-end testing
                  with Cypress, Python and machine learning using Keras and
                  Jupyter Notebook. <br />
                  <br />
                  Link to
                  <a
                    href="https://www.linkedin.com/in/asamijonsson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-gray-400 dark:hover:text-gray-300"
                  >
                    LinkedIn
                  </a>
                </p>
              );
            case "About This Website":
              return (
                <>
                  <div className="p-6 border-2 border-white rounded-lg mx-auto my-3 max-w-xl">
                    <p>To build this website, I use the following tools:</p>
                    <ul className="list-disc list-inside text-left pl-7">
                      <li>Next.js with TypeScript and Tailwind CSS</li>
                      <li>GSAP for animations</li>
                      <li>Appwrite for database storage</li>
                      <li>Firebase for authentication</li>
                      <li>
                        Code hosted on GitHub and deployed to Azure via GitHub
                        Actions
                      </li>
                    </ul>
                  </div>
                  {/* <div className="p-6 border-2 border-white rounded-lg mx-auto my-3 max-w-xl">
                    <p>
                      Future plan
                      <br />
                      You can create and use the magic to defeat the enemy
                      (⁎˃ᴗ˂⁎)
                    </p>
                  </div> */}
                </>
              );

            default:
              return <p>Choose a tab to see content.</p>;
          }
        })()}
      </div>
    </div>
  );
}
