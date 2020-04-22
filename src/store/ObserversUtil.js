import { Subscription } from 'rxjs'

class ObserversUtil {
  unsubscribe(subscriptions) {
    return subscriptions.map(s => s.unsubscribe())
  }
}

export const observersUtil = new ObserversUtil()
