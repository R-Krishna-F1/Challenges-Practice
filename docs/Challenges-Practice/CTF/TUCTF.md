# My first encryption
According to the challenge description
**I just learned about xor! Apparently it's super strong, surely it can protect my secret file!**
we get a jpeg file which is encrypted which we can tell by looking at the first few lines of the hex using the command` hexdump -C -n 128 flag.jpeg` since the description mentioned about xor our first approach
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/17a54ed7-2c77-4a40-a79b-e45c7c947816/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDV3CUX%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDx8EwCThIkzjO3%2Fx3HFFozW2dODfACfGDAALWx68Fp8AiA%2FPcHyT9YSUV0m3MAs5tOYjl%2BylEcUTt6R%2FSa1EUw13Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMs2MRRjw%2Baw8%2FcP1VKtwD3Und7N6VrDsyAFDWSBMVlAFdIyayJK1UMu7trydNgUYG8lSCgdhOjGzwKEt1QpOkLSQkeeGUfO0HlWQC2o3pbEqIm1tAF252UkiHgobgVuyA%2BQaX8w%2Fb42xCeb9UdHeTyfUzwL1nZDBJ4tLT60yhib5szJQZa%2FxD%2BrrQNrPm1V6BMJMH2RQDP36uOPTbzy3HdrdER0NnptqlqM2sm1IbvdrMEblLb1drmPkG7Hr2sJimqQ7dcLBJ3FWWba%2FLL9jxtokfdlYN9UpXQmLSBVx6mGRzoGDliTQZBIBnqb5j66qOD6ddIoBHaMaC0JpPk437h2GJTog5T9PDy8MFBgE5MBUFsl6yMTp7Zlu3s3euGCIADCg5scjUmndwvBSdzHlvGnBdCQuvq3elP6BkEvhqmcG0Y%2FiAJLIqskm7jpgv3Ghw%2FG408OtE1klICb922vN6ByOnz1UfFqoyOsPUrSH%2FM4fMXjCDBYgktJ%2FOj%2FzENx5sZExZunO92se68L0bfvoUtdneGDZTAkzJ6eCV0HuFYgfRaTNIdRqdW%2B40PxhvK6nYcxAN4xNRkLU3qhIL0WiF9DSxtyeznkgHolwzRqocsi3ilow%2F2YJSUgeZtXe8Sq%2BzgcrIMf86XCHihm0wloyhzwY6pgH20xC6RY3eok68CYihtdc7hrVpAfHu4demrRtpQ2N8g8NLtDlMzghi84jV%2BIAO%2F1Zt7B2dv5uILXXxGCRTYB54R8f3xVsv5XcEIM7whAonIjYeFG3IyJLiTrNj2PYDvoN45JWt46ppaCpttNc4MeUDvF7FBG%2BKrsRDhu8Otv%2FNXRuZhZXyxvls6p2bLI5F3FDdMV2OmII9VdCVcNCFSR2O15h9%2Fq9y&X-Amz-Signature=bafee18efcd218aae23c348a55a2fe47e545b242e44c4ba4c385a58e170187d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/8b8ee079-8fdd-44bb-b1b7-2bcbde646052/Untitled.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GDV3CUX%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDx8EwCThIkzjO3%2Fx3HFFozW2dODfACfGDAALWx68Fp8AiA%2FPcHyT9YSUV0m3MAs5tOYjl%2BylEcUTt6R%2FSa1EUw13Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMs2MRRjw%2Baw8%2FcP1VKtwD3Und7N6VrDsyAFDWSBMVlAFdIyayJK1UMu7trydNgUYG8lSCgdhOjGzwKEt1QpOkLSQkeeGUfO0HlWQC2o3pbEqIm1tAF252UkiHgobgVuyA%2BQaX8w%2Fb42xCeb9UdHeTyfUzwL1nZDBJ4tLT60yhib5szJQZa%2FxD%2BrrQNrPm1V6BMJMH2RQDP36uOPTbzy3HdrdER0NnptqlqM2sm1IbvdrMEblLb1drmPkG7Hr2sJimqQ7dcLBJ3FWWba%2FLL9jxtokfdlYN9UpXQmLSBVx6mGRzoGDliTQZBIBnqb5j66qOD6ddIoBHaMaC0JpPk437h2GJTog5T9PDy8MFBgE5MBUFsl6yMTp7Zlu3s3euGCIADCg5scjUmndwvBSdzHlvGnBdCQuvq3elP6BkEvhqmcG0Y%2FiAJLIqskm7jpgv3Ghw%2FG408OtE1klICb922vN6ByOnz1UfFqoyOsPUrSH%2FM4fMXjCDBYgktJ%2FOj%2FzENx5sZExZunO92se68L0bfvoUtdneGDZTAkzJ6eCV0HuFYgfRaTNIdRqdW%2B40PxhvK6nYcxAN4xNRkLU3qhIL0WiF9DSxtyeznkgHolwzRqocsi3ilow%2F2YJSUgeZtXe8Sq%2BzgcrIMf86XCHihm0wloyhzwY6pgH20xC6RY3eok68CYihtdc7hrVpAfHu4demrRtpQ2N8g8NLtDlMzghi84jV%2BIAO%2F1Zt7B2dv5uILXXxGCRTYB54R8f3xVsv5XcEIM7whAonIjYeFG3IyJLiTrNj2PYDvoN45JWt46ppaCpttNc4MeUDvF7FBG%2BKrsRDhu8Otv%2FNXRuZhZXyxvls6p2bLI5F3FDdMV2OmII9VdCVcNCFSR2O15h9%2Fq9y&X-Amz-Signature=306b1b14dae362e10f6335ebadd4deb4c79f4bf7a074a4b25697d4b6854de58d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)