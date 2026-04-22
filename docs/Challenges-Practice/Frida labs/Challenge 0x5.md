The app contains only a textview and a function similar to previous function 
but if you observe code we can see the function changes the ui of the app
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/86fbda22-e361-4108-8511-3103e38fe1e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M46WEVP%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T045052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIES5zE0GjlDziVRfPQ5x0VmhMsgvIEFezE1wwi50Q4Q1AiAuZUFLEyUYXXj51%2FKd3D3HdzgH4Tp9e2nOXqC%2BERLxfSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMMRah7KJcjjWHMvcHKtwDqgk8%2By%2BD12M3ka6OxYFCukgdx6GvlfTJtWdeLX7UxOK6zASR%2FyXJRThBEoHwVyYUATumMQYaO2ZtXXSxz2A%2FdnxgMBYg0DlkMeQ2hPN%2BorBgL3mknNkxBvXhpe8mloOIM11dhYoPKfq9aFZ08SqBlK3cKYcob2brRb3AEAq%2B6PgKU%2B2twfZhlVWgffMnoZ8mx%2BLNxxIjoJdJdln9wlvdG4%2BjLAlRQowHLrl1q2RosdpjtVY2%2BlG7pZaDuL%2Fc2IJ27bRo32pt%2BfDWnHQCrpojay%2F9vKh4GZUKO%2BtNbj32KEAU2ZA6Zwcp9KsW%2FWnoG5ok9rpOWbAW1fSeNmE%2Bu64h25cnkLri%2B9wVDaLh2tXOEe8M8HYplyayjlMNH6eEaJaxIzFUIck89xUOoOyJh71jJ0eBFH9DI98ghWLCG%2BLBj2ogHn7vDjc2s6pyicSzBfUr4eK9yKNkuMswSxqR2CuYDTfM7Nzi2eVOgh67dj3KjXBAVf0ZX9B3%2BWXug%2BC1UwdCZns98LNd2WYCV7tAqc98lynzIwVeeTEdOB1TH69KDHLpwZ1JwC%2B7pys9Taj4Y%2BcHGPbz7tQRxyDd1MQ77AQ7eu2cpqEySKNZgGdLNWQJLPS7742gRkBnTomg0oswgY6hzwY6pgFL39H4wlsH8vtTyTtcqOrk4xmKTS7dq47Vk7M3NFO1PaMCrj5LNRJZLN5GPlO0FpiduflVKt0lAxcRCCR94mdS6rrC2VxZao7tNQyJO8SAVJ2KwDzYdUB8WjvFUhPKjp8dJJ9XXDHWmeLtkxuikKHDvTlh4CECNVFehJF%2BfNqB0em9aj%2F21BwP9M0cNR03SmyWm0CEk8c4hE1HtlrnGPnJl3snoalO&X-Amz-Signature=db08d6dfcd2fe57e8f7a4e50f08bf9d96cd3be3668f93a8e340384e9c8760319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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