export default function Spinner({ text }) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="spinner-text">
        <h2>{text}</h2>
      </div>
    </div>
  )
}
