import { v4 as uuidv4 } from "uuid";

interface ToolsDataType {
  id: string;
  name: string;
  desc: string;
  category: string;
}

export const toolsData: ToolsDataType[] = [
  // design
  {
    id: uuidv4(),
    name: "Adobe Illustrator",
    desc: "To create illustration, icon, guidelines, 3D Design, or flat design.",
    category: "design",
  },
  {
    id: uuidv4(),
    name: "Adobe Photoshop",
    desc: "To manipulate image, editing photo, and make a mock up.",
    category: "design",
  },
  {
    id: uuidv4(),
    name: "Figma",
    desc: "Is multi-function platform do create UI design and prototyping.",
    category: "design",
  },
  //   manage
  {
    id: uuidv4(),
    name: "Jira Software",
    desc: "To organize team-related work, ticketing, reporting to make it more structured.",
    category: "manage",
  },
  {
    id: uuidv4(),
    name: "Notion",
    desc: "To create a flow with a team board and template board that can be set up together.",
    category: "manage",
  },
  {
    id: uuidv4(),
    name: "Slack",
    desc: "As a platform for communication and discussion of projects that are running.",
    category: "manage",
  },
  //   programming
  {
    id: uuidv4(),
    name: "Next JS",
    desc: "Next.js enables you to create full-stack Web applications.",
    category: "programming",
  },
  {
    id: uuidv4(),
    name: "Express JS",
    desc: "Express is a minimal and flexible Node.js web application framework.",
    category: "programming",
  },
  {
    id: uuidv4(),
    name: "Firebase",
    desc: "Data platform provides a tightly integrated collection of data.",
    category: "programming",
  },
];
