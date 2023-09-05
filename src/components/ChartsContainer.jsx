import { useState } from "react";
import { styled } from "styled-components";
import BarChart from "./BarChartComponent";
import AreaChart from "./AreaChartComponent";
import { useSelector } from "react-redux";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h3>Monthly Applications</h3>
      <button
        type='button'
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default ChartsContainer;
