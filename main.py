<<<<<<< HEAD
# imports of all required libraries and UI components
import math
import datetime as dt
import numpy as np
import yfinance as yf
from bokeh.io import curdoc 
from bokeh.plotting import figure
from bokeh.layouts import row,column
from bokeh.models import TextInput, Button, DatePicker, MultiChoice

#functions for api's
#loads tickers for use in other functions
def load_ticker_data(tickerA, tickerB, start_date, end_date):
    data_frame1 = yf.download(tickerA, start_date, end_date)
    data_frame2 = yf.download(tickerB, start_date, end_date)
    return data_frame1, data_frame2

def plot_ticker_data(data, indicators , sync_axis = None):
    df = data
    #days where the stock gained is when closing price is greater than opening price
    gain = df.Close > df.Open
    #same logic but for loss
    loss = df.Open > df.Close
    width = 12 * 60 * 60 * 1000
    
    if sync_axis is not None:
        p = figure(x_axis_type ="datetime", tools = "pan,wheel_zoom,box_zoom,reset,save", width = 1000,
                   x_range=sync_axis)
    else:
        p = figure(x_axis_type ="datetime", tools = "pan,wheel_zoom,box_zoom,reset,save", width = 1000)

    p.xaxis.major_label_orientation = math.pi/4
    p.grid.grid_line_alpha = 0.25

    p.segment(df.index, df.High, df.index, df.Low, color = "black")
    p.vbar(df.index[gain], width, df.Open[gain], df.Close[gain], fill_color="#00ff00", line_color = "#00ff00")
    p.vbar(df.index[loss], width, df.Open[loss], df.Close[loss], fill_color="#ff0000", line_color = "#ff0000")

    return p




def on_button_click(tickerA, tickerB, start_date, end_date, indicators):
    #df stands for data frame
    df1, df2 = load_ticker_data(tickerA, tickerB, start_date, end_date)
    plot1 = plot_ticker_data(df1, indicators)
    plot2 = plot_ticker_data(df2, indicators, sync_axis=plot1.x_range)
    curdoc().clear()
    curdoc().add_root(layout)
    curdoc().add_root(row(plot1,plot2))


#variables and elements
stock1_text = TextInput(title="Stock 1")
stock2_text = TextInput(title="Stock 2")
date_selector_start = DatePicker(title="Start Date",value="2022-01-01", min_date = "2000-01-01", max_date = dt.datetime.now().strftime("%Y-%m-%d"))
#the end min date is 1 month after the start date because we want to make sure it isn't broken
date_selector_end = DatePicker(title="End Date",value="2022-01-01", min_date = "2000-02-01", max_date = dt.datetime.now().strftime("%Y-%m-%d"))
#this is where the user can select what they want to see
indicator_selector = MultiChoice(options = ["100 Day SMA","30 Day SMA","Linear Regression Line"])

loadButton = Button(label = "Load Data", button_type = "success")
loadButton.onclick(lambda: on_button_click(stock1_text.value, stock2_text.value, date_selector_start.value, date_selector_end.value, indicator_selector.value))

layout = column(stock1_text, stock2_text, date_selector_start, date_selector_end, indicator_selector, loadButton)

curdoc().clear()
curdoc().add_root(layout)

=======
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
>>>>>>> 6e624421025c078408a5e44018ad84f385ce72bb
