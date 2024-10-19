import { MdOutlineMenu } from "react-icons/md" // Import the MdOutlineMenu icon
import { motion } from "framer-motion"
import { useColorModeValue } from "@chakra-ui/react" // Import this hook

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.stroke} // Use stroke from props
    strokeLinecap="round"
    {...props}
  />
)

interface MenuToggleProps {
  toggle: () => void
  isDarkMode?: boolean
}

export const MenuToggle = ({ toggle, isDarkMode = false }: MenuToggleProps) => {
  const strokeColor = useColorModeValue("hsl(0, 0%, 7%)", "hsl(240, 100%, 94%)") // Define stroke color based on mode

  return (
    <button
      onClick={toggle}
      style={{
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MdOutlineMenu size={24} color={strokeColor} />
    </button>
  )
}

export default MenuToggle
