#! /usr/bin/env node
import inquirer from 'inquirer';
const questions = [
    {
        type: 'list',
        name: 'question1',
        message: 'Who developed Typescript?',
        choices: ['Oracle', 'Microsoft', 'Berlin', 'Java'],
        correctAnswer: 'Microsoft'
    },
    {
        type: 'list',
        name: 'question2',
        message: 'Which planet is known as the Red Planet?',
        choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
    },
    {
        type: 'list',
        name: 'question3',
        message: 'What is the largest ocean on Earth?',
        choices: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        correctAnswer: 'Pacific Ocean'
    },
    {
        type: 'list',
        name: 'question4',
        message: 'Which fruit is the king of fruits"?',
        choices: ['Mango', 'Apple', 'Grapes', 'Peach'],
        correctAnswer: 'Mango'
    },
    {
        type: 'list',
        name: 'question5',
        message: 'What is the chemical symbol for gold?',
        choices: ['Au', 'Ag', 'Pb', 'Fe'],
        correctAnswer: 'Au'
    },
    {
        type: 'list',
        name: 'question6',
        message: 'Which element has the atomic number 1?',
        choices: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'],
        correctAnswer: 'Hydrogen'
    },
    {
        type: 'list',
        name: 'question7',
        message: 'In which year did the Titanic sink?',
        choices: ['1912', '1905', '1898', '1923'],
        correctAnswer: '1912'
    },
    {
        type: 'list',
        name: 'question8',
        message: 'What is the hardest natural substance on Earth?',
        choices: ['Gold', 'Iron', 'Diamond', 'Platinum'],
        correctAnswer: 'Diamond'
    },
    {
        type: 'list',
        name: 'question9',
        message: 'Which planet is the largest in our solar system?',
        choices: ['Earth', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter'
    },
    {
        type: 'list',
        name: 'question10',
        message: 'By writing which code we can run a single data multiple times?',
        choices: ['Arrays', 'Variables', 'Loops', 'OOPS'],
        correctAnswer: 'Loops'
    }
];
const askQuestions = async () => {
    let score = 0;
    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: question.type,
                name: question.name,
                message: question.message,
                choices: question.choices,
            }
        ]);
        if (answer[question.name] === question.correctAnswer) {
            score++;
            console.log('Correct!');
        }
        else {
            console.log(`Wrong! The correct answer is ${question.correctAnswer}.`);
        }
    }
    console.log(`You scored ${score} out of ${questions.length}`);
};
askQuestions();
