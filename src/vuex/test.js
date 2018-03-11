import { expect } from 'chai'
import {currentComicMutation} from './mutations'
import {preComicAction} from './actions'
import {currentComicAction} from './actions'
import {afterComicAction} from './actions'
import {getCurrentComic} from './getters'

// test for getters
describe('getters', () => {
  it('Renders currentComic state', () => {

    // mock state
    const state = {
      title: 'title',
      alt: 'alt',
      img: 'img',
      year: 'year',
      month: 'month',
      day: 'day',
      num: 'num'
    }

    expect(getCurrentComic(state)).to.have.deep.members([
      {
        title: 'title',
        alt: 'alt',
        img: 'img',
        year: 'year',
        month: 'month',
        day: 'day',
        num: 'num'
      }
    ])

  })
})

// test for mutations
describe('mutations', () => {
  it('Transfer data to state', () => {

  // mock state
  const state = {
    title: '',
    alt: '',
    img: '',
    year: '',
    month: '',
    day: '',
    num: ''
  }
  const data = {
    'data':{
      'num':'num',
      'title':'title',
      'year':'year',
      'month':'month',
      'day':'day',
      'alt':'alt'
    }
  }

  // apply mutation
  currentComicMutation(state,data)

  // assert result
  expect(state.num).to.equal('num')
  expect(state.title).to.equal('title')
  expect(state.year).to.equal('year')
  expect(state.month).to.equal('month')
  expect(state.day).to.equal('day')
  expect(state.alt).to.equal('alt')
})
})

//test for actions
describe('actions', () => {

  it('calls store action preComicAction when click left arrow icon', () => {
    const payload = '1';
    expect(preComicAction('',payload)).to.be.a('undefined').but.not.an('error');
  })

  it('calls store action currentComicAction when click currentComic button', () => {
    expect(currentComicAction()).to.be.a('undefined').but.not.an('error');
  })

  it('calls store action afterComicAction when click right arrow icon', () => {
    const payload = '2';
    expect(afterComicAction('',payload)).to.be.a('undefined').but.not.an('error');
  })

})
