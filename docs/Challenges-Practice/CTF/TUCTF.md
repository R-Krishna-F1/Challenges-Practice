# My first encryption
According to the challenge description
**I just learned about xor! Apparently it's super strong, surely it can protect my secret file!**
we get a jpeg file which is encrypted which we can tell by looking at the first few lines of the hex using the command` hexdump -C -n 128 flag.jpeg` since the description mentioned about xor our first approach
![](images/TUCTF-img-0.png)
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
![](images/TUCTF-img-1.jpeg)