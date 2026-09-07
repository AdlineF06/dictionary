import calendar
import tkinter as tk
from tkinter import ttk
from datetime import date

def main():
    root = tk.Tk()
    root.title("Calendar Picker")
    root.geometry("300x350")

    today = date.today()
    selected = tk.StringVar(value="No date selected")

    year_var = tk.IntVar(value=today.year)
    month_var = tk.IntVar(value=today.month)

    def draw_calendar():
        for widget in cal_frame.winfo_children():
            widget.destroy()

        year = year_var.get()
        month = month_var.get()

        header = tk.Label(cal_frame, text=f"{calendar.month_name[month]} {year}", font=("Arial", 12, "bold"))
        header.grid(row=0, column=0, columnspan=7)

        days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
        for i, d in enumerate(days):
            tk.Label(cal_frame, text=d).grid(row=1, column=i)

        month_days = calendar.monthcalendar(year, month)
        for r, week in enumerate(month_days, start=2):
            for c, day in enumerate(week):
                if day != 0:
                    btn = tk.Button(cal_frame, text=str(day), width=3,
                                     command=lambda d=day: pick_date(d))
                    btn.grid(row=r, column=c)

    def pick_date(day):
        selected.set(f"Selected: {year_var.get()}-{month_var.get():02d}-{day:02d}")

    def change_month(delta):
        m = month_var.get() + delta
        y = year_var.get()
        if m > 12:
            m = 1
            y += 1
        elif m < 1:
            m = 12
            y -= 1
        month_var.set(m)
        year_var.set(y)
        draw_calendar()

    nav_frame = tk.Frame(root)
    nav_frame.pack(pady=5)
    tk.Button(nav_frame, text="< Prev", command=lambda: change_month(-1)).pack(side="left")
    tk.Button(nav_frame, text="Next >", command=lambda: change_month(1)).pack(side="left")

    cal_frame = tk.Frame(root)
    cal_frame.pack()

    label = tk.Label(root, textvariable=selected, font=("Arial", 11))
    label.pack(pady=10)

    draw_calendar()
    root.mainloop()

if __name__ == "__main__":
    main()
