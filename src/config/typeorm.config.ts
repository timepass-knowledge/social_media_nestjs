import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'social-media',
  entities: [User],
  synchronize: true,
  autoLoadEntities: true,
  logging: 'all',
};

export default typeormConfig;
