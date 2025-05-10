import { Module } from '@nestjs/common'
import { ProducerModule } from './producer/producer.module'
import { ConsumerModule } from './consumer/consumer.module'
import { SqsModule } from '@ssut/nestjs-sqs'
@Module({
  imports: [
    ProducerModule,
    ConsumerModule,
    SqsModule.register({
      consumers: [
        {
          name: 'mi-cola-prueba',
          queueUrl:
            'https://sqs.us-east-1.amazonaws.com/222634373780/mi-cola-prueba',
          region: 'us-east-1',
        },
      ],
      producers: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
