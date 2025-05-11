function StatusSpan({ status }) {
  return <button className="status warning">{status == 1 ? 'Approved' : 'Not Approved'}</button>;
}

export default StatusSpan;
