If we look at the app it asks for a username and password if we look at jadx the username is admin and the password is a md5 hash there is no way to decrypt a hash so we will use frida we start the frida server and launch frida and paste our script in frida repl
the script is
```javascript
Java.perform(function() {
    var String = Java.use('java.lang.String');
    String.equals.overload('java.lang.Object').implementation = function(other) {
        try {
            if (other.toString() === 'a2a3d412e92d896134d9c9126d756f') {
                console.log('[*] Bypassed!');
                return true;
            }
        } catch(e) {
            // ignore
        }
        return this.equals(other);
    };
    console.log('[*] Hook ready, now enter admin + any password');
});
```
so when you run the script we get the flag as a toast message
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/cfc35fd0-3f71-47ac-980c-5e995206d102/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIKEUFP%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCiuAfFnp2Ns4HToXBCsppbkbDXwqU2FcX4G7DvpwTKaQIhAMfaVRaoY93o8djgN1QrS0LLy%2BfC%2BGyF2uGXOeXHxChEKv8DCDsQABoMNjM3NDIzMTgzODA1IgwYF%2B6Dus7FguBt1sYq3AMCUhJaoG2mkbHI%2BdtgLITh4WHrHpqfXqE1%2BBt%2BVdzfiawubO%2FxBLF3jZfVoChPpPNoRH6k5ILDMQceK%2FJ%2Bsn76zyN9wyPgUQaoF9bPG5DjCT4H8rAXi%2Fjl9IJDLGZjSo4highLqAAFTaTXo9d5nP7wyS65UmbyxDSJuc5hyLuBXbljd9epFS3x1YFBSqEJkZAZnzhRwCrZaPDJPozTfn154pwJxw5BgosdlfrA1fTP7%2F42TpBAL5zBdnegeCxFSbYuLYq%2BNyfGFTqfNHiYRsh8UGsExdtlvar22dkqr1AxLO2q8C33H1LaAEXLJwGikE8g7JeeI52l1cNZ3QG4qPjo%2FnkJSHJoGNyXSbaQggPYISgSiWEbwJfm9bW5KUpMZ4qDL62l5c6EZspq3vTNmmGGVH6p%2BC29hhmBhvkr1%2B5euh%2F0rrahW7YF%2BwTUBhMaim0IA6vHRxAHkm9ij%2FkvvxYn4JNePg0Zh%2F3yoHrxsvqowqeojuiyQExKlGwUibzDs%2FaY%2Fum1VPHxX8Ah2S%2BHG9W3WpELdGJn%2F8pNJAVKnyXKNwJSJ7I8eMc8a3PZjloqBptv8jM2AIGsr9LVoGCs%2BNqSNaVm6I1izA7tozQBPfDtNHChazlq777SrP7PKDCf%2BJ7PBjqkASmkUOxSmKa%2BnNWa9i%2FqoSNh7pAoSOG%2B9UIw53ID8COtOXHa%2BkWfiJNYiEdHy%2B5jeoFbKPogEjsZeIo3uqY76%2Bcad8Q8oH5k5idKUpgj0E4%2BApBN5E8nbvQTF85MOk6O10cFKudh%2FuV1RbpUlQo%2Fs2a0ef9diIGlfCA48WweQU%2BPV5XnQwKFgxrSqppptZYuvjdCK6DPJvAPWm3EVBMX08oCvc0f&X-Amz-Signature=e1111e2fa1875193f1f7c7779133b0fdd57e775fd9ad0ee9954054e3f07052f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the jadx is
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ec28e2ab-4e45-43d3-8caf-94a8c14de4b6/Screenshot_From_2026-04-12_16-14-40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIKEUFP%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCiuAfFnp2Ns4HToXBCsppbkbDXwqU2FcX4G7DvpwTKaQIhAMfaVRaoY93o8djgN1QrS0LLy%2BfC%2BGyF2uGXOeXHxChEKv8DCDsQABoMNjM3NDIzMTgzODA1IgwYF%2B6Dus7FguBt1sYq3AMCUhJaoG2mkbHI%2BdtgLITh4WHrHpqfXqE1%2BBt%2BVdzfiawubO%2FxBLF3jZfVoChPpPNoRH6k5ILDMQceK%2FJ%2Bsn76zyN9wyPgUQaoF9bPG5DjCT4H8rAXi%2Fjl9IJDLGZjSo4highLqAAFTaTXo9d5nP7wyS65UmbyxDSJuc5hyLuBXbljd9epFS3x1YFBSqEJkZAZnzhRwCrZaPDJPozTfn154pwJxw5BgosdlfrA1fTP7%2F42TpBAL5zBdnegeCxFSbYuLYq%2BNyfGFTqfNHiYRsh8UGsExdtlvar22dkqr1AxLO2q8C33H1LaAEXLJwGikE8g7JeeI52l1cNZ3QG4qPjo%2FnkJSHJoGNyXSbaQggPYISgSiWEbwJfm9bW5KUpMZ4qDL62l5c6EZspq3vTNmmGGVH6p%2BC29hhmBhvkr1%2B5euh%2F0rrahW7YF%2BwTUBhMaim0IA6vHRxAHkm9ij%2FkvvxYn4JNePg0Zh%2F3yoHrxsvqowqeojuiyQExKlGwUibzDs%2FaY%2Fum1VPHxX8Ah2S%2BHG9W3WpELdGJn%2F8pNJAVKnyXKNwJSJ7I8eMc8a3PZjloqBptv8jM2AIGsr9LVoGCs%2BNqSNaVm6I1izA7tozQBPfDtNHChazlq777SrP7PKDCf%2BJ7PBjqkASmkUOxSmKa%2BnNWa9i%2FqoSNh7pAoSOG%2B9UIw53ID8COtOXHa%2BkWfiJNYiEdHy%2B5jeoFbKPogEjsZeIo3uqY76%2Bcad8Q8oH5k5idKUpgj0E4%2BApBN5E8nbvQTF85MOk6O10cFKudh%2FuV1RbpUlQo%2Fs2a0ef9diIGlfCA48WweQU%2BPV5XnQwKFgxrSqppptZYuvjdCK6DPJvAPWm3EVBMX08oCvc0f&X-Amz-Signature=bfe0f18ee4ede35199f277a0119d10d0c2f0964fd04bef9f907ba8f3168690f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>