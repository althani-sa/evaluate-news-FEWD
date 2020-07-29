const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const express = require('express');

const AYLIENTextAPI = require('aylien_textapi');
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


const app = express()


const cors = require('cors')
app.use(cors())

//set directory
app.use(express.static('dist'))

//middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function (req, res) {
    res.send('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
// fix issue  code: 'ERR_HTTP_HEADERS_SENT'
app.post('/aylien', (request, response) => {
    textapi.sentiment({
        'mode': 'document',
        'url': request.body.url
    }, function(err, res){
            if (err === null) {
                response.send(res)

        }
        else {
             console.log('Error', err);
        }
    })

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})