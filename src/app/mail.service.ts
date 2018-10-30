import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    `You've gotten some messages`,
    `John says he wants to talk`,
    `He says that he got a dog`,
    `He's going to name his dog after you`
  ]

  constructor() { }

}
