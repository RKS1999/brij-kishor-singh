import { memo, useEffect, useState } from "react"
import {
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  Box,
  List,
  SimpleGrid,
  ListItem,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  Select,
  useToast,
} from "@chakra-ui/react"
import { IoLogoWhatsapp } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import { FaMapMarkedAlt } from "react-icons/fa"
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios"
import emailjs from "emailjs-com"
import { RiCopyleftLine, RiHeartPulseFill } from "react-icons/ri"

// Define a type for form values
interface FormValues {
  name: string
  email: string
  countryCode: string
  number: string
  description: string
}

interface Country {
  name: string
  code: string
}

const GetInTouch = () => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>()

  // Initialize Chakra UI's toast for notifications
  const toast = useToast()

  // State for storing the list of countries
  const [countries, setCountries] = useState<Country[]>([])

  // Fetch countries on component mount
  useEffect(() => {
    emailjs.init("p0QkVW82Y6_QnMEbk")

    const fetchCountries = async () => {
      try {
        const countriesBaseURL = await axios.get(
          "https://restcountries.com/v3.1/all"
        )
        const countryOptions = countriesBaseURL.data.map((country: any) => ({
          name: country.name.common,
          code: `${country.idd.root}${
            country.idd.suffixes ? country.idd.suffixes[0] : ""
          }`,
        }))
        setCountries(countryOptions)
      } catch (error) {
        console.error("Error fetching countries:", error)
      }
    }
    fetchCountries()
  }, [])

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const formData = {
      from_name: values.name,
      from_email: values.email,
      from_countryCode: values.countryCode,
      from_number: values.number,
      from_message: values.description,
    }

    // Send email using EmailJS
    emailjs.send("service_klllin4", "template_mgrybyp", formData).then(
      function (response) {
        console.log("Email sent successfully:", response)
        toast({
          title: "Message Sent.",
          description: "Your message has been successfully sent.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
        reset()
      },
      function (error) {
        console.log("Email failed to send:", error)
      }
    )
  }

  return (
    <Stack
      width={{ base: "99%", lg: "60%", xl: "75%" }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading size="2xl" style={{ fontVariantCaps: "small-caps" }}>
        Contact Now!
      </Heading>

      <Box>
        <Text variant="description">
          As an introverted individual, I appreciate meaningful interactions and
          enjoy engaging in discussions related to coding, work, movies, or any
          interests in the tech community. I welcome messages on any of my
          social media platforms or through email for collaboration, networking,
          or just to connect.
        </Text>
        <Divider marginTop={4} marginBottom={4} />

        {/* Contact Details Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} paddingBottom={6}>
          <List spacing={3}>
            <Link href="tel:+918450685156" target="_blank" rel="noreferrer">
              <ListItem fontSize="small" display="flex" alignItems="center">
                <IoLogoWhatsapp
                  style={{ fontSize: "1.5em", marginRight: "8px" }}
                />
                +91 82506 85156
              </ListItem>
            </Link>
            <Link href="tel:+917407501421" target="_blank" rel="noreferrer">
              <ListItem fontSize="small" display="flex" alignItems="center">
                <IoLogoWhatsapp
                  style={{ fontSize: "1.5em", marginRight: "8px" }}
                />
                +91 74075 01421
              </ListItem>
            </Link>
          </List>
          <List spacing={3}>
            <Link
              href="mailto:brijkishors919@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <ListItem fontSize="small" display="flex" alignItems="center">
                <MdEmail style={{ fontSize: "1.5em", marginRight: "8px" }} />
                brijkishors919@gmail.com
              </ListItem>
            </Link>
            <Link
              href="https://maps.app.goo.gl/xfN3QhAw3LSaedBS9"
              target="_blank"
              rel="noreferrer"
            >
              <ListItem fontSize="small" display="flex" alignItems="center">
                <FaMapMarkedAlt
                  style={{ fontSize: "1.5em", marginRight: "8px" }}
                />
                Durgapur, West Bengal, India - 713210
              </ListItem>
            </Link>
          </List>
        </SimpleGrid>
        <Divider marginBottom={4} />

        {/* Contact Form */}
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", {
                    required: "Name is required",
                    maxLength: {
                      value: 50,
                      message: "Name cannot exceed 50 characters",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              <FormControl isInvalid={!!errors.countryCode}>
                <FormLabel>Country Code</FormLabel>
                <Select
                  placeholder="Select country"
                  {...register("countryCode", {
                    required: "Country code is required",
                  })}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.countryCode && errors.countryCode.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.number}>
                <FormLabel>Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Your Mobile Number"
                  {...register("number", {
                    required: "Number is required",
                    pattern: {
                      value: /^[0-9]{7,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.number && errors.number.message}
                </FormErrorMessage>
              </FormControl>
            </SimpleGrid>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Describe your message..."
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
              Submit
            </Button>
          </Stack>
        </Box>

        <Divider marginBottom={4} />

        {/* Google Maps Embed */}
        <Box
          as="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226188.8871355031!2d87.13536255657172!3d23.531016882109157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7710b47a89171%3A0x429e1bdb57e009dd!2sDurgapur%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1727455366375!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          sx={{
            borderRadius: "10px",
            marginBottom: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>
      <Box paddingBottom={4}>
        <Text fontSize="small">
          <Icon as={RiCopyleftLine} />
          2024 Developed by
          <Icon as={RiHeartPulseFill} color="red" />
          <Link href="https://roshan-kumar-singh.netlify.app">
            Roshan Singh Kumar.
          </Link>
        </Text>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
