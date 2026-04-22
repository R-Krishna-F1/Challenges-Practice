Initially when we try to install the apk it is not signed we use apktool to sign the apk
After installing the apk in to genymotion we can find out the app is waiting for a password and if we load the apk into jadx we cant find much so we unzip the apk using apktool `apktool -d cryptovault_signed.apk `and we go to assests folder and we can find index.html and many other java script files since there is only 1 html file it should be the main and we explore it using vs code and find out the password to valut in the function unlockvalut()
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/1017f234-6388-4dad-8027-2fce242f002b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPQXMR4%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDOX3EENk1ZzBIyAoTiQTwXf8%2BTfMd53p08xZyPJNDlRwIgdkNBFpJ3bWEilhU4tyQTD9gvgO294fsVze5hcoLq4ogq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMaE%2F8hMdNPsx0vFKCrcA6Js%2FsEsNz3TSQ7vY9r4byLCmo0EcKJCXSIgBA9YcVRdg3zFgaQ1xxWZM%2FXcz704JT4nyh3fqYG4uuNpS%2FY6IedFycirD7ZkOoBL2CqBfa9toKTf8lq1sJGEO821s76t%2Bp9l2dmf%2BuBxklb8%2F0A1EzMbf6kS4x1bE0bUHwojEPXzuqE9%2BWHSYV80zvaYl06KUfss1Hvjd2tErdDjXXk1IBlQh9V3nq%2BnnEhvPfg%2F05xR9pe89dT8EIlLtTX0NHr8BfsfNBb%2Fqa%2Fq1eVIOBQeCbk%2FNjj6yfEX6b%2BE58Z0%2FW5TaRY%2FnG2F5CYC0JdsZDzWcwRIWn7jLAiTDsPwKjhVCrF6nFpnSmPIPKixsHEr%2FaeNbkIa54uyzUEAbI4SDfY1XBXGdHcoKgDrRkwQCc3Ip8FwpC2LG1jUqEiPt%2F2oyGjFQIJQVIsv9HRzYxpBzQulnz1yAUpubg6gY0NwPBLs7Xtyw%2BzPtGfDslo1xj6MYFFqNjnbHITfbFRWDTpNx%2BqKXkP5EPWctSbetmmi7P5igypUa%2FOL7%2BYwv2QTaxOrxpUVxJinCwYHeeKjO%2FmgHDOSUwW0oW%2FchKWGLNIMA3hIpeSXeqFRNszOPy92Ry1IdEqkWSbM82e2RkBHLAKDMJSBoc8GOqUBeBO8fJ86Zj0%2BR9neu8EUznhANdQFYIR2bS99c9vY0HMtid7MSvYdiIAzg%2FVTLSitX3R7vrNxs7i3SpmMpZMdZhc9LQJDZdfq0sqA0sDI%2Flqy%2FkiXmZC3eorG4BurAch5GK1V4f6Xs8bwjmkX5dBwh28MFcJ27xqflwv5uxyPXlv%2BYPMIbH9Yg2eBykw2DSnWoVuG%2BXaGjLaBgPFMHsM9LhYv%2BBtl&X-Amz-Signature=d45f90e5dcf046724b3ce57001d50472728b0bb6fc4df6fa5f079ef4f0c56ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
then we get a hexadecimal string of digits
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/20e735b7-1958-4290-9235-8ff173c354b4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPQXMR4%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDOX3EENk1ZzBIyAoTiQTwXf8%2BTfMd53p08xZyPJNDlRwIgdkNBFpJ3bWEilhU4tyQTD9gvgO294fsVze5hcoLq4ogq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMaE%2F8hMdNPsx0vFKCrcA6Js%2FsEsNz3TSQ7vY9r4byLCmo0EcKJCXSIgBA9YcVRdg3zFgaQ1xxWZM%2FXcz704JT4nyh3fqYG4uuNpS%2FY6IedFycirD7ZkOoBL2CqBfa9toKTf8lq1sJGEO821s76t%2Bp9l2dmf%2BuBxklb8%2F0A1EzMbf6kS4x1bE0bUHwojEPXzuqE9%2BWHSYV80zvaYl06KUfss1Hvjd2tErdDjXXk1IBlQh9V3nq%2BnnEhvPfg%2F05xR9pe89dT8EIlLtTX0NHr8BfsfNBb%2Fqa%2Fq1eVIOBQeCbk%2FNjj6yfEX6b%2BE58Z0%2FW5TaRY%2FnG2F5CYC0JdsZDzWcwRIWn7jLAiTDsPwKjhVCrF6nFpnSmPIPKixsHEr%2FaeNbkIa54uyzUEAbI4SDfY1XBXGdHcoKgDrRkwQCc3Ip8FwpC2LG1jUqEiPt%2F2oyGjFQIJQVIsv9HRzYxpBzQulnz1yAUpubg6gY0NwPBLs7Xtyw%2BzPtGfDslo1xj6MYFFqNjnbHITfbFRWDTpNx%2BqKXkP5EPWctSbetmmi7P5igypUa%2FOL7%2BYwv2QTaxOrxpUVxJinCwYHeeKjO%2FmgHDOSUwW0oW%2FchKWGLNIMA3hIpeSXeqFRNszOPy92Ry1IdEqkWSbM82e2RkBHLAKDMJSBoc8GOqUBeBO8fJ86Zj0%2BR9neu8EUznhANdQFYIR2bS99c9vY0HMtid7MSvYdiIAzg%2FVTLSitX3R7vrNxs7i3SpmMpZMdZhc9LQJDZdfq0sqA0sDI%2Flqy%2FkiXmZC3eorG4BurAch5GK1V4f6Xs8bwjmkX5dBwh28MFcJ27xqflwv5uxyPXlv%2BYPMIbH9Yg2eBykw2DSnWoVuG%2BXaGjLaBgPFMHsM9LhYv%2BBtl&X-Amz-Signature=ecf31748c8dda58225be39c267bc2e776d6d8b14db4524d3f0b51d5e29e2808d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
we copy it and use cyberchef but it doesnt give a proper result so then we go to code again and we can find a function retrieve encrypted key and it called keygen() finction which is located in keygen.js so if we open it the code is obfuscated like below
```javascript
(function(_0x506dbf,_0x170411){const _0x12e004=a0_0x1707,_0x3fbe25=_0x506dbf();while(!![]){try{const _0x3b5636=parseInt(_0x12e004(0x122))/0x1*(parseInt(_0x12e004(0x117))/0x2)+-parseInt(_0x12e004(0x111))/0x3*(-parseInt(_0x12e004(0x121))/0x4)+-parseInt(_0x12e004(0x11b))/0x5*(parseInt(_0x12e004(0x11f))/0x6)+parseInt(_0x12e004(0x113))/0x7*(-parseInt(_0x12e004(0x11d))/0x8)+parseInt(_0x12e004(0x125))/0x9*(parseInt(_0x12e004(0x11e))/0xa)+-parseInt(_0x12e004(0x123))/0xb+parseInt(_0x12e004(0x120))/0xc*(parseInt(_0x12e004(0x112))/0xd);if(_0x3b5636===_0x170411)break;else _0x3fbe25['push'](_0x3fbe25['shift']());}catch(_0x18c02d){_0x3fbe25['push'](_0x3fbe25['shift']());}}}(a0_0x32dd,0x4ff3a));function a0_0x32dd(){const _0xb65be8=['9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5','length','map','38495LKnOYO','substr','8lZAZpw','6486450oYKfNK','402RerQLO','12MNesgS','4FulGyI','528939ZPevpd','861608xHrljL','split','9gQnkOh','toString','242571ENkSLa','502515FcoXSF','2628171KytvIJ','push','slice','join','2HiwuOL'];a0_0x32dd=function(){return _0xb65be8;};return a0_0x32dd();}function affineEncrypt(_0x1930bc,_0x36e79b,_0x33477e){return(_0x36e79b*_0x1930bc+_0x33477e)%0x100;}function xor(_0x3a38fa,_0x3c3309){return _0x3a38fa^_0x3c3309;}function a0_0x1707(_0x3d4d4c,_0x35b685){const _0x32dd9d=a0_0x32dd();return a0_0x1707=function(_0x170770,_0x4c15fe){_0x170770=_0x170770-0x110;let _0x3e6dad=_0x32dd9d[_0x170770];return _0x3e6dad;},a0_0x1707(_0x3d4d4c,_0x35b685);}function hexToBytes(_0x1d9eb0){const _0x3e7222=a0_0x1707;let _0x2ac99a=[];for(let _0x2363dc=0x0;_0x2363dc<_0x1d9eb0[_0x3e7222(0x119)];_0x2363dc+=0x2){_0x2ac99a[_0x3e7222(0x114)](parseInt(_0x1d9eb0[_0x3e7222(0x11c)](_0x2363dc,0x2),0x10));}return _0x2ac99a;}function reverseString(_0x22dcba){const _0x102ddd=a0_0x1707;return _0x22dcba[_0x102ddd(0x124)]('')['reverse']()[_0x102ddd(0x116)]('');}function keygen(){const _0x588caa=a0_0x1707;let _0x620410=_0x588caa(0x118),_0x19eb60=[_0x620410[_0x588caa(0x115)](0x0,0xe),_0x620410[_0x588caa(0x115)](0xe,0x1c),_0x620410[_0x588caa(0x115)](0x1c,0x2a),_0x620410[_0x588caa(0x115)](0x2a,0x38),_0x620410['slice'](0x38,0x46),_0x620410[_0x588caa(0x115)](0x46,0x54)],_0x4c2f5e=[_0x19eb60[0x3],_0x19eb60[0x5],_0x19eb60[0x1],_0x19eb60[0x4],_0x19eb60[0x2],_0x19eb60[0x0]],_0x22e526=reverseString(_0x4c2f5e['join']('')),_0x2051e9=hexToBytes(_0x22e526),_0x3788f1=0x9,_0x2afabe=0x7,_0x56285d=0x33,_0x351569=_0x2051e9['map'](_0x585a6f=>xor(affineEncrypt(_0x585a6f,_0x3788f1,_0x2afabe),_0x56285d));return _0x351569[_0x588caa(0x11a)](_0x5ca89b=>('0'+_0x5ca89b[_0x588caa(0x110)](0x10))[_0x588caa(0x115)](-0x2))[_0x588caa(0x116)]('');}
```
so we use deobfuscator and the code looks like below 
```javascript
function affineEncrypt(_0x1930bc, _0x36e79b, _0x33477e) {
  return (_0x36e79b * _0x1930bc + _0x33477e) % 0x100;
}
function xor(_0x3a38fa, _0x3c3309) {
  return _0x3a38fa ^ _0x3c3309;
}
function hexToBytes(_0x1d9eb0) {
  let _0x2ac99a = [];
  for (let _0x2363dc = 0x0; _0x2363dc < _0x1d9eb0.length; _0x2363dc += 0x2) {
    _0x2ac99a.push(parseInt(_0x1d9eb0.substr(_0x2363dc, 0x2), 0x10));
  }
  return _0x2ac99a;
}
function reverseString(_0x22dcba) {
  return _0x22dcba.split('').reverse().join('');
}
function keygen() {
  let _0x19eb60 = ["9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0x0, 0xe), "9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0xe, 0x1c), "9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0x1c, 0x2a), "9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0x2a, 0x38), "9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0x38, 0x46), "9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5".slice(0x46, 0x54)];
  let _0x4c2f5e = [_0x19eb60[0x3], _0x19eb60[0x5], _0x19eb60[0x1], _0x19eb60[0x4], _0x19eb60[0x2], _0x19eb60[0x0]];
  let _0x22e526 = _0x4c2f5e.join('').split('').reverse().join('');
  let _0x2051e9 = hexToBytes(_0x22e526);
  let _0x351569 = _0x2051e9.map(_0x585a6f => (0x9 * _0x585a6f + 0x7) % 0x100 ^ 0x33);
  return _0x351569.map(_0x5ca89b => ('0' + _0x5ca89b.toString(0x10)).slice(-0x2)).join('');
}
```
so we found out this is the function which generates the hexadecimal string so we reverse the exact same process and we are going to use python 
```python
import string

def mod_inv(a, m):
    t, new_t, r, new_r = 0, 1, m, a
    while new_r:
        q = r // new_r
        t, new_t = new_t, t - q * new_t
        r, new_r = new_r, r - q * new_r
    if r > 1: raise ValueError(f"{a} has no inverse mod {m}")
    return t + m if t < 0 else t

hex_str = '9425749445e494332757363353f5d6f50353b79445d7336343270373270366f586365753f546c60336f5'
key = [(mod_inv(9, 0x100) * (byte - 7)) % 0x100 ^ 0x33 for byte in [int(''.join([hex_str[i:i+14] for i in range(0, len(hex_str), 14)][i] for i in [3, 5, 1, 4, 2, 0])[::-1][i:i+2], 16) for i in range(0, len(''.join([hex_str[i:i+14] for i in range(0, len(hex_str), 14)][i] for i in [3, 5, 1, 4, 2, 0])[::-1]), 2)]]

result = ""
for i in range(42):
    for c in string.printable:
        if (mod_inv(9, 0x100) * (ord(c) - 7) % 0x100 ^ 0x33) == key[i]:
            result += c
            break
print(f"Flag: {result}")
```
and the result is INTIGRITI\{50_much_f0r_53cur3_c0ld_570r463\}
<empty-block/>