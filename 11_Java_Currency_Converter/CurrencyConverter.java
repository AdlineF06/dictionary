import java.util.*;

public class CurrencyConverter {
    public static void main(String[] args) {
        // Static sample exchange rates (relative to USD). Replace with a live API call for real-time rates.
        Map<String, Double> rates = new LinkedHashMap<>();
        rates.put("USD", 1.0);
        rates.put("INR", 83.0);
        rates.put("EUR", 0.92);
        rates.put("GBP", 0.79);
        rates.put("JPY", 149.0);

        Scanner sc = new Scanner(System.in);
        System.out.println("--- CURRENCY CONVERTER ---");
        System.out.println("Available currencies: " + rates.keySet());

        System.out.print("Enter amount: ");
        double amount = Double.parseDouble(sc.nextLine());

        System.out.print("From currency: ");
        String from = sc.nextLine().toUpperCase();

        System.out.print("To currency: ");
        String to = sc.nextLine().toUpperCase();

        if (!rates.containsKey(from) || !rates.containsKey(to)) {
            System.out.println("Invalid currency code.");
        } else {
            double inUSD = amount / rates.get(from);
            double converted = inUSD * rates.get(to);
            System.out.printf("%.2f %s = %.2f %s%n", amount, from, converted, to);
        }
        sc.close();
    }
}
