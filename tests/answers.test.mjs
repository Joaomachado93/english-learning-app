import test from 'node:test'
import assert from 'node:assert/strict'
import {
  normalizeAnswer,
  sameAnswer,
  sameWordOrder,
  normalizeSpeech,
  splitBlankAnswers,
} from '../src/utils/answers.js'

test('typed answers ignore capitals, extra spaces and trailing punctuation', () => {
  assert.equal(normalizeAnswer('  Nice   to meet you! '), 'nice to meet you')
  assert.ok(sameAnswer('are', 'Are'))
  assert.ok(sameAnswer('I am fine.', 'I am fine'))
})

test('typed answers accept the curly apostrophes phone keyboards insert', () => {
  assert.ok(sameAnswer('aren’t', "aren't"))
  assert.ok(sameAnswer('I’m tired', "I'm tired"))
  assert.ok(sameAnswer('“hello”', '"hello"'))
})

test('typed answers still reject different words', () => {
  assert.ok(!sameAnswer('is', 'are'))
  assert.ok(!sameAnswer('walk', 'walks'))
  assert.ok(!sameAnswer('I am fine today', 'I am fine'))
  assert.ok(!sameAnswer('', 'meet'))
})

test('word order ignores capitals and punctuation tiles', () => {
  assert.ok(sameWordOrder('What are you doing ?', 'What are you doing?'))
  assert.ok(sameWordOrder('we used to go to the beach every summer', 'We used to go to the beach every summer.'))
  assert.ok(sameWordOrder('Two return tickets to Manchester , please', 'Two return tickets to Manchester, please'))
  assert.ok(sameWordOrder('i bought a new phone the phone is great', 'I bought a new phone. The phone is great.'))
})

test('word order still rejects a wrong order or a missing word', () => {
  assert.ok(!sameWordOrder('are What you doing ?', 'What are you doing?'))
  assert.ok(!sameWordOrder('What are you ?', 'What are you doing?'))
  assert.ok(!sameWordOrder("she doesn't like it", 'she does like it'))
})

test('spoken answers drop hyphens and punctuation', () => {
  assert.equal(normalizeSpeech('A well-known, old song!'), 'a wellknown old song')
  assert.equal(normalizeSpeech('I’m here.'), "i'm here")
})

test('answers are split per blank only when they line up with the blanks', () => {
  assert.deepEqual(splitBlankAnswers("Are, aren't", 2), ['Are', "aren't"])
  assert.deepEqual(splitBlankAnswers('walks, is driving', 2), ['walks', 'is driving'])
  // one blank: the comma is part of the answer
  assert.deepEqual(splitBlankAnswers('Yes, please', 1), ['Yes, please'])
  // one word per blank: "Please ___ it ___." -> turn / down
  assert.deepEqual(splitBlankAnswers('turn down', 2), ['turn', 'down'])
  assert.deepEqual(splitBlankAnswers('be signed', 2), ['be', 'signed'])
  // two "___" in the sentence but a single answer: treated as one blank
  assert.deepEqual(splitBlankAnswers('sensitive', 2), ['sensitive'])
  assert.deepEqual(splitBlankAnswers('a, b, c', 2), ['a, b, c'])
  assert.deepEqual(splitBlankAnswers('one two three', 2), ['one two three'])
})
