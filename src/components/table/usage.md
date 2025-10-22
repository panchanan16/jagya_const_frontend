// All these still work perfectly:

// 1. Simple strings (backward compatible)
const limit = ["id", "name", "status"];

// 2. Functions returning JSX
const limit = [
  "id",
  (rowData) => (
    <Link to={`/profile/${rowData.id}`}>
      View Profile
    </Link>
  ),
  (rowData) => (
    <td style={{ textAlign: 'right' }}>
      <span style={{ color: '#059669', fontWeight: 'bold' }}>
        ${rowData.amount?.toLocaleString()}
      </span>
    </td>
  )
];

// 3. Configuration objects
const limit = [
  "id", 
  { key: "amount", type: "amount", currency: "$" },
  { key: "status", type: "badge", variant: "success" }
];


// Simple (backward compatible)
Limit={["id", "name", "status"]}

// Enhanced with custom types
Limit={[
  "id",
  { key: "amount", type: "amount", currency: "$" },
  { key: "website", type: "link", linkText: "Visit", target: "_blank" },
  { key: "status", type: "badge", variant: "success" }
]}

