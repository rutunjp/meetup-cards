import contacts from 'data.json'
export default function OnScan({ person }) {
  console.log(contacts[0])
  return <h1>{contacts[0].name}</h1>
}
