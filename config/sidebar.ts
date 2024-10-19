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
    href: "https://www.facebook.com/profile.php?id=100022976746724",
    icon: FaFacebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/qr/W6NQO46Y2OPAM1",
    icon: FaWhatsapp,
  },
  {
    label: "Email",
    href: "mailto:brijkishors919@gmail.com",
    icon: FaEnvelope,
  },
]
