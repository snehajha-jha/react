/* eslint-disable react/prop-types */
const CalculationItem = ({ color, icon, header }) => {
	return (
		<div
			style={{
				flexGrow: "1",
				height: "90px",
				backgroundColor: `${color}`,
				borderRadius: "10px",
				display: "flex",
				justifyContent: "center",
				padding: "10px",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div style={{ marginBottom: "4px" }}>{header}</div>
			<img style={{ height: "20px", width: "20px" }} src={icon} alt='' />
			<div style={{ marginTop: "4px", fontSize: "large", fontWeight: "600" }}>756763</div>
		</div>
	);
};

export default CalculationItem;
