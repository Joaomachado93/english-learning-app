export const megaA2Modules = [
  // ─── MODULE 1: Present Continuous ─────────────────────────────────
  {
    id: 'a2-mx1',
    title: 'Present Continuous',
    description:
      'Learn to talk about actions happening right now using the present continuous tense.',
    icon: '🔄',
    lessons: [
      {
        id: 'a2-mx1-l1',
        title: "I'm doing it now",
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Choose the correct sentence:',
            options: [
              'She is reading a book right now.',
              'She reading a book right now.',
              'She are reading a book right now.',
              'She is read a book right now.',
            ],
            correct: 0,
            explanation:
              'The present continuous is formed with subject + am/is/are + verb-ing. "She is reading" is correct.',
          },
          {
            type: 'fill-blank',
            question: 'They ___ (play) football in the park.',
            answer: 'are playing',
            hint: 'Use "are" + verb-ing for "they".',
            explanation:
              'With "they" we use "are" + the -ing form: "They are playing."',
          },
          {
            type: 'translation',
            question: 'Eu estou a estudar inglês agora.',
            answer: [
              'I am studying English now',
              "I'm studying English now",
              'I am studying English right now',
              "I'm studying English right now",
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Use am + verb-ing.',
            explanation:
              '"Estou a estudar" translates to "I am studying" in the present continuous.',
          },
          {
            type: 'true-false',
            statement:
              'In the present continuous, we always add -ing to the main verb.',
            correct: true,
            explanation:
              'Yes! The present continuous always uses the -ing form of the verb (e.g., working, eating, running).',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['is', 'dinner', 'cooking', 'Mum'],
            correct: 'Mum is cooking dinner',
            explanation:
              'The correct order is: Subject + is/am/are + verb-ing + object.',
          },
          {
            type: 'listening',
            sentence: 'I am waiting for the bus.',
            question: 'What is the person doing?',
            hint: 'The person is at a bus stop.',
            explanation:
              'The sentence "I am waiting for the bus" describes a current action using the present continuous.',
          },
          {
            type: 'matching',
            question: 'Match the subject with the correct present continuous form:',
            pairs: [
              { left: 'I', right: 'am working' },
              { left: 'She', right: 'is sleeping' },
              { left: 'We', right: 'are eating' },
              { left: 'You', right: 'are running' },
            ],
          },
          {
            type: 'fill-blank',
            question: 'Look! The cat ___ (climb) the tree!',
            answer: 'is climbing',
            hint: 'The cat = it, so use "is" + verb-ing.',
            explanation:
              'We use "is" with he/she/it: "The cat is climbing the tree."',
          },
        ],
      },
      {
        id: 'a2-mx1-l2',
        title: 'Questions & Negatives',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is the correct negative form?',
            options: [
              "He isn't watching TV.",
              "He not watching TV.",
              "He doesn't watching TV.",
              "He aren't watching TV.",
            ],
            correct: 0,
            explanation:
              'The negative of present continuous is subject + am/is/are + not + verb-ing. "He isn\'t watching TV."',
          },
          {
            type: 'reorder',
            question: 'Make a question from these words:',
            words: ['you', 'are', 'What', 'doing', '?'],
            correct: 'What are you doing?',
            explanation:
              'For questions, the word order is: Question word + am/is/are + subject + verb-ing.',
          },
          {
            type: 'fill-blank',
            question: '___ they playing tennis? No, they ___.',
            answer: "Are, aren't",
            hint: 'Yes/No questions start with am/is/are.',
            explanation:
              'Questions: "Are they playing tennis?" Negative short answer: "No, they aren\'t."',
          },
          {
            type: 'translation',
            question: 'Ela não está a dormir.',
            answer: [
              'She is not sleeping',
              "She isn't sleeping",
              "She's not sleeping",
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Use is + not + verb-ing.',
            explanation:
              '"Não está a dormir" = "is not sleeping". We can contract to "isn\'t" or "\'s not".',
          },
          {
            type: 'true-false',
            statement:
              'To make a present continuous question, we put the subject before am/is/are.',
            correct: false,
            explanation:
              'No! In questions, am/is/are comes BEFORE the subject: "Are you working?" not "You are working?"',
          },
          {
            type: 'multiple-choice',
            question: 'Choose the correct question:',
            options: [
              'Is she cooking dinner?',
              'She is cooking dinner?',
              'Does she cooking dinner?',
              'Is she cook dinner?',
            ],
            correct: 0,
            explanation:
              'Yes/No questions: Is/Am/Are + subject + verb-ing. "Is she cooking dinner?"',
          },
          {
            type: 'listening',
            sentence: "Are you coming to the party tonight?",
            question: 'What is the speaker asking about?',
            hint: 'It is an invitation or question about plans.',
            explanation:
              'The present continuous can also be used for future arrangements: "Are you coming to the party tonight?"',
          },
        ],
      },
      {
        id: 'a2-mx1-l3',
        title: 'Present Simple vs Continuous',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"I ___ coffee every morning." Choose the correct form:',
            options: ['drink', 'am drinking', 'drinks', 'drinking'],
            correct: 0,
            explanation:
              'We use present simple for habits and routines. "Every morning" signals a routine, so "I drink".',
          },
          {
            type: 'multiple-choice',
            question: '"Look! She ___ in the rain!" Choose the correct form:',
            options: [
              'is dancing',
              'dances',
              'dance',
              'does dance',
            ],
            correct: 0,
            explanation:
              '"Look!" tells us something is happening NOW, so we use present continuous: "She is dancing."',
          },
          {
            type: 'fill-blank',
            question: 'He usually ___ (walk) to work, but today he ___ (drive).',
            answer: 'walks, is driving',
            hint: '"Usually" = habit (simple). "Today" = now (continuous).',
            explanation:
              '"Usually" signals a habit (present simple: walks). "Today" signals a temporary action (present continuous: is driving).',
          },
          {
            type: 'true-false',
            statement:
              'We use the present continuous for permanent situations and habits.',
            correct: false,
            explanation:
              'No! We use present SIMPLE for permanent situations and habits. Present CONTINUOUS is for temporary or current actions.',
          },
          {
            type: 'translation',
            question: 'Eu normalmente como em casa, mas hoje estou a comer no restaurante.',
            answer: [
              "I usually eat at home, but today I'm eating at the restaurant",
              'I usually eat at home, but today I am eating at the restaurant',
              "I normally eat at home, but today I'm eating at the restaurant",
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Habit = present simple. Today = present continuous.',
            explanation:
              '"Normalmente como" = "I usually eat" (simple). "Hoje estou a comer" = "today I\'m eating" (continuous).',
          },
          {
            type: 'matching',
            question: 'Match each sentence with the correct tense:',
            pairs: [
              { left: 'She works at a bank.', right: 'Present Simple' },
              { left: "She's working from home today.", right: 'Present Continuous' },
              { left: 'I always wake up at 7.', right: 'Present Simple' },
              { left: "I'm reading a great book this week.", right: 'Present Continuous' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['usually', 'She', 'but', 'tea', 'drinks', "she's", 'coffee', 'today', 'drinking'],
            correct: "She usually drinks tea but today she's drinking coffee",
            explanation:
              'The first part uses present simple (habit). The second uses present continuous (temporary action).',
          },
          {
            type: 'listening',
            sentence: "I don't usually work on Saturdays, but I'm working today.",
            question: 'Does the person normally work on Saturdays?',
            hint: 'Pay attention to "don\'t usually".',
            explanation:
              '"I don\'t usually work on Saturdays" means it is not a habit. "But I\'m working today" means this Saturday is an exception.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 2: Countable & Uncountable ────────────────────────────
  {
    id: 'a2-mx2',
    title: 'Countable & Uncountable',
    description:
      'Master quantifiers like some, any, much, many and learn how to talk about amounts.',
    icon: '🔢',
    lessons: [
      {
        id: 'a2-mx2-l1',
        title: 'Some / Any / Much / Many',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"There isn\'t ___ milk in the fridge."',
            options: ['any', 'some', 'many', 'much of'],
            correct: 0,
            explanation:
              'We use "any" in negative sentences. "There isn\'t any milk."',
          },
          {
            type: 'fill-blank',
            question: 'Would you like ___ coffee?',
            answer: 'some',
            hint: 'We use "some" in offers and requests.',
            explanation:
              'Although questions normally use "any", offers and requests use "some": "Would you like some coffee?"',
          },
          {
            type: 'true-false',
            statement: '"Much" is used with countable nouns like apples and books.',
            correct: false,
            explanation:
              '"Much" is used with UNCOUNTABLE nouns (much water, much time). For countable nouns, use "many" (many apples, many books).',
          },
          {
            type: 'matching',
            question: 'Match the quantifier with the correct noun:',
            pairs: [
              { left: 'much', right: 'money' },
              { left: 'many', right: 'friends' },
              { left: 'some', right: 'sugar (offer)' },
              { left: 'any', right: 'questions (negative)' },
            ],
          },
          {
            type: 'translation',
            question: 'Não há muita água na garrafa.',
            answer: [
              "There isn't much water in the bottle",
              'There is not much water in the bottle',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Muita" with uncountable = much (negative).',
            explanation:
              '"Muita água" in a negative sentence = "much water". "There isn\'t much water in the bottle."',
          },
          {
            type: 'multiple-choice',
            question: '"How ___ students are in the class?"',
            options: ['many', 'much', 'some', 'any'],
            correct: 0,
            explanation:
              '"Students" is countable, so we use "How many students...?"',
          },
          {
            type: 'fill-blank',
            question: 'I have ___ good news for you!',
            answer: 'some',
            hint: '"News" is uncountable. This is a positive statement.',
            explanation:
              'In positive sentences we use "some". "News" is uncountable: "I have some good news."',
          },
          {
            type: 'listening',
            sentence: 'Do you have any questions about the homework?',
            question: 'What is the teacher asking the students?',
            hint: 'The teacher wants to know if students need help.',
            explanation:
              '"Any" is used in questions: "Do you have any questions?" The teacher is checking if students understood.',
          },
        ],
      },
      {
        id: 'a2-mx2-l2',
        title: 'A few / A little / A lot of',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"I have ___ friends in London — about three or four."',
            options: ['a few', 'a little', 'much', 'any'],
            correct: 0,
            explanation:
              '"Friends" is countable, and "three or four" is a small number, so "a few" is correct.',
          },
          {
            type: 'fill-blank',
            question: 'There is ___ sugar left. We need to buy more.',
            answer: 'a little',
            hint: '"Sugar" is uncountable, and there is a small amount.',
            explanation:
              '"Sugar" is uncountable, so we use "a little" for a small quantity: "There is a little sugar left."',
          },
          {
            type: 'true-false',
            statement: '"A lot of" can be used with both countable and uncountable nouns.',
            correct: true,
            explanation:
              'Yes! "A lot of" works with both: "a lot of friends" (countable) and "a lot of money" (uncountable).',
          },
          {
            type: 'translation',
            question: 'Ele tem muito dinheiro.',
            answer: [
              'He has a lot of money',
              'He has lots of money',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Muito dinheiro" = a lot of money.',
            explanation:
              '"Muito" with an uncountable noun in a positive sentence is best translated as "a lot of".',
          },
          {
            type: 'matching',
            question: 'Match the quantifier with the correct usage:',
            pairs: [
              { left: 'a few', right: 'countable (small number)' },
              { left: 'a little', right: 'uncountable (small amount)' },
              { left: 'a lot of', right: 'both types (large quantity)' },
              { left: 'few (no article)', right: 'countable (almost none)' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['a', 'people', 'lot', 'There', 'of', 'were', 'at', 'the', 'concert'],
            correct: 'There were a lot of people at the concert',
            explanation:
              '"A lot of" is used for a large quantity. "People" is countable.',
          },
          {
            type: 'multiple-choice',
            question: '"Can I have ___ water, please?"',
            options: ['a little', 'a few', 'many', 'few'],
            correct: 0,
            explanation:
              '"Water" is uncountable. For a small amount, we use "a little": "Can I have a little water?"',
          },
          {
            type: 'fill-blank',
            question: 'She speaks ___ languages — English, French, Spanish, and German.',
            answer: 'a lot of',
            hint: 'Four languages is quite a lot!',
            explanation:
              'Four languages is a large number, so "a lot of" fits: "She speaks a lot of languages."',
          },
        ],
      },
      {
        id: 'a2-mx2-l3',
        title: 'Food Quantities',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the food with the correct quantity expression:',
            pairs: [
              { left: 'a bottle of', right: 'water' },
              { left: 'a slice of', right: 'pizza' },
              { left: 'a piece of', right: 'cake' },
              { left: 'a cup of', right: 'tea' },
            ],
          },
          {
            type: 'fill-blank',
            question: 'Can I have a ___ of bread, please?',
            answer: 'loaf',
            hint: 'This is the word for a whole bread unit.',
            explanation:
              'A "loaf" is the standard unit for bread: "a loaf of bread".',
          },
          {
            type: 'multiple-choice',
            question: 'Which is the correct quantity expression?',
            options: [
              'a carton of milk',
              'a slice of milk',
              'a piece of milk',
              'a bunch of milk',
            ],
            correct: 0,
            explanation:
              'Milk comes in a carton (or bottle). "A carton of milk" is the standard expression.',
          },
          {
            type: 'translation',
            question: 'Eu quero uma fatia de bolo, por favor.',
            answer: [
              'I want a slice of cake, please',
              "I'd like a slice of cake, please",
              'I would like a slice of cake, please',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Fatia" = slice.',
            explanation:
              '"Uma fatia de" = "a slice of". "Eu quero uma fatia de bolo" = "I want a slice of cake."',
          },
          {
            type: 'true-false',
            statement: 'We say "a bar of chocolate" and "a bar of soap".',
            correct: true,
            explanation:
              'Yes! "A bar of" is used for both chocolate and soap — solid rectangular items.',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['a', 'buy', 'We', 'need', 'rice', 'bag', 'to', 'of'],
            correct: 'We need to buy a bag of rice',
            explanation:
              '"A bag of rice" is a common food quantity expression.',
          },
          {
            type: 'listening',
            sentence: 'Could I have two bottles of water and a packet of biscuits?',
            question: 'What does the person want to buy?',
            hint: 'The person is ordering drinks and a snack.',
            explanation:
              'The person wants "two bottles of water" and "a packet of biscuits". Note: "packet" is common in British English.',
          },
          {
            type: 'fill-blank',
            question: 'She added a ___ of salt to the soup.',
            answer: 'pinch',
            hint: 'A very small amount you take between two fingers.',
            explanation:
              'A "pinch" is a tiny amount taken between your thumb and finger: "a pinch of salt".',
          },
        ],
      },
    ],
  },

  // ─── MODULE 3: Describing People ──────────────────────────────────
  {
    id: 'a2-mx3',
    title: 'Describing People',
    description:
      'Learn vocabulary and structures to describe how people look and their personality.',
    icon: '👤',
    lessons: [
      {
        id: 'a2-mx3-l1',
        title: 'Physical Appearance',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the English description with the Portuguese translation:',
            pairs: [
              { left: 'tall', right: 'alto/a' },
              { left: 'short (height)', right: 'baixo/a' },
              { left: 'slim', right: 'magro/a' },
              { left: 'curly hair', right: 'cabelo encaracolado' },
            ],
          },
          {
            type: 'multiple-choice',
            question: '"She has long ___ hair and blue eyes."',
            options: ['blonde', 'beard', 'tall', 'slim'],
            correct: 0,
            explanation:
              '"Blonde" describes hair colour. "She has long blonde hair and blue eyes."',
          },
          {
            type: 'fill-blank',
            question: 'He is quite ___ — about 1.90 metres.',
            answer: 'tall',
            hint: '1.90m is above average height.',
            explanation:
              '"Tall" means having a great height. 1.90m is tall for most people.',
          },
          {
            type: 'translation',
            question: 'Ele tem barba e usa óculos.',
            answer: [
              'He has a beard and wears glasses',
              'He has a beard and he wears glasses',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Barba" = beard, "óculos" = glasses.',
            explanation:
              '"Tem barba" = "has a beard". "Usa óculos" = "wears glasses".',
          },
          {
            type: 'true-false',
            statement:
              'In English, we say "She has brown eyes" not "She has eyes brown".',
            correct: true,
            explanation:
              'In English, adjectives come BEFORE the noun: "brown eyes", "long hair", "blue eyes".',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['She', 'with', 'woman', 'is', 'a', 'hair', 'short', 'red'],
            correct: 'She is a woman with short red hair',
            explanation:
              'We describe people with "with" for features: "a woman with short red hair".',
          },
          {
            type: 'listening',
            sentence: 'My brother is medium height with dark, straight hair.',
            question: 'Describe the brother\'s hair.',
            hint: 'Two adjectives describe the hair.',
            explanation:
              'The brother has "dark, straight hair" — dark refers to colour and straight refers to texture.',
          },
        ],
      },
      {
        id: 'a2-mx3-l2',
        title: 'Personality',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the personality adjective with its meaning:',
            pairs: [
              { left: 'outgoing', right: 'likes meeting new people' },
              { left: 'shy', right: 'nervous around others' },
              { left: 'generous', right: 'likes giving to others' },
              { left: 'stubborn', right: 'doesn\'t change their mind' },
            ],
          },
          {
            type: 'multiple-choice',
            question: '"She always helps other people. She is very ___."',
            options: ['kind', 'lazy', 'selfish', 'rude'],
            correct: 0,
            explanation:
              'Someone who "always helps other people" is "kind" — caring and helpful.',
          },
          {
            type: 'fill-blank',
            question: 'He never does his homework. He is really ___.',
            answer: 'lazy',
            hint: 'Someone who avoids work or effort.',
            explanation:
              '"Lazy" describes someone who doesn\'t like to work or make effort.',
          },
          {
            type: 'translation',
            question: 'A minha irmã é muito simpática e divertida.',
            answer: [
              'My sister is very friendly and fun',
              'My sister is very nice and fun',
              'My sister is very friendly and funny',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Simpática" = friendly/nice. "Divertida" = fun/funny.',
            explanation:
              '"Simpática" can be "friendly" or "nice". "Divertida" can be "fun" or "funny".',
          },
          {
            type: 'true-false',
            statement: '"Sensitive" in English means the same as "sensível" in Portuguese.',
            correct: true,
            explanation:
              'Yes! "Sensitive" means "sensível" — someone who feels emotions deeply. Be careful: "sensible" means "sensato" (practical, reasonable).',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['is', 'honest', 'He', 'very', 'and', 'hardworking'],
            correct: 'He is very honest and hardworking',
            explanation:
              '"Honest" means truthful. "Hardworking" means dedicated to work.',
          },
          {
            type: 'multiple-choice',
            question: '"My boss gets angry very easily. He is quite ___."',
            options: ['bad-tempered', 'easy-going', 'patient', 'cheerful'],
            correct: 0,
            explanation:
              '"Bad-tempered" describes someone who gets angry easily. The opposite would be "easy-going" or "patient".',
          },
          {
            type: 'listening',
            sentence: 'She is really confident and always speaks in front of large groups.',
            question: 'What personality trait does she have?',
            hint: 'She is not afraid of public speaking.',
            explanation:
              '"Confident" means she believes in herself and is not afraid or shy.',
          },
        ],
      },
      {
        id: 'a2-mx3-l3',
        title: "What's he like? vs What does he look like?",
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'Someone asks: "What does your teacher look like?" What kind of answer do they expect?',
            options: [
              'A description of physical appearance',
              'A description of personality',
              'Information about hobbies',
              'Information about the job',
            ],
            correct: 0,
            explanation:
              '"What does he/she LOOK LIKE?" asks about physical appearance (tall, short, blonde, etc.).',
          },
          {
            type: 'multiple-choice',
            question:
              'Someone asks: "What\'s your teacher like?" What kind of answer do they expect?',
            options: [
              'A description of personality or general character',
              'A description of physical appearance only',
              'Information about their address',
              'Their favourite food',
            ],
            correct: 0,
            explanation:
              '"What\'s he/she LIKE?" asks about personality and character (kind, funny, strict, etc.).',
          },
          {
            type: 'fill-blank',
            question: 'A: "What does Maria ___?" B: "She\'s tall with dark hair."',
            answer: 'look like',
            hint: 'The answer describes physical appearance.',
            explanation:
              'Since the answer describes appearance, the question must be "What does Maria look like?"',
          },
          {
            type: 'translation',
            question: 'Como é a tua mãe? (personalidade)',
            answer: [
              "What's your mother like?",
              'What is your mother like?',
              "What's your mum like?",
              'What is your mum like?',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'For personality, use "What is ... like?"',
            explanation:
              '"Como é?" asking about personality = "What\'s ... like?" For appearance it would be "What does ... look like?"',
          },
          {
            type: 'true-false',
            statement:
              '"What\'s he like?" and "What does he look like?" have the same meaning.',
            correct: false,
            explanation:
              'No! "What\'s he like?" asks about personality. "What does he look like?" asks about physical appearance.',
          },
          {
            type: 'matching',
            question: 'Match the question with the appropriate answer:',
            pairs: [
              { left: "What's she like?", right: "She's very kind and patient." },
              { left: 'What does she look like?', right: "She's tall with brown eyes." },
              { left: 'What does he like?', right: 'He likes football and music.' },
              { left: "What's he look like?", right: "He's short with a beard." },
            ],
          },
          {
            type: 'listening',
            sentence: "What's your new neighbour like?",
            question: 'Is this question about appearance or personality?',
            hint: 'Notice there is no "look" in the question.',
            explanation:
              '"What\'s ... like?" (without "look") asks about personality and character, not appearance.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 4: Transport & Getting Around ─────────────────────────
  {
    id: 'a2-mx4',
    title: 'Transport & Getting Around',
    description:
      'Learn to talk about different types of transport, buy tickets, and give directions.',
    icon: '🚌',
    lessons: [
      {
        id: 'a2-mx4-l1',
        title: 'Types of Transport',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the transport with the correct preposition:',
            pairs: [
              { left: 'by', right: 'bus / train / car' },
              { left: 'on', right: 'foot' },
              { left: 'get on', right: 'a bus / a train' },
              { left: 'get in', right: 'a car / a taxi' },
            ],
          },
          {
            type: 'multiple-choice',
            question: '"I go to work ___ bus every day."',
            options: ['by', 'on', 'in', 'with'],
            correct: 0,
            explanation:
              'We use "by" before most transport: by bus, by car, by train, by plane. Exception: "on foot".',
          },
          {
            type: 'fill-blank',
            question: 'It takes about 20 minutes to get there ___ foot.',
            answer: 'on',
            hint: 'Walking uses a different preposition from vehicles.',
            explanation:
              'We say "on foot" (not "by foot"). "It takes 20 minutes on foot."',
          },
          {
            type: 'translation',
            question: 'Eu apanho o metro todos os dias.',
            answer: [
              'I take the metro every day',
              'I take the underground every day',
              'I take the subway every day',
              'I take the tube every day',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Apanhar" = to take (transport).',
            explanation:
              '"Apanho o metro" = "I take the metro/underground/subway". "Take" is used for catching public transport.',
          },
          {
            type: 'true-false',
            statement: 'We say "get in a bus" and "get in a train".',
            correct: false,
            explanation:
              'We say "get ON a bus" and "get ON a train" (large vehicles). We say "get IN a car" and "get IN a taxi" (small vehicles).',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['How', 'you', 'to', 'get', 'do', 'work', '?'],
            correct: 'How do you get to work?',
            explanation:
              '"How do you get to...?" is the standard question about transport to a place.',
          },
          {
            type: 'listening',
            sentence: 'I usually drive to work, but today I took the train because my car broke down.',
            question: 'Why did the person take the train today?',
            hint: 'Something happened to their car.',
            explanation:
              'The person took the train because their car "broke down" (stopped working).',
          },
        ],
      },
      {
        id: 'a2-mx4-l2',
        title: 'Buying Tickets & Timetables',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"I\'d like a ___ ticket to London, please." (going and coming back)',
            options: ['return', 'single', 'one-way', 'first'],
            correct: 0,
            explanation:
              'A "return" ticket means going there AND coming back. A "single" ticket is one way only.',
          },
          {
            type: 'fill-blank',
            question: 'What time does the next train ___?',
            answer: 'leave',
            hint: 'When a train starts its journey from the station.',
            explanation:
              '"What time does the train leave?" or "depart?" are common questions about timetables.',
          },
          {
            type: 'translation',
            question: 'Quanto custa um bilhete de ida e volta?',
            answer: [
              'How much is a return ticket?',
              'How much does a return ticket cost?',
              'How much is a round trip ticket?',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Ida e volta" = return / round trip.',
            explanation:
              '"Bilhete de ida e volta" = "return ticket" (British) or "round trip ticket" (American).',
          },
          {
            type: 'matching',
            question: 'Match the vocabulary with the correct definition:',
            pairs: [
              { left: 'platform', right: 'where you wait for the train' },
              { left: 'single ticket', right: 'one-way journey' },
              { left: 'delay', right: 'the train is late' },
              { left: 'fare', right: 'the price of the ticket' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order to buy a ticket:',
            words: ['Two', 'to', 'return', 'tickets', 'please', 'Manchester', ','],
            correct: 'Two return tickets to Manchester, please',
            explanation:
              'A polite way to buy tickets: "Two return tickets to Manchester, please."',
          },
          {
            type: 'true-false',
            statement: '"The train is due at 3:15" means the train is expected to arrive at 3:15.',
            correct: true,
            explanation:
              '"Due at" means "expected at / scheduled for". The train should arrive at 3:15.',
          },
          {
            type: 'listening',
            sentence: 'The 10:30 train to Birmingham has been delayed by approximately 15 minutes.',
            question: 'Is the train on time?',
            hint: 'Listen for the word "delayed".',
            explanation:
              'The train is delayed (late) by about 15 minutes. It will arrive at approximately 10:45.',
          },
          {
            type: 'fill-blank',
            question: 'Which ___ does the train to Oxford leave from?',
            answer: 'platform',
            hint: 'The place at the station where you stand to catch the train.',
            explanation:
              '"Platform" is the raised area at a train station where passengers board: "Which platform?"',
          },
        ],
      },
      {
        id: 'a2-mx4-l3',
        title: 'Giving & Following Directions',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"___ left at the traffic lights."',
            options: ['Turn', 'Go', 'Walk', 'Cross'],
            correct: 0,
            explanation:
              'We say "turn left" or "turn right" when changing direction at a point.',
          },
          {
            type: 'matching',
            question: 'Match the direction phrase with its meaning:',
            pairs: [
              { left: 'go straight on', right: 'continue forward' },
              { left: 'turn right', right: 'change direction to the right' },
              { left: 'go past the church', right: 'pass the church and continue' },
              { left: "it's on your left", right: 'the destination is to your left side' },
            ],
          },
          {
            type: 'fill-blank',
            question: 'Go ___ on for about 200 metres, then turn left.',
            answer: 'straight',
            hint: 'Continue without turning.',
            explanation:
              '"Go straight on" means continue forward without turning.',
          },
          {
            type: 'translation',
            question: 'Com licença, sabe onde fica o hospital?',
            answer: [
              'Excuse me, do you know where the hospital is?',
              'Excuse me, do you know where the hospital is',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Com licença" = Excuse me. "Sabe onde fica" = do you know where ... is.',
            explanation:
              '"Com licença, sabe onde fica...?" = "Excuse me, do you know where ... is?"',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['Take', 'first', 'the', 'right', 'turning', 'on', 'the'],
            correct: 'Take the first turning on the right',
            explanation:
              '"Take the first turning on the right" is a common way to give directions.',
          },
          {
            type: 'true-false',
            statement: '"It\'s opposite the bank" means it is next to the bank.',
            correct: false,
            explanation:
              '"Opposite" means on the other side — facing the bank, not next to it. "Next to" means beside.',
          },
          {
            type: 'listening',
            sentence: 'Go straight on, then take the second turning on the left. The supermarket is on your right, opposite the park.',
            question: 'Where is the supermarket?',
            hint: 'The supermarket is near the park.',
            explanation:
              'The supermarket is on the right side, opposite (facing) the park, after taking the second left.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 5: Health & Doctor ────────────────────────────────────
  {
    id: 'a2-mx5',
    title: 'Health & Doctor',
    description:
      'Learn to describe symptoms, visit the doctor, and give health advice.',
    icon: '🏥',
    lessons: [
      {
        id: 'a2-mx5-l1',
        title: 'Symptoms',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the symptom with its Portuguese translation:',
            pairs: [
              { left: 'headache', right: 'dor de cabeça' },
              { left: 'cough', right: 'tosse' },
              { left: 'fever', right: 'febre' },
              { left: 'sore throat', right: 'dor de garganta' },
            ],
          },
          {
            type: 'multiple-choice',
            question: '"I have a terrible ___. My nose is blocked."',
            options: ['cold', 'headache', 'backache', 'cut'],
            correct: 0,
            explanation:
              'A "cold" typically involves a blocked or runny nose, sneezing, and sometimes a sore throat.',
          },
          {
            type: 'fill-blank',
            question: 'I have a ___ — my temperature is 39 degrees.',
            answer: 'fever',
            hint: 'A high body temperature.',
            explanation:
              'A "fever" means your body temperature is higher than normal (above 37-38°C).',
          },
          {
            type: 'translation',
            question: 'Dói-me o estômago.',
            answer: [
              'My stomach hurts',
              'I have a stomachache',
              'I have a stomach ache',
              'I have stomach pain',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Dói-me" = hurts / I have a pain in.',
            explanation:
              '"Dói-me o estômago" can be "My stomach hurts" or "I have a stomachache."',
          },
          {
            type: 'true-false',
            statement: 'In English, we say "I have headache" without "a".',
            correct: false,
            explanation:
              'We need the article: "I have A headache", "I have A cold", "I have A cough". But: "I have flu" (no article) is also acceptable.',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['been', 'feeling', 'I', 'dizzy', 'have', 'all', 'day'],
            correct: 'I have been feeling dizzy all day',
            explanation:
              '"Dizzy" means feeling like the room is spinning. "I have been feeling dizzy all day."',
          },
          {
            type: 'listening',
            sentence: "I've had a terrible cough for three days and I can't sleep at night.",
            question: 'How long has the person had the cough?',
            hint: 'Listen for the number of days.',
            explanation:
              'The person has had a cough "for three days" and it is affecting their sleep at night.',
          },
          {
            type: 'multiple-choice',
            question: '"My back really ___. I think I need to see a doctor."',
            options: ['hurts', 'aches', 'pains', 'sores'],
            correct: 0,
            explanation:
              '"Hurts" is the verb: "My back hurts." We can also say "My back aches" but "hurts" is more common.',
          },
        ],
      },
      {
        id: 'a2-mx5-l2',
        title: 'At the Pharmacy / Doctor',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'At the pharmacy, you ask: "Do you have anything for a ___?"',
            options: ['headache', 'head', 'hurt', 'pain head'],
            correct: 0,
            explanation:
              '"Do you have anything for a headache?" is a common way to ask for medicine at a pharmacy.',
          },
          {
            type: 'fill-blank',
            question: 'Take two ___ after meals, three times a day.',
            answer: 'tablets',
            hint: 'Small round pieces of medicine you swallow.',
            explanation:
              '"Tablets" (or "pills") are solid pieces of medicine. "Take two tablets three times a day."',
          },
          {
            type: 'translation',
            question: 'Preciso de marcar uma consulta com o médico.',
            answer: [
              'I need to make an appointment with the doctor',
              'I need to book an appointment with the doctor',
              'I need to schedule an appointment with the doctor',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Marcar uma consulta" = make/book an appointment.',
            explanation:
              '"Marcar uma consulta" = "make an appointment" or "book an appointment".',
          },
          {
            type: 'matching',
            question: 'Match the medical word with its meaning:',
            pairs: [
              { left: 'prescription', right: 'a note from the doctor for medicine' },
              { left: 'appointment', right: 'a scheduled meeting with the doctor' },
              { left: 'pharmacy', right: 'a shop that sells medicine' },
              { left: 'symptoms', right: 'signs that you are ill' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['I', 'an', 'make', 'like', 'would', 'appointment', 'to', 'please'],
            correct: 'I would like to make an appointment please',
            explanation:
              '"I would like to make an appointment" is a polite way to book a visit to the doctor.',
          },
          {
            type: 'true-false',
            statement:
              'In the UK, a "GP" is a General Practitioner — a family doctor.',
            correct: true,
            explanation:
              'Yes! A "GP" (General Practitioner) is the standard family doctor in the UK health system.',
          },
          {
            type: 'listening',
            sentence: 'Take this medicine twice a day with food. If the symptoms don\'t improve in three days, come back and see me.',
            question: 'How often should the patient take the medicine?',
            hint: 'Listen for how many times per day.',
            explanation:
              'The doctor says "twice a day" (two times per day) with food.',
          },
        ],
      },
      {
        id: 'a2-mx5-l3',
        title: 'Advice with Should / Shouldn\'t',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"You ___ go to bed early if you\'re tired."',
            options: ['should', 'shouldn\'t', 'must', 'can'],
            correct: 0,
            explanation:
              '"Should" is used for advice. Going to bed early when tired is good advice.',
          },
          {
            type: 'fill-blank',
            question: 'You ___ eat so much sugar. It\'s bad for your teeth.',
            answer: "shouldn't",
            hint: 'This is negative advice — something to avoid.',
            explanation:
              '"Shouldn\'t" gives negative advice — things it is better NOT to do.',
          },
          {
            type: 'translation',
            question: 'Devias beber mais água.',
            answer: [
              'You should drink more water',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Devias" = should.',
            explanation:
              '"Devias" = "you should". "Beber mais água" = "drink more water".',
          },
          {
            type: 'true-false',
            statement: 'After "should", we use the infinitive without "to" (e.g., "You should rest").',
            correct: true,
            explanation:
              'Yes! "Should" is a modal verb followed by the base form: "You should rest" (not "You should to rest").',
          },
          {
            type: 'matching',
            question: 'Match the problem with the advice:',
            pairs: [
              { left: 'I have a headache.', right: 'You should take some paracetamol.' },
              { left: 'I have a sore throat.', right: 'You should drink warm tea with honey.' },
              { left: "I can't sleep.", right: 'You shouldn\'t use your phone in bed.' },
              { left: 'I feel stressed.', right: 'You should try to relax and exercise.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['think', 'you', 'I', 'see', 'should', 'a', 'doctor'],
            correct: 'I think you should see a doctor',
            explanation:
              '"I think you should..." is a polite way to give advice.',
          },
          {
            type: 'multiple-choice',
            question: '"You look ill. You ___ be at work. Go home and rest."',
            options: ["shouldn't", 'should', "wouldn't", "couldn't"],
            correct: 0,
            explanation:
              '"You shouldn\'t be at work" = it is not a good idea for you to be at work when you are ill.',
          },
          {
            type: 'listening',
            sentence: 'You should get more sleep and you shouldn\'t drink so much coffee before bed.',
            question: 'What two pieces of advice does the speaker give?',
            hint: 'One is positive advice, one is negative.',
            explanation:
              'Positive advice: "get more sleep". Negative advice: "don\'t drink so much coffee before bed".',
          },
        ],
      },
    ],
  },

  // ─── MODULE 6: Adverbs & Frequency ────────────────────────────────
  {
    id: 'a2-mx6',
    title: 'Adverbs & Frequency',
    description:
      'Learn how to use frequency adverbs and adverbs of manner to describe how and how often.',
    icon: '📊',
    lessons: [
      {
        id: 'a2-mx6-l1',
        title: 'Always / Usually / Sometimes / Never',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Put the adverbs in order from most frequent to least frequent:',
            options: [
              'always, usually, sometimes, never',
              'never, sometimes, usually, always',
              'always, sometimes, usually, never',
              'usually, always, sometimes, never',
            ],
            correct: 0,
            explanation:
              'The correct order from 100% to 0% is: always (100%), usually (80%), sometimes (50%), never (0%).',
          },
          {
            type: 'fill-blank',
            question: 'She ___ drinks coffee in the morning. She does it every single day.',
            answer: 'always',
            hint: '100% of the time.',
            explanation:
              '"Every single day" = 100% of the time = "always".',
          },
          {
            type: 'true-false',
            statement:
              'Frequency adverbs usually go AFTER the main verb: "I go always to the gym."',
            correct: false,
            explanation:
              'Frequency adverbs go BEFORE the main verb: "I always go to the gym." But AFTER "be": "She is always late."',
          },
          {
            type: 'translation',
            question: 'Eu nunca como carne.',
            answer: [
              'I never eat meat',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Nunca" = never. Remember word order!',
            explanation:
              '"Nunca" = "never". It goes before the main verb: "I never eat meat."',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['usually', 'We', 'dinner', 'at', 'have', '7', 'o\'clock'],
            correct: "We usually have dinner at 7 o'clock",
            explanation:
              'The adverb "usually" goes before the main verb "have": "We usually have dinner..."',
          },
          {
            type: 'matching',
            question: 'Match the frequency adverb with the approximate percentage:',
            pairs: [
              { left: 'always', right: '100%' },
              { left: 'often', right: '70-80%' },
              { left: 'sometimes', right: '40-50%' },
              { left: 'hardly ever', right: '5-10%' },
            ],
          },
          {
            type: 'multiple-choice',
            question: '"He is ___ late for class. It happens almost every day."',
            options: ['always', 'never', 'rarely', 'hardly ever'],
            correct: 0,
            explanation:
              '"Almost every day" suggests very high frequency, so "always" is the best fit.',
          },
          {
            type: 'listening',
            sentence: 'I sometimes go to the cinema at the weekend, but I usually stay at home.',
            question: 'What does the person do more often — go to the cinema or stay at home?',
            hint: 'Compare "sometimes" with "usually".',
            explanation:
              '"Usually" (80%) is more frequent than "sometimes" (50%), so the person stays at home more often.',
          },
        ],
      },
      {
        id: 'a2-mx6-l2',
        title: 'Adverbs of Manner',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'How do we usually form adverbs of manner from adjectives?',
            options: [
              'Add -ly to the adjective',
              'Add -ing to the adjective',
              'Add -ed to the adjective',
              'Add -ness to the adjective',
            ],
            correct: 0,
            explanation:
              'Most adverbs of manner are formed by adding -ly: slow → slowly, careful → carefully, quick → quickly.',
          },
          {
            type: 'fill-blank',
            question: 'Please drive ___. The road is wet. (careful)',
            answer: 'carefully',
            hint: 'Add -ly to "careful".',
            explanation:
              '"Careful" becomes "carefully". Adverbs describe HOW an action is done.',
          },
          {
            type: 'true-false',
            statement: 'The adverb form of "good" is "goodly".',
            correct: false,
            explanation:
              '"Good" is an adjective. Its adverb form is "well" (irregular): "She sings well" (not "goodly").',
          },
          {
            type: 'translation',
            question: 'Ele fala inglês fluentemente.',
            answer: [
              'He speaks English fluently',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Fluentemente" = fluently.',
            explanation:
              '"Fluentemente" = "fluently". The adverb goes after the object: "He speaks English fluently."',
          },
          {
            type: 'matching',
            question: 'Match the adjective with its adverb form:',
            pairs: [
              { left: 'quick', right: 'quickly' },
              { left: 'good', right: 'well' },
              { left: 'hard', right: 'hard' },
              { left: 'easy', right: 'easily' },
            ],
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['the', 'She', 'quietly', 'closed', 'door'],
            correct: 'She quietly closed the door',
            explanation:
              'The adverb "quietly" can go before the verb: "She quietly closed the door" or after: "She closed the door quietly." Both are correct.',
          },
          {
            type: 'multiple-choice',
            question: '"He works very ___." Which is correct?',
            options: ['hard', 'hardly', 'harder', 'harden'],
            correct: 0,
            explanation:
              '"Hard" is both an adjective and an adverb. "Hardly" means "almost not" — a completely different meaning!',
          },
          {
            type: 'fill-blank',
            question: 'The children were playing ___ in the garden. (happy)',
            answer: 'happily',
            hint: 'For adjectives ending in -y, change -y to -ily.',
            explanation:
              '"Happy" ends in -y, so we change it to -ily: "happily". The children were playing happily.',
          },
        ],
      },
      {
        id: 'a2-mx6-l3',
        title: 'Position of Adverbs in Sentences',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Where do frequency adverbs go with the verb "to be"?',
            options: [
              'After the verb "to be"',
              'Before the verb "to be"',
              'At the end of the sentence',
              'At the beginning of the sentence only',
            ],
            correct: 0,
            explanation:
              'Frequency adverbs go AFTER "be": "She is always happy." But BEFORE other verbs: "She always smiles."',
          },
          {
            type: 'fill-blank',
            question: 'He ___ ___ late for meetings. (is / always)',
            answer: 'is always',
            hint: 'With "be", the adverb comes after.',
            explanation:
              'With the verb "be", the adverb comes after: "He is always late."',
          },
          {
            type: 'true-false',
            statement:
              'Adverbs of manner usually go at the end of the sentence, after the verb or object.',
            correct: true,
            explanation:
              'Yes! Adverbs of manner typically go at the end: "She spoke clearly." "He drove the car carefully."',
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['always', 'She', 'is', 'polite', 'very'],
            correct: 'She is always very polite',
            explanation:
              'With "be", the adverb goes after: "She is always very polite."',
          },
          {
            type: 'translation',
            question: 'Ele raramente chega atrasado.',
            answer: [
              'He rarely arrives late',
              'He rarely is late',
              'He is rarely late',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Raramente" = rarely. Place it before the main verb.',
            explanation:
              '"Raramente" = "rarely". Before main verbs: "He rarely arrives late." After "be": "He is rarely late."',
          },
          {
            type: 'matching',
            question: 'Match the adverb with its correct position rule:',
            pairs: [
              { left: 'always, usually, never', right: 'before main verb / after "be"' },
              { left: 'carefully, slowly, well', right: 'end of sentence (after verb/object)' },
              { left: 'yesterday, today, now', right: 'beginning or end of sentence' },
              { left: 'very, really, quite', right: 'before the adjective/adverb they modify' },
            ],
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence has the correct adverb position?',
            options: [
              'I often go to the park.',
              'I go often to the park.',
              'Often I go the park to.',
              'I go to often the park.',
            ],
            correct: 0,
            explanation:
              'Frequency adverbs go before the main verb: "I often go to the park."',
          },
          {
            type: 'listening',
            sentence: 'She always wakes up early and she is never late for school.',
            question: 'Where are the adverbs placed in this sentence?',
            hint: 'Notice the difference between "always wakes" and "is never".',
            explanation:
              '"Always" comes before the main verb "wakes". "Never" comes after the verb "is". This shows both position rules.',
          },
        ],
      },
    ],
  },
]
