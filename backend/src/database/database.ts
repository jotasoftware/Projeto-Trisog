import { DataSource } from 'typeorm';

// Configuração da conexão com o SQLite
const dataSource = new DataSource({
    type: 'sqlite',
    database: './src/database/databasesqlite.sqlite',
    entities: ['./src/entities/*.ts'],
    synchronize: true,
    logging: false
});


export default dataSource;