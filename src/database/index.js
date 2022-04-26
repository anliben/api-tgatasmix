const { MongoClient, ServerApiVersion } = require('mongodb');


const client = new MongoClient('mongodb+srv://sportplayer:vrhKOerJ73tn8bV7@sportplayer.vcrhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



module.exports = client