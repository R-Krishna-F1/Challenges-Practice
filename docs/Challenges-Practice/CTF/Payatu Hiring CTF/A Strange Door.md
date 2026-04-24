So after installing the app we will be provided with this string so we it provided 2 methods to get the use frida hook or flip the bit (might be this is how the password is being decrypted)
<empty-block/>
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/45892e25-c81b-4cb7-9bb1-224f94c87649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGF6E23%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDYbC9DGxfuuTSEh2kglSxt%2FsPW2FoaxvDLh9lrGgaIAiEAojrBpUJgS1HSxW9e2hUFAIVH9VljZzmMMw0vMUIXxasq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMMCy2On8tk3PisbCyrcA5ysbziTCBakGPyEa3t%2FKbkiYeDGGEEMlCWH3Vr%2FcKDCEsdWmhGN2lzFJf4wCZxtIG6u5KBPHiDYMrySeAfCoTLMmaXmjTm4TQZBd9b7rCGjb%2FZ%2BkYeH1GhHvUXqv5Ks%2BnvXj1ryURaxGUfvisjxBK8eQ9zOsBqbtvOHKepDW7naM%2FW2k1VHc%2BypVm%2FxtIHdw2gGv7tVoYgMmh6GxBowOxxv60l2wZ1OFn%2FqCOvI%2BBukX9f1xBXx%2B5RmjFlOmtz1cu5zgldmaFYXaxygfJc1lj2wNmA5R4OoYFoiCPYyRQkGdLGb%2BbpMGOXloqnsGfFBFR%2BYjwjlxztz%2BOUB1qIp7UPJJWe%2BjHlBmwIwA%2FVN8XBZMYWviiskNtpBePUlGQRL5hioNINmp8P4%2B6QRxw3I0bBnV%2FRHGgHcnj3pEKTY1nmR3bdTklOvvrhhC6CKMIew7VRs5UkLy3PvdrkU0vlAFq665xgttwKYgqxBLMoK8Ne7V5GAMpd2abTzmxksHi1zjCX4%2FZ7tNVTjbK5On1t6%2FudVFVzg2mv2jdl2LCEVgo8QmWjtjn4FBHN%2FUF8TpZCXqqyRUdhybACn2hyMhcXYfgVa1wH47ldrwT8G1gA9eGrseCJ8BKmXvEso2gwRMN3Yqs8GOqUBxvuLskw40nL9eZ49Id2zZMtLloUuCrLnEX34rcADuW%2FawLxbLuS8xkVq0I%2Fd%2F3zMkaQcwXAJHxXl9RHIG3FJA0sdaj%2BYqhNpOzitS3%2FvGa%2FCooMc6n9fVboXP8DMlrKp6ivug5Y8aN79RWW6WOTjeo4VBuHT8Nz%2FKKZxAbVNreZL1jaXpWCsEEzOOWdVKqSR%2FGwMGZROhhYF6z5xf%2Fmld8oto3Ov&X-Amz-Signature=56abef85d54df0ec337a733c1cbb217078591641ada21b09ef4da5331d3a2ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
so lets go to jadx and we can notice its calling 2 native functions decryotflag() and checkPasscode() from the native file ctf
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/65880be0-d3f4-44c1-b764-c8ed955a13be/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGF6E23%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDYbC9DGxfuuTSEh2kglSxt%2FsPW2FoaxvDLh9lrGgaIAiEAojrBpUJgS1HSxW9e2hUFAIVH9VljZzmMMw0vMUIXxasq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMMCy2On8tk3PisbCyrcA5ysbziTCBakGPyEa3t%2FKbkiYeDGGEEMlCWH3Vr%2FcKDCEsdWmhGN2lzFJf4wCZxtIG6u5KBPHiDYMrySeAfCoTLMmaXmjTm4TQZBd9b7rCGjb%2FZ%2BkYeH1GhHvUXqv5Ks%2BnvXj1ryURaxGUfvisjxBK8eQ9zOsBqbtvOHKepDW7naM%2FW2k1VHc%2BypVm%2FxtIHdw2gGv7tVoYgMmh6GxBowOxxv60l2wZ1OFn%2FqCOvI%2BBukX9f1xBXx%2B5RmjFlOmtz1cu5zgldmaFYXaxygfJc1lj2wNmA5R4OoYFoiCPYyRQkGdLGb%2BbpMGOXloqnsGfFBFR%2BYjwjlxztz%2BOUB1qIp7UPJJWe%2BjHlBmwIwA%2FVN8XBZMYWviiskNtpBePUlGQRL5hioNINmp8P4%2B6QRxw3I0bBnV%2FRHGgHcnj3pEKTY1nmR3bdTklOvvrhhC6CKMIew7VRs5UkLy3PvdrkU0vlAFq665xgttwKYgqxBLMoK8Ne7V5GAMpd2abTzmxksHi1zjCX4%2FZ7tNVTjbK5On1t6%2FudVFVzg2mv2jdl2LCEVgo8QmWjtjn4FBHN%2FUF8TpZCXqqyRUdhybACn2hyMhcXYfgVa1wH47ldrwT8G1gA9eGrseCJ8BKmXvEso2gwRMN3Yqs8GOqUBxvuLskw40nL9eZ49Id2zZMtLloUuCrLnEX34rcADuW%2FawLxbLuS8xkVq0I%2Fd%2F3zMkaQcwXAJHxXl9RHIG3FJA0sdaj%2BYqhNpOzitS3%2FvGa%2FCooMc6n9fVboXP8DMlrKp6ivug5Y8aN79RWW6WOTjeo4VBuHT8Nz%2FKKZxAbVNreZL1jaXpWCsEEzOOWdVKqSR%2FGwMGZROhhYF6z5xf%2Fmld8oto3Ov&X-Amz-Signature=45d44862cd6f5c206e979290e53b6a09ee364696cb232cf422a6032b3d1a88e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
so lets go to ghidra and analyze both the functions so  
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/1a5c4e93-4e4e-466a-a4d9-2f33c73e90ed/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGF6E23%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDYbC9DGxfuuTSEh2kglSxt%2FsPW2FoaxvDLh9lrGgaIAiEAojrBpUJgS1HSxW9e2hUFAIVH9VljZzmMMw0vMUIXxasq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMMCy2On8tk3PisbCyrcA5ysbziTCBakGPyEa3t%2FKbkiYeDGGEEMlCWH3Vr%2FcKDCEsdWmhGN2lzFJf4wCZxtIG6u5KBPHiDYMrySeAfCoTLMmaXmjTm4TQZBd9b7rCGjb%2FZ%2BkYeH1GhHvUXqv5Ks%2BnvXj1ryURaxGUfvisjxBK8eQ9zOsBqbtvOHKepDW7naM%2FW2k1VHc%2BypVm%2FxtIHdw2gGv7tVoYgMmh6GxBowOxxv60l2wZ1OFn%2FqCOvI%2BBukX9f1xBXx%2B5RmjFlOmtz1cu5zgldmaFYXaxygfJc1lj2wNmA5R4OoYFoiCPYyRQkGdLGb%2BbpMGOXloqnsGfFBFR%2BYjwjlxztz%2BOUB1qIp7UPJJWe%2BjHlBmwIwA%2FVN8XBZMYWviiskNtpBePUlGQRL5hioNINmp8P4%2B6QRxw3I0bBnV%2FRHGgHcnj3pEKTY1nmR3bdTklOvvrhhC6CKMIew7VRs5UkLy3PvdrkU0vlAFq665xgttwKYgqxBLMoK8Ne7V5GAMpd2abTzmxksHi1zjCX4%2FZ7tNVTjbK5On1t6%2FudVFVzg2mv2jdl2LCEVgo8QmWjtjn4FBHN%2FUF8TpZCXqqyRUdhybACn2hyMhcXYfgVa1wH47ldrwT8G1gA9eGrseCJ8BKmXvEso2gwRMN3Yqs8GOqUBxvuLskw40nL9eZ49Id2zZMtLloUuCrLnEX34rcADuW%2FawLxbLuS8xkVq0I%2Fd%2F3zMkaQcwXAJHxXl9RHIG3FJA0sdaj%2BYqhNpOzitS3%2FvGa%2FCooMc6n9fVboXP8DMlrKp6ivug5Y8aN79RWW6WOTjeo4VBuHT8Nz%2FKKZxAbVNreZL1jaXpWCsEEzOOWdVKqSR%2FGwMGZROhhYF6z5xf%2Fmld8oto3Ov&X-Amz-Signature=fa7695dc30ecdbf636d186cb8298a915d592bf0d5e85c06503b01fa4aeb5bd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
### The Passcode Storage
The code allocates 6 bytes for __ptr and then assigns a hex value to it:
__ptr = 0x38363936;
In C, when you store a hexadecimal value into a memory address, it is stored in Little-Endian format (meaning the least significant byte comes first in memory).<br>2. Converting Hex to ASCII
To find the actual characters, we break the hex value 0x38363936 into individual bytes and look them up on the ASCII table:<br>Hex Byte	ASCII Character<br>0x36	6<br>0x39	9<br>0x36	6<br>0x38	8
<empty-block/>
so probably the challenge tried to mislead us saying its a 6 digit charecter so after we enter 6968 we get the flag
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/c85372f3-d8fd-4b1f-94fc-e229a80e9a1f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGF6E23%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDYbC9DGxfuuTSEh2kglSxt%2FsPW2FoaxvDLh9lrGgaIAiEAojrBpUJgS1HSxW9e2hUFAIVH9VljZzmMMw0vMUIXxasq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMMCy2On8tk3PisbCyrcA5ysbziTCBakGPyEa3t%2FKbkiYeDGGEEMlCWH3Vr%2FcKDCEsdWmhGN2lzFJf4wCZxtIG6u5KBPHiDYMrySeAfCoTLMmaXmjTm4TQZBd9b7rCGjb%2FZ%2BkYeH1GhHvUXqv5Ks%2BnvXj1ryURaxGUfvisjxBK8eQ9zOsBqbtvOHKepDW7naM%2FW2k1VHc%2BypVm%2FxtIHdw2gGv7tVoYgMmh6GxBowOxxv60l2wZ1OFn%2FqCOvI%2BBukX9f1xBXx%2B5RmjFlOmtz1cu5zgldmaFYXaxygfJc1lj2wNmA5R4OoYFoiCPYyRQkGdLGb%2BbpMGOXloqnsGfFBFR%2BYjwjlxztz%2BOUB1qIp7UPJJWe%2BjHlBmwIwA%2FVN8XBZMYWviiskNtpBePUlGQRL5hioNINmp8P4%2B6QRxw3I0bBnV%2FRHGgHcnj3pEKTY1nmR3bdTklOvvrhhC6CKMIew7VRs5UkLy3PvdrkU0vlAFq665xgttwKYgqxBLMoK8Ne7V5GAMpd2abTzmxksHi1zjCX4%2FZ7tNVTjbK5On1t6%2FudVFVzg2mv2jdl2LCEVgo8QmWjtjn4FBHN%2FUF8TpZCXqqyRUdhybACn2hyMhcXYfgVa1wH47ldrwT8G1gA9eGrseCJ8BKmXvEso2gwRMN3Yqs8GOqUBxvuLskw40nL9eZ49Id2zZMtLloUuCrLnEX34rcADuW%2FawLxbLuS8xkVq0I%2Fd%2F3zMkaQcwXAJHxXl9RHIG3FJA0sdaj%2BYqhNpOzitS3%2FvGa%2FCooMc6n9fVboXP8DMlrKp6ivug5Y8aN79RWW6WOTjeo4VBuHT8Nz%2FKKZxAbVNreZL1jaXpWCsEEzOOWdVKqSR%2FGwMGZROhhYF6z5xf%2Fmld8oto3Ov&X-Amz-Signature=e8cb0ac6e9ad74613a2d2f9ac02af9b6bd3116b7d3db9dad3f9cef285e4a32ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
also there decryptflag() function its work checking out so 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/6f13add4-7cec-46ee-a23a-7edb3e2c8640/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGF6E23%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDYbC9DGxfuuTSEh2kglSxt%2FsPW2FoaxvDLh9lrGgaIAiEAojrBpUJgS1HSxW9e2hUFAIVH9VljZzmMMw0vMUIXxasq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMMCy2On8tk3PisbCyrcA5ysbziTCBakGPyEa3t%2FKbkiYeDGGEEMlCWH3Vr%2FcKDCEsdWmhGN2lzFJf4wCZxtIG6u5KBPHiDYMrySeAfCoTLMmaXmjTm4TQZBd9b7rCGjb%2FZ%2BkYeH1GhHvUXqv5Ks%2BnvXj1ryURaxGUfvisjxBK8eQ9zOsBqbtvOHKepDW7naM%2FW2k1VHc%2BypVm%2FxtIHdw2gGv7tVoYgMmh6GxBowOxxv60l2wZ1OFn%2FqCOvI%2BBukX9f1xBXx%2B5RmjFlOmtz1cu5zgldmaFYXaxygfJc1lj2wNmA5R4OoYFoiCPYyRQkGdLGb%2BbpMGOXloqnsGfFBFR%2BYjwjlxztz%2BOUB1qIp7UPJJWe%2BjHlBmwIwA%2FVN8XBZMYWviiskNtpBePUlGQRL5hioNINmp8P4%2B6QRxw3I0bBnV%2FRHGgHcnj3pEKTY1nmR3bdTklOvvrhhC6CKMIew7VRs5UkLy3PvdrkU0vlAFq665xgttwKYgqxBLMoK8Ne7V5GAMpd2abTzmxksHi1zjCX4%2FZ7tNVTjbK5On1t6%2FudVFVzg2mv2jdl2LCEVgo8QmWjtjn4FBHN%2FUF8TpZCXqqyRUdhybACn2hyMhcXYfgVa1wH47ldrwT8G1gA9eGrseCJ8BKmXvEso2gwRMN3Yqs8GOqUBxvuLskw40nL9eZ49Id2zZMtLloUuCrLnEX34rcADuW%2FawLxbLuS8xkVq0I%2Fd%2F3zMkaQcwXAJHxXl9RHIG3FJA0sdaj%2BYqhNpOzitS3%2FvGa%2FCooMc6n9fVboXP8DMlrKp6ivug5Y8aN79RWW6WOTjeo4VBuHT8Nz%2FKKZxAbVNreZL1jaXpWCsEEzOOWdVKqSR%2FGwMGZROhhYF6z5xf%2Fmld8oto3Ov&X-Amz-Signature=82a7346f3f1948abdb085fd1d98e3ed7e29493384c871576fddf4c00d365ad70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
<table>
<tr>
<td>**Variable**</td>
<td>**Hex Value**</td>
<td>**Reversed (Little-Endian)**</td>
<td>**ASCII Translation**</td>
</tr>
<tr>
<td>**local_2c**</td>
<td>`0x41594150`</td>
<td>`50 41 59 41`</td>
<td>**PAYA**</td>
</tr>
<tr>
<td>**uStack_28**</td>
<td>`0x417b5554`</td>
<td>`54 55 7b 41`</td>
<td>**TU\{A**</td>
</tr>
<tr>
<td>**uStack_24**</td>
<td>`0x37534453`</td>
<td>`53 44 53 37`</td>
<td>**SDS7**</td>
</tr>
<tr>
<td>**uStack_20**</td>
<td>`0x4e335633`</td>
<td>`33 56 33 4e`</td>
<td>**3V3N**</td>
</tr>
</table>
he next part of the flag is stored character-by-character in `local_1c`. These do not need to be reversed:
- `local_1c[0..7]` = **S7R@NG3P**
### 3. The Final Chunk
Finally, `local_14` contains the trailing bytes:
- **local_14:** `0x7d504f`
- Reversed (Little-Endian): `4f 50 7d`
- ASCII Translation: **OP\}**
---
### The Resulting Flag
Concatenating all these parts together in the order they appear on the stack:
`PAYA` + `TU{A` + `SDS7` + `3V3N` + `S7R@NG3P` + `OP}`
**Final Flag:**
**`PAYATU{ASDS73V3NS7R@NG3POP}`**
###
<empty-block/>