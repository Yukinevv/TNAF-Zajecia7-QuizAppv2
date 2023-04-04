import "@testing-library/jest-dom";
//import { render, }
import userEvent from "@testing-library/user-event";
import { QuizResult } from "./QuizResult";

describe("Quiz Result", () => {
  it("should render quiz result information", () => {
    // given
    const correctAnswer = 1;
    const questionAmount = 3;

    render(
      <QuizResult
        correctAnswers={correctAnswer}
        questionsAmount={questionAmount}
      />
    );

    // then
    expect(screen.getByText("🎉  Twój wynik: 1 / 3 pkt.")).toBeInTheDocument();
  });
});
