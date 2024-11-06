import { test, expect } from "vitest"
import { AnswersRepository } from "@/repositories/answers-repository"
import { Answer } from "../entities/answer"
import { AnswerQuestionUseCase } from "./answer-question"

const fakeAnswersRepository: AnswersRepository = {
    create: async function(answer: Answer): Promise<void> {
        return
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

    const answer = await answerQuestion.execute({
        questionId: '1',
        authorId: '1',
        content: 'Nova resposta',
    })

    expect(answer.content).toEqual('Nova resposta')
})