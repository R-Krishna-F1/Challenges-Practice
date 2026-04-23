# My first encryption
According to the challenge description
**I just learned about xor! Apparently it's super strong, surely it can protect my secret file!**
we get a jpeg file which is encrypted which we can tell by looking at the first few lines of the hex using the command` hexdump -C -n 128 flag.jpeg` since the description mentioned about xor our first approach
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/17a54ed7-2c77-4a40-a79b-e45c7c947816/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVX73TZ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrNoiFF0ad3vzrVZVKkXJEhbIjfSTwKinZ75ZpJrG8cQIgTYFUfTsetbHDC%2FNGyqEwjJ3zQEui6YYEcRJ198YXOjgq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAap3jxAStOcKAPEnircA2jIdsxNwZyGKBFt0s5tDY%2BoTDVcmeaJzVX6UamVyySUGWLwHsHihbSjB7naxfHrjnFWmwyYUGiwDDixy%2B1TyyT4Dl%2BATOnDeSo8PGVNZ6DavygbMejBNuOIMtum1VJ2rg1BC9WPRYIqrkrlZ6ZS9zyZP3%2BVqYtpihz9HYC%2B7CApweoenErg3Wx8mx6Uu12fBKloyOBUmYRTxPsG%2FT7WXTLOaQIjpTShVkARztC3TckVu15N%2FHr59jggKIG%2BcOQwm9OBWB4RrnZvDZCORc%2FHZrcFP1EoiSml2RsIwbniw3qnBasDR2o6EjL8hUxxxm7PdCW4tdJPdseEzifXyOND10k4BZH2Cm11UiPCEZU3iWoKwJoqNgvXNRDtAzO4y9cm6DngJ4qSHjwDtRDnqBCj9pXw8Ng5LCDcINCUDKyrveWBL5iOLiGfhya17aoHgklKrWLp9C1zBjeHrLjqjX9tBT5vWaQ4Y1ZeKbqN7ACxx%2BQ1mnvQYu85AxAIN6c%2BoZO2DexEynZnUpS%2BkRWEip%2FMnBlmCUQINfWU7rhzZC%2B%2BifBBVm3kcp3MafJqu%2FdTdwl2cMkSigDENa%2BQkQp85MiRCdd0dqLT1W0Zp%2FvC%2BZduOhL7NvAIhqPc5%2FWY%2B1tiMNnBps8GOqUBREvQVGMEFJ94quZOMd09UAnIf7cxTTqYe1V3WGeV6OjXOTFpoOi5rPPjTN73%2BqAMncRG6UDhYbaItuEC26417el3jrRD6L%2FMl385z9J%2FMgLnkCapurP7l6qrwRkyjFyrUndMx%2BAAZ7vlEhNR7NkSGpFKIdFspSIU9Ztb9%2BwfTDJKPjviehg8NZK1MUJflnkP1ftXookPnge5YXL3xa0MpTkBvYLe&X-Amz-Signature=1ecc97aa52e09e4cc146179bae917442c4eeb171ace478f15c428d2c59543141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/8b8ee079-8fdd-44bb-b1b7-2bcbde646052/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVX73TZ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrNoiFF0ad3vzrVZVKkXJEhbIjfSTwKinZ75ZpJrG8cQIgTYFUfTsetbHDC%2FNGyqEwjJ3zQEui6YYEcRJ198YXOjgq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAap3jxAStOcKAPEnircA2jIdsxNwZyGKBFt0s5tDY%2BoTDVcmeaJzVX6UamVyySUGWLwHsHihbSjB7naxfHrjnFWmwyYUGiwDDixy%2B1TyyT4Dl%2BATOnDeSo8PGVNZ6DavygbMejBNuOIMtum1VJ2rg1BC9WPRYIqrkrlZ6ZS9zyZP3%2BVqYtpihz9HYC%2B7CApweoenErg3Wx8mx6Uu12fBKloyOBUmYRTxPsG%2FT7WXTLOaQIjpTShVkARztC3TckVu15N%2FHr59jggKIG%2BcOQwm9OBWB4RrnZvDZCORc%2FHZrcFP1EoiSml2RsIwbniw3qnBasDR2o6EjL8hUxxxm7PdCW4tdJPdseEzifXyOND10k4BZH2Cm11UiPCEZU3iWoKwJoqNgvXNRDtAzO4y9cm6DngJ4qSHjwDtRDnqBCj9pXw8Ng5LCDcINCUDKyrveWBL5iOLiGfhya17aoHgklKrWLp9C1zBjeHrLjqjX9tBT5vWaQ4Y1ZeKbqN7ACxx%2BQ1mnvQYu85AxAIN6c%2BoZO2DexEynZnUpS%2BkRWEip%2FMnBlmCUQINfWU7rhzZC%2B%2BifBBVm3kcp3MafJqu%2FdTdwl2cMkSigDENa%2BQkQp85MiRCdd0dqLT1W0Zp%2FvC%2BZduOhL7NvAIhqPc5%2FWY%2B1tiMNnBps8GOqUBREvQVGMEFJ94quZOMd09UAnIf7cxTTqYe1V3WGeV6OjXOTFpoOi5rPPjTN73%2BqAMncRG6UDhYbaItuEC26417el3jrRD6L%2FMl385z9J%2FMgLnkCapurP7l6qrwRkyjFyrUndMx%2BAAZ7vlEhNR7NkSGpFKIdFspSIU9Ztb9%2BwfTDJKPjviehg8NZK1MUJflnkP1ftXookPnge5YXL3xa0MpTkBvYLe&X-Amz-Signature=6a8196fc9922d2f3be318668c37e7b998eaa096969d089ba7a77078f5bde71be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)