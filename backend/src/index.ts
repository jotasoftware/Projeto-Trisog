import { App } from './app';
import dataSource from './database/database'

new App().server.listen(3000)

const syncDatabase = async () => {
    try {
        await dataSource.initialize();
        console.log('Data Source has been initialized!');
    } catch (error) {
        console.error('Error during Data Source initialization:', error);
    }
}
syncDatabase();
