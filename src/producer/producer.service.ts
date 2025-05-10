import { Injectable } from '@nestjs/common'
import { CreateProducerDto } from './dto/create-producer.dto'
import { UpdateProducerDto } from './dto/update-producer.dto'
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'

@Injectable()
export class ProducerService {
  private readonly sqs = new SQSClient({ region: 'us-east-1' })
  private readonly queueUrl =
    'https://sqs.us-east-1.amazonaws.com/222634373780/mi-cola-prueba'
  create(createProducerDto: CreateProducerDto) {
    return 'This action adds a new producer'
  }

  async findAll() {
    const comando = new SendMessageCommand({
      QueueUrl: this.queueUrl,
      MessageBody: JSON.stringify({
        message: 'Data enviado es RODRIGO',
      }),
    })

    await this.sqs.send(comando)
    console.log('✅ Mensaje enviado a SQS')
    return {
      message: 'ok',
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} producer`
  }

  update(id: number, updateProducerDto: UpdateProducerDto) {
    return `This action updates a #${id} producer`
  }

  remove(id: number) {
    return `This action removes a #${id} producer`
  }
}
