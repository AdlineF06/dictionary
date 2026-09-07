import java.util.Scanner;

public class DiscountCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("--- DISCOUNT CALCULATOR ---");

        System.out.print("Enter original price: ");
        double price = Double.parseDouble(sc.nextLine());

        System.out.print("Enter discount percentage: ");
        double discountPercent = Double.parseDouble(sc.nextLine());

        double discountAmount = price * (discountPercent / 100);
        double finalPrice = price - discountAmount;

        // Simple progress bar visualization based on discount percent
        int barLength = 20;
        int filled = (int) (barLength * (discountPercent / 100));
        StringBuilder bar = new StringBuilder("[");
        for (int i = 0; i < barLength; i++) {
            bar.append(i < filled ? "#" : "-");
        }
        bar.append("]");

        System.out.printf("%nDiscount: %.2f%n", discountAmount);
        System.out.printf("Final Price: %.2f%n", finalPrice);
        System.out.println("Discount level: " + bar + " " + discountPercent + "%");
        sc.close();
    }
}
