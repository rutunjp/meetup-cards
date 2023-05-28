import { Box, Heading, Text, HStack, Button, VStack } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'

export default function Card({ props }) {
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
          Jatin Patel
        </Heading>
        <Text mt={'28'} opacity={0.7}>
          CEO, Dhum Dhadaka Band
        </Text>
      </VStack>
      <Button colorScheme="blue">I met you!</Button>
      <HStack>
        <Button>
          <FaLinkedinIn />
        </Button>
        <Button>
          <FaTwitter />
        </Button>
        <Button>
          <CiGlobe />
        </Button>
      </HStack>
    </VStack>
  )
}
