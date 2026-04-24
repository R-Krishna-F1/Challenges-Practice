The app contains only a textview and a function similar to previous function 
but if you observe code we can see the function changes the ui of the app
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/86fbda22-e361-4108-8511-3103e38fe1e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTQNVN4B%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T045910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4fjf0If2WqPpS7sCGNZuL50jahmrTkuPZKdJDlfNz9QIhAOJ53LjsIGGQnsgMYlT0xuDvXsrT4cSd1PTO4qPXvsMkKv8DCHYQABoMNjM3NDIzMTgzODA1IgwAZwsi0Wj9F9IEPNAq3AM4f9H099H1w98L4aVBm%2BXPVTixkA%2FvK7S3T5zXX21%2BEb0pXzq0laPfL%2FDHN0IyoBWwrQKFT8n4%2FiO9JvqE72JKb%2FkwuNDxwnWDqiBBLgS%2B%2BELrEEBkjiawzloyDjt9YLUActo7lFqG6jvs%2BYYZ5LRHBoVg6nJmBc95TALgVQQMH7PH%2FuganDynagXml%2Byh15nnqJW352AYAPLhepTGcWbBDsQ%2B8UiXvm32E4%2BjsAK%2FO5ykdCRZsIGBcwk2PU78O%2B7LAJoGyolRaVBDdWc%2BPkf%2FaTwh4DTPWtfg1yIl00H0LDjMfij4oSVvZmLlg2O0NtwO7%2FMhg6cb22YoyO7olX4gg1Kl2cPIj7w2cZpNUD4ouIxhEigN4d9lhSRGE4ulKonx4SKuQheSQSmGSlBu8dLxeyt8H9LtvQSuG6MmbeQeRkhHIuRc6FM3CqcEgC13gcC%2B7Gz6zHQ0vM8Q9CK%2BDvl9xFHk9Xb4ddBzmnrVIhZJqaui0yOy5z9EzpP5l4uWJjBqybX43BSEHhRHrrdIQxRgNF4pcFL4Xy0XztCbA%2BntCeh9nKHGwqBcTtPIMMmdkhasuzdp%2FG4Ai8AatMnG1AdUOum%2FFM%2BQnv1THE9ENWUQBwL5aRLju6t5bnQZhjDy5avPBjqkAZ%2FqOAohmGvmlLYFteojPusOCrSJ2ngNIZC6dPxJq%2Bva2x%2FC8%2B9byWszItQwbgDFYuknk8ir63Dc77FjvnCiqXu6DjRjRTI6qeFAT%2BRQIrveBolRnL6sb18ZNn8bB3L3ofYHuvlVcl0jz4jcuoocSbK4aBAqMkdzaSNlx9XXAI7zCuunh3JRK7vMgLw1W4S85Lla6OAlbmORvJOQ0Q1YbFwbW9dp&X-Amz-Signature=0f31d0399401e3c02a2274d59439e9408c3b374bb5cc83702e325365745f606b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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