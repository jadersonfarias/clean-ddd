import { Entity } from '@/core/entitites/entity'
import { UniqueEntityID } from '@/core/entitites/unique-entity-id'
import { Optional } from '@/core/@types/optional'
import { Comment, CommentProps } from './comment'


export interface QuestionCommentProps extends CommentProps {
    questionId: UniqueEntityID
  }
  export class QuestionComment extends Comment<QuestionCommentProps> {
    get questionId() {
      return this.props.questionId
    }
    
    static create(
      props: Optional<QuestionCommentProps, 'createdAt'>,
      id?: UniqueEntityID,
    ) {
      const questionComment = new QuestionComment(
        {
          ...props,
          createdAt: props.createdAt ?? new Date(),
        },
        id,
      )
      return questionComment
    }
  }