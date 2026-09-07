import java.util.*;

public class TemperatureTimerApp {
    public static void main(String[] args) throws InterruptedException {
        Scanner sc = new Scanner(System.in);
        System.out.println("--- Temperature Converter & Timer ---");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Choose option: ");
        int choice = Integer.parseInt(sc.nextLine());

        System.out.print("Enter temperature value: ");
        double temp = Double.parseDouble(sc.nextLine());

        double result;
        if (choice == 1) {
            result = (temp * 9 / 5) + 32;
            System.out.println(temp + "C = " + result + "F");
        } else {
            result = (temp - 32) * 5 / 9;
            System.out.println(temp + "F = " + result + "C");
        }

        System.out.print("\nStart a timer? Enter seconds (0 to skip): ");
        int seconds = Integer.parseInt(sc.nextLine());
        for (int i = seconds; i > 0; i--) {
            System.out.println("Time left: " + i + "s");
            Thread.sleep(1000);
        }
        if (seconds > 0) System.out.println("Time's up!");
        sc.close();
    }
}
