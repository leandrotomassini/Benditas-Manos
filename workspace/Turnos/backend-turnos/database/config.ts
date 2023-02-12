import mongoose from 'mongoose';
import { MONGODB_CNN } from '../global/enviroment';



export const dbConnection = async () => {

    try {

        mongoose.set("strictQuery", false);

        await mongoose.connect(MONGODB_CNN);

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}

