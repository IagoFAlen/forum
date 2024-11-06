import { AnswersRepository } from "@/repositories/answers-repository"
import { Answer } from "../entities/answer"
import { UniqueEntityID } from "@/core/entities/unique-entity-id"

interface AnswerQuestionUseCaseRequest {
	authorId: string
	questionId: string
	content: string
}

export class AnswerQuestionUseCase {
    constructor(private answersRepository: AnswersRepository) {}

	async execute({ authorId, questionId, content }: AnswerQuestionUseCaseRequest) {
		const answer = Answer.create({
			content,
			authorId: new UniqueEntityID(authorId),
			questionId: new UniqueEntityID(questionId),
		})

        await this.answersRepository.create(answer)
		
		return answer
	}
}