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
        Some of my works.
      </Heading>
      <Text variant="description">
        During my extensive training period, I successfully completed various
        projects, including company assignments and case studies, showcasing my
        skills and expertise.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <Heading
          size="1xl"
          style={{
            fontVariantCaps: "small-caps",
          }}
        >
          Next.js
        </Heading>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={0}
            title="Online Shopping"
            description="Developed an Online Shopping app using Next.js, TanStack
            Query, and Redux Toolkit for state management, with React
            Hook Form for form handling and validation, featuring a
            responsive UI with MUI and styled-components."
            src="/projects/Online-Shopping.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://next-online-shopping.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <Heading
          size="1xl"
          style={{
            fontVariantCaps: "small-caps",
          }}
        >
          React.js
        </Heading>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="WTS"
            src="/projects/WTS.png"
            description="Built a product management system with React and TanStack
            Query for server-state management, using React Router for
            routing and Redux Toolkit for global state handling"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl=" https://wts-products-management.netlify.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="YouShop"
            description="Developed a fully responsive e-commerce web application using
            React and Redux Toolkit for state management, React Hook
            Form for form validation, and Bootstrap for a modern UI.
            Integrated Redux Persist for state persistence and handled
            asynchronous operations with Redux Toolkit."
            src="/projects/You-Shop.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://ecom-youshop.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Crypto Coin"
            description="Created an interactive cryptocurrency dashboard using React,
            Redux Toolkit, and TanStack Query for optimized data fetching.
            Implemented data visualization with ApexCharts and user
            authentication features."
            src="/projects/Crypto-Coin.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://real-crypto-coins.netlify.app/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Weather Report"
            description="Developed a weather web application using React and TanStack Query, enabling users to search cities and view detailed weather forecasts, including temperature, humidity, pressure, and a 30-day forecast."
            src="/projects/Weather-Report.png"
            height={{ base: "130px", md: "225px", "2xl": "300px" }}
            ctaUrl="https://real-weather-report.netlify.app/"
            isMobile={isMobile}
          />
        </MotionGridItem>

        {/* <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={5}
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
