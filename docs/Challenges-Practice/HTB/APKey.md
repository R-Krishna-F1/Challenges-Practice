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
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/cfc35fd0-3f71-47ac-980c-5e995206d102/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IT6SY7D%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCAxLFfpnYVv9DxVB5iaHEJoZb%2BP4%2BqMecYr%2FM0EEQ%2FtQIhAOlmfDWEYBO1IGgH9hXGc46DUhMc%2FXZ4e7UfWSs%2BOq%2BmKv8DCEQQABoMNjM3NDIzMTgzODA1IgxQrjQu16x%2B8%2BIN5i4q3AOPd1OkX%2Fv21M4vxcTwzrPAB8y2ZUDbybrKXC%2BUr1%2FwVQkdm7tUqrbZPZEau68QfKiOhauLOkArBEtiFRJq5Bz%2Fyes%2BBw1gcfMWVtd6zZS75jsC5aDsnfnYw5m%2B%2BWhmoCVgNU1yh903jlX2mBvTi1vABhEYtVRjH8rmWYPkEpkTsV5qR9kYEZ5%2FiqqmQyAEtS1FC7SjkIJyWsVbBh0CQIHqDHjKKqxyRTAev%2FJBYf3CL6GVHfHLMTsm1ZV%2FVnFO7K6rBELgWSzngpwbmW3jcOQM01DYx3alyEJQ3MfUT3FxgICmfPmmAAsIBnE%2FYoJeEAMN212RKE4ssnP5hi68a5ELPyxED1qbEPyJaNGCDddLN3EirBbo7gPW0p33rbtlZEqN0J4UCODyXQ4ZT5rF5bxFaOQUSwS%2Fwja8rOEULZJ45Y1Tt9KD5s7fq5UJHeU8H4O32uI%2BKt8U%2FaWKe%2BlTV6AKElgyPT3tjFycXxB0wVis%2FgEbf9ozwboXqzKOhS5DmUWyooiE%2BfP2IX7QbBiFuEoq0VT0xAsLMWoSwKNfRbPvmpvl%2BlXCNjupP9iCuLWcklBAlu6kE%2FjlzXFD4zw%2F8u3aRGi8fcOfb6tkZylej1vlbL4jlNQW9PxGIVXMmTCd%2BaDPBjqkAZu6SRaY%2FjKzw5FnkWsNxv6oL0X5PHmg8TNEkLnidE1Yj7oOVRuGNp6UqxGpm29aas5idZEsR1rw%2FllGmNDElCnm7uoRu7i2qMkHQo%2Fh4Qz8Q5BlmpMZCSm6NxF82ZYvzH8Bg36qfM7AqLNNQo%2BnyOGe2%2F3Ws7ibw9SY8GS48j2YUe1tfKPFFxcSZqrRz804iyu9p0730eZPNYKFOGK6wIwSIYfz&X-Amz-Signature=429ed90a7a9274583d4dd322f6ce6871132aeff040b2663740c2c8721fdcf3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
the jadx is
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/ec28e2ab-4e45-43d3-8caf-94a8c14de4b6/Screenshot_From_2026-04-12_16-14-40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IT6SY7D%2F20260422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260422T044913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCAxLFfpnYVv9DxVB5iaHEJoZb%2BP4%2BqMecYr%2FM0EEQ%2FtQIhAOlmfDWEYBO1IGgH9hXGc46DUhMc%2FXZ4e7UfWSs%2BOq%2BmKv8DCEQQABoMNjM3NDIzMTgzODA1IgxQrjQu16x%2B8%2BIN5i4q3AOPd1OkX%2Fv21M4vxcTwzrPAB8y2ZUDbybrKXC%2BUr1%2FwVQkdm7tUqrbZPZEau68QfKiOhauLOkArBEtiFRJq5Bz%2Fyes%2BBw1gcfMWVtd6zZS75jsC5aDsnfnYw5m%2B%2BWhmoCVgNU1yh903jlX2mBvTi1vABhEYtVRjH8rmWYPkEpkTsV5qR9kYEZ5%2FiqqmQyAEtS1FC7SjkIJyWsVbBh0CQIHqDHjKKqxyRTAev%2FJBYf3CL6GVHfHLMTsm1ZV%2FVnFO7K6rBELgWSzngpwbmW3jcOQM01DYx3alyEJQ3MfUT3FxgICmfPmmAAsIBnE%2FYoJeEAMN212RKE4ssnP5hi68a5ELPyxED1qbEPyJaNGCDddLN3EirBbo7gPW0p33rbtlZEqN0J4UCODyXQ4ZT5rF5bxFaOQUSwS%2Fwja8rOEULZJ45Y1Tt9KD5s7fq5UJHeU8H4O32uI%2BKt8U%2FaWKe%2BlTV6AKElgyPT3tjFycXxB0wVis%2FgEbf9ozwboXqzKOhS5DmUWyooiE%2BfP2IX7QbBiFuEoq0VT0xAsLMWoSwKNfRbPvmpvl%2BlXCNjupP9iCuLWcklBAlu6kE%2FjlzXFD4zw%2F8u3aRGi8fcOfb6tkZylej1vlbL4jlNQW9PxGIVXMmTCd%2BaDPBjqkAZu6SRaY%2FjKzw5FnkWsNxv6oL0X5PHmg8TNEkLnidE1Yj7oOVRuGNp6UqxGpm29aas5idZEsR1rw%2FllGmNDElCnm7uoRu7i2qMkHQo%2Fh4Qz8Q5BlmpMZCSm6NxF82ZYvzH8Bg36qfM7AqLNNQo%2BnyOGe2%2F3Ws7ibw9SY8GS48j2YUe1tfKPFFxcSZqrRz804iyu9p0730eZPNYKFOGK6wIwSIYfz&X-Amz-Signature=7bb132c45581650f91a99d4886eae4e9d4c93a6777e0954f9eabb998ad73d1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
<empty-block/>