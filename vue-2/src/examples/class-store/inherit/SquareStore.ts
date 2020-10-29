import VueStore from 'vue-class-store'
import { Square } from './Square'

@VueStore
export class SquareStore extends Square {
  // there's no need to provide a constructor here, this is just to log some output
  constructor (size: number) {
    super(size)
    this.log('SquareStore constructor called!')
  }
}
