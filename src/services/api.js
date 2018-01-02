import { HTTP } from '../components/http/index'
import { EventBus } from '../event_bus/eventBus'

export default class Api {
  getAllCountriesInfos () {
    const requestUrl = 'all'

    EventBus.$emit('countriesInfosRequested')
    return HTTP.get(requestUrl)
  }
}