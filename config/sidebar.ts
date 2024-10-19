import { IconType } from "react-icons"
import { FaWhatsapp, FaFacebook, FaEnvelope } from "react-icons/fa"

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Roshan-Kumar-Singh/100017131605920/",
    icon: FaFacebook,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/qr/IGKGILKADE5JH1?autoload=1&app_absent=0",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:brijkishors919@gmail.com",
    icon: FaEnvelope,
  },
]
