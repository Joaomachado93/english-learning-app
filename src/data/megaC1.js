export const megaC1Modules = [
  // ===== Module 1: Inversion & Emphasis =====
  {
    id: 'c1-mx1',
    title: 'Inversion & Emphasis',
    description: 'Advanced structures for emphasis and dramatic effect',
    icon: '🔃',
    lessons: [
      {
        id: 'c1-mx1-l1',
        title: 'Not only...but also, Hardly...when, No sooner...than',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence uses inversion correctly?',
            options: [
              'Not only did she pass the exam, but she also got the highest score.',
              'Not only she passed the exam, but she also got the highest score.',
              'Not only she did pass the exam, but also she got the highest score.',
              'Not only did she passed the exam, but she also got the highest score.'
            ],
            correct: 0,
            explanation: 'After "Not only" at the start of a sentence, we invert the subject and auxiliary: "Not only did she pass" (not "she passed" or "she did pass"). The auxiliary "did" comes before the subject "she".'
          },
          {
            type: 'fill-blank',
            question: 'Hardly ___ we sat down when the phone rang.',
            answer: 'had',
            hint: 'Inversion with "hardly": Hardly + auxiliary + subject + past participle',
            explanation: '"Hardly had we sat down when..." — the auxiliary "had" is inverted before the subject "we". "Hardly...when" means "almost immediately after".'
          },
          {
            type: 'translation',
            question: 'Mal tínhamos chegado quando começou a chover.',
            answer: [
              'Hardly had we arrived when it started to rain',
              'No sooner had we arrived than it started to rain',
              'Hardly had we arrived when it started raining',
              'No sooner had we arrived than it started raining'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Hardly had... when / No sooner had... than',
            explanation: '"Mal tínhamos chegado quando..." = "Hardly had we arrived when..." or "No sooner had we arrived than..." Both express that two events happened almost simultaneously.'
          },
          {
            type: 'true-false',
            statement: '"No sooner had I left than it started raining" and "Hardly had I left when it started raining" have the same meaning.',
            correct: true,
            explanation: 'Both mean the same: I left, and almost immediately it started raining. Note the pairings: "No sooner...than" and "Hardly/Scarcely...when".'
          },
          {
            type: 'matching',
            question: 'Match each inversion structure with its correct continuation:',
            pairs: [
              { left: 'Not only did he apologize,', right: 'but he also offered to pay for the damage.' },
              { left: 'Hardly had the match started', right: 'when the star player got injured.' },
              { left: 'No sooner had I closed my eyes', right: 'than the alarm went off.' },
              { left: 'Never before had I seen', right: 'such a beautiful sunset.' }
            ]
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a sentence with inversion:',
            words: ['Not', 'only', 'is', 'she', 'talented,', 'but', 'she', 'is', 'also', 'incredibly', 'hardworking.'],
            correct: 'Not only is she talented, but she is also incredibly hardworking.',
            explanation: 'With "not only" at the start, invert subject and verb: "is she" (not "she is"). The second clause uses normal word order.'
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "Never ___ such a delicious meal."',
            options: [
              'have I tasted',
              'I have tasted',
              'I did taste',
              'had I tasting'
            ],
            correct: 0,
            explanation: 'After negative adverbs at the start (never, rarely, seldom, hardly), we use inversion: "Never have I tasted" — auxiliary before subject.'
          },
          {
            type: 'listening',
            sentence: 'Not only did the company fail to deliver on time, but it also charged us extra for the delay.',
            question: 'What two complaints does the speaker have?',
            hint: 'Identify what comes after "Not only" and what comes after "but also"',
            explanation: 'Complaint 1: The company failed to deliver on time. Complaint 2: They charged extra for the delay. "Not only...but also" is used to list two related (usually surprising or frustrating) facts.'
          }
        ]
      },
      {
        id: 'c1-mx1-l2',
        title: 'Cleft Sentences',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is a correct "it-cleft" sentence emphasizing "the weather"?',
            options: [
              'It was the weather that ruined our trip.',
              'The weather it was that ruined our trip.',
              'It the weather was that ruined our trip.',
              'What ruined was the weather our trip.'
            ],
            correct: 0,
            explanation: 'It-cleft structure: "It + was/is + emphasized element + that/who + rest of sentence". "It was the weather that ruined our trip" puts focus on "the weather".'
          },
          {
            type: 'fill-blank',
            question: '___ I really need is a good night\'s sleep.',
            answer: 'What',
            hint: 'A wh-cleft (pseudo-cleft) starting with a question word',
            explanation: '"What I really need is..." is a wh-cleft (pseudo-cleft). It emphasizes what comes after "is". Structure: What + subject + verb + is + emphasized element.'
          },
          {
            type: 'translation',
            question: 'O que me preocupa é a falta de comunicação.',
            answer: [
              'What worries me is the lack of communication',
              'What concerns me is the lack of communication'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'What + verb + me + is + the emphasized element',
            explanation: '"O que me preocupa é..." = "What worries/concerns me is..." This is a wh-cleft that emphasizes the cause of worry.'
          },
          {
            type: 'true-false',
            statement: '"It was John who broke the vase" and "John broke the vase" contain exactly the same information, but the cleft version emphasizes John.',
            correct: true,
            explanation: 'Both sentences have the same propositional content. The cleft version "It was John who..." specifically emphasizes that it was JOHN (not someone else) who broke the vase.'
          },
          {
            type: 'matching',
            question: 'Match the neutral sentence with its cleft equivalent:',
            pairs: [
              { left: 'I love the energy of this city.', right: 'What I love is the energy of this city.' },
              { left: 'She needs more time.', right: 'What she needs is more time.' },
              { left: 'The noise bothered me most.', right: 'It was the noise that bothered me most.' },
              { left: 'He told her the truth yesterday.', right: 'It was yesterday that he told her the truth.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: '"The reason I\'m late is that my car broke down." This is an example of:',
            options: [
              'A pseudo-cleft (wh-cleft) sentence.',
              'A regular it-cleft sentence.',
              'A passive reporting structure.',
              'An inversion for emphasis.'
            ],
            correct: 0,
            explanation: '"The reason (why) I\'m late is that..." is a type of pseudo-cleft. Like "What I need is..." structures, it puts emphasis on the information after "is".'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a cleft sentence:',
            words: ['It', 'was', 'her', 'determination', 'that', 'impressed', 'the', 'interviewers', 'the', 'most.'],
            correct: 'It was her determination that impressed the interviewers the most.',
            explanation: 'It-cleft: "It was her determination that..." emphasizes what specifically impressed them. Without the cleft: "Her determination impressed the interviewers the most."'
          },
          {
            type: 'fill-blank',
            question: 'All I ___ is a chance to explain myself.',
            answer: 'want',
            hint: 'A type of cleft using "All + subject + verb + is..."',
            explanation: '"All I want is..." is a cleft structure that emphasizes the simplicity or limitation of the request. It means "The only thing I want is..."'
          }
        ]
      },
      {
        id: 'c1-mx1-l3',
        title: 'Fronting for Emphasis',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence uses fronting correctly?',
            options: [
              'Gone are the days when we could leave our doors unlocked.',
              'Are gone the days when we could leave our doors unlocked.',
              'The days gone are when we could leave our doors unlocked.',
              'When we could leave our doors unlocked, gone are the days.'
            ],
            correct: 0,
            explanation: '"Gone are the days..." is a common fronting structure. The complement "gone" is moved to the front for emphasis, followed by inverted subject-verb order.'
          },
          {
            type: 'fill-blank',
            question: 'So ___ was the damage that the building had to be demolished.',
            answer: 'severe',
            hint: 'An adjective meaning "very bad" or "extreme"',
            explanation: '"So severe was the damage that..." — fronting "so + adjective" triggers inversion and emphasizes the degree. Normal order: "The damage was so severe that..."'
          },
          {
            type: 'translation',
            question: 'Tão importante é esta decisão que precisamos de mais tempo para pensar.',
            answer: [
              'So important is this decision that we need more time to think',
              'So important is this decision that we need more time to think about it'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'So + adjective + is + subject + that...',
            explanation: '"Tão importante é..." = "So important is..." Fronting with "so + adjective" creates emphasis and requires subject-verb inversion.'
          },
          {
            type: 'true-false',
            statement: '"Under no circumstances should you open that door" is an example of fronting with a negative adverbial.',
            correct: true,
            explanation: '"Under no circumstances" is a negative adverbial moved to the front of the sentence, triggering inversion: "should you" instead of "you should". This adds emphasis and formality.'
          },
          {
            type: 'matching',
            question: 'Match each fronted structure with its normal (unfronted) version:',
            pairs: [
              { left: 'Little did I know...', right: 'I didn\'t know (much)...' },
              { left: 'Only then did I realize...', right: 'I only realized then...' },
              { left: 'Such was the confusion...', right: 'The confusion was such...' },
              { left: 'On no account must you...', right: 'You must not... under any circumstances' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Complete: "Only after reading the report ___ the seriousness of the situation."',
            options: [
              'did I understand',
              'I understood',
              'I did understand',
              'understanding I did'
            ],
            correct: 0,
            explanation: '"Only after..." at the start triggers inversion in the main clause: "did I understand" (not "I understood"). This is because "only" + time expression at the front requires inversion.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a fronted structure:',
            words: ['Rarely', 'have', 'I', 'encountered', 'someone', 'so', 'dedicated', 'to', 'their', 'work.'],
            correct: 'Rarely have I encountered someone so dedicated to their work.',
            explanation: '"Rarely" at the front triggers inversion: "have I" (not "I have"). This is more emphatic and literary than "I have rarely encountered..."'
          },
          {
            type: 'listening',
            sentence: 'Not until I moved abroad did I truly appreciate the value of my own culture.',
            question: 'When did the speaker start appreciating their culture?',
            hint: '"Not until" tells you the trigger event',
            explanation: 'The speaker started appreciating their culture only after moving abroad. "Not until I moved abroad did I..." = "I didn\'t appreciate... until I moved abroad." Fronting "Not until" emphasizes the turning point.'
          }
        ]
      }
    ]
  },

  // ===== Module 2: Subjunctive & Formal Structures =====
  {
    id: 'c1-mx2',
    title: 'Subjunctive & Formal Structures',
    description: 'Master the subjunctive mood and formal grammatical constructions',
    icon: '📜',
    lessons: [
      {
        id: 'c1-mx2-l1',
        title: 'If I were... / I wish... / It\'s vital that...',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which is grammatically correct in formal English?',
            options: [
              'If I were you, I would accept the offer.',
              'If I was you, I would accept the offer.',
              'If I am you, I would accept the offer.',
              'If I be you, I would accept the offer.'
            ],
            correct: 0,
            explanation: 'In formal English, "were" is used for all subjects in the subjunctive mood (unreal conditions): "If I were", "If he were", "If she were". "If I was" is common in informal speech but less correct.'
          },
          {
            type: 'fill-blank',
            question: 'I wish I ___ more time to travel. (have — subjunctive)',
            answer: 'had',
            hint: 'After "wish" for present unreal situations, use past simple',
            explanation: '"I wish I had" uses the past simple to express an unreal present desire. It means "I don\'t have enough time, but I want more." This is the subjunctive use of the past tense.'
          },
          {
            type: 'translation',
            question: 'Quem me dera poder falar inglês perfeitamente.',
            answer: [
              'I wish I could speak English perfectly',
              'If only I could speak English perfectly'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'I wish / If only + could + verb',
            explanation: '"Quem me dera" = "I wish" or "If only". After "wish" for abilities, use "could": "I wish I could speak..." (not "I wish I can").'
          },
          {
            type: 'true-false',
            statement: '"I wish I didn\'t have to work tomorrow" expresses a desire to change a future obligation.',
            correct: true,
            explanation: 'Yes. "I wish I didn\'t have to..." uses the past simple after "wish" to express dissatisfaction with a future plan/obligation. The speaker has to work tomorrow but wishes they didn\'t.'
          },
          {
            type: 'matching',
            question: 'Match the wish structure with its time reference:',
            pairs: [
              { left: 'I wish I spoke French.', right: 'Present (I don\'t speak French now)' },
              { left: 'I wish I had studied harder.', right: 'Past (I didn\'t study hard enough)' },
              { left: 'I wish you would stop that.', right: 'Future (annoyance / request for change)' },
              { left: 'If only we could afford it.', right: 'Present (we can\'t afford it now)' }
            ]
          },
          {
            type: 'multiple-choice',
            question: '"It is vital that every student ___ the deadline." Which form is correct?',
            options: [
              'meet (bare subjunctive)',
              'meets',
              'will meet',
              'would meet'
            ],
            correct: 0,
            explanation: 'After expressions like "It is vital/essential/important that...", the bare subjunctive is used: the base form of the verb without -s. "It is vital that every student meet..." (not "meets").'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct subjunctive sentence:',
            words: ['If', 'only', 'I', 'had', 'known', 'about', 'the', 'opportunity', 'sooner!'],
            correct: 'If only I had known about the opportunity sooner!',
            explanation: '"If only + past perfect" expresses a strong regret about the past. It\'s more emotional than "I wish I had known..."'
          },
          {
            type: 'fill-blank',
            question: 'It is essential that the report ___ submitted by Friday. (be — subjunctive)',
            answer: 'be',
            hint: 'The bare subjunctive of "to be" is just "be" for all subjects',
            explanation: '"It is essential that the report be submitted" uses the bare subjunctive "be" (not "is"). This is formal English, common in American English and legal/academic writing.'
          }
        ]
      },
      {
        id: 'c1-mx2-l2',
        title: 'As if / As though',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"She talks as if she ___ everything." Which is correct for an unreal situation?',
            options: [
              'knew',
              'knows',
              'has known',
              'is knowing'
            ],
            correct: 0,
            explanation: '"As if/as though" + past simple indicates something unreal or unlikely. "She talks as if she knew everything" means she doesn\'t actually know everything, but she acts like she does.'
          },
          {
            type: 'fill-blank',
            question: 'He treats me as though I ___ a child. (be — subjunctive)',
            answer: 'were',
            hint: 'Use the subjunctive form of "be" after "as though" for unreal situations',
            explanation: '"As though I were" uses the subjunctive "were" (not "was") for all subjects. It indicates an unreal comparison: I am not a child, but he treats me like one.'
          },
          {
            type: 'translation',
            question: 'Ele fala como se fosse um especialista, mas não sabe nada.',
            answer: [
              'He talks as if he were an expert, but he knows nothing',
              'He speaks as though he were an expert, but he knows nothing',
              'He talks as if he was an expert, but he knows nothing'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'As if/as though + were (subjunctive)',
            explanation: '"Como se fosse" = "as if/as though he were". The subjunctive "were" is preferred in formal English. "Was" is accepted informally.'
          },
          {
            type: 'true-false',
            statement: '"It looks as if it is going to rain" uses "as if" for a REAL possibility, not an unreal one.',
            correct: true,
            explanation: 'When "as if/as though" is followed by a present tense, it suggests the situation might be real. "It looks as if it is going to rain" = it probably will rain. Compare with unreal: "He acts as if he were the boss" (he isn\'t).'
          },
          {
            type: 'matching',
            question: 'Match each sentence with its meaning:',
            pairs: [
              { left: 'She looks as if she has been crying.', right: 'Real possibility — she probably was crying.' },
              { left: 'He spends money as if he were a millionaire.', right: 'Unreal — he is not a millionaire.' },
              { left: 'It feels as though we\'ve been here for hours.', right: 'Subjective impression — probably less time.' },
              { left: 'She acted as if nothing had happened.', right: 'Unreal past — something did happen.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: '"It\'s not as if we ___ any choice!" Which fits best?',
            options: [
              'had',
              'have',
              'having',
              'would have'
            ],
            correct: 0,
            explanation: '"It\'s not as if we had any choice" uses the past form for an unreal situation, emphasizing that the lack of choice is the reality. This is a common emphatic expression.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct sentence:',
            words: ['She', 'looked', 'at', 'me', 'as', 'though', 'she', 'had', 'never', 'seen', 'me', 'before.'],
            correct: 'She looked at me as though she had never seen me before.',
            explanation: '"As though + past perfect" refers to an unreal past situation. It means she did know me, but her look suggested otherwise.'
          },
          {
            type: 'listening',
            sentence: 'He carries on as if nothing were wrong, but I can tell something is bothering him.',
            question: 'Is something actually wrong with the person being described?',
            hint: 'The second part of the sentence gives you the real situation',
            explanation: 'Yes, something IS wrong. "As if nothing were wrong" (subjunctive) tells us his behaviour is pretending everything is fine, but the speaker sees through it. The subjunctive signals the unreality of his calm facade.'
          }
        ]
      },
      {
        id: 'c1-mx2-l3',
        title: 'Formal Subjunctive',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"The committee recommended that the proposal ___." Which is the correct formal subjunctive?',
            options: [
              'be accepted',
              'is accepted',
              'was accepted',
              'would be accepted'
            ],
            correct: 0,
            explanation: 'After verbs like "recommend, suggest, insist, demand, propose", the formal subjunctive uses the bare infinitive: "that the proposal be accepted" (not "is accepted").'
          },
          {
            type: 'fill-blank',
            question: 'The doctor insisted that she ___ more rest. (take — subjunctive)',
            answer: 'take',
            hint: 'Bare infinitive after "insisted that"',
            explanation: '"Insisted that she take" (not "takes" or "took"). The subjunctive uses the base form of the verb regardless of the subject. This is more common in American English; British English often uses "should take".'
          },
          {
            type: 'translation',
            question: 'Sugiro que ele esteja presente na reunião.',
            answer: [
              'I suggest that he be present at the meeting',
              'I suggest he be present at the meeting'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Suggest that + subject + be (bare subjunctive)',
            explanation: '"Sugiro que ele esteja" = "I suggest that he be". The subjunctive "be" is used after "suggest" — not "is" or "should be" (though "should be" is acceptable in British English).'
          },
          {
            type: 'true-false',
            statement: 'In British English, "I suggest he should go" is an acceptable alternative to the subjunctive "I suggest he go".',
            correct: true,
            explanation: 'British English often uses "should + infinitive" as an alternative to the bare subjunctive: "I suggest he should go" (BrE) = "I suggest he go" (AmE/formal). Both are correct.'
          },
          {
            type: 'matching',
            question: 'Match each verb/expression with a subjunctive example:',
            pairs: [
              { left: 'It is crucial that...', right: '...every employee be trained.' },
              { left: 'The manager demanded that...', right: '...the report be rewritten.' },
              { left: 'We propose that...', right: '...the meeting take place on Monday.' },
              { left: 'It is imperative that...', right: '...she attend the hearing.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence contains an ERROR?',
            options: [
              'It is important that he arrives on time.',
              'It is important that he arrive on time.',
              'It is important that he should arrive on time.',
              'Both B and C are correct.'
            ],
            correct: 0,
            explanation: '"He arrives" is incorrect in formal English after "It is important that...". The correct forms are: "he arrive" (subjunctive) or "he should arrive" (British alternative). So A contains the error.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a correct subjunctive sentence:',
            words: ['The', 'judge', 'ordered', 'that', 'the', 'prisoner', 'be', 'released', 'immediately.'],
            correct: 'The judge ordered that the prisoner be released immediately.',
            explanation: '"Ordered that... be released" — the subjunctive "be" is used after "ordered that". In legal and formal contexts, the subjunctive is especially common.'
          },
          {
            type: 'fill-blank',
            question: 'It is essential that every citizen ___ their right to vote. (exercise — subjunctive)',
            answer: 'exercise',
            hint: 'Base form of the verb, no -s even for "every citizen"',
            explanation: '"It is essential that every citizen exercise..." — the subjunctive uses the bare form "exercise" even though the subject is singular. "Exercises" would be the normal indicative form.'
          }
        ]
      }
    ]
  },

  // ===== Module 3: Discourse Markers =====
  {
    id: 'c1-mx3',
    title: 'Discourse Markers',
    description: 'Navigate conversations and writing with natural connectors',
    icon: '🔗',
    lessons: [
      {
        id: 'c1-mx3-l1',
        title: 'Speaking Discourse Markers',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'What function does "well" serve in: "Well, I think we should reconsider the plan"?',
            options: [
              'It signals the speaker is about to give their opinion, possibly a different one.',
              'It means the speaker is feeling well/healthy.',
              'It is a filler word with no meaning.',
              'It shows strong agreement.'
            ],
            correct: 0,
            explanation: '"Well" at the start of a response often signals that the speaker is about to say something unexpected, disagree, or take time to formulate a response. It\'s a discourse marker, not the adjective "well".'
          },
          {
            type: 'matching',
            question: 'Match each speaking marker with its function:',
            pairs: [
              { left: 'I mean', right: 'Clarifying or rephrasing what you just said' },
              { left: 'you know', right: 'Checking shared understanding / filler' },
              { left: 'basically', right: 'Simplifying or summarizing a point' },
              { left: 'actually', right: 'Correcting or adding unexpected info' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'The project went well. ___, we finished two weeks ahead of schedule.',
            answer: 'In fact',
            hint: 'A marker that introduces a surprising or emphatic addition',
            explanation: '"In fact" introduces information that reinforces or adds surprisingly to the previous statement. Similar markers: "As a matter of fact", "Actually".'
          },
          {
            type: 'translation',
            question: 'Basicamente, o que estou a tentar dizer é que precisamos de mais tempo.',
            answer: [
              'Basically, what I\'m trying to say is that we need more time',
              'Basically, what I am trying to say is that we need more time',
              'Basically what I\'m trying to say is we need more time'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Basically = basicamente (simplifying marker)',
            explanation: '"Basicamente" = "Basically". In speech, "basically" is used to simplify or get to the core point. "What I\'m trying to say" is another discourse strategy for clarification.'
          },
          {
            type: 'true-false',
            statement: '"You know" in conversation always means the listener should already know the information.',
            correct: false,
            explanation: '"You know" is often used as a filler or to create rapport, not literally to check knowledge. Example: "It was, you know, really difficult" — here "you know" is just a conversational filler.'
          },
          {
            type: 'multiple-choice',
            question: '"So, the thing is, I can\'t actually come tonight." What does "the thing is" do?',
            options: [
              'It prepares the listener for potentially unwelcome news.',
              'It refers to a physical object.',
              'It shows enthusiasm.',
              'It asks for clarification.'
            ],
            correct: 0,
            explanation: '"The thing is" is a discourse marker that prepares the listener for bad news, a complication, or an explanation they might not want to hear. It softens the delivery.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a natural spoken sentence:',
            words: ['Look,', 'I', 'know', 'it\'s', 'not', 'ideal,', 'but', 'we', 'need', 'to', 'deal', 'with', 'it.'],
            correct: "Look, I know it's not ideal, but we need to deal with it.",
            explanation: '"Look" at the start is a discourse marker that signals the speaker is being direct and wants the listener\'s attention. It often precedes something important or confrontational.'
          },
          {
            type: 'listening',
            sentence: 'So anyway, as I was saying before we got sidetracked, the deadline is Friday.',
            question: 'What is the speaker doing?',
            hint: 'Think about what "anyway" and "as I was saying" signal',
            explanation: 'The speaker is returning to the main topic after a digression. "Anyway" signals a topic shift, and "as I was saying" explicitly refers back to the interrupted topic. These are conversation management markers.'
          }
        ]
      },
      {
        id: 'c1-mx3-l2',
        title: 'Writing Discourse Markers',
        type: 'writing',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which connector best fills the gap? "The project was expensive. ___, it was completed on time and within budget."',
            options: [
              'Nonetheless',
              'Furthermore',
              'In addition',
              'Consequently'
            ],
            correct: 0,
            explanation: '"Nonetheless" (= nevertheless) shows contrast: despite being expensive, it was completed on time. "Furthermore" and "In addition" add information; "Consequently" shows cause-effect.'
          },
          {
            type: 'matching',
            question: 'Match each writing connector with its function:',
            pairs: [
              { left: 'Furthermore', right: 'Adding information' },
              { left: 'Nevertheless', right: 'Contrasting / conceding' },
              { left: 'Consequently', right: 'Showing result/effect' },
              { left: 'In light of', right: 'Considering / given that' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'The data is inconclusive. ___, further research is recommended.',
            answer: 'Therefore',
            hint: 'A formal connector showing cause and effect',
            explanation: '"Therefore" signals a logical conclusion/result. The data being inconclusive CAUSES the recommendation for further research. Similar: "Hence", "Thus", "Consequently".'
          },
          {
            type: 'translation',
            question: 'Apesar dos desafios, a equipa conseguiu atingir os seus objetivos.',
            answer: [
              'Despite the challenges, the team managed to achieve its objectives',
              'In spite of the challenges, the team managed to achieve its objectives',
              'Notwithstanding the challenges, the team managed to achieve its objectives'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Apesar de = Despite / In spite of / Notwithstanding',
            explanation: '"Apesar de" = "Despite" (most common), "In spite of" (common), or "Notwithstanding" (very formal). All are followed by a noun phrase, not a clause.'
          },
          {
            type: 'true-false',
            statement: '"Moreover" and "However" can be used interchangeably.',
            correct: false,
            explanation: '"Moreover" adds supporting information (like "furthermore"), while "However" introduces a contrasting point (like "but"). They have opposite functions and cannot be swapped.'
          },
          {
            type: 'multiple-choice',
            question: 'Choose the best connector: "___ the recent improvements, there are still areas that require attention."',
            options: [
              'Notwithstanding',
              'Moreover',
              'In addition to',
              'As a result of'
            ],
            correct: 0,
            explanation: '"Notwithstanding" means "despite" or "in spite of". The sentence contrasts improvements with remaining problems. "Moreover" and "In addition" add, not contrast.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a formal written sentence:',
            words: ['In', 'light', 'of', 'the', 'above', 'findings,', 'it', 'is', 'recommended', 'that', 'the', 'policy', 'be', 'revised.'],
            correct: 'In light of the above findings, it is recommended that the policy be revised.',
            explanation: '"In light of" means "considering/given". Combined with passive reporting ("it is recommended") and subjunctive ("be revised"), this is highly formal academic/professional writing.'
          },
          {
            type: 'fill-blank',
            question: 'The first experiment failed. ___, the second attempt was successful.',
            answer: 'However',
            hint: 'A connector that introduces a contrast',
            explanation: '"However" introduces a contrast between the failed first experiment and the successful second one. It\'s the most common formal contrast marker in academic writing.'
          }
        ]
      },
      {
        id: 'c1-mx3-l3',
        title: 'Conversation Management',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"By the way, did you hear about the new policy?" What does "By the way" signal?',
            options: [
              'The speaker is introducing a new, somewhat unrelated topic.',
              'The speaker is summarizing the conversation.',
              'The speaker is disagreeing.',
              'The speaker is ending the conversation.'
            ],
            correct: 0,
            explanation: '"By the way" (BTW) introduces a new topic that is not directly connected to the current discussion. It signals a digression or an afterthought the speaker wants to mention.'
          },
          {
            type: 'matching',
            question: 'Match each conversation marker with its purpose:',
            pairs: [
              { left: 'Speaking of which,...', right: 'Connecting to a related new topic' },
              { left: 'Anyway,...', right: 'Returning to main topic / wrapping up' },
              { left: 'That reminds me,...', right: 'Introducing something triggered by the current topic' },
              { left: 'As I was saying,...', right: 'Resuming after an interruption' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'We were talking about holidays. ___ of which, have you booked your flights yet?',
            answer: 'Speaking',
            hint: 'A phrase that links to something related to the current topic',
            explanation: '"Speaking of which" connects to something just mentioned. If someone mentions holidays, you can use "speaking of which" to ask a related question about travel plans.'
          },
          {
            type: 'translation',
            question: 'De qualquer forma, temos de tomar uma decisão até sexta-feira.',
            answer: [
              'Anyway, we have to make a decision by Friday',
              'Anyhow, we have to make a decision by Friday',
              'In any case, we need to make a decision by Friday',
              'At any rate, we need to make a decision by Friday'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'De qualquer forma = Anyway / In any case / At any rate',
            explanation: '"De qualquer forma" = "Anyway" (most common), "In any case" (slightly more formal), "At any rate" (formal). All signal returning to the main point or concluding.'
          },
          {
            type: 'true-false',
            statement: '"Where was I?" is a discourse marker used when the speaker has lost their train of thought and wants to return to what they were saying.',
            correct: true,
            explanation: '"Where was I?" is a spoken discourse marker asking for help remembering what you were talking about before an interruption or digression. It\'s very natural in conversation.'
          },
          {
            type: 'multiple-choice',
            question: '"Right, so, moving on..." What is the speaker doing?',
            options: [
              'Transitioning to a new topic or the next point.',
              'Expressing disagreement.',
              'Asking for clarification.',
              'Showing surprise.'
            ],
            correct: 0,
            explanation: '"Right, so, moving on..." combines multiple markers: "Right" (acknowledgment), "so" (transition), "moving on" (explicitly changing topic). This is common in meetings and presentations.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a natural conversation management phrase:',
            words: ['Going', 'back', 'to', 'what', 'you', 'said', 'earlier,', 'I', 'think', 'you', 'had', 'a', 'good', 'point.'],
            correct: 'Going back to what you said earlier, I think you had a good point.',
            explanation: '"Going back to what you said earlier" is a conversation management phrase that returns to a previous topic. It shows active listening and structured discussion.'
          },
          {
            type: 'listening',
            sentence: 'That reminds me, I meant to tell you — speaking of restaurants, the new Italian place on Main Street is fantastic.',
            question: 'How does the speaker connect to the new topic?',
            hint: 'Identify the two discourse markers used',
            explanation: 'The speaker uses two markers: "That reminds me" (triggered by something in the conversation) and "speaking of restaurants" (connecting to a related topic). This double-marker approach is natural in fluent conversation.'
          }
        ]
      }
    ]
  },

  // ===== Module 4: Nuanced Vocabulary =====
  {
    id: 'c1-mx4',
    title: 'Nuanced Vocabulary',
    description: 'Master connotation, false friends, and register differences',
    icon: '🎯',
    lessons: [
      {
        id: 'c1-mx4-l1',
        title: 'Connotation (thin/slim/skinny, childish/childlike)',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which word has the most POSITIVE connotation?',
            options: [
              'slim',
              'skinny',
              'scrawny',
              'bony'
            ],
            correct: 0,
            explanation: '"Slim" has a positive connotation (attractively thin). "Skinny" is neutral-to-negative (too thin). "Scrawny" and "bony" are clearly negative (unattractively thin).'
          },
          {
            type: 'matching',
            question: 'Match each pair — one positive, one negative:',
            pairs: [
              { left: 'childlike (positive)', right: 'innocent, full of wonder' },
              { left: 'childish (negative)', right: 'immature, silly' },
              { left: 'confident (positive)', right: 'sure of oneself' },
              { left: 'arrogant (negative)', right: 'too proud, dismissive of others' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'She\'s very ___ with her money — she always finds the best deals. (positive word for careful with money)',
            answer: 'thrifty',
            hint: 'Not "cheap" or "stingy" — those are negative. What\'s the positive word?',
            explanation: '"Thrifty" is positive (smart with money). "Cheap" and "stingy" are negative (unwilling to spend). "Frugal" is neutral-to-positive. Connotation matters!'
          },
          {
            type: 'translation',
            question: 'Ele é teimoso, mas ela é determinada. (Notice the bias!)',
            answer: [
              'He is stubborn, but she is determined',
              'He is obstinate, but she is determined'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Teimoso = stubborn (negative), determinada = determined (positive)',
            explanation: '"Stubborn" and "determined" both describe someone who doesn\'t give up, but "stubborn" is negative (unreasonable) while "determined" is positive (admirable persistence). Word choice reveals speaker bias.'
          },
          {
            type: 'true-false',
            statement: '"Notorious" and "famous" have the same connotation.',
            correct: false,
            explanation: '"Famous" is positive or neutral (well-known). "Notorious" is negative (well-known for something BAD). Example: "a famous actor" vs "a notorious criminal".'
          },
          {
            type: 'multiple-choice',
            question: 'A real estate agent would most likely describe a very small apartment as:',
            options: [
              'cozy',
              'cramped',
              'tiny',
              'poky'
            ],
            correct: 0,
            explanation: '"Cozy" has a positive connotation (small but comfortable and warm). Agents use positive language! "Cramped", "tiny", and "poky" all highlight the negative aspect of small size.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a sentence that shows awareness of connotation:',
            words: ['The', 'politician', 'was', 'described', 'as', 'assertive', 'by', 'supporters', 'and', 'aggressive', 'by', 'critics.'],
            correct: 'The politician was described as assertive by supporters and aggressive by critics.',
            explanation: '"Assertive" (positive: confident, strong) vs "aggressive" (negative: forceful, hostile). Same behaviour, different connotations depending on the speaker\'s bias.'
          },
          {
            type: 'listening',
            sentence: 'She\'s quite slim and has a youthful, childlike curiosity about the world.',
            question: 'Are the adjectives "slim" and "childlike" being used positively or negatively?',
            hint: 'Compare "slim" with "skinny" and "childlike" with "childish"',
            explanation: 'Both are positive. "Slim" (not "skinny") implies attractiveness. "Childlike" (not "childish") implies innocence and wonder. The speaker is complimenting the person.'
          }
        ]
      },
      {
        id: 'c1-mx4-l2',
        title: 'False Friends for Portuguese Speakers',
        type: 'vocabulary',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"Actually" in English means:',
            options: [
              'In fact / really (na verdade)',
              'Currently / at the moment (atualmente)',
              'In action (em ação)',
              'Actively (ativamente)'
            ],
            correct: 0,
            explanation: 'COMMON FALSE FRIEND! "Actually" = "na verdade / de facto" (in fact). "Atualmente" = "currently / at the moment". Portuguese speakers often say "actually" when they mean "currently".'
          },
          {
            type: 'matching',
            question: 'Match each English false friend with its REAL meaning:',
            pairs: [
              { left: 'eventually', right: 'finally, in the end (not "eventualmente")' },
              { left: 'sensible', right: 'practical, reasonable (not "sensível")' },
              { left: 'fabric', right: 'cloth, textile (not "fábrica")' },
              { left: 'pretend', right: 'to fake, to act as if (not "pretender")' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'She\'s very ___. She always cries during sad movies. (PT "sensível" = EN "___")',
            answer: 'sensitive',
            hint: '"Sensível" in Portuguese = "sensitive" in English, NOT "sensible"',
            explanation: '"Sensível" = "sensitive" (emotional, easily affected). "Sensible" = "sensato/a" (practical, reasonable). This is one of the most common false friends for Portuguese speakers!'
          },
          {
            type: 'translation',
            question: 'Eventualmente, ele vai perceber o erro dele.',
            answer: [
              'Eventually, he will realize his mistake',
              'Sooner or later, he will realize his mistake',
              'In the end, he will realize his mistake'
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Eventualmente" in PT = "eventually" in EN (they happen to align here!). But be careful: PT "eventualmente" can also mean "possibly"',
            explanation: 'Tricky! In this context, "eventualmente" means "finally/in the end" = "eventually". But beware: PT "eventualmente" can also mean "possibly/perhaps", which is NOT what "eventually" means in English.'
          },
          {
            type: 'true-false',
            statement: '"Sympathetic" in English means the same as "simpático" in Portuguese.',
            correct: false,
            explanation: 'FALSE FRIEND! "Sympathetic" = showing understanding for someone\'s suffering (compassivo). "Simpático" = friendly, nice, likeable = "friendly / nice / likeable" in English.'
          },
          {
            type: 'multiple-choice',
            question: 'A Portuguese speaker says: "I intend to go to the university." In Portuguese, "pretendo ir" means "I intend to go." Is this correct English?',
            options: [
              'Yes, "intend" is the correct translation of "pretender" in this context.',
              'No, they should say "I pretend to go to the university."',
              'No, they should say "I attempt to go to the university."',
              'No, they should say "I actualize going to the university."'
            ],
            correct: 0,
            explanation: '"Pretender" (PT) = "to intend" (EN). "To pretend" (EN) = "fingir" (PT). In this case, the speaker correctly used "intend"! The false friend trap would be saying "pretend" instead.'
          },
          {
            type: 'reorder',
            question: 'Rearrange the correct English sentence (watch for false friends!):',
            words: ['I', 'am', 'currently', 'attending', 'a', 'course', 'at', 'the', 'library.'],
            correct: 'I am currently attending a course at the library.',
            explanation: '"Currently" = "atualmente" (not "actually"). "Attending" = "a frequentar/assistir" (not "atendendo" which would be "answering/serving" in English). "Library" = "biblioteca" (not "livraria" which is "bookshop").'
          },
          {
            type: 'fill-blank',
            question: 'The ___ where I work produces car parts. (PT "fábrica" = EN "___")',
            answer: 'factory',
            hint: '"Fábrica" = "factory", NOT "fabric"',
            explanation: '"Fábrica" = "factory" (lugar de produção). "Fabric" = "tecido" (cloth/textile). A very common false friend that can cause embarrassing confusion!'
          }
        ]
      },
      {
        id: 'c1-mx4-l3',
        title: 'Register & Tone (Ways to Disagree)',
        type: 'communication',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Rank from most casual to most formal: (A) "No way!" (B) "I beg to differ." (C) "I don\'t think so." (D) "I respectfully take issue with that assessment."',
            options: [
              'A → C → B → D',
              'A → B → C → D',
              'D → B → C → A',
              'C → A → D → B'
            ],
            correct: 0,
            explanation: 'Casual to formal: "No way!" (very casual) → "I don\'t think so" (neutral) → "I beg to differ" (formal) → "I respectfully take issue with that assessment" (very formal/diplomatic).'
          },
          {
            type: 'matching',
            question: 'Match each level of formality with the appropriate way to say "I disagree":',
            pairs: [
              { left: 'Text to close friend', right: 'Nah, that\'s not right' },
              { left: 'Casual conversation', right: 'I\'m not so sure about that' },
              { left: 'Business meeting', right: 'I see your point, but I have some concerns' },
              { left: 'Academic paper', right: 'This assertion is not supported by the evidence' }
            ]
          },
          {
            type: 'fill-blank',
            question: 'In a formal debate: "With the greatest ___, I must challenge that claim."',
            answer: 'respect',
            hint: 'A formal softener before disagreeing',
            explanation: '"With the greatest respect" is a very formal way to preface disagreement. It\'s even more formal than "With all due respect" and is common in parliamentary and legal debates.'
          },
          {
            type: 'translation',
            question: 'Discordo completamente. (Provide FOUR versions: casual, neutral, formal, very formal)',
            answer: [
              'No way! / I disagree. / I\'m afraid I disagree. / I must respectfully express my disagreement.',
              "No way! / I don't agree. / I'm afraid I cannot agree. / I must respectfully express my disagreement."
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Think of the scale: slang → neutral → polite formal → diplomatic formal',
            explanation: 'The same idea expressed across registers: "No way!" (slang) → "I disagree" (neutral) → "I\'m afraid I disagree" (polite formal) → "I must respectfully express my disagreement" (diplomatic). C1 speakers should be able to move between these.'
          },
          {
            type: 'true-false',
            statement: 'Using very formal language in a casual setting can sound sarcastic or unfriendly.',
            correct: true,
            explanation: 'Absolutely true. If a friend says "Let\'s get pizza" and you reply "I must respectfully decline your proposition," it sounds either sarcastic or oddly cold. Register must match the context.'
          },
          {
            type: 'multiple-choice',
            question: 'Your boss presents an idea you disagree with in a meeting. The best response is:',
            options: [
              '"I see the merits of that approach, though I wonder if we might also consider..."',
              '"That\'s a terrible idea, to be honest."',
              '"Nah, I don\'t think that\'ll work."',
              '"I beg your pardon, but you are mistaken."'
            ],
            correct: 0,
            explanation: '"I see the merits... though I wonder if..." is perfect: it acknowledges the boss\'s idea positively, uses hedging ("wonder", "might"), and introduces your alternative diplomatically.'
          },
          {
            type: 'listening',
            sentence: 'I take your point, and there\'s certainly some truth to what you\'re saying. However, I wonder whether we might be overlooking some important factors here.',
            question: 'What register/tone is the speaker using, and how can you tell?',
            hint: 'Count the softening/hedging strategies',
            explanation: 'This is formal/diplomatic register. Markers: "I take your point" (acknowledgment), "certainly some truth" (partial agreement), "However" (formal contrast), "I wonder whether" (hedged), "we might be" (inclusive + modal). This is a masterclass in polite professional disagreement.'
          },
          {
            type: 'reorder',
            question: 'Rearrange into a diplomatically worded disagreement:',
            words: ['While', 'I', 'appreciate', 'your', 'perspective,', 'I', 'believe', 'the', 'evidence', 'points', 'in', 'a', 'different', 'direction.'],
            correct: 'While I appreciate your perspective, I believe the evidence points in a different direction.',
            explanation: '"While I appreciate your perspective" (concession/acknowledgment) + "I believe" (hedged opinion) + "the evidence points in a different direction" (diplomatic disagreement based on facts, not personal attack).'
          }
        ]
      }
    ]
  },

  // ===== Module 5: Advanced Error Correction =====
  {
    id: 'c1-mx5',
    title: 'Advanced Error Correction',
    description: 'Eliminate common C1-level mistakes and master subtle distinctions',
    icon: '✏️',
    lessons: [
      {
        id: 'c1-mx5-l1',
        title: 'Common C1 Mistakes',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence is CORRECT?',
            options: [
              'Despite the rain, we went for a walk.',
              'Despite of the rain, we went for a walk.',
              'Despite it was raining, we went for a walk.',
              'Despite that it rained, we went for a walk.'
            ],
            correct: 0,
            explanation: '"Despite" is followed by a noun phrase, NOT "of" or a clause. "Despite the rain" is correct. Common error: "despite of" (influenced by Portuguese "apesar de"). For a clause, use: "Despite the fact that it was raining" or "Although it was raining".'
          },
          {
            type: 'fill-blank',
            question: 'On the ___ hand, there are significant disadvantages to consider.',
            answer: 'other',
            hint: 'NOT "in the other hand" — what\'s the correct preposition?',
            explanation: '"On the other hand" is the correct expression. A very common mistake is "in the other hand" (influenced by Portuguese "por outro lado" or confusion with "in my hand"). Always use "on".'
          },
          {
            type: 'translation',
            question: 'Ele sugeriu-me ir ao médico.',
            answer: [
              'He suggested that I go to the doctor',
              'He suggested I go to the doctor',
              'He suggested going to the doctor',
              'He suggested that I should go to the doctor'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'NOT "He suggested me to go" — "suggest" has special grammar!',
            explanation: '"Suggest" is NEVER followed by object + infinitive. WRONG: "He suggested me to go." CORRECT: "He suggested that I go" (subjunctive), "He suggested I should go" (BrE), or "He suggested going" (gerund).'
          },
          {
            type: 'true-false',
            statement: '"I am agree with you" is correct English.',
            correct: false,
            explanation: '"Agree" is a verb, not an adjective. WRONG: "I am agree." CORRECT: "I agree with you." This error comes from treating "agree" like an adjective (similar to "I am happy").'
          },
          {
            type: 'matching',
            question: 'Match each common error with its correction:',
            pairs: [
              { left: 'He explained me the problem.', right: 'He explained the problem to me.' },
              { left: 'I look forward to hear from you.', right: 'I look forward to hearing from you.' },
              { left: 'It depends of the situation.', right: 'It depends on the situation.' },
              { left: 'I\'m used to wake up early.', right: 'I\'m used to waking up early.' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which sentence has a common C1 error?',
            options: [
              'The information are very useful.',
              'The information is very useful.',
              'This information was helpful.',
              'I need some information about flights.'
            ],
            correct: 0,
            explanation: '"Information" is uncountable in English — it\'s always singular: "The information IS useful." WRONG: "The information are" or "informations". Portuguese speakers often add -s because "informações" is plural.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form the CORRECT version (avoid the common error!):',
            words: ['She', 'advised', 'me', 'to', 'take', 'a', 'different', 'approach.'],
            correct: 'She advised me to take a different approach.',
            explanation: '"Advise" CAN be followed by object + infinitive: "She advised me to take..." But "suggest" CANNOT: "She suggested I take..." (not "suggested me to take"). Knowing which verbs follow which pattern is a C1 skill.'
          },
          {
            type: 'fill-blank',
            question: 'I\'ve been living here ___ three years. (NOT "since three years")',
            answer: 'for',
            hint: '"For" = duration (three years), "Since" = point in time (2021)',
            explanation: '"For three years" (duration) vs "since 2021" (starting point). WRONG: "since three years." This for/since distinction is a persistent error even at advanced levels.'
          }
        ]
      },
      {
        id: 'c1-mx5-l2',
        title: 'Subtle Grammar Distinctions',
        type: 'grammar',
        exercises: [
          {
            type: 'multiple-choice',
            question: '"The book ___ I mentioned is on the table." Which relative pronoun is correct?',
            options: [
              'Both "which" and "that" are correct here.',
              'Only "which" is correct.',
              'Only "that" is correct.',
              'Only "what" is correct.'
            ],
            correct: 0,
            explanation: 'In defining (restrictive) relative clauses, both "which" and "that" can be used for things. "The book which/that I mentioned" — both are correct. In American English, "that" is preferred; in British English, both are common.'
          },
          {
            type: 'fill-blank',
            question: 'My car, ___ I bought last year, has already broken down twice.',
            answer: 'which',
            hint: 'In non-defining relative clauses (with commas), only one option works',
            explanation: 'In non-defining (non-restrictive) relative clauses (with commas), you MUST use "which" (not "that"). "My car, which I bought..." is correct. "My car, that I bought..." is wrong.'
          },
          {
            type: 'translation',
            question: 'A quem devo entregar o relatório?',
            answer: [
              'To whom should I submit the report',
              'Who should I submit the report to',
              'Whom should I submit the report to'
            ],
            from: 'PT',
            to: 'EN',
            hint: '"Whom" is used as the object (formal). "Who" is accepted informally.',
            explanation: 'Formal: "To whom should I submit..." Informal: "Who should I submit the report to?" "Whom" is the object form of "who", used after prepositions and as a direct/indirect object. It\'s increasingly rare in spoken English.'
          },
          {
            type: 'true-false',
            statement: '"Who" and "whom" are completely interchangeable in modern English.',
            correct: false,
            explanation: 'While "whom" is declining in spoken English, there is still a grammatical distinction: "who" = subject (Who called?), "whom" = object (Whom did you call?). In formal writing, the distinction matters.'
          },
          {
            type: 'matching',
            question: 'Match each sentence with the correct relative pronoun usage:',
            pairs: [
              { left: 'The person ___ called you...', right: 'who (subject of the verb "called")' },
              { left: 'The person ___ you called...', right: 'whom / who / that (object)' },
              { left: 'Paris, ___ is beautiful,...', right: 'which (non-defining, place as thing)' },
              { left: 'The reason ___ I left...', right: 'why / that / for which' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'What\'s the difference? (A) "I stopped smoking." (B) "I stopped to smoke."',
            options: [
              'A = I quit the habit. B = I paused another activity in order to have a cigarette.',
              'They mean the same thing.',
              'A = I paused to smoke. B = I quit smoking.',
              'Both mean I quit smoking.'
            ],
            correct: 0,
            explanation: '"Stop + gerund" = quit/cease the activity (I stopped smoking = I quit). "Stop + infinitive" = pause in order to do something (I stopped to smoke = I paused to have a cigarette). Huge difference!'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a sentence with a non-defining relative clause:',
            words: ['Professor', 'Smith,', 'whose', 'research', 'is', 'groundbreaking,', 'will', 'give', 'a', 'lecture', 'tomorrow.'],
            correct: 'Professor Smith, whose research is groundbreaking, will give a lecture tomorrow.',
            explanation: '"Whose" in a non-defining clause (with commas) adds extra information about Professor Smith\'s research. This is a C1 structure that adds sophistication to your writing.'
          },
          {
            type: 'fill-blank',
            question: 'I remember ___ the door before I left. (lock — did I actually lock it?)',
            answer: 'locking',
            hint: '"Remember + gerund" = remember something you DID. "Remember + infinitive" = remember something you NEED TO DO.',
            explanation: '"I remember locking" = I have a memory of the action (I did lock it). "I remember to lock" = I don\'t forget to do it (a regular habit/intention). The gerund (-ing) refers to past actions; the infinitive refers to future/intended actions.'
          }
        ]
      },
      {
        id: 'c1-mx5-l3',
        title: 'Advanced Punctuation & Writing Style',
        type: 'writing',
        exercises: [
          {
            type: 'multiple-choice',
            question: 'Which sentence uses the semicolon correctly?',
            options: [
              'The results were promising; however, further testing is needed.',
              'The results were promising; and further testing is needed.',
              'The results; were promising however further testing is needed.',
              'The results were; promising however further testing is needed.'
            ],
            correct: 0,
            explanation: 'A semicolon connects two independent clauses that are closely related. "The results were promising; however, further testing is needed." The semicolon replaces a full stop while showing the connection between ideas.'
          },
          {
            type: 'fill-blank',
            question: 'The company has three priorities___ innovation, sustainability, and employee well-being.',
            answer: ':',
            hint: 'Which punctuation mark introduces a list or explanation?',
            explanation: 'A colon (:) introduces a list, explanation, or elaboration after an independent clause. "The company has three priorities: innovation, sustainability, and employee well-being."'
          },
          {
            type: 'translation',
            question: 'A investigação — que durou três anos — revelou resultados surpreendentes.',
            answer: [
              'The research — which lasted three years — revealed surprising results',
              'The research, which lasted three years, revealed surprising results',
              'The investigation — which lasted three years — revealed surprising results'
            ],
            from: 'PT',
            to: 'EN',
            hint: 'Em dashes (—) or commas can be used for parenthetical information',
            explanation: 'Em dashes (—) are used like commas or parentheses to set off additional information, but with more emphasis. Both "— which lasted three years —" and ", which lasted three years," are correct.'
          },
          {
            type: 'true-false',
            statement: 'The Oxford comma (the comma before "and" in a list) is always required in English.',
            correct: false,
            explanation: 'The Oxford comma is optional but recommended for clarity. "I love my parents, Batman, and Superman" (with Oxford comma) vs "I love my parents, Batman and Superman" (without). The second could be misread as: my parents ARE Batman and Superman!'
          },
          {
            type: 'matching',
            question: 'Match each punctuation mark with its advanced use:',
            pairs: [
              { left: 'Semicolon (;)', right: 'Connecting related independent clauses' },
              { left: 'Colon (:)', right: 'Introducing a list, quote, or explanation' },
              { left: 'Em dash (—)', right: 'Adding emphasis to parenthetical info' },
              { left: 'Ellipsis (...)', right: 'Indicating omission or trailing off' }
            ]
          },
          {
            type: 'multiple-choice',
            question: 'Which version demonstrates better academic writing style?',
            options: [
              'The study suggests that social media use may contribute to increased anxiety levels among adolescents.',
              'Social media makes teenagers really anxious, which is a big problem.',
              'Teenagers who use social media get anxiety, and this is not good.',
              'It is obvious that social media causes anxiety in young people.'
            ],
            correct: 0,
            explanation: 'The first option uses hedging ("suggests", "may contribute"), precise vocabulary ("anxiety levels", "adolescents"), and an objective, measured tone — all hallmarks of good academic writing.'
          },
          {
            type: 'reorder',
            question: 'Rearrange to form a well-structured academic sentence:',
            words: ['Although', 'the', 'sample', 'size', 'was', 'relatively', 'small,', 'the', 'findings', 'provide', 'valuable', 'preliminary', 'insights.'],
            correct: 'Although the sample size was relatively small, the findings provide valuable preliminary insights.',
            explanation: 'This sentence structure (concession + main point) is very common in academic writing. "Although" introduces a limitation; the main clause presents the positive finding. Note the hedging: "relatively", "preliminary".'
          },
          {
            type: 'listening',
            sentence: 'The data reveal — and this is perhaps the most significant finding — that early intervention programs reduce dropout rates by up to forty percent.',
            question: 'What is the function of the em dashes in this sentence?',
            hint: 'Think about what information is between the dashes and why the speaker emphasizes it',
            explanation: 'The em dashes set off a parenthetical comment ("and this is perhaps the most significant finding") that adds emphasis and editorial judgment. In speech, this would correspond to a pause and a change in tone, highlighting the importance of the finding.'
          }
        ]
      }
    ]
  }
]
