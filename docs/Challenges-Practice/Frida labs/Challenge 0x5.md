The app contains only a textview and a function similar to previous function 
but if you observe code we can see the function changes the ui of the app
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/86fbda22-e361-4108-8511-3103e38fe1e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICUOMXS%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCejBxqTT2FBtAH5xmRFIxmsvqoPbM%2BamvhghMQsZoPFQIgP%2BU0ok8RL1w2MVk2m0MgbmJI7mWvDE0ZwWcawkBjSpUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLlVW8vnzEdbSfkXAircAypYKjsiAPTMSqEo6Olog2q4VvDuFj%2FlZPpVZbmDmpynmHqM5VggqjmRqoC35s8e6SZGSZ018Hu0s4K%2BbA7m2FybT3OSwz7rDXaUhzrG4TaR%2B9CnQGFfNEOeeafMDQBV%2FgqJG3mc4suTFYMKr1fSSNqcwf8g5hMreiqjok21PusKzymmQEu9yrVhb3ks8nrWR1laNuS1inAOxZeIjfnD50VvKOEfCWkveEb8p%2FPd8FJcwmwHR%2FvKOjvfs%2FKgZMq3ZGxcVUvDFAiAs0SH4f%2FXtrHtE50hZKRQATW8ssB9iK%2F9twXrsAzYmptq%2BtmweernGAyjSJMksfR0CZewoEC3VNThnekFwWBDF%2FDOiDqXgVhtWxE1%2B2By7lEMK5C5E%2B9vaDpe0DzVfXWVMed07KYrhbIS8rrxxVtg%2Bou95jywgnoZtU0pCTVdub%2FPxKYrhUsFSmE1sRQYgMtkEIU38Nuz5y%2F69cNQ440ZRsb0%2BSYDO7vl1cwJCegc0kE39436qWNdUSpCkdcoOCXzKhJF%2FbacwSdNRzMnZ4cl0zNvEhydLErrKMR69nCFcV8UEMWqMBJwWTl04dZ1c0b%2FePDavPseZ2tAzPT3XW2%2BDUnKq4LygsL0uZ%2Fs7k4Iu8MAkAL7MKD4ns8GOqUBhV%2BnQm0%2B%2FUJH8MHebUdd9V%2FdQp8dXmkfrEokWXR7NAKQu%2FhV3x7Q7oZk2jXYA%2Fo6lvnMR2z7wHq%2BLtHPuvLv36Rfn3SwUOb2rBLNpMbVTtL0Ptj53Pe6F9vRlDfI%2BsZCYaN17XBjH4ttbDV0KIOcvJZW%2BcEJ8AQ8fcGs%2BW1jEZZkhddnOUZ1AWlS1vnd9kk8gRiA1shegArH7SiEAMsLzYFQSsOt&X-Amz-Signature=9a2873ffbb118f1dd6a425044c48c2810b766fe1a23c7779072af8b61a1a5e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
ui updates on based on threads and android has a main thread which is also called looper() which runs the functions and updates users screen executing functions in a order this is closely related to android life cycles
using basic frida like we did to previous challenges we just did mathematics and logic reasoning but not updating the screen because 
in order to implement these kind of functions we have link with main thread so the process will be
1. Run the oncreate method and set the text view
2. since there is no button to call the function we have to call it manually using frida using the instance which is already created and set the flag 
```javascript
Java.performNow(function() {
  Java.choose('com.ad2001.frida0x5.MainActivity', {
      onMatch: function(instance) { 
        console.log("Instance found");
        instance.flag(1337); 
    },
    onComplete: function() {}
  });
});
```
`Java.performNow()` attaches the current thread to the Java VM, ensuring Java operations can execute safely.
We use `Java.choose()` and specify the target **class name** (like `com.example.MainActivity`). Frida scans the **target app's Java heap memory** for live instances of that class.
`onMatch` is the callback function of `Java.choose()`. It receives each **live instance** as a parameter and gives us access to the real objects currently running in the app.
We can then modify those live objects using our Frida script.
so then we get the flag