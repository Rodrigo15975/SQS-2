import { Injectable } from '@nestjs/common'
import { CreateConsumerDto } from './dto/create-consumer.dto'
import { UpdateConsumerDto } from './dto/update-consumer.dto'
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs'
@Injectable()
export class ConsumerService {
  create(createConsumerDto: CreateConsumerDto) {
    console.log({
      createConsumerDto,
    })

    return 'This action adds a new consumer'
  }

  @SqsMessageHandler('mi-cola-prueba', false) // false = no batch
  async handleMessage(message: AWS.SQS.Message) {
    const body = JSON.parse(message.Body!)
    console.log('📥 Mensaje recibido desde SQS:', body)

    // Aquí procesas tu lógica
  }

  @SqsConsumerEventHandler('mi-cola-prueba', 'error')
  onError(error: Error) {
    console.error('⛔ Error al procesar mensaje SQS:', error)
  }

  findAll() {
    return `This action returns all consumer`
  }

  findOne(id: number) {
    return `This action returns a #${id} consumer`
  }

  update(id: number, updateConsumerDto: UpdateConsumerDto) {
    console.log(updateConsumerDto)
    return `This action updates a #${id} consumer`
  }

  remove(id: number) {
    return `This action removes a #${id} consumer`
  }
}
