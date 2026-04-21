# My first encryption
According to the challenge description
**I just learned about xor! Apparently it's super strong, surely it can protect my secret file!**
we get a jpeg file which is encrypted which we can tell by looking at the first few lines of the hex using the command` hexdump -C -n 128 flag.jpeg` since the description mentioned about xor our first approach
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/17a54ed7-2c77-4a40-a79b-e45c7c947816/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEXQ3MUP%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDhu2n3oY%2BUZUpi%2BxRcg96klWvvGndYRd1vbYK74wjACgIhANNwhrjBMUwECUKQyUaypcV72Lc7MTtw8OsQRn5dWhc1Kv8DCDsQABoMNjM3NDIzMTgzODA1Igw5Mz0qaC9CAuevdTMq3AMOhoHLqF7b0JjyRi2jSZY%2B24o%2FiVgfX4O1AnW8dD0lZALPmN9Uj%2FtiAXX64LpcXq1Zf0iDYfMLSzV40AOhZHxuhN7yUxRpHovnD4N2ealoux5RRdMkj0B%2BImJdRxcR1BGw%2FYz7wxnWWyZyyTd4eO74MtQLuHFFe3ulUE3HtdRakGHmRclJBBZ%2FJM4YGxwNM1YlPIS2b4sp55haJPhAYdKllsFyJT7M0TayqD9cpdemNhmpuXrOJdzMdQQaQR%2BeXsUfixSIPu5zjWpKL2gqlIR1027TdZHgEIroYtijmcg40FfWwYCxMSX6%2FgXJZ8YsTY7FHeYfS%2BXLq2X9t%2BclE1VUs9CMEYoiti4h0cEwMtvVWOklKuyhcbZxJQ5jgY5Oj5TeL0cr%2FATEpm4WBSbTnwFNX9VEhEf03rkm%2BXQLZK4GqW0g5e2wwQ8nxt2Vov30VAfQvRN5zfd%2FtM76XB%2F0bu%2FsZ3ClZBlMOz5T6KN5edCkGZ14M%2Bc4MnScR2%2FePNkSp%2FADFkN1tN1%2FmE9wNfCdtFNelJfq87qxgTtMgL6o5okKVhkofF5akWnwp5EFdKlv0h5I64dg%2FA7CPmtNf5gT4BE6jsusbCsVqGQ7j6YPwwzRbYKQ83ZSegKOzKQ%2BRzD5%2BJ7PBjqkASRk%2BsklyBsBNLblfz0o%2FV1A0TPlzkGLzMPcbwABAqrvpiHK2DWErAsdWvCZYZdxqOvlvp88T70g7dc%2FySHDGVBmxxctVidvuZ0t9vQaGLJN%2Bylbzk5vk%2F3Ibgrpqe9JyKQk0iZlBylvos2dGsBl1EMFGKzW3TQ8gOf9eyYk9Rjx5%2Bdt3Othgp2fDunPr4DTbLclam%2B4ZstX2YhYNwNxa6T2Rh1y&X-Amz-Signature=64ee820605ad28b977a1731d4c44abc4f1b4416595ba42c79b83babcd5f14a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
we could see that the file is clearly encrypted since it is different from standard hex structure of jpeg
<table>
<tr>
<td>**Byte Position**</td>
<td>**Flag.jpeg (Hex)**</td>
<td>**Standard JPEG (Hex)**</td>
</tr>
<tr>
<td>**Byte 0**</td>
<td>`cf`</td>
<td>`ff` (Start of Image)</td>
</tr>
<tr>
<td>**Byte 1**</td>
<td>`e8`</td>
<td>`d8` (Start of Image)</td>
</tr>
<tr>
<td>**Byte 2**</td>
<td>`cf`</td>
<td>`ff` (Component Marker)</td>
</tr>
<tr>
<td>**Byte 3**</td>
<td>`d0`</td>
<td>`e0` (JFIF Header)</td>
</tr>
</table>
we could repeatedly see that 30 is repeating many times which is a big red flag so lets trying xoring every number with 30 in binary (0011 0000) suprisingly we get the original hex bytes of  jpeg
we use [CyberChef](https://gchq.github.io/CyberChef/#recipe=XOR(%7B'option':'Hex','string':'30'%7D,'Standard',false)Render_Image('Raw')) and hex key as 30 we get the final output as 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/8b8ee079-8fdd-44bb-b1b7-2bcbde646052/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEXQ3MUP%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDhu2n3oY%2BUZUpi%2BxRcg96klWvvGndYRd1vbYK74wjACgIhANNwhrjBMUwECUKQyUaypcV72Lc7MTtw8OsQRn5dWhc1Kv8DCDsQABoMNjM3NDIzMTgzODA1Igw5Mz0qaC9CAuevdTMq3AMOhoHLqF7b0JjyRi2jSZY%2B24o%2FiVgfX4O1AnW8dD0lZALPmN9Uj%2FtiAXX64LpcXq1Zf0iDYfMLSzV40AOhZHxuhN7yUxRpHovnD4N2ealoux5RRdMkj0B%2BImJdRxcR1BGw%2FYz7wxnWWyZyyTd4eO74MtQLuHFFe3ulUE3HtdRakGHmRclJBBZ%2FJM4YGxwNM1YlPIS2b4sp55haJPhAYdKllsFyJT7M0TayqD9cpdemNhmpuXrOJdzMdQQaQR%2BeXsUfixSIPu5zjWpKL2gqlIR1027TdZHgEIroYtijmcg40FfWwYCxMSX6%2FgXJZ8YsTY7FHeYfS%2BXLq2X9t%2BclE1VUs9CMEYoiti4h0cEwMtvVWOklKuyhcbZxJQ5jgY5Oj5TeL0cr%2FATEpm4WBSbTnwFNX9VEhEf03rkm%2BXQLZK4GqW0g5e2wwQ8nxt2Vov30VAfQvRN5zfd%2FtM76XB%2F0bu%2FsZ3ClZBlMOz5T6KN5edCkGZ14M%2Bc4MnScR2%2FePNkSp%2FADFkN1tN1%2FmE9wNfCdtFNelJfq87qxgTtMgL6o5okKVhkofF5akWnwp5EFdKlv0h5I64dg%2FA7CPmtNf5gT4BE6jsusbCsVqGQ7j6YPwwzRbYKQ83ZSegKOzKQ%2BRzD5%2BJ7PBjqkASRk%2BsklyBsBNLblfz0o%2FV1A0TPlzkGLzMPcbwABAqrvpiHK2DWErAsdWvCZYZdxqOvlvp88T70g7dc%2FySHDGVBmxxctVidvuZ0t9vQaGLJN%2Bylbzk5vk%2F3Ibgrpqe9JyKQk0iZlBylvos2dGsBl1EMFGKzW3TQ8gOf9eyYk9Rjx5%2Bdt3Othgp2fDunPr4DTbLclam%2B4ZstX2YhYNwNxa6T2Rh1y&X-Amz-Signature=569d2ce4c8a3184bb0a00a3e1bb1d23db0a0b9a5702be740dd97446423a60b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)