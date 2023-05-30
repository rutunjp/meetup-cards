import Card from '@/components/card'
import contacts from 'data.json'
import { Box, VStack, Button } from '@chakra-ui/react'
import Contacts from './contacts'
import Image from 'next/image'
import Link from 'next/link'
const data = contacts[0]
export default function Home() {
  return (
    <VStack
      gap={6}
      maxW={['90%', '40%']}
      margin={'auto'}
      mt={8}
      placeItems={'center'}
      // backgroundColor={'gray.100'}
      py={4}
    >
      <Card props={data} />
      <Image width={180} height={180} src="/myqr.png" alt="qr" />
      <Link href="/contacts">
        <Button colorScheme={'blue'}>My Contacts</Button>
      </Link>
    </VStack>
  )
}
