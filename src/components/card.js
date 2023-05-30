import { Box, Heading, Text, HStack, Button, VStack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'
import { useRouter } from 'next/router'

export default function Card({ props }) {
  const router = useRouter()
  return (
    <VStack
      backgroundColor={'#F5F5F5'}
      maxW={['75%', 'sm']}
      padding={8}
      margin={'auto'}
      mt={16}
      borderRadius={6}
    >
      <VStack align={'flex-start'}>
        <Heading as="h2" fontSize={'2xl'} fontWeight={'bold'}>
          {props.name}
        </Heading>
        <Text mt={'28'} opacity={0.7}>
          {props.designation}, {props.company}
        </Text>
      </VStack>
      <Button colorScheme="blue">I met you!</Button>
      <HStack>
        <Button onClick={() => router.push(`${props.li}`)}>
          <FaLinkedinIn />
        </Button>
        <Button onClick={() => router.push(`${props.twt}`)}>
          <FaTwitter />
        </Button>
        <Button onClick={() => router.push(`${props.www}`)}>
          <CiGlobe />
        </Button>
      </HStack>
    </VStack>
  )
}
