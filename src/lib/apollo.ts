import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rrza401jv501z63zbp1f64/master',
    cache: new InMemoryCache()
})