import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSON_QUERY = gql`
  query{
    lessons{
      id
      title
      teacher{
        name
      }      
    }
  }
`

interface Lesson{
  id:string;
  title:string;
}

function App() {

  const {data } = useQuery<{lessons: Lesson[]}>(GET_LESSON_QUERY)

  return (  
  <ul className="text-2xl font-bold text-violet-800">
    {data?.lessons.map(lesson =>{
      return <li key={lesson.id}>{lesson.title}</li>
    })}
  </ul>
  )
}

export default App
