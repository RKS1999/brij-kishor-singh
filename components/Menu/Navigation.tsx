import { memo, useCallback } from "react";
import {
  Container,
  Button,
  Flex,
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion, useCycle } from "framer-motion";
import styles from "./styles.module.css";
import MobileMenu from "./toggle";
import { ThemeMode, mobileBreakpointsMap } from "config/theme";
import { easing, menuAnim } from "config/animations";
import useScrollDirection, { ScrollDirection } from "hooks/useScrollDirection";

const Navigation = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const MotionContainer = motion(Container);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const isMobile = useBreakpointValue(mobileBreakpointsMap);
  const menuButtonSize = useBreakpointValue({
    base: "xl",
    md: "sm",
  });

  const bg = useColorModeValue(
    "rgba(237, 242, 247, 0.95)",
    "rgba(18, 18, 18, 0.9)"
  );

  const borderColor = useColorModeValue("teal.500", "cyan.200");

  const isDark = colorMode === ThemeMode.Dark;
  const btnClassName = `${styles.blogBtn} ${!isDark && styles.dark}`;
  const Icon = isDark ? SunIcon : MoonIcon;

  const onMenuItemClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (isMobile) {
        toggleOpen();
      }
    },
    [isMobile, toggleOpen]
  );

  const scrollDirection = useScrollDirection();

  return (
    <>
      <Box
        display={{ base: "flex", xl: "none" }}
        alignItems="center"
        paddingTop={1}
        className={styles.menuBar}
        zIndex={100}
        top="3%"
      >
        <IconButton
          aria-label="Color Mode"
          variant="ghost"
          icon={<Icon />}
          boxShadow="none"
          onClick={toggleColorMode}
          padding={0}
          color={useColorModeValue("hsl(0, 0%, 7%)", "hsl(240, 100%, 94%)")}
        />
        <MobileMenu isDarkMode={isDark} toggle={toggleOpen} />
      </Box>

      <MotionContainer
        width="100%"
        backgroundColor={bg}
        maxWidth={{ base: "100%", sm: "100%", lg: "50%", xl: "60%" }}
        className={styles.menu}
        right={{
          lg: !isMobile && scrollDirection === ScrollDirection.Down ? "2%" : "3.5%",
        }}
        initial="hide"
        animate={(!isMobile || isOpen) && "show"}
        style={{
          width: !isMobile && scrollDirection === ScrollDirection.Down ? "12%" : "100%",
          top: !isOpen && isMobile ? "-100vh" : "0",
          opacity: !isOpen && isMobile ? "0" : "1",
          left: isOpen && isMobile ? "0" : "auto",
        }}
        borderColor={isOpen && isMobile ? borderColor : undefined}
        borderBottomWidth={isOpen && isMobile ? "1px" : undefined}
        paddingBottom={isOpen && isMobile ? "1px" : undefined}
        ease={easing}
        variants={menuAnim}
        marginTop={0}
        paddingTop={1}
        as="nav"
      >
        <Flex
          justifyContent={{ base: "center", lg: "flex-end" }}
          direction={{
            base: "column",
            lg: scrollDirection === ScrollDirection.Down ? "column" : "row",
          }}
          paddingX={{ base: "", sm: "10", lg: "0" }}
          paddingY={{
            base: "10",
            lg: scrollDirection === ScrollDirection.Down ? "10" : "3",
          }}
          height={{ base: "100vh", lg: "auto" }}
          paddingRight="0"
          paddingBottom={isMobile ? 10 : "0"}
          onClick={() => isMobile && toggleOpen()}
        >
          {["About", "Educations", "Projects", "Contact"].map((item) => (
            <Box
              key={item}
              width={{ base: "100%", lg: "auto" }}
              textAlign={{ base: "center", lg: "left" }}
              marginY={{ base: 2, lg: 0 }}
            >
              <Button
                fontWeight="light"
                variant="ghost"
                fontSize={menuButtonSize}
                letterSpacing={2}
                className={btnClassName}
                padding={2}
                marginX={2}
                as="a"
                href={`#${item.toLowerCase()}`}
                rel="noreferrer"
                onClick={onMenuItemClick}
              >
                {item}
              </Button>
            </Box>
          ))}
          {!isMobile && (
            <Box>
              <IconButton
                marginX={1}
                aria-label="Color Mode"
                variant="ghost"
                icon={<Icon />}
                boxShadow="none"
                onClick={toggleColorMode}
              />
            </Box>
          )}
        </Flex>
      </MotionContainer>
    </>
  );
};

export default memo(Navigation);
