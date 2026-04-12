// Additional lessons with new exercise types (translation, true-false, listening)
// These get merged into the main course data

export const extraModules = {
  // === A1 Extra ===
  'a1': [
    {
      id: 'a1-m5',
      title: 'Translation Practice',
      description: 'Translate between Portuguese and English',
      icon: '🇵🇹',
      lessons: [
        {
          id: 'a1-m5-l1',
          title: 'Basic Phrases PT→EN',
          type: 'translation',
          exercises: [
            {
              type: 'translation',
              question: 'Eu tenho um gato.',
              answer: ['I have a cat'],
              from: 'PT', to: 'EN',
              hint: 'Subject + have + article + animal',
              explanation: '"Eu tenho" = "I have". "Um gato" = "a cat".'
            },
            {
              type: 'translation',
              question: 'Ela é minha irmã.',
              answer: ['She is my sister'],
              from: 'PT', to: 'EN',
              hint: 'She + is + possessive + family',
              explanation: '"Ela é" = "She is". "Minha irmã" = "my sister".'
            },
            {
              type: 'translation',
              question: 'Nós estamos em casa.',
              answer: ['We are at home', 'We are home'],
              from: 'PT', to: 'EN',
              hint: 'We + are + at/in + place',
              explanation: '"Estamos em casa" = "We are at home". Both "at home" and just "home" work.'
            },
            {
              type: 'translation',
              question: 'Eu gosto de café.',
              answer: ['I like coffee'],
              from: 'PT', to: 'EN',
              hint: 'I + like + drink (no preposition!)',
              explanation: 'In English: "I like coffee" (no preposition needed, unlike PT "gosto DE").'
            },
            {
              type: 'translation',
              question: 'Ele trabalha num hospital.',
              answer: ['He works in a hospital', 'He works at a hospital'],
              from: 'PT', to: 'EN',
              hint: 'He + works + preposition + article + place',
              explanation: '"Trabalha num" = "works in a". Note: "he works" (not "work").'
            },
            {
              type: 'translation',
              question: 'Onde é a estação de comboio?',
              answer: ['Where is the train station', 'Where is the railway station'],
              from: 'PT', to: 'EN',
              hint: 'Where + is + the + transport + station',
              explanation: '"Estação de comboio" = "train station" (UK also: "railway station").'
            },
            {
              type: 'translation',
              question: 'Eu não falo francês.',
              answer: ["I don't speak French", "I do not speak French"],
              from: 'PT', to: 'EN',
              hint: 'I + don\'t + speak + language',
              explanation: 'Negatives use "don\'t" + base verb: "I don\'t speak French".'
            },
            {
              type: 'translation',
              question: 'Eles têm dois filhos.',
              answer: ['They have two children', 'They have two kids', 'They have 2 children'],
              from: 'PT', to: 'EN',
              hint: 'They + have + number + plural noun',
              explanation: '"Filhos" = "children" (or "kids" informally). "Sons" = only male children.'
            }
          ]
        },
        {
          id: 'a1-m5-l2',
          title: 'Common Sentences EN→PT',
          type: 'translation',
          exercises: [
            {
              type: 'translation',
              question: 'I am 25 years old.',
              answer: ['Eu tenho 25 anos', 'Tenho 25 anos'],
              from: 'EN', to: 'PT',
              hint: 'Em português usamos "ter" não "ser"',
              explanation: 'English uses "I am" for age, Portuguese uses "Eu tenho".'
            },
            {
              type: 'translation',
              question: 'What is your name?',
              answer: ['Como te chamas', 'Qual é o teu nome', 'Como é que te chamas'],
              from: 'EN', to: 'PT',
              explanation: '"What is your name?" pode ser "Como te chamas?" ou "Qual é o teu nome?"'
            },
            {
              type: 'translation',
              question: 'I am hungry.',
              answer: ['Eu tenho fome', 'Tenho fome', 'Estou com fome'],
              from: 'EN', to: 'PT',
              hint: 'Em português: ter fome / estar com fome',
              explanation: 'English: "I am hungry" (to be). Portuguese: "Eu tenho fome" (to have).'
            },
            {
              type: 'translation',
              question: 'She likes to read books.',
              answer: ['Ela gosta de ler livros'],
              from: 'EN', to: 'PT',
              hint: 'Ela + gosta de + verbo + nome',
              explanation: '"Likes to read" = "gosta de ler". Note the preposition "de" in Portuguese.'
            },
            {
              type: 'translation',
              question: 'We live in Lisbon.',
              answer: ['Nós vivemos em Lisboa', 'Vivemos em Lisboa', 'Nós moramos em Lisboa'],
              from: 'EN', to: 'PT',
              explanation: '"Live" = "viver" or "morar" in Portuguese.'
            },
            {
              type: 'translation',
              question: 'The weather is nice today.',
              answer: ['O tempo está bom hoje', 'Está bom tempo hoje', 'O tempo hoje está bom'],
              from: 'EN', to: 'PT',
              hint: 'O tempo + está + adjetivo + hoje',
              explanation: '"The weather" = "o tempo". "Nice" = "bom/bonito".'
            },
            {
              type: 'translation',
              question: 'Can I have the bill, please?',
              answer: ['Pode trazer a conta, por favor', 'A conta, por favor', 'Pode trazer a conta por favor'],
              from: 'EN', to: 'PT',
              explanation: '"The bill" (restaurant) = "a conta". "Can I have" = "Pode trazer".'
            },
            {
              type: 'translation',
              question: 'I don\'t understand.',
              answer: ['Eu não entendo', 'Não entendo', 'Eu não percebo', 'Não percebo'],
              from: 'EN', to: 'PT',
              explanation: '"Understand" = "entender" or "perceber" in Portuguese.'
            }
          ]
        }
      ]
    },
    {
      id: 'a1-m6',
      title: 'Listening Practice',
      description: 'Train your ear with spoken English',
      icon: '👂',
      lessons: [
        {
          id: 'a1-m6-l1',
          title: 'Simple Sentences',
          type: 'listening',
          exercises: [
            {
              type: 'listening',
              sentence: 'I would like a cup of tea.',
              question: 'Listen and type the sentence',
              hint: 'Starts with "I would..."',
              explanation: 'Common polite request pattern: "I would like + noun".'
            },
            {
              type: 'listening',
              sentence: 'Where is the nearest bus stop?',
              question: 'Listen and type the question',
              hint: 'Asking about a location for transport',
              explanation: '"Nearest" = most close. "Bus stop" = where you wait for the bus.'
            },
            {
              type: 'listening',
              sentence: 'My name is João and I am from Portugal.',
              question: 'Listen and type what you hear',
              hint: 'An introduction with name and country',
              explanation: 'Standard introduction pattern: name + origin.'
            },
            {
              type: 'listening',
              sentence: 'She has two brothers and one sister.',
              question: 'Listen and type the sentence',
              hint: 'About family members',
              explanation: '"Has" with she/he. Numbers + plural family members.'
            },
            {
              type: 'listening',
              sentence: 'The restaurant opens at seven o\'clock.',
              question: 'Listen and type what you hear',
              hint: 'About a place and a time',
              explanation: '"Opens at seven o\'clock" - time with "at" for specific hours.'
            },
            {
              type: 'listening',
              sentence: 'I usually wake up early in the morning.',
              question: 'Listen and type the sentence',
              hint: 'About a daily habit',
              explanation: '"Usually" = frequency adverb. "Wake up early" = daily routine.'
            },
            {
              type: 'listening',
              sentence: 'Can you speak more slowly, please?',
              question: 'Listen and type the question',
              hint: 'A polite request about speed',
              explanation: 'Useful phrase when someone speaks too fast.'
            },
            {
              type: 'listening',
              sentence: 'I don\'t eat meat, I am vegetarian.',
              question: 'Listen and type what you hear',
              hint: 'About food preferences',
              explanation: 'Negative + explanation pattern. "Don\'t eat" + reason.'
            }
          ]
        }
      ]
    },
    {
      id: 'a1-m7',
      title: 'True or False',
      description: 'Test your understanding of English rules',
      icon: '✅',
      lessons: [
        {
          id: 'a1-m7-l1',
          title: 'Grammar Facts',
          type: 'true-false',
          exercises: [
            {
              type: 'true-false',
              statement: '"He don\'t like pizza" is correct English.',
              correct: false,
              explanation: 'Incorrect. It should be "He doesn\'t like pizza". With he/she/it, use "doesn\'t".'
            },
            {
              type: 'true-false',
              statement: 'In English, adjectives come BEFORE the noun: "a red car" (not "a car red").',
              correct: true,
              explanation: 'Correct! English puts adjectives before nouns, unlike Portuguese or French.'
            },
            {
              type: 'true-false',
              statement: '"I have 30 years" is the correct way to say your age in English.',
              correct: false,
              explanation: 'False! In English we say "I am 30 years old" (verb "to be", not "to have").'
            },
            {
              type: 'true-false',
              statement: '"Information" is an uncountable noun - you cannot say "informations".',
              correct: true,
              explanation: 'Correct! "Information" has no plural. Say "some information" or "a piece of information".'
            },
            {
              type: 'true-false',
              statement: '"Does she likes coffee?" is grammatically correct.',
              correct: false,
              explanation: 'False! After "does", use base form: "Does she like coffee?" (not "likes").'
            },
            {
              type: 'true-false',
              statement: 'The plural of "child" is "childs".',
              correct: false,
              explanation: 'False! "Child" → "children" (irregular plural).'
            },
            {
              type: 'true-false',
              statement: '"The" is the most common word in the English language.',
              correct: true,
              explanation: 'True! "The" is the most frequently used word in English.'
            },
            {
              type: 'true-false',
              statement: 'In English, you say "I am agree" to express agreement.',
              correct: false,
              explanation: 'False! Just say "I agree" (no "am"). "Agree" is a verb, not an adjective.'
            }
          ]
        }
      ]
    }
  ],

  // === A2 Extra ===
  'a2': [
    {
      id: 'a2-m4',
      title: 'Prepositions of Place & Time',
      description: 'Master in, on, at and other tricky prepositions',
      icon: '📍',
      lessons: [
        {
          id: 'a2-m4-l1',
          title: 'In, On, At',
          type: 'grammar',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'I live ___ Lisbon.',
              options: ['in', 'on', 'at', 'to'],
              correct: 0,
              explanation: '"In" for cities, countries, continents: in Lisbon, in Portugal, in Europe.'
            },
            {
              type: 'fill-blank',
              question: 'The meeting is ___ Monday.',
              answer: 'on',
              hint: 'Preposition for days',
              explanation: '"On" for days and dates: on Monday, on March 5th, on Christmas Day.'
            },
            {
              type: 'multiple-choice',
              question: 'She arrives ___ 3 o\'clock.',
              options: ['in', 'on', 'at', 'by'],
              correct: 2,
              explanation: '"At" for specific times: at 3 o\'clock, at noon, at midnight.'
            },
            {
              type: 'true-false',
              statement: '"I was born in 1995" is correct (use "in" with years).',
              correct: true,
              explanation: 'True! Use "in" with years, months, and seasons: in 1995, in July, in summer.'
            },
            {
              type: 'fill-blank',
              question: 'The picture is ___ the wall.',
              answer: 'on',
              hint: 'Touching a surface',
              explanation: '"On" for surfaces: on the wall, on the table, on the floor.'
            },
            {
              type: 'matching',
              question: 'Match the preposition rule:',
              pairs: [
                { left: 'at', right: 'Specific time/address' },
                { left: 'on', right: 'Days/dates/surfaces' },
                { left: 'in', right: 'Months/years/cities' },
                { left: 'by', right: 'Deadline (before)' }
              ]
            },
            {
              type: 'translation',
              question: 'O livro está em cima da mesa.',
              answer: ['The book is on the table'],
              from: 'PT', to: 'EN',
              explanation: '"Em cima de" = "on" (on a surface).'
            },
            {
              type: 'multiple-choice',
              question: 'He\'s waiting ___ the bus stop.',
              options: ['in', 'on', 'at', 'by'],
              correct: 2,
              explanation: '"At" for specific points/locations: at the bus stop, at the door, at home.'
            }
          ]
        }
      ]
    },
    {
      id: 'a2-m5',
      title: 'Modal Verbs',
      description: 'Can, must, should and other helpers',
      icon: '💡',
      lessons: [
        {
          id: 'a2-m5-l1',
          title: 'Can, Could, Must, Should',
          type: 'grammar',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'I ___ swim. (ability)',
              options: ['can', 'must', 'should', 'would'],
              correct: 0,
              explanation: '"Can" expresses ability: "I can swim" = I have the ability to swim.'
            },
            {
              type: 'fill-blank',
              question: 'You ___ see a doctor. (advice)',
              answer: 'should',
              hint: 'Giving a recommendation',
              explanation: '"Should" for advice: "You should see a doctor".'
            },
            {
              type: 'multiple-choice',
              question: 'You ___ wear a seatbelt. It\'s the law.',
              options: ['can', 'should', 'must', 'could'],
              correct: 2,
              explanation: '"Must" for obligation/rules: it\'s obligatory.'
            },
            {
              type: 'true-false',
              statement: '"You mustn\'t smoke here" means "you don\'t have to smoke here".',
              correct: false,
              explanation: 'False! "Mustn\'t" = prohibited. "Don\'t have to" = not necessary. Big difference!'
            },
            {
              type: 'translation',
              question: 'Podes ajudar-me, por favor?',
              answer: ['Can you help me please', 'Could you help me please'],
              from: 'PT', to: 'EN',
              explanation: '"Can/Could you help me?" - "could" is more polite than "can".'
            },
            {
              type: 'fill-blank',
              question: 'You ___ park here - it\'s a no-parking zone.',
              answer: "mustn't",
              hint: 'It is prohibited',
              explanation: '"Mustn\'t" = it is prohibited/not allowed.'
            },
            {
              type: 'multiple-choice',
              question: '"Could" is...',
              options: ['Only past of "can"', 'More polite than "can" AND past of "can"', 'The same as "must"', 'Only for questions'],
              correct: 1,
              explanation: '"Could" = past of "can" (I could swim when I was 5) AND polite requests (Could you...?).'
            },
            {
              type: 'reorder',
              question: 'Put in the correct order:',
              words: ['You', 'should', 'not', 'eat', 'so', 'much', 'sugar'],
              correct: 'You should not eat so much sugar',
              explanation: 'Subject + should + not + base verb. "Should not" = "shouldn\'t".'
            }
          ]
        }
      ]
    },
    {
      id: 'a2-m6',
      title: 'Listening - Everyday',
      description: 'Understand common everyday English',
      icon: '🎧',
      lessons: [
        {
          id: 'a2-m6-l1',
          title: 'At a Restaurant',
          type: 'listening',
          exercises: [
            {
              type: 'listening',
              sentence: 'Could I have the menu, please?',
              question: 'Listen and type the polite request',
              hint: 'Asking for something at a restaurant',
              explanation: '"Could I have..." is a very polite way to ask for something.'
            },
            {
              type: 'listening',
              sentence: 'I would like the grilled chicken with salad.',
              question: 'Listen and type the order',
              hint: 'Ordering food - a protein with a side',
              explanation: '"I would like" (I\'d like) is the standard way to order food.'
            },
            {
              type: 'listening',
              sentence: 'Is the fish of the day fresh?',
              question: 'Listen and type the question',
              hint: 'Asking about a daily special',
              explanation: '"Fish of the day" = the daily fish special. "Fresh" = recently caught.'
            },
            {
              type: 'listening',
              sentence: 'Can we have the bill, please?',
              question: 'Listen and type what you hear',
              hint: 'At the end of the meal',
              explanation: '"The bill" (UK) / "the check" (US) = the payment at a restaurant.'
            },
            {
              type: 'listening',
              sentence: 'Do you have any vegetarian options?',
              question: 'Listen and type the question',
              hint: 'Asking about food for non-meat eaters',
              explanation: '"Vegetarian options" = food choices without meat.'
            },
            {
              type: 'listening',
              sentence: 'Could I have some water with ice, please?',
              question: 'Listen and type what you hear',
              hint: 'A drink request with a specific detail',
              explanation: '"Water with ice" - specifying what you want with your drink.'
            }
          ]
        }
      ]
    }
  ],

  // === B1 Extra ===
  'b1': [
    {
      id: 'b1-m4',
      title: 'Relative Clauses',
      description: 'Connect ideas with who, which, that, where',
      icon: '🔗',
      lessons: [
        {
          id: 'b1-m4-l1',
          title: 'Who, Which, That, Where',
          type: 'grammar',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'The woman ___ lives next door is a doctor.',
              options: ['which', 'who', 'where', 'what'],
              correct: 1,
              explanation: '"Who" for people: "The woman who lives next door..."'
            },
            {
              type: 'fill-blank',
              question: 'The book ___ I read last week was amazing.',
              answer: 'that',
              hint: 'Can replace "which" for things',
              explanation: '"That" or "which" for things: "The book that/which I read..."'
            },
            {
              type: 'multiple-choice',
              question: 'This is the restaurant ___ we had dinner last week.',
              options: ['who', 'which', 'where', 'that'],
              correct: 2,
              explanation: '"Where" for places: "the restaurant where we had dinner".'
            },
            {
              type: 'true-false',
              statement: '"The car who I bought is red" is correct English.',
              correct: false,
              explanation: 'False! Use "that/which" for things: "The car that I bought is red".'
            },
            {
              type: 'translation',
              question: 'O homem que está ali é o meu professor.',
              answer: ['The man who is over there is my teacher'],
              from: 'PT', to: 'EN',
              explanation: '"Que" for people = "who" in English. "Ali" = "over there".'
            },
            {
              type: 'fill-blank',
              question: 'The reason ___ I\'m late is the traffic.',
              answer: 'why',
              hint: 'Used for reasons',
              explanation: '"Why" in relative clauses: "The reason why..." (= the reason for which).'
            },
            {
              type: 'reorder',
              question: 'Put in the correct order:',
              words: ['The', 'girl', 'who', 'won', 'the', 'prize', 'is', 'my', 'friend'],
              correct: 'The girl who won the prize is my friend',
              explanation: 'Main subject + relative clause (who + verb) + main verb.'
            },
            {
              type: 'multiple-choice',
              question: 'Can you drop "that" in: "The film that I watched was great"?',
              options: ['No, never', 'Yes, because "that" is the object', 'Yes, always', 'Only in questions'],
              correct: 1,
              explanation: 'When the relative pronoun is the object, it can be omitted: "The film I watched..."'
            }
          ]
        }
      ]
    },
    {
      id: 'b1-m5',
      title: 'Common Mistakes',
      description: 'Fix the errors Portuguese speakers make',
      icon: '⚠️',
      lessons: [
        {
          id: 'b1-m5-l1',
          title: 'Portuguese Speaker Traps',
          type: 'grammar',
          exercises: [
            {
              type: 'true-false',
              statement: '"I am agree with you" is correct English.',
              correct: false,
              explanation: 'False! "Agree" is a verb, not an adjective. Say: "I agree with you".'
            },
            {
              type: 'multiple-choice',
              question: 'Which is correct?',
              options: ['I have 25 years', 'I am 25 years old', 'I am with 25 years', 'I have 25 years old'],
              correct: 1,
              explanation: 'English uses "to be" for age, not "to have" like Portuguese.'
            },
            {
              type: 'true-false',
              statement: '"He explained me the problem" is correct English.',
              correct: false,
              explanation: 'False! Say "He explained the problem to me" (explain + thing + to + person).'
            },
            {
              type: 'translation',
              question: 'Eu tenho frio.',
              answer: ['I am cold'],
              from: 'PT', to: 'EN',
              hint: 'In English, use "to be" not "to have"',
              explanation: 'PT: "ter frio/calor/fome/sede" → EN: "be cold/hot/hungry/thirsty".'
            },
            {
              type: 'multiple-choice',
              question: '"I like very much this song" or "I like this song very much"?',
              options: ['Both are correct', 'The first one', 'The second one', 'Neither is correct'],
              correct: 2,
              explanation: '"Very much" goes after the object: "I like this song very much".'
            },
            {
              type: 'true-false',
              statement: '"Actually" in English means the same as "atualmente" in Portuguese.',
              correct: false,
              explanation: 'False! "Actually" = "na verdade". "Currently" = "atualmente". False friend!'
            },
            {
              type: 'fill-blank',
              question: 'I ___ born in 1995. (not "I was borned")',
              answer: 'was',
              hint: 'Just "was born" - no extra -ed',
              explanation: '"I was born" (passive) - "born" is already past participle, no need for -ed.'
            },
            {
              type: 'multiple-choice',
              question: '"People is nice" or "People are nice"?',
              options: ['People is nice', 'People are nice', 'Both are correct', 'People be nice'],
              correct: 1,
              explanation: '"People" is plural in English: "People ARE nice" (not "is").'
            },
            {
              type: 'true-false',
              statement: '"The life is beautiful" - you need "the" before "life" here.',
              correct: false,
              explanation: 'False! General concepts don\'t use "the": "Life is beautiful" (not "the life").'
            },
            {
              type: 'translation',
              question: 'Depende do tempo.',
              answer: ['It depends on the weather'],
              from: 'PT', to: 'EN',
              hint: 'Don\'t forget the subject "it"!',
              explanation: 'English always needs a subject: "It depends" (not just "depends").'
            }
          ]
        }
      ]
    },
    {
      id: 'b1-m6',
      title: 'Listening - Conversations',
      description: 'Understand natural spoken English',
      icon: '🎙️',
      lessons: [
        {
          id: 'b1-m6-l1',
          title: 'Everyday Conversations',
          type: 'listening',
          exercises: [
            {
              type: 'listening',
              sentence: 'I haven\'t been to the gym in ages.',
              question: 'Listen and type the sentence',
              hint: 'About not doing something for a long time',
              explanation: '"In ages" = for a very long time. Present Perfect for experience.'
            },
            {
              type: 'listening',
              sentence: 'If I were you, I would take the earlier flight.',
              question: 'Listen and type the advice',
              hint: 'Second conditional - giving advice',
              explanation: '"If I were you, I would..." is a common advice pattern.'
            },
            {
              type: 'listening',
              sentence: 'She might not come to the party because she\'s feeling unwell.',
              question: 'Listen and type what you hear',
              hint: 'About possibility and health',
              explanation: '"Might not" = maybe won\'t. "Unwell" = sick/not feeling well.'
            },
            {
              type: 'listening',
              sentence: 'Could you tell me where the nearest pharmacy is?',
              question: 'Listen and type the question',
              hint: 'A polite way to ask for directions',
              explanation: '"Could you tell me where..." is an indirect question (more polite).'
            },
            {
              type: 'listening',
              sentence: 'I used to play football when I was younger.',
              question: 'Listen and type the sentence',
              hint: 'About a past habit that no longer happens',
              explanation: '"Used to" = past habit that is no longer true.'
            },
            {
              type: 'listening',
              sentence: 'The weather forecast says it\'s going to rain tomorrow.',
              question: 'Listen and type what you hear',
              hint: 'A prediction about the weather',
              explanation: '"Going to" for predictions based on evidence (the forecast).'
            }
          ]
        }
      ]
    }
  ],

  // === B2 Extra ===
  'b2': [
    {
      id: 'b2-m4',
      title: 'Confusing Words',
      description: 'Finally understand the tricky pairs',
      icon: '🤔',
      lessons: [
        {
          id: 'b2-m4-l1',
          title: 'Make vs Do, Say vs Tell',
          type: 'vocabulary',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'She ___ a mistake in the exam.',
              options: ['did', 'made', 'done', 'do'],
              correct: 1,
              explanation: '"Make a mistake" (not "do"). "Make" for creating/producing things.'
            },
            {
              type: 'fill-blank',
              question: 'I need to ___ my homework.',
              answer: 'do',
              hint: '"___" is for tasks and activities',
              explanation: '"Do homework/housework/exercise/a favour" - "do" for tasks and activities.'
            },
            {
              type: 'multiple-choice',
              question: 'He ___ me that he was leaving.',
              options: ['said', 'told', 'spoke', 'talked'],
              correct: 1,
              explanation: '"Tell + person": "He told me..." (not "said me"). "Say" doesn\'t take a person directly.'
            },
            {
              type: 'true-false',
              statement: '"She said me the truth" is correct English.',
              correct: false,
              explanation: 'False! "She told me the truth" (tell + person) or "She said the truth" (say, no person).'
            },
            {
              type: 'matching',
              question: 'Match with MAKE or DO:',
              pairs: [
                { left: '___ a decision', right: 'MAKE' },
                { left: '___ the dishes', right: 'DO' },
                { left: '___ a phone call', right: 'MAKE' },
                { left: '___ your best', right: 'DO' }
              ]
            },
            {
              type: 'fill-blank',
              question: 'Can you ___ me a favour?',
              answer: 'do',
              hint: 'Do someone a favour (not make)',
              explanation: '"Do someone a favour" = help someone. "Make" is not used here.'
            },
            {
              type: 'multiple-choice',
              question: '"Borrow" vs "Lend": Can I ___ your pen?',
              options: ['borrow', 'lend', 'loan', 'take'],
              correct: 0,
              explanation: '"Borrow" = receive temporarily. "Lend" = give temporarily. YOU borrow FROM someone.'
            },
            {
              type: 'translation',
              question: 'Ele disse-me que ia chegar tarde.',
              answer: ['He told me he was going to arrive late', 'He told me he would arrive late', 'He told me that he was going to be late'],
              from: 'PT', to: 'EN',
              explanation: '"Disse-me" = "told me" (tell + person). Past + going to/would for reported future.'
            }
          ]
        },
        {
          id: 'b2-m4-l2',
          title: 'Wish & If Only',
          type: 'grammar',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'I wish I ___ taller. (present wish)',
              options: ['am', 'was/were', 'would be', 'will be'],
              correct: 1,
              explanation: 'Wish + past simple for present wishes: "I wish I were/was taller".'
            },
            {
              type: 'fill-blank',
              question: 'I wish I ___ studied harder for the exam.',
              answer: 'had',
              hint: 'Past wish = wish + past perfect',
              explanation: 'Wish + past perfect for past regrets: "I wish I had studied harder".'
            },
            {
              type: 'multiple-choice',
              question: 'I wish he ___ stop making that noise!',
              options: ['will', 'would', 'could', 'should'],
              correct: 1,
              explanation: 'Wish + would for complaints/things we want others to change.'
            },
            {
              type: 'true-false',
              statement: '"I wish I can fly" is grammatically correct.',
              correct: false,
              explanation: 'False! "I wish I could fly" - wish + past form. "Can" → "could".'
            },
            {
              type: 'translation',
              question: 'Quem me dera falar inglês fluentemente.',
              answer: ['I wish I spoke English fluently', 'I wish I could speak English fluently'],
              from: 'PT', to: 'EN',
              explanation: '"Quem me dera" = "I wish". Present wish → wish + past simple.'
            },
            {
              type: 'fill-blank',
              question: 'If ___ I had more free time!',
              answer: 'only',
              hint: '"If ___" is like "I wish" but stronger',
              explanation: '"If only" = stronger version of "I wish". Same grammar rules apply.'
            },
            {
              type: 'multiple-choice',
              question: '"I wish I hadn\'t eaten so much" expresses...',
              options: ['A present desire', 'Regret about the past', 'A future hope', 'A present fact'],
              correct: 1,
              explanation: 'Wish + past perfect = regret about something that already happened.'
            },
            {
              type: 'reorder',
              question: 'Put in the correct order:',
              words: ['I', 'wish', 'I', 'could', 'travel', 'more', 'often'],
              correct: 'I wish I could travel more often',
              explanation: 'I wish + subject + could + base verb.'
            }
          ]
        }
      ]
    },
    {
      id: 'b2-m5',
      title: 'Email & Formal Writing',
      description: 'Write professional emails in English',
      icon: '📧',
      lessons: [
        {
          id: 'b2-m5-l1',
          title: 'Professional Expressions',
          type: 'vocabulary',
          exercises: [
            {
              type: 'multiple-choice',
              question: 'How do you start a formal email to someone you don\'t know?',
              options: ['Hey!', 'Dear Sir/Madam,', 'Yo,', 'What\'s up,'],
              correct: 1,
              explanation: '"Dear Sir/Madam," for unknown recipients. "Dear Mr/Ms [Name]," for known.'
            },
            {
              type: 'fill-blank',
              question: 'I am writing to ___ about the position advertised.',
              answer: 'inquire',
              hint: 'Formal word for "ask"',
              explanation: '"Inquire about" = formal for "ask about". Common in professional emails.'
            },
            {
              type: 'matching',
              question: 'Match informal → formal:',
              pairs: [
                { left: 'Thanks', right: 'Thank you for your time' },
                { left: 'Sorry', right: 'I apologize for' },
                { left: 'I want', right: 'I would like' },
                { left: 'Can you', right: 'Would you be able to' }
              ]
            },
            {
              type: 'translation',
              question: 'Agradecia que me enviasse mais informações.',
              answer: ['I would appreciate it if you could send me more information', 'I would be grateful if you could send me further information'],
              from: 'PT', to: 'EN',
              explanation: '"I would appreciate it if you could..." - very formal polite request.'
            },
            {
              type: 'multiple-choice',
              question: 'How do you end a formal email?',
              options: ['See ya!', 'Cheers!', 'Kind regards,', 'Later!'],
              correct: 2,
              explanation: '"Kind regards," or "Best regards," for formal. "Yours sincerely," if you know the name.'
            },
            {
              type: 'fill-blank',
              question: 'Please find ___ the document you requested.',
              answer: 'attached',
              hint: 'The file is joined to the email',
              explanation: '"Please find attached" = standard phrase for sending email attachments.'
            },
            {
              type: 'true-false',
              statement: '"I look forward to hear from you" is correct formal English.',
              correct: false,
              explanation: 'False! "I look forward to HEARING from you" (look forward to + -ing).'
            },
            {
              type: 'reorder',
              question: 'Put in the correct order:',
              words: ['I', 'would', 'appreciate', 'your', 'prompt', 'response'],
              correct: 'I would appreciate your prompt response',
              explanation: '"Prompt response" = quick reply. Very formal way to ask for a fast answer.'
            }
          ]
        }
      ]
    }
  ],

  // === C1 Extra ===
  'c1': [
    {
      id: 'c1-m2',
      title: 'Advanced Vocabulary',
      description: 'Sophisticated words for fluent communication',
      icon: '📚',
      lessons: [
        {
          id: 'c1-m2-l1',
          title: 'Academic & Formal Language',
          type: 'vocabulary',
          exercises: [
            {
              type: 'multiple-choice',
              question: '"Nevertheless" means...',
              options: ['Because of that', 'In addition', 'Despite that / however', 'As a result'],
              correct: 2,
              explanation: '"Nevertheless" = "however/despite that". Formal linking word.'
            },
            {
              type: 'fill-blank',
              question: 'The results were ___ positive, with 95% approval.',
              answer: 'overwhelmingly',
              hint: 'An adverb meaning "very strongly"',
              explanation: '"Overwhelmingly" = by a very large amount/majority.'
            },
            {
              type: 'matching',
              question: 'Match the formal word with its simpler equivalent:',
              pairs: [
                { left: 'Furthermore', right: 'Also' },
                { left: 'Consequently', right: 'So / As a result' },
                { left: 'Approximately', right: 'About' },
                { left: 'Endeavour', right: 'Try' }
              ]
            },
            {
              type: 'fill-blank',
              question: 'There is a strong ___ between exercise and mental health.',
              answer: 'correlation',
              hint: 'A statistical/scientific relationship',
              explanation: '"Correlation" = a connection or relationship between two things.'
            },
            {
              type: 'translation',
              question: 'Apesar dos obstáculos, eles conseguiram atingir o objetivo.',
              answer: ['Despite the obstacles, they managed to achieve the goal', 'In spite of the obstacles, they managed to reach the goal'],
              from: 'PT', to: 'EN',
              explanation: '"Apesar de" = "despite/in spite of". "Conseguiram atingir" = "managed to achieve".'
            },
            {
              type: 'multiple-choice',
              question: '"The report highlights the ___" - which word means "weak points"?',
              options: ['benefits', 'shortcomings', 'advantages', 'features'],
              correct: 1,
              explanation: '"Shortcomings" = deficiencies, weak points, faults.'
            },
            {
              type: 'true-false',
              statement: '"Notorious" in English means the same as "notório" (well-known/famous) in Portuguese.',
              correct: false,
              explanation: 'Partial false friend! "Notorious" in English = famous for something BAD. "Notable" = well-known (neutral).'
            },
            {
              type: 'fill-blank',
              question: 'The government needs to ___ this issue urgently.',
              answer: 'address',
              hint: 'Not about mail - means "deal with"',
              explanation: '"Address an issue" = deal with/tackle a problem (formal).'
            }
          ]
        },
        {
          id: 'c1-m2-l2',
          title: 'Collocations & Natural English',
          type: 'vocabulary',
          exercises: [
            {
              type: 'fill-blank',
              question: 'She made a strong ___ on the interview panel.',
              answer: 'impression',
              hint: 'Make a good/strong ___',
              explanation: '"Make an impression" - a common collocation. Also: "first impression".'
            },
            {
              type: 'multiple-choice',
              question: 'Which collocation is correct?',
              options: ['Do a decision', 'Take a decision', 'Make a decision', 'Both B and C'],
              correct: 3,
              explanation: '"Make a decision" (most common) and "take a decision" (British) are both correct.'
            },
            {
              type: 'matching',
              question: 'Match the verb with the noun it collocates with:',
              pairs: [
                { left: 'raise', right: 'awareness' },
                { left: 'conduct', right: 'research' },
                { left: 'draw', right: 'conclusions' },
                { left: 'meet', right: 'deadlines' }
              ]
            },
            {
              type: 'fill-blank',
              question: 'The project was carried ___ successfully.',
              answer: 'out',
              hint: 'Phrasal verb meaning "completed/executed"',
              explanation: '"Carry out" = execute/perform. "The project was carried out" = completed.'
            },
            {
              type: 'multiple-choice',
              question: '"It goes without ___" means "it\'s obvious".',
              options: ['telling', 'speaking', 'saying', 'talking'],
              correct: 2,
              explanation: '"It goes without saying" = it\'s so obvious it doesn\'t need to be stated.'
            },
            {
              type: 'translation',
              question: 'Temos de ter em conta todos os fatores.',
              answer: ['We have to take into account all the factors', 'We need to take all factors into account', 'We must consider all the factors'],
              from: 'PT', to: 'EN',
              explanation: '"Ter em conta" = "take into account" or "consider".'
            },
            {
              type: 'fill-blank',
              question: 'As ___ as I\'m concerned, the deal is off.',
              answer: 'far',
              hint: 'An expression meaning "in my opinion"',
              explanation: '"As far as I\'m concerned" = from my perspective / in my opinion.'
            },
            {
              type: 'true-false',
              statement: '"At the end of the day" always refers to evening time.',
              correct: false,
              explanation: 'False! "At the end of the day" is an idiom meaning "ultimately/when all is considered".'
            }
          ]
        }
      ]
    },
    {
      id: 'c1-m3',
      title: 'Advanced Listening',
      description: 'Understand fast, natural speech',
      icon: '🎯',
      lessons: [
        {
          id: 'c1-m3-l1',
          title: 'Complex Sentences',
          type: 'listening',
          exercises: [
            {
              type: 'listening',
              sentence: 'Had I known about the delay, I would have taken a different route.',
              question: 'Listen and type this inverted conditional',
              hint: 'A formal way to say "If I had known..."',
              explanation: 'Inversion in conditionals: "Had I known" = "If I had known" (more formal).'
            },
            {
              type: 'listening',
              sentence: 'Not only did she finish the project, but she also exceeded all expectations.',
              question: 'Listen and type the sentence',
              hint: 'A sentence with emphasis using "not only...but also"',
              explanation: '"Not only...but also" with inversion for emphasis.'
            },
            {
              type: 'listening',
              sentence: 'The committee has decided to postpone the meeting until further notice.',
              question: 'Listen and type what you hear',
              hint: 'A formal announcement about rescheduling',
              explanation: '"Until further notice" = until a new announcement is made.'
            },
            {
              type: 'listening',
              sentence: 'Regardless of the challenges, we remain committed to our goals.',
              question: 'Listen and type the statement',
              hint: 'Despite problems, staying focused',
              explanation: '"Regardless of" = despite/no matter what. Formal and determined tone.'
            },
            {
              type: 'listening',
              sentence: 'It\'s high time we addressed the underlying issues.',
              question: 'Listen and type the sentence',
              hint: 'Expressing that action is overdue',
              explanation: '"It\'s high time + past simple" = it should have been done already.'
            },
            {
              type: 'listening',
              sentence: 'Were it not for her support, I wouldn\'t have succeeded.',
              question: 'Listen and type what you hear',
              hint: 'Formal conditional without "if"',
              explanation: '"Were it not for" = "If it weren\'t for" (formal inversion).'
            }
          ]
        }
      ]
    },
    {
      id: 'c1-m4',
      title: 'Advanced Pronunciation',
      description: 'Perfect your accent with difficult sounds',
      icon: '🗣️',
      lessons: [
        {
          id: 'c1-m4-l1',
          title: 'Difficult Sounds',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'The weather throughout the month was thoroughly unpleasant.',
              phonetic: '/ðə ˈweð.ər θruːˈaʊt ðə mʌnθ wɒz ˈθʌr.ə.li ʌnˈplez.ənt/',
              question: 'Focus on the "th" sounds (θ and ð)',
              tips: 'Put your tongue between your teeth. "Th" in "weather/the" is voiced (ð - vibration). "Th" in "throughout/month/thoroughly" is unvoiced (θ - just air).',
              explanation: 'The "th" sound doesn\'t exist in Portuguese. Practice placing your tongue tip between your teeth.'
            },
            {
              type: 'pronunciation',
              sentence: 'She sells seashells by the seashore.',
              phonetic: '/ʃiː selz ˈsiːʃelz baɪ ðə ˈsiːʃɔːr/',
              question: 'Classic tongue twister - focus on "sh" vs "s"',
              tips: '"Sh" (ʃ) - lips rounded, tongue back. "S" - lips spread, tongue forward. Don\'t mix them up!',
              explanation: 'This tongue twister trains the distinction between /s/ and /ʃ/ sounds.'
            },
            {
              type: 'pronunciation',
              sentence: 'I thought I\'d bought the right amount of flour for the recipe.',
              phonetic: '/aɪ θɔːt aɪd bɔːt ðə raɪt əˈmaʊnt əv flaʊər fər ðə ˈres.ɪ.pi/',
              question: 'Focus on silent letters and vowel sounds',
              tips: '"Thought" - the "gh" is silent. "Bought" - "ough" = /ɔː/. "Flour" - rhymes with "flower". "Recipe" - 3 syllables, stress on first.',
              explanation: 'English spelling often doesn\'t match pronunciation. Silent letters are very common.'
            },
            {
              type: 'pronunciation',
              sentence: 'The rural brewery regularly produces remarkably robust red ales.',
              phonetic: '/ðə ˈrʊr.əl ˈbruː.ər.i ˈreɡ.jʊ.lə.li prəˈdjuːs.ɪz rɪˈmɑːk.ə.bli rəˈbʌst red eɪlz/',
              question: 'Practice the English "R" sound',
              tips: 'The English "R" is NOT rolled like in Portuguese. Curl your tongue slightly back without touching the roof of your mouth. "Rural" is especially tricky!',
              explanation: 'The English /r/ is one of the hardest sounds for Portuguese speakers. It\'s softer and doesn\'t vibrate.'
            },
            {
              type: 'pronunciation',
              sentence: 'Would you could you should you?',
              phonetic: '/wʊd juː kʊd juː ʃʊd juː/',
              question: 'The "ould" words - they all rhyme!',
              tips: 'The "l" is SILENT in would/could/should. They rhyme with "good" and "wood". Don\'t pronounce the "l"!',
              explanation: '"Would", "could", "should" all have a silent "l" and the same vowel sound /ʊ/.'
            },
            {
              type: 'pronunciation',
              sentence: 'The comfortable vegetable was comparable to the temperature.',
              phonetic: '/ðə ˈkʌmf.tə.bəl ˈvedʒ.tə.bəl wɒz ˈkɒm.pər.ə.bəl tuː ðə ˈtem.prə.tʃər/',
              question: 'Words that lose syllables in natural speech',
              tips: '"Comfortable" = 3 syllables (KUMF-tuh-bul), not 4. "Vegetable" = 3 (VEJ-tuh-bul). "Temperature" = 3 (TEM-pruh-chur). Native speakers swallow syllables!',
              explanation: 'Many English words drop syllables in natural speech. This is called "elision".'
            }
          ]
        },
        {
          id: 'c1-m4-l2',
          title: 'Intonation & Stress',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'I didn\'t say he stole the money.',
              question: 'Say it 3 times, stressing a different word each time. Try stressing "HE".',
              tips: 'Stress on "I" = someone else said it. Stress on "HE" = someone else stole it. Stress on "stole" = he did something else with it. English meaning changes with stress!',
              explanation: 'Word stress in English can completely change the meaning of a sentence.'
            },
            {
              type: 'pronunciation',
              sentence: 'You\'re coming to the party, aren\'t you?',
              phonetic: '/jɔːr ˈkʌm.ɪŋ tə ðə ˈpɑːr.ti, ɑːnt juː/',
              question: 'Practice the rising intonation on the tag question',
              tips: 'The main sentence has falling intonation. The tag "aren\'t you?" rises if you\'re genuinely asking, or falls if you\'re just confirming.',
              explanation: 'Tag questions with rising intonation = real question. Falling = expecting agreement.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'ve been working here for about three and a half years.',
              phonetic: '/aɪv bɪn ˈwɜːk.ɪŋ hɪər fər əˈbaʊt θriː ən ə hɑːf jɪərz/',
              question: 'Focus on the weak/reduced sounds',
              tips: '"For" = /fər/ (not /fɔːr/). "And a" = /ən ə/ (almost "nuh"). "About" - stress on second syllable. In natural speech, function words are reduced.',
              explanation: 'Native speakers reduce function words (for, and, a, the, to) to very weak sounds.'
            },
            {
              type: 'pronunciation',
              sentence: 'What do you want to do tonight?',
              phonetic: '/ˈwɒd.ə.jə ˈwɒn.ə duː təˈnaɪt/',
              question: 'Say it naturally - "wanna" and "whadaya"',
              tips: '"What do you" → "Whadaya" /wɒd.ə.jə/. "Want to" → "Wanna" /wɒn.ə/. This is NOT bad English - it\'s natural connected speech!',
              explanation: 'Connected speech patterns like "wanna", "gonna", "gotta" are standard in spoken English.'
            },
            {
              type: 'pronunciation',
              sentence: 'PHOtograph, phoTOGrapher, photoGRAphic.',
              question: 'Notice how the stress moves in word families',
              tips: 'PHO-to-graph (stress 1st). pho-TO-gra-pher (stress 2nd). pho-to-GRA-phic (stress 3rd). The suffix changes where the stress falls!',
              explanation: 'English word stress shifts with suffixes: -er moves stress, -ic puts stress on previous syllable.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'m going to have to let you know about that later.',
              phonetic: '/aɪm ˈɡɒ.nə hæf.tə let.ʃə noʊ əˈbaʊt ðæt ˈleɪ.tər/',
              question: 'Practice natural connected speech',
              tips: '"Going to" → "gonna". "Have to" → "hafta". "Let you" → "letcha". These contractions are what make you sound natural, not lazy!',
              explanation: 'Connected speech is essential for sounding fluent. Practice these reductions.'
            }
          ]
        }
      ]
    }
  ],

  // ==========================================
  // PRONUNCIATION MODULES PER LEVEL
  // ==========================================

  '_a1_pronunciation': [
    {
      id: 'a1-m8',
      title: 'Pronunciation - Beginner',
      description: 'Start speaking English with confidence',
      icon: '🗣️',
      lessons: [
        {
          id: 'a1-m8-l1',
          title: 'Greetings & Introductions',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'Hello, my name is João. Nice to meet you!',
              question: 'Introduce yourself in English',
              tips: '"Hello" - stress on the second syllable: he-LLO. "Nice" rhymes with "ice".',
              explanation: 'A simple introduction. Focus on clear pronunciation of each word.'
            },
            {
              type: 'pronunciation',
              sentence: 'Good morning! How are you today?',
              phonetic: '/ɡʊd ˈmɔːr.nɪŋ haʊ ɑːr juː təˈdeɪ/',
              question: 'Practice this common greeting',
              tips: '"Morning" - the "r" is soft. "How are you" often sounds like "how-are-ya" in fast speech.',
              explanation: 'The most common morning greeting. Practice saying it naturally.'
            },
            {
              type: 'pronunciation',
              sentence: 'I am from Portugal. I speak Portuguese.',
              question: 'Tell someone where you\'re from',
              tips: '"Portugal" in English: POR-chu-gul (not Por-tu-GAL like in Portuguese). "Portuguese" = por-chu-GEEZ.',
              explanation: 'Country names often have different stress in English vs Portuguese.'
            },
            {
              type: 'pronunciation',
              sentence: 'Thank you very much!',
              phonetic: '/θæŋk juː ˈver.i mʌtʃ/',
              question: 'Practice the "th" sound',
              tips: '"Thank" - put your tongue between your teeth for "th". It\'s /θ/, not /t/ or /f/. This is the #1 sound Portuguese speakers need to practice!',
              explanation: 'The "th" /θ/ sound doesn\'t exist in Portuguese. Tongue tip between teeth, blow air.'
            },
            {
              type: 'pronunciation',
              sentence: 'Excuse me, where is the bathroom?',
              phonetic: '/ɪkˈskjuːz miː wer ɪz ðə ˈbæθ.ruːm/',
              question: 'Ask a useful travel question',
              tips: '"Excuse" - stress on second syllable: ex-KYOOZ. "Bathroom" - the "th" again! "Where" starts with /w/ not /v/.',
              explanation: 'Useful phrase for travel. Practice the "w" sound - round your lips!'
            },
            {
              type: 'pronunciation',
              sentence: 'I would like a coffee, please.',
              phonetic: '/aɪ wʊd laɪk ə ˈkɒf.i pliːz/',
              question: 'Order something politely',
              tips: '"Would" - the "l" is SILENT (sounds like "wood"). "Coffee" - stress on first syllable. "Please" - long "ee" sound.',
              explanation: 'Polite ordering phrase. "I\'d like" is the contracted, natural version.'
            }
          ]
        },
        {
          id: 'a1-m8-l2',
          title: 'Numbers & Shopping',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'One, two, three, four, five, six, seven, eight, nine, ten.',
              question: 'Count from 1 to 10 clearly',
              tips: '"Three" has the "th" sound again. "Five" - "v" not "b". "Eight" - the "gh" is silent, sounds like "ate".',
              explanation: 'Numbers are essential. Pay attention to "three" (th), "five" (v sound), and "eight" (silent gh).'
            },
            {
              type: 'pronunciation',
              sentence: 'How much does this cost?',
              phonetic: '/haʊ mʌtʃ dʌz ðɪs kɒst/',
              question: 'Ask about a price',
              tips: '"How much" - "much" has a short "u" sound /ʌ/ like "cup". "Does" = /dʌz/, not "dose".',
              explanation: 'Essential shopping phrase. "Does" is pronounced /dʌz/ with a short vowel.'
            },
            {
              type: 'pronunciation',
              sentence: 'That\'s thirteen euros and fifty cents.',
              phonetic: '/ðæts θɜːˈtiːn ˈjʊr.oʊz ænd ˈfɪf.ti sents/',
              question: 'Say a price with numbers',
              tips: '"Thirteen" - stress on TEEN: thir-TEEN. Don\'t confuse with "thirty" (THIR-ty). This is a very common mistake!',
              explanation: '"ThirTEEN" (13) vs "THIRty" (30) - the stress position changes the meaning completely.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'ll take this one, please. Can I pay by card?',
              question: 'Complete a purchase',
              tips: '"I\'ll" = "aisle" sound, very short. "Take" - long "ay" sound. "Card" - in British English, the "r" is soft.',
              explanation: 'Shopping phrases. Practice saying the full sentences naturally.'
            },
            {
              type: 'pronunciation',
              sentence: 'Do you have this in a smaller size?',
              phonetic: '/duː juː hæv ðɪs ɪn ə ˈsmɔːl.ər saɪz/',
              question: 'Ask about sizes in a shop',
              tips: '"Do you have" in fast speech sounds like "d\'ya have". "Smaller" - SMAWL-er. "Size" - the "z" sound at the end.',
              explanation: 'Common shopping question. Focus on the natural contraction of "do you".'
            },
            {
              type: 'pronunciation',
              sentence: 'Monday, Tuesday, Wednesday, Thursday, Friday.',
              phonetic: '/ˈmʌn.deɪ ˈtjuːz.deɪ ˈwenz.deɪ ˈθɜːz.deɪ ˈfraɪ.deɪ/',
              question: 'Say the weekdays clearly',
              tips: '"Wednesday" - the "d" is SILENT: WENZ-day. "Tuesday" - starts with "tyooz". "Thursday" - "th" sound again: THERZ-day.',
              explanation: 'Days of the week. "Wednesday" with silent "d" trips up everyone!'
            }
          ]
        },
        {
          id: 'a1-m8-l3',
          title: 'Essential Sounds for Portuguese Speakers',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'This is the thing I think about the most.',
              phonetic: '/ðɪs ɪz ðə θɪŋ aɪ θɪŋk əˈbaʊt ðə moʊst/',
              question: 'The "th" workout - 5 th sounds in one sentence!',
              tips: '"This/the" = voiced th (ð) - tongue between teeth WITH vibration. "Thing/think" = unvoiced th (θ) - tongue between teeth, just air. Feel your throat to tell the difference!',
              explanation: 'The #1 challenge for Portuguese speakers. "This" (ð) vs "think" (θ) are different sounds.'
            },
            {
              type: 'pronunciation',
              sentence: 'Very well. Have you ever visited Venice?',
              phonetic: '/ˈver.i wel hæv juː ˈev.ər ˈvɪz.ɪ.tɪd ˈven.ɪs/',
              question: 'Practice the "v" sound (not "b"!)',
              tips: 'Portuguese speakers often say "b" instead of "v". For "v": top teeth touch bottom lip. For "b": both lips touch. "Very" = VER-ee, not "BER-ee".',
              explanation: 'The /v/ vs /b/ distinction is crucial. Bite your lower lip for /v/.'
            },
            {
              type: 'pronunciation',
              sentence: 'We went to work on Wednesday.',
              phonetic: '/wiː went tuː wɜːk ɒn ˈwenz.deɪ/',
              question: 'Practice the "w" sound (not "v"!)',
              tips: '"W" = round your lips into a circle, like blowing a candle. "V" = teeth on lip. "We/went/work/Wednesday" all start with rounded lips. It\'s NOT "ve vent to vork"!',
              explanation: 'The /w/ sound doesn\'t exist in Portuguese. Round your lips - think of saying "oo" quickly before the word.'
            },
            {
              type: 'pronunciation',
              sentence: 'She has short hair and sharp shoes.',
              phonetic: '/ʃiː hæz ʃɔːt heər ænd ʃɑːp ʃuːz/',
              question: 'Practice the "sh" sound vs "s"',
              tips: '"Sh" /ʃ/ = lips rounded forward, like telling someone to be quiet "shh!". It\'s different from "s". "She" is NOT "see". "Shoes" is NOT "soos".',
              explanation: 'The "sh" /ʃ/ sound exists in Portuguese (like "chá"), but make sure to use it in English words too.'
            },
            {
              type: 'pronunciation',
              sentence: 'The red car is parked near the park.',
              phonetic: '/ðə red kɑːr ɪz pɑːkt nɪər ðə pɑːk/',
              question: 'Practice the English "r" (not rolled!)',
              tips: 'The English "r" is NOT rolled like Portuguese. Curl your tongue slightly backwards WITHOUT touching anything. "Red" - tongue curls back. "Car/park" - in British English the "r" is almost silent.',
              explanation: 'The English /r/ is one of the hardest sounds. Your tongue should not vibrate or touch anything.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'m hungry. Let\'s have lunch.',
              phonetic: '/aɪm ˈhʌŋ.ɡri lets hæv lʌntʃ/',
              question: 'Practice the "h" sound',
              tips: 'Portuguese often drops the "h" sound. In English, "h" must be pronounced: a puff of air from the throat. "Hungry" = HUN-gree (not "ungry"). "Have" = HAV (not "av").',
              explanation: 'The /h/ sound is just a puff of air. Put your hand in front of your mouth - you should feel the air on "h" words.'
            }
          ]
        }
      ]
    }
  ],

  '_a2_pronunciation': [
    {
      id: 'a2-m7',
      title: 'Pronunciation - Elementary',
      description: 'Improve your clarity and rhythm',
      icon: '🗣️',
      lessons: [
        {
          id: 'a2-m7-l1',
          title: 'At the Restaurant',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'Could I have the menu, please?',
              phonetic: '/kʊd aɪ hæv ðə ˈmen.juː pliːz/',
              question: 'Politely ask for the menu',
              tips: '"Could" - silent "l", sounds like "kud". "Menu" - MEN-yoo (stress on first syllable). Nice rising intonation on "please?".',
              explanation: 'Practice polite restaurant language with natural intonation.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'d like the grilled chicken with a side salad, please.',
              phonetic: '/aɪd laɪk ðə ɡrɪld ˈtʃɪk.ɪn wɪð ə saɪd ˈsæl.əd pliːz/',
              question: 'Order a meal naturally',
              tips: '"I\'d like" = "ayd like" (very quick). "Grilled" = one syllable: GRILD. "Chicken" = CHIK-in. "Salad" = SAL-ud (not "sa-LAD").',
              explanation: 'Ordering food. "I\'d like" is the natural contracted form of "I would like".'
            },
            {
              type: 'pronunciation',
              sentence: 'Is there anything you would recommend?',
              phonetic: '/ɪz ðer ˈen.i.θɪŋ juː wʊd ˌrek.əˈmend/',
              question: 'Ask the waiter for suggestions',
              tips: '"Anything" = EN-ee-thing (the "th" again!). "Recommend" = rek-uh-MEND (stress on last syllable).',
              explanation: 'A natural way to ask for recommendations. Rising intonation because it\'s a question.'
            },
            {
              type: 'pronunciation',
              sentence: 'Could we have the bill, please? We\'re in a bit of a hurry.',
              phonetic: '/kʊd wiː hæv ðə bɪl pliːz wɪər ɪn ə bɪt əv ə ˈhʌr.i/',
              question: 'Ask for the bill politely',
              tips: '"We\'re in a bit of a hurry" - this is very natural English. "Bit of a" runs together: "bidduva". "Hurry" = HUR-ee.',
              explanation: 'End-of-meal phrases. "A bit of a hurry" is softer than "we\'re in a hurry".'
            },
            {
              type: 'pronunciation',
              sentence: 'That was delicious! My compliments to the chef.',
              phonetic: '/ðæt wɒz dɪˈlɪʃ.əs maɪ ˈkɒm.plɪ.ments tuː ðə ʃef/',
              question: 'Give a compliment about the food',
              tips: '"Delicious" = deh-LISH-us (stress on second syllable). "Chef" = SHEF (French origin, "ch" = "sh"). NOT "chef" with a hard "ch".',
              explanation: 'Complimenting food. "Chef" is pronounced with a "sh" sound, like the French.'
            },
            {
              type: 'pronunciation',
              sentence: 'Do you have any vegetarian options?',
              phonetic: '/duː juː hæv ˈen.i ˌvedʒ.ɪˈteər.i.ən ˈɒp.ʃənz/',
              question: 'Ask about dietary options',
              tips: '"Vegetarian" = vej-ih-TAIR-ee-un (5 syllables, stress on TAIR). "Options" = OP-shunz.',
              explanation: 'Dietary vocabulary. "Vegetarian" has the stress on the third syllable.'
            }
          ]
        },
        {
          id: 'a2-m7-l2',
          title: 'Giving Directions',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'Turn left at the traffic lights, then go straight ahead.',
              phonetic: '/tɜːn left æt ðə ˈtræf.ɪk laɪts ðen ɡoʊ streɪt əˈhed/',
              question: 'Give simple directions',
              tips: '"Traffic" = TRAF-ik. "Straight" = STRAYT (the "ght" is silent). "Ahead" = uh-HED.',
              explanation: 'Basic directions. "Straight" has lots of silent letters - only 5 sounds: /s-t-r-eɪ-t/.'
            },
            {
              type: 'pronunciation',
              sentence: 'It\'s on the right-hand side, opposite the supermarket.',
              phonetic: '/ɪts ɒn ðə raɪt hænd saɪd ˈɒp.ə.zɪt ðə ˈsuː.pə.mɑː.kɪt/',
              question: 'Describe a location',
              tips: '"Right-hand side" - stress "right". "Opposite" = OP-uh-zit (3 syllables, stress on first). "Supermarket" = SOO-per-mar-kit.',
              explanation: 'Location descriptions. "Opposite" is often mispronounced - it\'s only 3 syllables.'
            },
            {
              type: 'pronunciation',
              sentence: 'Excuse me, could you tell me how to get to the train station?',
              phonetic: '/ɪkˈskjuːz miː kʊd juː tel miː haʊ tə ɡet tuː ðə treɪn ˈsteɪ.ʃən/',
              question: 'Ask for directions politely',
              tips: '"Could you tell me" - very polite, indirect question. "Station" = STAY-shun. The whole sentence should have a gentle, polite rising tone.',
              explanation: 'Indirect questions are more polite than "Where is the station?"'
            },
            {
              type: 'pronunciation',
              sentence: 'Go past the church, and it\'s the second building on your left.',
              phonetic: '/ɡoʊ pɑːst ðə tʃɜːtʃ ænd ɪts ðə ˈsek.ənd ˈbɪl.dɪŋ ɒn jɔːr left/',
              question: 'Give detailed directions',
              tips: '"Past" = PAHST (long "a"). "Church" = CHERTCH (the "ur" = /ɜː/ like "her"). "Building" = BIL-ding (not "BUIL-ding").',
              explanation: 'Giving directions with landmarks. "Building" drops the "u" sound in natural speech.'
            },
            {
              type: 'pronunciation',
              sentence: 'You can\'t miss it. It\'s the big white building on the corner.',
              phonetic: '/juː kɑːnt mɪs ɪt ɪts ðə bɪɡ waɪt ˈbɪl.dɪŋ ɒn ðə ˈkɔː.nər/',
              question: 'Reassure someone about finding a place',
              tips: '"Can\'t" in British = KAHNT (long "a"). In American = KANT (short "a"). "White" - starts with /w/ (round lips!). "Corner" = KOR-ner.',
              explanation: '"You can\'t miss it" = it\'s very easy to find. A very natural English expression.'
            }
          ]
        },
        {
          id: 'a2-m7-l3',
          title: 'Talking About the Past',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'I visited London last summer and it was amazing.',
              phonetic: '/aɪ ˈvɪz.ɪ.tɪd ˈlʌn.dən lɑːst ˈsʌm.ər ænd ɪt wɒz əˈmeɪ.zɪŋ/',
              question: 'Talk about a past trip',
              tips: '"Visited" = VIZ-i-tid (3 syllables - the "-ed" adds a syllable after "t/d"). "London" = LUN-dun. "Amazing" = uh-MAY-zing.',
              explanation: 'When the verb ends in "t" or "d", the "-ed" is pronounced as an extra syllable: /ɪd/.'
            },
            {
              type: 'pronunciation',
              sentence: 'We walked along the beach and watched the sunset.',
              phonetic: '/wiː wɔːkt əˈlɒŋ ðə biːtʃ ænd wɒtʃt ðə ˈsʌn.set/',
              question: 'Describe a past experience',
              tips: '"Walked" = WAWKT (one syllable, "-ed" = /t/). "Watched" = WOTCHT (one syllable, "-ed" = /t/). "Beach" - long "ee" sound, careful with the "ch".',
              explanation: 'After voiceless sounds (k, p, s, sh, ch), "-ed" is pronounced as /t/ - no extra syllable!'
            },
            {
              type: 'pronunciation',
              sentence: 'She arrived late because she missed the bus.',
              phonetic: '/ʃiː əˈraɪvd leɪt bɪˈkɒz ʃiː mɪst ðə bʌs/',
              question: 'Explain why something happened',
              tips: '"Arrived" = uh-RYVED ("-ed" = /d/ - one syllable). "Because" = bih-KOZ (stress on second). "Missed" = MIST (one syllable).',
              explanation: 'After voiced sounds (v, z, g, n, l), "-ed" is pronounced as /d/ - no extra syllable!'
            },
            {
              type: 'pronunciation',
              sentence: 'Did you enjoy the party? I thought it was really fun.',
              phonetic: '/dɪd juː ɪnˈdʒɔɪ ðə ˈpɑːr.ti aɪ θɔːt ɪt wɒz ˈrɪə.li fʌn/',
              question: 'Ask and comment about a past event',
              tips: '"Enjoy" = en-JOY (stress on second). "Thought" = THAWT (silent "gh"!). "Really" = REEL-ee. "Fun" = short "u" sound /ʌ/.',
              explanation: '"Thought" is one of many English words where "ough" is silent. Just /θɔːt/.'
            },
            {
              type: 'pronunciation',
              sentence: 'I bought some souvenirs and took lots of photos.',
              phonetic: '/aɪ bɔːt sʌm ˌsuː.vəˈnɪərz ænd tʊk lɒts əv ˈfoʊ.toʊz/',
              question: 'Talk about holiday activities',
              tips: '"Bought" = BAWT (silent "gh"). "Souvenirs" = soo-vuh-NEERZ (French origin, stress on last). "Photos" = FOH-toze (not "fo-TOS").',
              explanation: 'Irregular past tenses: buy→bought, take→took. "Photos" stress on the first syllable.'
            }
          ]
        }
      ]
    }
  ],

  '_b1_pronunciation': [
    {
      id: 'b1-m7',
      title: 'Pronunciation - Intermediate',
      description: 'Speak with natural flow and rhythm',
      icon: '🗣️',
      lessons: [
        {
          id: 'b1-m7-l1',
          title: 'Opinions & Discussion',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'In my opinion, learning a language requires daily practice.',
              question: 'Express an opinion clearly',
              tips: '"Opinion" - stress on second syllable: o-PIN-ion. "Requires" - stress on second: re-QUIRES. "Daily" - DAY-lee.',
              explanation: 'Expressing opinions. Focus on sentence stress - emphasize the KEY content words.'
            },
            {
              type: 'pronunciation',
              sentence: 'I completely agree with you, but I think we should also consider the alternatives.',
              question: 'Agree and add your perspective',
              tips: '"Completely" - com-PLEET-ly. "Agree" - a-GREE. "Alternatives" - all-TER-na-tivz. Pause slightly after "you" before "but".',
              explanation: 'Agreeing and extending the discussion. Use pauses for natural rhythm.'
            },
            {
              type: 'pronunciation',
              sentence: 'What would you recommend for a first-time visitor to Lisbon?',
              question: 'Ask for recommendations',
              tips: '"Recommend" - re-co-MEND. "First-time" - stress both words equally. "Visitor" - VIS-i-tor.',
              explanation: 'A natural question for conversation. Focus on the question intonation at the end.'
            },
            {
              type: 'pronunciation',
              sentence: 'I see your point, but on the other hand, we have to be realistic.',
              question: 'Politely disagree',
              tips: '"I see your point" - a polite way to acknowledge before disagreeing. "On the other hand" - linking phrase. "Realistic" = ree-uh-LIS-tik.',
              explanation: 'Polite disagreement patterns. "I see your point, but..." is much better than just "No, I disagree".'
            },
            {
              type: 'pronunciation',
              sentence: 'Could you speak a little more slowly? I didn\'t quite catch that.',
              question: 'Ask someone to repeat or slow down',
              tips: '"Could you" = "kudja" in fast speech. "Slowly" - SLOW-lee. "Didn\'t quite catch" = didn\'t fully understand.',
              explanation: 'An essential phrase. Don\'t be afraid to ask people to slow down!'
            },
            {
              type: 'pronunciation',
              sentence: 'To be honest, I\'m not entirely sure about that.',
              question: 'Express uncertainty',
              tips: '"To be honest" - a common phrase starter. "Entirely" = en-TIRE-lee. "Sure" = SHOOR (one syllable).',
              explanation: '"To be honest" softens what you\'re about to say. Very natural in conversation.'
            }
          ]
        },
        {
          id: 'b1-m7-l2',
          title: 'Storytelling & Narration',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'You won\'t believe what happened to me yesterday!',
              question: 'Start telling an exciting story',
              tips: '"Won\'t believe" - stress "won\'t" and "believe". "Happened" = HAP-end. Use an excited, rising tone!',
              explanation: 'Story openers need energy! Raise your pitch on "believe" to create interest.'
            },
            {
              type: 'pronunciation',
              sentence: 'So I was walking down the street, minding my own business, when suddenly...',
              question: 'Set the scene for a story',
              tips: '"Minding my own business" = not doing anything special. "Suddenly" = SUD-en-lee. Build suspense by slowing down before "when suddenly..."',
              explanation: 'The Past Continuous sets the scene. Slow down before "suddenly" for dramatic effect!'
            },
            {
              type: 'pronunciation',
              sentence: 'At first I thought it was a joke, but then I realized it was serious.',
              question: 'Describe a change in understanding',
              tips: '"At first" - link the words: "at-first". "Realized" = REE-uh-lized. "Serious" = SEER-ee-us.',
              explanation: '"At first... but then..." is a great storytelling contrast pattern.'
            },
            {
              type: 'pronunciation',
              sentence: 'The funniest part was when he accidentally called his boss "mum".',
              question: 'Tell the funny part of a story',
              tips: '"Funniest" = FUN-ee-ist. "Accidentally" = ak-si-DEN-tal-ee (5 syllables!). "Boss" - short "o" sound. Smile when you say this - it affects your pronunciation!',
              explanation: 'When telling something funny, your facial expression actually changes how you sound.'
            },
            {
              type: 'pronunciation',
              sentence: 'Anyway, to cut a long story short, everything worked out in the end.',
              question: 'Wrap up a story',
              tips: '"Anyway" - AH-nee-way (signals you\'re wrapping up). "To cut a long story short" = to summarize. "Worked out" = ended well.',
              explanation: '"To cut a long story short" is a useful expression to skip to the conclusion.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'ve never been so embarrassed in my entire life!',
              question: 'Express strong emotion about a past event',
              tips: '"Embarrassed" = em-BARE-ust (3 syllables, NOT 4). "Entire" = en-TIRE. Stress "never" and "so" for emphasis.',
              explanation: '"I\'ve never been so..." is a great pattern for expressing extremes.'
            }
          ]
        },
        {
          id: 'b1-m7-l3',
          title: 'Work & Professional',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'I\'m responsible for managing the marketing department.',
              phonetic: '/aɪm rɪˈspɒn.sə.bəl fər ˈmæn.ɪ.dʒɪŋ ðə ˈmɑːr.kɪ.tɪŋ dɪˈpɑːrt.mənt/',
              question: 'Describe your job responsibilities',
              tips: '"Responsible" = ri-SPON-suh-bul (stress on second). "Managing" = MAN-uh-jing. "Department" = deh-PART-ment.',
              explanation: 'Professional language. "Responsible for + -ing" is the standard pattern.'
            },
            {
              type: 'pronunciation',
              sentence: 'We need to schedule a meeting to discuss the quarterly results.',
              phonetic: '/wiː niːd tuː ˈʃed.juːl ə ˈmiː.tɪŋ tuː dɪˈskʌs ðə ˈkwɔːr.tər.li rɪˈzʌlts/',
              question: 'Suggest a business meeting',
              tips: '"Schedule" = SHED-yool (British) or SKED-yool (American). "Quarterly" = KWOR-ter-lee. "Results" = ri-ZULTS.',
              explanation: '"Schedule" pronunciation differs between British and American English.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'d like to propose a different approach to this problem.',
              question: 'Suggest an alternative in a meeting',
              tips: '"Propose" = pro-POZE. "Approach" = uh-PROACH. "Problem" = PROB-lum. Use a confident but not aggressive tone.',
              explanation: '"I\'d like to propose" is assertive yet polite in business contexts.'
            },
            {
              type: 'pronunciation',
              sentence: 'Could you send me the report by Friday at the latest?',
              question: 'Make a deadline request',
              tips: '"Report" = ri-PORT. "Friday" = FRY-day. "At the latest" = no later than. Polite but firm tone.',
              explanation: '"At the latest" adds urgency to a deadline without being rude.'
            },
            {
              type: 'pronunciation',
              sentence: 'Unfortunately, we\'re going to have to postpone the launch.',
              question: 'Deliver bad news professionally',
              tips: '"Unfortunately" = un-FOR-chu-nit-lee (5 syllables). "Postpone" = post-PONE. "Launch" = LAWNCH. Use a serious, empathetic tone.',
              explanation: '"Unfortunately" softens bad news. Practice saying it smoothly - it\'s a long word.'
            }
          ]
        }
      ]
    }
  ],

  '_b2_pronunciation': [
    {
      id: 'b2-m6',
      title: 'Pronunciation - Upper Intermediate',
      description: 'Sound natural and confident',
      icon: '🗣️',
      lessons: [
        {
          id: 'b2-m6-l1',
          title: 'Connected Speech',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'What do you want to do tonight?',
              phonetic: '/ˈwɒd.ə.jə ˈwɒn.ə duː təˈnaɪt/',
              question: 'Say it naturally - "wanna" and "whadaya"',
              tips: '"What do you" → "Whadaya" /wɒd.ə.jə/. "Want to" → "Wanna" /wɒn.ə/. This is NOT bad English - it\'s how natives actually speak!',
              explanation: 'Connected speech is essential for sounding natural. These reductions are standard.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'m going to have to think about it.',
              phonetic: '/aɪm ˈɡɒ.nə hæf.tə θɪŋk əˈbaʊt ɪt/',
              question: 'Use natural contractions',
              tips: '"Going to" → "gonna". "Have to" → "hafta". "About it" → "about-it" (link the words). These make you sound 10x more natural!',
              explanation: '"Gonna" and "hafta" are standard in spoken English. Use them!'
            },
            {
              type: 'pronunciation',
              sentence: 'I should have told her, but I didn\'t want to upset her.',
              phonetic: '/aɪ ˈʃʊd.əv toʊld hɜːr bʌt aɪ ˈdɪd.ənt ˈwɒn.ə ʌpˈset hɜːr/',
              question: 'Practice "should have" → "shoulda"',
              tips: '"Should have" = "shoulda" /ʃʊd.ə/ (NOT "should of" - that\'s a spelling mistake). "Want to" = "wanna". "Upset" = up-SET (stress on second).',
              explanation: '"Should have/could have/would have" all contract to "shoulda/coulda/woulda" in speech.'
            },
            {
              type: 'pronunciation',
              sentence: 'Do you know what I mean? It\'s kind of hard to explain.',
              phonetic: '/d.jə noʊ wɒt aɪ miːn ɪts ˈkaɪnd.ə hɑːrd tʊ ɪkˈspleɪn/',
              question: 'Use filler expressions naturally',
              tips: '"Do you know" = "d\'ya know". "Kind of" = "kinda". "Hard to" = "hard-tuh". These fillers give you thinking time!',
              explanation: '"You know what I mean?" and "kind of" are natural conversation fillers.'
            },
            {
              type: 'pronunciation',
              sentence: 'He must have been waiting for ages.',
              phonetic: '/hiː ˈmʌs.tə.bɪn ˈweɪ.tɪŋ fər ˈeɪ.dʒɪz/',
              question: 'Practice "must have been" → "musta been"',
              tips: '"Must have been" contracts to "musta been" /mʌs.tə.bɪn/ in natural speech. "For ages" = for a very long time. Link "for-ages".',
              explanation: 'Modal + have + been contracts heavily in speech. Practice the short form.'
            },
            {
              type: 'pronunciation',
              sentence: 'Let me know if you need anything at all.',
              phonetic: '/ˈlet.mi noʊ ɪf juː niːd ˈen.i.θɪŋ ət ɔːl/',
              question: 'Offer help naturally',
              tips: '"Let me" = "lemme". "Anything at all" = very emphatic. Link "anything-at-all". Warm, helpful tone.',
              explanation: '"At all" adds emphasis: "anything at all" = absolutely anything.'
            }
          ]
        },
        {
          id: 'b2-m6-l2',
          title: 'Presentations & Public Speaking',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'Good morning everyone. Thank you for being here today.',
              question: 'Open a presentation',
              tips: '"Good morning everyone" - pause after it. Speak slowly and clearly. "Thank you for being here" - warm tone, slight emphasis on "thank". Project your voice!',
              explanation: 'Presentation openings need confidence. Slow down - beginners always speak too fast.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'d like to start by giving you a brief overview of our current situation.',
              question: 'Introduce the topic',
              tips: '"Brief overview" = BIG stress on "brief" and "overview". "Current" = KUR-ent. "Situation" = sit-yoo-AY-shun. Speak at 70% of your normal speed.',
              explanation: 'Presentation language is slower and more deliberate than conversation.'
            },
            {
              type: 'pronunciation',
              sentence: 'As you can see from this graph, sales have increased by twenty percent.',
              question: 'Describe data and trends',
              tips: '"As you can see" - a signposting phrase. "Graph" = GRAF (short "a"). "Increased" = in-KREEST. "Percent" = per-SENT.',
              explanation: 'Describing visual data. "As you can see" draws attention to the slide.'
            },
            {
              type: 'pronunciation',
              sentence: 'Moving on to the next point, I\'d like to highlight three key areas.',
              question: 'Transition between topics',
              tips: '"Moving on" - a transition phrase, slight pause after it. "Highlight" = HY-lyt. "Key areas" - stress both words equally.',
              explanation: 'Signposting language helps your audience follow. Pause between sections.'
            },
            {
              type: 'pronunciation',
              sentence: 'Does anyone have any questions? I\'d be happy to answer them.',
              question: 'Invite questions at the end',
              tips: '"Does anyone" - gentle, inviting tone. "Happy to answer" - open body language matches open tone. Rising intonation on "questions?".',
              explanation: 'The Q&A opening. Sound genuinely open to questions - your tone matters!'
            },
            {
              type: 'pronunciation',
              sentence: 'To sum up, our three main priorities are growth, innovation, and sustainability.',
              question: 'Summarize key points',
              tips: '"To sum up" = in conclusion. "Priorities" = pry-OR-ih-teez. "Innovation" = in-oh-VAY-shun. "Sustainability" = sus-tay-nuh-BIL-ih-tee. Slow, clear, final.',
              explanation: 'Summaries need to be slow and emphatic. Each key word gets extra stress.'
            }
          ]
        },
        {
          id: 'b2-m6-l3',
          title: 'Minimal Pairs - Tricky Sounds',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'The ship sailed past the sheep on the shore.',
              phonetic: '/ðə ʃɪp seɪld pɑːst ðə ʃiːp ɒn ðə ʃɔːr/',
              question: 'Ship /ɪ/ vs Sheep /iː/ - short vs long',
              tips: '"Ship" = short /ɪ/ (like "bit"). "Sheep" = long /iː/ (like "beat"). "Shore" - "sh" again. The vowel length changes the meaning!',
              explanation: 'Minimal pairs: words that differ by one sound. ship/sheep, bit/beat, sit/seat.'
            },
            {
              type: 'pronunciation',
              sentence: 'I need to leave. Let me live my life!',
              phonetic: '/aɪ niːd tuː liːv let miː lɪv maɪ laɪf/',
              question: 'Leave /iː/ vs Live /ɪ/ - same difference!',
              tips: '"Leave" = long /iː/ (depart). "Live" = short /ɪ/ (exist). "Life" = /laɪf/ (different again!). Three different vowels in similar words.',
              explanation: 'Leave vs live is a very common mistake for Portuguese speakers.'
            },
            {
              type: 'pronunciation',
              sentence: 'The man with the beard bought some beer and a bed.',
              phonetic: '/ðə mæn wɪð ðə bɪərd bɔːt sʌm bɪər ænd ə bed/',
              question: 'Beard, beer, bed - three different vowels!',
              tips: '"Beard" = /bɪərd/. "Beer" = /bɪər/. "Bed" = /bed/. "Man" = /mæn/. Each vowel is different - English has about 20 vowel sounds!',
              explanation: 'English has far more vowel sounds than Portuguese. Listen carefully to the differences.'
            },
            {
              type: 'pronunciation',
              sentence: 'Put the food in the full cooking pot.',
              phonetic: '/pʊt ðə fuːd ɪn ðə fʊl ˈkʊk.ɪŋ pɒt/',
              question: 'Put /ʊ/ vs Food /uː/ vs Pot /ɒ/',
              tips: '"Put/full/cooking" = short /ʊ/ (lips slightly rounded). "Food" = long /uː/ (lips very rounded). "Pot" = /ɒ/ (open mouth). Three different "o" sounds!',
              explanation: 'The "oo" spelling has two pronunciations: "food" (long) vs "good" (short).'
            },
            {
              type: 'pronunciation',
              sentence: 'The cat cut a piece of the cake and caught a cold.',
              phonetic: '/ðə kæt kʌt ə piːs əv ðə keɪk ænd kɔːt ə koʊld/',
              question: 'Cat, cut, cake, caught, cold - 5 different vowels!',
              tips: '"Cat" = /æ/. "Cut" = /ʌ/. "Cake" = /eɪ/. "Caught" = /ɔː/. "Cold" = /oʊ/. Five different vowel sounds with similar-looking words!',
              explanation: 'English spelling is unreliable for vowels. "Ca-" can be 5 different sounds!'
            },
            {
              type: 'pronunciation',
              sentence: 'The nurse heard the bird chirping on her birthday.',
              phonetic: '/ðə nɜːs hɜːd ðə bɜːd ˈtʃɜː.pɪŋ ɒn hɜːr ˈbɜːθ.deɪ/',
              question: 'The /ɜː/ sound - nurse, heard, bird, chirp, birthday',
              tips: 'All these words share the same vowel /ɜː/! "Nurse" = nɜːs. "Heard" = hɜːd. "Bird" = bɜːd. It\'s the same sound spelled 5 different ways!',
              explanation: 'The /ɜː/ sound can be spelled: ur (nurse), ear (heard), ir (bird), or (word), er (her).'
            }
          ]
        }
      ]
    }
  ],

  '_b1_pronunciation': [
    {
      id: 'b1-m7',
      title: 'Pronunciation - Intermediate',
      description: 'Speak with natural flow and rhythm',
      icon: '🗣️',
      lessons: [
        {
          id: 'b1-m7-l1',
          title: 'Opinions & Discussion',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'In my opinion, learning a language requires daily practice.',
              question: 'Express an opinion clearly',
              tips: '"Opinion" - stress on second syllable: o-PIN-ion. "Requires" - stress on second: re-QUIRES. "Daily" - DAY-lee.',
              explanation: 'Expressing opinions. Focus on sentence stress - emphasize the KEY content words.'
            },
            {
              type: 'pronunciation',
              sentence: 'I completely agree with you, but I think we should also consider the alternatives.',
              question: 'Agree and add your perspective',
              tips: '"Completely" - com-PLEET-ly. "Agree" - a-GREE. "Alternatives" - all-TER-na-tivz. Pause slightly after "you" before "but".',
              explanation: 'Agreeing and extending the discussion. Use pauses for natural rhythm.'
            },
            {
              type: 'pronunciation',
              sentence: 'What would you recommend for a first-time visitor to Lisbon?',
              question: 'Ask for recommendations',
              tips: '"Recommend" - re-co-MEND. "First-time" - stress both words equally. "Visitor" - VIS-i-tor.',
              explanation: 'A natural question for conversation. Focus on the question intonation at the end.'
            },
            {
              type: 'pronunciation',
              sentence: 'I see your point, but on the other hand, we have to be realistic.',
              question: 'Politely disagree',
              tips: '"I see your point" - a polite way to acknowledge before disagreeing. "On the other hand" - linking phrase. "Realistic" = ree-uh-LIS-tik.',
              explanation: 'Polite disagreement patterns. "I see your point, but..." is much better than just "No, I disagree".'
            },
            {
              type: 'pronunciation',
              sentence: 'Could you speak a little more slowly? I didn\'t quite catch that.',
              question: 'Ask someone to repeat or slow down',
              tips: '"Could you" = "kudja" in fast speech. "Slowly" - SLOW-lee. "Didn\'t quite catch" = didn\'t fully understand.',
              explanation: 'An essential phrase. Don\'t be afraid to ask people to slow down!'
            },
            {
              type: 'pronunciation',
              sentence: 'To be honest, I\'m not entirely sure about that.',
              question: 'Express uncertainty',
              tips: '"To be honest" - a common phrase starter. "Entirely" = en-TIRE-lee. "Sure" = SHOOR (one syllable).',
              explanation: '"To be honest" softens what you\'re about to say. Very natural in conversation.'
            }
          ]
        },
        {
          id: 'b1-m7-l2',
          title: 'Storytelling & Narration',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'You won\'t believe what happened to me yesterday!',
              question: 'Start telling an exciting story',
              tips: '"Won\'t believe" - stress "won\'t" and "believe". "Happened" = HAP-end. Use an excited, rising tone!',
              explanation: 'Story openers need energy! Raise your pitch on "believe" to create interest.'
            },
            {
              type: 'pronunciation',
              sentence: 'So I was walking down the street, minding my own business, when suddenly...',
              question: 'Set the scene for a story',
              tips: '"Minding my own business" = not doing anything special. "Suddenly" = SUD-en-lee. Slow down before "when suddenly..."',
              explanation: 'The Past Continuous sets the scene. Slow down before "suddenly" for dramatic effect!'
            },
            {
              type: 'pronunciation',
              sentence: 'At first I thought it was a joke, but then I realized it was serious.',
              question: 'Describe a change in understanding',
              tips: '"At first" - link the words: "at-first". "Realized" = REE-uh-lized. "Serious" = SEER-ee-us.',
              explanation: '"At first... but then..." is a great storytelling contrast pattern.'
            },
            {
              type: 'pronunciation',
              sentence: 'Anyway, to cut a long story short, everything worked out in the end.',
              question: 'Wrap up a story',
              tips: '"Anyway" - AH-nee-way (signals you\'re wrapping up). "To cut a long story short" = to summarize. "Worked out" = ended well.',
              explanation: '"To cut a long story short" is useful to skip to the conclusion.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'ve never been so embarrassed in my entire life!',
              question: 'Express strong emotion about a past event',
              tips: '"Embarrassed" = em-BARE-ust (3 syllables, NOT 4). "Entire" = en-TIRE. Stress "never" and "so" for emphasis.',
              explanation: '"I\'ve never been so..." is a great pattern for expressing extremes.'
            }
          ]
        },
        {
          id: 'b1-m7-l3',
          title: 'Work & Professional',
          type: 'pronunciation',
          exercises: [
            {
              type: 'pronunciation',
              sentence: 'I\'m responsible for managing the marketing department.',
              phonetic: '/aɪm rɪˈspɒn.sə.bəl fər ˈmæn.ɪ.dʒɪŋ ðə ˈmɑːr.kɪ.tɪŋ dɪˈpɑːrt.mənt/',
              question: 'Describe your job responsibilities',
              tips: '"Responsible" = ri-SPON-suh-bul (stress on second). "Managing" = MAN-uh-jing. "Department" = deh-PART-ment.',
              explanation: 'Professional language. "Responsible for + -ing" is the standard pattern.'
            },
            {
              type: 'pronunciation',
              sentence: 'We need to schedule a meeting to discuss the quarterly results.',
              question: 'Suggest a business meeting',
              tips: '"Schedule" = SHED-yool (British) or SKED-yool (American). "Quarterly" = KWOR-ter-lee. "Results" = ri-ZULTS.',
              explanation: '"Schedule" pronunciation differs between British and American English.'
            },
            {
              type: 'pronunciation',
              sentence: 'Unfortunately, we\'re going to have to postpone the launch.',
              question: 'Deliver bad news professionally',
              tips: '"Unfortunately" = un-FOR-chu-nit-lee (5 syllables). "Postpone" = post-PONE. "Launch" = LAWNCH. Serious, empathetic tone.',
              explanation: '"Unfortunately" softens bad news. Practice saying it smoothly.'
            },
            {
              type: 'pronunciation',
              sentence: 'I\'d like to propose a different approach to this problem.',
              question: 'Suggest an alternative in a meeting',
              tips: '"Propose" = pro-POZE. "Approach" = uh-PROACH. "Problem" = PROB-lum. Confident but collaborative tone.',
              explanation: '"I\'d like to propose" is assertive yet polite in business contexts.'
            },
            {
              type: 'pronunciation',
              sentence: 'Could you send me the report by Friday at the latest?',
              question: 'Make a deadline request',
              tips: '"Report" = ri-PORT. "Friday" = FRY-day. "At the latest" = no later than. Polite but firm tone.',
              explanation: '"At the latest" adds urgency without being rude.'
            }
          ]
        }
      ]
    }
  ]
}
