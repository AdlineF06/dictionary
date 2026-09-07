products = {
    "1": {"name": "Laptop", "price": 55000},
    "2": {"name": "Headphones", "price": 1500},
    "3": {"name": "Keyboard", "price": 800},
    "4": {"name": "Mouse", "price": 500},
}

cart = []

def show_products():
    print("\n--- PRODUCTS ---")
    for pid, p in products.items():
        name = p["name"]
        price = p["price"]
        print(f"{pid}. {name} - Rs.{price}")

def add_to_cart(pid):
    if pid in products:
        cart.append(products[pid])
        print(f"Added {products[pid]['name']} to cart.")
    else:
        print("Invalid product ID.")

def view_cart():
    if not cart:
        print("Cart is empty.")
        return
    total = 0
    print("\n--- YOUR CART ---")
    for item in cart:
        print(f"{item['name']} - Rs.{item['price']}")
        total += item["price"]
    print(f"Total: Rs.{total}")

def checkout():
    if not cart:
        print("Cart is empty. Add items before checkout.")
        return
    view_cart()
    print("\nOrder placed successfully! (Deploy alert would be sent via Jenkins notify step in CI/CD.)")
    cart.clear()

def main():
    while True:
        print("\n1. View Products  2. Add to Cart  3. View Cart  4. Checkout  5. Exit")
        choice = input("Choose option: ").strip()
        if choice == "1":
            show_products()
        elif choice == "2":
            show_products()
            pid = input("Enter product ID to add: ").strip()
            add_to_cart(pid)
        elif choice == "3":
            view_cart()
        elif choice == "4":
            checkout()
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()
