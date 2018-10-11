const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
.catch( e => {
    const msg = 'Iiih jovem, deu problema ao conectar ao MongoDB!'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
})