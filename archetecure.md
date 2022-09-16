```ts
const customer = client.databases.customer.query({
    filter: blblabla,
    sort: blabla
    includes: "name status notes content"
})

customer.results.map(c => {
    customer.content = "Block Content"
    customer.props.name = "title"
    customer.props.select = "select"
    customer.props.notes = "rich_text"
})
```