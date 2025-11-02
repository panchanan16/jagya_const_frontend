function StatusSpan({ status, green = 1, statusList = ['Approved', 'Not Approved'],  }) {
  return <button className={`status ${status == green ? "success": "warning"}`}>{status == green ? statusList[0] : statusList[1]}</button>;
}


export function StatusSpanAll({ status, green }) {
  return <button className={`status ${status == green ? "success": "warning"}`}>{status.toUpperCase()}</button>;
}


export default StatusSpan;
