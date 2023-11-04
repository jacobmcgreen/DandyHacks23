import tkinter as tk

def main():
    # Create the main application window
    root = tk.Tk()
    root.title("Main Application")

    # Create a label with the text "Hello, World!"
    label = tk.Label(root, text="Hello, World!", font=("Arial", 16))
    label.pack(padx=20, pady=20)

    # Start the GUI event loop
    root.mainloop()

if __name__ == "__main__":
    main()
