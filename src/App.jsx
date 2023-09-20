import styles from "./app.module.css";
import CalculationItem from "./components/calculationItem/CalculationItem";
import Datalist from "./components/dataList/Datalist";
import SideNavItem from "./components/sidenavItem/SideNavItem";
import TransactionButton from "./components/transactionButton/TransactionButton";
import TransactionItem from "./components/transactionItem/TransactionItem";
import MultiBarChart from "./components/chart/Chart";

function App() {
	return (
		<div className={styles.body}>
			<div className={styles.navContainer}>
				<div className={styles.nav}>
					<img className={styles.logo} src='/logo.png' alt='logo' />
					<div style={{ position: "relative" }}>
						<img className={styles.profilePicture} src='/noProfile.jpg' alt='no-profile' />
						<div className={`${styles.online} ${styles.profileStatus}`}></div>
					</div>
				</div>
			</div>
			<div className={styles.bodyContainer}>
				<div className={styles.sideNavContainer}>
					<div
						style={{
							paddingTop: "16px",
							paddingBottom: "16px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "100%",
						}}
					>
						<div>
							<SideNavItem icon='/icons/home.svg' text='Home' />
							<SideNavItem icon='/icons/dashboard.svg' text='Dashboard' selected />
							<SideNavItem icon='/icons/p2p.svg' text='Peer-2-Peer' />
							<SideNavItem icon='/icons/wallet.svg' text='Wallet' />
							<SideNavItem icon='/icons/transaction.svg' text='Transaction history' />
						</div>
						<div>
							<SideNavItem icon='/icons/about.svg' text='About' />
							<SideNavItem icon='/icons/help.svg' text='Help' />
							<SideNavItem icon='/icons/logout.svg' text='Logout' />
						</div>
					</div>
				</div>
				<div
					style={{
						flexGrow: "5",
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					}}
				>
					<div className={styles.chartSection}>
						<div className={styles.heading}>Analytics</div>
						<div style={{ display: "flex", marginTop: "1rem" }}>
							<div
								style={{
									display: "flex",
									flexGrow: "1",
									flexDirection: "column",
								}}
							>
								<div style={{ fonts: "8px" }}>Calculation</div>
								<div style={{ display: "flex", gap: "5px", padding: "10px" }}>
									<CalculationItem header={"Spend"} icon='/icons/up-bold.svg' color='#fbd6e3' />
									<CalculationItem header={"Received"} icon='/icons/down-bold.svg' color='#dcedc9' />
									<CalculationItem header={"Assets"} icon='/icons/star.svg' color='#F1EFEF' />
								</div>
							</div>
							{/* <div style={{ fonts: "8px" }}>Average Chart</div> */}
							<div style={{ width: "50%" }}>
								<MultiBarChart />
							</div>
						</div>
					</div>
					<div
						style={{
							flexGrow: "4",
							backgroundColor: "#fff",
							borderRadius: "12px",
							padding: "16px",
						}}
					>
						<div className={styles.heading}>Market Update</div>
						<div>
							<div className={styles.dataHeader}>
								<div style={{ width: "10%" }}>No.</div>
								<div style={{ width: "25%" }}>Name</div>
								<div style={{ width: "20%" }}>Last price</div>
								<div style={{ width: "15%" }}>Change</div>
								<div style={{ width: "20%" }}>market Stats</div>
								<div style={{ width: "10%" }}>Action</div>
							</div>
							<div>
								<Datalist />
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						flexGrow: "1",
						backgroundColor: "#fff",
						borderRadius: "12px",
						padding: "16px",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div style={{ flexGrow: "2", borderBottom: "1.3px solid #a9a7a722" }}>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "5px",
								alignItems: "center",
							}}
						>
							<span style={{ fontWeight: "600" }}>$ 267,820.00</span>
							<span style={{ fontSize: "10px" }}>Your Available balance</span>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "16px",
								marginTop: "10px",
							}}
						>
							<TransactionButton title={"Deposit"} icon={"/icons/plus.svg"} />
							<TransactionButton title={"Withdraw"} icon={"/icons/minus.svg"} />
							<TransactionButton title={"Transaction"} icon={"/icons/transaction.svg"} />
						</div>
					</div>
					<div style={{ flexGrow: "4" }}>
						<div className={styles.transactionHeader}>
							<p style={{ fontSize: "11px" }}>See Activity</p>
							<p style={{ fontSize: "11px", color: "red", cursor: "pointer" }}>View All</p>
						</div>
						<div style={{ display: "flex", gap: "18px", flexDirection: "column" }}>
							<TransactionItem value={2000} credit />
							<TransactionItem value={5243} />
							<TransactionItem value={25} credit />
							<TransactionItem value={2000} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
