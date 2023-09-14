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
      color: "#6136bf",
      bcg: "#fff",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <MdSchedule />,
      color: "#41EAD4",
      bcg: "#fff",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <MdCancel />,
      color: "#F71735",
      bcg: "#fff",
    },
  ];

  return (
    <Wrapper>
      <PieChartComponent data={defaultStats} />
      <div className='stat-items'>
        {defaultStats.map((item, index) => {
          return <StatItem key={index} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* row-gap: 2rem; */
  background-color: var(--white);
  justify-content: center;
  align-items: center;
  border-radius: var(--borderRadiusSmall);

  .stat-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-width: 768px) {
    align-items: center;
    .stat-items {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  @media (min-width: 1120px) {
    flex-direction: row;
  }
`;

export default StatsContainer;
