import tkinter as tk
from tkinter import messagebox
import subprocess

# Hardcoded credentials for demonstration purposes
USER_DATABASE = {
    'andy': 'password',
    'jacob': 'password',
    'jackson': 'password',
}

def check_login(username, password):
    """Check if the provided credentials match the stored ones."""
    return USER_DATABASE.get(username) == password

def run_main_script():
    """Run the main.py script."""
    subprocess.run(["python", "main.py"])

def attempt_login():
    """Attempt to log in with the information provided in the entry fields."""
    username = entry_username.get()
    password = entry_password.get()
    
    if check_login(username, password):
        messagebox.showinfo("Login Info", "Login successful!")
        root.destroy()
        run_main_script()
    else:
        messagebox.showerror("Login Info", "Login failed. Please check your username and password.")

# Create the main window
root = tk.Tk()
root.title("Login Page")

# Create a frame for the login components
frame_login = tk.Frame(root)
frame_login.pack(padx=10, pady=10)

# Username field
label_username = tk.Label(frame_login, text="Username:")
label_username.grid(row=0, column=0, sticky="e")
entry_username = tk.Entry(frame_login)
entry_username.grid(row=0, column=1)

# Password field
label_password = tk.Label(frame_login, text="Password:")
label_password.grid(row=1, column=0, sticky="e")
entry_password = tk.Entry(frame_login, show="*")
entry_password.grid(row=1, column=1)

# Login button
button_login = tk.Button(frame_login, text="Login", command=attempt_login)
button_login.grid(row=2, column=0, columnspan=2, pady=5)

# Set the focus on the username entry
entry_username.focus_set()

# Start the GUI event loop
root.mainloop()
