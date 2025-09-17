const fsPromises = require('fs').promises;
const path = require('path')

const fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'start.txt'), 'utf8')
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'start.txt'), data)
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\Nice to meet you!')
        await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'),path.join(__dirname, 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    }
    catch(err){
        console.log(err)
    }
}

fileOps()



// fs.readFile(path.join(__dirname, 'start.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
//     console.log(data.toString())
// })

// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('Write complete')

//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nHello There!', (err) => {
//         if (err) throw err;
//         console.log('Append complete!')

//         fs.rename(path.join(__dirname, 'reply.txt'),path.join(__dirname, 'NewReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename complete!!')


//         })

//     })
// })
