const requiredFormat = [
    {
        name: 'a',
        age: 29
    },{
        name: 'b',
        age: 30
    }
]

const render = (data)=>{
    // use requiredFormat
    console.log(data)
}

const newFormat = {
    'c': 10,
    'd': 23
}

const formatAdapter = (origin)=>{
    return Object.entries(origin).map(([name, age])=>{
       return  {
            name,
            age
        }
    })
}

render(formatAdapter(newFormat))