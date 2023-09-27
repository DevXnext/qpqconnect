import React from 'react'

interface DashboardInfoProps {
    tabs: string;
    setTabs: Function;
}

export default function DashboardInfo({ tabs, setTabs }: DashboardInfoProps) {
    return (
        <div className='p-5'>
            <h1 style={titleStyle}>Dashboard</h1>
            <h1 style={welcomeBackText}>Welcome Back Jay</h1>
            <p style={subText}>Here is the information about all your orders</p>

            <div className="d-flex mt-3" style={dashboardTabs}>
                <div style={tabStyle} onClick={() => { setTabs("last-week") }}>
                    <a style={tabs === "last-week" ? tabTextSelected : tabText}>Last week</a>
                </div>

                <div style={tabStyle} onClick={() => { setTabs("last-month") }}>
                    <a style={tabs === "last-month" ? tabTextSelected : tabText}>Last month</a>
                </div>

                <div style={tabStyle} onClick={() => { setTabs("last-six-months") }}>
                    <a style={tabs === "last-six-months" ? tabTextSelected : tabText}>Last six months</a>
                </div>

                <div style={tabStyle} onClick={() => { setTabs("last-year") }}>
                    <a style={tabs === "last-year" ? tabTextSelected : tabText}>Last year</a>
                </div>
            </div>
        </div>
    )
}

const titleStyle: React.CSSProperties | undefined = {
    fontSize: "16px",
    color: "#000",
    fontWeight: "800",
}

const welcomeBackText: React.CSSProperties | undefined = {
    fontSize: "18px",
    color: "#000",
    fontWeight: "700",
    marginTop: "12px"
}

const subText: React.CSSProperties | undefined = {
    fontSize: "10px",
    color: "#8B909A",
    fontWeight: "500",
}

const dashboardTabs: React.CSSProperties | undefined = {
    borderBottom: "1px solid #DBDADE",
}

const tabText: React.CSSProperties | undefined = {
    fontSize: "10px",
    color: "#000",
    fontWeight: "500",
    margin: "8px",
    textAlign: "center",
    padding: "7px 14px",
    borderBottom: "1px solid #DBDADE",
}

const tabTextSelected: React.CSSProperties | undefined = {
    fontSize: "10px",
    color: "#000",
    fontWeight: "500",
    margin: "8px",
    textAlign: "center",
    padding: "7px 14px",
    borderBottom: "1px solid #000",
}

const tabStyle: React.CSSProperties | undefined = {
    display: "inline-grid",
    cursor: "pointer",
}

