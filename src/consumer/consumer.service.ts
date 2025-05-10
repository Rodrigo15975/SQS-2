import { Injectable } from '@nestjs/common'
import { CreateConsumerDto } from './dto/create-consumer.dto'
import { UpdateConsumerDto } from './dto/update-consumer.dto'

@Injectable()
export class ConsumerService {
  create(createConsumerDto: CreateConsumerDto) {
    return 'This action adds a new consumer'
  }

  async handleSQSEvent(event: any) {
    console.log({
      event,
    })

    for (const record of event.Records) {
      const body = JSON.parse(record.body)
      console.log('📥 Mensaje recibido de SQS:', body)
      // Aquí haces lo que necesites con el mensaje
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Mensajes procesados' }),
    }
  }

  findAll() {
    return `This action returns all consumer`
  }

  findOne(id: number) {
    return `This action returns a #${id} consumer`
  }

  update(id: number, updateConsumerDto: UpdateConsumerDto) {
    return `This action updates a #${id} consumer`
  }

  remove(id: number) {
    return `This action removes a #${id} consumer`
  }
}
