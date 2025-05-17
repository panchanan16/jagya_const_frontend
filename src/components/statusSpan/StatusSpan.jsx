function StatusSpan({ status }) {
  return <button className={`status ${status == 1 ? "success": "warning"}`}>{status == 1 ? 'Approved' : 'Not Approved'}</button>;
}

export default StatusSpan;
