import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";


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

 // const {data } = useQuery<{lessons: Lesson[]}>(GET_LESSON_QUERY)

  return (  
  <ApolloProvider client = {client}>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </ApolloProvider>  
  )
}

export default App
