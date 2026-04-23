## Notice:
**This challenge was done under lab circumstances where the secret library was given so if you try to practice it with below code you might not get output**
<empty-block/>
<empty-block/>
upon opening the challenge we can find this file [server.py](http://server.py) lets take close look at it
```python
#!/usr/bin/env python3

# from secret import FLAG

# my very original hash function!!1!
def my_hash(string):
	sum = 0
	for char in string:
		sum += ord(char)
	sum = sum % 2**24
	return str(sum).encode().hex()

# username & hashed passwords
user_database = {
	'admin' : '32323931',
	'user1' : '32303638',
	'user2' : '31333433',
}

logged_in = False

# main code
while True:
    print("""
        =================WELCOME=================
        1. Login
        2. Exit
        =========================================
        """)

    choose = input(">> ")

    if choose == "1":
        inp_username = input("Username: ")
        inp_password = input("Password: ")
        try:
        	if my_hash(inp_password) == user_database[inp_username]:
        		logged_in = True
        		print("Login successful!")
        	else:
        		assert 1 == 0	# raise error, go to "except" codeblock
        except:
            print("Username or Password might be wrong...")

    elif choose == "2":
        print("Good Bye!")
        exit(0)
            
    else:
        print("Choose correctly!")
        continue

    while logged_in:
        print("""
        ===========WELCOME BACK, USER============
        1. Get Flag
        2. Logout
        =========================================
        """)

        choose = input(">> ")

        if choose == "1":
            print(f"Here is your flag: {FLAG}")
            exit(0)

        elif choose == "2":
            print("Logging out...")
            logged_in = False
                
        else:
            print("Choose correctly!")
            continue
```
<empty-block/>
in line 37 we can see the my_hash function is being used to transform input data and then compare it to the the defined table in the code so to reveal the flag we have to reverse the logic find the input and reveal flag I used vs code 
since its a hash we cant replicate exactly because its what happens was there is a sum variable which takes our input converts to ascii and them up and finally checks the sum
for example:
use normal number instead of ascii let the password sum be 10
so the password can be 1234 since 1+2+3+4 = 10 or it can be 55 since 5+5 = 10
so we can basically guess the password but not exact one we can use python for this and the code is
```python
def recreate_string(hex_input):
    try:
        # Step 1: Get the target integer
        target_sum = int(bytes.fromhex(hex_input).decode())
        
        # Step 2: Generate a string that hits that sum
        # We'll use 'z' (122) to keep the string shorter
        char_val = 122 
        count = target_sum // char_val
        remainder = target_sum % char_val
        
        reconstructed = chr(char_val) * count
        if remainder > 0:
            reconstructed += chr(remainder)
            
        return reconstructed
    except Exception as e:
        return f"Error: Invalid hex or format. {e}"

# Example usage:
original_hex = "32323931" # This is the hex for sum 390
print(f"One possible string: {recreate_string(original_hex)}")
```
so the output for the hex 32323931 is zzzzzzzzzzzzzzzzzz_ which matches to admin so we start the code and we get the flag
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/e2d758c9-585f-457e-8ef6-150e2d81566b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2AUYHH%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyBo7lndUSD3X14WDy43NwGVZyaoe6%2FjBcFxMbSfRegQIhAP1jBORzO%2BL0HMrPFJKxYtVRKq2S4sR1PaaFmFcB5anpKv8DCFwQABoMNjM3NDIzMTgzODA1Igw%2BqWLvLkXb7SHEn8oq3AOn3xC2aygJwvAQRl16ZPdagRdN6oouzkOdjMKkRPvgBLaIxpBVFlWbGgObE2JXNIOd9t4i2mORCY9RMtEBkt8OS1nbNKX%2FPRN3HOQqMU%2F%2FQESIp0XMWfXEypi78DWKTFd%2BSu1BwftjH8lH9qMJyWHZEyZBx%2FK1F9QDZ4A09RIrzpPrqTdba2%2FFNxIL7kX9zTbm3YsUdKkXzyKl9c0gxplpcJf6VzprMZ3jV%2BN3aBNZlIPKUrmSxa5XUosVVkiCotWUQ3avhFBKhHiNxZO5rTXrMvOCwlIZWeeXl%2FREVw006w8CZ%2BB4CZwZlUtFd9vitVwd2aW%2FLo5LqA7sT%2BQxcNYhS9kt6eOoNruGf6VIVpavGCRekIkViBpIScHb1NPyacGv5hUHvhzNC12z4Ad4G2Squn41J%2Fi16R4t4hp4l42jSGZdt5KQORPNmCb%2Bk6LZldv0WMTFFcASQm8i8bGflc5aw3MlMekYc2S3GxJqt5jd8t75qhyZfDRjCkCJZ7y5e8HhYOLj2UI%2BLWijwM1pZzsn4sZoRFAFx%2FjG66xtZdERea%2BExYpENZn8ckyfoIBVMH1HKFSLbej0aKJsxrTIRjb77cY55Dzc2EAbjdXyHPHClRTZTibYV8iBg%2BuATjCIlqbPBjqkAfAUfp45goa7KdbldhmBH%2BiydWEM9GEXphzMpH0xreXI5nxvHp5ACKdKlrstdUuh2TD1ocs1qzy0L%2BJh48GQ1qO%2FhhpkmaWK3bFf%2BHy0PX0jPcTwB1GXKoEP7%2FcUSFcdL5ALF3hscvbKej2J7M3SCp1Mo7kGmeRds5Q5uZv%2BXZ910fJIQOZURFGfq8ROPHkF7eY0tBNjQLgcUx54ZgYmLpYCvE9z&X-Amz-Signature=f3cc4e3fc6851c304e395ea3d981cf94d3697e8a8471c175c313fd52324321b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
`TCP1P{1_r34lly_h0p3_th4t_y0u_c0ns1der_ab0u7_c0ll1sion5_wh3n_m4k1ng_h4sh_func7i0n5}`
<empty-block/>