import { memo } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Detail from './Detail'


const AboutSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Detail onOpen={onOpen} />
    </>
  )
}
export default memo(AboutSection)
