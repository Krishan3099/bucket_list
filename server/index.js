import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'


const app = express();

//adds prefix of '/posts' to all postRoutes
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//https://www.mongodb.com/cloud/atlas
const CONNECTION_URL = '';
const PORT = process.env.PORT || 5000;


// useNewUrlParser and useUnifiedTopology are now handled automatically
// useFindAndModify is now handled as well
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

