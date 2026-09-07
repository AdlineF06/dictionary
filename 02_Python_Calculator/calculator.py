def calculator():
    print("--- BASIC CALCULATOR ---")
    while True:
        print("\n1. Add  2. Subtract  3. Multiply  4. Divide  5. Exit")
        choice = input("Choose operation: ")
        if choice == "5":
            print("Goodbye!")
            break
        if choice not in ("1", "2", "3", "4"):
            print("Invalid choice.")
            continue
        try:
            a = float(input("Enter first number: "))
            b = float(input("Enter second number: "))
        except ValueError:
            print("Please enter valid numbers.")
            continue

        if choice == "1":
            print("Result:", a + b)
        elif choice == "2":
            print("Result:", a - b)
        elif choice == "3":
            print("Result:", a * b)
        elif choice == "4":
            if b == 0:
                print("Error: Division by zero.")
            else:
                print("Result:", a / b)

if __name__ == "__main__":
    calculator()
