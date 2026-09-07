def calculate_bmi(weight_kg, height_m):
    return weight_kg / (height_m ** 2)

def bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

def main():
    print("--- BMI CALCULATOR ---")
    try:
        weight = float(input("Enter your weight in kg: "))
        height = float(input("Enter your height in meters: "))
    except ValueError:
        print("Please enter valid numbers.")
        return

    if height <= 0 or weight <= 0:
        print("Weight and height must be positive numbers.")
        return

    bmi = calculate_bmi(weight, height)
    print(f"Your BMI is: {bmi:.2f}")
    print("Category:", bmi_category(bmi))

if __name__ == "__main__":
    main()
