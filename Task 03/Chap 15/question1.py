import PyPDF2

with open('file.pdf', 'rb') as file:
    pdf_reader = PyPDF2.PdfFileReader(file)
