// import md5 from "md5"
// import * as Icons from "react-icons/fa"

// export default function CourseIcon({ title }) {
//   // Generate a hash from the title
//   const hash = md5(title)

//   // Convert the hash into a number
//   const num = parseInt(hash, 16)

//   // Get all available icons
//   const iconNames = Object.keys(Icons)

//   // Use the number to select an icon
//   const IconComponent = Icons[iconNames[num % iconNames.length]]

//   // Render the selected icon
//   return <IconComponent />
// }
import React, { useState, useEffect } from "react"

export default function CourseIcon({ title, size = 128 }) {
  const [avatarUrl, setAvatarUrl] = useState(null)

  useEffect(() => {
    // Encode the title for URL
    const encodedTitle = encodeURIComponent(title)

    // Fetch the avatar image from ui-avatars API
    fetch(
      `https://ui-avatars.com/api/?name=${encodedTitle}&background=random&size=${size}&color=000`
    )
      .then((response) => response.blob())
      .then((blob) => {
        // Convert blob to URL
        const avatarUrl = URL.createObjectURL(blob)
        setAvatarUrl(avatarUrl)
      })
      .catch((error) => {
        console.error("Error fetching avatar:", error)
      })

    // Cleanup function to revoke the object URL
    return () => {
      if (avatarUrl) {
        URL.revokeObjectURL(avatarUrl)
      }
    }
  }, [title])

  if (!avatarUrl) {
    // Return null or a placeholder while avatar is loading
    return null
  }

  // Render the avatar image
  return <img src={avatarUrl} alt={title} />
}
