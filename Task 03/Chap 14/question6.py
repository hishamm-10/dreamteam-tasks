def column_number_to_letter(n):
    letter = ''
    while n > 0:
        n, remainder = divmod(n - 1, 26)
        letter = chr(65 + remainder) + letter
    return letter

column_letter = column_number_to_letter(999)
print(column_letter)
