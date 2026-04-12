export const megaB1Modules = [
  // ─── MODULE 1: Used to & Would ───
  {
    id: 'b1-mx1',
    title: 'Used to & Would',
    description:
      'Master talking about past habits and states using "used to", "would", and "be/get used to".',
    icon: '⏪',
    lessons: [
      {
        id: 'b1-mx1-l1',
        title: 'Used to (past habits)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I ___ play football every weekend when I was a child.',
            options: ['used to', 'use to', 'was used to', 'would used to'],
            correct: 0,
            explanation:
              '"Used to" + base verb describes past habits or states that are no longer true. "I used to play" means I played regularly in the past but I don\'t anymore.',
          },
          {
            type: 'fill-blank',
            question: 'She ___ live in Porto, but now she lives in London.',
            answer: 'used to',
            hint: 'A structure for past states that are no longer true.',
            explanation:
              '"Used to" describes a past state (living in Porto) that has changed. It emphasises the contrast between then and now.',
          },
          {
            type: 'translation',
            question: 'Eu costumava andar de bicicleta para a escola.',
            answer: [
              'I used to ride my bike to school.',
              'I used to ride my bicycle to school.',
              'I used to cycle to school.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Costumava" translates to "used to".',
            explanation:
              'The Portuguese "costumava" maps directly to "used to" in English. "I used to ride my bike to school" describes a past habit.',
          },
          {
            type: 'true-false',
            statement:
              '"I used to have a dog" means I still have the dog now.',
            correct: false,
            explanation:
              '"Used to" always implies the situation has changed. If you "used to have a dog", it means you had one in the past but you don\'t have one anymore.',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['used', 'we', 'to', 'go', 'the', 'beach', 'every', 'summer', 'to'],
            correct: 'We used to go to the beach every summer.',
            explanation:
              'The structure is: Subject + used to + base verb. "We used to go to the beach every summer."',
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence is correct?',
            options: [
              'Did you used to smoke?',
              'Did you use to smoke?',
              'Did you used to smoking?',
              'Did you use to smoking?',
            ],
            correct: 1,
            explanation:
              'In questions with "did", we drop the -d from "used" because "did" already marks the past tense. The correct form is "Did you use to...?"',
          },
          {
            type: 'listening',
            sentence: 'My parents used to take us camping every July.',
            question: 'What did the parents used to do every July?',
            hint: 'Listen for the outdoor activity.',
            explanation:
              'The sentence says "My parents used to take us camping every July." The past habit was going camping.',
          },
          {
            type: 'matching',
            question: 'Match the beginnings with the correct endings.',
            pairs: [
              { left: 'I used to live', right: 'in a small village.' },
              { left: 'She used to work', right: 'as a nurse.' },
              { left: 'We used to walk', right: 'to school every day.' },
              { left: 'They used to eat', right: 'dinner at 6 pm.' },
            ],
          },
        ],
      },
      {
        id: 'b1-mx1-l2',
        title: 'Would for past habits',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'When I was young, my grandfather ___ tell me stories before bed.',
            options: ['would', 'used', 'will', 'could'],
            correct: 0,
            explanation:
              '"Would" can describe repeated past actions/habits. "My grandfather would tell me stories" means he did it regularly in the past.',
          },
          {
            type: 'true-false',
            statement:
              '"Would" can be used for past states, e.g. "I would live in Paris."',
            correct: false,
            explanation:
              '"Would" is only used for past repeated actions, NOT past states. For states (live, be, have, know), you must use "used to". "I used to live in Paris" is correct, not "I would live in Paris."',
          },
          {
            type: 'fill-blank',
            question:
              'Every Sunday, my grandmother ___ bake a chocolate cake for the family.',
            answer: 'would',
            hint: 'A modal verb used for repeated past actions.',
            explanation:
              '"Would" describes a repeated past action. Every Sunday = repeated. Baking = an action (not a state), so "would" works here.',
          },
          {
            type: 'multiple-choice',
            question:
              'Which sentence CANNOT use "would"?',
            options: [
              'I ___ play in the garden after school.',
              'She ___ have long hair when she was young.',
              'We ___ visit our cousins every Christmas.',
              'He ___ walk to work every morning.',
            ],
            correct: 1,
            explanation:
              '"Have long hair" is a state, not an action. "Would" cannot describe past states. You must say "She used to have long hair", not "She would have long hair."',
          },
          {
            type: 'translation',
            question: 'Quando era criança, eu brincava no parque todos os dias.',
            answer: [
              'When I was a child, I would play in the park every day.',
              'When I was a kid, I would play in the park every day.',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Use "would" for repeated past actions.',
            explanation:
              'The Portuguese imperfect "brincava" with a repeated action can be translated as "would play". The time context ("when I was a child") is established first.',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['would', 'in', 'summer', 'we', 'swim', 'the', 'river', 'every'],
            correct: 'Every summer we would swim in the river.',
            explanation:
              '"Would" + base verb for repeated past actions: "Every summer we would swim in the river."',
          },
          {
            type: 'listening',
            sentence:
              'When we were kids, we would spend hours playing by the lake.',
            question: 'Where would they play as kids?',
            hint: 'Listen for a body of water.',
            explanation:
              'The sentence says they "would spend hours playing by the lake." The answer is: by the lake.',
          },
        ],
      },
      {
        id: 'b1-mx1-l3',
        title: 'Used to vs Be used to vs Get used to',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'I ___ the cold weather now. I\'ve been living in Finland for three years.',
            options: [
              'am used to',
              'used to',
              'get used to',
              'would',
            ],
            correct: 0,
            explanation:
              '"Am used to" means you are accustomed to something NOW. After three years in Finland, the cold weather is normal for you.',
          },
          {
            type: 'fill-blank',
            question:
              'It took me a while, but I finally ___ driving on the left in England.',
            answer: 'got used to',
            hint: 'The process of becoming accustomed to something.',
            explanation:
              '"Got used to" describes the process of becoming accustomed to something new. "Finally" indicates the process was completed.',
          },
          {
            type: 'true-false',
            statement:
              '"Be used to" is followed by a verb in the -ing form or a noun.',
            correct: true,
            explanation:
              '"Be used to" is followed by -ing or a noun: "I am used to working late" / "I am used to the noise." It is NOT followed by the base verb.',
          },
          {
            type: 'matching',
            question: 'Match each sentence to the correct structure.',
            pairs: [
              { left: 'I ___ smoke (past habit)', right: 'used to' },
              { left: 'I ___ waking up early (accustomed now)', right: 'am used to' },
              { left: 'I\'m ___ the new schedule (becoming accustomed)', right: 'getting used to' },
              { left: 'She ___ drive to work (past habit)', right: 'used to' },
            ],
          },
          {
            type: 'translation',
            question: 'Eu estou a habituar-me a falar inglês todos os dias.',
            answer: [
              'I am getting used to speaking English every day.',
              "I'm getting used to speaking English every day.",
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Habituar-me a" = "getting used to".',
            explanation:
              '"Estar a habituar-se" translates to "be getting used to" (the process of becoming accustomed). It is followed by -ing: "speaking".',
          },
          {
            type: 'multiple-choice',
            question:
              'She can\'t ___ living in such a small apartment.',
            options: [
              'get used to',
              'used to',
              'would',
              'use to',
            ],
            correct: 0,
            explanation:
              '"Can\'t get used to" means she is unable to become accustomed to the small apartment. "Get used to" = the process of adapting.',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['used', 'she', 'is', 'to', 'working', 'from', 'home'],
            correct: 'She is used to working from home.',
            explanation:
              '"Be used to + -ing": "She is used to working from home" means she is accustomed to it.',
          },
          {
            type: 'listening',
            sentence:
              'I used to hate spicy food, but now I am used to eating it every day.',
            question: 'Does the speaker still hate spicy food?',
            hint: 'Pay attention to the contrast between past and present.',
            explanation:
              'No. "Used to hate" = past (no longer true). "Am used to eating it" = present (accustomed now). The speaker now eats spicy food regularly and is fine with it.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 2: Gerund vs Infinitive ───
  {
    id: 'b1-mx2',
    title: 'Gerund vs Infinitive',
    description:
      'Learn which verbs take -ing, which take "to", and which change meaning depending on the form.',
    icon: '🔀',
    lessons: [
      {
        id: 'b1-mx2-l1',
        title: 'Verbs + -ing (enjoy, avoid, finish, mind...)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I enjoy ___ to music while I work.',
            options: ['listening', 'to listen', 'listen', 'to listening'],
            correct: 0,
            explanation:
              '"Enjoy" is always followed by -ing. "I enjoy listening to music." You cannot say "I enjoy to listen."',
          },
          {
            type: 'fill-blank',
            question: 'She avoids ___ fast food during the week.',
            answer: 'eating',
            hint: '"Avoid" is followed by the -ing form.',
            explanation:
              '"Avoid" is always followed by a gerund (-ing). "She avoids eating fast food."',
          },
          {
            type: 'true-false',
            statement: '"I finished to do my homework" is correct English.',
            correct: false,
            explanation:
              '"Finish" is always followed by -ing, not "to". The correct sentence is "I finished doing my homework."',
          },
          {
            type: 'translation',
            question: 'Importas-te de fechar a janela?',
            answer: [
              'Do you mind closing the window?',
              'Would you mind closing the window?',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Importar-se" = "mind", followed by -ing.',
            explanation:
              '"Mind" is followed by -ing: "Do you mind closing the window?" This is a polite way to ask someone to do something.',
          },
          {
            type: 'matching',
            question: 'Match each verb with the correct gerund form.',
            pairs: [
              { left: 'enjoy', right: 'swimming' },
              { left: 'avoid', right: 'making mistakes' },
              { left: 'finish', right: 'writing the report' },
              { left: 'suggest', right: 'going to the cinema' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['mind', 'you', 'do', 'the', 'door', 'opening'],
            correct: 'Do you mind opening the door?',
            explanation:
              '"Mind" is followed by -ing: "Do you mind opening the door?"',
          },
          {
            type: 'multiple-choice',
            question: 'Which verb does NOT take -ing?',
            options: ['enjoy', 'want', 'avoid', 'suggest'],
            correct: 1,
            explanation:
              '"Want" takes the infinitive (to + verb): "I want to go." The other verbs (enjoy, avoid, suggest) all take -ing.',
          },
          {
            type: 'listening',
            sentence: 'I can\'t help feeling nervous before exams.',
            question: 'What can\'t the speaker help doing?',
            hint: '"Can\'t help" is followed by -ing.',
            explanation:
              '"Can\'t help + -ing" means you cannot stop yourself from doing something. The speaker can\'t help feeling nervous.',
          },
        ],
      },
      {
        id: 'b1-mx2-l2',
        title: 'Verbs + to (want, need, decide, hope...)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I decided ___ a new car.',
            options: ['to buy', 'buying', 'buy', 'to buying'],
            correct: 0,
            explanation:
              '"Decide" is always followed by "to" + base verb: "I decided to buy a new car."',
          },
          {
            type: 'fill-blank',
            question: 'We hope ___ you again soon.',
            answer: 'to see',
            hint: '"Hope" is followed by "to" + base verb.',
            explanation:
              '"Hope" takes the infinitive: "We hope to see you again soon."',
          },
          {
            type: 'translation',
            question: 'Ela prometeu ajudar-me com o projeto.',
            answer: [
              'She promised to help me with the project.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Prometeu" = "promised", followed by "to".',
            explanation:
              '"Promise" takes the infinitive: "She promised to help me with the project."',
          },
          {
            type: 'true-false',
            statement: '"I want going home" is correct English.',
            correct: false,
            explanation:
              '"Want" is always followed by "to" + base verb. The correct sentence is "I want to go home."',
          },
          {
            type: 'matching',
            question: 'Match each verb with its correct infinitive complement.',
            pairs: [
              { left: 'want', right: 'to travel' },
              { left: 'need', right: 'to study' },
              { left: 'decide', right: 'to leave' },
              { left: 'hope', right: 'to pass the exam' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['to', 'she', 'agreed', 'help', 'us', 'with', 'the', 'project'],
            correct: 'She agreed to help us with the project.',
            explanation:
              '"Agree" takes the infinitive: "She agreed to help us with the project."',
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence is correct?',
            options: [
              'He refused to answer the question.',
              'He refused answering the question.',
              'He refused answer the question.',
              'He refused to answering the question.',
            ],
            correct: 0,
            explanation:
              '"Refuse" is always followed by "to" + base verb: "He refused to answer the question."',
          },
          {
            type: 'listening',
            sentence: 'They plan to move to London next year.',
            question: 'What do they plan to do?',
            hint: '"Plan" is followed by "to" + verb.',
            explanation:
              '"Plan to" + base verb: "They plan to move to London next year."',
          },
        ],
      },
      {
        id: 'b1-mx2-l3',
        title: 'Verbs that change meaning (stop, remember, try, forget)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'I stopped ___ because the doctor told me to.',
            options: ['smoking', 'to smoke', 'smoke', 'to smoking'],
            correct: 0,
            explanation:
              '"Stop + -ing" means you quit doing something. "I stopped smoking" = I quit smoking. Compare: "I stopped to smoke" = I paused another activity in order to smoke.',
          },
          {
            type: 'multiple-choice',
            question:
              'On my way home, I stopped ___ some bread at the bakery.',
            options: ['to buy', 'buying', 'buy', 'to buying'],
            correct: 0,
            explanation:
              '"Stop + to" means you pause in order to do something else. "I stopped to buy bread" = I paused my journey to buy bread.',
          },
          {
            type: 'fill-blank',
            question:
              'I remember ___ the door before I left. I\'m sure it\'s locked.',
            answer: 'locking',
            hint: 'You have a memory of doing this action in the past.',
            explanation:
              '"Remember + -ing" means you have a memory of a past action. "I remember locking the door" = I have the memory of doing it.',
          },
          {
            type: 'true-false',
            statement:
              '"I tried to open the window" and "I tried opening the window" mean the same thing.',
            correct: false,
            explanation:
              '"Try to open" = you attempted to open it (maybe it was stuck). "Try opening" = you experimented with opening it as a solution to a problem (e.g., the room was hot).',
          },
          {
            type: 'translation',
            question: 'Eu esqueci-me de trancar a porta.',
            answer: [
              'I forgot to lock the door.',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'You didn\'t do the action because you forgot.',
            explanation:
              '"Forget + to" means you didn\'t do something because you forgot. "I forgot to lock the door" = the door is unlocked because I forgot.',
          },
          {
            type: 'matching',
            question: 'Match each sentence to its meaning.',
            pairs: [
              { left: 'She stopped talking.', right: 'She quit talking.' },
              { left: 'She stopped to talk.', right: 'She paused to have a conversation.' },
              { left: 'I remember meeting him.', right: 'I have the memory of meeting him.' },
              { left: 'I remembered to meet him.', right: 'I didn\'t forget — I went to meet him.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange to form: "He tried to fix the computer himself."',
            words: ['tried', 'the', 'he', 'to', 'fix', 'computer', 'himself'],
            correct: 'He tried to fix the computer himself.',
            explanation:
              '"Try to" + base verb = make an effort/attempt. "He tried to fix the computer himself."',
          },
          {
            type: 'listening',
            sentence:
              'I\'ll never forget visiting the Grand Canyon for the first time.',
            question: 'Has the speaker already visited the Grand Canyon?',
            hint: '"Forget + -ing" refers to a memory.',
            explanation:
              'Yes. "Forget + -ing" means you will always remember the experience. The speaker has already visited the Grand Canyon and will never forget that memory.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 3: Articles Masterclass ───
  {
    id: 'b1-mx3',
    title: 'Articles Masterclass',
    description:
      'Conquer English articles: a, an, the, and the zero article. Focused on common mistakes by Portuguese speakers.',
    icon: '📝',
    lessons: [
      {
        id: 'b1-mx3-l1',
        title: 'A vs An vs The',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I saw ___ interesting film last night.',
            options: ['an', 'a', 'the', 'no article'],
            correct: 0,
            explanation:
              'We use "an" before words that start with a vowel sound. "Interesting" starts with an /ɪ/ sound, so we say "an interesting film."',
          },
          {
            type: 'fill-blank',
            question: 'Can you pass me ___ salt, please?',
            answer: 'the',
            hint: 'You and the listener both know which salt you mean.',
            explanation:
              'We use "the" when both the speaker and listener know which specific thing is being referred to. The salt on the table is specific and shared knowledge.',
          },
          {
            type: 'true-false',
            statement: 'We say "an university" because "university" starts with a vowel letter.',
            correct: false,
            explanation:
              'We use "a" or "an" based on the SOUND, not the letter. "University" starts with a /juː/ sound (like "you"), which is a consonant sound. So we say "a university."',
          },
          {
            type: 'translation',
            question: 'O livro que te emprestei é muito bom.',
            answer: [
              'The book I lent you is very good.',
              'The book that I lent you is very good.',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'A specific book that both people know about.',
            explanation:
              'We use "the" because we are talking about a specific book — the one I lent you. Both speaker and listener know which book.',
          },
          {
            type: 'matching',
            question: 'Match each phrase with the correct article.',
            pairs: [
              { left: '___ apple a day', right: 'An' },
              { left: '___ European country', right: 'A' },
              { left: '___ sun is shining', right: 'The' },
              { left: '___ honest person', right: 'An' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['bought', 'a', 'I', 'new', 'phone', 'the', 'phone', 'is', 'great'],
            correct: 'I bought a new phone. The phone is great.',
            explanation:
              'First mention = "a new phone" (not specific yet). Second mention = "the phone" (now we know which phone).',
          },
          {
            type: 'multiple-choice',
            question: 'She is ___ best student in the class.',
            options: ['the', 'a', 'an', 'no article'],
            correct: 0,
            explanation:
              'We use "the" with superlatives: "the best", "the tallest", "the most interesting." There is only one "best student."',
          },
        ],
      },
      {
        id: 'b1-mx3-l2',
        title: 'Zero article (no article)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '___ love is the most important thing in life.',
            options: ['no article', 'The', 'A', 'An'],
            correct: 0,
            explanation:
              'We use no article (zero article) with abstract nouns used in a general sense. "Love" here means love in general, not a specific love.',
          },
          {
            type: 'fill-blank',
            question: 'I go to ___ work by bus every day.',
            answer: '',
            hint: 'No article is needed here.',
            explanation:
              'We use no article with "go to work", "go to school", "go to bed", "go to church" when talking about the normal purpose of these places.',
          },
          {
            type: 'true-false',
            statement:
              'We say "I like the music" when talking about music in general.',
            correct: false,
            explanation:
              'When talking about something in general, we use no article: "I like music." "I like the music" refers to specific music (e.g., the music playing right now).',
          },
          {
            type: 'translation',
            question: 'Crianças precisam de brincar.',
            answer: [
              'Children need to play.',
              'Kids need to play.',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'In English, general plural nouns take no article.',
            explanation:
              'In Portuguese you might say "As crianças precisam...", but in English, general plural nouns take no article: "Children need to play." (all children in general).',
          },
          {
            type: 'matching',
            question: 'Match: which phrases need NO article?',
            pairs: [
              { left: 'go to ___ school', right: 'no article' },
              { left: '___ water is essential', right: 'no article' },
              { left: 'play ___ football', right: 'no article' },
              { left: '___ Mount Everest', right: 'no article' },
            ],
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence is correct?',
            options: [
              'I had breakfast at 8 am.',
              'I had the breakfast at 8 am.',
              'I had a breakfast at 8 am.',
              'I had an breakfast at 8 am.',
            ],
            correct: 0,
            explanation:
              'Meals generally take no article: "have breakfast", "have lunch", "have dinner." "I had breakfast at 8 am."',
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct sentence about a general truth.',
            words: ['is', 'important', 'for', 'health', 'exercise'],
            correct: 'Exercise is important for health.',
            explanation:
              'General/abstract nouns take no article: "Exercise is important for health."',
          },
          {
            type: 'listening',
            sentence: 'Life is beautiful when you appreciate the little things.',
            question: 'Is "life" used with an article in this sentence?',
            hint: 'Is "life" general or specific here?',
            explanation:
              'No. "Life" is used in a general sense (life in general), so no article is needed.',
          },
        ],
      },
      {
        id: 'b1-mx3-l3',
        title: 'Common article mistakes by Portuguese speakers',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'Portuguese speakers often say "the people are nice." When talking in general, the correct form is:',
            options: [
              'People are nice.',
              'The people are nice.',
              'A people are nice.',
              'Peoples are nice.',
            ],
            correct: 0,
            explanation:
              'In Portuguese, "As pessoas" uses an article, but in English, general statements use no article: "People are nice." "The people" would mean specific people.',
          },
          {
            type: 'true-false',
            statement:
              '"I like the chocolate" is correct when you mean chocolate in general.',
            correct: false,
            explanation:
              'Portuguese uses "Eu gosto do chocolate" (with article), but in English we say "I like chocolate" (no article) for general meaning.',
          },
          {
            type: 'fill-blank',
            question: 'My brother is ___ doctor.',
            answer: 'a',
            hint: 'In English, we use an article before professions.',
            explanation:
              'In Portuguese you say "O meu irmão é médico" (no article), but in English you MUST use "a/an" before professions: "My brother is a doctor."',
          },
          {
            type: 'translation',
            question: 'A natureza é linda.',
            answer: [
              'Nature is beautiful.',
            ],
            from: 'PT',
            to: 'EN',
            hint: 'In English, abstract/general nouns do not need "the".',
            explanation:
              'Portuguese uses "A natureza" (with article), but in English we say "Nature is beautiful" (no article) when speaking in general.',
          },
          {
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'She goes to school every day.',
              'She goes to the school every day.',
              'She goes to a school every day.',
              'She goes school every day.',
            ],
            correct: 0,
            explanation:
              '"Go to school" (no article) means attending as a student for its normal purpose. "Go to the school" means going to the building (maybe as a visitor).',
          },
          {
            type: 'matching',
            question: 'Match the Portuguese pattern with the correct English.',
            pairs: [
              { left: 'Eu gosto de música (PT: article)', right: 'I like music (EN: no article)' },
              { left: 'Ela é professora (PT: no article)', right: 'She is a teacher (EN: article)' },
              { left: 'A vida é curta (PT: article)', right: 'Life is short (EN: no article)' },
              { left: 'Ele joga futebol (PT: no article)', right: 'He plays football (EN: no article)' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange to form: a correct sentence about a profession.',
            words: ['is', 'my', 'an', 'mother', 'engineer'],
            correct: 'My mother is an engineer.',
            explanation:
              'In English, professions need "a/an": "My mother is an engineer." "An" because "engineer" starts with a vowel sound.',
          },
          {
            type: 'listening',
            sentence: 'Happiness comes from within, not from money.',
            question: 'Are "happiness" and "money" used with articles?',
            hint: 'Both are abstract/general concepts.',
            explanation:
              'No. Both "happiness" and "money" are used in a general sense, so no article is needed. Portuguese would use articles ("A felicidade", "do dinheiro"), but English does not here.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 4: Linking Words ───
  {
    id: 'b1-mx4',
    title: 'Linking Words',
    description:
      'Connect your ideas like a pro using contrast, cause/effect, and addition linking words.',
    icon: '🔗',
    lessons: [
      {
        id: 'b1-mx4-l1',
        title: 'Although / However / Despite',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '___ it was raining, we went for a walk.',
            options: ['Although', 'However', 'Despite', 'But'],
            correct: 0,
            explanation:
              '"Although" is a conjunction followed by a clause (subject + verb): "Although it was raining, we went for a walk."',
          },
          {
            type: 'fill-blank',
            question:
              'The restaurant was expensive. ___, the food was excellent.',
            answer: 'However',
            hint: 'A formal linking word that shows contrast between two sentences.',
            explanation:
              '"However" is an adverb used to contrast two sentences. It usually comes at the beginning of the second sentence, followed by a comma.',
          },
          {
            type: 'multiple-choice',
            question: '___ the bad weather, we enjoyed the trip.',
            options: ['Despite', 'Although', 'However', 'Even'],
            correct: 0,
            explanation:
              '"Despite" is a preposition followed by a noun or -ing form: "Despite the bad weather..." You cannot say "Despite it was raining" (use "Although" for that).',
          },
          {
            type: 'true-false',
            statement:
              '"Despite" can be followed by a full clause (subject + verb) without "the fact that".',
            correct: false,
            explanation:
              '"Despite" is a preposition and needs a noun/-ing: "Despite the rain." To use a clause, add "the fact that": "Despite the fact that it rained." Or use "Although" instead.',
          },
          {
            type: 'translation',
            question: 'Apesar de estar cansado, ele continuou a trabalhar.',
            answer: [
              'Despite being tired, he continued to work.',
              'Despite being tired, he continued working.',
              'Although he was tired, he continued to work.',
              'Although he was tired, he continued working.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Apesar de" = "Despite" (+ -ing) or "Although" (+ clause).',
            explanation:
              '"Despite" + -ing: "Despite being tired..." OR "Although" + clause: "Although he was tired..." Both are correct ways to express contrast.',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['although', 'was', 'she', 'tired', 'she', 'finished', 'the', 'marathon'],
            correct: 'Although she was tired, she finished the marathon.',
            explanation:
              '"Although" + clause, + main clause: "Although she was tired, she finished the marathon."',
          },
          {
            type: 'matching',
            question: 'Match each linking word with what follows it.',
            pairs: [
              { left: 'Although', right: 'subject + verb (clause)' },
              { left: 'Despite', right: 'noun or -ing form' },
              { left: 'However', right: 'new sentence (with comma)' },
              { left: 'In spite of', right: 'noun or -ing form' },
            ],
          },
          {
            type: 'listening',
            sentence:
              'The hotel was quite old. However, the rooms were clean and comfortable.',
            question: 'Was the speaker happy with the rooms?',
            hint: '"However" shows a contrast — what comes after is unexpected.',
            explanation:
              'Yes. "However" shows contrast: the hotel was old (negative), but the rooms were clean and comfortable (positive surprise).',
          },
        ],
      },
      {
        id: 'b1-mx4-l2',
        title: 'Therefore / As a result / Consequently',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'He didn\'t study for the exam. ___, he failed.',
            options: ['Therefore', 'Although', 'Despite', 'However'],
            correct: 0,
            explanation:
              '"Therefore" shows cause and effect. Not studying (cause) led to failing (result). "Therefore" is more formal than "so".',
          },
          {
            type: 'fill-blank',
            question:
              'The company lost a lot of money. ___, they had to lay off some employees.',
            answer: 'As a result',
            hint: 'A phrase that introduces the consequence of something.',
            explanation:
              '"As a result" introduces the consequence: losing money (cause) → laying off employees (result).',
          },
          {
            type: 'true-false',
            statement: '"Therefore" and "so" have the same meaning but different levels of formality.',
            correct: true,
            explanation:
              'Both "therefore" and "so" express cause/effect. "Therefore" is more formal and used in writing. "So" is more common in spoken English.',
          },
          {
            type: 'translation',
            question: 'Choveu muito. Consequentemente, o jogo foi cancelado.',
            answer: [
              'It rained a lot. Consequently, the game was cancelled.',
              'It rained a lot. Consequently, the match was cancelled.',
              'It rained heavily. Consequently, the game was cancelled.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Consequentemente" = "Consequently".',
            explanation:
              '"Consequently" is a formal linking word showing result: heavy rain (cause) → game cancelled (effect).',
          },
          {
            type: 'matching',
            question: 'Match each cause with its result using linking words.',
            pairs: [
              { left: 'She worked hard. Therefore,...', right: 'she got a promotion.' },
              { left: 'The roads were icy. As a result,...', right: 'there were many accidents.' },
              { left: 'He ate too much. Consequently,...', right: 'he felt sick.' },
              { left: 'They trained every day. Therefore,...', right: 'they won the championship.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['the', 'therefore', 'was', 'flight', 'delayed', 'we', 'missed', 'our', 'connection'],
            correct: 'The flight was delayed. Therefore, we missed our connection.',
            explanation:
              '"Therefore" links two sentences showing cause and effect: delay → missed connection.',
          },
          {
            type: 'multiple-choice',
            question:
              'Which word would NOT work in this gap? "It snowed heavily. ___, the schools were closed."',
            options: ['Although', 'Therefore', 'As a result', 'Consequently'],
            correct: 0,
            explanation:
              '"Although" shows contrast, not cause/effect. Snow causing school closures is a cause-effect relationship, so "Therefore", "As a result", or "Consequently" all work.',
          },
        ],
      },
      {
        id: 'b1-mx4-l3',
        title: 'In addition / Furthermore / Moreover',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'The hotel has a pool and a gym. ___, it offers free breakfast.',
            options: ['In addition', 'However', 'Therefore', 'Although'],
            correct: 0,
            explanation:
              '"In addition" adds extra information to the same point. Pool + gym + free breakfast = adding more positive features.',
          },
          {
            type: 'fill-blank',
            question:
              'The new software is faster and more reliable. ___, it is easier to use.',
            answer: 'Furthermore',
            hint: 'A formal word meaning "in addition to that".',
            explanation:
              '"Furthermore" adds another point to support the argument. It is more formal than "also" or "and".',
          },
          {
            type: 'true-false',
            statement:
              '"Moreover", "furthermore", and "in addition" can all be used at the beginning of a sentence to add information.',
            correct: true,
            explanation:
              'All three words serve the same purpose: adding information. They are largely interchangeable, though "moreover" and "furthermore" are slightly more formal.',
          },
          {
            type: 'translation',
            question: 'Além disso, o restaurante tem uma vista incrível.',
            answer: [
              'In addition, the restaurant has an incredible view.',
              'Furthermore, the restaurant has an incredible view.',
              'Moreover, the restaurant has an amazing view.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Além disso" = "In addition" / "Furthermore" / "Moreover".',
            explanation:
              '"Além disso" can be translated as "In addition", "Furthermore", or "Moreover". All are correct and add extra information.',
          },
          {
            type: 'matching',
            question: 'Match the sentence halves.',
            pairs: [
              { left: 'The course is free. In addition,', right: 'you get a certificate.' },
              { left: 'He speaks French. Furthermore,', right: 'he is fluent in German.' },
              { left: 'The city is safe. Moreover,', right: 'it has excellent public transport.' },
              { left: 'She is talented. In addition,', right: 'she works very hard.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['moreover', 'the', 'apartment', 'is', 'spacious', 'and', 'affordable'],
            correct: 'Moreover, the apartment is spacious and affordable.',
            explanation:
              '"Moreover" at the start of a sentence adds extra information, followed by a comma.',
          },
          {
            type: 'multiple-choice',
            question: 'Which linking word shows addition, NOT contrast?',
            options: ['Furthermore', 'However', 'Although', 'Despite'],
            correct: 0,
            explanation:
              '"Furthermore" adds information (addition). "However", "Although", and "Despite" all show contrast.',
          },
          {
            type: 'listening',
            sentence:
              'The new employee is very experienced. In addition, she has great communication skills.',
            question: 'Is the speaker adding a positive or negative point about the employee?',
            hint: '"In addition" adds more of the same direction.',
            explanation:
              'Positive. "In addition" adds another positive point: experienced + great communication skills. Both are qualities that support the same argument.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 5: Modals of Deduction ───
  {
    id: 'b1-mx5',
    title: 'Modals of Deduction',
    description:
      'Use must, can\'t, might, could, and may to make deductions about the present and past.',
    icon: '🔍',
    lessons: [
      {
        id: 'b1-mx5-l1',
        title: 'Must be / Can\'t be (present deduction)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'She\'s been working for 12 hours. She ___ exhausted.',
            options: ['must be', 'can\'t be', 'might be', 'should be'],
            correct: 0,
            explanation:
              '"Must be" expresses a strong deduction — you are almost certain. Working 12 hours → you are almost sure she is exhausted.',
          },
          {
            type: 'fill-blank',
            question:
              'He ___ the new manager. He only started working here yesterday!',
            answer: "can't be",
            hint: 'You are almost certain this is NOT true.',
            explanation:
              '"Can\'t be" expresses a strong negative deduction — you are almost certain something is NOT true. Someone who started yesterday is very unlikely to be the manager.',
          },
          {
            type: 'true-false',
            statement:
              '"Must" in "She must be tired" expresses obligation.',
            correct: false,
            explanation:
              'Here "must" expresses deduction (logical conclusion), NOT obligation. "She must be tired" = I\'m almost certain she is tired (based on evidence). Compare: "She must go to bed" = obligation.',
          },
          {
            type: 'translation',
            question: 'Ele deve ser muito rico. Olha para o carro dele!',
            answer: [
              'He must be very rich. Look at his car!',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Deve ser" (deduction) = "must be".',
            explanation:
              'Portuguese "deve ser" for deduction translates to "must be": "He must be very rich." The expensive car is the evidence for this conclusion.',
          },
          {
            type: 'matching',
            question: 'Match each situation with the correct deduction.',
            pairs: [
              { left: 'The lights are off.', right: 'They can\'t be at home.' },
              { left: 'She\'s smiling a lot.', right: 'She must be happy.' },
              { left: 'He\'s wearing a uniform.', right: 'He must be a police officer.' },
              { left: 'The restaurant is empty.', right: 'The food can\'t be very good.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct deduction.',
            words: ['she', 'be', 'must', 'very', 'intelligent', 'got', 'she', 'a', 'scholarship'],
            correct: 'She must be very intelligent. She got a scholarship.',
            explanation:
              '"Must be" for strong present deduction based on evidence (getting a scholarship).',
          },
          {
            type: 'multiple-choice',
            question: 'That ___ John. John is in Brazil this week.',
            options: ["can't be", 'must be', 'might be', 'has to be'],
            correct: 0,
            explanation:
              '"Can\'t be" = strong negative deduction. You know John is in Brazil, so the person you see cannot be John.',
          },
          {
            type: 'listening',
            sentence: 'Look at those dark clouds. It must be about to rain.',
            question: 'Is the speaker certain it will rain?',
            hint: '"Must be" shows strong deduction, not 100% certainty.',
            explanation:
              'Almost certain, but not 100%. "Must be" is a strong deduction based on evidence (dark clouds). The speaker is very confident but acknowledges it\'s a conclusion, not a fact.',
          },
        ],
      },
      {
        id: 'b1-mx5-l2',
        title: 'Might / Could / May (possibility)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I\'m not sure where Lisa is. She ___ be at the gym.',
            options: ['might', 'must', "can't", 'will'],
            correct: 0,
            explanation:
              '"Might" expresses possibility — you\'re not sure. "She might be at the gym" = it\'s possible, but I don\'t know.',
          },
          {
            type: 'fill-blank',
            question:
              'Take an umbrella. It ___ rain later.',
            answer: 'could',
            hint: 'A modal expressing possibility (not certainty).',
            explanation:
              '"Could" expresses possibility: "It could rain later" = it\'s possible. "Might" or "may" would also be correct here.',
          },
          {
            type: 'true-false',
            statement:
              '"Might", "could", and "may" all express a similar level of possibility.',
            correct: true,
            explanation:
              'Yes, all three express possibility (roughly 30-60% certainty). They are largely interchangeable in deduction contexts. "May" is slightly more formal.',
          },
          {
            type: 'translation',
            question: 'Eles podem estar perdidos.',
            answer: [
              'They might be lost.',
              'They could be lost.',
              'They may be lost.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Podem estar" (possibility) = "might/could/may be".',
            explanation:
              'Portuguese "podem estar" for possibility can be translated as "might be", "could be", or "may be". All express uncertain possibility.',
          },
          {
            type: 'matching',
            question: 'Match each modal to its level of certainty.',
            pairs: [
              { left: 'must be', right: 'almost certain (90%+)' },
              { left: 'might/could/may be', right: 'possible (30-60%)' },
              { left: "can't be", right: 'almost certain it\'s NOT true (90%+)' },
              { left: 'will be', right: 'certain (future fact)' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a sentence about possibility.',
            words: ['she', 'might', 'be', 'at', 'the', 'library', 'studying'],
            correct: 'She might be at the library studying.',
            explanation:
              '"Might be" + place: "She might be at the library studying." This expresses possibility, not certainty.',
          },
          {
            type: 'multiple-choice',
            question:
              'A: "Why is Tom late?" B: "He ___ be stuck in traffic."',
            options: ['could', 'must', "can't", 'will'],
            correct: 0,
            explanation:
              'We don\'t know for sure why Tom is late, so "could" (possibility) is best. "Must" would be too certain without evidence.',
          },
          {
            type: 'listening',
            sentence: 'That noise could be coming from the neighbour\'s house.',
            question: 'Is the speaker sure where the noise is coming from?',
            hint: '"Could" expresses uncertainty.',
            explanation:
              'No. "Could be" expresses possibility, not certainty. The speaker thinks it\'s possible the noise is from the neighbour, but is not sure.',
          },
        ],
      },
      {
        id: 'b1-mx5-l3',
        title: 'Must have / Can\'t have (past deduction)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question:
              'She passed all her exams with top marks. She ___ studied very hard.',
            options: ['must have', "can't have", 'might have', 'would have'],
            correct: 0,
            explanation:
              '"Must have + past participle" is a strong deduction about the past. Top marks = strong evidence she studied hard.',
          },
          {
            type: 'fill-blank',
            question:
              'He ___ eaten the cake. He\'s allergic to chocolate!',
            answer: "can't have",
            hint: 'You are almost certain he did NOT do this.',
            explanation:
              '"Can\'t have + past participle" is a strong negative deduction about the past. Being allergic makes it almost impossible that he ate it.',
          },
          {
            type: 'true-false',
            statement:
              '"She must have forgotten" refers to a deduction about something in the past.',
            correct: true,
            explanation:
              'Yes. "Must have + past participle" makes a deduction about a past event. "She must have forgotten" = I\'m almost certain she forgot (in the past).',
          },
          {
            type: 'translation',
            question: 'Eles devem ter perdido o voo.',
            answer: [
              'They must have missed the flight.',
              'They must have missed their flight.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Devem ter" (past deduction) = "must have".',
            explanation:
              '"Devem ter + particípio" translates to "must have + past participle" for past deductions: "They must have missed the flight."',
          },
          {
            type: 'matching',
            question: 'Match each situation with the correct past deduction.',
            pairs: [
              { left: 'The ground is wet.', right: 'It must have rained.' },
              { left: 'She didn\'t answer.', right: 'She might have been busy.' },
              { left: 'He was at work all day.', right: 'He can\'t have gone to the party.' },
              { left: 'They looked very happy.', right: 'They must have received good news.' },
            ],
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a past deduction.',
            words: ['have', 'she', 'left', 'her', 'phone', 'must', 'at', 'home'],
            correct: 'She must have left her phone at home.',
            explanation:
              '"Must have + past participle" for strong past deduction: "She must have left her phone at home."',
          },
          {
            type: 'multiple-choice',
            question:
              'He failed the test. He ___ studied enough.',
            options: ["can't have", 'must have', 'should have', 'would have'],
            correct: 0,
            explanation:
              '"Can\'t have + past participle" = strong negative deduction. Failing the test is evidence that he did NOT study enough.',
          },
          {
            type: 'listening',
            sentence:
              'The door was unlocked. Someone must have forgotten to lock it.',
            question: 'What is the speaker deducing?',
            hint: '"Must have" expresses a past deduction.',
            explanation:
              'The speaker is deducing that someone forgot to lock the door (past event), based on the evidence that the door is unlocked now. "Must have forgotten" = strong past deduction.',
          },
        ],
      },
    ],
  },

  // ─── MODULE 6: Phrasal Verbs - Daily Life ───
  {
    id: 'b1-mx6',
    title: 'Phrasal Verbs - Daily Life',
    description:
      'Learn essential phrasal verbs with get, look, and turn that native speakers use every day.',
    icon: '💬',
    lessons: [
      {
        id: 'b1-mx6-l1',
        title: 'Get up, get on, get off, get along...',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I ___ at 7 am every morning.',
            options: ['get up', 'get on', 'get off', 'get along'],
            correct: 0,
            explanation:
              '"Get up" means to rise from bed, to wake up and leave the bed. "I get up at 7 am" = I wake up and leave bed at 7 am.',
          },
          {
            type: 'fill-blank',
            question: 'Please ___ the bus at the next stop.',
            answer: 'get off',
            hint: 'To leave a bus, train, or plane.',
            explanation:
              '"Get off" means to leave a vehicle (bus, train, plane, bike). "Get off the bus" = leave the bus.',
          },
          {
            type: 'matching',
            question: 'Match each phrasal verb with its meaning.',
            pairs: [
              { left: 'get up', right: 'wake up / rise from bed' },
              { left: 'get on', right: 'board (a bus/train) / have a relationship' },
              { left: 'get off', right: 'leave (a bus/train)' },
              { left: 'get along with', right: 'have a good relationship' },
            ],
          },
          {
            type: 'translation',
            question: 'Eu dou-me bem com os meus colegas.',
            answer: [
              'I get along with my colleagues.',
              'I get along well with my colleagues.',
              'I get on with my colleagues.',
              'I get on well with my colleagues.',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Dar-se bem com" = "get along with" or "get on with".',
            explanation:
              '"Get along with" or "get on with" means to have a good relationship. "I get along with my colleagues."',
          },
          {
            type: 'true-false',
            statement: '"Get over" means to recover from something (illness, breakup, etc.).',
            correct: true,
            explanation:
              '"Get over" means to recover from or move past something: "She got over the flu quickly." "He can\'t get over his ex-girlfriend."',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['do', 'you', 'get', 'on', 'with', 'your', 'neighbours'],
            correct: 'Do you get on with your neighbours?',
            explanation:
              '"Get on with" = have a good relationship with. "Do you get on with your neighbours?" asks about the relationship.',
          },
          {
            type: 'multiple-choice',
            question: 'I need to ___ this cold before the weekend.',
            options: ['get over', 'get up', 'get on', 'get off'],
            correct: 0,
            explanation:
              '"Get over" means to recover from something. "I need to get over this cold" = I need to recover from this cold.',
          },
          {
            type: 'listening',
            sentence: 'We got on the train at Lisbon and got off at Porto.',
            question: 'Where did they board the train?',
            hint: '"Get on" = board, "get off" = leave.',
            explanation:
              'They boarded ("got on") at Lisbon and left ("got off") at Porto. "Get on" = enter/board a vehicle.',
          },
        ],
      },
      {
        id: 'b1-mx6-l2',
        title: 'Look for, look after, look up, look forward to...',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'I\'m ___ my keys. Have you seen them?',
            options: ['looking for', 'looking after', 'looking up', 'looking forward to'],
            correct: 0,
            explanation:
              '"Look for" means to search for something. "I\'m looking for my keys" = I\'m trying to find my keys.',
          },
          {
            type: 'fill-blank',
            question: 'Can you ___ the children while I go to the shops?',
            answer: 'look after',
            hint: 'To take care of someone.',
            explanation:
              '"Look after" means to take care of someone or something. "Look after the children" = take care of them.',
          },
          {
            type: 'matching',
            question: 'Match each phrasal verb with its meaning.',
            pairs: [
              { left: 'look for', right: 'search for / try to find' },
              { left: 'look after', right: 'take care of' },
              { left: 'look up', right: 'search for information (in a dictionary, online)' },
              { left: 'look forward to', right: 'feel excited about something future' },
            ],
          },
          {
            type: 'translation',
            question: 'Estou ansioso por te ver!',
            answer: [
              'I am looking forward to seeing you!',
              "I'm looking forward to seeing you!",
              'I look forward to seeing you!',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Estar ansioso por" = "look forward to" + -ing.',
            explanation:
              '"Look forward to" is followed by -ing (not base verb!): "I\'m looking forward to seeing you!" Common mistake: *"look forward to see" (wrong).',
          },
          {
            type: 'true-false',
            statement:
              '"Look up" can mean both "search for information" and "raise your eyes".',
            correct: true,
            explanation:
              '"Look up" has two meanings: 1) search for information ("Look up the word in a dictionary") 2) raise your eyes to see ("Look up! There\'s a rainbow!").',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['I', 'am', 'looking', 'forward', 'to', 'meeting', 'you'],
            correct: 'I am looking forward to meeting you.',
            explanation:
              '"Look forward to" + -ing: "I am looking forward to meeting you."',
          },
          {
            type: 'multiple-choice',
            question:
              'If you don\'t know the word, ___ it ___ in the dictionary.',
            options: ['look ... up', 'look ... for', 'look ... after', 'look ... forward to'],
            correct: 0,
            explanation:
              '"Look up" means to search for information: "Look it up in the dictionary." The object (it) can go between "look" and "up".',
          },
          {
            type: 'listening',
            sentence:
              'My grandmother looks after us every weekend when our parents go out.',
            question: 'What does the grandmother do every weekend?',
            hint: '"Look after" means to take care of.',
            explanation:
              'The grandmother takes care of them ("looks after") every weekend. "Look after" = care for / babysit.',
          },
        ],
      },
      {
        id: 'b1-mx6-l3',
        title: 'Turn on, turn off, turn up, turn down, turn into...',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'It\'s cold in here. Can you ___ the heating?',
            options: ['turn on', 'turn off', 'turn up', 'turn down'],
            correct: 0,
            explanation:
              '"Turn on" means to start a device or appliance. If the heating is off and you\'re cold, you need to turn it on.',
          },
          {
            type: 'fill-blank',
            question:
              'The music is too loud! Please ___ it ___.',
            answer: 'turn down',
            hint: 'To reduce the volume.',
            explanation:
              '"Turn down" means to reduce the volume or intensity. "Turn it down" = make it quieter.',
          },
          {
            type: 'matching',
            question: 'Match each phrasal verb with its meaning.',
            pairs: [
              { left: 'turn on', right: 'start / switch on (a device)' },
              { left: 'turn off', right: 'stop / switch off (a device)' },
              { left: 'turn up', right: 'increase (volume) / arrive unexpectedly' },
              { left: 'turn into', right: 'become / transform into' },
            ],
          },
          {
            type: 'translation',
            question: 'Podes desligar a televisão, por favor?',
            answer: [
              'Can you turn off the TV, please?',
              'Can you turn off the television, please?',
              'Can you turn the TV off, please?',
              'Can you turn the television off, please?',
              'Could you turn off the TV, please?',
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Desligar" = "turn off".',
            explanation:
              '"Turn off" = desligar. The object can go between "turn" and "off" or after: "turn off the TV" or "turn the TV off."',
          },
          {
            type: 'true-false',
            statement: '"Turn up" can mean "arrive somewhere unexpectedly."',
            correct: true,
            explanation:
              '"Turn up" has two meanings: 1) increase volume ("Turn up the music") 2) arrive, often unexpectedly ("He turned up at the party uninvited").',
          },
          {
            type: 'reorder',
            question: 'Rearrange the words to form a correct sentence.',
            words: ['the', 'caterpillar', 'turned', 'into', 'a', 'beautiful', 'butterfly'],
            correct: 'The caterpillar turned into a beautiful butterfly.',
            explanation:
              '"Turn into" = become/transform: "The caterpillar turned into a beautiful butterfly."',
          },
          {
            type: 'multiple-choice',
            question:
              'She was offered a promotion but she ___ it ___.',
            options: ['turned ... down', 'turned ... on', 'turned ... up', 'turned ... into'],
            correct: 0,
            explanation:
              '"Turn down" also means to reject or refuse an offer: "She turned it down" = she refused the promotion.',
          },
          {
            type: 'listening',
            sentence:
              'Don\'t forget to turn off the lights before you leave the house.',
            question: 'What should you do before leaving?',
            hint: '"Turn off" = switch off.',
            explanation:
              'You should turn off (switch off) the lights before leaving. "Turn off the lights" = make the lights stop working.',
          },
        ],
      },
    ],
  },
]
