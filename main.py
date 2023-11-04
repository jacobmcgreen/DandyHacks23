import tkinter as tk

class MainApp:
    def __init__(self):
        self.main_window = tk.Tk()
        self.main_window.title("Main Page")

        # Set the window size
        window_width = 400
        window_height = 200
        screen_width = self.main_window.winfo_screenwidth()
        screen_height = self.main_window.winfo_screenheight()
        x_position = (screen_width - window_width) // 2
        y_position = (screen_height - window_height) // 2
        self.main_window.geometry(f"{window_width}x{window_height}+{x_position}+{y_position}")

        self.label = tk.Label(self.main_window, text="Welcome to the Main Page")
        self.label.pack()

    def run(self):
        self.main_window.mainloop()

if __name__ == "__main__":
    main_app = MainApp()
    main_app.run()
