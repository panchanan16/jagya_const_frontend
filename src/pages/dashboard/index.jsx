import DynamicLayout from "@/layout/common/dynamicLayout";
import PageLayout from "@/layout/common/dynamicPageLayout";
import FirstSlideLayout from "@/layout/common/firstSlideLayout";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";

const AnalyticsDashboard = () => {
  const [dateFilter, setDateFilter] = useState("thisMonth");
  const [projectFilter, setProjectFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  // Sample data - replace with your actual data
  const projectData = [
    { name: "Jan", completed: 12, ongoing: 8 },
    { name: "Feb", completed: 19, ongoing: 6 },
    { name: "Mar", completed: 15, ongoing: 10 },
    { name: "Apr", completed: 22, ongoing: 9 },
    { name: "May", completed: 18, ongoing: 12 },
    { name: "Jun", completed: 25, ongoing: 7 },
  ];

  const materialRequestData = [
    { name: "Week 1", requested: 45, delivered: 42 },
    { name: "Week 2", requested: 52, delivered: 48 },
    { name: "Week 3", requested: 38, delivered: 36 },
    { name: "Week 4", requested: 61, delivered: 58 },
  ];

  const expenseData = [
    { name: "Vendor", value: 45000, color: "#363428" },
    { name: "Contractor", value: 30000, color: "#646452ff" },
    { name: "others", value: 15000, color: "#8e8e71ff" },
  ];

  const monthlyTrend = [
    { month: "Jan", payment: 85000, expense: 72000 },
    { month: "Feb", payment: 92000, expense: 78000 },
    { month: "Mar", payment: 88000, expense: 75000 },
    { month: "Apr", payment: 95000, expense: 82000 },
    { month: "May", payment: 105000, expense: 89000 },
    { month: "Jun", payment: 112000, expense: 98000 },
  ];

  const statsCards = [
    {
      title: "Total Projects",
      value: "147",
      icon: "📊",
      color: "#363428",
      trend: "+12%",
    },
    {
      title: "Ongoing Projects",
      value: "23",
      icon: "🔄",
      color: "#4A4A3A",
      trend: "+5%",
    },
    {
      title: "Completed Projects",
      value: "124",
      icon: "✅",
      color: "#2D5016",
      trend: "+8%",
    },
    {
      title: "Payment This Month",
      value: "₹1,12,000",
      icon: "💰",
      color: "#B8860B",
      trend: "+15%",
    },
    {
      title: "Material Requests",
      value: "196",
      icon: "📦",
      color: "#5E5E4C",
      trend: "+3%",
    },
    {
      title: "Delivered Items",
      value: "184",
      icon: "🚚",
      color: "#2D5016",
      trend: "+7%",
    },
    {
      title: "Total Expense",
      value: "₹98,000",
      icon: "💸",
      color: "#8B0000",
      trend: "-2%",
    },
    {
      title: "Pending Deliveries",
      value: "12",
      icon: "⏱️",
      color: "#FF8C00",
      trend: "-18%",
    },
  ];

  const filterContainerStyle = {
    background: "linear-gradient(135deg, #363428 0%, #4A4A3A 100%)",
    borderRadius: "6px",
    padding: "24px",
    marginBottom: "32px",
    boxShadow: "0 8px 32px rgba(54, 52, 40, 0.15)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const filterStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "12px 16px",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    outline: "none",
    backdropFilter: "blur(10px)",
  };

  const cardStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
    borderRadius: "6px",
    padding: "24px",
    boxShadow: "0 8px 32px rgba(54, 52, 40, 0.1)",
    border: "1px solid rgba(54, 52, 40, 0.1)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const chartContainerStyle = {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
    borderRadius: "6px",
    padding: "28px",
    boxShadow: "0 12px 40px rgba(54, 52, 40, 0.1)",
    border: "1px solid rgba(54, 52, 40, 0.1)",
    backdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <PageLayout>
      <DynamicLayout>
        <FirstSlideLayout>
          <div
            style={{
              padding: "32px",
              background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
              minHeight: "100vh",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            }}
          >
            {/* Modern Filter Section */}
            <div style={filterContainerStyle}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    📅
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Date Range:
                  </span>
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    style={filterStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <option
                      value="today"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Today
                    </option>
                    <option
                      value="thisWeek"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      This Week
                    </option>
                    <option
                      value="thisMonth"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      This Month
                    </option>
                    <option
                      value="lastMonth"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Last Month
                    </option>
                    <option
                      value="thisQuarter"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      This Quarter
                    </option>
                    <option
                      value="thisYear"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      This Year
                    </option>
                  </select>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    🏗️
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Project Type:
                  </span>
                  <select
                    value={projectFilter}
                    onChange={(e) => setProjectFilter(e.target.value)}
                    style={filterStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <option
                      value="all"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      All Projects
                    </option>
                    <option
                      value="residential"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Residential
                    </option>
                    <option
                      value="commercial"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Commercial
                    </option>
                    <option
                      value="industrial"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Industrial
                    </option>
                    <option
                      value="infrastructure"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Infrastructure
                    </option>
                  </select>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    🏢
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    Department:
                  </span>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    style={filterStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <option
                      value="all"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      All Departments
                    </option>
                    <option
                      value="construction"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Construction
                    </option>
                    <option
                      value="procurement"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Procurement
                    </option>
                    <option
                      value="logistics"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Logistics
                    </option>
                    <option
                      value="finance"
                      style={{ backgroundColor: "#363428", color: "white" }}
                    >
                      Finance
                    </option>
                  </select>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      ...filterStyle,
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: "600",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.3)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    🔄 Refresh
                  </button>
                  <button
                    style={{
                      ...filterStyle,
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontWeight: "600",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.3)";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.2)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    📊 Export
                  </button>
                </div>
              </div>
            </div>

            {/* Modern Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {statsCards.map((card, index) => (
                <div
                  key={index}
                  style={cardStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 60px rgba(54, 52, 40, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(54, 52, 40, 0.1)";
                  }}
                >
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${card.color} 0%, ${card.color}80 100%)`,
                      borderRadius: "6px 6px 0 0",
                    }}
                  ></div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          color: "#6c757d",
                          fontSize: "14px",
                          fontWeight: "500",
                          margin: "0 0 8px 0",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {card.title}
                      </p>
                      <p
                        style={{
                          color: "#363428",
                          fontSize: "32px",
                          fontWeight: "700",
                          margin: "0",
                          lineHeight: "1.2",
                        }}
                      >
                        {card.value}
                      </p>
                    </div>
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}CC 100%)`,
                        borderRadius: "16px",
                        width: "56px",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        boxShadow: `0 8px 24px ${card.color}40`,
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 12px",
                      backgroundColor: card.trend.startsWith("+")
                        ? "rgba(45, 80, 22, 0.1)"
                        : "rgba(139, 0, 0, 0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        color: card.trend.startsWith("+")
                          ? "#2D5016"
                          : "#8B0000",
                      }}
                    >
                      {card.trend.startsWith("+") ? "📈" : "📉"}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: card.trend.startsWith("+")
                          ? "#2D5016"
                          : "#8B0000",
                      }}
                    >
                      {card.trend} from last period
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Modern Charts Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
                gap: "32px",
              }}
            >
              {/* Project Status Chart */}
              <div style={chartContainerStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #363428 0%, #4A4A3A 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      color: "#363428",
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "0 0 8px 0",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Project Progress Timeline
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      margin: "0",
                      fontWeight: "400",
                    }}
                  >
                    Monthly breakdown of completed vs ongoing projects
                  </p>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <BarChart data={projectData} barCategoryGap="20%">
                    <defs>
                      <linearGradient
                        id="completedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2D5016"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#2D5016"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                      <linearGradient
                        id="ongoingGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#363428"
                          stopOpacity={0.9}
                        />
                        <stop
                          offset="100%"
                          stopColor="#363428"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e9ecef"
                      strokeWidth={1}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#6c757d"
                      fontSize={12}
                      fontWeight="500"
                    />
                    <YAxis stroke="#6c757d" fontSize={12} fontWeight="500" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e9ecef",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(54, 52, 40, 0.1)",
                        backdropFilter: "blur(20px)",
                      }}
                      cursor={{ fill: "rgba(54, 52, 40, 0.05)" }}
                    />
                    <Bar
                      dataKey="completed"
                      fill="url(#completedGradient)"
                      name="Completed"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="ongoing"
                      fill="url(#ongoingGradient)"
                      name="Ongoing"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Material Request vs Delivery */}
              <div style={chartContainerStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #5E5E4C 0%, #72725E 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      color: "#363428",
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "0 0 8px 0",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Material Flow Analysis
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      margin: "0",
                      fontWeight: "400",
                    }}
                  >
                    Weekly comparison of material requests vs deliveries
                  </p>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <LineChart data={materialRequestData}>
                    <defs>
                      <linearGradient
                        id="requestedGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#363428"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#4A4A3A"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                      <linearGradient
                        id="deliveredGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2D5016"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3D6B1F"
                          stopOpacity={0.8}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e9ecef"
                      strokeWidth={1}
                    />
                    <XAxis
                      dataKey="name"
                      stroke="#6c757d"
                      fontSize={12}
                      fontWeight="500"
                    />
                    <YAxis stroke="#6c757d" fontSize={12} fontWeight="500" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e9ecef",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(54, 52, 40, 0.1)",
                        backdropFilter: "blur(20px)",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="requested"
                      stroke="url(#requestedGradient)"
                      strokeWidth={4}
                      name="Requested"
                      dot={{ fill: "#363428", strokeWidth: 2, r: 6 }}
                      activeDot={{
                        r: 8,
                        stroke: "#363428",
                        strokeWidth: 2,
                        fill: "#fff",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="delivered"
                      stroke="url(#deliveredGradient)"
                      strokeWidth={4}
                      name="Delivered"
                      dot={{ fill: "#2D5016", strokeWidth: 2, r: 6 }}
                      activeDot={{
                        r: 8,
                        stroke: "#2D5016",
                        strokeWidth: 2,
                        fill: "#fff",
                      }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Expense Breakdown */}
              <div style={chartContainerStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #8B0000 0%, #CD5C5C 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      color: "#363428",
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "0 0 8px 0",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Expense Distribution
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      margin: "0",
                      fontWeight: "400",
                    }}
                  >
                    Current month expense breakdown by category
                  </p>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <PieChart>
                    <defs>
                      {expenseData.map((entry, index) => (
                        <linearGradient
                          key={`gradient-${index}`}
                          id={`expenseGradient${index}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={entry.color}
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="100%"
                            stopColor={entry.color}
                            stopOpacity={0.7}
                          />
                        </linearGradient>
                      ))}
                    </defs>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={40}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      labelLine={false}
                      stroke="none"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#expenseGradient${index})`}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [
                        `₹${value.toLocaleString()}`,
                        "Amount",
                      ]}
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e9ecef",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(54, 52, 40, 0.1)",
                        backdropFilter: "blur(20px)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Payment vs Expense Trend */}
              <div style={chartContainerStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #B8860B 0%, #DAA520 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      color: "#363428",
                      fontSize: "20px",
                      fontWeight: "700",
                      margin: "0 0 8px 0",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Financial Performance
                  </h3>
                  <p
                    style={{
                      color: "#6c757d",
                      fontSize: "14px",
                      margin: "0",
                      fontWeight: "400",
                    }}
                  >
                    Monthly payment receipts vs expense outflow
                  </p>
                </div>

                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={monthlyTrend}>
                    <defs>
                      <linearGradient
                        id="paymentAreaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#2D5016"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#2D5016"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="expenseAreaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8B0000"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#8B0000"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e9ecef"
                      strokeWidth={1}
                    />
                    <XAxis
                      dataKey="month"
                      stroke="#6c757d"
                      fontSize={12}
                      fontWeight="500"
                    />
                    <YAxis stroke="#6c757d" fontSize={12} fontWeight="500" />
                    <Tooltip
                      formatter={(value) => [`₹${value.toLocaleString()}`, ""]}
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e9ecef",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(54, 52, 40, 0.1)",
                        backdropFilter: "blur(20px)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="payment"
                      stackId="1"
                      stroke="#2D5016"
                      strokeWidth={3}
                      fill="url(#paymentAreaGradient)"
                      name="Payment"
                    />
                    <Area
                      type="monotone"
                      dataKey="expense"
                      stackId="2"
                      stroke="#8B0000"
                      strokeWidth={3}
                      fill="url(#expenseAreaGradient)"
                      name="Expense"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Additional Insights Section */}
            <div
              style={{
                marginTop: "40px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Recent Activity */}
              <div
                style={{
                  ...chartContainerStyle,
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #2D5016 0%, #3D6B1F 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <h3
                  style={{
                    color: "#363428",
                    fontSize: "18px",
                    fontWeight: "700",
                    margin: "0 0 20px 0",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Recent Activity
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(54, 52, 40, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#2D5016",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Project Alpha completed successfully
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          color: "#6c757d",
                        }}
                      >
                        2 hours ago
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(54, 52, 40, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#B8860B",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Payment of ₹45,000 received
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          color: "#6c757d",
                        }}
                      >
                        4 hours ago
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(54, 52, 40, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#363428",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        New material request submitted
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          color: "#6c757d",
                        }}
                      >
                        6 hours ago
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#FF8C00",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Delivery scheduled for tomorrow
                      </p>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "12px",
                          color: "#6c757d",
                        }}
                      >
                        8 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals Progress */}
              <div
                style={{
                  ...chartContainerStyle,
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background:
                      "linear-gradient(90deg, #B8860B 0%, #DAA520 100%)",
                    borderRadius: "20px 20px 0 0",
                  }}
                ></div>

                <h3
                  style={{
                    color: "#363428",
                    fontSize: "18px",
                    fontWeight: "700",
                    margin: "0 0 20px 0",
                    letterSpacing: "-0.3px",
                  }}
                >
                  Monthly Goals Progress
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Project Completion
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "600",
                        }}
                      >
                        78%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "rgba(54, 52, 40, 0.1)",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "78%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, #2D5016 0%, #3D6B1F 100%)",
                          borderRadius: "4px",
                          transition: "width 0.3s ease",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Revenue Target
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "600",
                        }}
                      >
                        65%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "rgba(54, 52, 40, 0.1)",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "65%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, #B8860B 0%, #DAA520 100%)",
                          borderRadius: "4px",
                          transition: "width 0.3s ease",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "500",
                        }}
                      >
                        Cost Control
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#363428",
                          fontWeight: "600",
                        }}
                      >
                        92%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "8px",
                        backgroundColor: "rgba(54, 52, 40, 0.1)",
                        borderRadius: "4px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: "92%",
                          height: "100%",
                          background:
                            "linear-gradient(90deg, #363428 0%, #4A4A3A 100%)",
                          borderRadius: "4px",
                          transition: "width 0.3s ease",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FirstSlideLayout>
      </DynamicLayout>
    </PageLayout>
  );
};

export default AnalyticsDashboard;
