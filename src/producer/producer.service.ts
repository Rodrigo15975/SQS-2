import { Injectable } from '@nestjs/common'
import { SqsService } from '@ssut/nestjs-sqs'
import { randomUUID } from 'node:crypto'
@Injectable()
export class ProducerService {
  // private readonly sqs = new SQSClient({ region: 'us-east-1' })
  // private readonly queueUrl =
  //   'https://sqs.us-east-1.amazonaws.com/222634373780/mi-cola-prueba'

  constructor(private readonly sqsService: SqsService) {}

  async findAll() {
    const users = [
      { id: 1, name: 'Juan' },
      { id: 2, name: 'Maria' },
      { id: 3, name: 'Carlos' },
    ]

    await this.sqsService.send('mi-cola-prueba', {
      body: { message: 'Usuarios enviados', users },
      id: randomUUID(),
    })
    console.log('Enviando a SQS')

    return {
      message: 'ok',
    }
  }
}
