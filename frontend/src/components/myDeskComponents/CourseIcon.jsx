import md5 from "md5"
import * as Icons from "react-icons/fa"

export default function CourseIcon({ title }) {
  // Generate a hash from the title
  const hash = md5(title)

  // Convert the hash into a number
  const num = parseInt(hash, 16)

  // Get all available icons
  const iconNames = Object.keys(Icons)

  // Use the number to select an icon
  const IconComponent = Icons[iconNames[num % iconNames.length]]

  // Render the selected icon
  return <IconComponent />
}
