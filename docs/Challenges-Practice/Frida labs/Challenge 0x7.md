<empty-block/>
The challenge is similar 0x6 but this time we have to pass the required values to get the flag as arguments of a function
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/14ee3c46-3d8d-492f-ae9c-bb0d807a780e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763TYCSL%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCMQ47Puv2iiyowwTPjRDVb7CRz8GhFhk28bC672GqmNQIgOm9wtcYrhd%2BdyySMQGwo%2By2jl4z0um%2Be%2FxEtytZItsIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHcnqwih5vtTjr4EdCrcA0w%2FeD2inAjnyCW6KfuNl517hGLkf3Gy6wl6AoN9bPrEIN%2FjyEhXYhXeLXEnSML4Hm7hgQA4%2BpteIYocBmVYryN3uFu3tbPQHQvMzoDwoq6HD2w0FMkVwKQ1%2F98YxeQtSEIvqju69nQkyso5bzs8oSQ0OC7F%2BpmCAs%2F5Ytxt%2Bst0QtrZXX7prayLHuOdf6YAT%2F6PcTaW7O7T69CSthoMDxSFo9WQQUxZlSEVhOFiwsov4SbI5HWZvsFNlxKC%2BRQtATkQx46naWaEe0eMc0jqzSgODfLsn3I9sFUS2898%2FvwRyXBKhcHDl0yohTJl5leeI7UfK19qrKpBsAlZx0Ua7fKw0BPdCpbRawUH%2BkwRiMsIdzD94TN6N%2FY8loAG3o250eI1kkttVumJa4XnwInyrk0WGbfMMf6QZZ5pugb3S80B1ZRb90hY%2F7iQy7zALAmuhDvZHdQJhsS5xOaNklORKBzXJQ8qGPnRY5buV9xlOf7YqVi9F71JJiFFrNzdqPteqFTRlJGPvKsJSjxFfHHZaQ2A2Nusw1TReI71dJKAAJfJ9JGuxUl7YYCb6Qjp7Pwqyz8oBg9oF1Msc0Dax7YvwSCkx198Igc6odgORfxjo18JQIUgW6HUPGy3GCfbMPj4ns8GOqUBU7JJztUv7xo2ImFCGFY4Oz8vfkGSyU46EwvfOH0DJxeGhflb2BLzj7sFPbFKw1LgxsQwlhW9dVhWZu34hVxTK8jpTLyohRcKcFslp%2Bc00YA3fO3jDo6YMaHV27l0B%2B9geLpyOaaZShA1W63ijWGcifUKT8EdvSv0NHxIzXZChnvlaCCKZbaUmcdme2BU1SJZBV9txfUeBwQKAZ5t4UDhPqQaYmfc&X-Amz-Signature=b3c33080e017c242bcc5bae155b3cf127b667fa6dd6f4b77abb57e07a1b4f227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
checker class
![](https://prod-files-secure.s3.us-west-2.amazonaws.com/51dfded5-2eb3-8139-90b1-0003750a523f/72855c78-ef38-4506-827e-e98e4d9b96cf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466763TYCSL%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T184523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCMQ47Puv2iiyowwTPjRDVb7CRz8GhFhk28bC672GqmNQIgOm9wtcYrhd%2BdyySMQGwo%2By2jl4z0um%2Be%2FxEtytZItsIq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHcnqwih5vtTjr4EdCrcA0w%2FeD2inAjnyCW6KfuNl517hGLkf3Gy6wl6AoN9bPrEIN%2FjyEhXYhXeLXEnSML4Hm7hgQA4%2BpteIYocBmVYryN3uFu3tbPQHQvMzoDwoq6HD2w0FMkVwKQ1%2F98YxeQtSEIvqju69nQkyso5bzs8oSQ0OC7F%2BpmCAs%2F5Ytxt%2Bst0QtrZXX7prayLHuOdf6YAT%2F6PcTaW7O7T69CSthoMDxSFo9WQQUxZlSEVhOFiwsov4SbI5HWZvsFNlxKC%2BRQtATkQx46naWaEe0eMc0jqzSgODfLsn3I9sFUS2898%2FvwRyXBKhcHDl0yohTJl5leeI7UfK19qrKpBsAlZx0Ua7fKw0BPdCpbRawUH%2BkwRiMsIdzD94TN6N%2FY8loAG3o250eI1kkttVumJa4XnwInyrk0WGbfMMf6QZZ5pugb3S80B1ZRb90hY%2F7iQy7zALAmuhDvZHdQJhsS5xOaNklORKBzXJQ8qGPnRY5buV9xlOf7YqVi9F71JJiFFrNzdqPteqFTRlJGPvKsJSjxFfHHZaQ2A2Nusw1TReI71dJKAAJfJ9JGuxUl7YYCb6Qjp7Pwqyz8oBg9oF1Msc0Dax7YvwSCkx198Igc6odgORfxjo18JQIUgW6HUPGy3GCfbMPj4ns8GOqUBU7JJztUv7xo2ImFCGFY4Oz8vfkGSyU46EwvfOH0DJxeGhflb2BLzj7sFPbFKw1LgxsQwlhW9dVhWZu34hVxTK8jpTLyohRcKcFslp%2Bc00YA3fO3jDo6YMaHV27l0B%2B9geLpyOaaZShA1W63ijWGcifUKT8EdvSv0NHxIzXZChnvlaCCKZbaUmcdme2BU1SJZBV9txfUeBwQKAZ5t4UDhPqQaYmfc&X-Amz-Signature=fa36414b8ebd065b93d24461222156df7f285452cbf9f430268390f48479c85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
There are 2 methods to solve this challenge
### Method1:- passing the required arguments
```javascript
Java.performNow(function() {
  Java.choose('com.ad2001.frida0x7.MainActivity', {
    onMatch: function(instance) {
    console.log("Instance found");
    var checker = Java.use("com.ad2001.frida0x7.Checker");
    var checker_obj  = checker.$new(600, 600);
    instance.flag(checker_obj);
  },
    onComplete: function() {}
  });
});
```
### Method2:- Hooking the constructor class
<empty-block/>