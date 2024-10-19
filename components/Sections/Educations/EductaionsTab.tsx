import {
  Text,
  Link,
  Stack,
  Tabs,
  TabPanels,
  TabPanel,
  List,
  ListIcon,
  ListItem,
  SlideFade,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react"
import { BiRightArrow } from "react-icons/bi"
import { EducationsList } from "config/educations"
import { mobileBreakpointsMap } from "config/theme"

const EducationsTab = () => {
  const { colorMode } = useColorMode()
  const emphasis = useColorModeValue("teal.500", "cyan.200")
  const borderColor = useColorModeValue("gray.300", "gray.600")
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  return (
    <Tabs id="EducationsTabs" isLazy>
      <TabPanels>
        {EducationsList.map((company) => (
          <TabPanel key={`TabPanel-${company.name}`} borderColor={borderColor}>
            <SlideFade offsetY="20px" in>
              <Stack spacing={0}>
                <Text as="span">
                  <Link
                    href="#"
                    aria-label={company.longName}
                    rel="noreferrer"
                    target="_blank"
                    fontSize={isMobile ? "md" : "lg"}
                    fontWeight="bold"
                  >
                    #{company.name}
                  </Link>
                </Text>
                <Text fontSize="smaller">{company.duration}</Text>
              </Stack>
              <List spacing={3} pt={5}>
                {company.roles?.map((roleDesc, idx) => (
                  <ListItem
                    key={`${company.name}-desc-${idx}`}
                    fontSize="smaller"
                    display="flex"
                    alignItems="center"
                  >
                    <ListIcon as={BiRightArrow} color={emphasis} />
                    <Text as="span">{roleDesc}</Text>
                  </ListItem>
                ))}
              </List>
            </SlideFade>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default EducationsTab
