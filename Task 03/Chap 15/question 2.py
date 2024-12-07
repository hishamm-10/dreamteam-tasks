with open('input.pdf', 'rb') as infile:
    pdf_reader = PyPDF2.PdfFileReader(infile)

with open('output.pdf', 'wb') as outfile:
    pdf_writer = PyPDF2.PdfFileWriter()
