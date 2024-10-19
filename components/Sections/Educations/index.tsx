import { memo } from "react"
import { Heading, Text, Stack, Link } from "@chakra-ui/react"
import EducationsTab from "./EductaionsTab"
const DetailSection = () => (
  <Stack
    width={{ base: "99%", lg: "60%", xl: "75%" }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: "small-caps",
      }}
    >
      Educations...
    </Heading>
    <EducationsTab />
  </Stack>
)

export default memo(DetailSection)
