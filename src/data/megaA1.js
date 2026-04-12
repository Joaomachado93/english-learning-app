// Mega A1 Modules — Extended beginner content for Portuguese speakers learning English
// Covers: Colors & Clothes, Body & Health, Weather & Seasons, Hobbies, The Home, Verb To Be

export const megaA1Modules = [
  // ============================================================
  // MODULE 1: Colors & Clothes
  // ============================================================
  {
    id: 'a1-mx1',
    title: 'Colors & Clothes',
    description: 'Learn colors, clothing vocabulary, and how to describe appearance',
    icon: '🎨',
    lessons: [
      {
        id: 'a1-mx1-l1',
        title: 'Colors',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each color to its Portuguese translation:',
            pairs: [
              { left: 'Red', right: 'Vermelho' },
              { left: 'Blue', right: 'Azul' },
              { left: 'Green', right: 'Verde' },
              { left: 'Yellow', right: 'Amarelo' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'What color is the sky on a clear day?',
            options: ['Red', 'Blue', 'Green', 'Yellow'],
            correct: 1,
            explanation: 'The sky is blue on a clear, sunny day.'
          },
          {
            type: 'fill-blank',
            question: 'The grass in the park is ___.',
            answer: 'green',
            hint: 'The color of nature and plants',
            explanation: 'Grass is green. "Verde" in Portuguese = "green" in English.'
          },
          {
            type: 'translation',
            question: 'A minha cor favorita é o roxo.',
            answer: ['My favorite color is purple', 'My favourite colour is purple'],
            from: 'PT', to: 'EN',
            hint: 'My + favorite + color + is + the color',
            explanation: '"Cor favorita" = "favorite color" (US) or "favourite colour" (UK). "Roxo" = "purple".'
          },
          {
            type: 'true-false',
            statement: '"Orange" is both a color and a fruit in English.',
            correct: true,
            explanation: 'Yes! "Orange" means both the color (laranja/cor) and the fruit (laranja/fruta).'
          },
          {
            type: 'multiple-choice',
            question: 'Which color do you get when you mix red and white?',
            options: ['Purple', 'Orange', 'Pink', 'Brown'],
            correct: 2,
            explanation: 'Red + white = pink. In Portuguese, "pink" = "rosa" or "cor-de-rosa".'
          },
          {
            type: 'fill-blank',
            question: 'Snow is ___.',
            answer: 'white',
            hint: 'The lightest color — "branco" in Portuguese',
            explanation: '"White" = "branco". Snow (neve) is white.'
          },
          {
            type: 'listening',
            sentence: 'The black cat is sleeping on the brown sofa.',
            question: 'What two colors are mentioned in this sentence?',
            hint: 'One describes the cat, the other the sofa',
            explanation: 'Black (preto) describes the cat, and brown (castanho/marrom) describes the sofa.'
          }
        ]
      },
      {
        id: 'a1-mx1-l2',
        title: 'Clothes & What to Wear',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the clothing item to its Portuguese translation:',
            pairs: [
              { left: 'Shirt', right: 'Camisa' },
              { left: 'Trousers', right: 'Calças' },
              { left: 'Shoes', right: 'Sapatos' },
              { left: 'Dress', right: 'Vestido' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'What do you wear on your feet?',
            options: ['Hat', 'Gloves', 'Shoes', 'Scarf'],
            correct: 2,
            explanation: 'You wear shoes (sapatos) on your feet (pés).'
          },
          {
            type: 'translation',
            question: 'Eu estou a usar uma camisola azul.',
            answer: ['I am wearing a blue sweater', 'I am wearing a blue jumper', "I'm wearing a blue sweater", "I'm wearing a blue jumper"],
            from: 'PT', to: 'EN',
            hint: 'I am wearing + a + color + clothing item',
            explanation: '"Estou a usar" = "I am wearing". "Camisola" = "sweater" (US) or "jumper" (UK). Color goes BEFORE the noun in English.'
          },
          {
            type: 'fill-blank',
            question: 'It is cold outside. I need to put on my ___.',
            answer: 'coat',
            hint: 'A warm piece of clothing you wear over your clothes — "casaco" in Portuguese',
            explanation: 'A coat (casaco) is worn over other clothes to keep warm in cold weather.'
          },
          {
            type: 'true-false',
            statement: 'In English, "pants" and "trousers" mean the same thing.',
            correct: true,
            explanation: '"Pants" (American English) and "trousers" (British English) both mean "calças". Note: in British English, "pants" can mean underwear!'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['She', 'is', 'wearing', 'a', 'red', 'dress'],
            correct: 'She is wearing a red dress',
            explanation: 'Subject + is + wearing + article + color + noun. In English the adjective (red) comes before the noun (dress).'
          },
          {
            type: 'multiple-choice',
            question: 'Which of these is something you wear on your head?',
            options: ['Belt', 'Hat', 'Socks', 'Ring'],
            correct: 1,
            explanation: 'A hat (chapéu) is worn on the head. Belt = cinto, Socks = meias, Ring = anel.'
          },
          {
            type: 'translation',
            question: 'Preciso de comprar sapatos novos.',
            answer: ['I need to buy new shoes'],
            from: 'PT', to: 'EN',
            hint: 'I need + to buy + new + shoes',
            explanation: '"Preciso de" = "I need to". "Comprar" = "to buy". "Sapatos novos" = "new shoes" (adjective before noun in English).'
          }
        ]
      },
      {
        id: 'a1-mx1-l3',
        title: 'Describing Appearance',
        type: 'conversation',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'How do you ask about someone\'s appearance?',
            options: ['What does he look?', 'What does he look like?', 'How does he look like?', 'What is he look like?'],
            correct: 1,
            explanation: '"What does he look like?" is the correct way to ask about appearance. Do NOT use "how" with "look like".'
          },
          {
            type: 'fill-blank',
            question: 'She has long ___ hair.',
            answer: 'blonde',
            hint: 'A light/golden hair color — "loiro" in Portuguese',
            explanation: '"Blonde" (or "blond") means "loiro/loira". Hair descriptions use: has + length + color + hair.'
          },
          {
            type: 'translation',
            question: 'Ele é alto e tem cabelo castanho.',
            answer: ['He is tall and has brown hair', 'He is tall and he has brown hair'],
            from: 'PT', to: 'EN',
            hint: 'He + is + tall + and + has + brown + hair',
            explanation: '"Alto" = "tall". "Cabelo castanho" = "brown hair". Use "is" for height/build and "has" for features.'
          },
          {
            type: 'true-false',
            statement: 'In English, we say "He has tall" to describe someone\'s height.',
            correct: false,
            explanation: 'We say "He IS tall" (not "has"). Use "be" (is/am/are) for height, weight, and build. Use "have/has" for hair, eyes, etc.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['My', 'sister', 'has', 'short', 'curly', 'hair'],
            correct: 'My sister has short curly hair',
            explanation: 'Possessive + person + has + length + type + hair. Multiple adjectives follow a specific order in English.'
          },
          {
            type: 'listening',
            sentence: 'She is medium height with green eyes and straight black hair.',
            question: 'What color are her eyes and hair?',
            hint: 'Listen for two colors — one for the eyes, one for the hair',
            explanation: 'Her eyes are green (verdes) and her hair is black (preto). "Straight" = "liso" (not curly).'
          },
          {
            type: 'fill-blank',
            question: 'He ___ blue eyes and a beard.',
            answer: 'has',
            hint: 'Use "have" or "has" for physical features',
            explanation: '"He has" (not "is") blue eyes. Use "has" with he/she/it for describing features like eyes, hair, freckles.'
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence correctly describes someone?',
            options: [
              'She is long hair.',
              'She has long hair.',
              'She have long hair.',
              'She are long hair.'
            ],
            correct: 1,
            explanation: '"She has long hair" is correct. Use "has" (3rd person singular of "have") for features.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 2: Body & Health
  // ============================================================
  {
    id: 'a1-mx2',
    title: 'Body & Health',
    description: 'Learn body parts, health vocabulary, and express feelings',
    icon: '🏥',
    lessons: [
      {
        id: 'a1-mx2-l1',
        title: 'Body Parts',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the body part to its Portuguese translation:',
            pairs: [
              { left: 'Head', right: 'Cabeça' },
              { left: 'Hand', right: 'Mão' },
              { left: 'Knee', right: 'Joelho' },
              { left: 'Stomach', right: 'Estômago' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which body part do you use to see?',
            options: ['Ears', 'Nose', 'Eyes', 'Mouth'],
            correct: 2,
            explanation: 'You use your eyes (olhos) to see.'
          },
          {
            type: 'fill-blank',
            question: 'I write with my right ___.',
            answer: 'hand',
            hint: 'The body part at the end of your arm — "mão" in Portuguese',
            explanation: '"Hand" = "mão". "Right hand" = "mão direita".'
          },
          {
            type: 'true-false',
            statement: '"Finger" and "toe" are the same word in English.',
            correct: false,
            explanation: '"Finger" = "dedo da mão" (on the hand). "Toe" = "dedo do pé" (on the foot). In Portuguese, "dedo" is used for both.'
          },
          {
            type: 'fill-blank',
            question: 'She has a pain in her ___.',
            answer: 'back',
            hint: 'The part of your body behind you, from shoulders to waist — "costas"',
            explanation: '"Back" = "costas". "Back pain" is very common in English conversations about health.'
          },
          {
            type: 'translation',
            question: 'Dói-me a cabeça.',
            answer: ['My head hurts', 'I have a headache'],
            from: 'PT', to: 'EN',
            hint: 'My + body part + hurts, OR I have a + headache',
            explanation: 'In English, you say "My head hurts" or "I have a headache" — NOT "It hurts me the head".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['He', 'broke', 'his', 'left', 'arm'],
            correct: 'He broke his left arm',
            explanation: 'Subject + verb (past) + possessive + side + body part. "Broke" is the past tense of "break".'
          },
          {
            type: 'listening',
            sentence: 'Touch your nose with your right hand.',
            question: 'What body parts are mentioned?',
            hint: 'Two body parts are mentioned in this instruction',
            explanation: 'The sentence mentions "nose" (nariz) and "right hand" (mão direita). This is a common instruction in games like "Simon Says".'
          }
        ]
      },
      {
        id: 'a1-mx2-l2',
        title: 'At the Doctor',
        type: 'conversation',
        exercises: [
          {
            type: 'translation',
            question: 'Preciso de ir ao médico.',
            answer: ['I need to go to the doctor', 'I need to see a doctor'],
            from: 'PT', to: 'EN',
            hint: 'I need + to go to + the doctor',
            explanation: '"Ir ao médico" = "go to the doctor" or "see a doctor".'
          },
          {
            type: 'multiple-choice',
            question: 'What does the doctor usually ask first?',
            options: [
              'What is your job?',
              'What seems to be the problem?',
              'Where do you live?',
              'How old is your mother?'
            ],
            correct: 1,
            explanation: '"What seems to be the problem?" is the standard opening question at a doctor\'s appointment.'
          },
          {
            type: 'fill-blank',
            question: 'I have a sore ___.',
            answer: 'throat',
            hint: 'The front part of your neck, inside — "garganta" in Portuguese',
            explanation: '"Sore throat" = "dor de garganta". "Sore" means it hurts.'
          },
          {
            type: 'translation',
            question: 'Tenho febre e tosse.',
            answer: ['I have a fever and a cough', 'I have fever and cough'],
            from: 'PT', to: 'EN',
            hint: 'I have + a fever + and + a cough',
            explanation: '"Febre" = "fever". "Tosse" = "cough". In English we usually say "a fever" and "a cough" with the article.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['You', 'should', 'take', 'this', 'medicine', 'twice', 'a', 'day'],
            correct: 'You should take this medicine twice a day',
            explanation: '"Should" expresses a recommendation. "Twice a day" = "duas vezes por dia".'
          },
          {
            type: 'true-false',
            statement: '"I am sick" and "I am ill" mean the same thing.',
            correct: true,
            explanation: 'Both mean "Estou doente". "Sick" is more common in American English, "ill" in British English.'
          },
          {
            type: 'listening',
            sentence: 'I have had a terrible headache for three days.',
            question: 'How long has the person had a headache?',
            hint: 'Listen for the number of days',
            explanation: 'The person has had a headache for three days (três dias). "Terrible" = "terrível" and emphasizes how bad it is.'
          },
          {
            type: 'fill-blank',
            question: 'The doctor gave me a ___ for antibiotics.',
            answer: 'prescription',
            hint: 'A written note from the doctor to get medicine — "receita médica"',
            explanation: '"Prescription" = "receita médica". The doctor writes a prescription so you can buy medicine at the pharmacy (farmácia).'
          }
        ]
      },
      {
        id: 'a1-mx2-l3',
        title: 'Feelings & Emotions',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the feeling to its Portuguese translation:',
            pairs: [
              { left: 'Happy', right: 'Feliz' },
              { left: 'Sad', right: 'Triste' },
              { left: 'Tired', right: 'Cansado' },
              { left: 'Angry', right: 'Zangado' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'If someone looks worried, they are probably:',
            options: ['Relaxed', 'Anxious', 'Excited', 'Bored'],
            correct: 1,
            explanation: '"Worried" and "anxious" are related feelings. "Preocupado" = "worried", "ansioso" = "anxious".'
          },
          {
            type: 'fill-blank',
            question: 'I am very ___ because I slept only 4 hours.',
            answer: 'tired',
            hint: 'The feeling when you need sleep — "cansado"',
            explanation: '"Tired" = "cansado/a". When you don\'t sleep enough, you feel tired.'
          },
          {
            type: 'translation',
            question: 'Estou nervoso por causa do exame.',
            answer: ['I am nervous because of the exam', "I'm nervous because of the exam", 'I am nervous about the exam', "I'm nervous about the exam"],
            from: 'PT', to: 'EN',
            hint: 'I am + feeling + because of / about + the exam',
            explanation: '"Nervoso" = "nervous". "Por causa do" = "because of". You can also say "nervous about".'
          },
          {
            type: 'true-false',
            statement: '"Excited" in English means the same as "excitado" in Portuguese.',
            correct: false,
            explanation: 'Be careful! "Excited" in English means "entusiasmado/animado". "Excitado" in Portuguese has a different (often sexual) meaning. This is a false friend!'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['How', 'are', 'you', 'feeling', 'today'],
            correct: 'How are you feeling today',
            explanation: '"How are you feeling today?" is a common way to ask about someone\'s emotional state. More specific than "How are you?".'
          },
          {
            type: 'listening',
            sentence: 'She was really surprised when she saw the birthday cake.',
            question: 'How did she feel when she saw the cake?',
            hint: 'A feeling when something unexpected happens',
            explanation: 'She was surprised (surpreendida). "Surprised" = an unexpected emotion, usually positive in this context.'
          },
          {
            type: 'multiple-choice',
            question: 'Which word describes a positive feeling?',
            options: ['Frustrated', 'Delighted', 'Disappointed', 'Exhausted'],
            correct: 1,
            explanation: '"Delighted" = "encantado/muito contente". It means very happy. The others are negative: frustrated (frustrado), disappointed (desiludido), exhausted (exausto).'
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 3: Weather & Seasons
  // ============================================================
  {
    id: 'a1-mx3',
    title: 'Weather & Seasons',
    description: 'Talk about the weather, seasons, and related activities',
    icon: '🌦️',
    lessons: [
      {
        id: 'a1-mx3-l1',
        title: 'Weather Words',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the weather word to its Portuguese translation:',
            pairs: [
              { left: 'Sunny', right: 'Soalheiro / Ensolarado' },
              { left: 'Rainy', right: 'Chuvoso' },
              { left: 'Cloudy', right: 'Nublado' },
              { left: 'Windy', right: 'Ventoso' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'How do you describe the weather in English?',
            options: ['It makes cold', 'It is cold', 'It has cold', 'It does cold'],
            correct: 1,
            explanation: 'In English we use "It is + adjective" for weather: "It is cold" (Está frio). NOT "It makes cold" (common mistake from "faz frio").'
          },
          {
            type: 'fill-blank',
            question: 'Take an umbrella — it is ___ outside.',
            answer: 'raining',
            hint: 'Water falling from the sky — "a chover"',
            explanation: '"It is raining" = "Está a chover". We use the present continuous (is + -ing) for current weather.'
          },
          {
            type: 'true-false',
            statement: 'In English, we say "It makes hot" to describe hot weather.',
            correct: false,
            explanation: 'We say "It is hot" (Está calor), NOT "It makes hot". This is a common mistake from Portuguese "Faz calor". English uses "It is" for weather.'
          },
          {
            type: 'translation',
            question: 'Hoje está muito frio e está a nevar.',
            answer: ['Today it is very cold and it is snowing', "Today it's very cold and it's snowing"],
            from: 'PT', to: 'EN',
            hint: 'Today + it is + very cold + and + it is + snowing',
            explanation: '"Frio" = "cold". "Nevar" = "to snow". "Está a nevar" = "it is snowing". Remember: "it IS" not "it MAKES"!'
          },
          {
            type: 'fill-blank',
            question: 'The ___ is shining brightly today.',
            answer: 'sun',
            hint: 'The star that gives us light and heat — "sol"',
            explanation: '"The sun is shining" = "O sol está a brilhar". This means it is a sunny day.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['What', 'is', 'the', 'weather', 'like', 'today'],
            correct: 'What is the weather like today',
            explanation: '"What is the weather like?" is the standard question to ask about weather. Note the use of "like" at the end.'
          },
          {
            type: 'listening',
            sentence: 'It is going to be foggy and cold this morning, but sunny in the afternoon.',
            question: 'What will the weather be like in the afternoon?',
            hint: 'The sentence describes two different times of day',
            explanation: 'In the afternoon it will be sunny. In the morning it will be foggy (nevoeiro) and cold. "Going to be" = future prediction.'
          }
        ]
      },
      {
        id: 'a1-mx3-l2',
        title: 'Seasons & Activities',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each season to an activity commonly associated with it:',
            pairs: [
              { left: 'Summer', right: 'Go to the beach' },
              { left: 'Winter', right: 'Build a snowman' },
              { left: 'Spring', right: 'See flowers bloom' },
              { left: 'Autumn/Fall', right: 'See leaves change color' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'In American English, what is another word for "Autumn"?',
            options: ['Drop', 'Fall', 'Down', 'Leaf'],
            correct: 1,
            explanation: '"Fall" is the American English word for "Autumn" (Outono). It comes from "the fall of the leaves".'
          },
          {
            type: 'translation',
            question: 'No verão, eu gosto de ir à praia.',
            answer: ['In summer I like to go to the beach', 'In the summer I like going to the beach', 'In summer I like going to the beach'],
            from: 'PT', to: 'EN',
            hint: 'In + season + I like + to go to + the beach',
            explanation: '"No verão" = "In summer" or "In the summer". "Ir à praia" = "go to the beach". Both "like to go" and "like going" are correct.'
          },
          {
            type: 'fill-blank',
            question: 'In ___, the trees lose their leaves.',
            answer: 'autumn',
            hint: 'The season between summer and winter — "outono"',
            explanation: '"Autumn" (or "Fall" in American English) is when trees lose their leaves. It is from September to November in the Northern Hemisphere.'
          },
          {
            type: 'true-false',
            statement: 'In English, we say "in summer" (no article needed before the season).',
            correct: true,
            explanation: 'Both "in summer" and "in the summer" are correct in English. The article "the" is optional with seasons.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['I', 'love', 'skiing', 'in', 'the', 'winter'],
            correct: 'I love skiing in the winter',
            explanation: '"I love skiing in the winter." Subject + love + activity(-ing) + in + season.'
          },
          {
            type: 'multiple-choice',
            question: 'Which season comes after winter?',
            options: ['Summer', 'Autumn', 'Spring', 'Fall'],
            correct: 2,
            explanation: 'Spring (Primavera) comes after winter. The order is: Winter → Spring → Summer → Autumn/Fall.'
          },
          {
            type: 'listening',
            sentence: 'My favorite season is spring because the flowers start to bloom and the days get longer.',
            question: 'Why does the speaker like spring?',
            hint: 'Two reasons are given — one about nature and one about daylight',
            explanation: 'The speaker likes spring because flowers bloom (florescem) and the days get longer (os dias ficam mais longos).'
          }
        ]
      },
      {
        id: 'a1-mx3-l3',
        title: 'Weather Conversations',
        type: 'conversation',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Someone says "Lovely day, isn\'t it?" What is the best response?',
            options: [
              'No, I am not.',
              'Yes, it really is!',
              'Thank you very much.',
              'I don\'t know the day.'
            ],
            correct: 1,
            explanation: '"Lovely day, isn\'t it?" is small talk about nice weather. "Yes, it really is!" is a natural, friendly response.'
          },
          {
            type: 'fill-blank',
            question: 'Terrible weather we are having, ___?',
            answer: "aren't we",
            hint: 'A question tag to confirm agreement — uses the negative of "are"',
            explanation: 'Question tags are very common in British English for small talk: "...aren\'t we?", "...isn\'t it?". They invite agreement.'
          },
          {
            type: 'translation',
            question: 'Parece que vai chover amanhã.',
            answer: ['It looks like it is going to rain tomorrow', "It looks like it's going to rain tomorrow", 'It seems like it will rain tomorrow'],
            from: 'PT', to: 'EN',
            hint: 'It looks like + it is going to + rain + tomorrow',
            explanation: '"Parece que" = "It looks like" or "It seems like". "Vai chover" = "it is going to rain" or "it will rain".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['Do', 'you', 'think', 'it', 'will', 'snow', 'tonight'],
            correct: 'Do you think it will snow tonight',
            explanation: '"Do you think...?" is a polite way to ask for an opinion about the weather. "Will" is used for future predictions.'
          },
          {
            type: 'true-false',
            statement: 'In the UK, talking about the weather is a very common way to start a conversation with strangers.',
            correct: true,
            explanation: 'Yes! The British are famous for talking about the weather. It is the most common form of "small talk" in the UK.'
          },
          {
            type: 'listening',
            sentence: 'You should bring a jacket — it might get chilly later this evening.',
            question: 'What advice is given and why?',
            hint: 'Think about what "chilly" means and what a "jacket" is for',
            explanation: 'The advice is to bring a jacket (casaco) because it might get chilly (frio/fresco) in the evening. "Might" = possibility.'
          },
          {
            type: 'fill-blank',
            question: 'The ___ says it will be 30 degrees tomorrow.',
            answer: 'forecast',
            hint: 'The weather prediction on TV or radio — "previsão"',
            explanation: '"Weather forecast" = "previsão do tempo". It tells you what the weather will be like.'
          },
          {
            type: 'translation',
            question: 'Está muito calor hoje! Vamos à piscina?',
            answer: ["It's very hot today! Shall we go to the pool?", "It is very hot today! Shall we go to the pool?", "It's very hot today! Let's go to the pool?"],
            from: 'PT', to: 'EN',
            hint: 'It is + very + hot + today + Shall we go to + the pool',
            explanation: '"Está calor" = "It is hot" (NOT "It makes hot"). "Vamos à piscina?" = "Shall we go to the pool?" or "Let\'s go to the pool!".'
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 4: Hobbies & Free Time
  // ============================================================
  {
    id: 'a1-mx4',
    title: 'Hobbies & Free Time',
    description: 'Talk about sports, entertainment, and weekend plans',
    icon: '⚽',
    lessons: [
      {
        id: 'a1-mx4-l1',
        title: 'Sports & Activities',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which verb do we use with "football" (soccer)?',
            options: ['Do football', 'Make football', 'Play football', 'Go football'],
            correct: 2,
            explanation: 'We "play" team sports and ball games: play football, play basketball, play tennis. "Jogar" = "play".'
          },
          {
            type: 'matching',
            question: 'Match the sport with the correct verb:',
            pairs: [
              { left: 'Play', right: 'Basketball' },
              { left: 'Go', right: 'Swimming' },
              { left: 'Do', right: 'Yoga' },
              { left: 'Go', right: 'Running' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'She ___ swimming every morning before work.',
            answer: 'goes',
            hint: 'We use "go" + verb-ing for activities: go swimming, go running...',
            explanation: '"Goes swimming" — we use "go + -ing" for many sports/activities. "She goes" (third person singular).'
          },
          {
            type: 'true-false',
            statement: 'In English, we say "I do swimming" for the activity of swimming.',
            correct: false,
            explanation: 'We say "I GO swimming" (not "do swimming"). Use "go + -ing": go swimming, go running, go cycling. Use "do" for: do yoga, do karate, do gymnastics.'
          },
          {
            type: 'translation',
            question: 'Eu jogo futebol às quartas-feiras.',
            answer: ['I play football on Wednesdays', 'I play soccer on Wednesdays'],
            from: 'PT', to: 'EN',
            hint: 'I + play + sport + on + day(s)',
            explanation: '"Jogar futebol" = "play football/soccer". Use "on" before days of the week. Days are capitalized in English!'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['We', 'like', 'to', 'go', 'hiking', 'on', 'weekends'],
            correct: 'We like to go hiking on weekends',
            explanation: 'Subject + like + to go + activity(-ing) + time. "Hiking" = "fazer caminhadas/trilhos".'
          },
          {
            type: 'listening',
            sentence: 'I usually play tennis on Saturdays, but this week I am going cycling instead.',
            question: 'What is the person doing differently this week?',
            hint: 'Listen for what they usually do vs. what they are doing this week',
            explanation: 'Usually they play tennis, but this week they are going cycling instead. "Instead" = "em vez disso".'
          },
          {
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'I do yoga three times a week.',
              'I play yoga three times a week.',
              'I go yoga three times a week.',
              'I make yoga three times a week.'
            ],
            correct: 0,
            explanation: 'We "DO yoga" (not play or go). Use "do" for individual, non-team activities without a ball: do yoga, do karate, do pilates.'
          }
        ]
      },
      {
        id: 'a1-mx4-l2',
        title: 'Entertainment',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'What is the English word for "filme"?',
            options: ['Film', 'Filma', 'Filme', 'Filming'],
            correct: 0,
            explanation: '"Film" (British) or "movie" (American) = "filme" in Portuguese. Both are widely understood.'
          },
          {
            type: 'fill-blank',
            question: 'I love ___ to music while I cook.',
            answer: 'listening',
            hint: 'The -ing form of "listen" — "ouvir"',
            explanation: '"Listening to music" = "ouvir música". Note: in English we say "listen TO" (not just "listen music").'
          },
          {
            type: 'translation',
            question: 'Gosto de ler livros antes de dormir.',
            answer: ['I like reading books before sleeping', 'I like to read books before sleeping', 'I like reading books before going to sleep', 'I like to read books before bed'],
            from: 'PT', to: 'EN',
            hint: 'I like + reading/to read + books + before + sleeping',
            explanation: '"Ler" = "to read" or "reading". "Antes de dormir" = "before sleeping" or "before bed". Both "like reading" and "like to read" are correct.'
          },
          {
            type: 'matching',
            question: 'Match the entertainment type to its description:',
            pairs: [
              { left: 'Concert', right: 'Live music performance' },
              { left: 'Cinema', right: 'Place to watch films' },
              { left: 'Novel', right: 'A long book with a story' },
              { left: 'Podcast', right: 'Audio show online' }
            ]
          },
          {
            type: 'true-false',
            statement: '"Actually" in English means "atualmente" (currently) in Portuguese.',
            correct: false,
            explanation: 'False friend alert! "Actually" = "na verdade" (in fact). "Currently/At the moment" = "atualmente". This is one of the most common mistakes for Portuguese speakers.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['What', 'kind', 'of', 'music', 'do', 'you', 'like'],
            correct: 'What kind of music do you like',
            explanation: '"What kind of...?" = "Que tipo de...?" is how we ask about preferences in categories.'
          },
          {
            type: 'fill-blank',
            question: 'My favourite TV ___ is about a group of friends living in New York.',
            answer: 'show',
            hint: 'Another word for a TV series or program — "programa/série"',
            explanation: '"TV show" = "programa/série de televisão". A popular example is "Friends"!'
          },
          {
            type: 'listening',
            sentence: 'I prefer watching documentaries to watching action films because I learn something new every time.',
            question: 'What type of films does the speaker prefer and why?',
            hint: 'Listen for the comparison between two types of films',
            explanation: 'The speaker prefers documentaries (documentários) because they learn something new. "Prefer...to..." = "preferir...a...".'
          }
        ]
      },
      {
        id: 'a1-mx4-l3',
        title: 'Weekend Plans',
        type: 'conversation',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'How do you ask someone about their weekend plans?',
            options: [
              'What do you make this weekend?',
              'What are you doing this weekend?',
              'What have you this weekend?',
              'What you do this weekend?'
            ],
            correct: 1,
            explanation: '"What are you doing this weekend?" uses the present continuous for future plans. This is very natural in English.'
          },
          {
            type: 'translation',
            question: 'O que costumas fazer aos fins de semana?',
            answer: ['What do you usually do on weekends?', 'What do you usually do at the weekend?', 'What do you usually do at weekends?'],
            from: 'PT', to: 'EN',
            hint: 'What + do you + usually + do + on weekends',
            explanation: '"Costumar fazer" = "usually do". "Fins de semana" = "weekends". American: "on weekends". British: "at the weekend".'
          },
          {
            type: 'fill-blank',
            question: 'I usually ___ out with friends on Saturday evenings.',
            answer: 'go',
            hint: 'To leave the house to socialize — "sair"',
            explanation: '"Go out" = "sair". "I go out with friends" = "Eu saio com amigos".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['On', 'Sundays', 'I', 'like', 'to', 'stay', 'home', 'and', 'relax'],
            correct: 'On Sundays I like to stay home and relax',
            explanation: 'Time expression + Subject + like to + activities. "Stay home" = "ficar em casa". "Relax" = "relaxar/descansar".'
          },
          {
            type: 'true-false',
            statement: 'In English, "I am going to the cinema" can be a plan for the future, not just something happening right now.',
            correct: true,
            explanation: 'Yes! Present continuous (am/is/are + -ing) is used for definite future plans: "I am going to the cinema tonight" = "Vou ao cinema logo à noite".'
          },
          {
            type: 'listening',
            sentence: 'This weekend I am going to visit my grandparents. We are going to have lunch together and then go for a walk in the park.',
            question: 'What three things will the speaker do this weekend?',
            hint: 'Listen for three different activities mentioned',
            explanation: 'The speaker will: 1) visit grandparents (visitar os avós), 2) have lunch together (almoçar juntos), 3) go for a walk in the park (passear no parque).'
          },
          {
            type: 'translation',
            question: 'Não tenho planos para este fim de semana.',
            answer: ["I don't have plans for this weekend", "I don't have any plans for this weekend", 'I have no plans for this weekend'],
            from: 'PT', to: 'EN',
            hint: "I + don't have + plans + for + this weekend",
            explanation: '"Não tenho planos" = "I don\'t have plans" or "I have no plans". Both are natural in English.'
          },
          {
            type: 'fill-blank',
            question: 'Would you like to ___ to the cinema with me on Friday?',
            answer: 'come',
            hint: 'To go with someone — this word sounds like an invitation',
            explanation: '"Would you like to come...?" is a polite invitation. "Come" = "vir". This is more natural than "Would you like to go" when inviting someone to join you.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 5: The Home
  // ============================================================
  {
    id: 'a1-mx5',
    title: 'The Home',
    description: 'Learn about rooms, furniture, and how to describe your home',
    icon: '🏠',
    lessons: [
      {
        id: 'a1-mx5-l1',
        title: 'Rooms & Furniture',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each room to what you usually do there:',
            pairs: [
              { left: 'Kitchen', right: 'Cook food' },
              { left: 'Bedroom', right: 'Sleep' },
              { left: 'Bathroom', right: 'Take a shower' },
              { left: 'Living room', right: 'Watch TV' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Where do you usually find a fridge?',
            options: ['Bedroom', 'Bathroom', 'Kitchen', 'Garage'],
            correct: 2,
            explanation: 'A fridge (frigorífico) is found in the kitchen (cozinha). "Fridge" is short for "refrigerator".'
          },
          {
            type: 'fill-blank',
            question: 'I sleep in a comfortable ___ every night.',
            answer: 'bed',
            hint: 'The main piece of furniture in a bedroom — "cama"',
            explanation: '"Bed" = "cama". "Comfortable" = "confortável". The bed is in the bedroom (quarto).'
          },
          {
            type: 'translation',
            question: 'A cozinha tem uma mesa e quatro cadeiras.',
            answer: ['The kitchen has a table and four chairs'],
            from: 'PT', to: 'EN',
            hint: 'The + room + has + a table + and + number + chairs',
            explanation: '"Cozinha" = "kitchen". "Mesa" = "table". "Cadeiras" = "chairs". Use "has" (not "have") because "kitchen" is singular.'
          },
          {
            type: 'true-false',
            statement: '"Wardrobe" and "closet" mean the same thing in English.',
            correct: true,
            explanation: '"Wardrobe" (British) and "closet" (American) both mean "guarda-roupa/armário". A wardrobe can also be a standalone piece of furniture.'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['The', 'sofa', 'is', 'in', 'the', 'living', 'room'],
            correct: 'The sofa is in the living room',
            explanation: '"Sofa" = "sofá". "Living room" = "sala de estar". In English, "living room" is two words used together.'
          },
          {
            type: 'listening',
            sentence: 'My apartment has two bedrooms, one bathroom, a kitchen, and a small balcony.',
            question: 'How many bedrooms does the apartment have?',
            hint: 'Listen for the number before "bedrooms"',
            explanation: 'The apartment has two bedrooms. It also has one bathroom, a kitchen, and a small balcony (varanda).'
          },
          {
            type: 'multiple-choice',
            question: 'What piece of furniture do you sit on in the living room?',
            options: ['Desk', 'Sofa', 'Shelf', 'Oven'],
            correct: 1,
            explanation: 'You sit on a sofa (sofá) in the living room. Desk = secretária, Shelf = prateleira, Oven = forno.'
          }
        ]
      },
      {
        id: 'a1-mx5-l2',
        title: 'There Is / There Are',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is correct? "___ a cat on the sofa."',
            options: ['There are', 'There is', 'It has', 'Have'],
            correct: 1,
            explanation: '"There is" (singular) for one thing: "There is a cat". "There are" (plural) for more than one: "There are two cats".'
          },
          {
            type: 'fill-blank',
            question: 'There ___ three books on the table.',
            answer: 'are',
            hint: 'Use "is" for singular and "are" for plural',
            explanation: '"There ARE three books" — use "are" because "books" is plural. "Há três livros" in Portuguese.'
          },
          {
            type: 'true-false',
            statement: '"There is" and "There are" both translate to "Há" in Portuguese.',
            correct: true,
            explanation: 'Yes! "Há" can mean both "there is" (singular) and "there are" (plural). In English, you must choose based on the number.'
          },
          {
            type: 'translation',
            question: 'Há uma janela grande na sala.',
            answer: ['There is a big window in the living room', 'There is a large window in the living room'],
            from: 'PT', to: 'EN',
            hint: 'There is + a + adjective + noun + in + the room',
            explanation: '"Há" = "There is" (singular). "Janela grande" = "big/large window". Adjective before noun in English!'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['there', 'Are', 'any', 'pictures', 'on', 'the', 'wall'],
            correct: 'Are there any pictures on the wall',
            explanation: 'Questions invert the order: "Are there...?" = "Há...?" (question). "Any" is used in questions and negatives.'
          },
          {
            type: 'fill-blank',
            question: 'There ___ not any milk in the fridge.',
            answer: 'is',
            hint: '"Milk" is uncountable — use singular',
            explanation: '"There is not" (or "There isn\'t") for singular and uncountable nouns. Milk is uncountable, so use "is".'
          },
          {
            type: 'listening',
            sentence: 'In my bedroom, there is a bed, a desk, and there are two shelves on the wall.',
            question: 'What furniture is in the bedroom?',
            hint: 'Listen for items after "there is" and "there are"',
            explanation: 'A bed (cama), a desk (secretária), and two shelves (prateleiras). "There is" for the single items, "there are" for the shelves (plural).'
          },
          {
            type: 'multiple-choice',
            question: 'Which is the correct negative form?',
            options: [
              'There no is a garden.',
              'There isn\'t a garden.',
              'There not is a garden.',
              'No there is a garden.'
            ],
            correct: 1,
            explanation: '"There isn\'t a garden" = "Não há jardim". The negative is "There is not" or contracted "There isn\'t".'
          }
        ]
      },
      {
        id: 'a1-mx5-l3',
        title: 'Describing Your Home',
        type: 'conversation',
        exercises: [
          {
            type: 'translation',
            question: 'Eu vivo num apartamento pequeno no centro da cidade.',
            answer: ['I live in a small apartment in the city center', 'I live in a small apartment in the city centre', 'I live in a small flat in the city center', 'I live in a small flat in the city centre'],
            from: 'PT', to: 'EN',
            hint: 'I live + in + a + adjective + home type + in + the city center',
            explanation: '"Apartamento" = "apartment" (US) / "flat" (UK). "Centro da cidade" = "city center" (US) / "city centre" (UK).'
          },
          {
            type: 'fill-blank',
            question: 'My house has a big ___ where my children play.',
            answer: 'garden',
            hint: 'An outdoor area with grass and plants — "jardim"',
            explanation: '"Garden" = "jardim". In American English, "yard" is also common for the outdoor area.'
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence correctly describes a home?',
            options: [
              'My home have three rooms.',
              'My home has three rooms.',
              'My home is have three rooms.',
              'My home are three rooms.'
            ],
            correct: 1,
            explanation: '"My home has three rooms." Use "has" (not "have") because "my home" is third person singular.'
          },
          {
            type: 'translation',
            question: 'O meu quarto é o meu lugar favorito da casa.',
            answer: ['My bedroom is my favorite place in the house', 'My bedroom is my favourite place in the house', 'My room is my favorite place in the house', 'My room is my favourite place in the house'],
            from: 'PT', to: 'EN',
            hint: 'My + room + is + my favorite + place + in the house',
            explanation: '"Quarto" = "bedroom" or "room". "Lugar favorito" = "favorite/favourite place". "Da casa" = "in the house".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['We', 'moved', 'to', 'a', 'new', 'house', 'last', 'month'],
            correct: 'We moved to a new house last month',
            explanation: '"Moved" = "mudámos" (past tense of "move"). "Last month" = "mês passado". Time expressions often go at the end.'
          },
          {
            type: 'true-false',
            statement: 'In English, "floor" can mean both "chão" (the surface you walk on) and "andar" (level of a building).',
            correct: true,
            explanation: 'Yes! "Floor" has two meanings: the surface (chão) and the level of a building (andar). "I live on the third floor" = "Moro no terceiro andar".'
          },
          {
            type: 'listening',
            sentence: 'My dream house is a cottage in the countryside with a big garden and a swimming pool.',
            question: 'Where does the speaker want to live and what features does the house have?',
            hint: 'Listen for the location and two special features',
            explanation: 'The speaker wants a cottage (casa de campo) in the countryside (campo) with a big garden (jardim grande) and a swimming pool (piscina).'
          },
          {
            type: 'fill-blank',
            question: 'The kitchen is ___ to the living room.',
            answer: 'next',
            hint: 'A word meaning "beside" or "ao lado de"',
            explanation: '"Next to" = "ao lado de". This preposition of place is essential for describing the layout of a home.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // MODULE 6: Verb To Be — Deep Practice
  // ============================================================
  {
    id: 'a1-mx6',
    title: 'Verb To Be — Deep Practice',
    description: 'Master am/is/are, possessives, and demonstratives',
    icon: '📝',
    lessons: [
      {
        id: 'a1-mx6-l1',
        title: 'Am / Is / Are',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Choose the correct form: "She ___ a teacher."',
            options: ['am', 'is', 'are', 'be'],
            correct: 1,
            explanation: '"She IS a teacher." Use: I am, You are, He/She/It is, We are, They are.'
          },
          {
            type: 'fill-blank',
            question: 'We ___ students at this school.',
            answer: 'are',
            hint: 'The form of "to be" used with "we"',
            explanation: '"We ARE students." "We" always uses "are". "Nós somos/estamos" = "We are".'
          },
          {
            type: 'translation',
            question: 'Eles não são de Lisboa.',
            answer: ['They are not from Lisbon', "They aren't from Lisbon", "They're not from Lisbon"],
            from: 'PT', to: 'EN',
            hint: 'They + are + not + from + city',
            explanation: '"Não são" = "are not" or "aren\'t". "De Lisboa" = "from Lisbon".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order to make a question:',
            words: ['Is', 'your', 'brother', 'at', 'home'],
            correct: 'Is your brother at home',
            explanation: 'Questions with "to be": Is/Am/Are + subject + rest. "Is your brother at home?" = "O teu irmão está em casa?"'
          },
          {
            type: 'true-false',
            statement: '"I amn\'t" is the correct negative contraction of "I am not".',
            correct: false,
            explanation: 'There is no "amn\'t" in standard English! The negative is "I am not" or contracted "I\'m not". (In some Scottish dialects, "amn\'t" exists, but it\'s non-standard.)'
          },
          {
            type: 'fill-blank',
            question: '___ you from Brazil or Portugal?',
            answer: 'Are',
            hint: 'The form of "to be" used with "you" — but at the start of a question',
            explanation: '"Are you from...?" inverts the subject and verb to form a question. "Tu és" → "Are you?"'
          },
          {
            type: 'listening',
            sentence: 'I am 28 years old. I am from Porto, but I am living in London now.',
            question: 'Where is the person from and where do they live now?',
            hint: 'Listen for two different cities',
            explanation: 'The person is from Porto (origin) but is living in London now (current location). Note "am living" = present continuous for temporary situation.'
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence is INCORRECT?',
            options: [
              'I am happy.',
              'She is a doctor.',
              'They is my friends.',
              'We are tired.'
            ],
            correct: 2,
            explanation: '"They IS" is wrong. "They" always uses "are": "They ARE my friends." Common error for beginners.'
          }
        ]
      },
      {
        id: 'a1-mx6-l2',
        title: 'Possessives: My, Your, His, Her, Our, Their',
        type: 'grammar',
        exercises: [
          {
            type: 'matching',
            question: 'Match the possessive adjective to the correct subject pronoun:',
            pairs: [
              { left: 'I', right: 'My' },
              { left: 'He', right: 'His' },
              { left: 'She', right: 'Her' },
              { left: 'They', right: 'Their' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'Maria loves ___ new job.',
            answer: 'her',
            hint: 'Maria is "she" — what possessive goes with "she"?',
            explanation: '"Her" is the possessive adjective for "she". Maria loves HER new job. "O seu novo emprego" (dela).'
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "The children are playing with ___ toys."',
            options: ['his', 'your', 'their', 'its'],
            correct: 2,
            explanation: '"Children" is plural ("they"), so we use "their". "As crianças estão a brincar com os seus brinquedos."'
          },
          {
            type: 'translation',
            question: 'O nosso professor é muito simpático.',
            answer: ['Our teacher is very nice', 'Our teacher is very friendly', 'Our teacher is very kind'],
            from: 'PT', to: 'EN',
            hint: 'Our + teacher + is + very + adjective',
            explanation: '"Nosso" = "Our". "Simpático" can be "nice", "friendly", or "kind" in English.'
          },
          {
            type: 'true-false',
            statement: '"Its" (without apostrophe) is the possessive form of "it".',
            correct: true,
            explanation: '"Its" = possessive (The dog wagged its tail). "It\'s" = "it is". This is one of the most common mistakes, even for native speakers!'
          },
          {
            type: 'fill-blank',
            question: 'Is this ___ book or mine?',
            answer: 'your',
            hint: 'The possessive adjective for "you" — "teu/tua"',
            explanation: '"Your" = "teu/tua/seu/sua". "Is this your book or mine?" = "Este livro é teu ou meu?"'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['His', 'mother', 'and', 'father', 'live', 'in', 'Porto'],
            correct: 'His mother and father live in Porto',
            explanation: 'Possessive + family members + verb + place. "His" because we are talking about a male person\'s parents.'
          },
          {
            type: 'listening',
            sentence: 'My name is Anna. My brother\'s name is Tom. Our parents live in Lisbon, and their house is near the river.',
            question: 'Whose house is near the river?',
            hint: 'Listen carefully to the possessive — "their" refers to whom?',
            explanation: 'Their (the parents\') house is near the river. "Their" refers to "our parents" — the parents of Anna and Tom.'
          }
        ]
      },
      {
        id: 'a1-mx6-l3',
        title: 'This/That/These/Those & Articles',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'You point at a book far away and say:',
            options: ['This book', 'That book', 'These book', 'Those book'],
            correct: 1,
            explanation: '"That" = far, singular. "This" = near, singular. "Those" = far, plural. "These" = near, plural.'
          },
          {
            type: 'fill-blank',
            question: '___ shoes over there are very expensive.',
            answer: 'Those',
            hint: 'Far + plural = ?',
            explanation: '"Those" = far + plural. "Those shoes OVER THERE" = "Aqueles sapatos ali". "Over there" confirms the distance.'
          },
          {
            type: 'true-false',
            statement: 'We use "an" before words that start with a vowel sound, like "an apple" or "an hour".',
            correct: true,
            explanation: '"An" goes before vowel SOUNDS: "an apple" (starts with /a/), "an hour" (starts with /au/, the H is silent). Note: "a university" because it starts with /ju/ sound.'
          },
          {
            type: 'matching',
            question: 'Match the demonstrative to the correct usage:',
            pairs: [
              { left: 'This', right: 'Near + singular' },
              { left: 'These', right: 'Near + plural' },
              { left: 'That', right: 'Far + singular' },
              { left: 'Those', right: 'Far + plural' }
            ]
          },
          {
            type: 'translation',
            question: 'Estas flores são bonitas.',
            answer: ['These flowers are beautiful', 'These flowers are pretty'],
            from: 'PT', to: 'EN',
            hint: 'These (near + plural) + flowers + are + beautiful',
            explanation: '"Estas" = "These" (near, plural). "Flores" = "flowers". "Bonitas" = "beautiful/pretty".'
          },
          {
            type: 'fill-blank',
            question: 'She is ___ engineer at a big company.',
            answer: 'an',
            hint: '"Engineer" starts with a vowel sound — which article do we use?',
            explanation: '"An" before vowel sounds: "an engineer" (starts with /e/). NOT "a engineer".'
          },
          {
            type: 'reorder',
            question: 'Put the words in the correct order:',
            words: ['Is', 'this', 'the', 'right', 'bus', 'to', 'the', 'airport'],
            correct: 'Is this the right bus to the airport',
            explanation: '"Is this the right...?" = "Este é o ... certo?". A common question when using public transport.'
          },
          {
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'I need a umbrella.',
              'I need an umbrella.',
              'I need the an umbrella.',
              'I need umbrella.'
            ],
            correct: 1,
            explanation: '"An umbrella" — use "an" before "umbrella" because it starts with a vowel sound (/ʌ/). "Eu preciso de um guarda-chuva."'
          }
        ]
      }
    ]
  }
]
