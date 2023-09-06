import { useSelector } from "react-redux";
import StatItem from "./StatItem";
import { styled } from "styled-components";
import { MdCheckCircleOutline, MdSchedule, MdCancel } from "react-icons/md";
import PieChartComponent from "./PieChartComponent";

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <MdCheckCircleOutline />,
      color: "#f2bd2c",
      bcg: "#fae5ab",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <MdSchedule />,
      color: "#00d563",
      bcg: "#ccf7e0",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <MdCancel />,
      color: "#db3754",
      bcg: "#f3cbd2",
    },
  ];

  return (
    <Wrapper>
      <PieChartComponent data={defaultStats} />
      <div>
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 1rem;
  }
`;

export default StatsContainer;
