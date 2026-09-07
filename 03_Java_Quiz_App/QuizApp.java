import java.util.*;

public class QuizApp {
    public static void main(String[] args) {
        String[] questions = {
            "What is the capital of France?",
            "Which language runs in a web browser?",
            "What does CPU stand for?",
            "What is 5 + 7?",
            "Which planet is known as the Red Planet?"
        };
        String[][] options = {
            {"A. Berlin", "B. Paris", "C. Rome", "D. Madrid"},
            {"A. Java", "B. C++", "C. JavaScript", "D. Python"},
            {"A. Central Processing Unit", "B. Central Process Unit", "C. Computer Personal Unit", "D. None"},
            {"A. 10", "B. 11", "C. 12", "D. 13"},
            {"A. Earth", "B. Venus", "C. Mars", "D. Jupiter"}
        };
        char[] answers = {'B', 'C', 'A', 'C', 'C'};
        int score = 0;

        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < questions.length; i++) {
            System.out.println("\nQ" + (i + 1) + ": " + questions[i]);
            for (String opt : options[i]) System.out.println(opt);
            System.out.print("Your answer (A/B/C/D): ");
            String input = sc.nextLine().trim().toUpperCase();
            if (!input.isEmpty() && input.charAt(0) == answers[i]) {
                System.out.println("Correct!");
                score++;
            } else {
                System.out.println("Wrong! Correct answer: " + answers[i]);
            }
        }
        System.out.println("\nQuiz Over! Your Score: " + score + "/" + questions.length);
        sc.close();
    }
}
