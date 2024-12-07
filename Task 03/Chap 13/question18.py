from openpyxl.chart import BarChart, Reference

chart = BarChart()
data = Reference(sheet, min_col=2, min_row=1, max_col=2, max_row=10)
chart.add_data(data, titles_from_data=True)
chart.title = "Sales Data"
sheet.add_chart(chart, 'E5')
