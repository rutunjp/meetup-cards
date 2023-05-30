import Card from '@/components/card'
import contacts from 'data.json'
import Contacts from './contacts'
const data = contacts[0]
export default function Home() {
  return (
    <>
      <Card props={data} />
    </>
  )
}
