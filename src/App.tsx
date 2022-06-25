import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event";


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
<div>
    <Event/>
</div>

  
  )
}

export default App
