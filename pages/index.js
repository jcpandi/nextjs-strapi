import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'


export default function HomePage({events}) {
  console.log(events)

  return (
    <Layout keywords='DJ, Events'>
      <h1>Welcome to our Upcoming Events</h1>
      {events.length === 0 && <h3>No events to Show</h3>}

      {events.map((evt) => (
        <h3 key={evt.id}>{evt.name}</h3>
      ))}
    
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

   return {
    props: {events},
    revalidate: 1
  }
}
