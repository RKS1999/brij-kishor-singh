import { AnimatePresence, motion } from "framer-motion"
import { Box } from "@chakra-ui/react"
import Image from "next/image"

const MotionBox = motion(Box)

const Avatar = () => {
  const avatarAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: "sm" }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        variants={avatarAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image
          src="/logo.png"
          alt="Brij Kishor Singh"
          width={250}
          height={250}
          style={{ display: "block", margin: "auto", borderRadius: "50%" }}
          onError={(e) => {
            e.currentTarget.src = "/logo.png"
          }}
        />
      </MotionBox>
    </AnimatePresence>
  )
}

export default Avatar
