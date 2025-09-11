const fs = require('fs')
const path = require('path')

// fs.readFile('./start.txt', 'utf8', (err, data) =>{
//     if (err) throw err;
//     console.log(data)
//     console.log(data.toString())
// })

fs.readFile(path.join(__dirname, 'start.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
    console.log(data.toString())
})

fs.writeFile(path.join(__dirname, 'reply.txt'), 'Hello World!', (err) => {
    if (err) throw err;
    console.log('Write complete')

    fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nHello There!', (err) => {
        if (err) throw err;
        console.log('Append complete!')

        fs.rename(path.join(__dirname, 'reply.txt'),path.join(__dirname, 'NewReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete!')


        })

    })
})
