import java.util.*;

public class ContactBook {
    static Map<String, String> contacts = new LinkedHashMap<>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;
        do {
            System.out.println("\n--- CONTACT BOOK ---");
            System.out.println("1. Add Contact");
            System.out.println("2. Search Contact");
            System.out.println("3. View All Contacts");
            System.out.println("4. Delete Contact");
            System.out.println("5. Exit");
            System.out.print("Choose option: ");
            choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    System.out.print("Enter name: ");
                    String name = sc.nextLine();
                    System.out.print("Enter phone number: ");
                    String phone = sc.nextLine();
                    contacts.put(name, phone);
                    System.out.println("Contact added.");
                    break;
                case 2:
                    System.out.print("Enter name to search: ");
                    String search = sc.nextLine();
                    if (contacts.containsKey(search)) {
                        System.out.println(search + ": " + contacts.get(search));
                    } else {
                        System.out.println("Contact not found.");
                    }
                    break;
                case 3:
                    if (contacts.isEmpty()) {
                        System.out.println("No contacts saved.");
                    } else {
                        for (Map.Entry<String, String> e : contacts.entrySet()) {
                            System.out.println(e.getKey() + ": " + e.getValue());
                        }
                    }
                    break;
                case 4:
                    System.out.print("Enter name to delete: ");
                    String del = sc.nextLine();
                    if (contacts.remove(del) != null) {
                        System.out.println("Contact deleted.");
                    } else {
                        System.out.println("Contact not found.");
                    }
                    break;
                case 5:
                    System.out.println("Goodbye!");
                    break;
                default:
                    System.out.println("Invalid option.");
            }
        } while (choice != 5);
        sc.close();
    }
}
