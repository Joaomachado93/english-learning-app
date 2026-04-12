export const megaB2Modules = [
  // ===== Module 1: Mixed Conditionals =====
  {
    id: 'b2-mx1',
    title: 'Mixed Conditionals',
    description: 'Master all conditional forms and their combinations',
    icon: '🔀',
    lessons: [
      {
        id: 'b2-mx1-l1',
        title: 'If + Past Perfect, Would + Base Verb',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence correctly uses a mixed conditional (past condition, present result)?',
            options: [
              'If I had studied medicine, I would be a doctor now.',
              'If I studied medicine, I would be a doctor now.',
              'If I have studied medicine, I will be a doctor now.',
              'If I would study medicine, I would be a doctor now.'
            ],
            correct: 0,
            explanation: 'A mixed conditional combining a past condition (If + past perfect) with a present result (would + base verb): "If I had studied medicine, I would be a doctor now."'
          },
          {
            type: 'fill-blank',
            question: 'If she ___ (not/move) to London, she wouldn\'t speak English so well.',
            answer: "hadn't moved",
            hint: 'Past perfect negative form',
            explanation: 'The if-clause uses the past perfect ("hadn\'t moved") because we are talking about a past action that affects the present result.'
          },
          {
            type: 'translation',
            question: 'Se eu tivesse nascido em Inglaterra, falaria inglês fluentemente.',
            answer: [
              'If I had been born in England, I would speak English fluently',
              'If I had been born in England I would speak English fluently'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'If + had been born... would + speak',
            explanation: '"Tivesse nascido" = "had been born" (past perfect passive). "Falaria" = "would speak" (present conditional).'
          },
          {
            type: 'true-false',
            statement: 'In the sentence "If I had taken that job, I would be living in Paris now," the if-clause refers to the past and the main clause refers to the present.',
            correct: true,
            explanation: 'This is a mixed conditional: "had taken" is past perfect (past action), and "would be living" refers to the present/ongoing situation.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct mixed conditional:',
            words: ['If', 'we', 'had', 'left', 'earlier,', 'we', 'wouldn\'t', 'be', 'stuck', 'in', 'traffic', 'now.'],
            correct: "If we had left earlier, we wouldn't be stuck in traffic now.",
            explanation: 'Past condition (had left) leads to a present result (wouldn\'t be stuck now).'
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "If he ___ the lottery, he ___ rich today."',
            options: [
              'had won / would be',
              'won / would be',
              'has won / will be',
              'had won / would have been'
            ],
            correct: 0,
            explanation: 'Mixed conditional: past condition (had won) + present result (would be). "Would have been" would refer to a past result, not a present one.'
          },
          {
            type: 'listening',
            sentence: 'If I had learned to code as a teenager, I would have a much better job now.',
            question: 'What does the speaker regret?',
            hint: 'Think about what they wish they had done in the past',
            explanation: 'The speaker regrets not learning to code as a teenager. The mixed conditional shows a past missed action affecting the present situation.'
          },
          {
            type: 'fill-blank',
            question: 'If they ___ (invest) in Bitcoin years ago, they ___ (be) millionaires today.',
            answer: 'had invested, would be',
            hint: 'Past perfect + would + base form',
            explanation: '"Had invested" (past perfect for the unreal past condition) + "would be" (present conditional for the current result).'
          }
        ]
      },
      {
        id: 'b2-mx1-l2',
        title: 'If + Past Simple, Would + Have + Past Participle',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence uses a mixed conditional with a present condition and a past result?',
            options: [
              'If I were braver, I would have asked her out.',
              'If I had been braver, I would have asked her out.',
              'If I am braver, I will ask her out.',
              'If I was braver, I would ask her out.'
            ],
            correct: 0,
            explanation: '"If I were braver" (present unreal condition using subjunctive) + "I would have asked" (past unreal result). This means: I am not brave (now), so I didn\'t ask (then).'
          },
          {
            type: 'fill-blank',
            question: 'If she ___ (not/be) so shy, she would have introduced herself at the party.',
            answer: "weren't so shy",
            hint: 'Use the subjunctive form for present unreal condition',
            explanation: '"Weren\'t so shy" describes a permanent characteristic (present), and "would have introduced" refers to a past missed opportunity.'
          },
          {
            type: 'translation',
            question: 'Se eu fosse mais organizado, teria terminado o projeto a tempo.',
            answer: [
              'If I were more organized, I would have finished the project on time',
              'If I was more organized, I would have finished the project on time'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'If + were/was + adjective, would have + past participle',
            explanation: '"Fosse" = "were" (present unreal). "Teria terminado" = "would have finished" (past unreal result). Both "were" and "was" are accepted, but "were" is more formal.'
          },
          {
            type: 'true-false',
            statement: '"If he spoke better English, he would have got the job" mixes a present unreal condition with a past unreal result.',
            correct: true,
            explanation: '"Spoke" (past simple for present unreal — he doesn\'t speak well now) + "would have got" (past unreal — he didn\'t get the job). This is indeed a mixed conditional.'
          },
          {
            type: 'matching',
            question: 'Match each condition (present) with its past result:',
            pairs: [
              { left: 'If I weren\'t so lazy,', right: 'I would have passed the exam.' },
              { left: 'If she liked spicy food,', right: 'she would have enjoyed the Thai restaurant.' },
              { left: 'If he were taller,', right: 'he would have been accepted on the basketball team.' },
              { left: 'If we lived closer,', right: 'we would have visited you last weekend.' }
            ]
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct mixed conditional:',
            words: ['If', 'I', 'weren\'t', 'afraid', 'of', 'heights,', 'I', 'would', 'have', 'gone', 'skydiving', 'last', 'summer.'],
            correct: "If I weren't afraid of heights, I would have gone skydiving last summer.",
            explanation: 'Present condition (weren\'t afraid — still true now) + past result (would have gone — missed opportunity last summer).'
          },
          {
            type: 'multiple-choice',
            question: 'What does this sentence mean? "If Maria knew how to drive, she would have taken the car yesterday."',
            options: [
              'Maria can\'t drive (present), so she didn\'t take the car (past).',
              'Maria learned to drive, so she took the car.',
              'Maria will learn to drive and take the car.',
              'Maria could drive before but can\'t now.'
            ],
            correct: 0,
            explanation: 'The mixed conditional tells us: Maria doesn\'t know how to drive (present reality), which is why she didn\'t take the car yesterday (past consequence).'
          },
          {
            type: 'fill-blank',
            question: 'If we ___ (like) seafood, we would have ordered the paella when we were in Spain.',
            answer: 'liked',
            hint: 'Past simple for a present unreal condition',
            explanation: '"Liked" expresses a present unreal condition (we don\'t like seafood now), and "would have ordered" is the past result (we didn\'t order it in Spain).'
          }
        ]
      },
      {
        id: 'b2-mx1-l3',
        title: 'All Conditionals Review (Zero to Third)',
        type: 'grammar',
        exercises: [
          {
            type: 'matching',
            question: 'Match each conditional type with the correct example:',
            pairs: [
              { left: 'Zero conditional', right: 'If you heat water to 100°C, it boils.' },
              { left: 'First conditional', right: 'If it rains tomorrow, I\'ll take an umbrella.' },
              { left: 'Second conditional', right: 'If I won the lottery, I would travel the world.' },
              { left: 'Third conditional', right: 'If I had known, I would have helped.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which conditional is used for general truths and scientific facts?',
            options: ['Zero conditional', 'First conditional', 'Second conditional', 'Third conditional'],
            correct: 0,
            explanation: 'The zero conditional (If + present simple, present simple) is used for facts that are always true: "If you mix red and blue, you get purple."'
          },
          {
            type: 'fill-blank',
            question: 'If I ___ (be) you, I would accept the offer. (second conditional)',
            answer: 'were',
            hint: 'The subjunctive form is preferred here',
            explanation: 'In the second conditional, "were" is used for all subjects (If I were, If he were). "Was" is sometimes used informally.'
          },
          {
            type: 'translation',
            question: 'Se eu tivesse sabido que estavas doente, ter-te-ia visitado.',
            answer: [
              'If I had known you were sick, I would have visited you',
              'If I had known that you were sick, I would have visited you',
              'If I had known you were ill, I would have visited you'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Third conditional: If + had known, would + have + visited',
            explanation: 'This is a third conditional: both the condition and the result are in the past. "Tivesse sabido" = "had known", "ter-te-ia visitado" = "would have visited you".'
          },
          {
            type: 'true-false',
            statement: 'The sentence "If I win the lottery, I will buy a house" is a second conditional.',
            correct: false,
            explanation: 'This is a first conditional (If + present simple, will + base verb). It describes a real/possible future situation. A second conditional would be: "If I won the lottery, I would buy a house."'
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "If she ___ earlier, she ___ the train."',
            options: [
              'had left / wouldn\'t have missed (3rd conditional)',
              'left / won\'t miss (1st conditional)',
              'leaves / doesn\'t miss (zero conditional)',
              'would leave / won\'t miss (incorrect)'
            ],
            correct: 0,
            explanation: 'The third conditional is used for unreal past situations: "If she had left earlier, she wouldn\'t have missed the train" — but she left late, so she missed it.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct first conditional:',
            words: ['If', 'you', 'study', 'hard,', 'you', 'will', 'pass', 'the', 'exam.'],
            correct: 'If you study hard, you will pass the exam.',
            explanation: 'First conditional: If + present simple ("study"), will + base verb ("will pass"). Used for real, likely future situations.'
          },
          {
            type: 'listening',
            sentence: 'If I hadn\'t forgotten my passport, we wouldn\'t have missed the flight.',
            question: 'Did they catch the flight?',
            hint: 'This is a third conditional — what does it tell us about what actually happened?',
            explanation: 'No, they missed the flight. The third conditional tells us the opposite happened: the speaker forgot the passport, and they missed the flight.'
          }
        ]
      }
    ]
  },

  // ===== Module 2: Advanced Passive =====
  {
    id: 'b2-mx2',
    title: 'Advanced Passive',
    description: 'Master passive constructions with modals, causatives, and reporting verbs',
    icon: '🔄',
    lessons: [
      {
        id: 'b2-mx2-l1',
        title: 'Passive with Modals',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Choose the correct passive form: "Someone should fix the road."',
            options: [
              'The road should be fixed.',
              'The road should been fixed.',
              'The road should fixed.',
              'The road should being fixed.'
            ],
            correct: 0,
            explanation: 'Modal + be + past participle: "should be fixed". The modal verb stays the same; only "be + past participle" changes.'
          },
          {
            type: 'fill-blank',
            question: 'The documents must ___ ___ before Friday. (sign)',
            answer: 'be signed',
            hint: 'Modal + be + past participle',
            explanation: 'Passive with "must": must + be + past participle = "must be signed".'
          },
          {
            type: 'translation',
            question: 'O edifício deve ter sido construído no século XIX.',
            answer: [
              'The building must have been built in the 19th century',
              'The building must have been built in the nineteenth century'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Must + have been + past participle',
            explanation: '"Deve ter sido construído" = "must have been built". This is a modal perfect passive, expressing a deduction about the past.'
          },
          {
            type: 'true-false',
            statement: '"The project could have been completed on time" is a passive form using a modal perfect.',
            correct: true,
            explanation: 'Yes: modal (could) + have been + past participle (completed) = modal perfect passive. It suggests the project was not completed on time, but it was possible.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct passive with modal:',
            words: ['The', 'results', 'might', 'be', 'announced', 'next', 'week.'],
            correct: 'The results might be announced next week.',
            explanation: 'Modal passive: "might be announced" — we don\'t know who will announce them, or the agent is unimportant.'
          },
          {
            type: 'matching',
            question: 'Match the active sentence with its passive equivalent:',
            pairs: [
              { left: 'They can solve the problem.', right: 'The problem can be solved.' },
              { left: 'Someone should have warned us.', right: 'We should have been warned.' },
              { left: 'They may cancel the event.', right: 'The event may be cancelled.' },
              { left: 'Someone must have stolen it.', right: 'It must have been stolen.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: '"The mistake _____ been avoided." Choose the best option.',
            options: [
              'could have',
              'could has',
              'could be',
              'could had'
            ],
            correct: 0,
            explanation: '"Could have been avoided" is the modal perfect passive. The structure is: modal + have + been + past participle.'
          },
          {
            type: 'fill-blank',
            question: 'This letter ought to ___ ___ by certified mail. (send)',
            answer: 'be sent',
            hint: 'Ought to + be + past participle',
            explanation: '"Ought to" works like a modal: ought to + be + past participle = "ought to be sent".'
          }
        ]
      },
      {
        id: 'b2-mx2-l2',
        title: 'Have/Get Something Done (Causative)',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'What does "I had my car repaired" mean?',
            options: [
              'I paid someone to repair my car.',
              'I repaired my car myself.',
              'My car was damaged.',
              'I will repair my car soon.'
            ],
            correct: 0,
            explanation: '"Have something done" (have + object + past participle) means you arrange for someone else to do it for you. "I had my car repaired" = I paid a mechanic.'
          },
          {
            type: 'fill-blank',
            question: 'She ___ her hair ___ every six weeks. (get/cut)',
            answer: 'gets, cut',
            hint: 'Get + object + past participle',
            explanation: '"Gets her hair cut" — the causative with "get" is slightly more informal than "have". She arranges for a hairdresser to cut her hair.'
          },
          {
            type: 'translation',
            question: 'Preciso de mandar arranjar o meu computador.',
            answer: [
              'I need to get my computer fixed',
              'I need to have my computer fixed',
              'I need to get my computer repaired',
              'I need to have my computer repaired'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Need to + have/get + object + past participle',
            explanation: '"Mandar arranjar" = "have/get something fixed/repaired". Both "have" and "get" are correct in the causative.'
          },
          {
            type: 'true-false',
            statement: '"I cut my hair" and "I had my hair cut" mean the same thing.',
            correct: false,
            explanation: '"I cut my hair" means you did it yourself. "I had my hair cut" means someone else (a hairdresser) cut it for you. The causative changes the meaning completely.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct causative sentence:',
            words: ['We', 'are', 'having', 'the', 'house', 'painted', 'next', 'month.'],
            correct: 'We are having the house painted next month.',
            explanation: 'Present continuous causative: "are having the house painted" — we\'ve arranged for painters to do it.'
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "You should ___ your eyes ___ regularly."',
            options: [
              'have / tested',
              'have / testing',
              'get / to test',
              'have / test'
            ],
            correct: 0,
            explanation: 'Causative: have + object + past participle = "have your eyes tested". This means arrange for an optician to test them.'
          },
          {
            type: 'listening',
            sentence: 'I\'m getting my kitchen renovated — it\'s going to take about three weeks.',
            question: 'Is the speaker renovating the kitchen themselves?',
            hint: 'Pay attention to the causative structure "getting something done"',
            explanation: 'No. "Getting my kitchen renovated" is a causative — the speaker has hired someone to do the renovation.'
          },
          {
            type: 'fill-blank',
            question: 'He had his wallet ___ on the train yesterday. (steal)',
            answer: 'stolen',
            hint: 'Have + object + past participle (here it describes something negative that happened)',
            explanation: 'Here "had his wallet stolen" is the causative used for negative experiences (things that happen to you). It means someone stole his wallet.'
          }
        ]
      },
      {
        id: 'b2-mx2-l3',
        title: 'Passive Reporting Structures',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is the correct passive reporting structure for "People say that he is very rich"?',
            options: [
              'He is said to be very rich.',
              'He is said that is very rich.',
              'He said to be very rich.',
              'It says he is very rich.'
            ],
            correct: 0,
            explanation: 'Passive reporting: Subject + is/are + said/believed/thought + to + infinitive. "He is said to be very rich."'
          },
          {
            type: 'fill-blank',
            question: 'It ___ believed that the company will close next year.',
            answer: 'is',
            hint: 'Impersonal passive reporting: It + be + past participle + that...',
            explanation: '"It is believed that..." is an impersonal passive reporting structure, commonly used in formal English and news reporting.'
          },
          {
            type: 'translation',
            question: 'Diz-se que ele fala cinco línguas.',
            answer: [
              'He is said to speak five languages',
              'It is said that he speaks five languages'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Two possible structures: "He is said to..." or "It is said that he..."',
            explanation: '"Diz-se que" can be translated as "It is said that..." (impersonal) or "He is said to..." (personal passive reporting).'
          },
          {
            type: 'true-false',
            statement: '"The suspect is thought to have left the country" refers to a past action reported in the present.',
            correct: true,
            explanation: '"Is thought" = present reporting. "To have left" = perfect infinitive, indicating the action (leaving) happened before the reporting. So yes, it\'s a past action reported now.'
          },
          {
            type: 'matching',
            question: 'Match the active reporting with the passive form:',
            pairs: [
              { left: 'People believe he is innocent.', right: 'He is believed to be innocent.' },
              { left: 'They say she left the country.', right: 'She is said to have left the country.' },
              { left: 'Experts consider it dangerous.', right: 'It is considered to be dangerous.' },
              { left: 'They expect the price will rise.', right: 'The price is expected to rise.' }
            ]
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a passive reporting structure:',
            words: ['The', 'CEO', 'is', 'reported', 'to', 'have', 'resigned', 'last', 'night.'],
            correct: 'The CEO is reported to have resigned last night.',
            explanation: '"Is reported to have resigned" = passive reporting with perfect infinitive, indicating the resignation happened before the report.'
          },
          {
            type: 'multiple-choice',
            question: 'What is the impersonal passive form of "Scientists have discovered that the drug is effective"?',
            options: [
              'It has been discovered that the drug is effective.',
              'It is discovered that the drug is effective.',
              'It was been discovered that the drug is effective.',
              'The drug has discovered to be effective.'
            ],
            correct: 0,
            explanation: 'Impersonal passive: "It + has been discovered + that..." keeps the present perfect from the original active sentence.'
          },
          {
            type: 'fill-blank',
            question: 'The painting is ___ to ___ worth over $10 million. (think/be)',
            answer: 'thought, be',
            hint: 'Subject + is + reporting verb (past participle) + to + infinitive',
            explanation: '"Is thought to be" — passive reporting structure with the infinitive. The painting is thought to be worth over $10 million.'
          }
        ]
      }
    ]
  },

  // ===== Module 3: Formal vs Informal =====
  {
    id: 'b2-mx3',
    title: 'Formal vs Informal',
    description: 'Learn to switch between formal and informal registers',
    icon: '🎩',
    lessons: [
      {
        id: 'b2-mx3-l1',
        title: 'Formal Vocabulary',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each informal word with its formal equivalent:',
            pairs: [
              { left: 'buy', right: 'purchase' },
              { left: 'help', right: 'assist' },
              { left: 'need', right: 'require' },
              { left: 'ask for', right: 'request' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence is more appropriate for a formal email?',
            options: [
              'I am writing to inquire about the position.',
              'I\'m writing to ask about the job.',
              'Hey, just wondering about that job.',
              'Wanna know about the position.'
            ],
            correct: 0,
            explanation: '"Inquire" is more formal than "ask", and "position" is more formal than "job". Full forms ("I am") are preferred over contractions ("I\'m") in formal writing.'
          },
          {
            type: 'fill-blank',
            question: 'We kindly ___ that you refrain from smoking on the premises. (formal for "ask")',
            answer: 'request',
            hint: 'A formal synonym for "ask"',
            explanation: '"Request" is the formal equivalent of "ask". "We kindly request" is a polite, formal way to make a demand.'
          },
          {
            type: 'translation',
            question: 'Gostaríamos de informar que a reunião foi adiada.',
            answer: [
              'We would like to inform you that the meeting has been postponed',
              'We wish to inform you that the meeting has been postponed'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'We would like to + formal verb + that...',
            explanation: '"Gostaríamos de informar" = "We would like to inform (you)". "Adiada" = "postponed" (formal) rather than "put off" (informal).'
          },
          {
            type: 'true-false',
            statement: '"Commence" is the informal version of "begin".',
            correct: false,
            explanation: '"Commence" is actually MORE formal than "begin". The informal-to-formal scale is: start → begin → commence.'
          },
          {
            type: 'multiple-choice',
            question: 'Choose the formal equivalent: "We got your letter."',
            options: [
              'We have received your correspondence.',
              'We got your correspondence.',
              'We have got your letter.',
              'Your letter was got by us.'
            ],
            correct: 0,
            explanation: '"Received" is formal for "got", and "correspondence" is formal for "letter". "We have received your correspondence" is appropriate for formal writing.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a formal sentence:',
            words: ['I', 'would', 'be', 'grateful', 'if', 'you', 'could', 'provide', 'further', 'information.'],
            correct: 'I would be grateful if you could provide further information.',
            explanation: 'This is a formal, polite request structure. "I would be grateful if you could..." is much more formal than "Can you give me more info?"'
          },
          {
            type: 'listening',
            sentence: 'Please do not hesitate to contact us should you require any further assistance.',
            question: 'What is this sentence an example of?',
            hint: 'Think about where you would hear or read this kind of language',
            explanation: 'This is formal business English, typically found at the end of formal emails or letters. "Do not hesitate" = feel free; "require" = need; "assistance" = help.'
          }
        ]
      },
      {
        id: 'b2-mx3-l2',
        title: 'Informal Expressions & Slang',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'What does "I\'m gonna grab a bite" mean?',
            options: [
              'I\'m going to eat something quickly.',
              'I\'m going to bite someone.',
              'I\'m going to buy something.',
              'I\'m going to take a nap.'
            ],
            correct: 0,
            explanation: '"Grab a bite" is informal for "eat something, usually quickly or casually". "Gonna" is informal for "going to".'
          },
          {
            type: 'matching',
            question: 'Match each slang/informal expression with its meaning:',
            pairs: [
              { left: 'hang out', right: 'spend time casually' },
              { left: 'figure out', right: 'understand / solve' },
              { left: 'chill', right: 'relax' },
              { left: 'no worries', right: 'it\'s okay / you\'re welcome' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'I\'m so tired. I\'m going to ___ out on the couch. (informal for relax/sleep)',
            answer: 'crash',
            hint: 'An informal word meaning to fall asleep or rest, often on a surface',
            explanation: '"Crash out" or just "crash" means to fall asleep or rest somewhere, usually informally or unexpectedly.'
          },
          {
            type: 'translation',
            question: 'Ele está a brincar contigo, não leves a sério.',
            answer: [
              "He's messing with you, don't take it seriously",
              "He's just messing with you, don't take it seriously",
              "He's kidding, don't take it seriously",
              "He is messing with you, do not take it seriously"
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Informal: messing with / kidding',
            explanation: '"Brincar contigo" in this context = "messing with you" or "kidding". These are informal expressions meaning to joke or tease someone.'
          },
          {
            type: 'true-false',
            statement: '"What\'s up?" is a formal greeting used in business meetings.',
            correct: false,
            explanation: '"What\'s up?" is a very informal greeting used among friends. It means "How are you?" or "What\'s happening?" It would be inappropriate in a formal business context.'
          },
          {
            type: 'multiple-choice',
            question: '"That movie was sick!" In modern slang, this means:',
            options: [
              'The movie was amazing/excellent.',
              'The movie was disgusting.',
              'The movie was about illness.',
              'The movie made me feel unwell.'
            ],
            correct: 0,
            explanation: 'In modern slang, "sick" can mean "amazing" or "excellent". This is an example of how slang can reverse the traditional meaning of a word.'
          },
          {
            type: 'listening',
            sentence: 'Hey, wanna hang out later? We could grab some food and just chill.',
            question: 'What is the speaker suggesting?',
            hint: 'Translate the informal expressions into standard English',
            explanation: 'The speaker is informally suggesting: "Do you want to spend time together later? We could eat something and relax." "Wanna" = want to, "hang out" = spend time, "grab food" = eat, "chill" = relax.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a natural informal sentence:',
            words: ["I'm", 'gonna', 'head', 'out', 'now,', 'catch', 'you', 'later!'],
            correct: "I'm gonna head out now, catch you later!",
            explanation: '"Head out" = leave, "catch you later" = see you later. Both are common informal expressions.'
          }
        ]
      },
      {
        id: 'b2-mx3-l3',
        title: 'Register Switching',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match the informal expression to its formal equivalent:',
            pairs: [
              { left: "I can't make it.", right: 'I am unable to attend.' },
              { left: 'Thanks a lot!', right: 'Thank you very much for your assistance.' },
              { left: "I'm sorry, but no.", right: 'I regret to inform you that this is not possible.' },
              { left: 'Can you help me?', right: 'Would you be so kind as to assist me?' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'You need to write to a professor you\'ve never met. Which opening is best?',
            options: [
              'Dear Professor Silva, I am writing to inquire about...',
              'Hey Professor, just wanted to ask about...',
              'Hi there! Quick question about...',
              'Yo Prof, got a question for ya...'
            ],
            correct: 0,
            explanation: 'When writing to a professor you don\'t know, use formal register: "Dear Professor [Name]", "I am writing to inquire", and avoid contractions.'
          },
          {
            type: 'fill-blank',
            question: 'Informal: "I messed up." → Formal: "I ___ an error in judgment."',
            answer: 'made',
            hint: 'A formal way to express making a mistake',
            explanation: '"Made an error in judgment" is the formal equivalent of "messed up". In formal contexts, we use neutral, precise language.'
          },
          {
            type: 'translation',
            question: 'Informal: Preciso de falar contigo sobre uma coisa. → Write the FORMAL English version.',
            answer: [
              'I would like to discuss a matter with you',
              'I need to discuss a matter with you',
              'I wish to discuss a matter with you'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Use "discuss a matter" instead of "talk about something"',
            explanation: '"Falar sobre uma coisa" informally = "talk to you about something". Formally = "discuss a matter with you". "I would like to" adds extra formality.'
          },
          {
            type: 'true-false',
            statement: 'Using contractions (I\'m, don\'t, can\'t) is appropriate in formal academic writing.',
            correct: false,
            explanation: 'Contractions should be avoided in formal academic writing. Use full forms: "I am", "do not", "cannot". Contractions are fine for informal writing, emails to friends, etc.'
          },
          {
            type: 'multiple-choice',
            question: 'Rewrite for an informal context: "I regret to inform you that your application has been unsuccessful."',
            options: [
              "Sorry, but you didn't get the job.",
              'Your application was unsuccessful, I regret.',
              'We regret you didn\'t get it.',
              'Sadly, your application wasn\'t successful.'
            ],
            correct: 0,
            explanation: '"Sorry, but you didn\'t get the job" is direct and informal. It replaces "regret to inform" with "sorry", "application unsuccessful" with "didn\'t get the job".'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a formal request:',
            words: ['Would', 'it', 'be', 'possible', 'to', 'reschedule', 'our', 'meeting', 'to', 'Friday?'],
            correct: 'Would it be possible to reschedule our meeting to Friday?',
            explanation: '"Would it be possible to..." is a very polite, formal way to make a request. Compare with informal: "Can we move our meeting to Friday?"'
          },
          {
            type: 'listening',
            sentence: 'I would be most grateful if you could forward the relevant documentation at your earliest convenience.',
            question: 'How would you say this informally?',
            hint: 'Simplify each formal element: grateful → thanks, forward → send, documentation → documents/files, at your earliest convenience → as soon as you can',
            explanation: 'Informal version: "Could you send me the documents as soon as you can? Thanks!" Formal writing uses longer, more indirect structures to show politeness.'
          }
        ]
      }
    ]
  },

  // ===== Module 4: Collocations & Word Formation =====
  {
    id: 'b2-mx4',
    title: 'Collocations & Word Formation',
    description: 'Learn natural word combinations and how to build new words',
    icon: '🧩',
    lessons: [
      {
        id: 'b2-mx4-l1',
        title: 'Strong Collocations (make/do/take/have)',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'make a decision',
              'do a decision',
              'take a decision',
              'Both "make a decision" and "take a decision" are correct'
            ],
            correct: 3,
            explanation: 'Both "make a decision" and "take a decision" are correct. "Make" is more common in American English, while "take" is more common in British English. "Do a decision" is always wrong.'
          },
          {
            type: 'matching',
            question: 'Match the verb with the correct collocation:',
            pairs: [
              { left: 'make', right: 'a mistake' },
              { left: 'do', right: 'the dishes' },
              { left: 'take', right: 'a break' },
              { left: 'have', right: 'a shower' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'I need to ___ an appointment with the dentist.',
            answer: 'make',
            hint: 'Which verb collocates with "appointment"?',
            explanation: 'We "make an appointment" — not "do" or "take". This is a fixed collocation that must be memorized.'
          },
          {
            type: 'translation',
            question: 'Podes fazer-me um favor?',
            answer: [
              'Can you do me a favour',
              'Can you do me a favor',
              'Could you do me a favour',
              'Could you do me a favor'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'We DO a favour, not MAKE a favour',
            explanation: 'Portuguese uses "fazer" for both "make" and "do", but in English the collocation is "do a favour" — never "make a favour". This is a common mistake for PT speakers.'
          },
          {
            type: 'true-false',
            statement: 'We say "do progress" in English.',
            correct: false,
            explanation: 'We say "make progress" — not "do progress". This is a fixed collocation. Remember: make progress, make an effort, make a difference.'
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence has an ERROR?',
            options: [
              'She made a lot of money last year.',
              'He did a big effort to finish on time.',
              'They took a long time to reply.',
              'We had a great time at the party.'
            ],
            correct: 1,
            explanation: 'The error is "did a big effort". The correct collocation is "made a big effort". We always "make an effort", never "do an effort".'
          },
          {
            type: 'reorder',
            question: 'Rearrange: "a good impression / she / on everyone / made / at the interview"',
            words: ['She', 'made', 'a', 'good', 'impression', 'on', 'everyone', 'at', 'the', 'interview.'],
            correct: 'She made a good impression on everyone at the interview.',
            explanation: 'The collocation is "make an impression (on someone)". We also say "make a good/bad/strong first impression".'
          },
          {
            type: 'fill-blank',
            question: 'The company ___ business with several international partners.',
            answer: 'does',
            hint: 'Which verb collocates with "business"?',
            explanation: 'We "do business" with someone. Also: "do a deal", "do research", "do work". These use "do" because they describe activities.'
          }
        ]
      },
      {
        id: 'b2-mx4-l2',
        title: 'Prefixes (un-, dis-, mis-, over-, under-)',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each prefix with its meaning:',
            pairs: [
              { left: 'un-', right: 'not / opposite of' },
              { left: 'dis-', right: 'not / reversal' },
              { left: 'mis-', right: 'wrongly / badly' },
              { left: 'over-', right: 'too much / excessively' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'What does "misunderstand" mean?',
            options: [
              'To understand incorrectly',
              'To not understand at all',
              'To understand too much',
              'To refuse to understand'
            ],
            correct: 0,
            explanation: 'The prefix "mis-" means "wrongly". So "misunderstand" = understand wrongly/incorrectly. Not the same as "not understand".'
          },
          {
            type: 'fill-blank',
            question: 'The hotel was ___booked, so some guests had no room. (prefix meaning "too much")',
            answer: 'over',
            hint: 'Which prefix means "excessively" or "too much"?',
            explanation: '"Overbooked" = booked too many rooms/seats. The prefix "over-" indicates excess: overwork, overeat, overcrowded.'
          },
          {
            type: 'translation',
            question: 'Ele foi mal informado sobre a situação.',
            answer: [
              'He was misinformed about the situation',
              'He was wrongly informed about the situation'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Prefix "mis-" + informed',
            explanation: '"Mal informado" = "misinformed". The prefix "mis-" corresponds to the Portuguese "mal" when it means "wrongly": misbehave, misinterpret, mislead.'
          },
          {
            type: 'true-false',
            statement: '"Underpaid" means someone earns less than they should.',
            correct: true,
            explanation: 'The prefix "under-" means "not enough" or "below what is expected". "Underpaid" = paid less than deserved. Also: underestimate, undervalue, undercooked.'
          },
          {
            type: 'multiple-choice',
            question: 'Which word means "to disagree with something officially"?',
            options: [
              'disapprove',
              'unapprove',
              'misapprove',
              'overapprove'
            ],
            correct: 0,
            explanation: '"Disapprove" = to have an unfavorable opinion of something. The prefix "dis-" indicates negation or reversal: disagree, disappear, disconnect.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct sentence:',
            words: ['The', 'report', 'was', 'full', 'of', 'misspelled', 'words', 'and', 'unclear', 'sentences.'],
            correct: 'The report was full of misspelled words and unclear sentences.',
            explanation: '"Misspelled" = spelled wrongly (mis- + spelled). "Unclear" = not clear (un- + clear). Both prefixes create opposite or negative meanings.'
          },
          {
            type: 'fill-blank',
            question: 'Many workers feel ___valued and ___appreciated by their employers.',
            answer: 'under, under',
            hint: 'Both words use the same prefix meaning "not enough"',
            explanation: '"Undervalued" and "underappreciated" both use "under-" to mean "not valued/appreciated enough". These are common workplace complaints.'
          }
        ]
      },
      {
        id: 'b2-mx4-l3',
        title: 'Suffixes (-ment, -tion, -ness, -able, -ful)',
        type: 'vocabulary',
        exercises: [
          {
            type: 'matching',
            question: 'Match each suffix with its function:',
            pairs: [
              { left: '-ment', right: 'forms nouns (state/result): achievement' },
              { left: '-tion/-sion', right: 'forms nouns (action/process): education' },
              { left: '-ness', right: 'forms nouns (quality): kindness' },
              { left: '-able/-ible', right: 'forms adjectives (capable of): readable' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'What is the noun form of "develop"?',
            options: [
              'development',
              'developness',
              'develoption',
              'developable'
            ],
            correct: 0,
            explanation: '"Develop" + "-ment" = "development". The suffix "-ment" turns verbs into nouns indicating a state, action, or result.'
          },
          {
            type: 'fill-blank',
            question: 'The ___ of the new policy was announced yesterday. (implement → noun)',
            answer: 'implementation',
            hint: 'Add -ation to the verb',
            explanation: '"Implement" → "implementation". The suffix "-ation" (a form of "-tion") creates nouns from verbs. Also: inform → information, communicate → communication.'
          },
          {
            type: 'translation',
            question: 'A felicidade não depende da riqueza.',
            answer: [
              'Happiness does not depend on wealth',
              "Happiness doesn't depend on wealth",
              'Happiness does not depend on richness'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Felicidade = happi + ness, riqueza = wealth / richness',
            explanation: '"Felicidade" = "happiness" (happy + -ness). "Riqueza" = "wealth" or "richness" (rich + -ness). The -ness suffix creates nouns from adjectives.'
          },
          {
            type: 'true-false',
            statement: '"Careful" and "careless" are opposite adjectives formed by different suffixes.',
            correct: true,
            explanation: '"Careful" (care + -ful = full of care) is the opposite of "careless" (care + -less = without care). The suffixes -ful and -less create opposite meanings.'
          },
          {
            type: 'multiple-choice',
            question: 'Which word is spelled correctly?',
            options: [
              'achievable',
              'achieveable',
              'acheivable',
              'acheiveable'
            ],
            correct: 0,
            explanation: '"Achieve" + "-able" = "achievable". When adding "-able" to a word ending in "e", we usually drop the "e": love → lovable, achieve → achievable.'
          },
          {
            type: 'reorder',
            question: 'Rearrange: "growth / personal / requires / and / commitment / development / dedication"',
            words: ['Personal', 'growth', 'and', 'development', 'requires', 'commitment', 'and', 'dedication.'],
            correct: 'Personal growth and development requires commitment and dedication.',
            explanation: 'Notice the suffixes: "development" (-ment), "commitment" (-ment), "dedication" (-tion). These noun forms are essential for formal/academic English.'
          },
          {
            type: 'fill-blank',
            question: 'The situation is ___ but not impossible. (manage + suffix meaning "able to be")',
            answer: 'manageable',
            hint: 'Manage + -able (keep the "e" here!)',
            explanation: '"Manageable" keeps the "e" before "-able" to preserve the soft "g" sound. Compare: "manage → manageable" but "achieve → achievable".'
          }
        ]
      }
    ]
  },

  // ===== Module 5: Debate & Argumentation =====
  {
    id: 'b2-mx5',
    title: 'Debate & Argumentation',
    description: 'Express opinions, agree, disagree, and hedge like a pro',
    icon: '🗣️',
    lessons: [
      {
        id: 'b2-mx5-l1',
        title: 'Expressing Strong Opinions',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which expression is the STRONGEST way to give an opinion?',
            options: [
              'I firmly believe that...',
              'I think that...',
              'I suppose that...',
              'It seems to me that...'
            ],
            correct: 0,
            explanation: '"I firmly believe" is the strongest. Scale from weak to strong: I suppose → I think → I believe → I strongly/firmly believe → I am convinced.'
          },
          {
            type: 'matching',
            question: 'Match the opinion phrase with its strength level:',
            pairs: [
              { left: 'I\'m convinced that...', right: 'Very strong' },
              { left: 'I believe that...', right: 'Moderate' },
              { left: 'I tend to think that...', right: 'Mild' },
              { left: 'As far as I\'m concerned,...', right: 'Strong (personal)' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'In my ___, education should be free for everyone.',
            answer: 'opinion',
            hint: 'A common phrase to introduce your viewpoint',
            explanation: '"In my opinion" is a standard way to introduce a personal viewpoint. Also common: "In my view", "From my perspective", "From my point of view".'
          },
          {
            type: 'translation',
            question: 'Tenho a certeza absoluta de que esta é a decisão certa.',
            answer: [
              'I am absolutely certain that this is the right decision',
              'I am absolutely sure that this is the right decision',
              "I'm absolutely certain this is the right decision"
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Certeza absoluta = absolutely certain/sure',
            explanation: '"Certeza absoluta" = "absolutely certain". This is a very strong way to express an opinion. "I am convinced" would also work.'
          },
          {
            type: 'true-false',
            statement: '"I couldn\'t agree more" means you disagree.',
            correct: false,
            explanation: '"I couldn\'t agree more" actually means you COMPLETELY agree — it\'s the strongest form of agreement. "I could not agree more (than I already do)" = maximum agreement.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to express a strong opinion:',
            words: ['There', 'is', 'no', 'doubt', 'in', 'my', 'mind', 'that', 'climate', 'change', 'is', 'real.'],
            correct: 'There is no doubt in my mind that climate change is real.',
            explanation: '"There is no doubt in my mind" is a very strong opinion phrase. It leaves no room for uncertainty.'
          },
          {
            type: 'multiple-choice',
            question: 'Which phrase would you use to state a strong opinion while acknowledging others may disagree?',
            options: [
              'I may be wrong, but I strongly feel that...',
              'Obviously everyone knows that...',
              'Only an idiot would think otherwise.',
              'I don\'t care what anyone says...'
            ],
            correct: 0,
            explanation: '"I may be wrong, but I strongly feel that..." shows you have a strong opinion while being respectful of other viewpoints. This is effective in debates.'
          },
          {
            type: 'listening',
            sentence: 'As far as I\'m concerned, remote work should be the standard, not the exception.',
            question: 'How strong is the speaker\'s opinion?',
            hint: '"As far as I\'m concerned" — what level of conviction does this show?',
            explanation: '"As far as I\'m concerned" indicates a strong personal opinion. The speaker is firmly stating their position, making it clear this is their definitive view on the matter.'
          }
        ]
      },
      {
        id: 'b2-mx5-l2',
        title: 'Agreeing and Disagreeing Politely',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is the MOST polite way to disagree?',
            options: [
              'I see your point, but I\'m not entirely sure I agree.',
              'You\'re wrong about that.',
              'I totally disagree.',
              'That\'s nonsense.'
            ],
            correct: 0,
            explanation: '"I see your point, but..." acknowledges the other person\'s view before presenting disagreement. This is the most diplomatic and polite approach.'
          },
          {
            type: 'matching',
            question: 'Match each phrase with its function:',
            pairs: [
              { left: 'I see what you mean, however...', right: 'Polite disagreement' },
              { left: 'That\'s a very good point.', right: 'Agreement' },
              { left: 'I\'m afraid I can\'t agree with that.', right: 'Formal disagreement' },
              { left: 'Absolutely! I couldn\'t agree more.', right: 'Strong agreement' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'I take your ___, but have you considered the other side of the argument?',
            answer: 'point',
            hint: 'An expression meaning "I understand what you\'re saying"',
            explanation: '"I take your point" means "I understand and partially accept your argument". It\'s a polite way to acknowledge before disagreeing.'
          },
          {
            type: 'translation',
            question: 'Compreendo o teu ponto de vista, mas discordo respeitosamente.',
            answer: [
              'I understand your point of view, but I respectfully disagree',
              'I understand your perspective, but I respectfully disagree',
              'I see your point of view, but I respectfully disagree'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Understand + point of view + respectfully disagree',
            explanation: '"Respeitosamente discordo" = "respectfully disagree". This is a formal, polite way to express disagreement, common in professional settings.'
          },
          {
            type: 'true-false',
            statement: '"With all due respect" is always genuinely polite and never sarcastic.',
            correct: false,
            explanation: '"With all due respect" can be genuinely polite, but it\'s often used as a softener before a strong disagreement, and can sometimes sound sarcastic or condescending depending on tone.'
          },
          {
            type: 'multiple-choice',
            question: 'Your colleague says something you strongly disagree with in a meeting. What\'s the best response?',
            options: [
              'I appreciate your perspective, but I\'d like to offer an alternative view.',
              'That\'s completely wrong and I\'ll explain why.',
              'I disagree. Next topic.',
              'Well, that\'s one way to look at it, I suppose.'
            ],
            correct: 0,
            explanation: '"I appreciate your perspective, but I\'d like to offer an alternative view" is professional, respectful, and opens the door for constructive discussion.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a polite disagreement:',
            words: ['I', 'see', 'where', "you're", 'coming', 'from,', 'but', 'I', 'think', 'we', 'need', 'to', 'consider', 'other', 'options.'],
            correct: "I see where you're coming from, but I think we need to consider other options.",
            explanation: '"I see where you\'re coming from" is a great phrase for acknowledging someone\'s reasoning before politely presenting your own view.'
          },
          {
            type: 'listening',
            sentence: 'I hear what you\'re saying, and you make some valid points. However, I think the data tells a different story.',
            question: 'Is the speaker agreeing or disagreeing?',
            hint: 'Listen for the key transition word that signals a change in direction',
            explanation: 'The speaker is politely disagreeing. They first acknowledge the other person\'s points ("valid points"), then use "however" to introduce their contrasting view. This is a classic polite disagreement structure.'
          }
        ]
      },
      {
        id: 'b2-mx5-l3',
        title: 'Hedging Language',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'What is "hedging" in English?',
            options: [
              'Using cautious language to soften statements and avoid being too direct.',
              'Using strong language to make a powerful argument.',
              'Using slang to sound more casual.',
              'Using formal vocabulary in academic writing.'
            ],
            correct: 0,
            explanation: 'Hedging means using cautious, tentative language to make statements less absolute. It\'s common in academic writing, diplomacy, and polite conversation.'
          },
          {
            type: 'matching',
            question: 'Match each hedging expression with its function:',
            pairs: [
              { left: 'It seems that...', right: 'Presenting observations cautiously' },
              { left: 'I tend to think that...', right: 'Softening a personal opinion' },
              { left: 'Arguably,...', right: 'Suggesting something is debatable' },
              { left: 'It could be said that...', right: 'Distancing from a claim' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'The results ___ to suggest that the treatment is effective. (a hedging verb)',
            answer: 'seem',
            hint: 'A verb meaning "appear" — used to avoid making a definitive claim',
            explanation: '"Seem" is a key hedging verb. "The results seem to suggest" is much more cautious than "The results prove". Other hedging verbs: appear, tend, suggest.'
          },
          {
            type: 'translation',
            question: 'É possível que haja outras explicações para este fenómeno.',
            answer: [
              'It is possible that there are other explanations for this phenomenon',
              'There may be other explanations for this phenomenon',
              'There might be other explanations for this phenomenon'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'It is possible that... / There may be...',
            explanation: '"É possível que" = "It is possible that" or "There may/might be". Using "may" and "might" is a common hedging strategy.'
          },
          {
            type: 'true-false',
            statement: 'Hedging language is considered weak and should be avoided in all professional contexts.',
            correct: false,
            explanation: 'Hedging is actually a sign of sophistication and is expected in academic writing, scientific papers, and diplomatic communication. It shows awareness that claims may not be absolute.'
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence uses hedging effectively?',
            options: [
              'This could potentially be one of the factors contributing to the problem.',
              'This is definitely the cause of the problem.',
              'This is obviously the main factor.',
              'Everyone knows this causes the problem.'
            ],
            correct: 0,
            explanation: '"Could potentially", "one of the factors", "contributing to" — all hedging elements that make the claim cautious and defensible. The other options are too absolute.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a hedged academic statement:',
            words: ['The', 'evidence', 'would', 'appear', 'to', 'indicate', 'that', 'further', 'research', 'is', 'needed.'],
            correct: 'The evidence would appear to indicate that further research is needed.',
            explanation: '"Would appear to indicate" is heavily hedged — three layers of caution. Compare with the direct version: "The evidence shows that..."'
          },
          {
            type: 'listening',
            sentence: 'I tend to think that, on balance, the advantages of remote work arguably outweigh the disadvantages, at least to some extent.',
            question: 'How many hedging expressions can you identify in this sentence?',
            hint: 'Look for words/phrases that soften the statement: tend, on balance, arguably, at least, to some extent',
            explanation: 'There are five hedging expressions: "I tend to think" (softened opinion), "on balance" (considered view), "arguably" (debatable), "at least" (qualifier), "to some extent" (limiting the claim). This is very cautious language!'
          }
        ]
      }
    ]
  }
]
