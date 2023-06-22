import { DataSource } from "typeorm";
import * as config from 'config';

const dbConfig = config.get('db');

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: dbConfig.type,
                host: process.env.RDS_HOSTNAME || dbConfig.host,
                port: process.env.RDS_PORT || dbConfig.port,
                username: process.env.RDS_USERNAME || dbConfig.username,
                password: process.env.RDS_PASSWORD || dbConfig.password,
                database: process.env.RDS_DB_NAME || dbConfig.database,
                // Entities to be loaded for this connection.
                entities: [__dirname + '/../**/*.entity.{js,ts}'],
                synchronize: false /* dbConfig.synchronize */
            });
            return dataSource.initialize();
        },
    }
];