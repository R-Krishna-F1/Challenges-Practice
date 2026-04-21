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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/e2d758c9-585f-457e-8ef6-150e2d81566b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMVL2XB7%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC42rVU4WLkGbR6msxXmdSHMPr1le%2FkItoGBWBSCqUSqAIgM8ko5vkNePrXvMj7WBGkOYkE9x3hoCL0P1likHti5KMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJH6vbuCp%2B4wFlq7gCrcAwGNsZRZFqnsEdPcm4BdV9qj7OaxM2kK0AZGixMph75xaZBJRMLVKz%2BYyGMX7wGUrVVmxj3ZplQQmV7PYO9GhBz%2BriHzzyDPXXL2dU7bV1jXTYJvvej3P83GsXQjaAC%2FUMkgnB5uAV2Cm89vQyCjaxVbwF3PlxzRR66kfAX4Og0NO7WAbMJjKVdQQs6P9sJoRJGZeuH20cakAGC2GxhPeI%2Bne3Hy02q2c4edA1PUdmUzajUsWKE%2FBTQiiypxZ%2Fw0TxhODFEKLTa7jlT6QJfvKYNWXkXCWwRTMbAdxQoWWL4zVuQ5xuR7mx%2BSwrZeZ25GCbqqNKOgmkEOLoEvBywhk1JH2GgX6XWFR3jsBV%2BGWNn8ke3x9%2FVVCg6HQED1nvp7tAAEKRx69u1YdxynQ6ISybYyhRx7wfyhXRhwt8QQWq%2FmDGfkTtWqIMNKgNgDcyqfPt%2BS0tDsNmc2w5ihtUNGgk2gYYdixeYK7ev%2F8W%2FSYg4Qq971MyRVG6K7G%2BuoAagba6Hy2Soea7bXdpfHuEra3T399yqAOqPgdzRfvcBm4nkzp0uwuBUhxe%2FN%2Bm1SRtyU9BSSkcaC4%2FHgSOaeEB2NcXg76eJZ67g4b%2BsvfXy%2BYuGP0GRzo6%2BYLr8CCJ1bMKH4ns8GOqUBYcRVrC8wBgoejRtlhq0J0jV%2FdLLE6lCEFappf5iA8JYEso8BR85e8uWwnVGdxIQz1ggHAA3ghZ%2B3anMxHZylmWtO9BGGkiOIpr1NSqzRsRmOE2NmQVjJSxNg1U9zJusIQUm7GnKkBGCJ3k2kntUFQ81ayf9NfBMxbWYsJn%2BwhgQdXLPbCzeJreR0mfM4l1gzFx%2FXgTSC%2FsDHO4uk%2FiVLGaaG%2BQ2m&X-Amz-Signature=b22a778410c644e666becfff1974bff48a64b6020bc0d3e8063b36f49501de41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
`TCP1P{1_r34lly_h0p3_th4t_y0u_c0ns1der_ab0u7_c0ll1sion5_wh3n_m4k1ng_h4sh_func7i0n5}`
<empty-block/>