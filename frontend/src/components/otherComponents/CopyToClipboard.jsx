import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function CopyToClipboard({ text }) {
  const [phoneCopied, setPhoneCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setPhoneCopied(true)
      setTimeout(() => setPhoneCopied(false), 100)
    })
  }
  return (
    <>
      <FontAwesomeIcon
        icon={faCopy}
        onClick={handleCopy}
        style={{
          cursor: "pointer",
          color: phoneCopied ? "grey" : "black",
        }}
      ></FontAwesomeIcon>
    </>
  )
}
