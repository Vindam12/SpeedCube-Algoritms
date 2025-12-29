def switcher(str):
    new_arr = str.split(',')
    # print(new_arr)
    for i in range(len(new_arr)):
        if len(new_arr[i]) > 1:
            # print(new_arr[i])
            alg = new_arr[i].split(' ')
            # print(alg)
            for j in range(len(alg)):
                if alg[j] == 'R':
                    alg[j] = 'L'
                elif alg[j] == 'L':
                    alg[j] = 'R'
                elif alg[j] == "R'":
                    alg[j] = "L'"
                elif alg[j] == "L'":
                    alg[j] = "R'"
                elif alg[j] == 'F':
                    alg[j] = 'B'
                elif alg[j] == 'B':
                    alg[j] = 'F'
                elif alg[j] == "F'":
                    alg[j] = "B'"
                elif alg[j] == "B'":
                    alg[j] = "F'"
                elif alg[j] == 'F2':
                    alg[j] = 'B2'
                elif alg[j] == 'B2':
                    alg[j] = 'F2'
                elif alg[j] == 'R2':
                    alg[j] = 'L2'
                elif alg[j] == 'L2':
                    alg[j] = 'R2'
                elif alg[j] == '(U2)':
                    alg[j] = ''
                elif alg[j] == '(U)':
                    alg[j] = "(U')"
                elif alg[j] == "(U')":
                    alg[j] = "(U)"
            new_arr[i] = ' '.join(alg)
            # print(new_arr[i])
    result_str = ','.join(new_arr)
    print(result_str)


if __name__ == '__main__':
    str = '''
    Sune,,,,,,,
,(U2) R' F R2 F' R2 U2 R,(U') R U R2 F' U F2 R2 F',(U2) F R' F' R2 U2 R U' R2,(U) R2 U' R2 F' R U2 R' U2 R' F,(U2) F2 R F' U R' F U' R2,(U') R U2 R U' R2 F R2 F',
,(U2) R' F U2 R2' F R',R U' R' U R U2 R' U R2 U' R2,(U) R F R' F' R U' R' U R U' R' ,,R U2 R' U F R F' R2 U' R,(U2) R2' U' R U' F R' F' R2,
,(U2) R U' R U' R' F R' F' R2 U' R2,(U') R2 U' R2 U R' U2 R U R' U' R,,,,,
,(U2) R' F U2 R2 B U',,,,,,
,,,,,,,
Anti-Sune,,,,,,,
,(U2) x' R U' R2 U R2 B2 R',(U) R2 U R2 U' R U2 R' U' R U R',(U') F R2 F' R2 U R' U2 R',(U') F' R U2 R U2 R' F R2 U R2,F' U2 R U R' U' R' F2 R2 F' R',(U2) R2 U R' U2 R2 F R F',
,(U) R2 U R2 F R F' R U R' U R',(U) R U' R' U' F R F' R' F R F',(U2) F' U F R2 U2 R' U R2,(U') F R' F' R U2 R2 U' R2 F R2 F',(U2) R2 U R2 U2 R' F R F' R U' R',(U') R U R' U' R U R' F R F' R',
,(U2) R' U2 R2 F R2 F' R,R' U R U' R' U2 R U' R2 U R2,(U') R2 F R F' U R' U R2,, F2 R U' R2 U' R2 U' R' F R',,
,(U2) R F' R2 U2 F' R,,,,(U) F' R2 U F' R2 U' R U2 F',,
,(U) R' F R2 F' R' U R' U R,,,,R' U2 R U' F' U' F R2 U R',,
Pi,,,,,,, 
,(U2) F R F' R' F R2 F' R' U2 R,(U') R U R' U' R U2 R U' R2,(U2) R F' U R' F2 U R F,(U') R2 U R' F R F' U R',(U) R U' R' F R F' R2 U2 R,(U) R U R' U R2 U' R2 F R2 F',
,(U2) R' F' R2 F' R2 U2 F R,(U') R2 U R' U2 R' U R U' R',(U2) R F' U R2 U' R' F' U' R2 F' R',(U') R' F R' F' U R' U2 R' ,R2 U R' U R' U' R U2 R2 F R F' ,(U2) R' U2 R2 F R' F' R U R',
,(U') R F R' F' U R U' R2 F R F',(U) R2' U' R U2 R U' R' U R,(U2) F U' R' U' R' F R2 U' R2 U' F,(U) R F' U F U' R U2 R ,(U') R F R' F R U R' U2 F ,(U') R' U R F' U' F R2 U2 R',
,(U2) R2 B2 R' U' R2 F R2 U' R',(U') R U' R' U2 R2 U' R U2 R ,(U') R U R' U' R B2 R' U R' F' R2 U R',R F R' F' R U' R2 F R F' ,(U2) F R2 F' R2 U R2 U' R U' R' ,F' U' F R2 U R2 U2 R U2 R,
,,(U) R' U R U2 R2 U R' U2 R' ,(U2) R F' U2 F R U2 R' F R F',,,,
,,(U2) R' U2 R' U R2 U2 R U R' ,,,,,
,,(U2) R U2 R U' R2 U2 R' U' R ,,,,,
U,,,,,,,
,R' U R' U' R U' R' U' R2,(U2) R2 U R2 F' R2 F' R2 F R2 ,(U) R U R' F R2 F' R U' R' ,(U') R2 U R' U R' F R F' R U R2,(U') R2 U R' U2 R' F' U' F,(U) R2 U' R U2 R F R F',
,(U') R2 U' R' U' R U' R' U R',(U') R F R' F' R U' R' F' U' F,R U' F R' F' R U R U2 R2,(U') F' U' F R2 U' R' U R U' R',R F R' F' U' R U' R' U R U' R' ,(U') F R' F' U R2 U R' U R',
,R U' R U R' U R U R2 ,(U) R2 B2 R' U' R2 F R U R U2 R',R2 F R U R' U' R2 U2 R2 F,,(U') R U' R' U' F R F' U R U' R',(U2) F R F' U R2 U R' U2 R',
,R U' R' U' R2 U' R' U R U' R',F2 R U R U' R2 F U' R F',R2 U2 R' U' R' F R F' U R',,,R' U F R2 F' R U2 R,
,(U) R U2 R U2 R U R2,,(U') R' U' R B' R2' F U' F R,,,(U2) R2 F R2 F' U2 R2 U R2 U2 R',
,(U2) R' U' R U2 R2 U R' U R',,,,,,
L,,,,,,,
,R2 U R' U' F R2 F' U R',(U2) R U' R' U' R2 U' R2 F R F',R' U R' U R2 U' R U2 R',(U') R' U R' U' R U R' F R2 F' R,F' U F R U2 R U' R2,(U) R U' R U' R2 U' F R F',
,(U2) R2 F R F' R U R2 U R2,(U) R2 U R2 U F R F' R U R2,(U') R U2 R' U R2 U' R U' R,R' F U2 R2 F R U2 R U2 R2,(U2) R U' R U R' U2 F R F' R,R U' R' D' R U R2 F' R,
,(U') R U2 F R' F' R U2 R U R2,(U2) F R' F' R2 U' R' U' R2 U' R2,(U2) R2 U R2 U F' R U' R' F2,,,(U2) R' U2 R' F R2 F' U' R,
,(U) y2 F R U' R U R2 F' R U R' F',,R' U2 R U' R2 U R' U R',,,,
,(U) R U' R' U R U2 R2 F R2 F' R',,,,,,
T,,,,,,,
,(U) F R' F' R2 U R2 U R U R',(U) R U' F R2 F' U R U' R2,(U2) R U2 R' U R' U' R U2 R U R' ,(U) F R F' R' F R2 F' U R' U R,R2 U' R' F R' F' R U' R U' R2,(U') R' F R2 F' R' U2 F R F',
,R2 U R2 U R U R2 F R F',R2 U' R' U2 R' F R F' U2 R',(U2) R U2 R' U2 R U2 R U' R2,(U2) R2 U' F2 R U2 R' U2 R' F2,(U2) R U R' U' R U R2 F' U F,R2 U' R2 U' F R F' R' U' R,
,(U') R2 U' R' F R' F' U' R2 U' R2,R2 U' R2 U' R' F R' F' R2,(U2) R2 U R' U2 R' U2 R U2 R',(U2) R F' R2' U2' F R U R' F R,(U2) R' U2 R' U' R U R' F R' F',R2 U' F U2 R U2 R U2 F R,
,,R U' R' U' R' F R F' R2 U' R2,(U2) R' U R U2 R2 U R2 U' R U' R',(U') R' F R F' R F R' F' R U' R2,(U2) F2 R2 F R2 U R2 U' F2 R,(U2) R2 F R U R' F U' R U2 R2 F,
,,(U) R' U R' U' R2 U R' F R' F',,,R' U2 R' U2 F R2 F' R2 U' R,,
,,R U R' F2 R U' R2 U2 R' U' F,,,,,
,,(U) y' F R U' R F R2 U' R' U R' F',,,,,
H,,,,,,,
,x R U2 R U' R' U F' R,R2 U R' U R U' R U R' U R2 ,(U') F' R' U' F2 R U' F R',R U' F R' F' R U' R2,,,
,R F2 R F' R' F U' F,R2 U' R U' R' U R' U' R U' R2 ,F R' F' R U2 R' F' U2 F R',R U2 R U' F R F' R,,,
,,R F R' F2 U2 F R U2 R',(U') F' R' U2 F2 R2 F' R' U' F2 R2,(U2) F' U' F R2 U' R2' F R F',,,
,,,(U') R2 B2 R' U R' F' R U R' U' R U R',,,,
    '''

    switcher(str)