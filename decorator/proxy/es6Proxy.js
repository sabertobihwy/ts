const obj = {
    name: 'a'
}

const handler = {
    set (obj, propKey, value){
        console.log('this is SET method')
    },
    get (obj, propKey){
        console.log('this is GET method')
    }
}

const p = new Proxy(obj, handler)
//p.name
p.name = 'c'
