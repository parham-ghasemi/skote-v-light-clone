
export default function HorizontalPercentageVisualizer({ percent, color }) {
  const innerDivStyles = {
    width: `${percent}%`,
    backgroundColor: color,
    height: '100%'
  };

  return (
    <div className="h-full w-full rounded-full overflow-hidden">
      <div style={innerDivStyles}></div>
    </div>
  )
}