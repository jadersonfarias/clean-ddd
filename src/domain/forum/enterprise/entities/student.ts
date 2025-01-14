import { randomUUID } from "crypto";
import { Entity } from "../../../../core/entitites/entity";
import { UniqueEntityID } from "../../../../core/entitites/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const question = new Student(props, id);

    return question;
  }
}
