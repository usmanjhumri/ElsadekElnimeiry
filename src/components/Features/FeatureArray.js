import { SiAzuredevops, SiCisco } from "react-icons/si";
import { BsFiletypeJava } from "react-icons/bs";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandPowershell } from "react-icons/tb";
import { VscSymbolProperty } from "react-icons/vsc";
import AAD from "./azure-active-directory-aad.svg";
import { DiJira } from "react-icons/di";

const cardType = [
  {
    icons: (
      <BsFiletypeJava
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),

    title: "Experience with Java",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
  },
  {
    icons: (
      <AiOutlineConsoleSql
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),
    title: "Knowledge in SQL",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
  },
  {
    icons: (
      <SiAzuredevops
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),
    title: "Jira/Atlassian",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
  },
  {
    icons: (
      <DiJira
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),
    title: "Jira/Atlassian",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
  },
  {
    icons: (
      <TbBrandPowershell
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),
    title: "Powershell/Scripting",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
    // link: "https://www.youtube.com/channel/UCbrPRhtO1HO2k9WsZsCIpfA",
  },
  {
    icons: (
      <SiCisco
        style={{
          color: "#f9004d",
          height: "auto",
          width: "40px",
          fontSize: "16px",
          marginBottom: "29px",
        }}
      />
    ),
    title: "Cisco phone",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus obcaecati dolore odit labore quisquam rerum explicabo vero tenetur fugit quia est, placeat autem expedita molestiae assumenda id sed nemo ad.",
  },
];

export default cardType;
