import tkinter as tk

def main():
    count = {"value": 0}

    def increment():
        count["value"] += 1
        label.config(text=str(count["value"]))

    def decrement():
        count["value"] -= 1
        label.config(text=str(count["value"]))

    root = tk.Tk()
    root.title("Counter App")
    root.geometry("250x150")

    label = tk.Label(root, text="0", font=("Arial", 24))
    label.pack(pady=10)

    frame = tk.Frame(root)
    frame.pack()

    tk.Button(frame, text="-", width=5, command=decrement).pack(side="left", padx=10)
    tk.Button(frame, text="+", width=5, command=increment).pack(side="left", padx=10)

    root.mainloop()

if __name__ == "__main__":
    main()
