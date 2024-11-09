import { memo } from "react"
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import FeaturedCard from "./FeaturedCard"
import { fadeInUpSlower, galleryStagger } from "config/animations"
import { mobileBreakpointsMap } from "config/theme"
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: "99%", lg: "60%", xl: "75%" }}
      height="100%"
      spacing={{ base: 5, xl: 6 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: "small-caps",
        }}
      >
        Experiences...
      </Heading>
      <Text variant="description">
        16+ Years Work Experience in steel sector as Frunish Incharge.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        {/* <Heading
          size="1xl"
          style={{
            fontVariantCaps: "small-caps",
          }}
        >
          Next.js
        </Heading> */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="CRM ISPAT PRIVATE LIMITED"
            description="Working as Shift Manager From 2021 to Till Now... at West Bengal, India"
            src="/experience/Billet.jpg"
            height={{ base: "100px", md: "200px", "2xl": "200px" }}
            ctaUrl="https://www.zaubacorp.com/company/CRM-ISPAT-PRIVATE-LIMITED/U27310WB2004PTC098223"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <Heading
          size="1xl"
          style={{
            fontVariantCaps: "small-caps",
          }}
        >
          React.js
        </Heading> */}
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="BRAHM ALLOYS LIMITED"
            description="Worked as Furnish Incharge From 2018 to 2021 at West Bengal, India"
            src="/experience/Billet.jpg"
            height={{ base: "100px", md: "200px", "2xl": "200px" }}
            ctaUrl="https://www.zaubacorp.com/company/BRAHM-ALLOYS-LIMITED/U27109WB2004PLC099270"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="JAI VENKATESH TOWERS PRIVATE LIMITED"
            description="Worked as Furnish Incharge From 2015 to 2018 at West Bengal, India"
            src="/experience/Billet.jpg"
            height={{ base: "100px", md: "200px", "2xl": "200px" }}
            ctaUrl="https://www.zaubacorp.com/company/JAI-VENKATESH-TOWERS-PRIVATE-LIMITED/U70102WB2009PTC133920"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="CP RE-ROLLERS LIMITED"
            description="Worked as Furnish Incharge From 2012 to 2015 at West Bengal, India"
            src="/experience/Billet.jpg"
            height={{ base: "100px", md: "200px", "2xl": "200px" }}
            ctaUrl="https://www.zaubacorp.com/company/C-P-RE-ROLLERS-LIMITED/U28112WB2001PLC093968"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
            title="MAHA GAURI STRIPS PRIVATE LIMITED"
            description="Worked as Furnish Incharge From 2008 to 2012 at West Bengal, India"
            src="/experience/Billet.jpg"
            height={{ base: "100px", md: "200px", "2xl": "200px" }}
            ctaUrl="https://www.zaubacorp.com/company/MAHA-GAURI-STRIPS-PRIVATE-LIMITED/U27310WB2013PTC197255"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={6}
            title="To-Do List"
            description="Built a customizable To-Do List application using React. Includes features like adding, editing, and deleting tasks, with state management through Redux Toolkit for efficient task handling and user-friendly interaction."
            src="/projects/To-Do-List.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://custom-to-do-list-create.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem> */}
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
