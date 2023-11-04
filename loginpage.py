import tkinter as tk
from tkinter import messagebox
import subprocess
import os

# File to store credentials
USER_DATABASE_FILE = 'user_database.txt'

def load_user_database():
    """Load the user database from a text file."""
    if not os.path.exists(USER_DATABASE_FILE):
        return {}
    with open(USER_DATABASE_FILE, 'r') as file:
        lines = file.readlines()
        return dict(line.strip().split(':', 1) for line in lines if line.strip())

def save_user_to_database(username, password):
    """Save a new user to the user database text file."""
    with open(USER_DATABASE_FILE, 'a') as file:
        file.write(f"{username}:{password}\n")

def check_login(username, password):
    """Check if the provided credentials match the stored ones."""
    user_database = load_user_database()
    return user_database.get(username) == password

def run_main_script():
    """Run the main.py script."""
    subprocess.run(["/usr/local/bin/python3", "main.py"])

def attempt_login():
    """Attempt to log in with the information provided in the entry fields."""
    username = entry_username.get()
    password = entry_password.get()
    
    if check_login(username, password):
        root.destroy()
        run_main_script()
    else:
        messagebox.showerror("Login Info", "Login failed. Please check your username and password.")

def add_user(username, password):
    """Add a new user to the user database."""
    user_database = load_user_database()
    if username in user_database:
        messagebox.showerror("Add User", "Username already exists.")
        return False
    save_user_to_database(username, password)
    messagebox.showinfo("Add User", "User added successfully.")
    return True

def show_add_user_prompt():
    """Show a prompt to add a new user."""
    add_user_window = tk.Toplevel(root)
    add_user_window.title("Add User")

    # Username field
    tk.Label(add_user_window, text="New Username:").grid(row=0, column=0)
    new_username_entry = tk.Entry(add_user_window)
    new_username_entry.grid(row=0, column=1)

    # Password field
    tk.Label(add_user_window, text="New Password:").grid(row=1, column=0)
    new_password_entry = tk.Entry(add_user_window, show="*")
    new_password_entry.grid(row=1, column=1)

    # Add user button
    def submit_new_user():
        username = new_username_entry.get()
        password = new_password_entry.get()
        if username and password:
            if add_user(username, password):
                add_user_window.destroy()

    tk.Button(add_user_window, text="Add User", command=submit_new_user).grid(row=2, column=0, columnspan=2)

    # Focus on the username entry
    new_username_entry.focus_set()

# Create the main window
root = tk.Tk()
root.title("Login Page")

# Set the window size and position it in the center of the screen
window_width = 800
window_height = 400
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()
x_position = (screen_width - window_width) // 2
y_position = (screen_height - window_height) // 2
root.geometry(f"{window_width}x{window_height}+{x_position}+{y_position}")

# Create a frame for the login components
frame_login = tk.Frame(root)
frame_login.pack(padx=10, pady=10)

# Username field
label_username = tk.Label(frame_login, text="Username:", font=("Courier New", 12))
label_username.grid(row=0, column=0, sticky="e")
entry_username = tk.Entry(frame_login, font=("Courier New", 12))
entry_username.grid(row=0, column=1)

# Password field
label_password = tk.Label(frame_login, text="Password:", font=("Courier New", 12))
label_password.grid(row=1, column=0, sticky="e")
entry_password = tk.Entry(frame_login, show="*")
entry_password.grid(row=1, column=1)

# Login button
button_login = tk.Button(frame_login, text="Login", command=attempt_login, font=("Courier New", 12))
button_login.grid(row=2, column=0, columnspan=2, pady=5)

# Add User button
button_add_user = tk.Button(frame_login, text="Add User", command=show_add_user_prompt, font=("Courier New", 12))
button_add_user.grid(row=3, column=0, columnspan=2, pady=5)

# Set the focus on the username entry
entry_username.focus_set()

# Start the GUI event loop
root.mainloop()
