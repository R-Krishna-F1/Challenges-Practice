The goal of this challenge is to crash the app and know the reason why it crashes 
to crash the app we have to enter a long string 
the reason can be found when we search in the logs and i found its buffer over flow 
adb logcat \| grep -i “diva
where the code can be only 40 bytes
<empty-block/>
### Ghidra
```c

bool Java_jakhar_aseem_diva_DivaJni_initiateLaunchSequence
               (long *param_1,undefined8 param_2,undefined8 param_3)

{
  char cVar1;
  char cVar2;
  char *pcVar3;
  long lVar4;
  char *pcVar5;
  bool bVar6;
  byte bVar7;
  char local_28 [40];
  
  bVar7 = 0;
  pcVar3 = (char *)(**(code **)(*param_1 + 0x548))(param_1,param_3,0);
  strcpy(local_28,pcVar3);
  bVar6 = local_28[0] == '!';
  if (bVar6) {
    local_28[0] = '.';
  }
  lVar4 = 7;
  pcVar3 = ".dotdot";
  pcVar5 = local_28;
  do {
    if (lVar4 == 0) {
      return bVar6;
    }
    lVar4 = lVar4 + -1;
    cVar2 = *pcVar5;
    cVar1 = *pcVar3;
    bVar6 = true;
    pcVar3 = pcVar3 + (ulong)bVar7 * -2 + 1;
    pcVar5 = pcVar5 + (ulong)bVar7 * -2 + 1;
  } while (cVar1 == cVar2);
  return false;
}
```
the users input is getting stored is pcVar3 and then copied to local_28 and we are then setting the boolean value of bVar6 as true when the local_28\[0\] starts with ! and then we initialize pcVar3 as .dotdot and pcVar5 as local_28 and lVar4 = 7 and and if lVar4 becomes zero it returns and bvar6 which could be true or false if its true we will launch the activity t-10 sec log message 
<empty-block/>
since the array size is 40 if we enter a string greater than 40 we will get an error exception array bound out of string 
<empty-block/>