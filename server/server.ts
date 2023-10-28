import {app} from './app'
require('dotenv').config();
import connectDB from './utils/database';

//Create server
app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`);

    connectDB();    
})

