import Contact from '@/components/contact'
import contacts from 'data.json'
import { BiArrowBack } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import {
  Box,
  VStack,
  HStack,
  Button,
  Heading,
  Text,
  ListItem,
  List,
  Input,
  UnorderedList,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Contacts(params) {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventName, setEventName] = useState('')

  useEffect(() => {})

  const contactCards = contacts.map((contact) => (
    <ListItem key={contact.name}>
      <Contact props={contact} />
    </ListItem>
  ))
  return (
    <VStack m="auto" mt={8}>
      <Link href={'/'}>
        <HStack>
          <BiArrowBack />
          <Text> Back</Text>
        </HStack>
      </Link>
      <VStack gap={1} maxW={['90%', '30%']}>
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Name"
          size="md"
        />
        <Input
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Event"
          size="md"
        />
      </VStack>
      <List spacing={'2'}>{contactCards}</List>
    </VStack>
  )
}
