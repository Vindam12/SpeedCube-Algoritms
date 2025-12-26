counter = 0
letter = "a"
number = 0
while counter < 36:
    counter += 1
    number += 1

    if counter == 10:
        letter = "b"
        number = 1

    if counter == 19:
        letter = "c"
        number = 1

    if counter == 28:
        letter = "d"
        number = 1
    
    method = "Eg1 LS" + str(number) + " " + letter

    print('"' + method + '"' + ',')
    