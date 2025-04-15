import { useWindowDimensions, View } from "react-native";
type Day = {
  day: Date;
  value: number;
};

type Week = Day[];

type WeeklyBarChartProps = {
  activeWeek: Week;
};

const WeeklyBarChart = ({ activeWeek }: WeeklyBarChartProps) => {
  const { width: windowWidth } = useWindowDimensions();
  const BarChartWidth = windowWidth * 0.9;
  const BarChartGap = 10;
  const BarWidth =
    (BarChartWidth - BarChartGap * (activeWeek.length - 1)) / activeWeek.length;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: BarChartGap,
      }}
    >
      {activeWeek.map((day) => (
        <View
          style={{
            height: 100,
            width: 50,
            backgroundColor: "white",
            borderRadius: 15,
            borderCurve: "continuous",
          }}
        ></View>
      ))}
    </View>
  );
};

export default WeeklyBarChart;
