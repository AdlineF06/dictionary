import java.time.LocalDate;
import java.util.Scanner;

public class AgeCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("--- CALCULATE AGE FROM BIRTH YEAR ---");
        System.out.print("Enter your birth year (e.g. 2000): ");
        int birthYear = Integer.parseInt(sc.nextLine());

        int currentYear = LocalDate.now().getYear();
        int age = currentYear - birthYear;

        if (age < 0) {
            System.out.println("Invalid birth year.");
        } else {
            System.out.println("Your age is approximately: " + age + " years");
        }
        sc.close();
    }
}
