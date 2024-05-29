import {Component, OnInit} from '@angular/core';

interface Question {
  question: string;
  options: string[];
  answer: string;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  questions: Question[] = [
    {
      question: 'What is the size of an int in Java?',
      options: ['16 bit', '32 bit', '64 bit', 'Depends on the system'],
      answer: '32 bit'
    },
    {
      question: 'Which of the following is not a keyword in Java?',
      options: ['class', 'interface', 'extends', 'implement'],
      answer: 'implement'
    },
  ];

  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;

  ngOnInit(): void {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    if (this.selectedOption === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.currentQuestionIndex++;
    this.selectedOption = null;
  }

  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
