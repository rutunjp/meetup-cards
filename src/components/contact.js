import { Box, VStack, HStack, Button, Heading, Text } from '@chakra-ui/react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'
import Link from 'next/link'
export default function Contact({ props }) {
  return (
    <Box
      maxW={['90%']}
      borderRadius={4}
      m="auto"
      backgroundColor={'gray.300'}
      p={1}
      px={2}
    >
      <HStack gap={2} align={'center'} justifyContent={'space-between'}>
        <VStack align={'flex-start'}>
          <Heading as={'h3'} fontSize={'2xl'}>
            {props.name}
          </Heading>
          <Text fontSize={'sm'} opacity={0.9}>
            {props.designation}
          </Text>
          <Text fontSize={'sm'} opacity={0.7}>
            {props.event}
          </Text>
        </VStack>
        <HStack>
          <Link href={props.li}>
            <Button>
              <FaLinkedinIn />
            </Button>
          </Link>
          <Link href={props.twt}>
            <Button>
              <FaTwitter />
            </Button>
          </Link>
          <Link href={props.www}>
            <Button>
              <CiGlobe />
            </Button>
          </Link>
        </HStack>
      </HStack>
    </Box>
  )
}
