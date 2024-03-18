import CopyToClipboard from "../otherComponents/CopyToClipboard"

export default function PersonCard({ user }) {
  return (
    <div className="student-card">
      <div className="photo-personal-details">
        <div className="profile-photo-div">
          <img
            className="profile-photo"
            src="https://via.placeholder.com/128x128"
            alt={user.__class__.toUpperCase()}
          />
        </div>
        <div className="personal-info">
          <p>
            <strong>First Name:</strong> {user.first_name}
          </p>
          <p>
            <strong>Last Name:</strong> {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}{" "}
            <CopyToClipboard text={user.email} />
          </p>
          <div>
            <p>
              <strong>Phone:</strong> {user.phone_number}{" "}
              <CopyToClipboard text={user.phone_number} />
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="bio">{user.bio || "No bio available"}</div>
      <hr />
    </div>
  )
}
