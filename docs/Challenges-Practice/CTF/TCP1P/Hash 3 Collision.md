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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/e2d758c9-585f-457e-8ef6-150e2d81566b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2HTITX%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCOlynzWr6lzoJZR6g5DaFWxVXvRfzPtLvwG4uGOu%2FbqAIhAN09m%2BPfrzkGknLazXn0%2Fwnj2VLs9GRa%2FsGuG5d4kJmYKv8DCEUQABoMNjM3NDIzMTgzODA1Igzl3hEztPkyXUJsuccq3APx8n%2F5adRID4snaydPsdwyglJQwJ3vF7CfsZ3SXLeCSMl3mUp5egZ7I3aA4KJQCSr6PsN960EiZp38sSxtwYPKo69t8veBGXxBxo6cxOXOWoR7pyBlZAQix0wkQ8WicHBNaF6aVTKRWaX5F816z4RZYPLbdoKjOEXuTfrKhB2P5WZFXJXQhSY%2FM0aZdPXpeoqJ1QXgMn4%2Bkl%2B2amP29%2BO8stU7HMEajtgX88uoMZFts8j36ibB7GN5rJP0qRUGttTorlo0tc8Y84qrZOjabnlefr61fVbCA5YKpHTFLCjm6KVXPnroltsRekcppAUX1CdpfSFJmQmheidRbRwvccHQODJ5nPFE3L2rbcb1HWBYdZfwKFpwLDEHqYjpOJRjA4MJGiyE7dcqRE7sJjszvm%2BvUG0rxMIX5jD0K06Ipu7uBjANbrFy%2FLqkT24MxZbQ2f0gtDNa%2B79TlPR45sDk%2FQpnWlFT491OXucA5Qwwsaf2GPGhjN%2BDXX6M7duxG9d7Ytz%2FmR7KI%2BfMlfGF4GZ4VeUxswZOkH8NKa7PFWUpfMJIfJdchFIcCY6jcmJsvjIWWrFNyVJnkfwR0lJfrsxTn7i0rmKj8MDI8iWLX4uUKFW%2B9Ki5Vseg8t10rbIPUzDDgqHPBjqkAc%2Bpfvs44zycG0V566K59TKC8PCXN6cDjMWEGWKA3qv3oRKMQvYp9%2B0oHlvWNzBpXXVVzpkumjk0bRJ8br%2BprMdtZcI8qUBa8YRzMmTR9HW%2B6m3R66h5nqyhnd%2B%2FS6bbigAY9uhCJFb4zhnLmthbDkIesymd9aAPk9JczHtCfMI%2F83tW5DUeAXhM08B2yBCwPaJi7pWCsYwL8aJi7Vfo%2BByvdnRP&X-Amz-Signature=c90c32e831e14a9924825cd0960e1a60fabdc4ef5903c9f5201da2b129b46257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
`TCP1P{1_r34lly_h0p3_th4t_y0u_c0ns1der_ab0u7_c0ll1sion5_wh3n_m4k1ng_h4sh_func7i0n5}`
<empty-block/>