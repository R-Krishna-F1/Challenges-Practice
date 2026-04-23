The app contains only a textview and a function similar to previous function 
but if you observe code we can see the function changes the ui of the app
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/86fbda22-e361-4108-8511-3103e38fe1e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73CSTXL%2F20260423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260423T045551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3X8zCsebAv%2BfHpMXc1JFuWgb%2BGfrIvCXgRYNKe0RQ4QIhAJPntHlPo2FLb9M7A0M5Ck2xuLiarfNKxgPM3cyUXICdKv8DCFwQABoMNjM3NDIzMTgzODA1IgwojFheLNDBGz0WLqoq3AOMoZcbq7Q0W0G4dBCNTdXCRGXJ44PC7t74gRYjL3sDK8J4ZrA8Ypu58gukb5YVNmfrWfVQcOrFKgWVDcjeBsiWnjDY%2FBEJOGifCtWbVFVoVGLPhboviDVNnK7Hsij4UaONzt98HmdxvsMqlvwgOffsg4ekQnwDiKnqyED7AGmLKh99J68kEf8oHOrYNisIjJrGNb1cxOYDg7bsXXY3WgCeSmtuqJt4WQaDege0m1ftBzW7vl1zXudG6vudL7v4REivrKoREgTiYicStkFets7IIcPjSF44Ix5ooRpamrTzViIeOo1MgoBpy%2FvbRQpnEs6s7KLtQ3QTnk4LoY05YbwPmsaEGUqeRCx7X6sG8utW9cX6ZAPWeslWQTE%2FB8uNc4sjZGCrP953mFBRYtZcQMfK7yBt048FxM2abkCd%2FChRQRaW%2Fqbhhkl74GhlyKIUBa79h%2FscF33WXTZrXR%2BWT3Tx7QNCDrIodxvErJAUeR2xLHpzND5Z2m3AMO61W9yLiYo6IatxErRb9D29E7I9KEMEOjrLOmNFxXJhDL3rabPITlqMbq%2FZrTUB4UKMN4vVMDhg4b5uU4viqm4os1NEufghJtXvdoOSxAnJqqRiKJht2GDvynqDPu4qXvbJIjCJnqbPBjqkAYzcwTRfSMmdBDmN5xm5Gp1o01mNonkuuM4D%2F7ltlPE1PyKWHikUBaw77o6ea5N5o5bDal%2FChoGlB3F9QzjRqI9ffMzw5G%2Bol%2FwWCMN9EM%2BmzTIhN20tljk8Vm66jm%2BJEoHyesp8HiXfcC3aACmbVDKhrZtqywIgiNBY7qRr7X82%2BevJooMVE9R2hOfjolxX6zQmAX%2FvToZWat35Vs2FQY%2BAY%2BVL&X-Amz-Signature=1161f46826501ac4c07503235174319f433d9b1ee6414efbf4855228627a7061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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