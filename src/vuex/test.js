import { expect } from 'chai'
import {currentComicMutation} from './mutations'

describe('currentComicMutation', () => {
  it('Renders currentComic state number', () => {
    // mock state
    const state = { num: '' }
    const data = {'data':{'num':'1965'}}

    // apply mutation
    currentComicMutation(state,data)

    // assert result
    expect(state.num).to.equal('1965')
  })
})
