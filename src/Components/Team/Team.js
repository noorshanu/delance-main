import React from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";
import Addy from "../../assets/team/addy.png";
import Deeba from "../../assets/team/deeba.png";
import Don from "../../assets/team/don.png";
import Guru from "../../assets/team/gurpreet.png";
import ROBERTO from "../../assets/team/roberto.png";
import Noor from "../../assets/team/noor.png";
import Jhosi from "../../assets/team/jhosi.png";
import Jagjeet from "../../assets/team/jagjeet.png";
import Shoiab from "../../assets/team/suhaib.png";
import Viki from "../../assets/team/viki.png";
import Abdullah from "../../assets/team/abdullah-mehboob.jpeg";
import { useTranslation } from "react-i18next";

const teamData = [
  {
    name: "Jagjeet",
    title: "Advisor",
    photo: Jagjeet,
    desc: "CEO and co-founder of Battle Infinity (Metaverse Battle Games Platform). Jagjeet has vast technical experience and the leadership skills to execute on product delivery. Self-motivated ideas generator focused on solutions – there’s nothing Jagjeet likes more than overcoming difficult challenges to demonstrate his skills. A highly creative blue-sky thinker but a team worker too. Laser-focused on product development and delivery, Jagjeet consistently exceeds expectations.",
    links: {
      linkedIn: "https://www.linkedin.com/in/jagjeet-jena-a48452163/",
    },
  },
  {
    name: "Jhosi",
    title: "Co-Founder",
    photo: Jhosi,
    desc: "Having worked in the digital space for over 20 years, Joshi has developed and delivered innovative communications solutions across all paid search media. His love for performance marketing and his association with Finixio (London), an affiliation specialist in the crypto space, as a partner and performance marketing head, has sharpened and clarified his vision of the possibilities offered by blockchain technology.",
    links: {
      linkedIn: "https://www.linkedin.com/in/suresh-joshi-61b3998/",
    },
  },
  {
    name: "ROBERTO",
    title: "PROJECT HEAD",
    photo: ROBERTO,
    desc: "As an experienced full-stack developer Roberto has worked in the web, blockchain spaces for seven years. During this time he built dozens of modern and professional platforms that are today making profits for companies worldwide. Roberto’s major achievements include his work across a number of fields as the project lead, including building of websites, cryptocurrencies, centralized exchanges, decentralized exchanges (DeFi) and NFT-related platforms.",
    links: {
      linkedIn: "https://www.linkedin.com/in/roberto-cinque/",
    },
  },
  {
    name: "SHOAIB",
    title: "SENIOR DEVELOPER",
    photo: Shoiab,
    desc: "Shoaib is a highly experienced technology and financial services professional, with nine years of experience in strategic leadership. He has achieved consistent success, validated by tangible KPIs, with a history of working across traditional and digital settings. Shoaib is a creative thinker and flexible team player experienced in hitting product delivery milestones and is a consistent overachiever.",
    links: {
      linkedIn: "https://www.linkedin.com/in/suhaibt/",
    },
  },
  {
    name: "DEBBA",
    title: "CMO",
    photo: Deeba,
    desc: "Debba is a communication and content expert with over seven years experience in marketing and business development. She is an innovator fascinated by unlocking the potential of blockchain. Debba has unique abilities and is a highly proficient business executive with a razor-sharp mindset that distinguishes her from the crowd.",
    links: {
      linkedIn: "https://www.linkedin.com/in/deeba-965b49121",
    },
  },
  {
    name: "ADNAN A RAHI",
    title: "QC/ SECURITY SPECIALIST",
    photo: Addy,
    desc: "Adnan began career as a freelancer and has completed 1,000-plus assignments in the past three years. From concept to coding, Adnan has been involved in every stage of building and securing digital asset tokens. He has worked on launchpads, DeFi protocols and apps and cutting-edge Web3 applications.",
    links: {
      linkedIn: "https://www.linkedin.com/in/adnan-a-rahi-9a2573216/",
    },
  },
  {
    name: "DOMMETI",
    title: "Founder / CEO",
    photo: Don,
    desc: "Dommeti has two decades of high-level experience in technology and engineering, as well as in the investment industry. In his career to date he has demonstrated an ability to identify emerging global trends and then create and execute on that vision. Dommeti has built and rationalized investment firms operating across various asset classes and geographies. Web3 is his passion. The buck stops with Dommeti – he is ultimately responsible for building and directing the specialist team that will make the Deelance Web3 platform the 21st century home for freelancers.",
    links: {
      linkedIn: "https://www.linkedin.com/in/dommeti-k-329235257/",
    },
  },
  {
    name: "GURPREET SINGH",
    title: "SOCIAL MEDIA MANAGER",
    photo: Guru,
    desc: "Gurpreet is a social media marketer who has more than five years experience collaborating with marketing agencies and different types of startups. Creativity and data analysis are his strengths. Gurpreet is a top-level social media strategist and innovator.",
    links: {
      linkedIn: "https://www.linkedin.com/in/gurpreetsingh993/",
    },
  },
  {
    name: "NOOR ALAM",
    title: "FULL STACK DEVELOPER",
    photo: Noor,
    desc: "Noor is a full-stack web developer with five years experience working on a variety of platforms. He has a very strong background and expertise in React, Node.js and Python. Noor is also a great team player and self-starter.",
    links: {
      linkedIn: "https://www.linkedin.com/in/noor-alam-aa722314b/",
    },
  },
  {
    name: "VISAKH",
    title: "COMMUNITY MANAGER",
    photo: Viki,
    desc: "Visakh is a marketing and social media expert within the digital marketing space, with all-around knowledge and experience in the crypto space. His involvement with digital assets goes back three years. During that time Visakh acquired skills to, for example, expose Web3 project management platform Dework to hundreds of thousands of people worldwide using his unique marketing skills.",
    links: {
      linkedIn: "https://www.linkedin.com/in/visakh-john-thykoodan-8b4709172/",
    },
  },
  {
    name: "ABDULLAH MEHBOOB",
    title: "FRONTEND DEVELOPER",
    photo: Abdullah,
    desc: "Abdullah is an experienced frontend developer with more than four years of expertise in his field. He possesses strong awareness and knowledge of technology trends and is skilled in using a variety of tools and frameworks, such as ReactJS, Next.js, Tailwind CSS, Chakra UI and many more. Abdullah's advanced proficiency in all of these technologies makes him a valuable asset to the Deelance team.",
    links: {
      linkedIn: "https://www.linkedin.com/in/abdullah-mehboob-0012a3203",
    },
  },
];

function Team() {
  const { t } = useTranslation("common");

  return (
    <section className="team">
      <div className="container">
        <div className="team-head text-center">
          <h1>TEAM</h1>
          <div className="team-sub ">
            <p>
              {t(
                "The DeeLance team consists of individuals who have experience working with freelancers and thus comprehend the challenges and difficulties associated with web2 issues. Our objective is to facilitate a seamless transition to the web3 sphere by bridging the gap between people with diverse skill sets and backgrounds and empowering everyone to take ownership of their online presence."
              )}
            </p>
          </div>
        </div>

        <div className="team-grid">
          {teamData.map((item, index) => (
            <div className="team-box" key={index}>
              <div className="linked">
                <a
                  className="linked-in"
                  href={item.links.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img src={item.photo} alt="" />
                <h2>{t(item.name)}</h2>
                <p>{t(item.title)}</p>
              </div>
              <div className="team_details">
                <p>{t(item.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
