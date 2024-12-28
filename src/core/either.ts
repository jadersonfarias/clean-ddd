export class Left<L, R> {
  readonly value: any;

  constructor(value: any) {
    this.value = value;

}

isRight(): this is Right<L, R> {
    return false
  }
  isLeft(): this is Left<L, R> {
    return true
  }
}

export class Right<R, L> {
  readonly value: any;

  constructor(value: any) {
    this.value = value;
  }

  isRight(): this is Right<L, R> {
    return true
  }
  isLeft(): this is Left<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<R, L>

export const left = <L, R>(value: L): Either<L, R> => {
   return new Left(value)
}


export const right = <L, R>(value: R): Either<L, R> => {
    return new Right(value)
}