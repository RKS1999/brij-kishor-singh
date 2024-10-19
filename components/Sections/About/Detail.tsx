import { memo } from "react"
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Tooltip,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaBriefcase,
  FaCalendarAlt,
  FaFlag,
  FaGraduationCap,
  FaHeart,
  FaOm,
} from "react-icons/fa"

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue("teal.500", "cyan.200")

  return (
    <Stack
      width={{ base: "100%", lg: "70%" }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: "small-caps", marginTop: "20px" }}
      >
        About Me.
      </Heading>
      <Text variant="description">
        I’m a Furnish Incharge with 16+ years of experience in the steel
        industry. I specialize in managing furnace operations, optimizing
        production processes, and ensuring adherence to safety standards. With
        expertise in advanced furnace technologies, I focus on improving
        efficiency and maintaining high-quality output. My extensive experience
        allows me to effectively oversee operations and contribute to continuous
        process improvements, ensuring smooth and productive workflows in the
        steel sector.
        <br /> <br />
      </Text>
      <Tooltip label="React JS Developer" aria-label="I Love Coding" hasArrow>
        <Text as="span" variant="emphasis">
          Personal & Educational Details:
        </Text>
      </Tooltip>
      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaCalendarAlt} color={emphasis} fontSize="1.5em" />
            DOB : 20-10-1970
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaFlag} color={emphasis} fontSize="1.5em" />
            Nationality : Indian
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaOm} color={emphasis} fontSize="1.5em" />
            Religion : Hindu
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaHeart} color={emphasis} fontSize="1.5em" />
            Marital Status : Married
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaGraduationCap} color={emphasis} fontSize="1.5em" />
            Education : Matric Pass (10th)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={FaBriefcase} color={emphasis} fontSize="1.4em" />
            Experience : 16+ Years
          </ListItem>
        </List>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
