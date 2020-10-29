import { Rectangle } from '../basic/Rectangle'

export class Square extends Rectangle {
  constructor (size: number) {
    super(size, size)
    this.log('Square constructor called!')
  }

  'on:width' = 'update'

  'on:height' = 'update'

  randomize () {
    this.width = this.height = Math.random() * 20
  }

  update (value: number) {
    this.width = value
    this.height = value
  }
}
