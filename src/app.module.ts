import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './tag/ormconfig';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, GraphQLModule.forRoot(
    {
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql']
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
