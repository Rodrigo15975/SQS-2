import { Injectable } from '@nestjs/common'
import { CreateConsumerDto } from './dto/create-consumer.dto'
import { UpdateConsumerDto } from './dto/update-consumer.dto'
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs'
import { Message } from '@aws-sdk/client-sqs'

@Injectable()
export class ConsumerService {
  create(createConsumerDto: CreateConsumerDto) {
    console.log({
      createConsumerDto,
    })

    return 'This action adds a new consumer'
  }

  @SqsMessageHandler(/** name: */ 'mi-cola-prueba', /** batch: */ false)
  public handleMessage(message: Message) {
    console.log(message)
    return
  }

  @SqsConsumerEventHandler(
    /** name: */ 'mi-cola-prueba',
    /** eventName: */ 'processing_error',
  )
  public onProcessingError(error: Error, message: Message) {
    console.log({
      error,
      message,
    })

    // report errors here
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
