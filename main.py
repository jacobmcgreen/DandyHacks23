import math
import datetime as dt
import numpy as np
import yfinance as yf
import tkinter as tk
from tkinter import ttk
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

# Functions for APIs
def load_ticker_data(tickerA, tickerB, start_date, end_date):
    data_frame1 = yf.download(tickerA, start_date, end_date)
    data_frame2 = yf.download(tickerB, start_date, end_date)
    return data_frame1, data_frame2

def plot_ticker_data(canvas, data, indicators):
    df = data
    gain = df.Close > df.Open
    loss = df.Open > df.Close
    width = 0.5  # Width of the bars for the candlestick plot

    fig = Figure(figsize=(10, 4))
    ax = fig.add_subplot(111)

    ax.xaxis_date()
    ax.grid(True)

    ax.bar(df.index[gain], df.Close[gain] - df.Open[gain], width, bottom=df.Open[gain], color='green')
    ax.bar(df.index[loss], df.Close[loss] - df.Open[loss], width, bottom=df.Open[loss], color='red')
    ax.plot(df.index, df.Close, color='black')

    # Embed the plot in the Tkinter GUI
    canvas.figure = fig
    canvas.draw()

# Tkinter GUI components
root = tk.Tk()
root.title("Stock Data Visualization")

stock1_label = tk.Label(root, text="Stock 1:")
stock1_entry = tk.Entry(root)
stock2_label = tk.Label(root, text="Stock 2:")
stock2_entry = tk.Entry(root)

start_date_label = tk.Label(root, text="Start Date:")
start_date_entry = tk.Entry(root)
end_date_label = tk.Label(root, text="End Date:")
end_date_entry = tk.Entry(root)

indicator_label = tk.Label(root, text="Indicators:")
indicator_entry = tk.Entry(root)  # This could be a dropdown or multiple choice

load_button = tk.Button(root, text="Load Data")

# Matplotlib canvas
canvas = FigureCanvasTkAgg(Figure(figsize=(10, 4)), master=root)

# Layout using grid
stock1_label.grid(row=0, column=0)
stock1_entry.grid(row=0, column=1)
stock2_label.grid(row=1, column=0)
stock2_entry.grid(row=1, column=1)
start_date_label.grid(row=2, column=0)
start_date_entry.grid(row=2, column=1)
end_date_label.grid(row=3, column=0)
end_date_entry.grid(row=3, column=1)
indicator_label.grid(row=4, column=0)
indicator_entry.grid(row=4, column=1)
load_button.grid(row=5, column=0, columnspan=2)
canvas.get_tk_widget().grid(row=6, column=0, columnspan=2)

# Button event handler
def on_button_click():
    tickerA = stock1_entry.get()
    tickerB = stock2_entry.get()
    start_date = start_date_entry.get()
    end_date = end_date_entry.get()
    indicators = indicator_entry.get()  # This will need to be parsed appropriately

    df1, df2 = load_ticker_data(tickerA, tickerB, start_date, end_date)
    plot_ticker_data(canvas, df1, indicators)

load_button.config(command=on_button_click)

root.mainloop()
