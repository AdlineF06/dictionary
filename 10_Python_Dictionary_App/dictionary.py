word_meanings = {
    "python": "A high-level, interpreted programming language known for readability.",
    "java": "A widely-used object-oriented programming language.",
    "algorithm": "A step-by-step procedure for solving a problem.",
    "variable": "A named storage location for a value in a program.",
    "function": "A reusable block of code that performs a specific task.",
}

def search_word(word):
    return word_meanings.get(word.lower(), "Word not found in local dictionary.")

def main():
    print("--- DICTIONARY APP ---")
    print("(Local dictionary demo - add your own words to the dictionary, or integrate a Dictionary API like dictionaryapi.dev for live lookups.)")
    while True:
        word = input("\nEnter a word to search (or 'exit' to quit): ").strip()
        if word.lower() == "exit":
            print("Goodbye!")
            break
        print("Meaning:", search_word(word))

if __name__ == "__main__":
    main()
