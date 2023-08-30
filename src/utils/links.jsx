import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const links = [
  { id: 1, text: "stats", path: "/", icon: <AiOutlineLineChart /> },
  {
    id: 1,
    text: "all jobs",
    path: "all-jobs",
    icon: <AiOutlineUnorderedList />,
  },
  { id: 1, text: "add job", path: "add-job", icon: <AiOutlineFileAdd /> },
  { id: 1, text: "profile", path: "profile", icon: <CgProfile /> },
];

export default links;
