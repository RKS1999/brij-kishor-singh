import {
  extendTheme,
  ThemeConfig,
  ThemeOverride,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

interface IThemeMode {
  Light: 'light'
  Dark: 'dark'
}

export const ThemeMode: IThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

// Mobile breakpoints map
export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
}

// Theme Config
const config: ThemeConfig = {
  initialColorMode: ThemeMode.Dark,
  useSystemColorMode: false,
}

// Custom Colors
const colors = {
  black: '#121212',
}

// Global Styles
const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#121212')(props),
    },
  }),
}

// Text Variants
const textVariants: ComponentStyleConfig['variants'] = {
  emphasis: (props) => ({
    color: mode('teal.500', 'cyan.200')(props),
  }),
  description: (props) => ({
    color: mode('gray.800', 'gray.400')(props),
  }),
  accent: (props) => ({
    color: mode('black.400', 'cyan.200')(props),
  }),
  accentAlternative: (props) => ({
    color: mode('#595959', '#A6A6A6')(props),
  }),
}

// Theme Override
const themeOverride: ThemeOverride = {
  config,
  fonts: {
    body: 'Poppins',
  },
  colors,
  styles,
  components: {
    Link: {
      baseStyle: (props) => ({
        color: mode('teal.500', 'cyan.200')(props),
      }),
      variants: {
        ...textVariants,
        description: (props) => ({
          color: mode('gray.800', 'gray.400')(props),
          _hover: {
            color: mode('teal.500', 'cyan.200')(props),
            textDecoration: 'none',
          },
        }),
      },
    },
    Text: {
      variants: textVariants,
    },
    Heading: {
      variants: textVariants,
    },
    Button: {
      variants: {
        outline: (props) => ({
          borderColor: mode('black.400', 'cyan.200')(props),
        }),
        outlineAlternative: (props) => ({
          borderWidth: '1px',
          borderRadius: 0,
          borderColor: mode('#595959', 'whiteAlpha.500')(props),
          _hover: {
            backgroundColor: mode(
              'rgba(49, 151, 149, 0.06)',
              'rgba(157, 236, 249, 0.06)'
            )(props),
          },
        }),
      },
    },
    Icon: {
      variants: {
        accent: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
        }),
      },
    },
    Divider: {
      variants: {
        solid: (props) => ({
          borderColor: mode('gray.800', 'gray.400')(props),
          marginLeft: 'auto',
          marginRight: 'auto',
        }),
      },
    },
  },
}

const theme = extendTheme(themeOverride)
export default theme
