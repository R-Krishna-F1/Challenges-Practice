## Notice:
**This challenge was done under lab circumstances where the secret library was given so if you try to practice it with below code you might not get output**


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
![](./images/Hash-3-Collision-img-0.png)
`TCP1P{1_r34lly_h0p3_th4t_y0u_c0ns1der_ab0u7_c0ll1sion5_wh3n_m4k1ng_h4sh_func7i0n5}`
