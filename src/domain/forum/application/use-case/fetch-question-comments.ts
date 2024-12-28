import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '@/domain/forum/application/repositories/question-comments-repository'
import { Either, right } from '@/core/either'

interface FetchQuestionCommentsUseCaseRequest {
  questionId: string
  page: number
}

type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: QuestionComment[]
  }
>

export class FetchQuestionCommentsUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}
 
  async execute({
    questionId,
    page,
  }: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const questionComments =
      await this.questionCommentsRepository.findManyByQuestionId(questionId, {
        page,
      })
      return right({
      questionComments,
    })
  }
}