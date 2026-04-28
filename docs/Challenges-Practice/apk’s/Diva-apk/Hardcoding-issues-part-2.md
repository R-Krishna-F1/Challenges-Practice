By understanding the source code from jadx we can get to know that the string is being compared with strings in java native library 
Using **JNI**, our Java code can call functions from **C/C++ libraries** (compiled as `.so` files), allowing the app to perform computationally heavy tasks much faster for a smoother run.
since c++ is faster than java
cd /data/data/jahkeer.aseem.diva/lib/

then use strings libdivajni.so \| less to get the strings and one of them is the password
and checked for password entering every string and finally confrmed that the password is olsdfgad;lh


### Ghidra
```c
undefined1
Java_jakhar_aseem_diva_DivaJni_access(long *param_1,undefined8 param_2,undefined8 param_3)
{
char cVar1;
char cVar2;
char *pcVar3;
long lVar4;
char *pcVar5;
undefined1 uVar6;
byte bVar7;`

bVar7 = 0;
uVar6 = 1;
pcVar3 = (char *)(**(code **)(*param_1 + 0x548))(param_1,param_3);
lVar4 = 0xb;
pcVar5 = "olsdfgad;lh";
do {
if (lVar4 == 0) {
return uVar6;
}
lVar4 = lVar4 + -1;
cVar2 = *pcVar3;
cVar1 = *pcVar5;
uVar6 = 1;
pcVar5 = pcVar5 + (ulong)bVar7 * -2 + 1;
pcVar3 = pcVar3 + (ulong)bVar7 * -2 + 1;
} while (cVar1 == cVar2);
return 0;
}
```

we will set the user inputs text as pcVar3 and lVar4 as 11 (in hex 0xb)  and if lVar4 becomes 0 we return a boolean value uVar6  so the lvar4 becomes 0 slowly after executing each loop

where cVar1 as pcVar5 which is the password it is comapring to cVar2 which is pcvar3 which is users input and we are comparing  for 11 times and make the lvar4 as 0
