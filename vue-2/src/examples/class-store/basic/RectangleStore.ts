import VueStore from 'vue-class-store'
import { Rectangle } from './Rectangle'

@VueStore
export class RectangleStore extends Rectangle {
  // there's no need to provide a constructor here, this is just to log some output
  constructor (width = 10, height = 10) {
    super(width, height)
    this.log('RectangleStore constructor called!')
  }
}
