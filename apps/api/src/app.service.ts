import { Injectable } from '@nestjs/common'
import { add } from '@parkup/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!' + add(23, 4)
  }
}
