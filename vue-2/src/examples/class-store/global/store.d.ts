import { ItemsStore } from '@/examples/class-store/global/ItemsStore'

declare module 'vue/types/vue' {
  interface Vue {
    $items: ItemsStore
  }
}
