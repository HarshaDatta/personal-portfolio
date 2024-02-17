import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiSolidity } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import whiteboard from "@/public/Whiteboard.png";
import blockchain from "@/public/blockchain_txn.png";
import expense from "@/public/Expense.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors, Computer Science",
    location: "BMS Institute of Technology and Management",
    description:
      "As a student in Computer Science program, I engaged in a comprehensive curriculum covering programming fundamentals, data structures, software engineering, computer architecture, and database systems. I gained practical experience and developed skills applicable to diverse career paths. Equipped with the knowledge and skills, I was ready to pursue advanced studies in computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Solidity Bootcamp",
    location: "The Blockchain School",
    description:
      "During the lockdown, I participated in a rigorous 6-month bootcamp focused on Solidity smart contract development. Throughout the program, I gained comprehensive knowledge and hands-on experience in blockchain technology, Ethereum, and decentralized applications (DApps).",
    icon: React.createElement(SiSolidity),
    date: "2020",
  },
  {
    title: "Software Engineer",
    location: "Manhattan Associates",
    description:
      "Upon graduation, I started working as a software engineer where I played a pivotal role in the Outbound Team of the Warehouse Management System (WMOS), focusing on optimizing order processing and shipment management. I developed and maintained the core codebase, ensuring consistency and reliability, while proficiently designing and improving APIs to streamline outbound operations and integrate with external systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Masters, Cybersecurity",
    location: "University of Houston",
    description:
      "Currently pursuing a master's in cybersecurity, I am actively enhancing my skills to secure digital assets and mitigate cyber threats. This endeavor complements my software engineering role by equipping me with the knowledge to develop secure software solutions. By integrating cybersecurity principles into the software development lifecycle, I aim to bridge the gap between security and development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Collaborative WhiteBoard",
    description:
      "Implemented a collaborative whiteboard, where multiple users can simultaneously present their ideas and discuss them.",
    tags: ["React", "SocketIO", "HTML5 Canvas", "RoughJS", "CSS"],
    imageUrl: whiteboard,
  },
  {
    title: "Expense Summary Bot",
    description:
      "This bot generates the summary by collecting the transactions and the expenses from Splitwise and personal bank.",
    tags: ["Python", "SplitwiseAPI", "OAuthAPI"],
    imageUrl: expense,
  },
  {
    title: "Blockchain Transaction Management",
    description:
      "Implemented a basic blockchain structure with block composition, cryptographic hashing, and chain management.",
    tags: ["Python", "Flask", "Bootstrap", "HTML", "CSS"],
    imageUrl: blockchain,
  },
] as const;

export const skillsData = [
  "Java",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "BitBucket",
  "JIRA",
  "Spring Boot",
  "React",
  "Node.js",
  "Redux",
  "Express",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Solidity",
  "Remix",
] as const;
