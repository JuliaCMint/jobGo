import { styled } from "styled-components";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#f2bd2c", "#00d563", "#db3754"];

const PieChartComponent = ({ data }) => {
  return (
    <Wrapper>
      <PieChart width={200} height={300}>
        <Pie
          data={data}
          cx={100}
          cy={150}
          innerRadius={50}
          outerRadius={60}
          // fill='#6136bf'
          paddingAngle={5}
          dataKey='count'
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        // fill='#00d563'
        paddingAngle={5}
        dataKey='count'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
      </PieChart>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* padding: 2rem; */
  background: var(--white);
  border-radius: var(--borderRadiusSmall);
`;

export default PieChartComponent;
