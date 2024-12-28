import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(
    override: Partial<QuestionProps> = {},
    id?: UniqueEntityID
) { // partial tranforma a props em opisionais
  const question = Question.create({
    authorId: new UniqueEntityID(),
    title: faker.lorem.sentence(), // 10 palavras
    content: faker.lorem.text(), // um texto
    ...override,
  },
id
)
  return question
}