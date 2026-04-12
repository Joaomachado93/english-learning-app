import { extraModules } from './extraCourses.js'
import { megaA1Modules } from './megaA1.js'
import { megaA2Modules } from './megaA2.js'
import { megaB1Modules } from './megaB1.js'
import { megaB2Modules } from './megaB2.js'
import { megaC1Modules } from './megaC1.js'

const baseCourses = [
  {
    id: 'a1',
    level: 'A1',
    title: 'Beginner',
    subtitle: 'First steps in English',
    color: '#22c55e',
    icon: '🌱',
    modules: [
      {
        id: 'a1-m1',
        title: 'Greetings & Introductions',
        description: 'Say hello and introduce yourself',
        icon: '👋',
        lessons: [
          {
            id: 'a1-m1-l1',
            title: 'Hello & Goodbye',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'What is the correct way to greet someone in the morning?',
                options: ['Good morning', 'Good night', 'Goodbye', 'See you later'],
                correct: 0,
                explanation: '"Good morning" is used to greet someone from sunrise until noon.'
              },
              {
                type: 'multiple-choice',
                question: 'Which is an informal way to say "Hello"?',
                options: ['Good evening', 'Greetings', 'Hi', 'Farewell'],
                correct: 2,
                explanation: '"Hi" is a casual, informal greeting used with friends and acquaintances.'
              },
              {
                type: 'fill-blank',
                question: 'Nice to ___ you!',
                answer: 'meet',
                hint: 'When you see someone for the first time',
                explanation: '"Nice to meet you" is the standard phrase when being introduced to someone.'
              },
              {
                type: 'fill-blank',
                question: 'How ___ you?',
                answer: 'are',
                hint: 'A common question after greeting',
                explanation: '"How are you?" is the most common way to ask about someone\'s well-being.'
              },
              {
                type: 'multiple-choice',
                question: 'What does "See you later" mean?',
                options: ['I can see you', 'Goodbye (informal)', 'Look at me', 'I will watch you'],
                correct: 1,
                explanation: '"See you later" is an informal way to say goodbye, implying you\'ll meet again.'
              },
              {
                type: 'matching',
                question: 'Match the greeting with its meaning:',
                pairs: [
                  { left: 'Good morning', right: 'Before noon' },
                  { left: 'Good afternoon', right: '12pm - 6pm' },
                  { left: 'Good evening', right: 'After 6pm' },
                  { left: 'Good night', right: 'Before sleeping' }
                ]
              },
              {
                type: 'multiple-choice',
                question: 'Someone says "How are you?". Which is a natural response?',
                options: ['I am have good', 'I\'m fine, thanks!', 'Yes, I am', 'How are you'],
                correct: 1,
                explanation: '"I\'m fine, thanks" or "I\'m good, thank you" are natural responses.'
              },
              {
                type: 'fill-blank',
                question: 'Good ___, see you tomorrow!',
                answer: 'night',
                hint: 'Said when leaving in the evening or before bed',
                explanation: '"Good night" is used when parting in the evening or before going to sleep.'
              }
            ]
          },
          {
            id: 'a1-m1-l2',
            title: 'What\'s Your Name?',
            type: 'conversation',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'How do you ask someone their name formally?',
                options: ['What\'s your name?', 'You name?', 'Name please?', 'Tell your name'],
                correct: 0,
                explanation: '"What\'s your name?" is the standard way to ask someone their name.'
              },
              {
                type: 'fill-blank',
                question: 'My name ___ João.',
                answer: 'is',
                hint: 'The verb "to be"',
                explanation: 'We use "is" with "my name" because it\'s third person singular.'
              },
              {
                type: 'reorder',
                question: 'Put the words in the correct order:',
                words: ['I', 'am', 'from', 'Portugal'],
                correct: 'I am from Portugal',
                explanation: 'The correct word order in English is Subject + Verb + Preposition + Place.'
              },
              {
                type: 'multiple-choice',
                question: 'Which is correct? "I ___ 25 years old."',
                options: ['have', 'am', 'is', 'has'],
                correct: 1,
                explanation: 'In English we say "I am 25 years old" (not "I have 25 years" like in Portuguese).'
              },
              {
                type: 'fill-blank',
                question: 'Where ___ you from?',
                answer: 'are',
                hint: 'The verb "to be" with "you"',
                explanation: '"Where are you from?" is how we ask about someone\'s origin.'
              },
              {
                type: 'reorder',
                question: 'Put the words in the correct order:',
                words: ['is', 'What', 'your', 'phone', 'number', '?'],
                correct: 'What is your phone number ?',
                explanation: 'Questions with "What" follow: What + verb + rest of sentence?'
              },
              {
                type: 'multiple-choice',
                question: '"I\'m pleased to meet you" is used when...',
                options: ['You are happy', 'You meet someone new', 'You leave a place', 'You are angry'],
                correct: 1,
                explanation: '"Pleased to meet you" is a polite phrase used upon first introduction.'
              },
              {
                type: 'fill-blank',
                question: 'I ___ a student.',
                answer: 'am',
                hint: 'The verb "to be" with "I"',
                explanation: '"I am" is the first person form of "to be". We often contract it to "I\'m".'
              }
            ]
          },
          {
            id: 'a1-m1-l3',
            title: 'Countries & Nationalities',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Someone from Portugal is...',
                options: ['Portugish', 'Portuguese', 'Portugalian', 'Portugese'],
                correct: 1,
                explanation: 'The correct nationality adjective is "Portuguese".'
              },
              {
                type: 'matching',
                question: 'Match the country with the nationality:',
                pairs: [
                  { left: 'Brazil', right: 'Brazilian' },
                  { left: 'Spain', right: 'Spanish' },
                  { left: 'France', right: 'French' },
                  { left: 'Germany', right: 'German' }
                ]
              },
              {
                type: 'fill-blank',
                question: 'She is from England. She is ___.',
                answer: 'English',
                hint: 'The nationality of England',
                explanation: 'People from England are "English". People from the UK are "British".'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: ['I am Portugues', 'I am Portuguese', 'I am a Portuguese person from Portugal', 'I Portuguese'],
                correct: 1,
                explanation: '"I am Portuguese" - we use "am" + nationality without an article.'
              },
              {
                type: 'fill-blank',
                question: 'He is from Japan. He is ___.',
                answer: 'Japanese',
                hint: 'Add -ese to Japan',
                explanation: 'The nationality for Japan is "Japanese".'
              },
              {
                type: 'multiple-choice',
                question: 'People from the United States are called...',
                options: ['United Statians', 'Americans', 'US people', 'Uniteds'],
                correct: 1,
                explanation: 'People from the United States are called "Americans".'
              },
              {
                type: 'reorder',
                question: 'Put the words in the correct order:',
                words: ['speaks', 'She', 'French', 'and', 'English'],
                correct: 'She speaks French and English',
                explanation: 'Subject + verb + languages connected with "and".'
              },
              {
                type: 'fill-blank',
                question: 'They are from Italy. They are ___.',
                answer: 'Italian',
                hint: 'The nationality of Italy',
                explanation: 'The nationality for Italy is "Italian".'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-m2',
        title: 'Numbers & Time',
        description: 'Count, tell the time, and talk about dates',
        icon: '🔢',
        lessons: [
          {
            id: 'a1-m2-l1',
            title: 'Numbers 1-100',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'How do you write "13" in English?',
                options: ['Thirteen', 'Threeteen', 'Tirteen', 'Threeten'],
                correct: 0,
                explanation: 'Thirteen - note the irregular spelling, not "threeteen".'
              },
              {
                type: 'fill-blank',
                question: 'Twenty, thirty, ___, fifty',
                answer: 'forty',
                hint: 'The number after 30',
                explanation: '"Forty" (not "fourty") - this is a common spelling mistake!'
              },
              {
                type: 'multiple-choice',
                question: 'Which number is "seventy-eight"?',
                options: ['68', '87', '78', '77'],
                correct: 2,
                explanation: 'Seventy (70) + eight (8) = 78.'
              },
              {
                type: 'fill-blank',
                question: 'The number after ninety-nine is one ___.',
                answer: 'hundred',
                hint: '100 = one ___',
                explanation: '100 is "one hundred" in English.'
              },
              {
                type: 'multiple-choice',
                question: 'How do you say "0" in English?',
                options: ['Only "zero"', 'Zero, oh, nil, or nought', 'Cero', 'Null'],
                correct: 1,
                explanation: '"Zero" is most common, "oh" is used in phone numbers, "nil" in sports.'
              },
              {
                type: 'reorder',
                question: 'Write this number in words: 56',
                words: ['fifty', 'six', '-'],
                correct: 'fifty - six',
                explanation: '56 = fifty-six. Numbers 21-99 use a hyphen.'
              },
              {
                type: 'fill-blank',
                question: 'Eleven, ___, thirteen, fourteen',
                answer: 'twelve',
                hint: 'The number 12',
                explanation: 'Twelve (12) - another irregular number spelling.'
              },
              {
                type: 'multiple-choice',
                question: 'What is "15" in words?',
                options: ['Fiveteen', 'Fifthteen', 'Fifteen', 'Fivteen'],
                correct: 2,
                explanation: 'Fifteen - the "five" changes to "fif" before "-teen".'
              }
            ]
          },
          {
            id: 'a1-m2-l2',
            title: 'Telling the Time',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'How do you say 3:00?',
                options: ['It\'s three hours', 'It\'s three o\'clock', 'The time is three', 'Three of the clock'],
                correct: 1,
                explanation: 'We say "It\'s three o\'clock" for exact hours.'
              },
              {
                type: 'fill-blank',
                question: '3:30 = It\'s half ___ three.',
                answer: 'past',
                hint: '30 minutes after the hour',
                explanation: '"Half past" means 30 minutes after the hour.'
              },
              {
                type: 'multiple-choice',
                question: 'What time is 2:15?',
                options: ['Quarter past two', 'Quarter to two', 'Two and quarter', 'Fifteen two'],
                correct: 0,
                explanation: '2:15 = "quarter past two" (15 minutes after 2).'
              },
              {
                type: 'multiple-choice',
                question: 'What time is 4:45?',
                options: ['Quarter past four', 'Quarter past five', 'Quarter to five', 'Quarter to four'],
                correct: 2,
                explanation: '4:45 = "quarter to five" (15 minutes before 5).'
              },
              {
                type: 'fill-blank',
                question: 'What ___ is it?',
                answer: 'time',
                hint: 'The question to ask about the clock',
                explanation: '"What time is it?" is how we ask about the current time.'
              },
              {
                type: 'multiple-choice',
                question: '12:00 during the day is...',
                options: ['Midnight', 'Midday/Noon', 'Twelve clock', 'Half day'],
                correct: 1,
                explanation: '12:00 PM = midday or noon. 12:00 AM = midnight.'
              },
              {
                type: 'fill-blank',
                question: '10:10 = It\'s ten ___ ten.',
                answer: 'past',
                hint: '10 minutes after 10',
                explanation: 'For minutes after the hour (up to 30), we use "past".'
              },
              {
                type: 'reorder',
                question: 'Put in order to ask the time:',
                words: ['What', 'time', 'is', 'it', '?'],
                correct: 'What time is it ?',
                explanation: '"What time is it?" - standard question word order.'
              }
            ]
          },
          {
            id: 'a1-m2-l3',
            title: 'Days & Months',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which day comes after Wednesday?',
                options: ['Tuesday', 'Thursday', 'Friday', 'Monday'],
                correct: 1,
                explanation: 'The order is: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'
              },
              {
                type: 'fill-blank',
                question: 'The weekend days are Saturday and ___.',
                answer: 'Sunday',
                hint: 'The last day of the week',
                explanation: 'The weekend consists of Saturday and Sunday.'
              },
              {
                type: 'matching',
                question: 'Match the month with its number:',
                pairs: [
                  { left: 'January', right: '1st month' },
                  { left: 'March', right: '3rd month' },
                  { left: 'August', right: '8th month' },
                  { left: 'December', right: '12th month' }
                ]
              },
              {
                type: 'multiple-choice',
                question: 'In English, days and months are written with...',
                options: ['lowercase', 'UPPERCASE', 'Capital first letter', 'Any way'],
                correct: 2,
                explanation: 'Days and months always start with a capital letter in English.'
              },
              {
                type: 'fill-blank',
                question: 'My birthday is ___ July.',
                answer: 'in',
                hint: 'The preposition used with months',
                explanation: 'We use "in" with months: in January, in July, in December.'
              },
              {
                type: 'multiple-choice',
                question: 'Which preposition is used with days?',
                options: ['in Monday', 'at Monday', 'on Monday', 'to Monday'],
                correct: 2,
                explanation: 'We use "on" with specific days: on Monday, on Friday, on Christmas Day.'
              },
              {
                type: 'fill-blank',
                question: 'I have English class ___ Tuesdays.',
                answer: 'on',
                hint: 'Preposition for days of the week',
                explanation: '"On" is used with days of the week, both singular and plural.'
              },
              {
                type: 'reorder',
                question: 'Put in order:',
                words: ['My', 'birthday', 'is', 'on', 'March', '15th'],
                correct: 'My birthday is on March 15th',
                explanation: 'We use "on" with specific dates: on March 15th.'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-m3',
        title: 'Everyday Life',
        description: 'Talk about your daily routine and activities',
        icon: '🏠',
        lessons: [
          {
            id: 'a1-m3-l1',
            title: 'My Daily Routine',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ up at 7 o\'clock every morning.',
                options: ['wake', 'stand', 'open', 'rise'],
                correct: 0,
                explanation: '"Wake up" means to stop sleeping. "I wake up at 7" is a daily routine.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['I', 'breakfast', 'have', 'at', '8', 'o\'clock'],
                correct: 'I have breakfast at 8 o\'clock',
                explanation: 'Subject + verb + object + time.'
              },
              {
                type: 'fill-blank',
                question: 'I take a ___ every morning.',
                answer: 'shower',
                hint: 'Washing yourself under running water',
                explanation: '"Take a shower" is the common expression (take a bath = in a bathtub).'
              },
              {
                type: 'matching',
                question: 'Match the action with the time of day:',
                pairs: [
                  { left: 'Wake up', right: 'Morning' },
                  { left: 'Have lunch', right: 'Midday' },
                  { left: 'Have dinner', right: 'Evening' },
                  { left: 'Go to bed', right: 'Night' }
                ]
              },
              {
                type: 'multiple-choice',
                question: '"I brush my ___" - what do you brush in the morning?',
                options: ['hair and teeth', 'hands and face', 'clothes', 'shoes'],
                correct: 0,
                explanation: 'We "brush our teeth" and "brush our hair" as part of daily hygiene.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ to work by bus.',
                answer: 'goes',
                hint: 'The verb "go" with she/he',
                explanation: '"Goes" - third person singular adds -es to "go".'
              },
              {
                type: 'multiple-choice',
                question: 'Which is correct for a routine?',
                options: ['I am eating lunch at 1pm every day', 'I eat lunch at 1pm every day', 'I eating lunch at 1pm', 'I eats lunch at 1pm'],
                correct: 1,
                explanation: 'For routines and habits, we use the Present Simple: "I eat", not "I am eating".'
              },
              {
                type: 'fill-blank',
                question: 'I ___ to bed at 11pm.',
                answer: 'go',
                hint: 'The verb for moving to bed',
                explanation: '"Go to bed" means to prepare to sleep.'
              }
            ]
          },
          {
            id: 'a1-m3-l2',
            title: 'Food & Drinks',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Which is a drink?',
                options: ['Bread', 'Rice', 'Orange juice', 'Chicken'],
                correct: 2,
                explanation: 'Orange juice is a drink/beverage. The others are foods.'
              },
              {
                type: 'fill-blank',
                question: 'Can I have a ___ of water, please?',
                answer: 'glass',
                hint: 'A container for drinking water',
                explanation: '"A glass of water" - we use "glass" as the container for water.'
              },
              {
                type: 'matching',
                question: 'Match the meal with what you typically eat:',
                pairs: [
                  { left: 'Breakfast', right: 'Toast and cereal' },
                  { left: 'Lunch', right: 'Sandwich or salad' },
                  { left: 'Dinner', right: 'Meat and vegetables' },
                  { left: 'Snack', right: 'Fruit or biscuit' }
                ]
              },
              {
                type: 'multiple-choice',
                question: '"I\'d like a coffee, please" means...',
                options: ['I like coffee', 'I want a coffee (polite)', 'I don\'t want coffee', 'I have coffee'],
                correct: 1,
                explanation: '"I\'d like" (I would like) is a polite way to order or request something.'
              },
              {
                type: 'fill-blank',
                question: 'I\'m hungry. Let\'s ___ something.',
                answer: 'eat',
                hint: 'What you do with food',
                explanation: '"Let\'s eat" means "shall we eat" - a suggestion.'
              },
              {
                type: 'multiple-choice',
                question: 'What is the correct question in a restaurant?',
                options: ['I want the menu', 'Give me food', 'Could I see the menu, please?', 'Food list please'],
                correct: 2,
                explanation: '"Could I see the menu, please?" is polite and natural in a restaurant.'
              },
              {
                type: 'fill-blank',
                question: 'Would you like some ___ with your pasta?',
                answer: 'cheese',
                hint: 'A dairy product often added to pasta',
                explanation: '"Would you like some cheese?" - offering food politely.'
              },
              {
                type: 'reorder',
                question: 'Order these words to make a sentence:',
                words: ['like', 'would', 'I', 'a', 'tea', 'please', ','],
                correct: 'I would like a tea , please',
                explanation: '"I would like a tea, please" - polite way to order.'
              }
            ]
          },
          {
            id: 'a1-m3-l3',
            title: 'Family Members',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'Your mother\'s mother is your...',
                options: ['Aunt', 'Grandmother', 'Sister', 'Mother-in-law'],
                correct: 1,
                explanation: 'Your mother\'s (or father\'s) mother is your grandmother.'
              },
              {
                type: 'matching',
                question: 'Match the family relationship:',
                pairs: [
                  { left: 'Father\'s brother', right: 'Uncle' },
                  { left: 'Mother\'s sister', right: 'Aunt' },
                  { left: 'Uncle\'s child', right: 'Cousin' },
                  { left: 'Brother\'s daughter', right: 'Niece' }
                ]
              },
              {
                type: 'fill-blank',
                question: 'I have two ___: one brother and one sister.',
                answer: 'siblings',
                hint: 'A word that means brothers and sisters',
                explanation: '"Siblings" is the word for brothers and sisters together.'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is correct?',
                options: ['I have 2 brothers', 'I have 2 brother', 'I has 2 brothers', 'I am have 2 brothers'],
                correct: 0,
                explanation: '"I have 2 brothers" - "have" with "I" and plural "brothers".'
              },
              {
                type: 'fill-blank',
                question: 'My father\'s wife is my ___.',
                answer: 'mother',
                hint: 'The female parent',
                explanation: 'Your father\'s wife is your mother (or stepmother if not biological).'
              },
              {
                type: 'multiple-choice',
                question: 'The opposite of "husband" is...',
                options: ['Brother', 'Father', 'Wife', 'Girlfriend'],
                correct: 2,
                explanation: 'Husband (male spouse) and wife (female spouse) are opposites.'
              },
              {
                type: 'fill-blank',
                question: 'My sister\'s son is my ___.',
                answer: 'nephew',
                hint: 'The male child of your sibling',
                explanation: 'Nephew (male) / Niece (female) = your sibling\'s children.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['has', 'My', 'family', 'five', 'members'],
                correct: 'My family has five members',
                explanation: '"My family has five members" - "family" takes "has" (3rd person).'
              }
            ]
          }
        ]
      },
      {
        id: 'a1-m4',
        title: 'Present Simple',
        description: 'Master the most important English tense',
        icon: '📝',
        lessons: [
          {
            id: 'a1-m4-l1',
            title: 'Positive Sentences',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'She ___ English every day.',
                options: ['study', 'studies', 'studys', 'studying'],
                correct: 1,
                explanation: 'With he/she/it, verbs ending in -y change to -ies: study → studies.'
              },
              {
                type: 'fill-blank',
                question: 'He ___ football on Saturdays.',
                answer: 'plays',
                hint: 'The verb "play" with he',
                explanation: 'With he/she/it, add -s: play → plays.'
              },
              {
                type: 'multiple-choice',
                question: 'Which is correct?',
                options: ['They goes to school', 'They go to school', 'They going to school', 'They is go to school'],
                correct: 1,
                explanation: 'With they/we/I/you, the verb stays in base form: "They go".'
              },
              {
                type: 'fill-blank',
                question: 'My dog ___ a lot of water.',
                answer: 'drinks',
                hint: '"drink" + s for he/she/it',
                explanation: '"My dog" = it, so we add -s: drinks.'
              },
              {
                type: 'reorder',
                question: 'Make a correct sentence:',
                words: ['works', 'She', 'in', 'a', 'hospital'],
                correct: 'She works in a hospital',
                explanation: 'Subject + verb(+s) + place.'
              },
              {
                type: 'multiple-choice',
                question: 'I ___ coffee every morning.',
                options: ['drinks', 'drink', 'am drink', 'drinking'],
                correct: 1,
                explanation: 'With "I", use the base form: "I drink" (no -s).'
              },
              {
                type: 'fill-blank',
                question: 'The bus ___ at 8 o\'clock.',
                answer: 'arrives',
                hint: '"arrive" with the bus (it)',
                explanation: '"The bus" = it, so: arrives.'
              },
              {
                type: 'multiple-choice',
                question: 'He ___ to the gym three times a week.',
                options: ['go', 'goes', 'gos', 'goez'],
                correct: 1,
                explanation: '"Go" with he/she/it becomes "goes" (add -es after -o).'
              }
            ]
          },
          {
            id: 'a1-m4-l2',
            title: 'Negative & Questions',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ like spicy food.',
                options: ['no', 'not', 'don\'t', 'doesn\'t'],
                correct: 2,
                explanation: 'With I/you/we/they, use "don\'t" (do not) for negatives.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ speak French.',
                answer: 'doesn\'t',
                hint: 'Negative with she/he/it',
                explanation: 'With he/she/it, use "doesn\'t" (does not). The main verb stays base form.'
              },
              {
                type: 'multiple-choice',
                question: '___ you like pizza?',
                options: ['Does', 'Do', 'Are', 'Is'],
                correct: 1,
                explanation: 'Questions with you/I/we/they use "Do": "Do you like pizza?"'
              },
              {
                type: 'multiple-choice',
                question: '___ she work here?',
                options: ['Do', 'Does', 'Is', 'Are'],
                correct: 1,
                explanation: 'Questions with he/she/it use "Does": "Does she work here?"'
              },
              {
                type: 'fill-blank',
                question: 'They ___ eat meat. They are vegetarian.',
                answer: 'don\'t',
                hint: 'Negative with they',
                explanation: '"They don\'t eat meat" - "don\'t" for I/you/we/they.'
              },
              {
                type: 'reorder',
                question: 'Make a question:',
                words: ['Do', 'you', 'speak', 'English', '?'],
                correct: 'Do you speak English ?',
                explanation: 'Yes/No questions: Do/Does + subject + base verb?'
              },
              {
                type: 'multiple-choice',
                question: '"He doesn\'t likes coffee" - is this correct?',
                options: ['Yes, it\'s correct', 'No, it should be "He doesn\'t like coffee"', 'No, it should be "He don\'t like coffee"', 'No, it should be "He not likes coffee"'],
                correct: 1,
                explanation: 'After "doesn\'t", the verb is always base form: "doesn\'t like" (not "likes").'
              },
              {
                type: 'fill-blank',
                question: 'Where ___ you live?',
                answer: 'do',
                hint: 'Question word + auxiliary + subject + verb',
                explanation: 'WH-questions: Where + do + you + verb? = "Where do you live?"'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'a2',
    level: 'A2',
    title: 'Elementary',
    subtitle: 'Build your foundations',
    color: '#3b82f6',
    icon: '📘',
    modules: [
      {
        id: 'a2-m1',
        title: 'Past Simple',
        description: 'Talk about things that happened in the past',
        icon: '⏮️',
        lessons: [
          {
            id: 'a2-m1-l1',
            title: 'Regular Verbs',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ TV last night.',
                options: ['watch', 'watched', 'watching', 'watches'],
                correct: 1,
                explanation: 'Regular past simple: add -ed to the base verb. Watch → watched.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ her homework yesterday.',
                answer: 'finished',
                hint: 'Past tense of "finish"',
                explanation: 'Finish → finished. Add -ed to regular verbs.'
              },
              {
                type: 'multiple-choice',
                question: 'How do you form the past of "study"?',
                options: ['studyed', 'studied', 'studyed', 'studed'],
                correct: 1,
                explanation: 'Verbs ending in consonant + y: change y to i, add -ed. Study → studied.'
              },
              {
                type: 'fill-blank',
                question: 'We ___ to the beach last summer.',
                answer: 'travelled',
                hint: 'Past tense of "travel"',
                explanation: 'Travel → travelled (double the l before -ed in British English).'
              },
              {
                type: 'multiple-choice',
                question: 'The past of "stop" is...',
                options: ['stoped', 'stopped', 'stopd', 'stopping'],
                correct: 1,
                explanation: 'Short verbs ending in consonant-vowel-consonant double the last letter: stopped.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['played', 'We', 'football', 'yesterday'],
                correct: 'We played football yesterday',
                explanation: 'Subject + past verb + object + time expression.'
              },
              {
                type: 'fill-blank',
                question: 'They ___ in London for two years.',
                answer: 'lived',
                hint: 'Past of "live"',
                explanation: 'Live → lived (add -d when verb already ends in -e).'
              },
              {
                type: 'multiple-choice',
                question: 'Which time expression is used with Past Simple?',
                options: ['every day', 'right now', 'yesterday', 'tomorrow'],
                correct: 2,
                explanation: 'Past Simple uses: yesterday, last week/month/year, ago, in 2020, etc.'
              }
            ]
          },
          {
            id: 'a2-m1-l2',
            title: 'Irregular Verbs',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'The past of "go" is...',
                options: ['goed', 'went', 'gone', 'going'],
                correct: 1,
                explanation: 'Go → went (irregular). You must memorize irregular past forms.'
              },
              {
                type: 'fill-blank',
                question: 'I ___ a great book last week.',
                answer: 'read',
                hint: 'Past of "read" (it looks the same but sounds different!)',
                explanation: 'Read → read (same spelling, but pronounced "red" in the past).'
              },
              {
                type: 'matching',
                question: 'Match the verb with its past form:',
                pairs: [
                  { left: 'eat', right: 'ate' },
                  { left: 'drink', right: 'drank' },
                  { left: 'see', right: 'saw' },
                  { left: 'buy', right: 'bought' }
                ]
              },
              {
                type: 'fill-blank',
                question: 'She ___ me a message this morning.',
                answer: 'sent',
                hint: 'Past of "send"',
                explanation: 'Send → sent (irregular verb).'
              },
              {
                type: 'multiple-choice',
                question: 'We ___ to a restaurant last Friday.',
                options: ['go', 'goed', 'went', 'gone'],
                correct: 2,
                explanation: 'Go → went. This is one of the most common irregular verbs.'
              },
              {
                type: 'fill-blank',
                question: 'He ___ the answer to the question.',
                answer: 'knew',
                hint: 'Past of "know"',
                explanation: 'Know → knew (irregular).'
              },
              {
                type: 'multiple-choice',
                question: 'I ___ my keys at home.',
                options: ['forgot', 'forgetted', 'forgeted', 'forgotted'],
                correct: 0,
                explanation: 'Forget → forgot (irregular). Never add -ed to irregular verbs.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['took', 'She', 'a', 'photo', 'of', 'the', 'sunset'],
                correct: 'She took a photo of the sunset',
                explanation: 'Take → took. Subject + past verb + object.'
              }
            ]
          },
          {
            id: 'a2-m1-l3',
            title: 'Past Simple Negatives & Questions',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ go to the party last night.',
                options: ['don\'t', 'didn\'t', 'doesn\'t', 'wasn\'t'],
                correct: 1,
                explanation: 'Past negative uses "didn\'t" (did not) + base verb for all subjects.'
              },
              {
                type: 'fill-blank',
                question: '___ you enjoy the film?',
                answer: 'Did',
                hint: 'Past question auxiliary',
                explanation: 'Past questions: Did + subject + base verb? "Did you enjoy?"'
              },
              {
                type: 'multiple-choice',
                question: '"She didn\'t went" - is this correct?',
                options: ['Yes', 'No, it should be "She didn\'t go"', 'No, it should be "She don\'t went"', 'No, it should be "She not went"'],
                correct: 1,
                explanation: 'After "didn\'t", always use base form: "She didn\'t go" (not "went").'
              },
              {
                type: 'fill-blank',
                question: 'We didn\'t ___ any homework yesterday.',
                answer: 'have',
                hint: 'Base form of the verb (not "had")',
                explanation: 'After didn\'t, use the base form: "didn\'t have" (not "didn\'t had").'
              },
              {
                type: 'reorder',
                question: 'Make a question:',
                words: ['did', 'Where', 'you', 'go', 'on', 'holiday', '?'],
                correct: 'Where did you go on holiday ?',
                explanation: 'WH-questions in past: Where + did + subject + base verb?'
              },
              {
                type: 'multiple-choice',
                question: '___ it rain yesterday?',
                options: ['Do', 'Does', 'Did', 'Was'],
                correct: 2,
                explanation: '"Did" is used for all subjects in past simple questions.'
              },
              {
                type: 'fill-blank',
                question: 'He ___ come to school because he was sick.',
                answer: 'didn\'t',
                hint: 'Past negative',
                explanation: '"Didn\'t" + base verb for past negatives.'
              },
              {
                type: 'multiple-choice',
                question: 'What ___ you do last weekend?',
                options: ['do', 'did', 'does', 'done'],
                correct: 1,
                explanation: '"What did you do?" - past question with "did".'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-m2',
        title: 'Shopping & Money',
        description: 'Buy things, compare prices, and handle money',
        icon: '🛍️',
        lessons: [
          {
            id: 'a2-m2-l1',
            title: 'At the Shop',
            type: 'conversation',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'A shop assistant asks: "Can I ___ you?"',
                options: ['assist', 'help', 'aid', 'serve'],
                correct: 1,
                explanation: '"Can I help you?" is the standard greeting in a shop.'
              },
              {
                type: 'fill-blank',
                question: 'How ___ does this cost?',
                answer: 'much',
                hint: 'Asking about price',
                explanation: '"How much does this cost?" or "How much is this?" to ask about price.'
              },
              {
                type: 'multiple-choice',
                question: '"I\'m just looking, thanks" means...',
                options: ['I want to buy everything', 'I don\'t need help right now', 'I can\'t see well', 'I\'m lost'],
                correct: 1,
                explanation: '"I\'m just looking" politely tells the assistant you\'re browsing, not buying yet.'
              },
              {
                type: 'reorder',
                question: 'Make a polite request:',
                words: ['Could', 'I', 'try', 'this', 'on', 'please', '?'],
                correct: 'Could I try this on please ?',
                explanation: '"Could I try this on?" - asking to try clothes in a fitting room.'
              },
              {
                type: 'fill-blank',
                question: 'Do you have this in a ___ size?',
                answer: 'smaller',
                hint: 'Comparative of "small"',
                explanation: '"Do you have this in a smaller/larger size?" - common shopping phrase.'
              },
              {
                type: 'multiple-choice',
                question: '"It\'s on sale" means...',
                options: ['It\'s very expensive', 'It\'s at a reduced price', 'It\'s not available', 'It\'s new'],
                correct: 1,
                explanation: '"On sale" means the item has a discount/reduced price.'
              },
              {
                type: 'fill-blank',
                question: 'I\'ll pay by ___, please.',
                answer: 'card',
                hint: 'Not cash',
                explanation: '"Pay by card" (credit/debit card) or "pay in cash".'
              },
              {
                type: 'multiple-choice',
                question: 'Which is the polite way to say "I want this"?',
                options: ['Give me this', 'I want this', 'I\'ll take this one, please', 'This one for me'],
                correct: 2,
                explanation: '"I\'ll take this one, please" is the polite way to say you want to buy something.'
              }
            ]
          },
          {
            id: 'a2-m2-l2',
            title: 'Comparatives & Superlatives',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'This shirt is ___ than that one.',
                options: ['more cheap', 'cheaper', 'cheapest', 'most cheap'],
                correct: 1,
                explanation: 'Short adjectives (1 syllable): add -er. Cheap → cheaper.'
              },
              {
                type: 'fill-blank',
                question: 'This is the ___ restaurant in town.',
                answer: 'best',
                hint: 'Superlative of "good"',
                explanation: 'Good → better → best (irregular comparison).'
              },
              {
                type: 'multiple-choice',
                question: 'English is ___ than Chinese.',
                options: ['more easier', 'most easy', 'easier', 'more easy'],
                correct: 2,
                explanation: 'Easy → easier (y changes to i + -er for 2-syllable adjectives ending in -y).'
              },
              {
                type: 'fill-blank',
                question: 'This phone is ___ expensive than that one.',
                answer: 'more',
                hint: 'Long adjectives use ___ + adjective',
                explanation: 'Long adjectives (2+ syllables): "more expensive", not "expensiver".'
              },
              {
                type: 'matching',
                question: 'Match the adjective with its superlative:',
                pairs: [
                  { left: 'big', right: 'biggest' },
                  { left: 'beautiful', right: 'most beautiful' },
                  { left: 'bad', right: 'worst' },
                  { left: 'far', right: 'farthest' }
                ]
              },
              {
                type: 'multiple-choice',
                question: 'She is the ___ student in the class.',
                options: ['more intelligent', 'intelligentest', 'most intelligent', 'more intelligentest'],
                correct: 2,
                explanation: 'Long adjectives: "the most intelligent" (not "-est").'
              },
              {
                type: 'fill-blank',
                question: 'My house is ___ than yours.',
                answer: 'bigger',
                hint: 'Comparative of "big"',
                explanation: 'Big → bigger (double the consonant + -er).'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['is', 'This', 'the', 'most', 'beautiful', 'city', 'in', 'the', 'world'],
                correct: 'This is the most beautiful city in the world',
                explanation: 'Superlative structure: the + most + long adjective.'
              }
            ]
          }
        ]
      },
      {
        id: 'a2-m3',
        title: 'Future Plans',
        description: 'Talk about your plans and intentions',
        icon: '🔮',
        lessons: [
          {
            id: 'a2-m3-l1',
            title: 'Going to + Will',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ visit my grandmother next weekend. (planned)',
                options: ['will', 'am going to', 'go to', 'going'],
                correct: 1,
                explanation: '"Going to" is used for planned intentions: "I\'m going to visit..."'
              },
              {
                type: 'fill-blank',
                question: 'Look at those clouds! It ___ rain.',
                answer: 'is going to',
                hint: 'A prediction based on evidence',
                explanation: '"Going to" for predictions based on present evidence (you can see the clouds).'
              },
              {
                type: 'multiple-choice',
                question: '"I think it ___ be sunny tomorrow." (opinion/prediction)',
                options: ['is going to', 'will', 'going to', 'shall'],
                correct: 1,
                explanation: '"Will" for predictions based on opinion: "I think it will..."'
              },
              {
                type: 'fill-blank',
                question: 'Don\'t worry, I ___ help you.',
                answer: 'will',
                hint: 'A spontaneous decision/offer',
                explanation: '"Will" for spontaneous decisions and offers made at the moment of speaking.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['going', 'are', 'We', 'to', 'move', 'to', 'London'],
                correct: 'We are going to move to London',
                explanation: 'Subject + be + going to + base verb.'
              },
              {
                type: 'multiple-choice',
                question: 'The phone is ringing! I ___ answer it.',
                options: ['am going to', 'will', 'going to', 'am answer'],
                correct: 1,
                explanation: '"Will" for spontaneous decisions made right now.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ going to start a new job in September.',
                answer: 'is',
                hint: 'To be + going to',
                explanation: '"She is going to start..." - be + going to + base verb.'
              },
              {
                type: 'multiple-choice',
                question: 'I won\'t = ...',
                options: ['I will', 'I will not', 'I want not', 'I would not'],
                correct: 1,
                explanation: '"Won\'t" is the contraction of "will not".'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b1',
    level: 'B1',
    title: 'Intermediate',
    subtitle: 'Express yourself with confidence',
    color: '#a855f7',
    icon: '🚀',
    modules: [
      {
        id: 'b1-m1',
        title: 'Present Perfect',
        description: 'Connect the past to the present',
        icon: '🔗',
        lessons: [
          {
            id: 'b1-m1-l1',
            title: 'Have/Has + Past Participle',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ never been to Japan.',
                options: ['am', 'have', 'has', 'was'],
                correct: 1,
                explanation: 'Present Perfect: I/you/we/they + have + past participle.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ lived here since 2015.',
                answer: 'has',
                hint: 'Present Perfect with she',
                explanation: 'He/she/it + has + past participle.'
              },
              {
                type: 'multiple-choice',
                question: 'Which sentence is Present Perfect?',
                options: ['I went to Paris', 'I have been to Paris', 'I am going to Paris', 'I was in Paris'],
                correct: 1,
                explanation: '"Have been" = Present Perfect. It connects a past experience to now.'
              },
              {
                type: 'fill-blank',
                question: 'Have you ever ___ sushi?',
                answer: 'eaten',
                hint: 'Past participle of "eat"',
                explanation: 'Eat → ate (past) → eaten (past participle).'
              },
              {
                type: 'matching',
                question: 'Match the verb with its past participle:',
                pairs: [
                  { left: 'go', right: 'gone' },
                  { left: 'write', right: 'written' },
                  { left: 'break', right: 'broken' },
                  { left: 'speak', right: 'spoken' }
                ]
              },
              {
                type: 'multiple-choice',
                question: 'I have lived here ___ 5 years.',
                options: ['since', 'for', 'from', 'during'],
                correct: 1,
                explanation: '"For" + period of time (5 years, 3 months). "Since" + point in time (2020).'
              },
              {
                type: 'fill-blank',
                question: 'They have known each other ___ childhood.',
                answer: 'since',
                hint: 'Point in time, not duration',
                explanation: '"Since" + point in time: since childhood, since Monday, since 2010.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['Have', 'you', 'ever', 'visited', 'London', '?'],
                correct: 'Have you ever visited London ?',
                explanation: 'Present Perfect question: Have + subject + ever + past participle?'
              }
            ]
          },
          {
            id: 'b1-m1-l2',
            title: 'Present Perfect vs Past Simple',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'I ___ to Paris in 2019. (specific time)',
                options: ['have gone', 'have been', 'went', 'go'],
                correct: 2,
                explanation: 'Past Simple for specific past times: "in 2019", "yesterday", "last year".'
              },
              {
                type: 'multiple-choice',
                question: 'I ___ to Paris three times. (experience, no specific time)',
                options: ['went', 'have been', 'was', 'am going'],
                correct: 1,
                explanation: 'Present Perfect for life experiences without specific time.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ just arrived. (a moment ago)',
                answer: 'has',
                hint: 'Present Perfect with "just"',
                explanation: '"Just" + Present Perfect: "She has just arrived" (very recently).'
              },
              {
                type: 'multiple-choice',
                question: '"I\'ve already seen that film." When?',
                options: ['Last week exactly', 'We don\'t know the specific time', 'Tomorrow', 'Right now'],
                correct: 1,
                explanation: 'Present Perfect with "already" - the exact time is not important.'
              },
              {
                type: 'fill-blank',
                question: 'Have you finished your homework ___?',
                answer: 'yet',
                hint: 'Used in questions and negatives with Present Perfect',
                explanation: '"Yet" in questions: "Have you finished yet?" (= by now?)'
              },
              {
                type: 'multiple-choice',
                question: 'I haven\'t eaten anything ___.',
                options: ['already', 'just', 'yet', 'ever'],
                correct: 2,
                explanation: '"Yet" in negatives: "I haven\'t eaten yet" (= until now).'
              },
              {
                type: 'multiple-choice',
                question: 'Which is correct? "I lost my keys."',
                options: ['It means I found them now', 'It tells us about a past event', 'It means I still don\'t have them', 'It\'s Present Perfect'],
                correct: 1,
                explanation: '"I lost my keys" (Past Simple) = telling about the event. "I\'ve lost my keys" (Present Perfect) = I still don\'t have them now.'
              },
              {
                type: 'fill-blank',
                question: 'I ___ never seen snow before.',
                answer: 'have',
                hint: 'Present Perfect for experiences',
                explanation: '"I have never seen..." - Present Perfect for life experiences.'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-m2',
        title: 'Conditionals',
        description: 'If this, then that - talk about possibilities',
        icon: '🔀',
        lessons: [
          {
            id: 'b1-m2-l1',
            title: 'Zero & First Conditional',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'If you heat water to 100°C, it ___. (always true)',
                options: ['will boil', 'boils', 'would boil', 'boiled'],
                correct: 1,
                explanation: 'Zero conditional (facts): If + present, present. "If you heat water, it boils."'
              },
              {
                type: 'fill-blank',
                question: 'If it ___ tomorrow, I\'ll stay home.',
                answer: 'rains',
                hint: 'First conditional: If + present, will + verb',
                explanation: 'First conditional: If + present simple, will + base verb.'
              },
              {
                type: 'multiple-choice',
                question: 'If I pass the exam, I ___ celebrate.',
                options: ['celebrate', 'would celebrate', 'will celebrate', 'celebrated'],
                correct: 2,
                explanation: 'First conditional: If + present, will + verb. For real/likely situations.'
              },
              {
                type: 'fill-blank',
                question: 'I\'ll call you if I ___ late.',
                answer: 'am',
                hint: 'Present simple in the if-clause',
                explanation: 'The if-clause uses present simple, even for future meaning.'
              },
              {
                type: 'multiple-choice',
                question: 'Which uses a Zero Conditional correctly?',
                options: ['If I will study, I pass', 'If you mix blue and yellow, you get green', 'If I studied, I would pass', 'If it rained, I stay home'],
                correct: 1,
                explanation: 'Zero conditional: If + present, present. For universal truths and facts.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['If', 'you', 'study', 'hard', ',', 'you', 'will', 'pass'],
                correct: 'If you study hard , you will pass',
                explanation: 'First conditional: If + subject + present verb, subject + will + verb.'
              },
              {
                type: 'fill-blank',
                question: 'If she doesn\'t hurry, she ___ miss the bus.',
                answer: 'will',
                hint: 'Result clause of first conditional',
                explanation: 'First conditional: "If she doesn\'t hurry, she will miss the bus."'
              },
              {
                type: 'multiple-choice',
                question: '"Unless" means...',
                options: ['if', 'if not', 'when', 'because'],
                correct: 1,
                explanation: '"Unless" = "if not". "Unless it rains" = "If it doesn\'t rain".'
              }
            ]
          },
          {
            id: 'b1-m2-l2',
            title: 'Second Conditional',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'If I ___ rich, I would travel the world.',
                options: ['am', 'was/were', 'will be', 'have been'],
                correct: 1,
                explanation: 'Second conditional: If + past simple, would + verb. For unreal/unlikely situations.'
              },
              {
                type: 'fill-blank',
                question: 'If I won the lottery, I ___ buy a house.',
                answer: 'would',
                hint: 'Result of an unlikely situation',
                explanation: 'Second conditional: If + past, would + base verb.'
              },
              {
                type: 'multiple-choice',
                question: 'When do we use the second conditional?',
                options: ['For real future situations', 'For imaginary/unlikely situations', 'For past events', 'For facts'],
                correct: 1,
                explanation: 'Second conditional = hypothetical, imaginary, or unlikely situations.'
              },
              {
                type: 'fill-blank',
                question: 'If I ___ you, I would apologize.',
                answer: 'were',
                hint: 'Special form of "be" in second conditional',
                explanation: '"If I were you" (not "was") is the formal/correct form in conditionals.'
              },
              {
                type: 'multiple-choice',
                question: '"What would you do if you could fly?"',
                options: ['First conditional', 'Second conditional', 'Zero conditional', 'Past tense question'],
                correct: 1,
                explanation: 'Second conditional: imaginary situation (humans can\'t fly).'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['would', 'If', 'I', 'had', 'time', ',', 'I', 'learn', 'Japanese'],
                correct: 'If I had time , I would learn Japanese',
                explanation: 'If + subject + past verb, subject + would + base verb.'
              },
              {
                type: 'fill-blank',
                question: 'She ___ be happy if she got the job.',
                answer: 'would',
                hint: 'The modal verb for second conditional results',
                explanation: '"Would" is always used in the result clause of second conditionals.'
              },
              {
                type: 'multiple-choice',
                question: '"I wouldn\'t do that if I were you." This is...',
                options: ['A command', 'Advice using second conditional', 'A fact', 'A question'],
                correct: 1,
                explanation: '"If I were you, I would/wouldn\'t..." is a common way to give advice.'
              }
            ]
          }
        ]
      },
      {
        id: 'b1-m3',
        title: 'Travel & Directions',
        description: 'Navigate, ask for help, and describe places',
        icon: '✈️',
        lessons: [
          {
            id: 'b1-m3-l1',
            title: 'At the Airport',
            type: 'conversation',
            exercises: [
              {
                type: 'multiple-choice',
                question: '"Where is the boarding gate?" - What does "boarding gate" mean?',
                options: ['Check-in counter', 'The door to the plane', 'Luggage claim', 'Passport control'],
                correct: 1,
                explanation: 'The boarding gate is where you wait and enter the plane.'
              },
              {
                type: 'fill-blank',
                question: 'I\'d like an ___ seat, please.',
                answer: 'aisle',
                hint: 'Not window - the one next to the corridor',
                explanation: 'An "aisle seat" is next to the walkway. A "window seat" is by the window.'
              },
              {
                type: 'multiple-choice',
                question: '"Is this a direct flight?" means...',
                options: ['Is it cheap?', 'Does it stop somewhere?', 'Does it go without stopping?', 'Is it fast?'],
                correct: 2,
                explanation: 'A "direct flight" goes from A to B without stopping. A "connecting flight" stops.'
              },
              {
                type: 'fill-blank',
                question: 'How much ___ can I take on the plane?',
                answer: 'luggage',
                hint: 'Another word for bags/suitcases',
                explanation: '"Luggage" (or "baggage") refers to your bags and suitcases.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['like', 'I\'d', 'to', 'check', 'in', 'for', 'my', 'flight'],
                correct: 'I\'d like to check in for my flight',
                explanation: '"I\'d like to check in" - polite way to start the check-in process.'
              },
              {
                type: 'multiple-choice',
                question: '"Carry-on" means...',
                options: ['Checked luggage', 'The bag you take in the cabin', 'A big suitcase', 'Airport transport'],
                correct: 1,
                explanation: '"Carry-on" is the small bag you take into the aircraft cabin.'
              },
              {
                type: 'fill-blank',
                question: 'The flight has been ___ by two hours.',
                answer: 'delayed',
                hint: 'The opposite of "on time"',
                explanation: '"Delayed" = late/postponed. "The flight has been delayed."'
              },
              {
                type: 'multiple-choice',
                question: '"Please fasten your seatbelt" - When do you hear this?',
                options: ['At check-in', 'At the gate', 'On the plane', 'At customs'],
                correct: 2,
                explanation: 'This announcement is made on the plane before takeoff and landing.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'b2',
    level: 'B2',
    title: 'Upper Intermediate',
    subtitle: 'Communicate with fluency',
    color: '#f59e0b',
    icon: '⭐',
    modules: [
      {
        id: 'b2-m1',
        title: 'Phrasal Verbs',
        description: 'Master the tricky multi-word verbs',
        icon: '🧩',
        lessons: [
          {
            id: 'b2-m1-l1',
            title: 'Common Phrasal Verbs',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: '"I need to figure ___ this problem."',
                options: ['up', 'in', 'out', 'on'],
                correct: 2,
                explanation: '"Figure out" = to solve or understand. "I need to figure out this problem."'
              },
              {
                type: 'fill-blank',
                question: 'Can you turn ___ the music? It\'s too loud.',
                answer: 'down',
                hint: 'Reduce the volume',
                explanation: '"Turn down" = reduce volume/intensity. "Turn up" = increase.'
              },
              {
                type: 'matching',
                question: 'Match the phrasal verb with its meaning:',
                pairs: [
                  { left: 'give up', right: 'stop trying' },
                  { left: 'look after', right: 'take care of' },
                  { left: 'put off', right: 'postpone' },
                  { left: 'run out of', right: 'have none left' }
                ]
              },
              {
                type: 'multiple-choice',
                question: '"She takes ___ her mother." (resemble)',
                options: ['after', 'on', 'up', 'in'],
                correct: 0,
                explanation: '"Take after" = resemble a family member. "She takes after her mother."'
              },
              {
                type: 'fill-blank',
                question: 'I\'m looking ___ to the weekend!',
                answer: 'forward',
                hint: 'Excited about something in the future',
                explanation: '"Look forward to" = be excited/eager about a future event.'
              },
              {
                type: 'multiple-choice',
                question: '"The meeting was called ___." (cancelled)',
                options: ['up', 'off', 'out', 'in'],
                correct: 1,
                explanation: '"Call off" = cancel. "The meeting was called off."'
              },
              {
                type: 'fill-blank',
                question: 'We need to come ___ with a solution.',
                answer: 'up',
                hint: 'To think of / create an idea',
                explanation: '"Come up with" = to think of or produce an idea or solution.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['need', 'I', 'to', 'catch', 'up', 'on', 'my', 'work'],
                correct: 'I need to catch up on my work',
                explanation: '"Catch up on" = to do something you\'ve fallen behind on.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-m2',
        title: 'Passive Voice',
        description: 'Describe processes and formal situations',
        icon: '🔄',
        lessons: [
          {
            id: 'b2-m2-l1',
            title: 'Active vs Passive',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: '"The book was written by J.K. Rowling." This is...',
                options: ['Active voice', 'Passive voice', 'Past Perfect', 'Future tense'],
                correct: 1,
                explanation: 'Passive: subject receives the action. "The book WAS WRITTEN by..."'
              },
              {
                type: 'fill-blank',
                question: 'English is ___ in many countries.',
                answer: 'spoken',
                hint: 'Past participle of "speak"',
                explanation: 'Passive present: is/are + past participle. "English is spoken..."'
              },
              {
                type: 'multiple-choice',
                question: 'Change to passive: "They built this bridge in 1990."',
                options: ['This bridge built in 1990', 'This bridge was built in 1990', 'This bridge is built in 1990', 'This bridge has built in 1990'],
                correct: 1,
                explanation: 'Past passive: was/were + past participle. "This bridge was built in 1990."'
              },
              {
                type: 'fill-blank',
                question: 'The report ___ been completed.',
                answer: 'has',
                hint: 'Present perfect passive',
                explanation: 'Present Perfect Passive: has/have + been + past participle.'
              },
              {
                type: 'multiple-choice',
                question: 'When do we use the passive?',
                options: ['Always in formal writing', 'When the action is more important than who did it', 'Only in the past', 'In questions only'],
                correct: 1,
                explanation: 'Passive is used when the action/result matters more than the doer.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order (passive):',
                words: ['was', 'The', 'painting', 'stolen', 'last', 'night'],
                correct: 'The painting was stolen last night',
                explanation: 'Subject + was/were + past participle + time expression.'
              },
              {
                type: 'fill-blank',
                question: 'New houses are ___ built every year.',
                answer: 'being',
                hint: 'Present continuous passive',
                explanation: 'Present continuous passive: is/are + being + past participle.'
              },
              {
                type: 'multiple-choice',
                question: '"The project will ___ finished by Friday."',
                options: ['been', 'be', 'being', 'is'],
                correct: 1,
                explanation: 'Future passive: will + be + past participle.'
              }
            ]
          }
        ]
      },
      {
        id: 'b2-m3',
        title: 'Idioms & Expressions',
        description: 'Sound more natural with common idioms',
        icon: '💬',
        lessons: [
          {
            id: 'b2-m3-l1',
            title: 'Business & Work Idioms',
            type: 'vocabulary',
            exercises: [
              {
                type: 'multiple-choice',
                question: '"Let\'s cut to the chase" means...',
                options: ['Let\'s run away', 'Let\'s get to the main point', 'Let\'s stop working', 'Let\'s be careful'],
                correct: 1,
                explanation: '"Cut to the chase" = get to the important point without wasting time.'
              },
              {
                type: 'fill-blank',
                question: 'It\'s not rocket ___. (It\'s not that difficult)',
                answer: 'science',
                hint: 'Something very complicated',
                explanation: '"It\'s not rocket science" = it\'s not that complicated or difficult.'
              },
              {
                type: 'matching',
                question: 'Match the idiom with its meaning:',
                pairs: [
                  { left: 'Break the ice', right: 'Start a conversation' },
                  { left: 'Hit the nail on the head', right: 'Be exactly right' },
                  { left: 'Under the weather', right: 'Feeling sick' },
                  { left: 'Piece of cake', right: 'Very easy' }
                ]
              },
              {
                type: 'multiple-choice',
                question: '"The ball is in your court" means...',
                options: ['You need to play tennis', 'It\'s your turn to decide/act', 'The situation is unfair', 'You lost the game'],
                correct: 1,
                explanation: '"The ball is in your court" = it\'s your turn to take action or decide.'
              },
              {
                type: 'fill-blank',
                question: 'We need to think outside the ___.',
                answer: 'box',
                hint: 'Be creative, think differently',
                explanation: '"Think outside the box" = think creatively, in an unconventional way.'
              },
              {
                type: 'multiple-choice',
                question: '"I\'m going to call it a day" means...',
                options: ['I\'m going to make a phone call', 'I\'m going to stop working for today', 'I\'m going to name the day', 'I\'m going to celebrate'],
                correct: 1,
                explanation: '"Call it a day" = stop working for today, enough for now.'
              },
              {
                type: 'fill-blank',
                question: 'Let\'s touch ___ next week about this project.',
                answer: 'base',
                hint: 'To briefly communicate/check in',
                explanation: '"Touch base" = to briefly make contact or communicate about something.'
              },
              {
                type: 'multiple-choice',
                question: '"On the same page" means...',
                options: ['Reading the same book', 'In agreement/understanding', 'At the same location', 'Having the same age'],
                correct: 1,
                explanation: '"On the same page" = having the same understanding or agreement.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'c1',
    level: 'C1',
    title: 'Advanced',
    subtitle: 'Refine and perfect your English',
    color: '#ef4444',
    icon: '🏆',
    modules: [
      {
        id: 'c1-m1',
        title: 'Advanced Grammar',
        description: 'Master complex sentence structures',
        icon: '🎓',
        lessons: [
          {
            id: 'c1-m1-l1',
            title: 'Third Conditional',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'If I ___ studied harder, I would have passed.',
                options: ['have', 'had', 'would', 'has'],
                correct: 1,
                explanation: 'Third conditional: If + had + past participle, would + have + past participle.'
              },
              {
                type: 'fill-blank',
                question: 'She would have come if you ___ invited her.',
                answer: 'had',
                hint: 'Past perfect in the if-clause',
                explanation: 'Third conditional: If + had + pp. "If you had invited her..."'
              },
              {
                type: 'multiple-choice',
                question: 'When do we use the third conditional?',
                options: ['For future possibilities', 'For present habits', 'For past situations that didn\'t happen', 'For giving advice'],
                correct: 2,
                explanation: 'Third conditional = imaginary past. Things that didn\'t happen but we imagine the result.'
              },
              {
                type: 'reorder',
                question: 'Put in the correct order:',
                words: ['had', 'If', 'I', 'known', ',', 'I', 'would', 'have', 'helped'],
                correct: 'If I had known , I would have helped',
                explanation: 'If + subject + had + past participle, subject + would + have + past participle.'
              },
              {
                type: 'fill-blank',
                question: 'I wouldn\'t have been late if the train ___ been on time.',
                answer: 'had',
                hint: 'The past perfect auxiliary',
                explanation: '"If the train had been on time" - third conditional if-clause.'
              },
              {
                type: 'multiple-choice',
                question: '"If I\'d known" is short for...',
                options: ['If I would known', 'If I had known', 'If I did known', 'If I have known'],
                correct: 1,
                explanation: '"I\'d" in if-clauses = "I had" (not "I would").'
              },
              {
                type: 'fill-blank',
                question: 'We would have ___ if we had more time.',
                answer: 'stayed',
                hint: 'Past participle of "stay"',
                explanation: '"Would have stayed" - the result clause with past participle.'
              },
              {
                type: 'multiple-choice',
                question: '"If only I had listened to my parents!"',
                options: ['I listened to them', 'I didn\'t listen to them (regret)', 'I will listen to them', 'I always listen to them'],
                correct: 1,
                explanation: '"If only + past perfect" expresses regret about a past action.'
              }
            ]
          },
          {
            id: 'c1-m1-l2',
            title: 'Reported Speech',
            type: 'grammar',
            exercises: [
              {
                type: 'multiple-choice',
                question: 'She said: "I am tired." → She said she ___ tired.',
                options: ['is', 'was', 'were', 'has been'],
                correct: 1,
                explanation: 'Reported speech: present "am" → past "was". Tenses shift back.'
              },
              {
                type: 'fill-blank',
                question: 'He said he ___ come tomorrow. (direct: "I will come tomorrow")',
                answer: 'would',
                hint: '"will" in reported speech becomes...',
                explanation: 'Will → would in reported speech.'
              },
              {
                type: 'matching',
                question: 'Match the tense change in reported speech:',
                pairs: [
                  { left: 'Present Simple', right: 'Past Simple' },
                  { left: 'Present Perfect', right: 'Past Perfect' },
                  { left: 'will', right: 'would' },
                  { left: 'can', right: 'could' }
                ]
              },
              {
                type: 'multiple-choice',
                question: '"Where do you live?" → She asked me where I ___.',
                options: ['live', 'lived', 'living', 'had lived'],
                correct: 1,
                explanation: 'Reported questions: no question mark, normal word order, tense shift back.'
              },
              {
                type: 'fill-blank',
                question: 'They told me they ___ already eaten. (direct: "We have already eaten")',
                answer: 'had',
                hint: 'Present perfect becomes...',
                explanation: 'Present Perfect "have eaten" → Past Perfect "had eaten" in reported speech.'
              },
              {
                type: 'multiple-choice',
                question: '"Don\'t touch that!" → She told me ___ touch that.',
                options: ['don\'t', 'to not', 'not to', 'didn\'t'],
                correct: 2,
                explanation: 'Reported commands/requests: told + object + not to + verb.'
              },
              {
                type: 'reorder',
                question: 'Report this: "Are you coming?" She asked:',
                words: ['She', 'asked', 'if', 'I', 'was', 'coming'],
                correct: 'She asked if I was coming',
                explanation: 'Yes/No reported questions use "if" or "whether".'
              },
              {
                type: 'fill-blank',
                question: 'He ___ me to help him.',
                answer: 'asked',
                hint: 'Reporting a request',
                explanation: '"He asked me to help him" - reporting requests: asked + person + to + verb.'
              }
            ]
          }
        ]
      }
    ]
  }
]

// Merge extra modules into base courses
export const courses = baseCourses.map(course => {
  const extra = extraModules[course.id] || []
  const pronunciation = extraModules[`_${course.id}_pronunciation`] || []
  const megaMap = { a1: megaA1Modules, a2: megaA2Modules, b1: megaB1Modules, b2: megaB2Modules, c1: megaC1Modules }
  const mega = megaMap[course.id] || []
  const allExtra = [...extra, ...pronunciation, ...mega]
  if (allExtra.length) {
    return { ...course, modules: [...course.modules, ...allExtra] }
  }
  return course
})

// Calculate total exercises and lessons for stats
export function getCourseStats(courseId) {
  const course = courses.find(c => c.id === courseId)
  if (!course) return { modules: 0, lessons: 0, exercises: 0 }

  let lessons = 0
  let exercises = 0
  for (const mod of course.modules) {
    lessons += mod.lessons.length
    for (const lesson of mod.lessons) {
      exercises += lesson.exercises.length
    }
  }
  return { modules: course.modules.length, lessons, exercises }
}

export function getAllLessons() {
  const all = []
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        all.push({ ...lesson, moduleId: mod.id, courseId: course.id })
      }
    }
  }
  return all
}

export function findLesson(lessonId) {
  for (const course of courses) {
    for (const mod of course.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.id === lessonId) {
          return { lesson, module: mod, course }
        }
      }
    }
  }
  return null
}

export function findModule(moduleId) {
  for (const course of courses) {
    for (const mod of course.modules) {
      if (mod.id === moduleId) {
        return { module: mod, course }
      }
    }
  }
  return null
}
